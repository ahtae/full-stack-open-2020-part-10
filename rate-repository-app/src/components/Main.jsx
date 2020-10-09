import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Link, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const { authorizedUser } = useAuthorizedUser();

  return (
    <View style={styles.container}>
      <AppBar>
        <Link to="/">
          <AppBarTab tabName="Repositories" />
        </Link>
        {!authorizedUser ? (
          <Link to="/signin" activeOpacity={0.8}>
            <AppBarTab tabName="Sign in" />
          </Link>
        ) : (
          <Link to="/signout" activeOpacity={0.8}>
            <AppBarTab tabName="Sign out" />
          </Link>
        )}
      </AppBar>

      <Switch>
        <Route path="/signout" component={SignOut} />
        <Route path="/signin" component={SignIn} />
        <Route exact path="/" component={RepositoryList} />
      </Switch>
    </View>
  );
};

export default Main;
