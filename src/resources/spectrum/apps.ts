// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SpectrumAPI from './spectrum';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Creates a new Spectrum application from a configuration using a name for the
   * origin.
   */
  create(params: AppCreateParams, options?: RequestOptions): APIPromise<AppCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/spectrum/apps`, { body, ...options }) as APIPromise<{
        result: AppCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a previously existing application's configuration that uses a name for
   * the origin.
   */
  update(appID: string, params: AppUpdateParams, options?: RequestOptions): APIPromise<AppUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/spectrum/apps/${appID}`, { body, ...options }) as APIPromise<{
        result: AppUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of currently existing Spectrum applications inside a zone.
   */
  list(
    params: AppListParams,
    options?: RequestOptions,
  ): PagePromise<AppListResponsesV4PagePaginationArray, AppListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/spectrum/apps`,
      V4PagePaginationArray<AppListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a previously existing application.
   */
  delete(
    appID: string,
    params: AppDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AppDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/spectrum/apps/${appID}`, options) as APIPromise<{
        result: AppDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the application configuration of a specific application inside a zone.
   */
  get(appID: string, params: AppGetParams, options?: RequestOptions): APIPromise<AppGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/spectrum/apps/${appID}`, options) as APIPromise<{
        result: AppGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AppListResponsesV4PagePaginationArray = V4PagePaginationArray<AppListResponse>;

export type AppCreateResponse =
  | AppCreateResponse.SpectrumConfigAppConfig
  | AppCreateResponse.SpectrumConfigPaygoAppConfig;

export namespace AppCreateResponse {
  export interface SpectrumConfigAppConfig {
    /**
     * App identifier.
     */
    id: string;

    /**
     * When the Application was created.
     */
    created_on: string;

    /**
     * The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNS;

    /**
     * Enables IP Access Rules for this application. Notes: Only available for TCP
     * applications.
     */
    ip_firewall: boolean;

    /**
     * When the Application was last modified.
     */
    modified_on: string;

    /**
     * The port configuration at Cloudflare's edge. May specify a single port, for
     * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * Enables Proxy Protocol to the origin. Refer to
     * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
     * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
     * Proxy Protocol.
     */
    proxy_protocol: 'off' | 'v1' | 'v2' | 'simple';

    /**
     * The type of TLS termination associated with the application.
     */
    tls: 'off' | 'flexible' | 'full' | 'strict';

    /**
     * Determines how data travels from the edge to your origin. When set to "direct",
     * Spectrum will send traffic directly to your origin, and the application's type
     * is derived from the `protocol`. When set to "http" or "https", Spectrum will
     * apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and
     * the application type matches this property exactly.
     */
    traffic_type: 'direct' | 'http' | 'https';

    /**
     * Enables Argo Smart Routing for this application. Notes: Only available for TCP
     * applications with traffic_type set to "direct".
     */
    argo_smart_routing?: boolean;

    /**
     * The anycast edge IP configuration for the hostname of this application.
     */
    edge_ips?: SpectrumAPI.EdgeIPs;

    /**
     * List of origin IP addresses. Array may contain multiple IP addresses for load
     * balancing.
     */
    origin_direct?: Array<string>;

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
  }

  export interface SpectrumConfigPaygoAppConfig {
    /**
     * App identifier.
     */
    id: string;

    /**
     * When the Application was created.
     */
    created_on: string;

    /**
     * The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNS;

    /**
     * When the Application was last modified.
     */
    modified_on: string;

    /**
     * The port configuration at Cloudflare's edge. May specify a single port, for
     * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * List of origin IP addresses. Array may contain multiple IP addresses for load
     * balancing.
     */
    origin_direct?: Array<string>;
  }
}

export type AppUpdateResponse =
  | AppUpdateResponse.SpectrumConfigAppConfig
  | AppUpdateResponse.SpectrumConfigPaygoAppConfig;

export namespace AppUpdateResponse {
  export interface SpectrumConfigAppConfig {
    /**
     * App identifier.
     */
    id: string;

    /**
     * When the Application was created.
     */
    created_on: string;

    /**
     * The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNS;

    /**
     * Enables IP Access Rules for this application. Notes: Only available for TCP
     * applications.
     */
    ip_firewall: boolean;

    /**
     * When the Application was last modified.
     */
    modified_on: string;

    /**
     * The port configuration at Cloudflare's edge. May specify a single port, for
     * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * Enables Proxy Protocol to the origin. Refer to
     * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
     * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
     * Proxy Protocol.
     */
    proxy_protocol: 'off' | 'v1' | 'v2' | 'simple';

    /**
     * The type of TLS termination associated with the application.
     */
    tls: 'off' | 'flexible' | 'full' | 'strict';

    /**
     * Determines how data travels from the edge to your origin. When set to "direct",
     * Spectrum will send traffic directly to your origin, and the application's type
     * is derived from the `protocol`. When set to "http" or "https", Spectrum will
     * apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and
     * the application type matches this property exactly.
     */
    traffic_type: 'direct' | 'http' | 'https';

    /**
     * Enables Argo Smart Routing for this application. Notes: Only available for TCP
     * applications with traffic_type set to "direct".
     */
    argo_smart_routing?: boolean;

    /**
     * The anycast edge IP configuration for the hostname of this application.
     */
    edge_ips?: SpectrumAPI.EdgeIPs;

    /**
     * List of origin IP addresses. Array may contain multiple IP addresses for load
     * balancing.
     */
    origin_direct?: Array<string>;

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
  }

  export interface SpectrumConfigPaygoAppConfig {
    /**
     * App identifier.
     */
    id: string;

    /**
     * When the Application was created.
     */
    created_on: string;

    /**
     * The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNS;

    /**
     * When the Application was last modified.
     */
    modified_on: string;

    /**
     * The port configuration at Cloudflare's edge. May specify a single port, for
     * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * List of origin IP addresses. Array may contain multiple IP addresses for load
     * balancing.
     */
    origin_direct?: Array<string>;
  }
}

export type AppListResponse = Array<AppListResponse.UnionMember0> | Array<AppListResponse.UnionMember1>;

export namespace AppListResponse {
  export interface UnionMember0 {
    /**
     * App identifier.
     */
    id: string;

    /**
     * When the Application was created.
     */
    created_on: string;

    /**
     * The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNS;

    /**
     * Enables IP Access Rules for this application. Notes: Only available for TCP
     * applications.
     */
    ip_firewall: boolean;

    /**
     * When the Application was last modified.
     */
    modified_on: string;

    /**
     * The port configuration at Cloudflare's edge. May specify a single port, for
     * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * Enables Proxy Protocol to the origin. Refer to
     * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
     * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
     * Proxy Protocol.
     */
    proxy_protocol: 'off' | 'v1' | 'v2' | 'simple';

    /**
     * The type of TLS termination associated with the application.
     */
    tls: 'off' | 'flexible' | 'full' | 'strict';

    /**
     * Determines how data travels from the edge to your origin. When set to "direct",
     * Spectrum will send traffic directly to your origin, and the application's type
     * is derived from the `protocol`. When set to "http" or "https", Spectrum will
     * apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and
     * the application type matches this property exactly.
     */
    traffic_type: 'direct' | 'http' | 'https';

    /**
     * Enables Argo Smart Routing for this application. Notes: Only available for TCP
     * applications with traffic_type set to "direct".
     */
    argo_smart_routing?: boolean;

    /**
     * The anycast edge IP configuration for the hostname of this application.
     */
    edge_ips?: SpectrumAPI.EdgeIPs;

    /**
     * List of origin IP addresses. Array may contain multiple IP addresses for load
     * balancing.
     */
    origin_direct?: Array<string>;

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
  }

  export interface UnionMember1 {
    /**
     * App identifier.
     */
    id: string;

    /**
     * When the Application was created.
     */
    created_on: string;

    /**
     * The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNS;

    /**
     * When the Application was last modified.
     */
    modified_on: string;

    /**
     * The port configuration at Cloudflare's edge. May specify a single port, for
     * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * List of origin IP addresses. Array may contain multiple IP addresses for load
     * balancing.
     */
    origin_direct?: Array<string>;
  }
}

export interface AppDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export type AppGetResponse =
  | AppGetResponse.SpectrumConfigAppConfig
  | AppGetResponse.SpectrumConfigPaygoAppConfig;

export namespace AppGetResponse {
  export interface SpectrumConfigAppConfig {
    /**
     * App identifier.
     */
    id: string;

    /**
     * When the Application was created.
     */
    created_on: string;

    /**
     * The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNS;

    /**
     * Enables IP Access Rules for this application. Notes: Only available for TCP
     * applications.
     */
    ip_firewall: boolean;

    /**
     * When the Application was last modified.
     */
    modified_on: string;

    /**
     * The port configuration at Cloudflare's edge. May specify a single port, for
     * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * Enables Proxy Protocol to the origin. Refer to
     * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
     * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
     * Proxy Protocol.
     */
    proxy_protocol: 'off' | 'v1' | 'v2' | 'simple';

    /**
     * The type of TLS termination associated with the application.
     */
    tls: 'off' | 'flexible' | 'full' | 'strict';

    /**
     * Determines how data travels from the edge to your origin. When set to "direct",
     * Spectrum will send traffic directly to your origin, and the application's type
     * is derived from the `protocol`. When set to "http" or "https", Spectrum will
     * apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and
     * the application type matches this property exactly.
     */
    traffic_type: 'direct' | 'http' | 'https';

    /**
     * Enables Argo Smart Routing for this application. Notes: Only available for TCP
     * applications with traffic_type set to "direct".
     */
    argo_smart_routing?: boolean;

    /**
     * The anycast edge IP configuration for the hostname of this application.
     */
    edge_ips?: SpectrumAPI.EdgeIPs;

    /**
     * List of origin IP addresses. Array may contain multiple IP addresses for load
     * balancing.
     */
    origin_direct?: Array<string>;

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
  }

  export interface SpectrumConfigPaygoAppConfig {
    /**
     * App identifier.
     */
    id: string;

    /**
     * When the Application was created.
     */
    created_on: string;

    /**
     * The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNS;

    /**
     * When the Application was last modified.
     */
    modified_on: string;

    /**
     * The port configuration at Cloudflare's edge. May specify a single port, for
     * example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * List of origin IP addresses. Array may contain multiple IP addresses for load
     * balancing.
     */
    origin_direct?: Array<string>;
  }
}

export type AppCreateParams =
  | AppCreateParams.SpectrumConfigAppConfig
  | AppCreateParams.SpectrumConfigPaygoAppConfig;

export declare namespace AppCreateParams {
  export interface SpectrumConfigAppConfig {
    /**
     * Path param: Zone identifier.
     */
    zone_id: string;

    /**
     * Body param: The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNSParam;

    /**
     * Body param: Enables IP Access Rules for this application. Notes: Only available
     * for TCP applications.
     */
    ip_firewall: boolean;

    /**
     * Body param: The port configuration at Cloudflare's edge. May specify a single
     * port, for example `"tcp/1000"`, or a range of ports, for example
     * `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * Body param: Enables Proxy Protocol to the origin. Refer to
     * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
     * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
     * Proxy Protocol.
     */
    proxy_protocol: 'off' | 'v1' | 'v2' | 'simple';

    /**
     * Body param: The type of TLS termination associated with the application.
     */
    tls: 'off' | 'flexible' | 'full' | 'strict';

    /**
     * Body param: Determines how data travels from the edge to your origin. When set
     * to "direct", Spectrum will send traffic directly to your origin, and the
     * application's type is derived from the `protocol`. When set to "http" or
     * "https", Spectrum will apply Cloudflare's HTTP/HTTPS features as it sends
     * traffic to your origin, and the application type matches this property exactly.
     */
    traffic_type: 'direct' | 'http' | 'https';

    /**
     * Body param: Enables Argo Smart Routing for this application. Notes: Only
     * available for TCP applications with traffic_type set to "direct".
     */
    argo_smart_routing?: boolean;

    /**
     * Body param: The anycast edge IP configuration for the hostname of this
     * application.
     */
    edge_ips?: SpectrumAPI.EdgeIPsParam;

    /**
     * Body param: List of origin IP addresses. Array may contain multiple IP addresses
     * for load balancing.
     */
    origin_direct?: Array<string>;

    /**
     * Body param: The name and type of DNS record for the Spectrum application.
     */
    origin_dns?: SpectrumAPI.OriginDNSParam;

    /**
     * Body param: The destination port at the origin. Only specified in conjunction
     * with origin_dns. May use an integer to specify a single origin port, for example
     * `1000`, or a string to specify a range of origin ports, for example
     * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
     * range must match the number of ports specified in the "protocol" field.
     */
    origin_port?: SpectrumAPI.OriginPortParam;
  }

  export interface SpectrumConfigPaygoAppConfig {
    /**
     * Path param: Zone identifier.
     */
    zone_id: string;

    /**
     * Body param: The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNSParam;

    /**
     * Body param: The port configuration at Cloudflare's edge. May specify a single
     * port, for example `"tcp/1000"`, or a range of ports, for example
     * `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * Body param: List of origin IP addresses. Array may contain multiple IP addresses
     * for load balancing.
     */
    origin_direct?: Array<string>;
  }
}

export type AppUpdateParams =
  | AppUpdateParams.SpectrumConfigAppConfig
  | AppUpdateParams.SpectrumConfigPaygoAppConfig;

export declare namespace AppUpdateParams {
  export interface SpectrumConfigAppConfig {
    /**
     * Path param: Zone identifier.
     */
    zone_id: string;

    /**
     * Body param: The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNSParam;

    /**
     * Body param: Enables IP Access Rules for this application. Notes: Only available
     * for TCP applications.
     */
    ip_firewall: boolean;

    /**
     * Body param: The port configuration at Cloudflare's edge. May specify a single
     * port, for example `"tcp/1000"`, or a range of ports, for example
     * `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * Body param: Enables Proxy Protocol to the origin. Refer to
     * [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/)
     * for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple
     * Proxy Protocol.
     */
    proxy_protocol: 'off' | 'v1' | 'v2' | 'simple';

    /**
     * Body param: The type of TLS termination associated with the application.
     */
    tls: 'off' | 'flexible' | 'full' | 'strict';

    /**
     * Body param: Determines how data travels from the edge to your origin. When set
     * to "direct", Spectrum will send traffic directly to your origin, and the
     * application's type is derived from the `protocol`. When set to "http" or
     * "https", Spectrum will apply Cloudflare's HTTP/HTTPS features as it sends
     * traffic to your origin, and the application type matches this property exactly.
     */
    traffic_type: 'direct' | 'http' | 'https';

    /**
     * Body param: Enables Argo Smart Routing for this application. Notes: Only
     * available for TCP applications with traffic_type set to "direct".
     */
    argo_smart_routing?: boolean;

    /**
     * Body param: The anycast edge IP configuration for the hostname of this
     * application.
     */
    edge_ips?: SpectrumAPI.EdgeIPsParam;

    /**
     * Body param: List of origin IP addresses. Array may contain multiple IP addresses
     * for load balancing.
     */
    origin_direct?: Array<string>;

    /**
     * Body param: The name and type of DNS record for the Spectrum application.
     */
    origin_dns?: SpectrumAPI.OriginDNSParam;

    /**
     * Body param: The destination port at the origin. Only specified in conjunction
     * with origin_dns. May use an integer to specify a single origin port, for example
     * `1000`, or a string to specify a range of origin ports, for example
     * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
     * range must match the number of ports specified in the "protocol" field.
     */
    origin_port?: SpectrumAPI.OriginPortParam;
  }

  export interface SpectrumConfigPaygoAppConfig {
    /**
     * Path param: Zone identifier.
     */
    zone_id: string;

    /**
     * Body param: The name and type of DNS record for the Spectrum application.
     */
    dns: SpectrumAPI.DNSParam;

    /**
     * Body param: The port configuration at Cloudflare's edge. May specify a single
     * port, for example `"tcp/1000"`, or a range of ports, for example
     * `"tcp/1000-2000"`.
     */
    protocol: string;

    /**
     * Body param: List of origin IP addresses. Array may contain multiple IP addresses
     * for load balancing.
     */
    origin_direct?: Array<string>;
  }
}

export interface AppListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Zone identifier.
   */
  zone_id: string;

  /**
   * Query param: Sets the direction by which results are ordered.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Application field by which results are ordered.
   */
  order?: 'protocol' | 'app_id' | 'created_on' | 'modified_on' | 'dns';
}

export interface AppDeleteParams {
  /**
   * Zone identifier.
   */
  zone_id: string;
}

export interface AppGetParams {
  /**
   * Zone identifier.
   */
  zone_id: string;
}

export declare namespace Apps {
  export {
    type AppCreateResponse as AppCreateResponse,
    type AppUpdateResponse as AppUpdateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppGetResponse as AppGetResponse,
    type AppListResponsesV4PagePaginationArray as AppListResponsesV4PagePaginationArray,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGetParams as AppGetParams,
  };
}
