import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    getUsers {
      id
      name
      phone
      email
      address
      zip_code
    }
  }
`;

export const VIEW_USERS = gql`
  query($id: Int) {
    getUserInfo(id: $id) {
      id
      name
      phone
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation(
    $name: String
    $email: String
    $phone: Int
    $address: String
    $zip_code: Int
  ) {
    createUser(
      name: $name
      email: $email
      phone: $phone
      address: $address
      zip_code: $zip_code
    )
  }
`;

export const EDIT_USER = gql`
  mutation($id: Int, $name: String, $email: String, $job_title: String) {
    updateUserInfo(id: $id, name: $name, email: $email, job_title: $job_title)
  }
`;

export const DELETE_USER = gql`
  mutation($id: Int) {
    deleteUser(id: $id)
  }
`;