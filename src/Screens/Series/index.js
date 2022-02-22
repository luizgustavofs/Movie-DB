import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Carrousel from '../../../components/Carrousel';
import List from '../../../components/List';
import { getData } from '../../service/data';

import { Container, IconHome } from './styles';

const Series = () => {

  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);

  const imagePath = "https://image.tmdb.org/t/p/w500"

  const fetchSeries = () => {
    
    // getData(setPopular, 'tv/popular')
    getData(setLatest, 'tv/latest')
    // getData(setTopRated, 'tv/top_rated')
    // getData(setOnTheAir, 'tv/on_the_air')

  }

  // useEffect(fetchSeries);

  return (
  <Container>
    <LinearGradient colors={['#000', 'transparent']} style={{width: '100%', height: 160, position: 'absolute', zIndex: 1}}/>
    <TouchableOpacity style={{position: 'absolute', zIndex: 3}}>
      <IconHome/>
    </TouchableOpacity>
    <Carrousel data={popular} imagePath={imagePath}/>
    <List title="Popular" movieList={popular}/>
    <List title="Melhores Notas" movieList={topRated}/>
    <List title="Ao vivo" movieList={onTheAir}/>
  </Container>
  );
}

export default Series;