import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Authenticate = {
  __typename?: 'Authenticate';
  authenticated: Scalars['Boolean'];
  message: Scalars['String'];
  token: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type MassEmail = {
  __typename?: 'MassEmail';
  id: Scalars['String'];
  userId: Scalars['String'];
  name: Scalars['String'];
  html: Scalars['String'];
  design: Scalars['String'];
  mailingAddresses: Array<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String'];
  created: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmail?: Maybe<MassEmail>;
  deleteEmail: Scalars['Boolean'];
  sendEmail: Scalars['Boolean'];
  setEmailUsers?: Maybe<MassEmail>;
  setEmailBody?: Maybe<MassEmail>;
  createUser: Message;
  authenticate: Authenticate;
};


export type MutationCreateEmailArgs = {
  name: Scalars['String'];
};


export type MutationDeleteEmailArgs = {
  id: Scalars['String'];
};


export type MutationSendEmailArgs = {
  id: Scalars['String'];
};


export type MutationSetEmailUsersArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
  mailingAddresses?: Maybe<Array<Scalars['String']>>;
};


export type MutationSetEmailBodyArgs = {
  id: Scalars['String'];
  html: Scalars['String'];
  design: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAuthenticateArgs = {
  loginOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  isAuthenticated: Scalars['Boolean'];
  myEmails: Array<MassEmail>;
  getEmail?: Maybe<MassEmail>;
};


export type QueryGetEmailArgs = {
  id: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
};

export type AuthMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthMutation = (
  { __typename?: 'Mutation' }
  & { authenticate: (
    { __typename?: 'Authenticate' }
    & Pick<Authenticate, 'authenticated' | 'message' | 'token'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'Message' }
    & Pick<Message, 'message' | 'created'>
  ) }
);

export type IsAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type IsAuthQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isAuthenticated'>
);

export type GetEmailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetEmailQuery = (
  { __typename?: 'Query' }
  & { getEmail?: Maybe<(
    { __typename?: 'MassEmail' }
    & Pick<MassEmail, 'id' | 'userId' | 'name' | 'html' | 'design'>
  )> }
);

export type SetEmailBodyMutationVariables = Exact<{
  id: Scalars['String'];
  html: Scalars['String'];
  design: Scalars['String'];
}>;


export type SetEmailBodyMutation = (
  { __typename?: 'Mutation' }
  & { setEmailBody?: Maybe<(
    { __typename?: 'MassEmail' }
    & Pick<MassEmail, 'id' | 'userId' | 'name'>
  )> }
);

export type GetEmailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmailsQuery = (
  { __typename?: 'Query' }
  & { myEmails: Array<(
    { __typename?: 'MassEmail' }
    & Pick<MassEmail, 'id' | 'name' | 'userId' | 'html' | 'mailingAddresses'>
  )> }
);

export type SetEmailAddressesMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  mailingAddresses: Array<Scalars['String']> | Scalars['String'];
}>;


export type SetEmailAddressesMutation = (
  { __typename?: 'Mutation' }
  & { setEmailUsers?: Maybe<(
    { __typename?: 'MassEmail' }
    & Pick<MassEmail, 'name'>
  )> }
);

export type CreateEmailMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateEmailMutation = (
  { __typename?: 'Mutation' }
  & { createEmail?: Maybe<(
    { __typename?: 'MassEmail' }
    & Pick<MassEmail, 'name'>
  )> }
);

export type DeleteEmailMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteEmail'>
);

export type SendEmailMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type SendEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendEmail'>
);

export type MyEmailsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyEmailsQuery = (
  { __typename?: 'Query' }
  & { myEmails: Array<(
    { __typename?: 'MassEmail' }
    & Pick<MassEmail, 'userId' | 'html' | 'mailingAddresses'>
  )> }
);


export const AuthDocument = gql`
    mutation Auth($login: String!, $password: String!) {
  authenticate(loginOrEmail: $login, password: $password) {
    authenticated
    message
    token
  }
}
    `;
export type AuthMutationFn = Apollo.MutationFunction<AuthMutation, AuthMutationVariables>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthMutation(baseOptions?: Apollo.MutationHookOptions<AuthMutation, AuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthMutation, AuthMutationVariables>(AuthDocument, options);
      }
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<AuthMutation, AuthMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $login: String!, $password: String!) {
  createUser(email: $email, login: $login, password: $password) {
    message
    created
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const IsAuthDocument = gql`
    query isAuth {
  isAuthenticated
}
    `;

/**
 * __useIsAuthQuery__
 *
 * To run a query within a React component, call `useIsAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsAuthQuery(baseOptions?: Apollo.QueryHookOptions<IsAuthQuery, IsAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsAuthQuery, IsAuthQueryVariables>(IsAuthDocument, options);
      }
export function useIsAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsAuthQuery, IsAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsAuthQuery, IsAuthQueryVariables>(IsAuthDocument, options);
        }
export type IsAuthQueryHookResult = ReturnType<typeof useIsAuthQuery>;
export type IsAuthLazyQueryHookResult = ReturnType<typeof useIsAuthLazyQuery>;
export type IsAuthQueryResult = Apollo.QueryResult<IsAuthQuery, IsAuthQueryVariables>;
export const GetEmailDocument = gql`
    query GetEmail($id: String!) {
  getEmail(id: $id) {
    id
    userId
    name
    html
    design
  }
}
    `;

/**
 * __useGetEmailQuery__
 *
 * To run a query within a React component, call `useGetEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEmailQuery(baseOptions: Apollo.QueryHookOptions<GetEmailQuery, GetEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmailQuery, GetEmailQueryVariables>(GetEmailDocument, options);
      }
export function useGetEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmailQuery, GetEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmailQuery, GetEmailQueryVariables>(GetEmailDocument, options);
        }
export type GetEmailQueryHookResult = ReturnType<typeof useGetEmailQuery>;
export type GetEmailLazyQueryHookResult = ReturnType<typeof useGetEmailLazyQuery>;
export type GetEmailQueryResult = Apollo.QueryResult<GetEmailQuery, GetEmailQueryVariables>;
export const SetEmailBodyDocument = gql`
    mutation SetEmailBody($id: String!, $html: String!, $design: String!) {
  setEmailBody(id: $id, html: $html, design: $design) {
    id
    userId
    name
  }
}
    `;
export type SetEmailBodyMutationFn = Apollo.MutationFunction<SetEmailBodyMutation, SetEmailBodyMutationVariables>;

/**
 * __useSetEmailBodyMutation__
 *
 * To run a mutation, you first call `useSetEmailBodyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetEmailBodyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setEmailBodyMutation, { data, loading, error }] = useSetEmailBodyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      html: // value for 'html'
 *      design: // value for 'design'
 *   },
 * });
 */
export function useSetEmailBodyMutation(baseOptions?: Apollo.MutationHookOptions<SetEmailBodyMutation, SetEmailBodyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetEmailBodyMutation, SetEmailBodyMutationVariables>(SetEmailBodyDocument, options);
      }
export type SetEmailBodyMutationHookResult = ReturnType<typeof useSetEmailBodyMutation>;
export type SetEmailBodyMutationResult = Apollo.MutationResult<SetEmailBodyMutation>;
export type SetEmailBodyMutationOptions = Apollo.BaseMutationOptions<SetEmailBodyMutation, SetEmailBodyMutationVariables>;
export const GetEmailsDocument = gql`
    query GetEmails {
  myEmails {
    id
    name
    userId
    html
    mailingAddresses
  }
}
    `;

/**
 * __useGetEmailsQuery__
 *
 * To run a query within a React component, call `useGetEmailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEmailsQuery(baseOptions?: Apollo.QueryHookOptions<GetEmailsQuery, GetEmailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmailsQuery, GetEmailsQueryVariables>(GetEmailsDocument, options);
      }
export function useGetEmailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmailsQuery, GetEmailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmailsQuery, GetEmailsQueryVariables>(GetEmailsDocument, options);
        }
export type GetEmailsQueryHookResult = ReturnType<typeof useGetEmailsQuery>;
export type GetEmailsLazyQueryHookResult = ReturnType<typeof useGetEmailsLazyQuery>;
export type GetEmailsQueryResult = Apollo.QueryResult<GetEmailsQuery, GetEmailsQueryVariables>;
export const SetEmailAddressesDocument = gql`
    mutation SetEmailAddresses($id: String!, $name: String!, $mailingAddresses: [String!]!) {
  setEmailUsers(id: $id, name: $name, mailingAddresses: $mailingAddresses) {
    name
  }
}
    `;
export type SetEmailAddressesMutationFn = Apollo.MutationFunction<SetEmailAddressesMutation, SetEmailAddressesMutationVariables>;

/**
 * __useSetEmailAddressesMutation__
 *
 * To run a mutation, you first call `useSetEmailAddressesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetEmailAddressesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setEmailAddressesMutation, { data, loading, error }] = useSetEmailAddressesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      mailingAddresses: // value for 'mailingAddresses'
 *   },
 * });
 */
export function useSetEmailAddressesMutation(baseOptions?: Apollo.MutationHookOptions<SetEmailAddressesMutation, SetEmailAddressesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetEmailAddressesMutation, SetEmailAddressesMutationVariables>(SetEmailAddressesDocument, options);
      }
export type SetEmailAddressesMutationHookResult = ReturnType<typeof useSetEmailAddressesMutation>;
export type SetEmailAddressesMutationResult = Apollo.MutationResult<SetEmailAddressesMutation>;
export type SetEmailAddressesMutationOptions = Apollo.BaseMutationOptions<SetEmailAddressesMutation, SetEmailAddressesMutationVariables>;
export const CreateEmailDocument = gql`
    mutation CreateEmail($name: String!) {
  createEmail(name: $name) {
    name
  }
}
    `;
export type CreateEmailMutationFn = Apollo.MutationFunction<CreateEmailMutation, CreateEmailMutationVariables>;

/**
 * __useCreateEmailMutation__
 *
 * To run a mutation, you first call `useCreateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmailMutation, { data, loading, error }] = useCreateEmailMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateEmailMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmailMutation, CreateEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmailMutation, CreateEmailMutationVariables>(CreateEmailDocument, options);
      }
export type CreateEmailMutationHookResult = ReturnType<typeof useCreateEmailMutation>;
export type CreateEmailMutationResult = Apollo.MutationResult<CreateEmailMutation>;
export type CreateEmailMutationOptions = Apollo.BaseMutationOptions<CreateEmailMutation, CreateEmailMutationVariables>;
export const DeleteEmailDocument = gql`
    mutation DeleteEmail($id: String!) {
  deleteEmail(id: $id)
}
    `;
export type DeleteEmailMutationFn = Apollo.MutationFunction<DeleteEmailMutation, DeleteEmailMutationVariables>;

/**
 * __useDeleteEmailMutation__
 *
 * To run a mutation, you first call `useDeleteEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmailMutation, { data, loading, error }] = useDeleteEmailMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEmailMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEmailMutation, DeleteEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEmailMutation, DeleteEmailMutationVariables>(DeleteEmailDocument, options);
      }
export type DeleteEmailMutationHookResult = ReturnType<typeof useDeleteEmailMutation>;
export type DeleteEmailMutationResult = Apollo.MutationResult<DeleteEmailMutation>;
export type DeleteEmailMutationOptions = Apollo.BaseMutationOptions<DeleteEmailMutation, DeleteEmailMutationVariables>;
export const SendEmailDocument = gql`
    mutation SendEmail($id: String!) {
  sendEmail(id: $id)
}
    `;
export type SendEmailMutationFn = Apollo.MutationFunction<SendEmailMutation, SendEmailMutationVariables>;

/**
 * __useSendEmailMutation__
 *
 * To run a mutation, you first call `useSendEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailMutation, { data, loading, error }] = useSendEmailMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSendEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailMutation, SendEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendEmailMutation, SendEmailMutationVariables>(SendEmailDocument, options);
      }
export type SendEmailMutationHookResult = ReturnType<typeof useSendEmailMutation>;
export type SendEmailMutationResult = Apollo.MutationResult<SendEmailMutation>;
export type SendEmailMutationOptions = Apollo.BaseMutationOptions<SendEmailMutation, SendEmailMutationVariables>;
export const MyEmailsDocument = gql`
    query MyEmails {
  myEmails {
    userId
    html
    mailingAddresses
  }
}
    `;

/**
 * __useMyEmailsQuery__
 *
 * To run a query within a React component, call `useMyEmailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyEmailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyEmailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyEmailsQuery(baseOptions?: Apollo.QueryHookOptions<MyEmailsQuery, MyEmailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyEmailsQuery, MyEmailsQueryVariables>(MyEmailsDocument, options);
      }
export function useMyEmailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyEmailsQuery, MyEmailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyEmailsQuery, MyEmailsQueryVariables>(MyEmailsDocument, options);
        }
export type MyEmailsQueryHookResult = ReturnType<typeof useMyEmailsQuery>;
export type MyEmailsLazyQueryHookResult = ReturnType<typeof useMyEmailsLazyQuery>;
export type MyEmailsQueryResult = Apollo.QueryResult<MyEmailsQuery, MyEmailsQueryVariables>;