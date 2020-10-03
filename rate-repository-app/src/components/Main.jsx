import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Link, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar>
        <Link to="/">
          <AppBarTab tabName="Repositories" />
        </Link>
        <Link to="/signin" activeOpacity={0.8}>
          <AppBarTab tabName="Sign in" />
        </Link>
      </AppBar>

      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route exact path="/" component={RepositoryList} />
      </Switch>
    </View>
  );
};

export default Main;
