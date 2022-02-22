
import React, { useEffect, useState } from 'react';
import List from '../../../components/List';
import { getData } from '../../service/data';

import { 
  Container,
  Container2,
  ScrollBox,
  IconHome,
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
import { LinearGradient } from 'expo-linear-gradient';
import Carrousel from '../../../components/Carrousel';
import Carousel from 'react-native-snap-carousel';
import { Text, TouchableOpacity } from 'react-native';

const Movies = () => {

  const [discovers, setDiscovers] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [genre, setGenre] = useState([]);

  const imagePath = "https://image.tmdb.org/t/p/w500"

  const fetchMovies = () => {
    getData(setDiscovers, 'discover/movie')
    getData(setTrending, 'trending/all/day')
    getData(setUpComing, 'movie/upcoming')
    getData(setPopular, 'movie/popular')
    getData(setTopRated, 'movie/top_rated')
  }

  // useEffect(() => {fetchMovies}, [] );

  function renderItem({item}){
    return (
      <GradientBox>
        <CarouselView>
            <Image source={{uri: `${imagePath}${item.backdrop_path}`}}/>
            <TitleBox>
              <TittleMovie>{item.title}</TittleMovie>
            </TitleBox>
            <GenreBox>
              <GenreMovies>TESTE</GenreMovies>
            </GenreBox>
            <Button><Text>Assistir</Text></Button>
          <LinearGradient locations={[0.5, 1]} colors={[ '#1B1721','transparent']} style={{width: '100%', height: 190, position: 'absolute', zIndex: 1, marginTop: 270, transform:[{ rotate: '180deg'}]}}/>
        </CarouselView>
      </GradientBox>

    )
  }

  return (
    <Container>
    <LinearGradient colors={['#000', 'transparent']} style={{width: '100%', height: 160, position: 'absolute', zIndex: 1}}/>
    <TouchableOpacity style={{position: 'absolute', zIndex: 3}}>
    <IconHome/>
    </TouchableOpacity>
      <Container2>
        {/* <Carrousel 
        discovers={discovers}
        imagePath={imagePath}
        /> */}
        <Carousel 
          loop
          autoplay={true}
          autoplayDelay={100}
          layout={'default'}
          data={discovers}
          sliderWidth={400}
          itemWidth={400}
          renderItem={renderItem}
        />
        {/* {discovers.map((movie) => <Image source={{uri: `${imagePath}${movie.backdrop_path}`}}key={movie.id}></Image>)} */}
        <ScrollBox>
          <List title="Em Alta" movieList={trending} bigger/>
          <List title="Mais Populares" movieList={popular} />
          <List title="Em Breve" movieList={upComing}/>
          <List title="Melhores Notas" movieList={topRated} />
        </ScrollBox>
      </Container2>
    </Container>
  );
}

export default Movies;