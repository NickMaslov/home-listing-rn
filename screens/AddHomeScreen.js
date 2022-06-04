import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import * as houseAction from '../redux/actions/houseAction';

const formSchema = yup.object({
  title: yup.string().required().min(3).max(50),
  price: yup.number().required(),
  yearBuilt: yup.number().required(),
  image: yup.string().required(),
  address: yup.string().required().min(10).max(50),
  description: yup.string().required().min(10),
  homeType: yup.string().required(),
});

const AddHomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Formik
          initialValues={{
            title: '',
            image: '',
            homeType: '',
            price: '',
            yearBuilt: '',
            address: '',
            description: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            setIsLoading(true);
            dispatch(houseAction.createHome(values))
              .then(() => {
                setIsLoading(false);
                Alert.alert('Created Successfully');
              })
              .catch(() => {
                setIsLoading(false);
                Alert.alert('An error occurred. Try Again', [{ text: 'OK' }]);
              });
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
          }) => (
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
                <Text style={styles.error}>
                  {touched.title && errors.title}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('image')}
                  onBlur={handleBlur('image')}
                  value={values.image}
                />
                <Text style={styles.error}>
                  {touched.image && errors.image}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Home Type</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('homeType')}
                  onBlur={handleBlur('homeType')}
                  value={values.homeType}
                />
                <Text style={styles.error}>
                  {touched.homeType && errors.homeType}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Price</Text>
                <TextInput
                  style={styles.input}
                  keyboardType='numeric'
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  value={values.price}
                />
                <Text style={styles.error}>
                  {touched.price && errors.price}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Year Built</Text>
                <TextInput
                  style={styles.input}
                  keyboardType='numeric'
                  onBlur={handleBlur('yearBuilt')}
                  onChangeText={handleChange('yearBuilt')}
                  value={values.yearBuilt}
                />
                <Text style={styles.error}>
                  {touched.yearBuilt && errors.yearBuilt}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  multiline
                  onBlur={handleBlur('address')}
                  onChangeText={handleChange('address')}
                  value={values.address}
                />
                <Text style={styles.error}>
                  {touched.address && errors.address}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.input}
                  multiline
                  onBlur={handleBlur('description')}
                  onChangeText={handleChange('description')}
                  value={values.description}
                />
                <Text style={styles.error}>
                  {touched.description && errors.description}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button title='Add Home' onPress={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  formGroup: {
    width: '100%',
  },
  label: {
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  error: {
    color: 'red',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddHomeScreen;
