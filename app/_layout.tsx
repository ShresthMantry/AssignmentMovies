import { Stack } from 'expo-router';
import { Text , StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <>
      <Text style={styles.textStyle}>Movies Searcher</Text>
      <Stack>
        <Stack.Screen name="(tabs)/index" options={{
          headerShown: false,
        }}/>
      </Stack>
    </>
  )
}

const styles = StyleSheet.create({
  textStyle : {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign : 'center',
    paddingTop : 10
  }
});