import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 


export const Container = styled.ScrollView`
  flex: 1;
  background: #1B1721;

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
