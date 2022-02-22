import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const { width, height } = props;

  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

  return (
    <View>
      <SvgXml xml={xml} width={width} height={height} />
    </View>
  );
};

export default Svg;
