// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as IPSECTunnelsAPI from './ipsec-tunnels';
import * as MagicTransitAPI from './magic-transit';

export class IPSECTunnels extends APIResource {
  /**
   * Creates new IPsec tunnels associated with an account. Use `?validate_only=true`
   * as an optional query parameter to only run validation without persisting
   * changes.
   */
  create(params: IPSECTunnelCreateParams, options?: Core.RequestOptions): Core.APIPromise<IPSECTunnelCreateResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/magic/ipsec_tunnels`, { body, ...options }) as Core.APIPromise<{ result: IPSECTunnelCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a specific IPsec tunnel associated with an account. Use
   * `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes.
   */
  update(ipsecTunnelId: string, params: IPSECTunnelUpdateParams, options?: Core.RequestOptions): Core.APIPromise<IPSECTunnelUpdateResponse> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/magic/ipsec_tunnels/${ipsecTunnelId}`, { body, ...options }) as Core.APIPromise<{ result: IPSECTunnelUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists IPsec tunnels associated with an account.
   */
  list(params: IPSECTunnelListParams, options?: Core.RequestOptions): Core.APIPromise<IPSECTunnelListResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/magic/ipsec_tunnels`, options) as Core.APIPromise<{ result: IPSECTunnelListResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disables and removes a specific static IPsec Tunnel associated with an account.
   * Use `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes.
   */
  delete(ipsecTunnelId: string, params: IPSECTunnelDeleteParams, options?: Core.RequestOptions): Core.APIPromise<IPSECTunnelDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/magic/ipsec_tunnels/${ipsecTunnelId}`, options) as Core.APIPromise<{ result: IPSECTunnelDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists details for a specific IPsec tunnel.
   */
  get(ipsecTunnelId: string, params: IPSECTunnelGetParams, options?: Core.RequestOptions): Core.APIPromise<IPSECTunnelGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/magic/ipsec_tunnels/${ipsecTunnelId}`, options) as Core.APIPromise<{ result: IPSECTunnelGetResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generates a Pre Shared Key for a specific IPsec tunnel used in the IKE session.
   * Use `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes. After a PSK is generated, the PSK is immediately
   * persisted to Cloudflare's edge and cannot be retrieved later. Note the PSK in a
   * safe place.
   */
  pskGenerate(ipsecTunnelId: string, params: IPSECTunnelPSKGenerateParams, options?: Core.RequestOptions): Core.APIPromise<IPSECTunnelPSKGenerateResponse> {
    const { account_id, body } = params;
    return (this._client.post(`/accounts/${account_id}/magic/ipsec_tunnels/${ipsecTunnelId}/psk_generate`, { body: body, ...options }) as Core.APIPromise<{ result: IPSECTunnelPSKGenerateResponse }>)._thenUnwrap((obj) => obj.result);
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

export interface IPSECTunnelUpdateResponse {
  modified?: boolean;

  modified_ipsec_tunnel?: IPSECTunnelUpdateResponse.ModifiedIPSECTunnel;
}

export namespace IPSECTunnelUpdateResponse {
  export interface ModifiedIPSECTunnel {
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

    tunnel_health_check?: ModifiedIPSECTunnel.TunnelHealthCheck;
  }

  export namespace ModifiedIPSECTunnel {
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

export interface IPSECTunnelDeleteResponse {
  deleted?: boolean;

  deleted_ipsec_tunnel?: IPSECTunnelDeleteResponse.DeletedIPSECTunnel;
}

export namespace IPSECTunnelDeleteResponse {
  export interface DeletedIPSECTunnel {
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

    tunnel_health_check?: DeletedIPSECTunnel.TunnelHealthCheck;
  }

  export namespace DeletedIPSECTunnel {
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

export interface IPSECTunnelGetResponse {
  ipsec_tunnel?: IPSECTunnelGetResponse.IPSECTunnel;
}

export namespace IPSECTunnelGetResponse {
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

export interface IPSECTunnelPSKGenerateResponse {
  /**
   * Identifier
   */
  ipsec_tunnel_id?: string;

  /**
   * A randomly generated or provided string for use in the IPsec tunnel.
   */
  psk?: string;

  /**
   * The PSK metadata that includes when the PSK was generated.
   */
  psk_metadata?: PSKMetadata;
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

export interface IPSECTunnelUpdateParams {
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

export interface IPSECTunnelDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IPSECTunnelGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IPSECTunnelPSKGenerateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace IPSECTunnels {
  export import PSKMetadata = IPSECTunnelsAPI.PSKMetadata;
  export import IPSECTunnelCreateResponse = IPSECTunnelsAPI.IPSECTunnelCreateResponse;
  export import IPSECTunnelUpdateResponse = IPSECTunnelsAPI.IPSECTunnelUpdateResponse;
  export import IPSECTunnelListResponse = IPSECTunnelsAPI.IPSECTunnelListResponse;
  export import IPSECTunnelDeleteResponse = IPSECTunnelsAPI.IPSECTunnelDeleteResponse;
  export import IPSECTunnelGetResponse = IPSECTunnelsAPI.IPSECTunnelGetResponse;
  export import IPSECTunnelPSKGenerateResponse = IPSECTunnelsAPI.IPSECTunnelPSKGenerateResponse;
  export import IPSECTunnelCreateParams = IPSECTunnelsAPI.IPSECTunnelCreateParams;
  export import IPSECTunnelUpdateParams = IPSECTunnelsAPI.IPSECTunnelUpdateParams;
  export import IPSECTunnelListParams = IPSECTunnelsAPI.IPSECTunnelListParams;
  export import IPSECTunnelDeleteParams = IPSECTunnelsAPI.IPSECTunnelDeleteParams;
  export import IPSECTunnelGetParams = IPSECTunnelsAPI.IPSECTunnelGetParams;
  export import IPSECTunnelPSKGenerateParams = IPSECTunnelsAPI.IPSECTunnelPSKGenerateParams;
}
