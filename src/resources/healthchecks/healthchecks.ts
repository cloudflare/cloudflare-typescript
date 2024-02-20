// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HealthchecksAPI from 'cloudflare/resources/healthchecks/healthchecks';
import * as PreviewsAPI from 'cloudflare/resources/healthchecks/previews';

export class Healthchecks extends APIResource {
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);

  /**
   * Create a new health check.
   */
  create(
    zoneIdentifier: string,
    body: HealthcheckCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthcheckCreateResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/healthchecks`, { body, ...options }) as Core.APIPromise<{
        result: HealthcheckCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a configured health check.
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: HealthcheckUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthcheckUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/healthchecks/${identifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HealthcheckUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured health checks.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthcheckListResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/healthchecks`, options) as Core.APIPromise<{
        result: HealthcheckListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a health check.
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthcheckDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/healthchecks/${identifier}`, options) as Core.APIPromise<{
        result: HealthcheckDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured health check.
   */
  get(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthcheckGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/healthchecks/${identifier}`, options) as Core.APIPromise<{
        result: HealthcheckGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HealthcheckCreateResponse {
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
  http_config?: HealthcheckCreateResponse.HTTPConfig | null;

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
  tcp_config?: HealthcheckCreateResponse.TcpConfig | null;

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

export namespace HealthcheckCreateResponse {
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

export interface HealthcheckUpdateResponse {
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
  http_config?: HealthcheckUpdateResponse.HTTPConfig | null;

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
  tcp_config?: HealthcheckUpdateResponse.TcpConfig | null;

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

export namespace HealthcheckUpdateResponse {
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

export type HealthcheckListResponse = Array<HealthcheckListResponse.HealthcheckListResponseItem>;

export namespace HealthcheckListResponse {
  export interface HealthcheckListResponseItem {
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
    http_config?: HealthcheckListResponseItem.HTTPConfig | null;

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
    tcp_config?: HealthcheckListResponseItem.TcpConfig | null;

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

  export namespace HealthcheckListResponseItem {
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
}

export interface HealthcheckDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface HealthcheckGetResponse {
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
  http_config?: HealthcheckGetResponse.HTTPConfig | null;

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
  tcp_config?: HealthcheckGetResponse.TcpConfig | null;

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

export namespace HealthcheckGetResponse {
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

export interface HealthcheckCreateParams {
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
  http_config?: HealthcheckCreateParams.HTTPConfig | null;

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
  tcp_config?: HealthcheckCreateParams.TcpConfig | null;

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

export namespace HealthcheckCreateParams {
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

export interface HealthcheckUpdateParams {
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
  http_config?: HealthcheckUpdateParams.HTTPConfig | null;

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
  tcp_config?: HealthcheckUpdateParams.TcpConfig | null;

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

export namespace HealthcheckUpdateParams {
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

export namespace Healthchecks {
  export import HealthcheckCreateResponse = HealthchecksAPI.HealthcheckCreateResponse;
  export import HealthcheckUpdateResponse = HealthchecksAPI.HealthcheckUpdateResponse;
  export import HealthcheckListResponse = HealthchecksAPI.HealthcheckListResponse;
  export import HealthcheckDeleteResponse = HealthchecksAPI.HealthcheckDeleteResponse;
  export import HealthcheckGetResponse = HealthchecksAPI.HealthcheckGetResponse;
  export import HealthcheckCreateParams = HealthchecksAPI.HealthcheckCreateParams;
  export import HealthcheckUpdateParams = HealthchecksAPI.HealthcheckUpdateParams;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewCreateResponse = PreviewsAPI.PreviewCreateResponse;
  export import PreviewDeleteResponse = PreviewsAPI.PreviewDeleteResponse;
  export import PreviewGetResponse = PreviewsAPI.PreviewGetResponse;
  export import PreviewCreateParams = PreviewsAPI.PreviewCreateParams;
}
