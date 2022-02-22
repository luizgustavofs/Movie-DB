import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = () => {

  const xml = `
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.0428 17.7921L18.0428 12.7921L13.0428 7.79211" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

  return (
    <View>
      <SvgXml xml={xml} />
    </View>
  );
};

export default Svg;
