// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProxyEndpointsAPI from 'cloudflare/resources/gateways/proxy-endpoints';

export class ProxyEndpoints extends APIResource {
  /**
   * Creates a new Zero Trust Gateway proxy endpoint.
   */
  create(
    params: ProxyEndpointCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/proxy_endpoints`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProxyEndpointCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust Gateway proxy endpoint.
   */
  list(
    params: ProxyEndpointListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/proxy_endpoints`, options) as Core.APIPromise<{
        result: ProxyEndpointListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a configured Zero Trust Gateway proxy endpoint.
   */
  delete(
    proxyEndpointId: unknown,
    params: ProxyEndpointDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointId}`,
        options,
      ) as Core.APIPromise<{ result: ProxyEndpointDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Zero Trust Gateway proxy endpoint.
   */
  edit(
    proxyEndpointId: unknown,
    params: ProxyEndpointEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProxyEndpointEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust Gateway proxy endpoints for an account.
   */
  get(
    proxyEndpointId: unknown,
    params: ProxyEndpointGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointId}`,
        options,
      ) as Core.APIPromise<{ result: ProxyEndpointGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ProxyEndpointCreateResponse {
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

export type ProxyEndpointListResponse = Array<ProxyEndpointListResponse.ProxyEndpointListResponseItem>;

export namespace ProxyEndpointListResponse {
  export interface ProxyEndpointListResponseItem {
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

export type ProxyEndpointDeleteResponse = unknown | string;

export interface ProxyEndpointEditResponse {
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

export interface ProxyEndpointCreateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: A list of CIDRs to restrict ingress connections.
   */
  ips: Array<string>;

  /**
   * Body param: The name of the proxy endpoint.
   */
  name: string;

  /**
   * Body param: The subdomain to be used as the destination in the proxy client.
   */
  subdomain?: string;
}

export interface ProxyEndpointListParams {
  account_id: unknown;
}

export interface ProxyEndpointDeleteParams {
  account_id: unknown;
}

export interface ProxyEndpointEditParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<string>;

  /**
   * Body param: The name of the proxy endpoint.
   */
  name?: string;

  /**
   * Body param: The subdomain to be used as the destination in the proxy client.
   */
  subdomain?: string;
}

export interface ProxyEndpointGetParams {
  account_id: unknown;
}

export namespace ProxyEndpoints {
  export import ProxyEndpointCreateResponse = ProxyEndpointsAPI.ProxyEndpointCreateResponse;
  export import ProxyEndpointListResponse = ProxyEndpointsAPI.ProxyEndpointListResponse;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointEditResponse = ProxyEndpointsAPI.ProxyEndpointEditResponse;
  export import ProxyEndpointGetResponse = ProxyEndpointsAPI.ProxyEndpointGetResponse;
  export import ProxyEndpointCreateParams = ProxyEndpointsAPI.ProxyEndpointCreateParams;
  export import ProxyEndpointListParams = ProxyEndpointsAPI.ProxyEndpointListParams;
  export import ProxyEndpointDeleteParams = ProxyEndpointsAPI.ProxyEndpointDeleteParams;
  export import ProxyEndpointEditParams = ProxyEndpointsAPI.ProxyEndpointEditParams;
  export import ProxyEndpointGetParams = ProxyEndpointsAPI.ProxyEndpointGetParams;
}
