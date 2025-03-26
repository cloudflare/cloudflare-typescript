// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as GroupsAPI from './groups';
import {
  Group,
  GroupEditParams,
  GroupEditResponse,
  GroupGetParams,
  GroupGetResponse,
  GroupListParams,
  Groups,
  GroupsV4PagePaginationArray,
} from './groups';
import * as RulesAPI from './rules';
import {
  AllowedModesAnomaly,
  RuleEditParams,
  RuleEditResponse,
  RuleGetParams,
  RuleGetResponse,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesV4PagePaginationArray,
  Rules,
  WAFRuleGroup,
} from './rules';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

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
    options?: RequestOptions,
  ): PagePromise<PackageListResponsesV4PagePaginationArray, PackageListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/firewall/waf/packages`,
      V4PagePaginationArray<PackageListResponse>,
      { query, ...options },
    );
  }

  /**
   * Fetches the details of a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  get(packageID: string, params: PackageGetParams, options?: RequestOptions): APIPromise<PackageGetResponse> {
    const { zone_id } = params;
    return this._client.get(path`/zones/${zone_id}/firewall/waf/packages/${packageID}`, options);
  }
}

export type PackageListResponsesV4PagePaginationArray = V4PagePaginationArray<PackageListResponse>;

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

Packages.Groups = Groups;
Packages.Rules = Rules;

export declare namespace Packages {
  export {
    type PackageListResponse as PackageListResponse,
    type PackageGetResponse as PackageGetResponse,
    type PackageListResponsesV4PagePaginationArray as PackageListResponsesV4PagePaginationArray,
    type PackageListParams as PackageListParams,
    type PackageGetParams as PackageGetParams,
  };

  export {
    Groups as Groups,
    type Group as Group,
    type GroupEditResponse as GroupEditResponse,
    type GroupGetResponse as GroupGetResponse,
    type GroupsV4PagePaginationArray as GroupsV4PagePaginationArray,
    type GroupListParams as GroupListParams,
    type GroupEditParams as GroupEditParams,
    type GroupGetParams as GroupGetParams,
  };

  export {
    Rules as Rules,
    type AllowedModesAnomaly as AllowedModesAnomaly,
    type WAFRuleGroup as WAFRuleGroup,
    type RuleListResponse as RuleListResponse,
    type RuleEditResponse as RuleEditResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleListResponsesV4PagePaginationArray as RuleListResponsesV4PagePaginationArray,
    type RuleListParams as RuleListParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
