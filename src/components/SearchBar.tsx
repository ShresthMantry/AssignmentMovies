import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
};

const SearchBar = ({ value, onChangeText, onSubmitEditing }: SearchBarProps) => (
  <TextInput
    style={styles.input}
    placeholder="Search movies..."
    value={value}
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default SearchBar;