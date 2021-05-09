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
  user: Scalars['String'];
  body: Scalars['String'];
  mailingAddresses: Array<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String'];
  created: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Message;
  authenticate: Authenticate;
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
  users: Array<User>;
  myEmails: Array<MassEmail>;
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