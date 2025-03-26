// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UsersAPI from '../../access/users/users';
import { AccessUsersSinglePage } from '../../access/users/users';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Lists SCIM User resources synced to Cloudflare via the System for Cross-domain
   * Identity Management (SCIM).
   */
  list(
    identityProviderID: string,
    params: UserListParams,
    options?: RequestOptions,
  ): PagePromise<AccessUsersSinglePage, UsersAPI.AccessUser> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/identity_providers/${identityProviderID}/scim/users`,
      SinglePage<UsersAPI.AccessUser>,
      { query, ...options },
    );
  }
}

export interface UserListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: The unique Cloudflare-generated Id of the SCIM User resource; also
   * known as the "Id".
   */
  cf_resource_id?: string;

  /**
   * Query param: The email address of the SCIM User resource.
   */
  email?: string;

  /**
   * Query param: The IdP-generated Id of the SCIM User resource; also known as the
   * "external Id".
   */
  idp_resource_id?: string;

  /**
   * Query param: The name of the SCIM User resource.
   */
  name?: string;

  /**
   * Query param: The username of the SCIM User resource.
   */
  username?: string;
}

export declare namespace Users {
  export { type UserListParams as UserListParams };
}

export { type AccessUsersSinglePage };
