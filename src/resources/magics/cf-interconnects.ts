// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CfInterconnectsAPI from 'cloudflare/resources/magics/cf-interconnects';

export class CfInterconnects extends APIResource {
  /**
   * Updates a specific interconnect associated with an account. Use
   * `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes.
   */
  update(
    accountIdentifier: string,
    tunnelIdentifier: string,
    body: CfInterconnectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/cf_interconnects/${tunnelIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CfInterconnectUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists details for a specific interconnect.
   */
  get(
    accountIdentifier: string,
    tunnelIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/cf_interconnects/${tunnelIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: CfInterconnectGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists interconnects associated with an account.
   */
  magicInterconnectsListInterconnects(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectMagicInterconnectsListInterconnectsResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/magic/cf_interconnects`, options) as Core.APIPromise<{
        result: CfInterconnectMagicInterconnectsListInterconnectsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates multiple interconnects associated with an account. Use
   * `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes.
   */
  magicInterconnectsUpdateMultipleInterconnects(
    accountIdentifier: string,
    body: CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/cf_interconnects`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CfInterconnectUpdateResponse {
  modified?: boolean;

  modified_interconnect?: unknown;
}

export interface CfInterconnectGetResponse {
  interconnect?: unknown;
}

export interface CfInterconnectMagicInterconnectsListInterconnectsResponse {
  interconnects?: Array<CfInterconnectMagicInterconnectsListInterconnectsResponse.Interconnect>;
}

export namespace CfInterconnectMagicInterconnectsListInterconnectsResponse {
  export interface Interconnect {
    /**
     * Tunnel identifier tag.
     */
    id?: string;

    /**
     * The name of the interconnect. The name cannot share a name with other tunnels.
     */
    colo_name?: string;

    /**
     * The date and time the tunnel was created.
     */
    created_on?: string;

    /**
     * An optional description of the interconnect.
     */
    description?: string;

    /**
     * The configuration specific to GRE interconnects.
     */
    gre?: Interconnect.Gre;

    health_check?: Interconnect.HealthCheck;

    /**
     * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
     * of the tunnel. Select the subnet from the following private IP space:
     * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
     */
    interface_address?: string;

    /**
     * The date and time the tunnel was last modified.
     */
    modified_on?: string;

    /**
     * The Maximum Transmission Unit (MTU) in bytes for the interconnect. The minimum
     * value is 576.
     */
    mtu?: number;

    /**
     * The name of the interconnect. The name cannot share a name with other tunnels.
     */
    name?: string;
  }

  export namespace Interconnect {
    /**
     * The configuration specific to GRE interconnects.
     */
    export interface Gre {
      /**
       * The IP address assigned to the Cloudflare side of the GRE tunnel created as part
       * of the Interconnect.
       */
      cloudflare_endpoint?: string;
    }

    export interface HealthCheck {
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

export interface CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse {
  modified?: boolean;

  modified_interconnects?: Array<CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse.ModifiedInterconnect>;
}

export namespace CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse {
  export interface ModifiedInterconnect {
    /**
     * Tunnel identifier tag.
     */
    id?: string;

    /**
     * The name of the interconnect. The name cannot share a name with other tunnels.
     */
    colo_name?: string;

    /**
     * The date and time the tunnel was created.
     */
    created_on?: string;

    /**
     * An optional description of the interconnect.
     */
    description?: string;

    /**
     * The configuration specific to GRE interconnects.
     */
    gre?: ModifiedInterconnect.Gre;

    health_check?: ModifiedInterconnect.HealthCheck;

    /**
     * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
     * of the tunnel. Select the subnet from the following private IP space:
     * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
     */
    interface_address?: string;

    /**
     * The date and time the tunnel was last modified.
     */
    modified_on?: string;

    /**
     * The Maximum Transmission Unit (MTU) in bytes for the interconnect. The minimum
     * value is 576.
     */
    mtu?: number;

    /**
     * The name of the interconnect. The name cannot share a name with other tunnels.
     */
    name?: string;
  }

  export namespace ModifiedInterconnect {
    /**
     * The configuration specific to GRE interconnects.
     */
    export interface Gre {
      /**
       * The IP address assigned to the Cloudflare side of the GRE tunnel created as part
       * of the Interconnect.
       */
      cloudflare_endpoint?: string;
    }

    export interface HealthCheck {
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

export interface CfInterconnectUpdateParams {
  /**
   * An optional description of the interconnect.
   */
  description?: string;

  /**
   * The configuration specific to GRE interconnects.
   */
  gre?: CfInterconnectUpdateParams.Gre;

  health_check?: CfInterconnectUpdateParams.HealthCheck;

  /**
   * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
   * of the tunnel. Select the subnet from the following private IP space:
   * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
   */
  interface_address?: string;

  /**
   * The Maximum Transmission Unit (MTU) in bytes for the interconnect. The minimum
   * value is 576.
   */
  mtu?: number;
}

export namespace CfInterconnectUpdateParams {
  /**
   * The configuration specific to GRE interconnects.
   */
  export interface Gre {
    /**
     * The IP address assigned to the Cloudflare side of the GRE tunnel created as part
     * of the Interconnect.
     */
    cloudflare_endpoint?: string;
  }

  export interface HealthCheck {
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

export type CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsParams = unknown;

export namespace CfInterconnects {
  export import CfInterconnectUpdateResponse = CfInterconnectsAPI.CfInterconnectUpdateResponse;
  export import CfInterconnectGetResponse = CfInterconnectsAPI.CfInterconnectGetResponse;
  export import CfInterconnectMagicInterconnectsListInterconnectsResponse = CfInterconnectsAPI.CfInterconnectMagicInterconnectsListInterconnectsResponse;
  export import CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse = CfInterconnectsAPI.CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse;
  export import CfInterconnectUpdateParams = CfInterconnectsAPI.CfInterconnectUpdateParams;
  export import CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsParams = CfInterconnectsAPI.CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsParams;
}
