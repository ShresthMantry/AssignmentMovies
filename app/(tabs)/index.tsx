import React, { useState } from "react";
import { View, FlatList, StyleSheet, RefreshControl } from "react-native";

import SearchBar from "../../src/components/SearchBar";
import Card from "../../src/components/Card";
import LoadingIndicator from "../../src/components/LoadingIndicator";
import { searchMovies } from "../../src/api/openLibrary";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<
    { title: string; author_name?: string[]; key: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await handleSearch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        {loading ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                author={item.author_name ? item.author_name[0] : "Unknown"}
              />
            )}
            keyExtractor={(item) => item.key}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
});
