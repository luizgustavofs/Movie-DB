import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const { width, height } = props;

  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5589 3.16888H5.55893C4.45436 3.16888 3.55893 4.06431 3.55893 5.16888V19.1689C3.55893 20.2735 4.45436 21.1689 5.55893 21.1689H19.5589C20.6635 21.1689 21.5589 20.2735 21.5589 19.1689V5.16888C21.5589 4.06431 20.6635 3.16888 19.5589 3.16888Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5589 8.16888V16.1689" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.55893 12.1689H16.5589" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

  return (
    <View>
      <SvgXml xml={xml} width={width} height={height} />
    </View>
  );
};

export default Svg;
