// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HealthAPI from 'cloudflare/resources/load-balancers/pools/health';

export class Health extends APIResource {
  /**
   * Preview pool health using provided monitor details. The returned preview_id can
   * be used in the preview endpoint to retrieve the results.
   */
  create(
    accountId: string,
    poolId: string,
    body: HealthCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/load_balancers/pools/${poolId}/preview`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HealthCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch the latest pool health status for a single pool.
   */
  get(accountId: string, poolId: string, options?: Core.RequestOptions): Core.APIPromise<HealthGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/load_balancers/pools/${poolId}/health`,
        options,
      ) as Core.APIPromise<{ result: HealthGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HealthCreateResponse {
  /**
   * Monitored pool IDs mapped to their respective names.
   */
  pools?: Record<string, string>;

  preview_id?: string;
}

/**
 * A list of regions from which to run health checks. Null means every Cloudflare
 * data center.
 */
export type HealthGetResponse = unknown | string | null;

export interface HealthCreateParams {
  /**
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes: string;

  /**
   * Do not validate the certificate when monitor use HTTPS. This parameter is
   * currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * To be marked unhealthy the monitored origin must fail this healthcheck N
   * consecutive times.
   */
  consecutive_down?: number;

  /**
   * To be marked healthy the monitored origin must pass this healthcheck N
   * consecutive times.
   */
  consecutive_up?: number;

  /**
   * Object description.
   */
  description?: string;

  /**
   * A case-insensitive sub-string to look for in the response body. If this string
   * is not found, the origin will be marked as unhealthy. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * Follow redirects if returned by the origin. This parameter is only valid for
   * HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * The HTTP request headers to send in the health check. It is recommended you set
   * a Host header by default. The User-Agent header cannot be overridden. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * The interval between each health check. Shorter intervals may improve failover
   * time, but will increase load on the origins as we check from multiple locations.
   */
  interval?: number;

  /**
   * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS
   * based checks and 'connection_established' for TCP based health checks.
   */
  method?: string;

  /**
   * The endpoint path you want to conduct a health check against. This parameter is
   * only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * The port number to connect to for the health check. Required for TCP, UDP, and
   * SMTP checks. HTTP and HTTPS checks should only define the port when using a
   * non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Assign this monitor to emulate the specified zone while probing. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export namespace Health {
  export import HealthCreateResponse = HealthAPI.HealthCreateResponse;
  export import HealthGetResponse = HealthAPI.HealthGetResponse;
  export import HealthCreateParams = HealthAPI.HealthCreateParams;
}
