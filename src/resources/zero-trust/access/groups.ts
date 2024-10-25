// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error';
import * as GroupsAPI from './groups';
import * as AccessAPI from './access';
import { SinglePage } from '../../../pagination';

export class Groups extends APIResource {
  /**
   * Creates a new Access group.
   */
  create(params: GroupCreateParams, options?: Core.RequestOptions): Core.APIPromise<ZeroTrustGroup> {
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
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/groups`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustGroup }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Access group.
   */
  update(
    groupId: string,
    params: GroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGroup> {
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
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/groups/${groupId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustGroup }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access groups.
   */
  list(
    params?: GroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustGroupsSinglePage, ZeroTrustGroup>;
  list(options?: Core.RequestOptions): Core.PagePromise<ZeroTrustGroupsSinglePage, ZeroTrustGroup>;
  list(
    params: GroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustGroupsSinglePage, ZeroTrustGroup> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
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
      `/${accountOrZone}/${accountOrZoneId}/access/groups`,
      ZeroTrustGroupsSinglePage,
      options,
    );
  }

  /**
   * Deletes an Access group.
   */
  delete(
    groupId: string,
    params?: GroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupDeleteResponse>;
  delete(groupId: string, options?: Core.RequestOptions): Core.APIPromise<GroupDeleteResponse>;
  delete(
    groupId: string,
    params: GroupDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(groupId, {}, params);
    }
    const { account_id, zone_id } = params;
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
        `/${accountOrZone}/${accountOrZoneId}/access/groups/${groupId}`,
        options,
      ) as Core.APIPromise<{ result: GroupDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Access group.
   */
  get(
    groupId: string,
    params?: GroupGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGroup>;
  get(groupId: string, options?: Core.RequestOptions): Core.APIPromise<ZeroTrustGroup>;
  get(
    groupId: string,
    params: GroupGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGroup> {
    if (isRequestOptions(params)) {
      return this.get(groupId, {}, params);
    }
    const { account_id, zone_id } = params;
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
        `/${accountOrZone}/${accountOrZoneId}/access/groups/${groupId}`,
        options,
      ) as Core.APIPromise<{ result: ZeroTrustGroup }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ZeroTrustGroupsSinglePage extends SinglePage<ZeroTrustGroup> {}

export interface ZeroTrustGroup {
  /**
   * UUID
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<AccessAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<AccessAPI.AccessRule>;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<AccessAPI.AccessRule>;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRule>;

  updated_at?: string;
}

export interface GroupDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface GroupCreateParams {
  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<AccessAPI.AccessRuleParam>;

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
  exclude?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match a policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRuleParam>;
}

export interface GroupUpdateParams {
  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<AccessAPI.AccessRuleParam>;

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
  exclude?: Array<AccessAPI.AccessRuleParam>;

  /**
   * Body param: Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match a policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<AccessAPI.AccessRuleParam>;
}

export interface GroupListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
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

export namespace Groups {
  export import ZeroTrustGroup = GroupsAPI.ZeroTrustGroup;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import ZeroTrustGroupsSinglePage = GroupsAPI.ZeroTrustGroupsSinglePage;
  export import GroupCreateParams = GroupsAPI.GroupCreateParams;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupListParams = GroupsAPI.GroupListParams;
  export import GroupDeleteParams = GroupsAPI.GroupDeleteParams;
  export import GroupGetParams = GroupsAPI.GroupGetParams;
}
