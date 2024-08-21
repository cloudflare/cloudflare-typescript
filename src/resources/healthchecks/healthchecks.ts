// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PreviewsAPI from './previews';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Healthchecks extends APIResource {
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);

  /**
   * Create a new health check.
   */
  create(params: HealthcheckCreateParams, options?: Core.RequestOptions): Core.APIPromise<Healthcheck> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/healthchecks`, { body, ...options }) as Core.APIPromise<{
        result: Healthcheck;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a configured health check.
   */
  update(
    healthcheckId: string,
    params: HealthcheckUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Healthcheck> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/healthchecks/${healthcheckId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Healthcheck }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured health checks.
   */
  list(
    params: HealthcheckListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HealthchecksV4PagePaginationArray, Healthcheck> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/healthchecks`, HealthchecksV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Delete a health check.
   */
  delete(
    healthcheckId: string,
    params: HealthcheckDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthcheckDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/healthchecks/${healthcheckId}`, options) as Core.APIPromise<{
        result: HealthcheckDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch a configured health check.
   */
  edit(
    healthcheckId: string,
    params: HealthcheckEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Healthcheck> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/healthchecks/${healthcheckId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Healthcheck }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured health check.
   */
  get(
    healthcheckId: string,
    params: HealthcheckGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Healthcheck> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/healthchecks/${healthcheckId}`, options) as Core.APIPromise<{
        result: Healthcheck;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class HealthchecksV4PagePaginationArray extends V4PagePaginationArray<Healthcheck> {}

/**
 * WNAM: Western North America, ENAM: Eastern North America, WEU: Western Europe,
 * EEU: Eastern Europe, NSAM: Northern South America, SSAM: Southern South America,
 * OC: Oceania, ME: Middle East, NAF: North Africa, SAF: South Africa, IN: India,
 * SEAS: South East Asia, NEAS: North East Asia, ALL_REGIONS: all regions (BUSINESS
 * and ENTERPRISE customers only).
 */
export type CheckRegion =
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
  | 'ALL_REGIONS';

/**
 * WNAM: Western North America, ENAM: Eastern North America, WEU: Western Europe,
 * EEU: Eastern Europe, NSAM: Northern South America, SSAM: Southern South America,
 * OC: Oceania, ME: Middle East, NAF: North Africa, SAF: South Africa, IN: India,
 * SEAS: South East Asia, NEAS: North East Asia, ALL_REGIONS: all regions (BUSINESS
 * and ENTERPRISE customers only).
 */
export type CheckRegionParam =
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
  | 'ALL_REGIONS';

export interface Healthcheck {
  /**
   * Identifier
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
  check_regions?: Array<CheckRegion> | null;

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
  http_config?: HTTPConfiguration | null;

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
  tcp_config?: TCPConfiguration | null;

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

/**
 * Parameters specific to an HTTP or HTTPS health check.
 */
export interface HTTPConfiguration {
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
  header?: Record<string, Array<string>> | null;

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
 * Parameters specific to an HTTP or HTTPS health check.
 */
export interface HTTPConfigurationParam {
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
  header?: Record<string, Array<string>> | null;

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

export interface QueryHealthcheck {
  /**
   * The hostname or IP address of the origin server to run health checks on.
   */
  address: string;

  /**
   * A short name to identify the health check. Only alphanumeric characters, hyphens
   * and underscores are allowed.
   */
  name: string;

  /**
   * A list of regions from which to run health checks. Null means Cloudflare will
   * pick a default region.
   */
  check_regions?: Array<CheckRegion> | null;

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
  http_config?: HTTPConfiguration | null;

  /**
   * The interval between each health check. Shorter intervals may give quicker
   * notifications if the origin status changes, but will increase load on the origin
   * as we check from multiple locations.
   */
  interval?: number;

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
  tcp_config?: TCPConfiguration | null;

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

/**
 * Parameters specific to TCP health check.
 */
export interface TCPConfiguration {
  /**
   * The TCP connection method to use for the health check.
   */
  method?: 'connection_established';

  /**
   * Port number to connect to for the health check. Defaults to 80.
   */
  port?: number;
}

/**
 * Parameters specific to TCP health check.
 */
export interface TCPConfigurationParam {
  /**
   * The TCP connection method to use for the health check.
   */
  method?: 'connection_established';

  /**
   * Port number to connect to for the health check. Defaults to 80.
   */
  port?: number;
}

export interface HealthcheckDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface HealthcheckCreateParams {
  /**
   * Path param: Identifier
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
  check_regions?: Array<CheckRegionParam> | null;

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
  http_config?: HTTPConfigurationParam | null;

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
  tcp_config?: TCPConfigurationParam | null;

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

export interface HealthcheckUpdateParams {
  /**
   * Path param: Identifier
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
  check_regions?: Array<CheckRegionParam> | null;

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
  http_config?: HTTPConfigurationParam | null;

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
  tcp_config?: TCPConfigurationParam | null;

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

export interface HealthcheckListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;
}

export interface HealthcheckDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface HealthcheckEditParams {
  /**
   * Path param: Identifier
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
  check_regions?: Array<CheckRegionParam> | null;

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
  http_config?: HTTPConfigurationParam | null;

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
  tcp_config?: TCPConfigurationParam | null;

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

export interface HealthcheckGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Healthchecks {
  export import Previews = PreviewsAPI.Previews;
  export import PreviewDeleteResponse = PreviewsAPI.PreviewDeleteResponse;
  export import PreviewCreateParams = PreviewsAPI.PreviewCreateParams;
  export import PreviewDeleteParams = PreviewsAPI.PreviewDeleteParams;
  export import PreviewGetParams = PreviewsAPI.PreviewGetParams;
}
