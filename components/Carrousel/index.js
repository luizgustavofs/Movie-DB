import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

import { 
  CarouselView,
  GradientBox,
  Image,
  TitleBox,
  TittleMovie,
  GenreBox,
  GenreMovies,
  Button,
  TextButton,
} from './styles';

const Carrousel = ({discovers, imagePath}) => {

  function renderItem({item}){
    return (
      <GradientBox>
        <CarouselView>
            <Image source={{uri: `${imagePath}${item.backdrop_path}`}}/>
            <TitleBox>
              <TittleMovie>Teste</TittleMovie>
            </TitleBox>
            <GenreBox>
              <GenreMovies>TESTE</GenreMovies>
            </GenreBox>
            <Button><TextButton>Assistir</TextButton></Button>
          <LinearGradient locations={[0.5, 1]} colors={[ '#1B1721','transparent']} style={{width: '100%', height: 190, position: 'absolute', zIndex: 1, marginTop: 270, transform:[{ rotate: '180deg'}]}}/>
        </CarouselView>
      </GradientBox>

    )
  }

  return (
    <Carousel
          loop
          layout={'default'}
          data={discovers}
          sliderWidth={400}
          itemWidth={400}
          renderItem={renderItem}
        />
  )
}
export default Carrousel;