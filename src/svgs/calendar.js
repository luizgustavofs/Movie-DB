import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const { width, height, color } = props;

  const xml = `

  <svg width="${width}" height="${height}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.781 4.01392H5.78101C4.67644 4.01392 3.78101 4.90935 3.78101 6.01392V20.0139C3.78101 21.1185 4.67644 22.0139 5.78101 22.0139H19.781C20.8856 22.0139 21.781 21.1185 21.781 20.0139V6.01392C21.781 4.90935 20.8856 4.01392 19.781 4.01392Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.781 2.01392V6.01392" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.78101 2.01392V6.01392" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.78101 10.0139H21.781" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return (
    <View>
      <SvgXml xml={xml} width={width || 25} height={height || 25} />
    </View>
  );
};

Svg.defaultProps = {
  color: undefined,
  width: undefined,
  height: undefined,
};

Svg.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Svg;
