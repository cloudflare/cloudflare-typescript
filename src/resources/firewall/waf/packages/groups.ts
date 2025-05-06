// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Fetches the WAF rule groups in a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const group of client.firewall.waf.packages.groups.list(
   *   'a25a9a7e9c00afc1fb2e0245519d725b',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const response =
   *   await client.firewall.waf.packages.groups.edit(
   *     'a25a9a7e9c00afc1fb2e0245519d725b',
   *     {
   *       zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       package_id: 'a25a9a7e9c00afc1fb2e0245519d725b',
   *     },
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const group = await client.firewall.waf.packages.groups.get(
   *   'a25a9a7e9c00afc1fb2e0245519d725b',
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     package_id: 'a25a9a7e9c00afc1fb2e0245519d725b',
   *   },
   * );
   * ```
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
   * Defines the unique identifier of the rule group.
   */
  id: string;

  /**
   * Defines an informative summary of what the rule group does.
   */
  description: string | null;

  /**
   * Defines the state of the rules contained in the rule group. When `on`, the rules
   * in the group are configurable/usable.
   */
  mode: 'on' | 'off';

  /**
   * Defines the name of the rule group.
   */
  name: string;

  /**
   * Defines the number of rules in the current rule group.
   */
  rules_count: number;

  /**
   * Defines the available states for the rule group.
   */
  allowed_modes?: Array<'on' | 'off'>;

  /**
   * Defines the number of rules within the group that have been modified from their
   * default configuration.
   */
  modified_rules_count?: number;

  /**
   * Defines the unique identifier of a WAF package.
   */
  package_id?: string;
}

export type GroupEditResponse = unknown | string | null;

export type GroupGetResponse = unknown | string | null;

export interface GroupListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Defines an identifier of a schema.
   */
  zone_id: string;

  /**
   * Query param: Defines the direction used to sort returned rule groups.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Defines the condition for search requirements. When set to `all`,
   * all the search requirements must match. When set to `any`, only one of the
   * search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * Query param: Defines the state of the rules contained in the rule group. When
   * `on`, the rules in the group are configurable/usable.
   */
  mode?: 'on' | 'off';

  /**
   * Query param: Defines the name of the rule group.
   */
  name?: string;

  /**
   * Query param: Defines the field used to sort returned rule groups.
   */
  order?: 'mode' | 'rules_count';

  /**
   * Query param: Defines the number of rules in the current rule group.
   */
  rules_count?: number;
}

export interface GroupEditParams {
  /**
   * Path param: Defines an identifier of a schema.
   */
  zone_id: string;

  /**
   * Path param: Defines the unique identifier of a WAF package.
   */
  package_id: string;

  /**
   * Body param: Defines the state of the rules contained in the rule group. When
   * `on`, the rules in the group are configurable/usable.
   */
  mode?: 'on' | 'off';
}

export interface GroupGetParams {
  /**
   * Defines an identifier of a schema.
   */
  zone_id: string;

  /**
   * Defines the unique identifier of a WAF package.
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
