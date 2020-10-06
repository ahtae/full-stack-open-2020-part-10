import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
    marginLeft: 15,
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View>
      <TextInput
        style={
          !meta.error
            ? { ...styles.textInput }
            : { ...styles.textInput, borderColor: theme.colors.error }
        }
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
