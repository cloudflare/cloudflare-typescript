// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../pagination';

export class SmartShield extends APIResource {
  /**
   * Set Smart Shield Settings.
   *
   * @example
   * ```ts
   * const smartShield = await client.smartShield.update({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  update(
    params: SmartShieldUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartShieldUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/smart_shield`, { body, ...options }) as Core.APIPromise<{
        result: SmartShieldUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create a new health check.
   *
   * @example
   * ```ts
   * const response = await client.smartShield.createHealthcheck(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     address: 'www.example.com',
   *     name: 'server-1',
   *   },
   * );
   * ```
   */
  createHealthcheck(
    params: SmartShieldCreateHealthcheckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartShieldCreateHealthcheckResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/smart_shield/healthchecks`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SmartShieldCreateHealthcheckResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a health check.
   *
   * @example
   * ```ts
   * const response = await client.smartShield.deleteHealthcheck(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  deleteHealthcheck(
    healthcheckId: string,
    params: SmartShieldDeleteHealthcheckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartShieldDeleteHealthcheckResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/smart_shield/healthchecks/${healthcheckId}`,
        options,
      ) as Core.APIPromise<{ result: SmartShieldDeleteHealthcheckResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch a configured health check.
   *
   * @example
   * ```ts
   * const response = await client.smartShield.editHealthcheck(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     address: 'www.example.com',
   *     name: 'server-1',
   *   },
   * );
   * ```
   */
  editHealthcheck(
    healthcheckId: string,
    params: SmartShieldEditHealthcheckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartShieldEditHealthcheckResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/smart_shield/healthchecks/${healthcheckId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SmartShieldEditHealthcheckResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve Smart Shield Settings.
   *
   * @example
   * ```ts
   * const smartShield = await client.smartShield.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: SmartShieldGetParams, options?: Core.RequestOptions): Core.APIPromise<SmartShieldGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/smart_shield`, options) as Core.APIPromise<{
        result: SmartShieldGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured health check.
   *
   * @example
   * ```ts
   * const response = await client.smartShield.getHealthcheck(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  getHealthcheck(
    healthcheckId: string,
    params: SmartShieldGetHealthcheckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartShieldGetHealthcheckResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/smart_shield/healthchecks/${healthcheckId}`,
        options,
      ) as Core.APIPromise<{ result: SmartShieldGetHealthcheckResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured health checks.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const smartShieldListHealthchecksResponse of client.smartShield.listHealthchecks(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listHealthchecks(
    params: SmartShieldListHealthchecksParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    SmartShieldListHealthchecksResponsesV4PagePaginationArray,
    SmartShieldListHealthchecksResponse
  > {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/smart_shield/healthchecks`,
      SmartShieldListHealthchecksResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Update a configured health check.
   *
   * @example
   * ```ts
   * const response = await client.smartShield.updateHealthcheck(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     errors: [{ code: 1000, message: 'message' }],
   *     messages: [{ code: 1000, message: 'message' }],
   *     result: {},
   *     success: true,
   *   },
   * );
   * ```
   */
  updateHealthcheck(
    healthcheckId: string,
    params: SmartShieldUpdateHealthcheckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartShieldUpdateHealthcheckResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/smart_shield/healthchecks/${healthcheckId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SmartShieldUpdateHealthcheckResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SmartShieldListHealthchecksResponsesV4PagePaginationArray extends V4PagePaginationArray<SmartShieldListHealthchecksResponse> {}

/**
 * A consolidated object containing settings from multiple APIs for partial
 * updates.
 */
export interface SmartShieldUpdateResponse {
  smart_tiered_cache?: SmartShieldUpdateResponse.SmartTieredCache;
}

export namespace SmartShieldUpdateResponse {
  export interface SmartTieredCache {
    /**
     * The id of the Smart Tiered Cache setting.
     */
    id?: string;

    /**
     * Whether the setting is editable.
     */
    editable?: boolean;

    /**
     * The last time the setting was modified.
     */
    modified_on?: string;

    /**
     * Specifies the enablement value of Tiered Cache.
     */
    value?: 'on' | 'off';
  }
}

export interface SmartShieldCreateHealthcheckResponse {
  /**
   * Identifier.
   */
  id?: string;

  /**
   * The hostname or IP address of the origin server to run health checks on.
   */
  address?: string;

  /**
   * A list of regions from which to run health checks. Null means Cloudflare will
   * pick a default region.
   */
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'IN'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

  /**
   * The number of consecutive fails required from a health check before changing the
   * health to unhealthy.
   */
  consecutive_fails?: number;

  /**
   * The number of consecutive successes required from a health check before changing
   * the health to healthy.
   */
  consecutive_successes?: number;

  created_on?: string;

  /**
   * A human-readable description of the health check.
   */
  description?: string;

  /**
   * The current failure reason if status is unhealthy.
   */
  failure_reason?: string;

  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  http_config?: SmartShieldCreateHealthcheckResponse.HTTPConfig | null;

  /**
   * The interval between each health check. Shorter intervals may give quicker
   * notifications if the origin status changes, but will increase load on the origin
   * as we check from multiple locations.
   */
  interval?: number;

  modified_on?: string;

  /**
   * A short name to identify the health check. Only alphanumeric characters, hyphens
   * and underscores are allowed.
   */
  name?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The current status of the origin server according to the health check.
   */
  status?: 'unknown' | 'healthy' | 'unhealthy' | 'suspended';

  /**
   * If suspended, no health checks are sent to the origin.
   */
  suspended?: boolean;

  /**
   * Parameters specific to TCP health check.
   */
  tcp_config?: SmartShieldCreateHealthcheckResponse.TCPConfig | null;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP', 'HTTPS' and 'TCP'.
   */
  type?: string;
}

export namespace SmartShieldCreateHealthcheckResponse {
  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  export interface HTTPConfig {
    /**
     * Do not validate the certificate when the health check uses HTTPS.
     */
    allow_insecure?: boolean;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy.
     */
    expected_body?: string;

    /**
     * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all
     * codes starting with 2) of the health check.
     */
    expected_codes?: Array<string> | null;

    /**
     * Follow redirects if the origin returns a 3xx status code.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden.
     */
    header?: { [key: string]: Array<string> } | null;

    /**
     * The HTTP method to use for the health check.
     */
    method?: 'GET' | 'HEAD';

    /**
     * The endpoint path to health check against.
     */
    path?: string;

    /**
     * Port number to connect to for the health check. Defaults to 80 if type is HTTP
     * or 443 if type is HTTPS.
     */
    port?: number;
  }

  /**
   * Parameters specific to TCP health check.
   */
  export interface TCPConfig {
    /**
     * The TCP connection method to use for the health check.
     */
    method?: 'connection_established';

    /**
     * Port number to connect to for the health check. Defaults to 80.
     */
    port?: number;
  }
}

export interface SmartShieldDeleteHealthcheckResponse {
  /**
   * Identifier.
   */
  id?: string;
}

export interface SmartShieldEditHealthcheckResponse {
  /**
   * Identifier.
   */
  id?: string;

  /**
   * The hostname or IP address of the origin server to run health checks on.
   */
  address?: string;

  /**
   * A list of regions from which to run health checks. Null means Cloudflare will
   * pick a default region.
   */
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'IN'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

  /**
   * The number of consecutive fails required from a health check before changing the
   * health to unhealthy.
   */
  consecutive_fails?: number;

  /**
   * The number of consecutive successes required from a health check before changing
   * the health to healthy.
   */
  consecutive_successes?: number;

  created_on?: string;

  /**
   * A human-readable description of the health check.
   */
  description?: string;

  /**
   * The current failure reason if status is unhealthy.
   */
  failure_reason?: string;

  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  http_config?: SmartShieldEditHealthcheckResponse.HTTPConfig | null;

  /**
   * The interval between each health check. Shorter intervals may give quicker
   * notifications if the origin status changes, but will increase load on the origin
   * as we check from multiple locations.
   */
  interval?: number;

  modified_on?: string;

  /**
   * A short name to identify the health check. Only alphanumeric characters, hyphens
   * and underscores are allowed.
   */
  name?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The current status of the origin server according to the health check.
   */
  status?: 'unknown' | 'healthy' | 'unhealthy' | 'suspended';

  /**
   * If suspended, no health checks are sent to the origin.
   */
  suspended?: boolean;

  /**
   * Parameters specific to TCP health check.
   */
  tcp_config?: SmartShieldEditHealthcheckResponse.TCPConfig | null;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP', 'HTTPS' and 'TCP'.
   */
  type?: string;
}

export namespace SmartShieldEditHealthcheckResponse {
  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  export interface HTTPConfig {
    /**
     * Do not validate the certificate when the health check uses HTTPS.
     */
    allow_insecure?: boolean;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy.
     */
    expected_body?: string;

    /**
     * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all
     * codes starting with 2) of the health check.
     */
    expected_codes?: Array<string> | null;

    /**
     * Follow redirects if the origin returns a 3xx status code.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden.
     */
    header?: { [key: string]: Array<string> } | null;

    /**
     * The HTTP method to use for the health check.
     */
    method?: 'GET' | 'HEAD';

    /**
     * The endpoint path to health check against.
     */
    path?: string;

    /**
     * Port number to connect to for the health check. Defaults to 80 if type is HTTP
     * or 443 if type is HTTPS.
     */
    port?: number;
  }

  /**
   * Parameters specific to TCP health check.
   */
  export interface TCPConfig {
    /**
     * The TCP connection method to use for the health check.
     */
    method?: 'connection_established';

    /**
     * Port number to connect to for the health check. Defaults to 80.
     */
    port?: number;
  }
}

/**
 * A consolidated object containing settings from multiple APIs for partial
 * updates.
 */
export interface SmartShieldGetResponse {
  cache_reserve?: SmartShieldGetResponse.CacheReserve;

  /**
   * The total number of health checks associated with the zone.
   */
  healthchecks_count?: number;

  regional_tiered_cache?: SmartShieldGetResponse.RegionalTieredCache;

  smart_routing?: SmartShieldGetResponse.SmartRouting;

  smart_tiered_cache?: SmartShieldGetResponse.SmartTieredCache;
}

export namespace SmartShieldGetResponse {
  export interface CacheReserve {
    /**
     * The id of the Cache Reserve setting.
     */
    id?: string;

    /**
     * Whether the setting is editable.
     */
    editable?: boolean;

    /**
     * Specifies the enablement value of Cache Reserve.
     */
    value?: 'on' | 'off';
  }

  export interface RegionalTieredCache {
    /**
     * The id of the Regional Tiered Cache setting.
     */
    id?: string;

    /**
     * Whether the setting is editable.
     */
    editable?: boolean;

    /**
     * Specifies the enablement value of Cache Reserve.
     */
    value?: 'on' | 'off';
  }

  export interface SmartRouting {
    /**
     * The id of the Smart Routing setting.
     */
    id?: string;

    /**
     * Whether the setting is editable.
     */
    editable?: boolean;

    /**
     * Specifies the enablement value of Argo Smart Routing.
     */
    value?: 'on' | 'off';
  }

  export interface SmartTieredCache {
    /**
     * The id of the Smart Tiered Cache setting.
     */
    id?: string;

    /**
     * Whether the setting is editable.
     */
    editable?: boolean;

    /**
     * The last time the setting was modified.
     */
    modified_on?: string;

    /**
     * Specifies the enablement value of Tiered Cache.
     */
    value?: 'on' | 'off';
  }
}

export interface SmartShieldGetHealthcheckResponse {
  /**
   * Identifier.
   */
  id?: string;

  /**
   * The hostname or IP address of the origin server to run health checks on.
   */
  address?: string;

  /**
   * A list of regions from which to run health checks. Null means Cloudflare will
   * pick a default region.
   */
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'IN'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

  /**
   * The number of consecutive fails required from a health check before changing the
   * health to unhealthy.
   */
  consecutive_fails?: number;

  /**
   * The number of consecutive successes required from a health check before changing
   * the health to healthy.
   */
  consecutive_successes?: number;

  created_on?: string;

  /**
   * A human-readable description of the health check.
   */
  description?: string;

  /**
   * The current failure reason if status is unhealthy.
   */
  failure_reason?: string;

  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  http_config?: SmartShieldGetHealthcheckResponse.HTTPConfig | null;

  /**
   * The interval between each health check. Shorter intervals may give quicker
   * notifications if the origin status changes, but will increase load on the origin
   * as we check from multiple locations.
   */
  interval?: number;

  modified_on?: string;

  /**
   * A short name to identify the health check. Only alphanumeric characters, hyphens
   * and underscores are allowed.
   */
  name?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The current status of the origin server according to the health check.
   */
  status?: 'unknown' | 'healthy' | 'unhealthy' | 'suspended';

  /**
   * If suspended, no health checks are sent to the origin.
   */
  suspended?: boolean;

  /**
   * Parameters specific to TCP health check.
   */
  tcp_config?: SmartShieldGetHealthcheckResponse.TCPConfig | null;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP', 'HTTPS' and 'TCP'.
   */
  type?: string;
}

export namespace SmartShieldGetHealthcheckResponse {
  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  export interface HTTPConfig {
    /**
     * Do not validate the certificate when the health check uses HTTPS.
     */
    allow_insecure?: boolean;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy.
     */
    expected_body?: string;

    /**
     * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all
     * codes starting with 2) of the health check.
     */
    expected_codes?: Array<string> | null;

    /**
     * Follow redirects if the origin returns a 3xx status code.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden.
     */
    header?: { [key: string]: Array<string> } | null;

    /**
     * The HTTP method to use for the health check.
     */
    method?: 'GET' | 'HEAD';

    /**
     * The endpoint path to health check against.
     */
    path?: string;

    /**
     * Port number to connect to for the health check. Defaults to 80 if type is HTTP
     * or 443 if type is HTTPS.
     */
    port?: number;
  }

  /**
   * Parameters specific to TCP health check.
   */
  export interface TCPConfig {
    /**
     * The TCP connection method to use for the health check.
     */
    method?: 'connection_established';

    /**
     * Port number to connect to for the health check. Defaults to 80.
     */
    port?: number;
  }
}

export interface SmartShieldListHealthchecksResponse {
  /**
   * Identifier.
   */
  id?: string;

  /**
   * The hostname or IP address of the origin server to run health checks on.
   */
  address?: string;

  /**
   * A list of regions from which to run health checks. Null means Cloudflare will
   * pick a default region.
   */
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'IN'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

  /**
   * The number of consecutive fails required from a health check before changing the
   * health to unhealthy.
   */
  consecutive_fails?: number;

  /**
   * The number of consecutive successes required from a health check before changing
   * the health to healthy.
   */
  consecutive_successes?: number;

  created_on?: string;

  /**
   * A human-readable description of the health check.
   */
  description?: string;

  /**
   * The current failure reason if status is unhealthy.
   */
  failure_reason?: string;

  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  http_config?: SmartShieldListHealthchecksResponse.HTTPConfig | null;

  /**
   * The interval between each health check. Shorter intervals may give quicker
   * notifications if the origin status changes, but will increase load on the origin
   * as we check from multiple locations.
   */
  interval?: number;

  modified_on?: string;

  /**
   * A short name to identify the health check. Only alphanumeric characters, hyphens
   * and underscores are allowed.
   */
  name?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The current status of the origin server according to the health check.
   */
  status?: 'unknown' | 'healthy' | 'unhealthy' | 'suspended';

  /**
   * If suspended, no health checks are sent to the origin.
   */
  suspended?: boolean;

  /**
   * Parameters specific to TCP health check.
   */
  tcp_config?: SmartShieldListHealthchecksResponse.TCPConfig | null;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP', 'HTTPS' and 'TCP'.
   */
  type?: string;
}

export namespace SmartShieldListHealthchecksResponse {
  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  export interface HTTPConfig {
    /**
     * Do not validate the certificate when the health check uses HTTPS.
     */
    allow_insecure?: boolean;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy.
     */
    expected_body?: string;

    /**
     * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all
     * codes starting with 2) of the health check.
     */
    expected_codes?: Array<string> | null;

    /**
     * Follow redirects if the origin returns a 3xx status code.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden.
     */
    header?: { [key: string]: Array<string> } | null;

    /**
     * The HTTP method to use for the health check.
     */
    method?: 'GET' | 'HEAD';

    /**
     * The endpoint path to health check against.
     */
    path?: string;

    /**
     * Port number to connect to for the health check. Defaults to 80 if type is HTTP
     * or 443 if type is HTTPS.
     */
    port?: number;
  }

  /**
   * Parameters specific to TCP health check.
   */
  export interface TCPConfig {
    /**
     * The TCP connection method to use for the health check.
     */
    method?: 'connection_established';

    /**
     * Port number to connect to for the health check. Defaults to 80.
     */
    port?: number;
  }
}

export interface SmartShieldUpdateHealthcheckResponse {
  /**
   * Identifier.
   */
  id?: string;

  /**
   * The hostname or IP address of the origin server to run health checks on.
   */
  address?: string;

  /**
   * A list of regions from which to run health checks. Null means Cloudflare will
   * pick a default region.
   */
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'IN'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

  /**
   * The number of consecutive fails required from a health check before changing the
   * health to unhealthy.
   */
  consecutive_fails?: number;

  /**
   * The number of consecutive successes required from a health check before changing
   * the health to healthy.
   */
  consecutive_successes?: number;

  created_on?: string;

  /**
   * A human-readable description of the health check.
   */
  description?: string;

  /**
   * The current failure reason if status is unhealthy.
   */
  failure_reason?: string;

  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  http_config?: SmartShieldUpdateHealthcheckResponse.HTTPConfig | null;

  /**
   * The interval between each health check. Shorter intervals may give quicker
   * notifications if the origin status changes, but will increase load on the origin
   * as we check from multiple locations.
   */
  interval?: number;

  modified_on?: string;

  /**
   * A short name to identify the health check. Only alphanumeric characters, hyphens
   * and underscores are allowed.
   */
  name?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The current status of the origin server according to the health check.
   */
  status?: 'unknown' | 'healthy' | 'unhealthy' | 'suspended';

  /**
   * If suspended, no health checks are sent to the origin.
   */
  suspended?: boolean;

  /**
   * Parameters specific to TCP health check.
   */
  tcp_config?: SmartShieldUpdateHealthcheckResponse.TCPConfig | null;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP', 'HTTPS' and 'TCP'.
   */
  type?: string;
}

export namespace SmartShieldUpdateHealthcheckResponse {
  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  export interface HTTPConfig {
    /**
     * Do not validate the certificate when the health check uses HTTPS.
     */
    allow_insecure?: boolean;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy.
     */
    expected_body?: string;

    /**
     * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all
     * codes starting with 2) of the health check.
     */
    expected_codes?: Array<string> | null;

    /**
     * Follow redirects if the origin returns a 3xx status code.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden.
     */
    header?: { [key: string]: Array<string> } | null;

    /**
     * The HTTP method to use for the health check.
     */
    method?: 'GET' | 'HEAD';

    /**
     * The endpoint path to health check against.
     */
    path?: string;

    /**
     * Port number to connect to for the health check. Defaults to 80 if type is HTTP
     * or 443 if type is HTTPS.
     */
    port?: number;
  }

  /**
   * Parameters specific to TCP health check.
   */
  export interface TCPConfig {
    /**
     * The TCP connection method to use for the health check.
     */
    method?: 'connection_established';

    /**
     * Port number to connect to for the health check. Defaults to 80.
     */
    port?: number;
  }
}

export interface SmartShieldUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param:
   */
  cache_reserve?: SmartShieldUpdateParams.CacheReserve;

  /**
   * Body param:
   */
  regional_tiered_cache?: SmartShieldUpdateParams.RegionalTieredCache;

  /**
   * Body param:
   */
  smart_routing?: SmartShieldUpdateParams.SmartRouting;

  /**
   * Body param:
   */
  smart_tiered_cache?: SmartShieldUpdateParams.SmartTieredCache;
}

export namespace SmartShieldUpdateParams {
  export interface CacheReserve {
    /**
     * Specifies the enablement value of Cache Reserve.
     */
    value?: 'on' | 'off';
  }

  export interface RegionalTieredCache {
    /**
     * Specifies the enablement value of Regional Tiered Cache.
     */
    value?: 'on' | 'off';
  }

  export interface SmartRouting {
    /**
     * Specifies the enablement value of Smart Routing.
     */
    value?: 'on' | 'off';
  }

  export interface SmartTieredCache {
    /**
     * Specifies the enablement value of Smart Tiered Cache.
     */
    value?: 'on' | 'off';
  }
}

export interface SmartShieldCreateHealthcheckParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: The hostname or IP address of the origin server to run health checks
   * on.
   */
  address: string;

  /**
   * Body param: A short name to identify the health check. Only alphanumeric
   * characters, hyphens and underscores are allowed.
   */
  name: string;

  /**
   * Body param: A list of regions from which to run health checks. Null means
   * Cloudflare will pick a default region.
   */
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'IN'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

  /**
   * Body param: The number of consecutive fails required from a health check before
   * changing the health to unhealthy.
   */
  consecutive_fails?: number;

  /**
   * Body param: The number of consecutive successes required from a health check
   * before changing the health to healthy.
   */
  consecutive_successes?: number;

  /**
   * Body param: A human-readable description of the health check.
   */
  description?: string;

  /**
   * Body param: Parameters specific to an HTTP or HTTPS health check.
   */
  http_config?: SmartShieldCreateHealthcheckParams.HTTPConfig | null;

  /**
   * Body param: The interval between each health check. Shorter intervals may give
   * quicker notifications if the origin status changes, but will increase load on
   * the origin as we check from multiple locations.
   */
  interval?: number;

  /**
   * Body param: The number of retries to attempt in case of a timeout before marking
   * the origin as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * Body param: If suspended, no health checks are sent to the origin.
   */
  suspended?: boolean;

  /**
   * Body param: Parameters specific to TCP health check.
   */
  tcp_config?: SmartShieldCreateHealthcheckParams.TCPConfig | null;

  /**
   * Body param: The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * Body param: The protocol to use for the health check. Currently supported
   * protocols are 'HTTP', 'HTTPS' and 'TCP'.
   */
  type?: string;
}

export namespace SmartShieldCreateHealthcheckParams {
  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  export interface HTTPConfig {
    /**
     * Do not validate the certificate when the health check uses HTTPS.
     */
    allow_insecure?: boolean;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy.
     */
    expected_body?: string;

    /**
     * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all
     * codes starting with 2) of the health check.
     */
    expected_codes?: Array<string> | null;

    /**
     * Follow redirects if the origin returns a 3xx status code.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden.
     */
    header?: { [key: string]: Array<string> } | null;

    /**
     * The HTTP method to use for the health check.
     */
    method?: 'GET' | 'HEAD';

    /**
     * The endpoint path to health check against.
     */
    path?: string;

    /**
     * Port number to connect to for the health check. Defaults to 80 if type is HTTP
     * or 443 if type is HTTPS.
     */
    port?: number;
  }

  /**
   * Parameters specific to TCP health check.
   */
  export interface TCPConfig {
    /**
     * The TCP connection method to use for the health check.
     */
    method?: 'connection_established';

    /**
     * Port number to connect to for the health check. Defaults to 80.
     */
    port?: number;
  }
}

export interface SmartShieldDeleteHealthcheckParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface SmartShieldEditHealthcheckParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: The hostname or IP address of the origin server to run health checks
   * on.
   */
  address: string;

  /**
   * Body param: A short name to identify the health check. Only alphanumeric
   * characters, hyphens and underscores are allowed.
   */
  name: string;

  /**
   * Body param: A list of regions from which to run health checks. Null means
   * Cloudflare will pick a default region.
   */
  check_regions?: Array<
    | 'WNAM'
    | 'ENAM'
    | 'WEU'
    | 'EEU'
    | 'NSAM'
    | 'SSAM'
    | 'OC'
    | 'ME'
    | 'NAF'
    | 'SAF'
    | 'IN'
    | 'SEAS'
    | 'NEAS'
    | 'ALL_REGIONS'
  > | null;

  /**
   * Body param: The number of consecutive fails required from a health check before
   * changing the health to unhealthy.
   */
  consecutive_fails?: number;

  /**
   * Body param: The number of consecutive successes required from a health check
   * before changing the health to healthy.
   */
  consecutive_successes?: number;

  /**
   * Body param: A human-readable description of the health check.
   */
  description?: string;

  /**
   * Body param: Parameters specific to an HTTP or HTTPS health check.
   */
  http_config?: SmartShieldEditHealthcheckParams.HTTPConfig | null;

  /**
   * Body param: The interval between each health check. Shorter intervals may give
   * quicker notifications if the origin status changes, but will increase load on
   * the origin as we check from multiple locations.
   */
  interval?: number;

  /**
   * Body param: The number of retries to attempt in case of a timeout before marking
   * the origin as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * Body param: If suspended, no health checks are sent to the origin.
   */
  suspended?: boolean;

  /**
   * Body param: Parameters specific to TCP health check.
   */
  tcp_config?: SmartShieldEditHealthcheckParams.TCPConfig | null;

  /**
   * Body param: The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * Body param: The protocol to use for the health check. Currently supported
   * protocols are 'HTTP', 'HTTPS' and 'TCP'.
   */
  type?: string;
}

export namespace SmartShieldEditHealthcheckParams {
  /**
   * Parameters specific to an HTTP or HTTPS health check.
   */
  export interface HTTPConfig {
    /**
     * Do not validate the certificate when the health check uses HTTPS.
     */
    allow_insecure?: boolean;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy.
     */
    expected_body?: string;

    /**
     * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all
     * codes starting with 2) of the health check.
     */
    expected_codes?: Array<string> | null;

    /**
     * Follow redirects if the origin returns a 3xx status code.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden.
     */
    header?: { [key: string]: Array<string> } | null;

    /**
     * The HTTP method to use for the health check.
     */
    method?: 'GET' | 'HEAD';

    /**
     * The endpoint path to health check against.
     */
    path?: string;

    /**
     * Port number to connect to for the health check. Defaults to 80 if type is HTTP
     * or 443 if type is HTTPS.
     */
    port?: number;
  }

  /**
   * Parameters specific to TCP health check.
   */
  export interface TCPConfig {
    /**
     * The TCP connection method to use for the health check.
     */
    method?: 'connection_established';

    /**
     * Port number to connect to for the health check. Defaults to 80.
     */
    port?: number;
  }
}

export interface SmartShieldGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface SmartShieldGetHealthcheckParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface SmartShieldListHealthchecksParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;
}

export interface SmartShieldUpdateHealthcheckParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param:
   */
  errors: Array<Shared.ResponseInfoParam>;

  /**
   * Body param:
   */
  messages: Array<Shared.ResponseInfoParam>;

  /**
   * Body param:
   */
  result: SmartShieldUpdateHealthcheckParams.Result;

  /**
   * Body param: Whether the API call was successful.
   */
  success: true;
}

export namespace SmartShieldUpdateHealthcheckParams {
  export interface Result {
    /**
     * The hostname or IP address of the origin server to run health checks on.
     */
    address?: string;

    /**
     * A list of regions from which to run health checks. Null means Cloudflare will
     * pick a default region.
     */
    check_regions?: Array<
      | 'WNAM'
      | 'ENAM'
      | 'WEU'
      | 'EEU'
      | 'NSAM'
      | 'SSAM'
      | 'OC'
      | 'ME'
      | 'NAF'
      | 'SAF'
      | 'IN'
      | 'SEAS'
      | 'NEAS'
      | 'ALL_REGIONS'
    > | null;

    /**
     * The number of consecutive fails required from a health check before changing the
     * health to unhealthy.
     */
    consecutive_fails?: number;

    /**
     * The number of consecutive successes required from a health check before changing
     * the health to healthy.
     */
    consecutive_successes?: number;

    /**
     * A human-readable description of the health check.
     */
    description?: string;

    /**
     * Parameters specific to an HTTP or HTTPS health check.
     */
    http_config?: Result.HTTPConfig | null;

    /**
     * The interval between each health check. Shorter intervals may give quicker
     * notifications if the origin status changes, but will increase load on the origin
     * as we check from multiple locations.
     */
    interval?: number;

    /**
     * A short name to identify the health check. Only alphanumeric characters, hyphens
     * and underscores are allowed.
     */
    name?: string;

    /**
     * The number of retries to attempt in case of a timeout before marking the origin
     * as unhealthy. Retries are attempted immediately.
     */
    retries?: number;

    /**
     * If suspended, no health checks are sent to the origin.
     */
    suspended?: boolean;

    /**
     * Parameters specific to TCP health check.
     */
    tcp_config?: Result.TCPConfig | null;

    /**
     * The timeout (in seconds) before marking the health check as failed.
     */
    timeout?: number;

    /**
     * The protocol to use for the health check. Currently supported protocols are
     * 'HTTP', 'HTTPS' and 'TCP'.
     */
    type?: string;
  }

  export namespace Result {
    /**
     * Parameters specific to an HTTP or HTTPS health check.
     */
    export interface HTTPConfig {
      /**
       * Do not validate the certificate when the health check uses HTTPS.
       */
      allow_insecure?: boolean;

      /**
       * A case-insensitive sub-string to look for in the response body. If this string
       * is not found, the origin will be marked as unhealthy.
       */
      expected_body?: string;

      /**
       * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all
       * codes starting with 2) of the health check.
       */
      expected_codes?: Array<string> | null;

      /**
       * Follow redirects if the origin returns a 3xx status code.
       */
      follow_redirects?: boolean;

      /**
       * The HTTP request headers to send in the health check. It is recommended you set
       * a Host header by default. The User-Agent header cannot be overridden.
       */
      header?: { [key: string]: Array<string> } | null;

      /**
       * The HTTP method to use for the health check.
       */
      method?: 'GET' | 'HEAD';

      /**
       * The endpoint path to health check against.
       */
      path?: string;

      /**
       * Port number to connect to for the health check. Defaults to 80 if type is HTTP
       * or 443 if type is HTTPS.
       */
      port?: number;
    }

    /**
     * Parameters specific to TCP health check.
     */
    export interface TCPConfig {
      /**
       * The TCP connection method to use for the health check.
       */
      method?: 'connection_established';

      /**
       * Port number to connect to for the health check. Defaults to 80.
       */
      port?: number;
    }
  }
}

SmartShield.SmartShieldListHealthchecksResponsesV4PagePaginationArray =
  SmartShieldListHealthchecksResponsesV4PagePaginationArray;

export declare namespace SmartShield {
  export {
    type SmartShieldUpdateResponse as SmartShieldUpdateResponse,
    type SmartShieldCreateHealthcheckResponse as SmartShieldCreateHealthcheckResponse,
    type SmartShieldDeleteHealthcheckResponse as SmartShieldDeleteHealthcheckResponse,
    type SmartShieldEditHealthcheckResponse as SmartShieldEditHealthcheckResponse,
    type SmartShieldGetResponse as SmartShieldGetResponse,
    type SmartShieldGetHealthcheckResponse as SmartShieldGetHealthcheckResponse,
    type SmartShieldListHealthchecksResponse as SmartShieldListHealthchecksResponse,
    type SmartShieldUpdateHealthcheckResponse as SmartShieldUpdateHealthcheckResponse,
    SmartShieldListHealthchecksResponsesV4PagePaginationArray as SmartShieldListHealthchecksResponsesV4PagePaginationArray,
    type SmartShieldUpdateParams as SmartShieldUpdateParams,
    type SmartShieldCreateHealthcheckParams as SmartShieldCreateHealthcheckParams,
    type SmartShieldDeleteHealthcheckParams as SmartShieldDeleteHealthcheckParams,
    type SmartShieldEditHealthcheckParams as SmartShieldEditHealthcheckParams,
    type SmartShieldGetParams as SmartShieldGetParams,
    type SmartShieldGetHealthcheckParams as SmartShieldGetHealthcheckParams,
    type SmartShieldListHealthchecksParams as SmartShieldListHealthchecksParams,
    type SmartShieldUpdateHealthcheckParams as SmartShieldUpdateHealthcheckParams,
  };
}
