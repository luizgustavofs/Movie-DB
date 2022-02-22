import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const { width, height, color } = props;

  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.384 5.4873H4.38403C3.27946 5.4873 2.38403 6.38274 2.38403 7.4873V18.4873C2.38403 19.5919 3.27946 20.4873 4.38403 20.4873H20.384C21.4886 20.4873 22.384 19.5919 22.384 18.4873V7.4873C22.384 6.38274 21.4886 5.4873 20.384 5.4873Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2L12.5 5L9 2" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
