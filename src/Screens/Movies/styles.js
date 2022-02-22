import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
  background: #1B1721;
`;
export const Container2 = styled.ScrollView`
  flex: 1;
  background: #1B1721;
`;

export const Image = styled.Image`
  height: 450px;
  width: 400px;
  `;

export const ScrollBox = styled.View`
  width: 100%;
`;

export const CarouselView = styled.View`
  border-radius: 8px;

  background: #fff;

  height: 450px;
  width: 400px;

  align-items: center;

`;

export const Button = styled.TouchableOpacity`
  background: #DD1B3A;

  width: 250px;
  height: 40px;

  justify-content: center;
  align-items: center;
  
  border-radius: 8px;  

  position: absolute;
  z-index: 2;

  margin-top: 380px;

`;

export const IconHome = styled(Entypo).attrs({
  name: 'open-book',
  size: 50,
  color: '#DD1B3A'
})`
  margin-top: 50px;
  margin-left: 30px;
  position: absolute;
  z-index: 2;
`;

export const GradientBox = styled.View`
  flex: 1; 
`;

export const TitleBox = styled.View`

  margin-top: 280px;

  position: absolute;
  z-index: 2;

`;

export const TittleMovie = styled.Text`
  color: #fff;

  font-weight: 700;

  font-size: 24px;

  text-align: center;

`;

export const GenreBox = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: 340px;

  position: absolute;
  z-index: 2;
  

`;

export const GenreMovies = styled.Text`
  color: #6E6D77;
  font-size: 23px;

  text-align: center;
`;