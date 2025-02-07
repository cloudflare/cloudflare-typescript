// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ProxyEndpoints extends APIResource {
  /**
   * Creates a new Zero Trust Gateway proxy endpoint.
   */
  create(params: ProxyEndpointCreateParams, options?: RequestOptions): APIPromise<ProxyEndpoint> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/gateway/proxy_endpoints`, {
        body,
        ...options,
      }) as APIPromise<{ result: ProxyEndpoint }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust Gateway proxy endpoints for an account.
   */
  list(params: ProxyEndpointListParams, options?: RequestOptions): APIPromise<ProxyEndpoint> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/gateway/proxy_endpoints`, options) as APIPromise<{
        result: ProxyEndpoint;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a configured Zero Trust Gateway proxy endpoint.
   */
  delete(
    proxyEndpointID: string,
    params: ProxyEndpointDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ProxyEndpointDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointID}`,
        options,
      ) as APIPromise<{ result: ProxyEndpointDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Zero Trust Gateway proxy endpoint.
   */
  edit(
    proxyEndpointID: string,
    params: ProxyEndpointEditParams,
    options?: RequestOptions,
  ): APIPromise<ProxyEndpoint> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ProxyEndpoint }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust Gateway proxy endpoint.
   */
  get(
    proxyEndpointID: string,
    params: ProxyEndpointGetParams,
    options?: RequestOptions,
  ): PagePromise<ProxyEndpointsSinglePage, ProxyEndpoint> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointID}`,
      SinglePage<ProxyEndpoint>,
      options,
    );
  }
}

export type ProxyEndpointsSinglePage = SinglePage<ProxyEndpoint>;

/**
 * The IPv4 CIDR or IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /109. IPv4
 * CIDRs are limited to a maximum of /25.
 */
export type GatewayIPs = string;

/**
 * The IPv4 CIDR or IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /109. IPv4
 * CIDRs are limited to a maximum of /25.
 */
export type GatewayIPsParam = string;

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

export type ProxyEndpointDeleteResponse = unknown;

export interface ProxyEndpointCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: A list of CIDRs to restrict ingress connections.
   */
  ips: Array<GatewayIPsParam>;

  /**
   * Body param: The name of the proxy endpoint.
   */
  name: string;
}

export interface ProxyEndpointListParams {
  account_id: string;
}

export interface ProxyEndpointDeleteParams {
  account_id: string;
}

export interface ProxyEndpointEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<GatewayIPsParam>;

  /**
   * Body param: The name of the proxy endpoint.
   */
  name?: string;
}

export interface ProxyEndpointGetParams {
  account_id: string;
}

export declare namespace ProxyEndpoints {
  export {
    type GatewayIPs as GatewayIPs,
    type ProxyEndpoint as ProxyEndpoint,
    type ProxyEndpointDeleteResponse as ProxyEndpointDeleteResponse,
    type ProxyEndpointsSinglePage as ProxyEndpointsSinglePage,
    type ProxyEndpointCreateParams as ProxyEndpointCreateParams,
    type ProxyEndpointListParams as ProxyEndpointListParams,
    type ProxyEndpointDeleteParams as ProxyEndpointDeleteParams,
    type ProxyEndpointEditParams as ProxyEndpointEditParams,
    type ProxyEndpointGetParams as ProxyEndpointGetParams,
  };
}
