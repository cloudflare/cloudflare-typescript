// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IpsecTunnelsAPI from 'cloudflare/resources/magics/ipsec-tunnels/ipsec-tunnels';
import * as PskGeneratesAPI from 'cloudflare/resources/magics/ipsec-tunnels/psk-generates';

export class IpsecTunnels extends APIResource {
  pskGenerates: PskGeneratesAPI.PskGenerates = new PskGeneratesAPI.PskGenerates(this._client);

  /**
   * Creates new IPsec tunnels associated with an account. Use `?validate_only=true`
   * as an optional query parameter to only run validation without persisting
   * changes.
   */
  create(
    accountIdentifier: string,
    body: IpsecTunnelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IpsecTunnelCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/magic/ipsec_tunnels`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IpsecTunnelCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists IPsec tunnels associated with an account.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<IpsecTunnelListResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/magic/ipsec_tunnels`, options) as Core.APIPromise<{
        result: IpsecTunnelListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disables and removes a specific static IPsec Tunnel associated with an account.
   * Use `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes.
   */
  delete(
    accountIdentifier: string,
    tunnelIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IpsecTunnelDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/magic/ipsec_tunnels/${tunnelIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: IpsecTunnelDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists details for a specific IPsec tunnel.
   */
  get(
    accountIdentifier: string,
    tunnelIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IpsecTunnelGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/ipsec_tunnels/${tunnelIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: IpsecTunnelGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a specific IPsec tunnel associated with an account. Use
   * `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes.
   */
  replace(
    accountIdentifier: string,
    tunnelIdentifier: string,
    body: IpsecTunnelReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IpsecTunnelReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/ipsec_tunnels/${tunnelIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IpsecTunnelReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IpsecTunnelCreateResponse {
  ipsec_tunnels?: Array<IpsecTunnelCreateResponse.IpsecTunnel>;
}

export namespace IpsecTunnelCreateResponse {
  export interface IpsecTunnel {
    /**
     * The IP address assigned to the Cloudflare side of the IPsec tunnel.
     */
    cloudflare_endpoint: string;

    /**
     * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
     * of the tunnel. Select the subnet from the following private IP space:
     * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
     */
    interface_address: string;

    /**
     * The name of the IPsec tunnel. The name cannot share a name with other tunnels.
     */
    name: string;

    /**
     * Tunnel identifier tag.
     */
    id?: string;

    /**
     * When `true`, the tunnel can use a null-cipher (`ENCR_NULL`) in the ESP tunnel
     * (Phase 2).
     */
    allow_null_cipher?: boolean;

    /**
     * The date and time the tunnel was created.
     */
    created_on?: string;

    /**
     * The IP address assigned to the customer side of the IPsec tunnel.
     */
    customer_endpoint?: string;

    /**
     * An optional description forthe IPsec tunnel.
     */
    description?: string;

    /**
     * The date and time the tunnel was last modified.
     */
    modified_on?: string;

    /**
     * The PSK metadata that includes when the PSK was generated.
     */
    psk_metadata?: IpsecTunnel.PskMetadata;

    /**
     * If `true`, then IPsec replay protection will be supported in the
     * Cloudflare-to-customer direction.
     */
    replay_protection?: boolean;

    tunnel_health_check?: IpsecTunnel.TunnelHealthCheck;
  }

  export namespace IpsecTunnel {
    /**
     * The PSK metadata that includes when the PSK was generated.
     */
    export interface PskMetadata {
      /**
       * The date and time the tunnel was last modified.
       */
      last_generated_on?: string;
    }

    export interface TunnelHealthCheck {
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

export interface IpsecTunnelListResponse {
  ipsec_tunnels?: Array<IpsecTunnelListResponse.IpsecTunnel>;
}

export namespace IpsecTunnelListResponse {
  export interface IpsecTunnel {
    /**
     * The IP address assigned to the Cloudflare side of the IPsec tunnel.
     */
    cloudflare_endpoint: string;

    /**
     * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
     * of the tunnel. Select the subnet from the following private IP space:
     * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
     */
    interface_address: string;

    /**
     * The name of the IPsec tunnel. The name cannot share a name with other tunnels.
     */
    name: string;

    /**
     * Tunnel identifier tag.
     */
    id?: string;

    /**
     * When `true`, the tunnel can use a null-cipher (`ENCR_NULL`) in the ESP tunnel
     * (Phase 2).
     */
    allow_null_cipher?: boolean;

    /**
     * The date and time the tunnel was created.
     */
    created_on?: string;

    /**
     * The IP address assigned to the customer side of the IPsec tunnel.
     */
    customer_endpoint?: string;

    /**
     * An optional description forthe IPsec tunnel.
     */
    description?: string;

    /**
     * The date and time the tunnel was last modified.
     */
    modified_on?: string;

    /**
     * The PSK metadata that includes when the PSK was generated.
     */
    psk_metadata?: IpsecTunnel.PskMetadata;

    /**
     * If `true`, then IPsec replay protection will be supported in the
     * Cloudflare-to-customer direction.
     */
    replay_protection?: boolean;

    tunnel_health_check?: IpsecTunnel.TunnelHealthCheck;
  }

  export namespace IpsecTunnel {
    /**
     * The PSK metadata that includes when the PSK was generated.
     */
    export interface PskMetadata {
      /**
       * The date and time the tunnel was last modified.
       */
      last_generated_on?: string;
    }

    export interface TunnelHealthCheck {
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

export interface IpsecTunnelDeleteResponse {
  deleted?: boolean;

  deleted_ipsec_tunnel?: unknown;
}

export interface IpsecTunnelGetResponse {
  ipsec_tunnel?: unknown;
}

export interface IpsecTunnelReplaceResponse {
  modified?: boolean;

  modified_ipsec_tunnel?: unknown;
}

export interface IpsecTunnelCreateParams {
  /**
   * The IP address assigned to the Cloudflare side of the IPsec tunnel.
   */
  cloudflare_endpoint: string;

  /**
   * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
   * of the tunnel. Select the subnet from the following private IP space:
   * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
   */
  interface_address: string;

  /**
   * The name of the IPsec tunnel. The name cannot share a name with other tunnels.
   */
  name: string;

  /**
   * The IP address assigned to the customer side of the IPsec tunnel.
   */
  customer_endpoint?: string;

  /**
   * An optional description forthe IPsec tunnel.
   */
  description?: string;

  /**
   * A randomly generated or provided string for use in the IPsec tunnel.
   */
  psk?: string;

  /**
   * If `true`, then IPsec replay protection will be supported in the
   * Cloudflare-to-customer direction.
   */
  replay_protection?: boolean;
}

export interface IpsecTunnelReplaceParams {
  /**
   * The IP address assigned to the Cloudflare side of the IPsec tunnel.
   */
  cloudflare_endpoint: string;

  /**
   * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
   * of the tunnel. Select the subnet from the following private IP space:
   * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
   */
  interface_address: string;

  /**
   * The name of the IPsec tunnel. The name cannot share a name with other tunnels.
   */
  name: string;

  /**
   * The IP address assigned to the customer side of the IPsec tunnel.
   */
  customer_endpoint?: string;

  /**
   * An optional description forthe IPsec tunnel.
   */
  description?: string;

  /**
   * A randomly generated or provided string for use in the IPsec tunnel.
   */
  psk?: string;

  /**
   * If `true`, then IPsec replay protection will be supported in the
   * Cloudflare-to-customer direction.
   */
  replay_protection?: boolean;
}

export namespace IpsecTunnels {
  export import IpsecTunnelCreateResponse = IpsecTunnelsAPI.IpsecTunnelCreateResponse;
  export import IpsecTunnelListResponse = IpsecTunnelsAPI.IpsecTunnelListResponse;
  export import IpsecTunnelDeleteResponse = IpsecTunnelsAPI.IpsecTunnelDeleteResponse;
  export import IpsecTunnelGetResponse = IpsecTunnelsAPI.IpsecTunnelGetResponse;
  export import IpsecTunnelReplaceResponse = IpsecTunnelsAPI.IpsecTunnelReplaceResponse;
  export import IpsecTunnelCreateParams = IpsecTunnelsAPI.IpsecTunnelCreateParams;
  export import IpsecTunnelReplaceParams = IpsecTunnelsAPI.IpsecTunnelReplaceParams;
  export import PskGenerates = PskGeneratesAPI.PskGenerates;
  export import PskGenerateCreateResponse = PskGeneratesAPI.PskGenerateCreateResponse;
}
