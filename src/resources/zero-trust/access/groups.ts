// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PoliciesAPI from './applications/policies';
import { APIPromise } from '../../../core/api-promise';
import { CloudflareError } from '../../../core/error';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Creates a new Access group.
   *
   * @example
   * ```ts
   * const group = await client.zeroTrust.access.groups.create({
   *   include: [
   *     {
   *       group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' },
   *     },
   *   ],
   *   name: 'Allow devs',
   *   account_id: 'account_id',
   * });
   * ```
   */
  create(params: GroupCreateParams, options?: RequestOptions): APIPromise<GroupCreateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(path`/${accountOrZone}/${accountOrZoneId}/access/groups`, {
        body,
        ...options,
      }) as APIPromise<{ result: GroupCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Access group.
   *
   * @example
   * ```ts
   * const group = await client.zeroTrust.access.groups.update(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   {
   *     include: [
   *       {
   *         group: {
   *           id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f',
   *         },
   *       },
   *     ],
   *     name: 'Allow devs',
   *     account_id: 'account_id',
   *   },
   * );
   * ```
   */
  update(
    groupID: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupUpdateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(path`/${accountOrZone}/${accountOrZoneId}/access/groups/${groupID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: GroupUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access groups.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const groupListResponse of client.zeroTrust.access.groups.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<GroupListResponsesV4PagePaginationArray, GroupListResponse> {
    const { account_id, zone_id, ...query } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      path`/${accountOrZone}/${accountOrZoneId}/access/groups`,
      V4PagePaginationArray<GroupListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes an Access group.
   *
   * @example
   * ```ts
   * const group = await client.zeroTrust.access.groups.delete(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    groupID: string,
    params: GroupDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupDeleteResponse> {
    const { account_id, zone_id } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        path`/${accountOrZone}/${accountOrZoneId}/access/groups/${groupID}`,
        options,
      ) as APIPromise<{ result: GroupDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Access group.
   *
   * @example
   * ```ts
   * const group = await client.zeroTrust.access.groups.get(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    groupID: string,
    params: GroupGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupGetResponse> {
    const { account_id, zone_id } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        path`/${accountOrZone}/${accountOrZoneId}/access/groups/${groupID}`,
        options,
      ) as APIPromise<{ result: GroupGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type GroupListResponsesV4PagePaginationArray = V4PagePaginationArray<GroupListResponse>;

export type ZeroTrustGroupsV4PagePaginationArray = V4PagePaginationArray<ZeroTrustGroup>;

export interface ZeroTrustGroup {
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
   * The metadata of the SCIM resource.
   */
  meta?: ZeroTrustGroup.Meta;

  /**
   * The list of URIs which indicate the attributes contained within a SCIM resource.
   */
  schemas?: Array<string>;
}

export namespace ZeroTrustGroup {
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

export interface GroupCreateResponse {
  /**
   * UUID.
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<PoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<PoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<PoliciesAPI.AccessRule>;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<PoliciesAPI.AccessRule>;

  updated_at?: string;
}

export interface GroupUpdateResponse {
  /**
   * UUID.
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<PoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<PoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<PoliciesAPI.AccessRule>;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<PoliciesAPI.AccessRule>;

  updated_at?: string;
}

export interface GroupListResponse {
  /**
   * UUID.
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<PoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<PoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<PoliciesAPI.AccessRule>;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<PoliciesAPI.AccessRule>;

  updated_at?: string;
}

export interface GroupDeleteResponse {
  /**
   * UUID.
   */
  id?: string;
}

export interface GroupGetResponse {
  /**
   * UUID.
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<PoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<PoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<PoliciesAPI.AccessRule>;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<PoliciesAPI.AccessRule>;

  updated_at?: string;
}

export interface GroupCreateParams {
  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<PoliciesAPI.AccessRuleParam>;

  /**
   * Body param: The name of the Access group.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match a policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<PoliciesAPI.AccessRuleParam>;

  /**
   * Body param: Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match a policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<PoliciesAPI.AccessRuleParam>;
}

export interface GroupUpdateParams {
  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<PoliciesAPI.AccessRuleParam>;

  /**
   * Body param: The name of the Access group.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match a policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<PoliciesAPI.AccessRuleParam>;

  /**
   * Body param: Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match a policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<PoliciesAPI.AccessRuleParam>;
}

export interface GroupListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Query param: The name of the group.
   */
  name?: string;

  /**
   * Query param: Search for groups by other listed query parameters.
   */
  search?: string;
}

export interface GroupDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface GroupGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export declare namespace Groups {
  export {
    type ZeroTrustGroup as ZeroTrustGroup,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupGetResponse as GroupGetResponse,
    type GroupListResponsesV4PagePaginationArray as GroupListResponsesV4PagePaginationArray,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };
}
