// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AccessRulesAPI from 'cloudflare/resources/firewalls/access-rules';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class AccessRules extends APIResource {
  /**
   * Creates a new IP Access rule for an account or zone. The rule will apply to all
   * zones in the account or zone.
   *
   * Note: To create an IP Access rule that applies to a single zone, refer to the
   * [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: unknown,
    body: AccessRuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleCreateResponse | null> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/firewall/access_rules/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessRuleCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an IP Access rule defined at the account level.
   *
   * Note: This operation will affect all zones in the account.
   */
  update(
    identifier: unknown,
    params: AccessRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleUpdateResponse | null> {
    const { account_identifier, ...body } = params;
    return (
      this._client.patch(`/${account_identifier}/${identifier}/firewall/access_rules/rules/:identifier`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessRuleUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches IP Access rules of an account or zone. These rules apply to all the
   * zones in the account or zone. You can filter the results using several optional
   * parameters.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: unknown,
    query?: AccessRuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessRuleListResponsesV4PagePaginationArray, AccessRuleListResponse>;
  list(
    accountOrZone: string,
    accountOrZoneId: unknown,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessRuleListResponsesV4PagePaginationArray, AccessRuleListResponse>;
  list(
    accountOrZone: string,
    accountOrZoneId: unknown,
    query: AccessRuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessRuleListResponsesV4PagePaginationArray, AccessRuleListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountOrZone, accountOrZoneId, {}, query);
    }
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/firewall/access_rules/rules`,
      AccessRuleListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing IP Access rule defined.
   *
   * Note: This operation will affect all zones in the account or zone.
   */
  delete(
    accountOrZone: string,
    accountOrZoneId: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleDeleteResponse | null> {
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/firewall/access_rules/rules/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: AccessRuleDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of an IP Access rule defined.
   */
  get(
    accountOrZone: string,
    accountOrZoneId: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleGetResponse | null> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/firewall/access_rules/rules/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: AccessRuleGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AccessRuleListResponsesV4PagePaginationArray extends V4PagePaginationArray<AccessRuleListResponse> {}

export type AccessRuleCreateResponse = unknown | string;

export type AccessRuleUpdateResponse = unknown | string;

export type AccessRuleListResponse = unknown;

export interface AccessRuleDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export type AccessRuleGetResponse = unknown | string;

export interface AccessRuleCreateParams {
  /**
   * The rule configuration.
   */
  configuration:
    | AccessRuleCreateParams.LegacyJhsIPConfiguration
    | AccessRuleCreateParams.LegacyJhsIPV6Configuration
    | AccessRuleCreateParams.LegacyJhsCidrConfiguration
    | AccessRuleCreateParams.LegacyJhsAsnConfiguration
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

  export interface LegacyJhsCidrConfiguration {
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

  export interface LegacyJhsAsnConfiguration {
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

export interface AccessRuleUpdateParams {
  /**
   * Path param:
   */
  account_identifier: unknown;

  /**
   * Body param: The rule configuration.
   */
  configuration:
    | AccessRuleUpdateParams.LegacyJhsIPConfiguration
    | AccessRuleUpdateParams.LegacyJhsIPV6Configuration
    | AccessRuleUpdateParams.LegacyJhsCidrConfiguration
    | AccessRuleUpdateParams.LegacyJhsAsnConfiguration
    | AccessRuleUpdateParams.LegacyJhsCountryConfiguration;

  /**
   * Body param: The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * Body param: An informative summary of the rule, typically used as a reminder or
   * explanation.
   */
  notes?: string;
}

export namespace AccessRuleUpdateParams {
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

  export interface LegacyJhsCidrConfiguration {
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

  export interface LegacyJhsAsnConfiguration {
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

export namespace AccessRules {
  export import AccessRuleCreateResponse = AccessRulesAPI.AccessRuleCreateResponse;
  export import AccessRuleUpdateResponse = AccessRulesAPI.AccessRuleUpdateResponse;
  export import AccessRuleListResponse = AccessRulesAPI.AccessRuleListResponse;
  export import AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export import AccessRuleGetResponse = AccessRulesAPI.AccessRuleGetResponse;
  export import AccessRuleListResponsesV4PagePaginationArray = AccessRulesAPI.AccessRuleListResponsesV4PagePaginationArray;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleUpdateParams = AccessRulesAPI.AccessRuleUpdateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
}
