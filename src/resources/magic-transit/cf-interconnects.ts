// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CfInterconnectsAPI from './cf-interconnects';
import * as MagicTransitAPI from './magic-transit';

export class CfInterconnects extends APIResource {
  /**
   * Updates a specific interconnect associated with an account. Use
   * `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes.
   */
  update(
    cfInterconnectId: string,
    params: CfInterconnectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectUpdateResponse> {
    const { account_id, 'x-magic-new-hc-target': xMagicNewHcTarget, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/cf_interconnects/${cfInterconnectId}`, {
        body,
        ...options,
        headers: {
          ...(xMagicNewHcTarget?.toString() != null ?
            { 'x-magic-new-hc-target': xMagicNewHcTarget?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: CfInterconnectUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists interconnects associated with an account.
   */
  list(
    params: CfInterconnectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectListResponse> {
    const { account_id, 'x-magic-new-hc-target': xMagicNewHcTarget } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/cf_interconnects`, {
        ...options,
        headers: {
          ...(xMagicNewHcTarget?.toString() != null ?
            { 'x-magic-new-hc-target': xMagicNewHcTarget?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: CfInterconnectListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists details for a specific interconnect.
   */
  get(
    cfInterconnectId: string,
    params: CfInterconnectGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfInterconnectGetResponse> {
    const { account_id, 'x-magic-new-hc-target': xMagicNewHcTarget } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/cf_interconnects/${cfInterconnectId}`, {
        ...options,
        headers: {
          ...(xMagicNewHcTarget?.toString() != null ?
            { 'x-magic-new-hc-target': xMagicNewHcTarget?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: CfInterconnectGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CfInterconnectUpdateResponse {
  modified?: boolean;

  modified_interconnect?: CfInterconnectUpdateResponse.ModifiedInterconnect;
}

export namespace CfInterconnectUpdateResponse {
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
    gre?: ModifiedInterconnect.GRE;

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
       * to this address. This field defaults to `customer_gre_endpoint address`. This
       * field is ignored for bidirectional healthchecks as the interface_address (not
       * assigned to the Cloudflare side of the tunnel) is used as the target. Must be in
       * object form if the x-magic-new-hc-target header is set to true and string form
       * if x-magic-new-hc-target is absent or set to false.
       */
      target?: HealthCheck.MagicHealthCheckTarget | string;

      /**
       * The type of healthcheck to run, reply or request. The default value is `reply`.
       */
      type?: MagicTransitAPI.HealthCheckType;
    }

    export namespace HealthCheck {
      /**
       * The destination address in a request type health check. After the healthcheck is
       * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
       * to this address. This field defaults to `customer_gre_endpoint address`. This
       * field is ignored for bidirectional healthchecks as the interface_address (not
       * assigned to the Cloudflare side of the tunnel) is used as the target.
       */
      export interface MagicHealthCheckTarget {
        /**
         * The effective health check target. If 'saved' is empty, then this field will be
         * populated with the calculated default value on GET requests. Ignored in POST,
         * PUT, and PATCH requests.
         */
        effective?: string;

        /**
         * The saved health check target. Setting the value to the empty string indicates
         * that the calculated default value will be used.
         */
        saved?: string;
      }
    }
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
       * to this address. This field defaults to `customer_gre_endpoint address`. This
       * field is ignored for bidirectional healthchecks as the interface_address (not
       * assigned to the Cloudflare side of the tunnel) is used as the target. Must be in
       * object form if the x-magic-new-hc-target header is set to true and string form
       * if x-magic-new-hc-target is absent or set to false.
       */
      target?: HealthCheck.MagicHealthCheckTarget | string;

      /**
       * The type of healthcheck to run, reply or request. The default value is `reply`.
       */
      type?: MagicTransitAPI.HealthCheckType;
    }

    export namespace HealthCheck {
      /**
       * The destination address in a request type health check. After the healthcheck is
       * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
       * to this address. This field defaults to `customer_gre_endpoint address`. This
       * field is ignored for bidirectional healthchecks as the interface_address (not
       * assigned to the Cloudflare side of the tunnel) is used as the target.
       */
      export interface MagicHealthCheckTarget {
        /**
         * The effective health check target. If 'saved' is empty, then this field will be
         * populated with the calculated default value on GET requests. Ignored in POST,
         * PUT, and PATCH requests.
         */
        effective?: string;

        /**
         * The saved health check target. Setting the value to the empty string indicates
         * that the calculated default value will be used.
         */
        saved?: string;
      }
    }
  }
}

export interface CfInterconnectGetResponse {
  interconnect?: CfInterconnectGetResponse.Interconnect;
}

export namespace CfInterconnectGetResponse {
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
       * to this address. This field defaults to `customer_gre_endpoint address`. This
       * field is ignored for bidirectional healthchecks as the interface_address (not
       * assigned to the Cloudflare side of the tunnel) is used as the target. Must be in
       * object form if the x-magic-new-hc-target header is set to true and string form
       * if x-magic-new-hc-target is absent or set to false.
       */
      target?: HealthCheck.MagicHealthCheckTarget | string;

      /**
       * The type of healthcheck to run, reply or request. The default value is `reply`.
       */
      type?: MagicTransitAPI.HealthCheckType;
    }

    export namespace HealthCheck {
      /**
       * The destination address in a request type health check. After the healthcheck is
       * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
       * to this address. This field defaults to `customer_gre_endpoint address`. This
       * field is ignored for bidirectional healthchecks as the interface_address (not
       * assigned to the Cloudflare side of the tunnel) is used as the target.
       */
      export interface MagicHealthCheckTarget {
        /**
         * The effective health check target. If 'saved' is empty, then this field will be
         * populated with the calculated default value on GET requests. Ignored in POST,
         * PUT, and PATCH requests.
         */
        effective?: string;

        /**
         * The saved health check target. Setting the value to the empty string indicates
         * that the calculated default value will be used.
         */
        saved?: string;
      }
    }
  }
}

export interface CfInterconnectUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: An optional description of the interconnect.
   */
  description?: string;

  /**
   * Body param: The configuration specific to GRE interconnects.
   */
  gre?: CfInterconnectUpdateParams.GRE;

  /**
   * Body param:
   */
  health_check?: CfInterconnectUpdateParams.HealthCheck;

  /**
   * Body param: A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for
   * each side of the tunnel. Select the subnet from the following private IP space:
   * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
   */
  interface_address?: string;

  /**
   * Body param: The Maximum Transmission Unit (MTU) in bytes for the interconnect.
   * The minimum value is 576.
   */
  mtu?: number;

  /**
   * Header param: If true, the health check target in the request and response
   * bodies will be presented using the new object format. Defaults to false.
   */
  'x-magic-new-hc-target'?: boolean;
}

export namespace CfInterconnectUpdateParams {
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
    rate?: MagicTransitAPI.HealthCheckRateParam;

    /**
     * The destination address in a request type health check. After the healthcheck is
     * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
     * to this address. This field defaults to `customer_gre_endpoint address`. This
     * field is ignored for bidirectional healthchecks as the interface_address (not
     * assigned to the Cloudflare side of the tunnel) is used as the target. Must be in
     * object form if the x-magic-new-hc-target header is set to true and string form
     * if x-magic-new-hc-target is absent or set to false.
     */
    target?: HealthCheck.MagicHealthCheckTarget | string;

    /**
     * The type of healthcheck to run, reply or request. The default value is `reply`.
     */
    type?: MagicTransitAPI.HealthCheckTypeParam;
  }

  export namespace HealthCheck {
    /**
     * The destination address in a request type health check. After the healthcheck is
     * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
     * to this address. This field defaults to `customer_gre_endpoint address`. This
     * field is ignored for bidirectional healthchecks as the interface_address (not
     * assigned to the Cloudflare side of the tunnel) is used as the target.
     */
    export interface MagicHealthCheckTarget {
      /**
       * The saved health check target. Setting the value to the empty string indicates
       * that the calculated default value will be used.
       */
      saved?: string;
    }
  }
}

export interface CfInterconnectListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Header param: If true, the health check target in the response body will be
   * presented using the new object format. Defaults to false.
   */
  'x-magic-new-hc-target'?: boolean;
}

export interface CfInterconnectGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Header param: If true, the health check target in the response body will be
   * presented using the new object format. Defaults to false.
   */
  'x-magic-new-hc-target'?: boolean;
}

export namespace CfInterconnects {
  export import CfInterconnectUpdateResponse = CfInterconnectsAPI.CfInterconnectUpdateResponse;
  export import CfInterconnectListResponse = CfInterconnectsAPI.CfInterconnectListResponse;
  export import CfInterconnectGetResponse = CfInterconnectsAPI.CfInterconnectGetResponse;
  export import CfInterconnectUpdateParams = CfInterconnectsAPI.CfInterconnectUpdateParams;
  export import CfInterconnectListParams = CfInterconnectsAPI.CfInterconnectListParams;
  export import CfInterconnectGetParams = CfInterconnectsAPI.CfInterconnectGetParams;
}
