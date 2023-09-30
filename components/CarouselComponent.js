import { Dimensions } from 'react-native';
import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {Text,Button} from 'react-native-paper';



const CarouselItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text variant="bodyMedium" style={styles.slideText}>{item.text}</Text>
      <Button mode="outlined" textColor="white" onPress={item.onPress}>Watch Now</Button>
    </View>
  );
};

const CarouselComponent = ({ data }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const renderItem = ({ item }) => (
    <CarouselItem item={item} />
  );
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={{alignContent : 'center', alignItems:'center',backgroundColor:'black'}}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={360}
        layout="default"
        loop={true}
        autoplay={true}
        autoplayInterval={4000}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'black',
    borderRadius: 9,
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 400,
    height: 200,
  },
  slideText: {
    marginBottom: 10,
    color:'white',
  },
  paginationContainer: {
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    flexDirection: 'row', 
    justifyContent: 'center', 
  },
  paginationDot: {
    width: 8,        
    height: 8,       
    borderRadius: 4,  
    marginHorizontal: 4, 
    backgroundColor: 'white', 
  },
});

export default CarouselComponent;
