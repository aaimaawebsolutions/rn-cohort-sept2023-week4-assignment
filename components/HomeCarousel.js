import CarouselComponent from '../components/CarouselComponent';

export default function HomeCarousel(){
    const carouselData = [
        {
          image: require('../assets/Baahubali.jpg'), 
          text: 'Telugu . Action/War',
          videoSource: "https://www.youtube.com/watch?v=Dydmpfo68DA",
        },
        {
          image: require('../assets/Brahmastra.jpg'),
          text: 'Hindi . Mythology',
          videoSource: "https://www.youtube.com/watch?v=Dydmpfo68DA",
        },
        {
          image: require('../assets/Bheeshma.webp'), 
          text: 'Malayalam . Action/Drama',
          videoSource: "https://www.youtube.com/watch?v=Dydmpfo68DA",
        },
        {
          image: require('../assets/vikram.webp'), 
          text: 'Tamil . Action/Mystery',
          videoSource: "https://www.youtube.com/watch?v=Dydmpfo68DA",
        },
    ];
    return(
        <CarouselComponent data={carouselData} />
    );
}