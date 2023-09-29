import { Appbar,Text, Card,} from 'react-native-paper';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet,Image,ScrollView } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import MovieCard from '../components/MovieCard';

const HomeScreen = () => {
    const carouselData = [
        {
          image: require('../assets/bg_romancham.jpg'), 
          text: 'Malayalam . Comedy',
          onPress: () => {
            // Handle button 
          },
        },
        {
          image: require('../assets/Brahmastra.jpg'),
          text: 'Hindi . Mythology',
          onPress: () => {
            // Handle button 
          },
        },
        {
            image: require('../assets/Hridayam.webp'), 
            text: 'Malayalam . Comedy',
            onPress: () => {
              // Handle button 
            },
          },
    ];
    const movies = [
      {
        poster: 'https://m.media-amazon.com/images/M/MV5BZWQ3ZjMwNzItMzM2OC00ZTI1LWJjMTgtYjk5ZWNjM2VmMmQxXkEyXkFqcGdeQXVyMTU2NzMzMDE1._V1_.jpg',
      },
      {
        poster: 'https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/09/Athidhi-Web-Series-Review-Rating..jpg',
      },
      {
        poster: 'https://m.media-amazon.com/images/M/MV5BMGNhZDczNTUtOWEzZS00ZjEyLTkzODQtOGM1MTZiMGY2ODIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
      },
      {
        poster: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C070AC962711EF5FEB7C472F9EBAABB23F24484DAE3A3AEDE6813D92C9698008/scale?width=506&aspectRatio=2.00&format=jpeg',
      },
    ];
    const handleMoviePress = (movie) => {
      // when user clikcs on card
    };
    const popularmovies = [
      {
        poster: 'https://img.jagrantv.com/webstories/ws3614/1680864624-11.jpg',
      },
      {
        poster: 'https://www.themoviedb.org/t/p/w500/sDTX1bBddpBQdMBId715brGYIua.jpg',
      },
      {
        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/The_Warrior_%28Indian_Film%29.jpg',
      },
      {
        poster: 'https://m.media-amazon.com/images/M/MV5BYjA5ZjEzNTEtMGFjYi00ZGM4LWIzYTEtMzlkNmE5NzhmNWIyXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg',
      },
    ];
    const handlePopularMoviePress = (movie) => {
      // when user clikcs on card
    };
  return (
    <ScrollView>
        <Appbar.Header 
         style={styles.header}
        >
          <Image
              source={require('../assets/White-Logo.png')} 
              style={styles.icon}
          />
        </Appbar.Header>
        <CarouselComponent data={carouselData} />
        <Text variant="titleLarge" style={{backgroundColor:'black', color:'white'}}>Latest Releases</Text>
        <View style={styles.container}>
          <ScrollView horizontal>
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                poster={movie.poster}
                onPress={() => handleMoviePress(movie)} // Handle click event
              />
            ))}
          </ScrollView>
          <Text></Text>
          <Text variant="titleLarge" style={{backgroundColor:'black', color:'white'}}>Popular Movies</Text>
          <ScrollView horizontal>
            {popularmovies.map((movie, index) => (
              <MovieCard
                key={index}
                poster={movie.poster}
                onPress={() => handlePopularMoviePress(movie)} // Handle click event
              />
            ))}
          </ScrollView>
        </View>
        <StatusBar style="light" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'center',
    backgroundColor: 'black',

  },
  text: {
    fontSize: 20,
    color: 'white', 
  },
  icon: {
    width: 70,
    height: 60,
  },
  header: {
    backgroundColor: 'black', // Set the background color to transparent
  },
});

export default HomeScreen;
