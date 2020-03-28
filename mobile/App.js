import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Routes from './src/routes';

Icon.loadFont();

export default function App() {
  return <Routes />;
}
