// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GroupsAPI from '../../access/groups';
import { ZeroTrustGroupsV4PagePaginationArray } from '../../access/groups';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
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

  /**
   * Deletes a SCIM Group resource from the identity provider's SCIM population.
   *
   * @example
   * ```ts
   * await client.zeroTrust.identityProviders.scim.groups.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     identity_provider_id:
   *       'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   },
   * );
   * ```
   */
  delete(groupID: string, params: GroupDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, identity_provider_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/access/identity_providers/${identity_provider_id}/scim/groups/${groupID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Returns a SCIM Group resource, including its direct members, synced to
   * Cloudflare via the System for Cross-domain Identity Management (SCIM).
   *
   * @example
   * ```ts
   * const group =
   *   await client.zeroTrust.identityProviders.scim.groups.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       identity_provider_id:
   *         'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     },
   *   );
   * ```
   */
  get(groupID: string, params: GroupGetParams, options?: RequestOptions): APIPromise<GroupGetResponse> {
    const { account_id, identity_provider_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/access/identity_providers/${identity_provider_id}/scim/groups/${groupID}`,
        options,
      ) as APIPromise<{ result: GroupGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Groups extends BaseGroups {}

export interface GroupGetResponse {
  /**
   * The unique Cloudflare-generated Id of the SCIM resource.
   */
  id?: string;

  /**
   * The display name of the SCIM Group resource.
   */
  displayName?: string;

  /**
   * The IdP-generated Id of the SCIM resource.
   */
  externalId?: string;

  /**
   * The direct members of the SCIM Group resource.
   */
  members?: Array<GroupGetResponse.Member>;

  /**
   * The metadata of the SCIM resource.
   */
  meta?: GroupGetResponse.Meta;

  /**
   * The list of URIs which indicate the attributes contained within a SCIM resource.
   */
  schemas?: Array<string>;
}

export namespace GroupGetResponse {
  export interface Member {
    /**
     * The unique Cloudflare-generated Id of the member resource.
     */
    value: string;

    /**
     * The URI of the member resource.
     */
    $ref?: string;

    /**
     * The display name of the member resource.
     */
    display?: string;

    /**
     * The SCIM resource type of the member.
     */
    type?: 'User' | 'Group';
  }

  /**
   * The metadata of the SCIM resource.
   */
  export interface Meta {
    /**
     * The timestamp of when the SCIM resource was created.
     */
    created?: string;

    /**
     * The timestamp of when the SCIM resource was last modified.
     */
    lastModified?: string;
  }
}

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

export interface GroupDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * UUID.
   */
  identity_provider_id: string;
}

export interface GroupGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * UUID.
   */
  identity_provider_id: string;
}

export declare namespace Groups {
  export {
    type GroupGetResponse as GroupGetResponse,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };
}

export { type ZeroTrustGroupsV4PagePaginationArray };
