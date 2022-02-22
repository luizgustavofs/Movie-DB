/* eslint-disable react/prop-types */
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

const Svg = (props) => {
  const { width, height } = props;

  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.9907 0H23.5441H28.0976L20.5215 34L15.968 36L11.4146 34L18.9907 0Z" fill="#DA1A37"/>
  <path d="M32.213 0H41.2683L35.3989 28.0976H26.3415L32.213 0Z" fill="#DA1A37"/>
  <path d="M5.87155 0H14.9268L9.05743 28.0976H0L5.87155 0Z" fill="#DA1A37"/>
  </svg>
  `;

  return (
    <View>
      <SvgXml xml={xml} width={width} height={height} />
    </View>
  );
};

export default Svg;
