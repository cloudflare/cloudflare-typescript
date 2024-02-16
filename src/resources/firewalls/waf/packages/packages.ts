// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PackagesAPI from 'cloudflare/resources/firewalls/waf/packages/packages';
import * as GroupsAPI from 'cloudflare/resources/firewalls/waf/packages/groups';
import * as RulesAPI from 'cloudflare/resources/firewalls/waf/packages/rules';

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
    zoneIdentifier: string,
    query?: PackageListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageListResponse>;
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PackageListResponse>;
  list(
    zoneIdentifier: string,
    query: PackageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.get(`/zones/${zoneIdentifier}/firewall/waf/packages`, { query, ...options });
  }

  /**
   * Fetches the details of a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  get(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageGetResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/firewall/waf/packages/${identifier}`, options);
  }
}

export type PackageListResponse =
  | PackageListResponse.LegacyJhsAPIResponseCollection
  | PackageListResponse.Result;

export namespace PackageListResponse {
  export interface LegacyJhsAPIResponseCollection {
    errors: Array<LegacyJhsAPIResponseCollection.Error>;

    messages: Array<LegacyJhsAPIResponseCollection.Message>;

    result: unknown | Array<unknown> | string | null;

    /**
     * Whether the API call was successful
     */
    success: true;

    result_info?: LegacyJhsAPIResponseCollection.ResultInfo;
  }

  export namespace LegacyJhsAPIResponseCollection {
    export interface Error {
      code: number;

      message: string;
    }

    export interface Message {
      code: number;

      message: string;
    }

    export interface ResultInfo {
      /**
       * Total number of results for the requested service
       */
      count?: number;

      /**
       * Current page within paginated list of results
       */
      page?: number;

      /**
       * Number of results per page of results
       */
      per_page?: number;

      /**
       * Total results available without any search parameters
       */
      total_count?: number;
    }
  }

  export interface Result {
    result?: Array<Result.LegacyJhsPackageDefinition | Result.LegacyJhsAnomalyPackage>;
  }

  export namespace Result {
    export interface LegacyJhsPackageDefinition {
      /**
       * The unique identifier of a WAF package.
       */
      id: string;

      /**
       * A summary of the purpose/function of the WAF package.
       */
      description: string;

      /**
       * The mode that defines how rules within the package are evaluated during the
       * course of a request. When a package uses anomaly detection mode (`anomaly`
       * value), each rule is given a score when triggered. If the total score of all
       * triggered rules exceeds the sensitivity defined in the WAF package, the action
       * configured in the package will be performed. Traditional detection mode
       * (`traditional` value) will decide the action to take when it is triggered by the
       * request. If multiple rules are triggered, the action providing the highest
       * protection will be applied (for example, a 'block' action will win over a
       * 'challenge' action).
       */
      detection_mode: 'anomaly' | 'traditional';

      /**
       * The name of the WAF package.
       */
      name: string;

      /**
       * Identifier
       */
      zone_id: string;

      /**
       * When set to `active`, indicates that the WAF package will be applied to the
       * zone.
       */
      status?: 'active';
    }

    export interface LegacyJhsAnomalyPackage {
      /**
       * The unique identifier of a WAF package.
       */
      id: string;

      /**
       * A summary of the purpose/function of the WAF package.
       */
      description: string;

      /**
       * When a WAF package uses anomaly detection, each rule is given a score when
       * triggered. If the total score of all triggered rules exceeds the sensitivity
       * defined on the WAF package, the action defined on the package will be taken.
       */
      detection_mode: 'anomaly' | 'traditional';

      /**
       * The name of the WAF package.
       */
      name: string;

      /**
       * Identifier
       */
      zone_id: string;

      /**
       * The default action performed by the rules in the WAF package.
       */
      action_mode?: 'simulate' | 'block' | 'challenge';

      /**
       * The sensitivity of the WAF package.
       */
      sensitivity?: 'high' | 'medium' | 'low' | 'off';

      /**
       * When set to `active`, indicates that the WAF package will be applied to the
       * zone.
       */
      status?: 'active';
    }
  }
}

export type PackageGetResponse = PackageGetResponse.LegacyJhsAPIResponseSingle | PackageGetResponse.Result;

export namespace PackageGetResponse {
  export interface LegacyJhsAPIResponseSingle {
    errors: Array<LegacyJhsAPIResponseSingle.Error>;

    messages: Array<LegacyJhsAPIResponseSingle.Message>;

    result: unknown | string | null;

    /**
     * Whether the API call was successful
     */
    success: true;
  }

  export namespace LegacyJhsAPIResponseSingle {
    export interface Error {
      code: number;

      message: string;
    }

    export interface Message {
      code: number;

      message: string;
    }
  }

  export interface Result {
    result?: unknown;
  }
}

export interface PackageListParams {
  /**
   * The direction used to sort returned packages.
   */
  direction?: 'asc' | 'desc';

  /**
   * When set to `all`, all the search requirements must match. When set to `any`,
   * only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * The field used to sort returned packages.
   */
  order?: 'name';

  /**
   * The page number of paginated results.
   */
  page?: number;

  /**
   * The number of packages per page.
   */
  per_page?: number;
}

export namespace Packages {
  export import PackageListResponse = PackagesAPI.PackageListResponse;
  export import PackageGetResponse = PackagesAPI.PackageGetResponse;
  export import PackageListParams = PackagesAPI.PackageListParams;
  export import Groups = GroupsAPI.Groups;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupWAFRuleGroupsListWAFRuleGroupsResponse = GroupsAPI.GroupWAFRuleGroupsListWAFRuleGroupsResponse;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupWAFRuleGroupsListWAFRuleGroupsParams = GroupsAPI.GroupWAFRuleGroupsListWAFRuleGroupsParams;
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleWAFRulesListWAFRulesResponse = RulesAPI.RuleWAFRulesListWAFRulesResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleWAFRulesListWAFRulesParams = RulesAPI.RuleWAFRulesListWAFRulesParams;
}
