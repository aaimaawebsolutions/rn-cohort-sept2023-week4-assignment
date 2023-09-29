
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

  return (
    <View style={{alignContent : 'center', alignItems:'center',backgroundColor:'black'}}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout="default"
        loop={true}
        autoplay={true}
        autoplayInterval={6000}
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
  },
  image: {
    width: 400,
    height: 200,
  },
  slideText: {
    marginBottom: 10,
    color:'white',
  },
});

export default CarouselComponent;
