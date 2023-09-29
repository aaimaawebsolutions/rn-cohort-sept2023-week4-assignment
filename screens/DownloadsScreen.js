
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Text,Button} from 'react-native-paper';

const DownloadsScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.text}>No Downloads Available</Text>
      <Text variant="bodyMedium" style={styles.text}>
        Explore and download your favorite Movies
      </Text>
      <Text></Text>
      <Button buttonColor="white" textColor="black" mode="contained">Go to Home</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',

  },
  text: {
    color: 'white', 
  },
});

export default DownloadsScreen;
