// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CfInterconnectsAPI from 'cloudflare/resources/magics/cf-interconnects';

export class CfInterconnects extends APIResource {
  /**
   * Lists interconnects associated with an account.
   */
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectListResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/magic/cf_interconnects`, options) as Core.APIPromise<{
        result: CfInterconnectListResponse;
      }>
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
   * Updates a specific interconnect associated with an account. Use
   * `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes.
   */
  replace(
    accountIdentifier: string,
    tunnelIdentifier: string,
    body: CfInterconnectReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/cf_interconnects/${tunnelIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CfInterconnectReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CfInterconnectListResponse {
  interconnects?: Array<CfInterconnectListResponse.Interconnect>;
}

export namespace CfInterconnectListResponse {
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

export interface CfInterconnectGetResponse {
  interconnect?: unknown;
}

export interface CfInterconnectReplaceResponse {
  modified?: boolean;

  modified_interconnect?: unknown;
}

export interface CfInterconnectReplaceParams {
  /**
   * An optional description of the interconnect.
   */
  description?: string;

  /**
   * The configuration specific to GRE interconnects.
   */
  gre?: CfInterconnectReplaceParams.Gre;

  health_check?: CfInterconnectReplaceParams.HealthCheck;

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

export namespace CfInterconnectReplaceParams {
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

export namespace CfInterconnects {
  export import CfInterconnectListResponse = CfInterconnectsAPI.CfInterconnectListResponse;
  export import CfInterconnectGetResponse = CfInterconnectsAPI.CfInterconnectGetResponse;
  export import CfInterconnectReplaceResponse = CfInterconnectsAPI.CfInterconnectReplaceResponse;
  export import CfInterconnectReplaceParams = CfInterconnectsAPI.CfInterconnectReplaceParams;
}
