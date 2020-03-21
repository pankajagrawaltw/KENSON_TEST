import React from 'react';
import './styles.css';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import SimpleTable from '../Table';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_USER, GET_USERS } from '../../Queries';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';

export const DisplayFormikState = ({ getAllUsers }) => (
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem'
      }}
    >
      <SimpleTable getAllUsers={getAllUsers} />
    </pre>
  </div>
);

const MyForm = props => {
  const [AddUsers, { data }] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }]
  });
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const getAllUsers = useQuery(GET_USERS);
  console.log('kkkdewrfjewfklhewfklwhfhfhkkkk', getAllUsers.data);

  return (
    <div id="customerForm">
      <h3>ADD HUMAN</h3>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          address: '',
          zip_code: ''
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('First name is required.'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
          zip_code: Yup.string()
            .min(6, 'Invalid zip code')
            .required('Zip code is required!'),
          phone: Yup.string()
            .matches(phoneRegExp, 'Invalid Phone number is not valid')
            .required('Phone Number is required!'),
          address: Yup.string().required('Address is required!')
        })}
        onSubmit={(fields, { resetForm }) => {
          AddUsers({
            variables: fields
          });
          resetForm();
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <Field
              label="Name"
              name="name"
              type="text"
              component={TextField}
              margin="none"
              variant="outlined"
              fullWidth
            />
            <Field
              label="Email"
              name="email"
              type="text"
              component={TextField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <Field
              label="Address"
              name="address"
              type="text"
              component={TextField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <Field
              label="Zip Code"
              name="zip_code"
              type="number"
              component={TextField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <Field
              label="Phone Number"
              name="phone"
              type="number"
              component={TextField}
              margin="normal"
              variant="outlined"
              fullWidth
            />{' '}
            <Button type="submit" variant="outlined" color="primary">
              Submit
            </Button>
            <Button type="reset" variant="outlined" color="secondary">
              Reset
            </Button>
          </Form>
        )}
      ></Formik>
      <DisplayFormikState getAllUsers={getAllUsers} />
    </div>
  );
};

export const MyEnhancedForm = MyForm;
