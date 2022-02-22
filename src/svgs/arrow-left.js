import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const { width, height } = props;

  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.292 12.5408H5.29198" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.292 19.5408L5.29198 12.5408L12.292 5.54077" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

  return (
    <View>
      <SvgXml xml={xml} width={width} height={height} />
    </View>
  );
};

export default Svg;
