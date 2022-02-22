import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const { width, height } = props;

  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 12H22" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

`;

  return (
    <View>
      <SvgXml xml={xml} width={width || 24} height={height || 24} />
    </View>
  );
};

export default Svg;
