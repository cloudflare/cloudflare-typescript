// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GroupsAPI from '../../access/groups';
import { ZeroTrustGroupsV4PagePaginationArray } from '../../access/groups';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseGroups extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'identityProviders', 'scim', 'groups'] =
    Object.freeze(['zeroTrust', 'identityProviders', 'scim', 'groups'] as const);

  /**
   * Lists SCIM Group resources synced to Cloudflare via the System for Cross-domain
   * Identity Management (SCIM).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const zeroTrustGroup of client.zeroTrust.identityProviders.scim.groups.list(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    identityProviderID: string,
    params: GroupListParams,
    options?: RequestOptions,
  ): PagePromise<ZeroTrustGroupsV4PagePaginationArray, GroupsAPI.ZeroTrustGroup> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/identity_providers/${identityProviderID}/scim/groups`,
      V4PagePaginationArray<GroupsAPI.ZeroTrustGroup>,
      { query, ...options },
    );
  }
}
export class Groups extends BaseGroups {}

export interface GroupListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The unique Cloudflare-generated Id of the SCIM Group resource; also
   * known as the "Id". Pass once for a single lookup (`?cf_resource_id=A`) or repeat
   * the parameter (`?cf_resource_id=A&cf_resource_id=B`) to look up multiple groups
   * in one request, up to 50 values. Mutually exclusive with `idp_resource_id`,
   * `name`, `search_contains`, and `search_starts_with`.
   */
  cf_resource_id?: Array<string>;

  /**
   * Query param: The IdP-generated Id of the SCIM Group resource; also known as the
   * "external Id". Pass once for a single lookup (`?idp_resource_id=A`) or repeat
   * the parameter (`?idp_resource_id=A&idp_resource_id=B`) to look up multiple
   * groups in one request, up to 50 values. Mutually exclusive with
   * `cf_resource_id`, `name`, `search_contains`, and `search_starts_with`.
   */
  idp_resource_id?: Array<string>;

  /**
   * Query param: The display name of the SCIM Group resource.
   */
  name?: string;
}

export declare namespace Groups {
  export { type GroupListParams as GroupListParams };
}

export { type ZeroTrustGroupsV4PagePaginationArray };
