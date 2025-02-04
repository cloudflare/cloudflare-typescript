// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as UsersAPI from '../../access/users/users';
import { AccessUsersSinglePage } from '../../access/users/users';

export class Users extends APIResource {
  /**
   * Lists SCIM User resources synced to Cloudflare via the System for Cross-domain
   * Identity Management (SCIM).
   */
  list(
    identityProviderId: string,
    params: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessUsersSinglePage, UsersAPI.AccessUser> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/access/identity_providers/${identityProviderId}/scim/users`,
      AccessUsersSinglePage,
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

export { AccessUsersSinglePage };
