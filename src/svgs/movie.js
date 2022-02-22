// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const { width, height, color } = props;

  const xml = `

  <svg width="${width}" height="${height}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.0358 2.8877H4.39582C3.19184 2.8877 2.21582 3.86371 2.21582 5.0677V20.7077C2.21582 21.9117 3.19184 22.8877 4.39582 22.8877H20.0358C21.2398 22.8877 22.2158 21.9117 22.2158 20.7077V5.0677C22.2158 3.86371 21.2398 2.8877 20.0358 2.8877Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.21582 2.8877V22.8877" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.2158 2.8877V22.8877" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.21582 12.8877H22.2158" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.21582 7.8877H7.21582" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.21582 17.8877H7.21582" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.2158 17.8877H22.2158" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.2158 7.8877H22.2158" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
