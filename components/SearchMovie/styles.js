import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
  background: #1B1721;
  padding: 15px;
`;

export const TitleView = styled.View`
  margin-top: 60px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;

  color: #fff;
`;  

export const InputView = styled.View`
  background: #222030;

  padding: 10px;

  border-radius: 8px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  height: 50px;

  margin-top: 10px;
`;

export const IconSearch = styled.View`

`;

export const TextInput = styled.TextInput.attrs({
  placeholder: 'Nome do filme ou série',
  placeholderTextColor: '#AEAEBA'
})`
  margin-left: -100px;
`;

export const LoadingIcon = styled(Feather).attrs({
  name: 'loader',
  size: 30,
  color: '#AEAEBA'
})``;

export const MoviesView = styled.View`
  height: 120px;
  width: 100%;


  margin-top: 20px;

  flex-direction: row;

  align-items: center;
`;

export const PosterMovie = styled.View`
  background: red;

  height: 100px;
  width: 180px;

  border-radius: 8px;

`;

export const TitleMovie = styled.Text`
  font-size: 18px;
  font-weight: bold;

  margin-left: 15px;

  color: #fff;

`;
