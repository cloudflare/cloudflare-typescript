// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GreTunnelsAPI from 'cloudflare/resources/magics/gre-tunnels';

export class GreTunnels extends APIResource {
  /**
   * Creates new GRE tunnels. Use `?validate_only=true` as an optional query
   * parameter to only run validation without persisting changes.
   */
  create(
    accountIdentifier: string,
    body: GreTunnelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/magic/gre_tunnels`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GreTunnelCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists GRE tunnels associated with an account.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<GreTunnelListResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/magic/gre_tunnels`, options) as Core.APIPromise<{
        result: GreTunnelListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disables and removes a specific static GRE tunnel. Use `?validate_only=true` as
   * an optional query parameter to only run validation without persisting changes.
   */
  delete(
    accountIdentifier: string,
    tunnelIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/magic/gre_tunnels/${tunnelIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: GreTunnelDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists informtion for a specific GRE tunnel.
   */
  get(
    accountIdentifier: string,
    tunnelIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/gre_tunnels/${tunnelIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: GreTunnelGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a specific GRE tunnel. Use `?validate_only=true` as an optional query
   * parameter to only run validation without persisting changes.
   */
  replace(
    accountIdentifier: string,
    tunnelIdentifier: string,
    body: GreTunnelReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/gre_tunnels/${tunnelIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GreTunnelReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GreTunnelCreateResponse {
  gre_tunnels?: Array<GreTunnelCreateResponse.GreTunnel>;
}

export namespace GreTunnelCreateResponse {
  export interface GreTunnel {
    /**
     * The IP address assigned to the Cloudflare side of the GRE tunnel.
     */
    cloudflare_gre_endpoint: string;

    /**
     * The IP address assigned to the customer side of the GRE tunnel.
     */
    customer_gre_endpoint: string;

    /**
     * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
     * of the tunnel. Select the subnet from the following private IP space:
     * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
     */
    interface_address: string;

    /**
     * The name of the tunnel. The name cannot contain spaces or special characters,
     * must be 15 characters or less, and cannot share a name with another GRE tunnel.
     */
    name: string;

    /**
     * Tunnel identifier tag.
     */
    id?: string;

    /**
     * The date and time the tunnel was created.
     */
    created_on?: string;

    /**
     * An optional description of the GRE tunnel.
     */
    description?: string;

    health_check?: GreTunnel.HealthCheck;

    /**
     * The date and time the tunnel was last modified.
     */
    modified_on?: string;

    /**
     * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value
     * is 576.
     */
    mtu?: number;

    /**
     * Time To Live (TTL) in number of hops of the GRE tunnel.
     */
    ttl?: number;
  }

  export namespace GreTunnel {
    export interface HealthCheck {
      /**
       * The direction of the flow of the healthcheck. Either unidirectional, where the
       * probe comes to you via the tunnel and the result comes back to Cloudflare via
       * the open Internet, or bidirectional where both the probe and result come and go
       * via the tunnel.
       */
      direction?: 'unidirectional' | 'bidirectional';

      /**
       * Determines whether to run healthchecks for a tunnel.
       */
      enabled?: boolean;

      /**
       * How frequent the health check is run. The default value is `mid`.
       */
      rate?: 'low' | 'mid' | 'high';

      /**
       * The destination address in a request type health check. After the healthcheck is
       * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
       * to this address. This field defaults to `customer_gre_endpoint address`.
       */
      target?: string;

      /**
       * The type of healthcheck to run, reply or request. The default value is `reply`.
       */
      type?: 'reply' | 'request';
    }
  }
}

export interface GreTunnelListResponse {
  gre_tunnels?: Array<GreTunnelListResponse.GreTunnel>;
}

export namespace GreTunnelListResponse {
  export interface GreTunnel {
    /**
     * The IP address assigned to the Cloudflare side of the GRE tunnel.
     */
    cloudflare_gre_endpoint: string;

    /**
     * The IP address assigned to the customer side of the GRE tunnel.
     */
    customer_gre_endpoint: string;

    /**
     * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
     * of the tunnel. Select the subnet from the following private IP space:
     * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
     */
    interface_address: string;

    /**
     * The name of the tunnel. The name cannot contain spaces or special characters,
     * must be 15 characters or less, and cannot share a name with another GRE tunnel.
     */
    name: string;

    /**
     * Tunnel identifier tag.
     */
    id?: string;

    /**
     * The date and time the tunnel was created.
     */
    created_on?: string;

    /**
     * An optional description of the GRE tunnel.
     */
    description?: string;

    health_check?: GreTunnel.HealthCheck;

    /**
     * The date and time the tunnel was last modified.
     */
    modified_on?: string;

    /**
     * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value
     * is 576.
     */
    mtu?: number;

    /**
     * Time To Live (TTL) in number of hops of the GRE tunnel.
     */
    ttl?: number;
  }

  export namespace GreTunnel {
    export interface HealthCheck {
      /**
       * The direction of the flow of the healthcheck. Either unidirectional, where the
       * probe comes to you via the tunnel and the result comes back to Cloudflare via
       * the open Internet, or bidirectional where both the probe and result come and go
       * via the tunnel.
       */
      direction?: 'unidirectional' | 'bidirectional';

      /**
       * Determines whether to run healthchecks for a tunnel.
       */
      enabled?: boolean;

      /**
       * How frequent the health check is run. The default value is `mid`.
       */
      rate?: 'low' | 'mid' | 'high';

      /**
       * The destination address in a request type health check. After the healthcheck is
       * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
       * to this address. This field defaults to `customer_gre_endpoint address`.
       */
      target?: string;

      /**
       * The type of healthcheck to run, reply or request. The default value is `reply`.
       */
      type?: 'reply' | 'request';
    }
  }
}

export interface GreTunnelDeleteResponse {
  deleted?: boolean;

  deleted_gre_tunnel?: unknown;
}

export interface GreTunnelGetResponse {
  gre_tunnel?: unknown;
}

export interface GreTunnelReplaceResponse {
  modified?: boolean;

  modified_gre_tunnel?: unknown;
}

export type GreTunnelCreateParams = unknown;

export interface GreTunnelReplaceParams {
  /**
   * The IP address assigned to the Cloudflare side of the GRE tunnel.
   */
  cloudflare_gre_endpoint: string;

  /**
   * The IP address assigned to the customer side of the GRE tunnel.
   */
  customer_gre_endpoint: string;

  /**
   * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
   * of the tunnel. Select the subnet from the following private IP space:
   * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
   */
  interface_address: string;

  /**
   * The name of the tunnel. The name cannot contain spaces or special characters,
   * must be 15 characters or less, and cannot share a name with another GRE tunnel.
   */
  name: string;

  /**
   * An optional description of the GRE tunnel.
   */
  description?: string;

  health_check?: GreTunnelReplaceParams.HealthCheck;

  /**
   * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value
   * is 576.
   */
  mtu?: number;

  /**
   * Time To Live (TTL) in number of hops of the GRE tunnel.
   */
  ttl?: number;
}

export namespace GreTunnelReplaceParams {
  export interface HealthCheck {
    /**
     * The direction of the flow of the healthcheck. Either unidirectional, where the
     * probe comes to you via the tunnel and the result comes back to Cloudflare via
     * the open Internet, or bidirectional where both the probe and result come and go
     * via the tunnel.
     */
    direction?: 'unidirectional' | 'bidirectional';

    /**
     * Determines whether to run healthchecks for a tunnel.
     */
    enabled?: boolean;

    /**
     * How frequent the health check is run. The default value is `mid`.
     */
    rate?: 'low' | 'mid' | 'high';

    /**
     * The destination address in a request type health check. After the healthcheck is
     * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
     * to this address. This field defaults to `customer_gre_endpoint address`.
     */
    target?: string;

    /**
     * The type of healthcheck to run, reply or request. The default value is `reply`.
     */
    type?: 'reply' | 'request';
  }
}

export namespace GreTunnels {
  export import GreTunnelCreateResponse = GreTunnelsAPI.GreTunnelCreateResponse;
  export import GreTunnelListResponse = GreTunnelsAPI.GreTunnelListResponse;
  export import GreTunnelDeleteResponse = GreTunnelsAPI.GreTunnelDeleteResponse;
  export import GreTunnelGetResponse = GreTunnelsAPI.GreTunnelGetResponse;
  export import GreTunnelReplaceResponse = GreTunnelsAPI.GreTunnelReplaceResponse;
  export import GreTunnelCreateParams = GreTunnelsAPI.GreTunnelCreateParams;
  export import GreTunnelReplaceParams = GreTunnelsAPI.GreTunnelReplaceParams;
}
