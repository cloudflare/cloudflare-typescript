// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as PackagesAPI from './packages';
import * as Shared from '../../../shared';
import * as GroupsAPI from './groups';
import * as RulesAPI from './rules';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Packages extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Fetches WAF packages for a zone.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  list(
    params: PackageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PackageListResponsesV4PagePaginationArray, PackageListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/firewall/waf/packages`,
      PackageListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Fetches the details of a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  get(
    packageId: string,
    params: PackageGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageGetResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/firewall/waf/packages/${packageId}`, options);
  }
}

export class PackageListResponsesV4PagePaginationArray extends V4PagePaginationArray<PackageListResponse> {}

export type PackageListResponse = unknown;

export type PackageGetResponse = PackageGetResponse.FirewallAPIResponseSingle | PackageGetResponse.Result;

export namespace PackageGetResponse {
  export interface FirewallAPIResponseSingle {
    errors: Array<Shared.ResponseInfo>;

    messages: Array<Shared.ResponseInfo>;

    result: unknown | string | null;

    /**
     * Whether the API call was successful
     */
    success: true;
  }

  export interface Result {
    result?: unknown;
  }
}

export interface PackageListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The direction used to sort returned packages.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: When set to `all`, all the search requirements must match. When set
   * to `any`, only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * Query param: The name of the WAF package.
   */
  name?: string;

  /**
   * Query param: The field used to sort returned packages.
   */
  order?: 'name';
}

export interface PackageGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Packages {
  export type PackageListResponse = PackagesAPI.PackageListResponse;
  export type PackageGetResponse = PackagesAPI.PackageGetResponse;
  export import PackageListResponsesV4PagePaginationArray = PackagesAPI.PackageListResponsesV4PagePaginationArray;
  export type PackageListParams = PackagesAPI.PackageListParams;
  export type PackageGetParams = PackagesAPI.PackageGetParams;
  export import Groups = GroupsAPI.Groups;
  export type Group = GroupsAPI.Group;
  export type GroupEditResponse = GroupsAPI.GroupEditResponse;
  export type GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupsV4PagePaginationArray = GroupsAPI.GroupsV4PagePaginationArray;
  export type GroupListParams = GroupsAPI.GroupListParams;
  export type GroupEditParams = GroupsAPI.GroupEditParams;
  export type GroupGetParams = GroupsAPI.GroupGetParams;
  export import Rules = RulesAPI.Rules;
  export type AllowedModesAnomaly = RulesAPI.AllowedModesAnomaly;
  export type WAFRuleGroup = RulesAPI.WAFRuleGroup;
  export type RuleListResponse = RulesAPI.RuleListResponse;
  export type RuleEditResponse = RulesAPI.RuleEditResponse;
  export type RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleListResponsesV4PagePaginationArray = RulesAPI.RuleListResponsesV4PagePaginationArray;
  export type RuleListParams = RulesAPI.RuleListParams;
  export type RuleEditParams = RulesAPI.RuleEditParams;
  export type RuleGetParams = RulesAPI.RuleGetParams;
}
