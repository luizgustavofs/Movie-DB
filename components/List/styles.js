import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 


export const Container = styled.View`
  padding: 15px;
  width: 100%;
`;

export const BoxTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-right',
  size: 28,
  color: 'red',
})`

`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;

  margin-bottom: 16px;

  color: #fff;
`;

export const BoxMovie = styled.ScrollView.attrs({
  horizontal: true,
})`
  border-radius: 8px;
`;

export const ButtonMovie = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  position: absolute;
`;

export const Movie = styled.View.attrs({
  activeOpacity: 0.7
})`
  width: ${({bigger}) => bigger ? 175 : 110}px;
  height: ${({bigger}) => bigger ? 260 : 160}px;

  background: #000;

  margin-right: 10px;

  border-radius: 8px;
`;

export const Poster = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex:1;
  border-radius: 8px;
`;

