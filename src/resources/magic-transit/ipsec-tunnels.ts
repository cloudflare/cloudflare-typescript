// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as IPSECTunnelsAPI from './ipsec-tunnels';
import * as MagicTransitAPI from './magic-transit';

export class IPSECTunnels extends APIResource {
  /**
   * Creates new IPsec tunnels associated with an account. Use `?validate_only=true`
   * as an optional query parameter to only run validation without persisting
   * changes.
   */
  create(
    params: IPSECTunnelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPSECTunnelCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/ipsec_tunnels`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IPSECTunnelCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists IPsec tunnels associated with an account.
   */
  list(
    params: IPSECTunnelListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPSECTunnelListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/ipsec_tunnels`, options) as Core.APIPromise<{
        result: IPSECTunnelListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The PSK metadata that includes when the PSK was generated.
 */
export interface PSKMetadata {
  /**
   * The date and time the tunnel was last modified.
   */
  last_generated_on?: string;
}

export interface IPSECTunnelCreateResponse {
  ipsec_tunnels?: Array<IPSECTunnelCreateResponse.IPSECTunnel>;
}

export namespace IPSECTunnelCreateResponse {
  export interface IPSECTunnel {
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
     * The IP address assigned to the customer side of the IPsec tunnel. Not required,
     * but must be set for proactive traceroutes to work.
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
    psk_metadata?: IPSECTunnelsAPI.PSKMetadata;

    /**
     * If `true`, then IPsec replay protection will be supported in the
     * Cloudflare-to-customer direction.
     */
    replay_protection?: boolean;

    tunnel_health_check?: IPSECTunnel.TunnelHealthCheck;
  }

  export namespace IPSECTunnel {
    export interface TunnelHealthCheck {
      /**
       * Determines whether to run healthchecks for a tunnel.
       */
      enabled?: boolean;

      /**
       * How frequent the health check is run. The default value is `mid`.
       */
      rate?: MagicTransitAPI.HealthCheckRate;

      /**
       * The destination address in a request type health check. After the healthcheck is
       * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
       * to this address. This field defaults to `customer_gre_endpoint address`.
       */
      target?: string;

      /**
       * The type of healthcheck to run, reply or request. The default value is `reply`.
       */
      type?: MagicTransitAPI.HealthCheckType;
    }
  }
}

export interface IPSECTunnelListResponse {
  ipsec_tunnels?: Array<IPSECTunnelListResponse.IPSECTunnel>;
}

export namespace IPSECTunnelListResponse {
  export interface IPSECTunnel {
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
     * The IP address assigned to the customer side of the IPsec tunnel. Not required,
     * but must be set for proactive traceroutes to work.
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
    psk_metadata?: IPSECTunnelsAPI.PSKMetadata;

    /**
     * If `true`, then IPsec replay protection will be supported in the
     * Cloudflare-to-customer direction.
     */
    replay_protection?: boolean;

    tunnel_health_check?: IPSECTunnel.TunnelHealthCheck;
  }

  export namespace IPSECTunnel {
    export interface TunnelHealthCheck {
      /**
       * Determines whether to run healthchecks for a tunnel.
       */
      enabled?: boolean;

      /**
       * How frequent the health check is run. The default value is `mid`.
       */
      rate?: MagicTransitAPI.HealthCheckRate;

      /**
       * The destination address in a request type health check. After the healthcheck is
       * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
       * to this address. This field defaults to `customer_gre_endpoint address`.
       */
      target?: string;

      /**
       * The type of healthcheck to run, reply or request. The default value is `reply`.
       */
      type?: MagicTransitAPI.HealthCheckType;
    }
  }
}

export interface IPSECTunnelCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The IP address assigned to the Cloudflare side of the IPsec tunnel.
   */
  cloudflare_endpoint: string;

  /**
   * Body param: A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for
   * each side of the tunnel. Select the subnet from the following private IP space:
   * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
   */
  interface_address: string;

  /**
   * Body param: The name of the IPsec tunnel. The name cannot share a name with
   * other tunnels.
   */
  name: string;

  /**
   * Body param: The IP address assigned to the customer side of the IPsec tunnel.
   * Not required, but must be set for proactive traceroutes to work.
   */
  customer_endpoint?: string;

  /**
   * Body param: An optional description forthe IPsec tunnel.
   */
  description?: string;

  /**
   * Body param:
   */
  health_check?: MagicTransitAPI.HealthCheckParam;

  /**
   * Body param: A randomly generated or provided string for use in the IPsec tunnel.
   */
  psk?: string;

  /**
   * Body param: If `true`, then IPsec replay protection will be supported in the
   * Cloudflare-to-customer direction.
   */
  replay_protection?: boolean;
}

export interface IPSECTunnelListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace IPSECTunnels {
  export import PSKMetadata = IPSECTunnelsAPI.PSKMetadata;
  export import IPSECTunnelCreateResponse = IPSECTunnelsAPI.IPSECTunnelCreateResponse;
  export import IPSECTunnelListResponse = IPSECTunnelsAPI.IPSECTunnelListResponse;
  export import IPSECTunnelCreateParams = IPSECTunnelsAPI.IPSECTunnelCreateParams;
  export import IPSECTunnelListParams = IPSECTunnelsAPI.IPSECTunnelListParams;
}
