// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AppsAPI from './apps';
import * as SpectrumAPI from './spectrum';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Apps extends APIResource {
  /**
   * Creates a new Spectrum application from a configuration using a name for the
   * origin.
   */
  create(
    zone: string,
    body: AppCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppCreateResponse | null> {
    return (
      this._client.post(`/zones/${zone}/spectrum/apps`, { body, ...options }) as Core.APIPromise<{
        result: AppCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a previously existing application's configuration that uses a name for
   * the origin.
   */
  update(
    zone: string,
    appId: string,
    body: AppUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppUpdateResponse | null> {
    return (
      this._client.put(`/zones/${zone}/spectrum/apps/${appId}`, { body, ...options }) as Core.APIPromise<{
        result: AppUpdateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of currently existing Spectrum applications inside a zone.
   */
  list(
    zone: string,
    query?: AppListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AppListResponsesV4PagePaginationArray, AppListResponse>;
  list(
    zone: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AppListResponsesV4PagePaginationArray, AppListResponse>;
  list(
    zone: string,
    query: AppListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AppListResponsesV4PagePaginationArray, AppListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zone, {}, query);
    }
    return this._client.getAPIList(`/zones/${zone}/spectrum/apps`, AppListResponsesV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a previously existing application.
   */
  delete(
    zone: string,
    appId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppDeleteResponse | null> {
    return (
      this._client.delete(`/zones/${zone}/spectrum/apps/${appId}`, options) as Core.APIPromise<{
        result: AppDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the application configuration of a specific application inside a zone.
   */
  get(zone: string, appId: string, options?: Core.RequestOptions): Core.APIPromise<AppGetResponse> {
    return (
      this._client.get(`/zones/${zone}/spectrum/apps/${appId}`, options) as Core.APIPromise<{
        result: AppGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AppListResponsesV4PagePaginationArray extends V4PagePaginationArray<AppListResponse> {}

export interface AppCreateResponse {
  /**
   * Application identifier.
   */
  id?: string;

  /**
   * Enables Argo Smart Routing for this application. Notes: Only available for TCP
   * applications with traffic_type set to "direct".
   */
  argo_smart_routing?: boolean;

  /**
   * When the Application was created.
   */
  created_on?: string;

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  dns?: SpectrumAPI.DNS;

  /**
   * The anycast edge IP configuration for the hostname of this application.
   */
  edge_ips?: SpectrumAPI.EdgeIPs;

  /**
   * Enables IP Access Rules for this application. Notes: Only available for TCP
   * applications.
   */
  ip_firewall?: boolean;

  /**
   * When the Application was last modified.
   */
  modified_on?: string;

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  origin_dns?: SpectrumAPI.OriginDNS;

  /**
   * The destination port at the origin. Only specified in conjunction with
   * origin_dns. May use an integer to specify a single origin port, for example
   * `1000`, or a string to specify a range of origin ports, for example
   * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
   * range must match the number of ports specified in the "protocol" field.
   */
  origin_port?: SpectrumAPI.OriginPort;

  /**
   * The port configuration at Cloudflare’s edge. May specify a single port, for
   * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
   */
  protocol?: string;

  /**
   * Enables Proxy Protocol to the origin. Refer to
   * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
   * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
   * Proxy Protocol.
   */
  proxy_protocol?: 'off' | 'v1' | 'v2' | 'simple';

  /**
   * The type of TLS termination associated with the application.
   */
  tls?: 'off' | 'flexible' | 'full' | 'strict';

  /**
   * Determines how data travels from the edge to your origin. When set to "direct",
   * Spectrum will send traffic directly to your origin, and the application's type
   * is derived from the `protocol`. When set to "http" or "https", Spectrum will
   * apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and
   * the application type matches this property exactly.
   */
  traffic_type?: 'direct' | 'http' | 'https';
}

export interface AppUpdateResponse {
  /**
   * Application identifier.
   */
  id?: string;

  /**
   * Enables Argo Smart Routing for this application. Notes: Only available for TCP
   * applications with traffic_type set to "direct".
   */
  argo_smart_routing?: boolean;

  /**
   * When the Application was created.
   */
  created_on?: string;

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  dns?: SpectrumAPI.DNS;

  /**
   * The anycast edge IP configuration for the hostname of this application.
   */
  edge_ips?: SpectrumAPI.EdgeIPs;

  /**
   * Enables IP Access Rules for this application. Notes: Only available for TCP
   * applications.
   */
  ip_firewall?: boolean;

  /**
   * When the Application was last modified.
   */
  modified_on?: string;

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  origin_dns?: SpectrumAPI.OriginDNS;

  /**
   * The destination port at the origin. Only specified in conjunction with
   * origin_dns. May use an integer to specify a single origin port, for example
   * `1000`, or a string to specify a range of origin ports, for example
   * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
   * range must match the number of ports specified in the "protocol" field.
   */
  origin_port?: SpectrumAPI.OriginPort;

  /**
   * The port configuration at Cloudflare’s edge. May specify a single port, for
   * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
   */
  protocol?: string;

  /**
   * Enables Proxy Protocol to the origin. Refer to
   * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
   * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
   * Proxy Protocol.
   */
  proxy_protocol?: 'off' | 'v1' | 'v2' | 'simple';

  /**
   * The type of TLS termination associated with the application.
   */
  tls?: 'off' | 'flexible' | 'full' | 'strict';

  /**
   * Determines how data travels from the edge to your origin. When set to "direct",
   * Spectrum will send traffic directly to your origin, and the application's type
   * is derived from the `protocol`. When set to "http" or "https", Spectrum will
   * apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and
   * the application type matches this property exactly.
   */
  traffic_type?: 'direct' | 'http' | 'https';
}

export type AppListResponse = unknown;

export interface AppDeleteResponse {
  /**
   * Application identifier.
   */
  id?: string;
}

export type AppGetResponse = unknown | string | null;

export interface AppCreateParams {
  /**
   * The name and type of DNS record for the Spectrum application.
   */
  dns: SpectrumAPI.DNSParam;

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  origin_dns: SpectrumAPI.OriginDNSParam;

  /**
   * The destination port at the origin. Only specified in conjunction with
   * origin_dns. May use an integer to specify a single origin port, for example
   * `1000`, or a string to specify a range of origin ports, for example
   * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
   * range must match the number of ports specified in the "protocol" field.
   */
  origin_port: SpectrumAPI.OriginPortParam;

  /**
   * The port configuration at Cloudflare’s edge. May specify a single port, for
   * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
   */
  protocol: string;

  /**
   * Enables Argo Smart Routing for this application. Notes: Only available for TCP
   * applications with traffic_type set to "direct".
   */
  argo_smart_routing?: boolean;

  /**
   * The anycast edge IP configuration for the hostname of this application.
   */
  edge_ips?: SpectrumAPI.EdgeIPsParam;

  /**
   * Enables IP Access Rules for this application. Notes: Only available for TCP
   * applications.
   */
  ip_firewall?: boolean;

  /**
   * Enables Proxy Protocol to the origin. Refer to
   * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
   * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
   * Proxy Protocol.
   */
  proxy_protocol?: 'off' | 'v1' | 'v2' | 'simple';

  /**
   * The type of TLS termination associated with the application.
   */
  tls?: 'off' | 'flexible' | 'full' | 'strict';

  /**
   * Determines how data travels from the edge to your origin. When set to "direct",
   * Spectrum will send traffic directly to your origin, and the application's type
   * is derived from the `protocol`. When set to "http" or "https", Spectrum will
   * apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and
   * the application type matches this property exactly.
   */
  traffic_type?: 'direct' | 'http' | 'https';
}

export interface AppUpdateParams {
  /**
   * The name and type of DNS record for the Spectrum application.
   */
  dns: SpectrumAPI.DNSParam;

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  origin_dns: SpectrumAPI.OriginDNSParam;

  /**
   * The destination port at the origin. Only specified in conjunction with
   * origin_dns. May use an integer to specify a single origin port, for example
   * `1000`, or a string to specify a range of origin ports, for example
   * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
   * range must match the number of ports specified in the "protocol" field.
   */
  origin_port: SpectrumAPI.OriginPortParam;

  /**
   * The port configuration at Cloudflare’s edge. May specify a single port, for
   * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
   */
  protocol: string;

  /**
   * Enables Argo Smart Routing for this application. Notes: Only available for TCP
   * applications with traffic_type set to "direct".
   */
  argo_smart_routing?: boolean;

  /**
   * The anycast edge IP configuration for the hostname of this application.
   */
  edge_ips?: SpectrumAPI.EdgeIPsParam;

  /**
   * Enables IP Access Rules for this application. Notes: Only available for TCP
   * applications.
   */
  ip_firewall?: boolean;

  /**
   * Enables Proxy Protocol to the origin. Refer to
   * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
   * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
   * Proxy Protocol.
   */
  proxy_protocol?: 'off' | 'v1' | 'v2' | 'simple';

  /**
   * The type of TLS termination associated with the application.
   */
  tls?: 'off' | 'flexible' | 'full' | 'strict';

  /**
   * Determines how data travels from the edge to your origin. When set to "direct",
   * Spectrum will send traffic directly to your origin, and the application's type
   * is derived from the `protocol`. When set to "http" or "https", Spectrum will
   * apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and
   * the application type matches this property exactly.
   */
  traffic_type?: 'direct' | 'http' | 'https';
}

export interface AppListParams extends V4PagePaginationArrayParams {
  /**
   * Sets the direction by which results are ordered.
   */
  direction?: 'asc' | 'desc';

  /**
   * Application field by which results are ordered.
   */
  order?: 'protocol' | 'app_id' | 'created_on' | 'modified_on' | 'dns';
}

export namespace Apps {
  export import AppCreateResponse = AppsAPI.AppCreateResponse;
  export import AppUpdateResponse = AppsAPI.AppUpdateResponse;
  export import AppListResponse = AppsAPI.AppListResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppGetResponse = AppsAPI.AppGetResponse;
  export import AppListResponsesV4PagePaginationArray = AppsAPI.AppListResponsesV4PagePaginationArray;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import AppListParams = AppsAPI.AppListParams;
}
