// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseUsers extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'userPopulations', 'users'] = Object.freeze(
    ['zeroTrust', 'access', 'userPopulations', 'users'] as const,
  );

  /**
   * Creates a SCIM user in a user population.
   *
   * @example
   * ```ts
   * const user =
   *   await client.zeroTrust.access.userPopulations.users.create(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    userPopulationID: string,
    params: UserCreateParams,
    options?: RequestOptions,
  ): APIPromise<UserCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/access/user_populations/${userPopulationID}/users`, {
        body,
        ...options,
      }) as APIPromise<{ result: UserCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a SCIM user in a user population.
   *
   * @example
   * ```ts
   * const user =
   *   await client.zeroTrust.access.userPopulations.users.update(
   *     'user_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       user_population_id:
   *         'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *       Operations: [{ op: 'add' }],
   *     },
   *   );
   * ```
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    const { account_id, user_population_id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/access/user_populations/${user_population_id}/users/${userID}`,
        { body, ...options },
      ) as APIPromise<{ result: UserUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists SCIM users in a user population.
   *
   * @example
   * ```ts
   * const users =
   *   await client.zeroTrust.access.userPopulations.users.list(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  list(
    userPopulationID: string,
    params: UserListParams,
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/access/user_populations/${userPopulationID}/users`, {
        query,
        ...options,
      }) as APIPromise<{ result: UserListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a SCIM user from a user population.
   *
   * @example
   * ```ts
   * await client.zeroTrust.access.userPopulations.users.delete(
   *   'user_id',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     user_population_id:
   *       'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   },
   * );
   * ```
   */
  delete(userID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, user_population_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/access/user_populations/${user_population_id}/users/${userID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Fetches a SCIM user from a user population.
   *
   * @example
   * ```ts
   * const user =
   *   await client.zeroTrust.access.userPopulations.users.get(
   *     'user_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       user_population_id:
   *         'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     },
   *   );
   * ```
   */
  get(userID: string, params: UserGetParams, options?: RequestOptions): APIPromise<UserGetResponse> {
    const { account_id, user_population_id, ...query } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/access/user_populations/${user_population_id}/users/${userID}`,
        { query, ...options },
      ) as APIPromise<{ result: UserGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces a SCIM user in a user population.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.access.userPopulations.users.replace(
   *     'user_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       user_population_id:
   *         'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     },
   *   );
   * ```
   */
  replace(
    userID: string,
    params: UserReplaceParams,
    options?: RequestOptions,
  ): APIPromise<UserReplaceResponse> {
    const { account_id, user_population_id, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/access/user_populations/${user_population_id}/users/${userID}`,
        { body, ...options },
      ) as APIPromise<{ result: UserReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Users extends BaseUsers {}

/**
 * A SCIM User resource. Additional SCIM extension attributes are supported.
 */
export interface UserCreateResponse {
  id?: string;

  active?: boolean;

  displayName?: string;

  emails?: Array<UserCreateResponse.Email>;

  externalId?: string;

  meta?: UserCreateResponse.Meta;

  name?: UserCreateResponse.Name;

  /**
   * The SCIM schemas that apply to this resource.
   */
  schemas?: Array<string>;

  userName?: string;

  [k: string]: unknown;
}

export namespace UserCreateResponse {
  export interface Email {
    primary?: boolean;

    type?: string;

    value?: string;
  }

  export interface Meta {
    created?: string;

    lastModified?: string;

    location?: string;

    resourceType?: string;

    version?: string;
  }

  export interface Name {
    familyName?: string;

    formatted?: string;

    givenName?: string;

    honorificPrefix?: string;

    honorificSuffix?: string;

    middleName?: string;
  }
}

/**
 * A SCIM User resource. Additional SCIM extension attributes are supported.
 */
export interface UserUpdateResponse {
  id?: string;

  active?: boolean;

  displayName?: string;

  emails?: Array<UserUpdateResponse.Email>;

  externalId?: string;

  meta?: UserUpdateResponse.Meta;

  name?: UserUpdateResponse.Name;

  /**
   * The SCIM schemas that apply to this resource.
   */
  schemas?: Array<string>;

  userName?: string;

  [k: string]: unknown;
}

export namespace UserUpdateResponse {
  export interface Email {
    primary?: boolean;

    type?: string;

    value?: string;
  }

  export interface Meta {
    created?: string;

    lastModified?: string;

    location?: string;

    resourceType?: string;

    version?: string;
  }

  export interface Name {
    familyName?: string;

    formatted?: string;

    givenName?: string;

    honorificPrefix?: string;

    honorificSuffix?: string;

    middleName?: string;
  }
}

export interface UserListResponse {
  itemsPerPage: number;

  Resources: Array<UserListResponse.Resource>;

  schemas: Array<string>;

  startIndex: number;

  totalResults: number;
}

export namespace UserListResponse {
  /**
   * A SCIM User resource. Additional SCIM extension attributes are supported.
   */
  export interface Resource {
    id?: string;

    active?: boolean;

    displayName?: string;

    emails?: Array<Resource.Email>;

    externalId?: string;

    meta?: Resource.Meta;

    name?: Resource.Name;

    /**
     * The SCIM schemas that apply to this resource.
     */
    schemas?: Array<string>;

    userName?: string;

    [k: string]: unknown;
  }

  export namespace Resource {
    export interface Email {
      primary?: boolean;

      type?: string;

      value?: string;
    }

    export interface Meta {
      created?: string;

      lastModified?: string;

      location?: string;

      resourceType?: string;

      version?: string;
    }

    export interface Name {
      familyName?: string;

      formatted?: string;

      givenName?: string;

      honorificPrefix?: string;

      honorificSuffix?: string;

      middleName?: string;
    }
  }
}

/**
 * A SCIM User resource. Additional SCIM extension attributes are supported.
 */
export interface UserGetResponse {
  id?: string;

  active?: boolean;

  displayName?: string;

  emails?: Array<UserGetResponse.Email>;

  externalId?: string;

  meta?: UserGetResponse.Meta;

  name?: UserGetResponse.Name;

  /**
   * The SCIM schemas that apply to this resource.
   */
  schemas?: Array<string>;

  userName?: string;

  [k: string]: unknown;
}

export namespace UserGetResponse {
  export interface Email {
    primary?: boolean;

    type?: string;

    value?: string;
  }

  export interface Meta {
    created?: string;

    lastModified?: string;

    location?: string;

    resourceType?: string;

    version?: string;
  }

  export interface Name {
    familyName?: string;

    formatted?: string;

    givenName?: string;

    honorificPrefix?: string;

    honorificSuffix?: string;

    middleName?: string;
  }
}

/**
 * A SCIM User resource. Additional SCIM extension attributes are supported.
 */
export interface UserReplaceResponse {
  id?: string;

  active?: boolean;

  displayName?: string;

  emails?: Array<UserReplaceResponse.Email>;

  externalId?: string;

  meta?: UserReplaceResponse.Meta;

  name?: UserReplaceResponse.Name;

  /**
   * The SCIM schemas that apply to this resource.
   */
  schemas?: Array<string>;

  userName?: string;

  [k: string]: unknown;
}

export namespace UserReplaceResponse {
  export interface Email {
    primary?: boolean;

    type?: string;

    value?: string;
  }

  export interface Meta {
    created?: string;

    lastModified?: string;

    location?: string;

    resourceType?: string;

    version?: string;
  }

  export interface Name {
    familyName?: string;

    formatted?: string;

    givenName?: string;

    honorificPrefix?: string;

    honorificSuffix?: string;

    middleName?: string;
  }
}

export interface UserCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  active?: boolean;

  /**
   * Body param
   */
  displayName?: string;

  /**
   * Body param
   */
  emails?: Array<UserCreateParams.Email>;

  /**
   * Body param
   */
  externalId?: string;

  /**
   * Body param
   */
  meta?: UserCreateParams.Meta;

  /**
   * Body param
   */
  name?: UserCreateParams.Name;

  /**
   * Body param: The SCIM schemas that apply to this resource.
   */
  schemas?: Array<string>;

  /**
   * Body param
   */
  userName?: string;

  [k: string]: unknown;
}

export namespace UserCreateParams {
  export interface Email {
    primary?: boolean;

    type?: string;

    value?: string;
  }

  export interface Meta {
    created?: string;

    lastModified?: string;

    location?: string;

    resourceType?: string;

    version?: string;
  }

  export interface Name {
    familyName?: string;

    formatted?: string;

    givenName?: string;

    honorificPrefix?: string;

    honorificSuffix?: string;

    middleName?: string;
  }
}

export interface UserUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: UUID.
   */
  user_population_id: string;

  /**
   * Body param
   */
  Operations: Array<UserUpdateParams.Operation>;

  /**
   * Body param
   */
  schemas?: Array<string>;
}

export namespace UserUpdateParams {
  export interface Operation {
    op: 'add' | 'remove' | 'replace';

    path?: string;

    value?: string | null | number | boolean | Array<unknown> | { [key: string]: unknown };
  }
}

export interface UserListParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Comma-separated SCIM attributes to return.
   */
  attributes?: string;

  /**
   * Query param: The maximum number of results to return.
   */
  count?: number;

  /**
   * Query param: Comma-separated SCIM attributes to exclude from the response.
   */
  excludedAttributes?: string;

  /**
   * Query param: A SCIM filter expression.
   */
  filter?: string;

  /**
   * Query param: The 1-based index of the first result to return.
   */
  startIndex?: number;
}

export interface UserDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * UUID.
   */
  user_population_id: string;
}

export interface UserGetParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: UUID.
   */
  user_population_id: string;

  /**
   * Query param: Comma-separated SCIM attributes to return.
   */
  attributes?: string;

  /**
   * Query param: Comma-separated SCIM attributes to exclude from the response.
   */
  excludedAttributes?: string;
}

export interface UserReplaceParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: UUID.
   */
  user_population_id: string;

  /**
   * Body param
   */
  active?: boolean;

  /**
   * Body param
   */
  displayName?: string;

  /**
   * Body param
   */
  emails?: Array<UserReplaceParams.Email>;

  /**
   * Body param
   */
  externalId?: string;

  /**
   * Body param
   */
  meta?: UserReplaceParams.Meta;

  /**
   * Body param
   */
  name?: UserReplaceParams.Name;

  /**
   * Body param: The SCIM schemas that apply to this resource.
   */
  schemas?: Array<string>;

  /**
   * Body param
   */
  userName?: string;

  [k: string]: unknown;
}

export namespace UserReplaceParams {
  export interface Email {
    primary?: boolean;

    type?: string;

    value?: string;
  }

  export interface Meta {
    created?: string;

    lastModified?: string;

    location?: string;

    resourceType?: string;

    version?: string;
  }

  export interface Name {
    familyName?: string;

    formatted?: string;

    givenName?: string;

    honorificPrefix?: string;

    honorificSuffix?: string;

    middleName?: string;
  }
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserGetResponse as UserGetResponse,
    type UserReplaceResponse as UserReplaceResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserGetParams as UserGetParams,
    type UserReplaceParams as UserReplaceParams,
  };
}
