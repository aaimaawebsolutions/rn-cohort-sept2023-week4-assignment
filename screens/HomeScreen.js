import { Appbar,Text,} from 'react-native-paper';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet,Image,ScrollView } from 'react-native';
import HomeCarousel from '../components/HomeCarousel';
import LatestRelease from '../components/LatestRealese';
import PopularMovies from '../components/PopularMovies';

const HomeScreen = () => {
  return (
    <>
      <Appbar.Header 
        style={styles.header}
      >
        <Image
          source={require('../assets/White-Logo.png')} 
          style={styles.icon}
        />
      </Appbar.Header>
      <ScrollView>
        <HomeCarousel/>
        <View style={styles.container}>
          <Text variant="titleLarge" style={styles.text}>Latest Releases</Text>
          <LatestRelease/>
          <Text></Text>
          <Text variant="titleLarge" style={styles.text}>Popular Movies</Text>
          <PopularMovies/>
        </View>
        <StatusBar style="light" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'center',
    backgroundColor: 'black',

  },
  text: {
    marginLeft:5,
    marginBottom:5,
    color: 'white', 
  },
  icon: {
    width: 70,
    height: 60,
  },
  header: {
    backgroundColor: 'black',
  },
});

export default HomeScreen;
