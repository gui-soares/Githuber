import React from 'react';
import PropTypes from 'prop-types';

import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

// import { Container } from './styles';

const Repositories = () => (
  <View>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Header title="Repositórios" />
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Repositories;
