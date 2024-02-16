// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AppsAPI from 'cloudflare/resources/spectrums/apps';

export class Apps extends APIResource {
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
  get(zone: string, appId: string, options?: Core.RequestOptions): Core.APIPromise<AppGetResponse | null> {
    return (
      this._client.get(`/zones/${zone}/spectrum/apps/${appId}`, options) as Core.APIPromise<{
        result: AppGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a new Spectrum application from a configuration using a name for the
   * origin.
   */
  spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin(
    zone: string,
    body: AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse | null> {
    return (
      this._client.post(`/zones/${zone}/spectrum/apps`, { body, ...options }) as Core.APIPromise<{
        result: AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of currently existing Spectrum applications inside a zone.
   */
  spectrumApplicationsListSpectrumApplications(
    zone: string,
    query?: AppSpectrumApplicationsListSpectrumApplicationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppSpectrumApplicationsListSpectrumApplicationsResponse | null>;
  spectrumApplicationsListSpectrumApplications(
    zone: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppSpectrumApplicationsListSpectrumApplicationsResponse | null>;
  spectrumApplicationsListSpectrumApplications(
    zone: string,
    query: AppSpectrumApplicationsListSpectrumApplicationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppSpectrumApplicationsListSpectrumApplicationsResponse | null> {
    if (isRequestOptions(query)) {
      return this.spectrumApplicationsListSpectrumApplications(zone, {}, query);
    }
    return (
      this._client.get(`/zones/${zone}/spectrum/apps`, { query, ...options }) as Core.APIPromise<{
        result: AppSpectrumApplicationsListSpectrumApplicationsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
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
  dns?: AppUpdateResponse.DNS;

  /**
   * The anycast edge IP configuration for the hostname of this application.
   */
  edge_ips?: AppUpdateResponse.UnionMember0 | AppUpdateResponse.UnionMember1;

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
  origin_dns?: AppUpdateResponse.OriginDNS;

  /**
   * The destination port at the origin. Only specified in conjunction with
   * origin_dns. May use an integer to specify a single origin port, for example
   * `1000`, or a string to specify a range of origin ports, for example
   * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
   * range must match the number of ports specified in the "protocol" field.
   */
  origin_port?: number | string;

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

export namespace AppUpdateResponse {
  /**
   * The name and type of DNS record for the Spectrum application.
   */
  export interface DNS {
    /**
     * The name of the DNS record associated with the application.
     */
    name?: string;

    /**
     * The type of DNS record associated with the application.
     */
    type?: 'CNAME' | 'ADDRESS';
  }

  export interface UnionMember0 {
    /**
     * The IP versions supported for inbound connections on Spectrum anycast IPs.
     */
    connectivity?: 'all' | 'ipv4' | 'ipv6';

    /**
     * The type of edge IP configuration specified. Dynamically allocated edge IPs use
     * Spectrum anycast IPs in accordance with the connectivity you specify. Only valid
     * with CNAME DNS names.
     */
    type?: 'dynamic';
  }

  export interface UnionMember1 {
    /**
     * The array of customer owned IPs we broadcast via anycast for this hostname and
     * application.
     */
    ips?: Array<string>;

    /**
     * The type of edge IP configuration specified. Statically allocated edge IPs use
     * customer IPs in accordance with the ips array you specify. Only valid with
     * ADDRESS DNS names.
     */
    type?: 'static';
  }

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  export interface OriginDNS {
    /**
     * The name of the DNS record associated with the origin.
     */
    name?: string;

    /**
     * The TTL of our resolution of your DNS record in seconds.
     */
    ttl?: number;

    /**
     * The type of DNS record associated with the origin. "" is used to specify a
     * combination of A/AAAA records.
     */
    type?: '' | 'A' | 'AAAA' | 'SRV';
  }
}

export interface AppDeleteResponse {
  /**
   * Application identifier.
   */
  id?: string;
}

export type AppGetResponse = unknown | string;

export interface AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse {
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
  dns?: AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse.DNS;

  /**
   * The anycast edge IP configuration for the hostname of this application.
   */
  edge_ips?:
    | AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse.UnionMember0
    | AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse.UnionMember1;

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
  origin_dns?: AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse.OriginDNS;

  /**
   * The destination port at the origin. Only specified in conjunction with
   * origin_dns. May use an integer to specify a single origin port, for example
   * `1000`, or a string to specify a range of origin ports, for example
   * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
   * range must match the number of ports specified in the "protocol" field.
   */
  origin_port?: number | string;

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

export namespace AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse {
  /**
   * The name and type of DNS record for the Spectrum application.
   */
  export interface DNS {
    /**
     * The name of the DNS record associated with the application.
     */
    name?: string;

    /**
     * The type of DNS record associated with the application.
     */
    type?: 'CNAME' | 'ADDRESS';
  }

  export interface UnionMember0 {
    /**
     * The IP versions supported for inbound connections on Spectrum anycast IPs.
     */
    connectivity?: 'all' | 'ipv4' | 'ipv6';

    /**
     * The type of edge IP configuration specified. Dynamically allocated edge IPs use
     * Spectrum anycast IPs in accordance with the connectivity you specify. Only valid
     * with CNAME DNS names.
     */
    type?: 'dynamic';
  }

  export interface UnionMember1 {
    /**
     * The array of customer owned IPs we broadcast via anycast for this hostname and
     * application.
     */
    ips?: Array<string>;

    /**
     * The type of edge IP configuration specified. Statically allocated edge IPs use
     * customer IPs in accordance with the ips array you specify. Only valid with
     * ADDRESS DNS names.
     */
    type?: 'static';
  }

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  export interface OriginDNS {
    /**
     * The name of the DNS record associated with the origin.
     */
    name?: string;

    /**
     * The TTL of our resolution of your DNS record in seconds.
     */
    ttl?: number;

    /**
     * The type of DNS record associated with the origin. "" is used to specify a
     * combination of A/AAAA records.
     */
    type?: '' | 'A' | 'AAAA' | 'SRV';
  }
}

export type AppSpectrumApplicationsListSpectrumApplicationsResponse = Array<unknown>;

export interface AppUpdateParams {
  /**
   * The name and type of DNS record for the Spectrum application.
   */
  dns: AppUpdateParams.DNS;

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  origin_dns: AppUpdateParams.OriginDNS;

  /**
   * The destination port at the origin. Only specified in conjunction with
   * origin_dns. May use an integer to specify a single origin port, for example
   * `1000`, or a string to specify a range of origin ports, for example
   * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
   * range must match the number of ports specified in the "protocol" field.
   */
  origin_port: number | string;

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
  edge_ips?: AppUpdateParams.UnionMember0 | AppUpdateParams.UnionMember1;

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

export namespace AppUpdateParams {
  /**
   * The name and type of DNS record for the Spectrum application.
   */
  export interface DNS {
    /**
     * The name of the DNS record associated with the application.
     */
    name?: string;

    /**
     * The type of DNS record associated with the application.
     */
    type?: 'CNAME' | 'ADDRESS';
  }

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  export interface OriginDNS {
    /**
     * The name of the DNS record associated with the origin.
     */
    name?: string;

    /**
     * The TTL of our resolution of your DNS record in seconds.
     */
    ttl?: number;

    /**
     * The type of DNS record associated with the origin. "" is used to specify a
     * combination of A/AAAA records.
     */
    type?: '' | 'A' | 'AAAA' | 'SRV';
  }

  export interface UnionMember0 {
    /**
     * The IP versions supported for inbound connections on Spectrum anycast IPs.
     */
    connectivity?: 'all' | 'ipv4' | 'ipv6';

    /**
     * The type of edge IP configuration specified. Dynamically allocated edge IPs use
     * Spectrum anycast IPs in accordance with the connectivity you specify. Only valid
     * with CNAME DNS names.
     */
    type?: 'dynamic';
  }

  export interface UnionMember1 {
    /**
     * The array of customer owned IPs we broadcast via anycast for this hostname and
     * application.
     */
    ips?: Array<string>;

    /**
     * The type of edge IP configuration specified. Statically allocated edge IPs use
     * customer IPs in accordance with the ips array you specify. Only valid with
     * ADDRESS DNS names.
     */
    type?: 'static';
  }
}

export interface AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams {
  /**
   * The name and type of DNS record for the Spectrum application.
   */
  dns: AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams.DNS;

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  origin_dns: AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams.OriginDNS;

  /**
   * The destination port at the origin. Only specified in conjunction with
   * origin_dns. May use an integer to specify a single origin port, for example
   * `1000`, or a string to specify a range of origin ports, for example
   * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
   * range must match the number of ports specified in the "protocol" field.
   */
  origin_port: number | string;

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
  edge_ips?:
    | AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams.UnionMember0
    | AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams.UnionMember1;

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

export namespace AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams {
  /**
   * The name and type of DNS record for the Spectrum application.
   */
  export interface DNS {
    /**
     * The name of the DNS record associated with the application.
     */
    name?: string;

    /**
     * The type of DNS record associated with the application.
     */
    type?: 'CNAME' | 'ADDRESS';
  }

  /**
   * The name and type of DNS record for the Spectrum application.
   */
  export interface OriginDNS {
    /**
     * The name of the DNS record associated with the origin.
     */
    name?: string;

    /**
     * The TTL of our resolution of your DNS record in seconds.
     */
    ttl?: number;

    /**
     * The type of DNS record associated with the origin. "" is used to specify a
     * combination of A/AAAA records.
     */
    type?: '' | 'A' | 'AAAA' | 'SRV';
  }

  export interface UnionMember0 {
    /**
     * The IP versions supported for inbound connections on Spectrum anycast IPs.
     */
    connectivity?: 'all' | 'ipv4' | 'ipv6';

    /**
     * The type of edge IP configuration specified. Dynamically allocated edge IPs use
     * Spectrum anycast IPs in accordance with the connectivity you specify. Only valid
     * with CNAME DNS names.
     */
    type?: 'dynamic';
  }

  export interface UnionMember1 {
    /**
     * The array of customer owned IPs we broadcast via anycast for this hostname and
     * application.
     */
    ips?: Array<string>;

    /**
     * The type of edge IP configuration specified. Statically allocated edge IPs use
     * customer IPs in accordance with the ips array you specify. Only valid with
     * ADDRESS DNS names.
     */
    type?: 'static';
  }
}

export interface AppSpectrumApplicationsListSpectrumApplicationsParams {
  /**
   * Sets the direction by which results are ordered.
   */
  direction?: 'asc' | 'desc';

  /**
   * Application field by which results are ordered.
   */
  order?: 'protocol' | 'app_id' | 'created_on' | 'modified_on' | 'dns';

  /**
   * Page number of paginated results. This parameter is required in order to use
   * other pagination parameters. If included in the query, `result_info` will be
   * present in the response.
   */
  page?: number;

  /**
   * Sets the maximum number of results per page.
   */
  per_page?: number;
}

export namespace Apps {
  export import AppUpdateResponse = AppsAPI.AppUpdateResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppGetResponse = AppsAPI.AppGetResponse;
  export import AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse = AppsAPI.AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse;
  export import AppSpectrumApplicationsListSpectrumApplicationsResponse = AppsAPI.AppSpectrumApplicationsListSpectrumApplicationsResponse;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams = AppsAPI.AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams;
  export import AppSpectrumApplicationsListSpectrumApplicationsParams = AppsAPI.AppSpectrumApplicationsListSpectrumApplicationsParams;
}
