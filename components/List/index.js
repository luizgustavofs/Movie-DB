import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  BoxTitle,
  Icon,
  Title,
  BoxMovie,
  ButtonMovie,
  Movie,
  Poster,
} from './styles';

const List = ({title, movieList, bigger }) => {

  const imagePath = "https://image.tmdb.org/t/p/w500"

  return (
    <Container>
      <BoxTitle>
        <Title>{title}</Title>
        <Icon/>
      </BoxTitle>
      <BoxMovie>
        {/* <ButtonMovie> */}
          {movieList?.map((movie) => 
          <Movie bigger={bigger}>
            <Poster source={{uri: `${imagePath}${movie?.poster_path}`}}/>
          </Movie>
          )}
        {/* </ButtonMovie> */}
      </BoxMovie>
    </Container>
  );
}



export default List;