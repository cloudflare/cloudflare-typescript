// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProxyEndpointsAPI from 'cloudflare/resources/zero-trust/gateway/proxy-endpoints';
import { SinglePage } from 'cloudflare/pagination';

export class ProxyEndpoints extends APIResource {
  /**
   * Creates a new Zero Trust Gateway proxy endpoint.
   */
  create(params: ProxyEndpointCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProxyEndpoint> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/proxy_endpoints`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProxyEndpoint }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust Gateway proxy endpoint.
   */
  list(
    params: ProxyEndpointListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProxyEndpointsSinglePage, ProxyEndpoint> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/gateway/proxy_endpoints`,
      ProxyEndpointsSinglePage,
      options,
    );
  }

  /**
   * Deletes a configured Zero Trust Gateway proxy endpoint.
   */
  delete(
    proxyEndpointId: string,
    params: ProxyEndpointDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ProxyEndpointDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Zero Trust Gateway proxy endpoint.
   */
  edit(
    proxyEndpointId: string,
    params: ProxyEndpointEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpoint> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProxyEndpoint }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust Gateway proxy endpoints for an account.
   */
  get(
    proxyEndpointId: string,
    params: ProxyEndpointGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpoint> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointId}`,
        options,
      ) as Core.APIPromise<{ result: ProxyEndpoint }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ProxyEndpointsSinglePage extends SinglePage<ProxyEndpoint> {}

/**
 * The IPv4 CIDR or IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /109. IPv4
 * CIDRs are limited to a maximum of /25.
 */
export type GatewayIPs = string;

export interface ProxyEndpoint {
  id?: string;

  created_at?: string;

  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<GatewayIPs>;

  /**
   * The name of the proxy endpoint.
   */
  name?: string;

  /**
   * The subdomain to be used as the destination in the proxy client.
   */
  subdomain?: string;

  updated_at?: string;
}

export interface UnnamedSchemaRef4753ee81779d0e57189420079abab61e {
  id?: string;

  created_at?: string;

  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<GatewayIPs>;

  /**
   * The name of the proxy endpoint.
   */
  name?: string;

  /**
   * The subdomain to be used as the destination in the proxy client.
   */
  subdomain?: string;

  updated_at?: string;
}

export type ProxyEndpointDeleteResponse = unknown | string | null;

export interface ProxyEndpointCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: A list of CIDRs to restrict ingress connections.
   */
  ips: Array<GatewayIPs>;

  /**
   * Body param: The name of the proxy endpoint.
   */
  name: string;
}

export interface ProxyEndpointListParams {
  account_id: string;
}

export interface ProxyEndpointDeleteParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ProxyEndpointEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<GatewayIPs>;

  /**
   * Body param: The name of the proxy endpoint.
   */
  name?: string;
}

export interface ProxyEndpointGetParams {
  account_id: string;
}

export namespace ProxyEndpoints {
  export import GatewayIPs = ProxyEndpointsAPI.GatewayIPs;
  export import ProxyEndpoint = ProxyEndpointsAPI.ProxyEndpoint;
  export import UnnamedSchemaRef4753ee81779d0e57189420079abab61e = ProxyEndpointsAPI.UnnamedSchemaRef4753ee81779d0e57189420079abab61e;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointsSinglePage = ProxyEndpointsAPI.ProxyEndpointsSinglePage;
  export import ProxyEndpointCreateParams = ProxyEndpointsAPI.ProxyEndpointCreateParams;
  export import ProxyEndpointListParams = ProxyEndpointsAPI.ProxyEndpointListParams;
  export import ProxyEndpointDeleteParams = ProxyEndpointsAPI.ProxyEndpointDeleteParams;
  export import ProxyEndpointEditParams = ProxyEndpointsAPI.ProxyEndpointEditParams;
  export import ProxyEndpointGetParams = ProxyEndpointsAPI.ProxyEndpointGetParams;
}
