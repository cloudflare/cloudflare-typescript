// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PreviewsAPI from 'cloudflare/resources/healthchecks/previews';
import * as HealthchecksAPI from 'cloudflare/resources/healthchecks/healthchecks';

export class Previews extends APIResource {
  /**
   * Create a new preview health check.
   */
  create(
    params: PreviewCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthchecksAPI.Healthcheck> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/healthchecks/preview`, { body, ...options }) as Core.APIPromise<{
        result: HealthchecksAPI.Healthcheck;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a health check.
   */
  delete(
    healthcheckId: string,
    params: PreviewDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PreviewDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/healthchecks/preview/${healthcheckId}`,
        options,
      ) as Core.APIPromise<{ result: PreviewDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured health check preview.
   */
  get(
    healthcheckId: string,
    params: PreviewGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthchecksAPI.Healthcheck> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/healthchecks/preview/${healthcheckId}`,
        options,
      ) as Core.APIPromise<{ result: HealthchecksAPI.Healthcheck }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PreviewDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface PreviewCreateParams {
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
  http_config?: PreviewCreateParams.HTTPConfig | null;

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
  tcp_config?: PreviewCreateParams.TcpConfig | null;

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

export namespace PreviewCreateParams {
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
    header?: unknown | null;

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
  export interface TcpConfig {
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

export interface PreviewDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface PreviewGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Previews {
  export import PreviewDeleteResponse = PreviewsAPI.PreviewDeleteResponse;
  export import PreviewCreateParams = PreviewsAPI.PreviewCreateParams;
  export import PreviewDeleteParams = PreviewsAPI.PreviewDeleteParams;
  export import PreviewGetParams = PreviewsAPI.PreviewGetParams;
}
