import React from 'react';
import { View } from 'react-native';
import { SearchIcon } from '../../src/svgs';

import { 
  Container,
  TitleView,
  Title,
  InputView,
  IconSearch,
  TextInput,
  LoadingIcon,
  MoviesView,
  PosterMovie,
  TitleMovie,
 
} from './styles';

const SearchMovie = () => {
  return (
    <Container>
      <TitleView>
        <Title>Encontre seu filme</Title>
      </TitleView>
      <InputView>
      <SearchIcon
              height={30}
              width={30}
              color={"#AEAEBA"}
            />
        <TextInput/>
        <LoadingIcon/>
      </InputView>
      <MoviesView>
        <PosterMovie/>
        <TitleMovie>TESTE</TitleMovie>
      </MoviesView>
    </Container>
  );
}

export default SearchMovie;