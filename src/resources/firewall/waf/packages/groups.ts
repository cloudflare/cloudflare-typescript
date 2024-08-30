// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as GroupsAPI from './groups';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Groups extends APIResource {
  /**
   * Fetches the WAF rule groups in a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  list(
    packageId: string,
    params: GroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<GroupsV4PagePaginationArray, Group> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/firewall/waf/packages/${packageId}/groups`,
      GroupsV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Updates a WAF rule group. You can update the state (`mode` parameter) of a rule
   * group.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  edit(
    packageId: string,
    groupId: string,
    params: GroupEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/firewall/waf/packages/${packageId}/groups/${groupId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GroupEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a WAF rule group.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  get(
    packageId: string,
    groupId: string,
    params: GroupGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/firewall/waf/packages/${packageId}/groups/${groupId}`,
        options,
      ) as Core.APIPromise<{ result: GroupGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class GroupsV4PagePaginationArray extends V4PagePaginationArray<Group> {}

export interface Group {
  /**
   * The unique identifier of the rule group.
   */
  id: string;

  /**
   * An informative summary of what the rule group does.
   */
  description: string | null;

  /**
   * The state of the rules contained in the rule group. When `on`, the rules in the
   * group are configurable/usable.
   */
  mode: 'on' | 'off';

  /**
   * The name of the rule group.
   */
  name: string;

  /**
   * The number of rules in the current rule group.
   */
  rules_count: number;

  /**
   * The available states for the rule group.
   */
  allowed_modes?: Array<'on' | 'off'>;

  /**
   * The number of rules within the group that have been modified from their default
   * configuration.
   */
  modified_rules_count?: number;

  /**
   * The unique identifier of a WAF package.
   */
  package_id?: string;
}

export type GroupEditResponse = unknown | string | null;

export type GroupGetResponse = unknown | string | null;

export interface GroupListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The direction used to sort returned rule groups.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: When set to `all`, all the search requirements must match. When set
   * to `any`, only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * Query param: The state of the rules contained in the rule group. When `on`, the
   * rules in the group are configurable/usable.
   */
  mode?: 'on' | 'off';

  /**
   * Query param: The name of the rule group.
   */
  name?: string;

  /**
   * Query param: The field used to sort returned rule groups.
   */
  order?: 'mode' | 'rules_count';

  /**
   * Query param: The number of rules in the current rule group.
   */
  rules_count?: number;
}

export interface GroupEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The state of the rules contained in the rule group. When `on`, the
   * rules in the group are configurable/usable.
   */
  mode?: 'on' | 'off';
}

export interface GroupGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Groups {
  export import Group = GroupsAPI.Group;
  export import GroupEditResponse = GroupsAPI.GroupEditResponse;
  export import GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupsV4PagePaginationArray = GroupsAPI.GroupsV4PagePaginationArray;
  export import GroupListParams = GroupsAPI.GroupListParams;
  export import GroupEditParams = GroupsAPI.GroupEditParams;
  export import GroupGetParams = GroupsAPI.GroupGetParams;
}
