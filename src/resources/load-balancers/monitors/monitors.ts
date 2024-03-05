// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MonitorsAPI from 'cloudflare/resources/load-balancers/monitors/monitors';
import * as PreviewsAPI from 'cloudflare/resources/load-balancers/monitors/previews';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/monitors/references';

export class Monitors extends APIResource {
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * Create a configured monitor.
   */
  create(params: MonitorCreateParams, options?: Core.RequestOptions): Core.APIPromise<MonitorCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/load_balancers/monitors`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MonitorCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a configured monitor.
   */
  update(
    monitorId: string,
    params: MonitorUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/load_balancers/monitors/${monitorId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MonitorUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured monitors for an account.
   */
  list(
    params: MonitorListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/monitors`, options) as Core.APIPromise<{
        result: MonitorListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a configured monitor.
   */
  delete(
    monitorId: string,
    params: MonitorDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/load_balancers/monitors/${monitorId}`,
        options,
      ) as Core.APIPromise<{ result: MonitorDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to an existing monitor, overwriting the supplied properties.
   */
  edit(
    monitorId: string,
    params: MonitorEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/load_balancers/monitors/${monitorId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MonitorEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a single configured monitor for an account.
   */
  get(
    monitorId: string,
    params: MonitorGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/load_balancers/monitors/${monitorId}`,
        options,
      ) as Core.APIPromise<{ result: MonitorGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MonitorCreateResponse {
  id?: string;

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

  created_on?: string;

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
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes?: string;

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

  modified_on?: string;

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

export interface MonitorUpdateResponse {
  id?: string;

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

  created_on?: string;

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
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes?: string;

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

  modified_on?: string;

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

export type MonitorListResponse = Array<MonitorListResponse.MonitorListResponseItem>;

export namespace MonitorListResponse {
  export interface MonitorListResponseItem {
    id?: string;

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

    created_on?: string;

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
     * The expected HTTP response code or code range of the health check. This
     * parameter is only valid for HTTP and HTTPS monitors.
     */
    expected_codes?: string;

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

    modified_on?: string;

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
}

export interface MonitorDeleteResponse {
  id?: string;
}

export interface MonitorEditResponse {
  id?: string;

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

  created_on?: string;

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
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes?: string;

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

  modified_on?: string;

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

export interface MonitorGetResponse {
  id?: string;

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

  created_on?: string;

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
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes?: string;

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

  modified_on?: string;

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

export interface MonitorCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The expected HTTP response code or code range of the health check.
   * This parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes: string;

  /**
   * Body param: Do not validate the certificate when monitor use HTTPS. This
   * parameter is currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * Body param: To be marked unhealthy the monitored origin must fail this
   * healthcheck N consecutive times.
   */
  consecutive_down?: number;

  /**
   * Body param: To be marked healthy the monitored origin must pass this healthcheck
   * N consecutive times.
   */
  consecutive_up?: number;

  /**
   * Body param: Object description.
   */
  description?: string;

  /**
   * Body param: A case-insensitive sub-string to look for in the response body. If
   * this string is not found, the origin will be marked as unhealthy. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * Body param: Follow redirects if returned by the origin. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * Body param: The HTTP request headers to send in the health check. It is
   * recommended you set a Host header by default. The User-Agent header cannot be
   * overridden. This parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * Body param: The interval between each health check. Shorter intervals may
   * improve failover time, but will increase load on the origins as we check from
   * multiple locations.
   */
  interval?: number;

  /**
   * Body param: The method to use for the health check. This defaults to 'GET' for
   * HTTP/HTTPS based checks and 'connection_established' for TCP based health
   * checks.
   */
  method?: string;

  /**
   * Body param: The endpoint path you want to conduct a health check against. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * Body param: The port number to connect to for the health check. Required for
   * TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port
   * when using a non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Body param: Assign this monitor to emulate the specified zone while probing.
   * This parameter is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * Body param: The number of retries to attempt in case of a timeout before marking
   * the origin as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * Body param: The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * Body param: The protocol to use for the health check. Currently supported
   * protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export interface MonitorUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The expected HTTP response code or code range of the health check.
   * This parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes: string;

  /**
   * Body param: Do not validate the certificate when monitor use HTTPS. This
   * parameter is currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * Body param: To be marked unhealthy the monitored origin must fail this
   * healthcheck N consecutive times.
   */
  consecutive_down?: number;

  /**
   * Body param: To be marked healthy the monitored origin must pass this healthcheck
   * N consecutive times.
   */
  consecutive_up?: number;

  /**
   * Body param: Object description.
   */
  description?: string;

  /**
   * Body param: A case-insensitive sub-string to look for in the response body. If
   * this string is not found, the origin will be marked as unhealthy. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * Body param: Follow redirects if returned by the origin. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * Body param: The HTTP request headers to send in the health check. It is
   * recommended you set a Host header by default. The User-Agent header cannot be
   * overridden. This parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * Body param: The interval between each health check. Shorter intervals may
   * improve failover time, but will increase load on the origins as we check from
   * multiple locations.
   */
  interval?: number;

  /**
   * Body param: The method to use for the health check. This defaults to 'GET' for
   * HTTP/HTTPS based checks and 'connection_established' for TCP based health
   * checks.
   */
  method?: string;

  /**
   * Body param: The endpoint path you want to conduct a health check against. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * Body param: The port number to connect to for the health check. Required for
   * TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port
   * when using a non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Body param: Assign this monitor to emulate the specified zone while probing.
   * This parameter is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * Body param: The number of retries to attempt in case of a timeout before marking
   * the origin as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * Body param: The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * Body param: The protocol to use for the health check. Currently supported
   * protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export interface MonitorListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface MonitorDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface MonitorEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The expected HTTP response code or code range of the health check.
   * This parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes: string;

  /**
   * Body param: Do not validate the certificate when monitor use HTTPS. This
   * parameter is currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * Body param: To be marked unhealthy the monitored origin must fail this
   * healthcheck N consecutive times.
   */
  consecutive_down?: number;

  /**
   * Body param: To be marked healthy the monitored origin must pass this healthcheck
   * N consecutive times.
   */
  consecutive_up?: number;

  /**
   * Body param: Object description.
   */
  description?: string;

  /**
   * Body param: A case-insensitive sub-string to look for in the response body. If
   * this string is not found, the origin will be marked as unhealthy. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * Body param: Follow redirects if returned by the origin. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * Body param: The HTTP request headers to send in the health check. It is
   * recommended you set a Host header by default. The User-Agent header cannot be
   * overridden. This parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * Body param: The interval between each health check. Shorter intervals may
   * improve failover time, but will increase load on the origins as we check from
   * multiple locations.
   */
  interval?: number;

  /**
   * Body param: The method to use for the health check. This defaults to 'GET' for
   * HTTP/HTTPS based checks and 'connection_established' for TCP based health
   * checks.
   */
  method?: string;

  /**
   * Body param: The endpoint path you want to conduct a health check against. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * Body param: The port number to connect to for the health check. Required for
   * TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port
   * when using a non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Body param: Assign this monitor to emulate the specified zone while probing.
   * This parameter is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * Body param: The number of retries to attempt in case of a timeout before marking
   * the origin as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * Body param: The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * Body param: The protocol to use for the health check. Currently supported
   * protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export interface MonitorGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Monitors {
  export import MonitorCreateResponse = MonitorsAPI.MonitorCreateResponse;
  export import MonitorUpdateResponse = MonitorsAPI.MonitorUpdateResponse;
  export import MonitorListResponse = MonitorsAPI.MonitorListResponse;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorEditResponse = MonitorsAPI.MonitorEditResponse;
  export import MonitorGetResponse = MonitorsAPI.MonitorGetResponse;
  export import MonitorCreateParams = MonitorsAPI.MonitorCreateParams;
  export import MonitorUpdateParams = MonitorsAPI.MonitorUpdateParams;
  export import MonitorListParams = MonitorsAPI.MonitorListParams;
  export import MonitorDeleteParams = MonitorsAPI.MonitorDeleteParams;
  export import MonitorEditParams = MonitorsAPI.MonitorEditParams;
  export import MonitorGetParams = MonitorsAPI.MonitorGetParams;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewCreateResponse = PreviewsAPI.PreviewCreateResponse;
  export import PreviewCreateParams = PreviewsAPI.PreviewCreateParams;
  export import References = ReferencesAPI.References;
  export import ReferenceGetResponse = ReferencesAPI.ReferenceGetResponse;
  export import ReferenceGetParams = ReferencesAPI.ReferenceGetParams;
}
