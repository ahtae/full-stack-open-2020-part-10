import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    margin: 15,
    borderRadius: 5,
  },
  buttonText: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textPrimary,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
