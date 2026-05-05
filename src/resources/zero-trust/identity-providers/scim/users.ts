// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UsersAPI from '../../access/users/users';
import { AccessUsersV4PagePaginationArray } from '../../access/users/users';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseUsers extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'identityProviders', 'scim', 'users'] = Object.freeze(
    ['zeroTrust', 'identityProviders', 'scim', 'users'] as const,
  );

  /**
   * Lists SCIM User resources synced to Cloudflare via the System for Cross-domain
   * Identity Management (SCIM).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accessUser of client.zeroTrust.identityProviders.scim.users.list(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    identityProviderID: string,
    params: UserListParams,
    options?: RequestOptions,
  ): PagePromise<AccessUsersV4PagePaginationArray, UsersAPI.AccessUser> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/identity_providers/${identityProviderID}/scim/users`,
      V4PagePaginationArray<UsersAPI.AccessUser>,
      { query, ...options },
    );
  }
}
export class Users extends BaseUsers {}

export interface UserListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The unique Cloudflare-generated Id of the SCIM User resource; also
   * known as the "Id". Pass once for a single lookup (`?cf_resource_id=A`) or repeat
   * the parameter (`?cf_resource_id=A&cf_resource_id=B`) to look up multiple users
   * in one request, up to 50 values. Mutually exclusive with `idp_resource_id`,
   * `username`, `email`, `name`, `search_contains`, and `search_starts_with`.
   */
  cf_resource_id?: Array<string>;

  /**
   * Query param: The email address of the SCIM User resource.
   */
  email?: string;

  /**
   * Query param: The IdP-generated Id of the SCIM User resource; also known as the
   * "external Id". Pass once for a single lookup (`?idp_resource_id=A`) or repeat
   * the parameter (`?idp_resource_id=A&idp_resource_id=B`) to look up multiple users
   * in one request, up to 50 values. Mutually exclusive with `cf_resource_id`,
   * `username`, `email`, `name`, `search_contains`, and `search_starts_with`.
   */
  idp_resource_id?: Array<string>;

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

export { type AccessUsersV4PagePaginationArray };
