// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as CfInterconnectsAPI from './cf-interconnects';
import * as MagicTransitAPI from './magic-transit';

export class CfInterconnects extends APIResource {
  /**
   * Lists interconnects associated with an account.
   */
  list(
    params: CfInterconnectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/cf_interconnects`, options) as Core.APIPromise<{
        result: CfInterconnectListResponse;
      }>
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
    gre?: Interconnect.GRE;

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
    export interface GRE {
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

export interface CfInterconnectListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace CfInterconnects {
  export import CfInterconnectListResponse = CfInterconnectsAPI.CfInterconnectListResponse;
  export import CfInterconnectListParams = CfInterconnectsAPI.CfInterconnectListParams;
}
