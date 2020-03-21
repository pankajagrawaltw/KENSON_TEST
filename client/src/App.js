import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, VIEW_USERS } from './Queries';
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';
import { render } from 'react-dom';
import { MyEnhancedForm } from './Components/Form';

const App = () => (
  <div className="app">
    <MyEnhancedForm
      user={{
        email: '',
        firstName: '',
        lastName: '',
        zip_code: '',
        address: '',
        phone: ''
      }}
    />
  </div>
);
export default App;
