import React from 'react';

import { View, Text, StatusBar } from 'react-native';

import Header from '~/components/Header';

// import { Container } from './styles';

const Repositories = () => (
  <View>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Header title="Repositórios" />
  </View>
);

export default Repositories;
