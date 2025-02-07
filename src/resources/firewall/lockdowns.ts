// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OverridesAPI from './waf/overrides';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Lockdowns extends APIResource {
  /**
   * Creates a new Zone Lockdown rule.
   */
  create(params: LockdownCreateParams, options?: RequestOptions): APIPromise<Lockdown> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/firewall/lockdowns`, { body, ...options }) as APIPromise<{
        result: Lockdown;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Zone Lockdown rule.
   */
  update(lockDownsID: string, params: LockdownUpdateParams, options?: RequestOptions): APIPromise<Lockdown> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/firewall/lockdowns/${lockDownsID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Lockdown }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Zone Lockdown rules. You can filter the results using several optional
   * parameters.
   */
  list(
    params: LockdownListParams,
    options?: RequestOptions,
  ): PagePromise<LockdownsV4PagePaginationArray, Lockdown> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/firewall/lockdowns`,
      V4PagePaginationArray<Lockdown>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing Zone Lockdown rule.
   */
  delete(
    lockDownsID: string,
    params: LockdownDeleteParams,
    options?: RequestOptions,
  ): APIPromise<LockdownDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/firewall/lockdowns/${lockDownsID}`, options) as APIPromise<{
        result: LockdownDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a Zone Lockdown rule.
   */
  get(lockDownsID: string, params: LockdownGetParams, options?: RequestOptions): APIPromise<Lockdown> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/firewall/lockdowns/${lockDownsID}`, options) as APIPromise<{
        result: Lockdown;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LockdownsV4PagePaginationArray = V4PagePaginationArray<Lockdown>;

/**
 * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
 * specified in the Zone Lockdown rule. You can include any number of `ip` or
 * `ip_range` configurations.
 */
export type Configuration = Array<LockdownIPConfiguration | LockdownCIDRConfiguration>;

/**
 * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
 * specified in the Zone Lockdown rule. You can include any number of `ip` or
 * `ip_range` configurations.
 */
export type ConfigurationParam = Array<LockdownIPConfigurationParam | LockdownCIDRConfigurationParam>;

export interface Lockdown {
  /**
   * The unique identifier of the Zone Lockdown rule.
   */
  id: string;

  /**
   * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
   * specified in the Zone Lockdown rule. You can include any number of `ip` or
   * `ip_range` configurations.
   */
  configurations: Configuration;

  /**
   * The timestamp of when the rule was created.
   */
  created_on: string;

  /**
   * An informative summary of the rule.
   */
  description: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  modified_on: string;

  /**
   * When true, indicates that the rule is currently paused.
   */
  paused: boolean;

  /**
   * The URLs to include in the rule definition. You can use wildcards. Each entered
   * URL will be escaped before use, which means you can only use simple wildcard
   * patterns.
   */
  urls: Array<LockdownURL>;
}

export interface LockdownCIDRConfiguration {
  /**
   * The configuration target. You must set the target to `ip_range` when specifying
   * an IP address range in the Zone Lockdown rule.
   */
  target?: 'ip_range';

  /**
   * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
   */
  value?: string;
}

export interface LockdownCIDRConfigurationParam {
  /**
   * The configuration target. You must set the target to `ip_range` when specifying
   * an IP address range in the Zone Lockdown rule.
   */
  target?: 'ip_range';

  /**
   * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
   */
  value?: string;
}

export interface LockdownIPConfiguration {
  /**
   * The configuration target. You must set the target to `ip` when specifying an IP
   * address in the Zone Lockdown rule.
   */
  target?: 'ip';

  /**
   * The IP address to match. This address will be compared to the IP address of
   * incoming requests.
   */
  value?: string;
}

export interface LockdownIPConfigurationParam {
  /**
   * The configuration target. You must set the target to `ip` when specifying an IP
   * address in the Zone Lockdown rule.
   */
  target?: 'ip';

  /**
   * The IP address to match. This address will be compared to the IP address of
   * incoming requests.
   */
  value?: string;
}

export type LockdownURL = string;

export interface LockdownDeleteResponse {
  /**
   * The unique identifier of the Zone Lockdown rule.
   */
  id?: string;
}

export interface LockdownCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: A list of IP addresses or CIDR ranges that will be allowed to access
   * the URLs specified in the Zone Lockdown rule. You can include any number of `ip`
   * or `ip_range` configurations.
   */
  configurations: ConfigurationParam;

  /**
   * Body param: The URLs to include in the current WAF override. You can use
   * wildcards. Each entered URL will be escaped before use, which means you can only
   * use simple wildcard patterns.
   */
  urls: Array<OverridesAPI.OverrideURLParam>;
}

export interface LockdownUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: A list of IP addresses or CIDR ranges that will be allowed to access
   * the URLs specified in the Zone Lockdown rule. You can include any number of `ip`
   * or `ip_range` configurations.
   */
  configurations: ConfigurationParam;

  /**
   * Body param: The URLs to include in the current WAF override. You can use
   * wildcards. Each entered URL will be escaped before use, which means you can only
   * use simple wildcard patterns.
   */
  urls: Array<OverridesAPI.OverrideURLParam>;
}

export interface LockdownListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The timestamp of when the rule was created.
   */
  created_on?: string;

  /**
   * Query param: A string to search for in the description of existing rules.
   */
  description?: string;

  /**
   * Query param: A string to search for in the description of existing rules.
   */
  description_search?: string;

  /**
   * Query param: A single IP address to search for in existing rules.
   */
  ip?: string;

  /**
   * Query param: A single IP address range to search for in existing rules.
   */
  ip_range_search?: string;

  /**
   * Query param: A single IP address to search for in existing rules.
   */
  ip_search?: string;

  /**
   * Query param: The timestamp of when the rule was last modified.
   */
  modified_on?: string;

  /**
   * Query param: The priority of the rule to control the processing order. A lower
   * number indicates higher priority. If not provided, any rules with a configured
   * priority will be processed before rules without a priority.
   */
  priority?: number;

  /**
   * Query param: A single URI to search for in the list of URLs of existing rules.
   */
  uri_search?: string;
}

export interface LockdownDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface LockdownGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Lockdowns {
  export {
    type Configuration as Configuration,
    type Lockdown as Lockdown,
    type LockdownCIDRConfiguration as LockdownCIDRConfiguration,
    type LockdownIPConfiguration as LockdownIPConfiguration,
    type LockdownURL as LockdownURL,
    type LockdownDeleteResponse as LockdownDeleteResponse,
    type LockdownsV4PagePaginationArray as LockdownsV4PagePaginationArray,
    type LockdownCreateParams as LockdownCreateParams,
    type LockdownUpdateParams as LockdownUpdateParams,
    type LockdownListParams as LockdownListParams,
    type LockdownDeleteParams as LockdownDeleteParams,
    type LockdownGetParams as LockdownGetParams,
  };
}
