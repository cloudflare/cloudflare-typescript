// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProxyEndpointsAPI from './proxy-endpoints';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ProxyEndpoints extends APIResource {
  /**
   * Create a new Zero Trust Gateway proxy endpoint.
   *
   * @example
   * ```ts
   * const proxyEndpoint =
   *   await client.zeroTrust.gateway.proxyEndpoints.create({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     name: 'Devops team',
   *   });
   * ```
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
   * List all Zero Trust Gateway proxy endpoints for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const proxyEndpoint of client.zeroTrust.gateway.proxyEndpoints.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ProxyEndpointListParams,
    options?: RequestOptions,
  ): PagePromise<ProxyEndpointsSinglePage, ProxyEndpoint> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/gateway/proxy_endpoints`,
      SinglePage<ProxyEndpoint>,
      options,
    );
  }

  /**
   * Delete a configured Zero Trust Gateway proxy endpoint.
   *
   * @example
   * ```ts
   * const proxyEndpoint =
   *   await client.zeroTrust.gateway.proxyEndpoints.delete(
   *     'ed35569b41ce4d1facfe683550f54086',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
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
   * Update a configured Zero Trust Gateway proxy endpoint.
   *
   * @example
   * ```ts
   * const proxyEndpoint =
   *   await client.zeroTrust.gateway.proxyEndpoints.edit(
   *     'ed35569b41ce4d1facfe683550f54086',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
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
   * Get a single Zero Trust Gateway proxy endpoint.
   *
   * @example
   * ```ts
   * const proxyEndpoint =
   *   await client.zeroTrust.gateway.proxyEndpoints.get(
   *     'ed35569b41ce4d1facfe683550f54086',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    proxyEndpointID: string,
    params: ProxyEndpointGetParams,
    options?: RequestOptions,
  ): APIPromise<ProxyEndpoint> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/gateway/proxy_endpoints/${proxyEndpointID}`,
        options,
      ) as APIPromise<{ result: ProxyEndpoint }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ProxyEndpointsSinglePage = SinglePage<ProxyEndpoint>;

/**
 * Specify an IPv4 or IPv6 CIDR. Limit IPv6 to a maximum of /109 and IPv4 to a
 * maximum of /25.
 */
export type GatewayIPs = string;

/**
 * Specify an IPv4 or IPv6 CIDR. Limit IPv6 to a maximum of /109 and IPv4 to a
 * maximum of /25.
 */
export type GatewayIPsParam = string;

export type ProxyEndpoint =
  | ProxyEndpoint.ZeroTrustGatewayProxyEndpointIP
  | ProxyEndpoint.ZeroTrustGatewayProxyEndpointIdentity;

export namespace ProxyEndpoint {
  export interface ZeroTrustGatewayProxyEndpointIP {
    /**
     * Specify the list of CIDRs to restrict ingress connections.
     */
    ips: Array<ProxyEndpointsAPI.GatewayIPs>;

    /**
     * Specify the name of the proxy endpoint.
     */
    name: string;

    id?: string;

    created_at?: string;

    /**
     * The proxy endpoint kind
     */
    kind?: 'ip';

    /**
     * Specify the subdomain to use as the destination in the proxy client.
     */
    subdomain?: string;

    updated_at?: string;
  }

  export interface ZeroTrustGatewayProxyEndpointIdentity {
    /**
     * The proxy endpoint kind
     */
    kind: 'identity';

    /**
     * Specify the name of the proxy endpoint.
     */
    name: string;

    id?: string;

    created_at?: string;

    /**
     * Specify the subdomain to use as the destination in the proxy client.
     */
    subdomain?: string;

    updated_at?: string;
  }
}

export type ProxyEndpointDeleteResponse = unknown;

export type ProxyEndpointCreateParams =
  | ProxyEndpointCreateParams.ZeroTrustGatewayProxyEndpointIPCreate
  | ProxyEndpointCreateParams.ZeroTrustGatewayProxyEndpointIdentityCreate;

export declare namespace ProxyEndpointCreateParams {
  export interface ZeroTrustGatewayProxyEndpointIPCreate {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: Specify the name of the proxy endpoint.
     */
    name: string;

    /**
     * Body param: The proxy endpoint kind
     */
    kind?: 'ip';
  }

  export interface ZeroTrustGatewayProxyEndpointIdentityCreate {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: The proxy endpoint kind
     */
    kind: 'identity';

    /**
     * Body param: Specify the name of the proxy endpoint.
     */
    name: string;
  }
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
   * Body param: Specify the list of CIDRs to restrict ingress connections.
   */
  ips?: Array<GatewayIPsParam>;

  /**
   * Body param: Specify the name of the proxy endpoint.
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
