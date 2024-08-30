// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CloudflareError } from '../../error';
import * as AccessRulesAPI from './access-rules';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class AccessRules extends APIResource {
  /**
   * Creates a new IP Access rule for an account or zone. The rule will apply to all
   * zones in the account or zone.
   *
   * Note: To create an IP Access rule that applies to a single zone, refer to the
   * [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.
   */
  create(
    params: AccessRuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleCreateResponse> {
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
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/firewall/access_rules/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessRuleCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches IP Access rules of an account or zone. These rules apply to all the
   * zones in the account or zone. You can filter the results using several optional
   * parameters.
   */
  list(
    params?: AccessRuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessRuleListResponsesV4PagePaginationArray, AccessRuleListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessRuleListResponsesV4PagePaginationArray, AccessRuleListResponse>;
  list(
    params: AccessRuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessRuleListResponsesV4PagePaginationArray, AccessRuleListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id, ...query } = params;
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
    identifier: string,
    params?: AccessRuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleDeleteResponse | null>;
  delete(identifier: string, options?: Core.RequestOptions): Core.APIPromise<AccessRuleDeleteResponse | null>;
  delete(
    identifier: string,
    params: AccessRuleDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleDeleteResponse | null> {
    if (isRequestOptions(params)) {
      return this.delete(identifier, {}, params);
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
        `/${accountOrZone}/${accountOrZoneId}/firewall/access_rules/rules/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: AccessRuleDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an IP Access rule defined.
   *
   * Note: This operation will affect all zones in the account or zone.
   */
  edit(
    identifier: string,
    params: AccessRuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleEditResponse> {
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
      this._client.patch(`/${accountOrZone}/${accountOrZoneId}/firewall/access_rules/rules/${identifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessRuleEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of an IP Access rule defined.
   */
  get(
    identifier: string,
    params?: AccessRuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleGetResponse>;
  get(identifier: string, options?: Core.RequestOptions): Core.APIPromise<AccessRuleGetResponse>;
  get(
    identifier: string,
    params: AccessRuleGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRuleGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(identifier, {}, params);
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
        `/${accountOrZone}/${accountOrZoneId}/firewall/access_rules/rules/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: AccessRuleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AccessRuleListResponsesV4PagePaginationArray extends V4PagePaginationArray<AccessRuleListResponse> {}

export interface AccessRuleCIDRConfiguration {
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

export interface AccessRuleCIDRConfigurationParam {
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

export interface AccessRuleIPConfiguration {
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

export interface AccessRuleIPConfigurationParam {
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

export interface ASNConfiguration {
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

export interface ASNConfigurationParam {
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

export interface CountryConfiguration {
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

export interface CountryConfigurationParam {
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

export interface IPV6Configuration {
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

export interface IPV6ConfigurationParam {
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

export type AccessRuleCreateResponse = unknown | string | null;

export type AccessRuleListResponse = unknown;

export interface AccessRuleDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export type AccessRuleEditResponse = unknown | string | null;

export type AccessRuleGetResponse = unknown | string | null;

export interface AccessRuleCreateParams {
  /**
   * Body param: The rule configuration.
   */
  configuration:
    | AccessRuleIPConfigurationParam
    | IPV6ConfigurationParam
    | AccessRuleCIDRConfigurationParam
    | ASNConfigurationParam
    | CountryConfigurationParam;

  /**
   * Body param: The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

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
   * Body param: An informative summary of the rule, typically used as a reminder or
   * explanation.
   */
  notes?: string;
}

export interface AccessRuleListParams extends V4PagePaginationArrayParams {
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
   * Query param:
   */
  configuration?: AccessRuleListParams.Configuration;

  /**
   * Query param: The direction used to sort returned rules.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: When set to `all`, all the search requirements must match. When set
   * to `any`, only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * Query param: The action to apply to a matched request.
   */
  mode?: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * Query param: The string to search for in the notes of existing IP Access rules.
   * Notes: For example, the string 'attack' would match IP Access rules with notes
   * 'Attack 26/02' and 'Attack 27/02'. The search is case insensitive.
   */
  notes?: string;

  /**
   * Query param: The field used to sort returned rules.
   */
  order?: 'configuration.target' | 'configuration.value' | 'mode';
}

export namespace AccessRuleListParams {
  export interface Configuration {
    /**
     * The target to search in existing rules.
     */
    target?: 'ip' | 'ip_range' | 'asn' | 'country';

    /**
     * The target value to search for in existing rules: an IP address, an IP address
     * range, or a country code, depending on the provided `configuration.target`.
     * Notes: You can search for a single IPv4 address, an IP address range with a
     * subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.
     */
    value?: string;
  }
}

export interface AccessRuleDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface AccessRuleEditParams {
  /**
   * Body param: The rule configuration.
   */
  configuration:
    | AccessRuleIPConfigurationParam
    | IPV6ConfigurationParam
    | AccessRuleCIDRConfigurationParam
    | ASNConfigurationParam
    | CountryConfigurationParam;

  /**
   * Body param: The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

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
   * Body param: An informative summary of the rule, typically used as a reminder or
   * explanation.
   */
  notes?: string;
}

export interface AccessRuleGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace AccessRules {
  export import AccessRuleCIDRConfiguration = AccessRulesAPI.AccessRuleCIDRConfiguration;
  export import AccessRuleIPConfiguration = AccessRulesAPI.AccessRuleIPConfiguration;
  export import ASNConfiguration = AccessRulesAPI.ASNConfiguration;
  export import CountryConfiguration = AccessRulesAPI.CountryConfiguration;
  export import IPV6Configuration = AccessRulesAPI.IPV6Configuration;
  export import AccessRuleCreateResponse = AccessRulesAPI.AccessRuleCreateResponse;
  export import AccessRuleListResponse = AccessRulesAPI.AccessRuleListResponse;
  export import AccessRuleDeleteResponse = AccessRulesAPI.AccessRuleDeleteResponse;
  export import AccessRuleEditResponse = AccessRulesAPI.AccessRuleEditResponse;
  export import AccessRuleGetResponse = AccessRulesAPI.AccessRuleGetResponse;
  export import AccessRuleListResponsesV4PagePaginationArray = AccessRulesAPI.AccessRuleListResponsesV4PagePaginationArray;
  export import AccessRuleCreateParams = AccessRulesAPI.AccessRuleCreateParams;
  export import AccessRuleListParams = AccessRulesAPI.AccessRuleListParams;
  export import AccessRuleDeleteParams = AccessRulesAPI.AccessRuleDeleteParams;
  export import AccessRuleEditParams = AccessRulesAPI.AccessRuleEditParams;
  export import AccessRuleGetParams = AccessRulesAPI.AccessRuleGetParams;
}
