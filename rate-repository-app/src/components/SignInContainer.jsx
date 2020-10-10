import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required!'),
  password: yup.string().required('Password is required!'),
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.primary,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: { backgroundColor: 'white' },
});

const SignInContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput
              name="username"
              placeholder="Username"
              testID="usernameField"
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
              testID="passwordField"
            />
            <TouchableOpacity onPress={handleSubmit} testID="submitButton">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignInContainer;
