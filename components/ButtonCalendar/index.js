import React from 'react';

import { 
  Container,
  PosterView,
  PosterImage,
  TitleMovieView,
  TitleMovies,
  SynopsisView,
  Synopsis,
  Movie, 
} from './styles';

const ButtonCalendar = ({title, movieList, synopsis}) => {

  const imagePath = "https://image.tmdb.org/t/p/w500"

  return (
    <Container>
        <PosterView>
          {movieList?.map((movie) => 
            <Movie>
              <PosterImage source={{uri: `${imagePath}${movie?.backdrop_path}`}}/>
            </Movie>
          )}
        </PosterView> 
        <TitleMovieView>
          <TitleMovies>{title}</TitleMovies>
        </TitleMovieView>
        <SynopsisView>
          <Synopsis>{synopsis}</Synopsis>
        </SynopsisView>
      </Container>
  );
}

export default ButtonCalendar;