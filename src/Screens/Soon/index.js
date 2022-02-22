import React, { useEffect, useState } from 'react';
import ButtonCalendar from '../../../components/ButtonCalendar';
import { getData } from '../../service/data';

import { 
  Container,
  Title,
  Movies,
  MoviesView,
  Space,

} from './styles';

const Soon = () => {

  const [upComing, setUpComing] = useState([]);

  const fetchMovies = () => {
    getData(setUpComing, 'movie/upcoming')
  }

  // useEffect(fetchMovies);


  return (
    <Container>
      <Title>Próximos Lançamentos</Title>
      <Movies>
      <MoviesView>
        <ButtonCalendar movieList={upComing}/>
      </MoviesView>
      <Space/>
      </Movies>
    </Container>
  );
}

export default Soon;