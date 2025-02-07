// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Fetches the WAF rule groups in a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  list(
    packageID: string,
    params: GroupListParams,
    options?: RequestOptions,
  ): PagePromise<GroupsV4PagePaginationArray, Group> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/firewall/waf/packages/${packageID}/groups`,
      V4PagePaginationArray<Group>,
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
  edit(groupID: string, params: GroupEditParams, options?: RequestOptions): APIPromise<GroupEditResponse> {
    const { zone_id, package_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/firewall/waf/packages/${package_id}/groups/${groupID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: GroupEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a WAF rule group.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  get(groupID: string, params: GroupGetParams, options?: RequestOptions): APIPromise<GroupGetResponse> {
    const { zone_id, package_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/firewall/waf/packages/${package_id}/groups/${groupID}`,
        options,
      ) as APIPromise<{ result: GroupGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type GroupsV4PagePaginationArray = V4PagePaginationArray<Group>;

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
   * Path param: The unique identifier of a WAF package.
   */
  package_id: string;

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

  /**
   * The unique identifier of a WAF package.
   */
  package_id: string;
}

export declare namespace Groups {
  export {
    type Group as Group,
    type GroupEditResponse as GroupEditResponse,
    type GroupGetResponse as GroupGetResponse,
    type GroupsV4PagePaginationArray as GroupsV4PagePaginationArray,
    type GroupListParams as GroupListParams,
    type GroupEditParams as GroupEditParams,
    type GroupGetParams as GroupGetParams,
  };
}
