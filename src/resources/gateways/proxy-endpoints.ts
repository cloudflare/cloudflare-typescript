// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProxyEndpointsAPI from 'cloudflare/resources/gateways/proxy-endpoints';

export class ProxyEndpoints extends APIResource {
  /**
   * Updates a configured Zero Trust Gateway proxy endpoint.
   */
  update(
    accountId: unknown,
    proxyEndpointId: unknown,
    body: ProxyEndpointUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointUpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/gateway/proxy_endpoints/${proxyEndpointId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProxyEndpointUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust Gateway proxy endpoints for an account.
   */
  list(
    accountId: unknown,
    proxyEndpointId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/gateway/proxy_endpoints/${proxyEndpointId}`,
        options,
      ) as Core.APIPromise<{ result: ProxyEndpointListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a configured Zero Trust Gateway proxy endpoint.
   */
  delete(
    accountId: unknown,
    proxyEndpointId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/gateway/proxy_endpoints/${proxyEndpointId}`,
        options,
      ) as Core.APIPromise<{ result: ProxyEndpointDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust Gateway proxy endpoints for an account.
   */
  get(
    accountId: unknown,
    proxyEndpointId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/gateway/proxy_endpoints/${proxyEndpointId}`,
        options,
      ) as Core.APIPromise<{ result: ProxyEndpointGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a new Zero Trust Gateway proxy endpoint.
   */
  zeroTrustGatewayProxyEndpointsCreateProxyEndpoint(
    accountId: unknown,
    body: ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse> {
    return (
      this._client.post(`/accounts/${accountId}/gateway/proxy_endpoints`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust Gateway proxy endpoint.
   */
  zeroTrustGatewayProxyEndpointsListProxyEndpoints(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/proxy_endpoints`, options) as Core.APIPromise<{
        result: ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ProxyEndpointUpdateResponse {
  id?: unknown;

  created_at?: string;

  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<string>;

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

export interface ProxyEndpointListResponse {
  id?: unknown;

  created_at?: string;

  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<string>;

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

export type ProxyEndpointDeleteResponse = unknown | string;

export interface ProxyEndpointGetResponse {
  id?: unknown;

  created_at?: string;

  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<string>;

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

export interface ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse {
  id?: unknown;

  created_at?: string;

  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<string>;

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

export type ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse =
  Array<ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse.ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponseItem>;

export namespace ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse {
  export interface ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponseItem {
    id?: unknown;

    created_at?: string;

    /**
     * A list of CIDRs to restrict ingress connections.
     */
    ips?: Array<string>;

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
}

export interface ProxyEndpointUpdateParams {
  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<string>;

  /**
   * The name of the proxy endpoint.
   */
  name?: string;

  /**
   * The subdomain to be used as the destination in the proxy client.
   */
  subdomain?: string;
}

export interface ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams {
  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips: Array<string>;

  /**
   * The name of the proxy endpoint.
   */
  name: string;

  /**
   * The subdomain to be used as the destination in the proxy client.
   */
  subdomain?: string;
}

export namespace ProxyEndpoints {
  export import ProxyEndpointUpdateResponse = ProxyEndpointsAPI.ProxyEndpointUpdateResponse;
  export import ProxyEndpointListResponse = ProxyEndpointsAPI.ProxyEndpointListResponse;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointGetResponse = ProxyEndpointsAPI.ProxyEndpointGetResponse;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse;
  export import ProxyEndpointUpdateParams = ProxyEndpointsAPI.ProxyEndpointUpdateParams;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams;
}
