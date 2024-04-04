// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AccessRulesAPI from 'cloudflare/resources/user/firewall/access-rules';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class AccessRules extends APIResource {
  /**
   * Creates a new IP Access rule for all zones owned by the current user.
   *
   * Note: To create an IP Access rule that applies to a specific zone, refer to the
   * [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.
   */
  create(body: AccessRuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<AccessRule | null> {
    return (
      this._client.post('/user/firewall/access_rules/rules', { body, ...options }) as Core.APIPromise<{
        result: AccessRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches IP Access rules of the user. You can filter the results using several
   * optional parameters.
   */
  list(
    query?: AccessRuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessRulesV4PagePaginationArray, AccessRule>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccessRulesV4PagePaginationArray, AccessRule>;
  list(
    query: AccessRuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessRulesV4PagePaginationArray, AccessRule> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/firewall/access_rules/rules', AccessRulesV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an IP Access rule at the user level.
   *
   * Note: Deleting a user-level rule will affect all zones owned by the user.
   */
  delete(
    identifier: string,
    body: AccessRuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleDeleteResponse | null> {
    return (
      this._client.delete(`/user/firewall/access_rules/rules/${identifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessRuleDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an IP Access rule defined at the user level. You can only update the
   * rule action (`mode` parameter) and notes.
   */
  edit(
    identifier: string,
    body: AccessRuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRule | null> {
    return (
      this._client.patch(`/user/firewall/access_rules/rules/${identifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AccessRulesV4PagePaginationArray extends V4PagePaginationArray<AccessRule> {}

export interface AccessRule {
  /**
   * The unique identifier of the IP Access rule.
   */
  id: string;

  /**
   * The available actions that a rule can apply to a matched request.
   */
  allowed_modes: Array<'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge'>;

  /**
   * The rule configuration.
   */
  configuration:
    | AccessRule.LegacyJhsIPConfiguration
    | AccessRule.LegacyJhsIPV6Configuration
    | AccessRule.LegacyJhsCIDRConfiguration
    | AccessRule.LegacyJhsASNConfiguration
    | AccessRule.LegacyJhsCountryConfiguration;

  /**
   * The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * The timestamp of when the rule was created.
   */
  created_on?: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  modified_on?: string;

  /**
   * An informative summary of the rule, typically used as a reminder or explanation.
   */
  notes?: string;
}

export namespace AccessRule {
  export interface LegacyJhsIPConfiguration {
    /**
     * The configuration target. You must set the target to `ip` when specifying an IP
     * address in the rule.
     */
    target?: 'ip';

    /**
     * The IP address to match. This address will be compared to the IP address of
     * incoming requests.
     */
    value?: string;
  }

  export interface LegacyJhsIPV6Configuration {
    /**
     * The configuration target. You must set the target to `ip6` when specifying an
     * IPv6 address in the rule.
     */
    target?: 'ip6';

    /**
     * The IPv6 address to match.
     */
    value?: string;
  }

  export interface LegacyJhsCIDRConfiguration {
    /**
     * The configuration target. You must set the target to `ip_range` when specifying
     * an IP address range in the rule.
     */
    target?: 'ip_range';

    /**
     * The IP address range to match. You can only use prefix lengths `/16` and `/24`
     * for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.
     */
    value?: string;
  }

  export interface LegacyJhsASNConfiguration {
    /**
     * The configuration target. You must set the target to `asn` when specifying an
     * Autonomous System Number (ASN) in the rule.
     */
    target?: 'asn';

    /**
     * The AS number to match.
     */
    value?: string;
  }

  export interface LegacyJhsCountryConfiguration {
    /**
     * The configuration target. You must set the target to `country` when specifying a
     * country code in the rule.
     */
    target?: 'country';

    /**
     * The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to
     * [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).
     */
    value?: string;
  }
}

export interface AccessRuleDeleteResponse {
  /**
   * The unique identifier of the IP Access rule.
   */
  id?: string;
}

export interface AccessRuleCreateParams {
  /**
   * The rule configuration.
   */
  configuration:
    | AccessRuleCreateParams.LegacyJhsIPConfiguration
    | AccessRuleCreateParams.LegacyJhsIPV6Configuration
    | AccessRuleCreateParams.LegacyJhsCIDRConfiguration
    | AccessRuleCreateParams.LegacyJhsASNConfiguration
    | AccessRuleCreateParams.LegacyJhsCountryConfiguration;

  /**
   * The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * An informative summary of the rule, typically used as a reminder or explanation.
   */
  notes?: string;
}

export namespace AccessRuleCreateParams {
  export interface LegacyJhsIPConfiguration {
    /**
     * The configuration target. You must set the target to `ip` when specifying an IP
     * address in the rule.
     */
    target?: 'ip';

    /**
     * The IP address to match. This address will be compared to the IP address of
     * incoming requests.
     */
    value?: string;
  }

  export interface LegacyJhsIPV6Configuration {
    /**
     * The configuration target. You must set the target to `ip6` when specifying an
     * IPv6 address in the rule.
     */
    target?: 'ip6';

    /**
     * The IPv6 address to match.
     */
    value?: string;
  }

  export interface LegacyJhsCIDRConfiguration {
    /**
     * The configuration target. You must set the target to `ip_range` when specifying
     * an IP address range in the rule.
     */
    target?: 'ip_range';

    /**
     * The IP address range to match. You can only use prefix lengths `/16` and `/24`
     * for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.
     */
    value?: string;
  }

  export interface LegacyJhsASNConfiguration {
    /**
     * The configuration target. You must set the target to `asn` when specifying an
     * Autonomous System Number (ASN) in the rule.
     */
    target?: 'asn';

    /**
     * The AS number to match.
     */
    value?: string;
  }

  export interface LegacyJhsCountryConfiguration {
    /**
     * The configuration target. You must set the target to `country` when specifying a
     * country code in the rule.
     */
    target?: 'country';

    /**
     * The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to
     * [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).
     */
    value?: string;
  }
}

export interface AccessRuleListParams extends V4PagePaginationArrayParams {
  /**
   * The direction used to sort returned rules.
   */
  direction?: 'asc' | 'desc';

  'egs-pagination'?: AccessRuleListParams.EgsPagination;

  filters?: AccessRuleListParams.Filters;

  /**
   * The field used to sort returned rules.
   */
  order?: 'configuration.target' | 'configuration.value' | 'mode';
}

export namespace AccessRuleListParams {
  export interface EgsPagination {
    json?: EgsPagination.Json;
  }

  export namespace EgsPagination {
    export interface Json {
      /**
       * The page number of paginated results.
       */
      page?: number;

      /**
       * The maximum number of results per page. You can only set the value to `1` or to
       * a multiple of 5 such as `5`, `10`, `15`, or `20`.
       */
      per_page?: number;
    }
  }

  export interface Filters {
    /**
     * The target to search in existing rules.
     */
    'configuration.target'?: 'ip' | 'ip_range' | 'asn' | 'country';

    /**
     * The target value to search for in existing rules: an IP address, an IP address
     * range, or a country code, depending on the provided `configuration.target`.
     * Notes: You can search for a single IPv4 address, an IP address range with a
     * subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.
     */
    'configuration.value'?: string;

    /**
     * When set to `all`, all the search requirements must match. When set to `any`,
     * only one of the search requirements has to match.
     */
    match?: 'any' | 'all';

    /**
     * The action to apply to a matched request.
     */
    mode?: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

    /**
     * The string to search for in the notes of existing IP Access rules. Notes: For
     * example, the string 'attack' would match IP Access rules with notes 'Attack
     * 26/02' and 'Attack 27/02'. The search is case insensitive.
     */
    notes?: string;
  }
}

export type AccessRuleDeleteParams = unknown;

export interface AccessRuleEditParams {
  /**
   * The action to apply to a matched request.
   */
  mode?: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * An informative summary of the rule, typically used as a reminder or explanation.
   */
  notes?: string;
}

export namespace AccessRules {
  export import AccessRule = AccessRulesAPI.AccessRule;
  export import AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export import AccessRulesV4PagePaginationArray = AccessRulesAPI.AccessRulesV4PagePaginationArray;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import AccessRuleDeleteParams = AccessRulesAPI.AccessRuleDeleteParams;
  export import AccessRuleEditParams = AccessRulesAPI.AccessRuleEditParams;
}
