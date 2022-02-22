import styled from 'styled-components/native';


export const Container = styled.View`
  
`;

export const Movie = styled.View`
height: 200px;
width: 100%;

border-radius: 8px;
`;

export const PosterView = styled.View``;

export const PosterImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
flex: 1;
`;

export const TitleMovieView = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;

`;

export const TitleMovies = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: #fff;

`;

export const SynopsisView = styled.View`
  margin-top: 5px;
`;

export const Synopsis = styled.Text`
  font-size: 14px;
  color: #6E6D77;

`;