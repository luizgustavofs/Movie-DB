import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const { width, height, color } = props;

  const xml = `

  <svg width="${width}" height="${height}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5623 19.1772C15.9805 19.1772 19.5623 15.5955 19.5623 11.1772C19.5623 6.75897 15.9805 3.17725 11.5623 3.17725C7.14398 3.17725 3.56226 6.75897 3.56226 11.1772C3.56226 15.5955 7.14398 19.1772 11.5623 19.1772Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5622 21.1771L17.2122 16.8271" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
