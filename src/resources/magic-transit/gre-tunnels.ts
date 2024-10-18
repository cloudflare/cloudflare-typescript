// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GRETunnelsAPI from './gre-tunnels';
import * as MagicTransitAPI from './magic-transit';

export class GRETunnels extends APIResource {
  /**
   * Creates new GRE tunnels. Use `?validate_only=true` as an optional query
   * parameter to only run validation without persisting changes.
   */
  create(
    params: GRETunnelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GRETunnelCreateResponse> {
    const { account_id, body, 'x-magic-new-hc-target': xMagicNewHcTarget } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/gre_tunnels`, {
        body: body,
        ...options,
        headers: {
          ...(xMagicNewHcTarget?.toString() != null ?
            { 'x-magic-new-hc-target': xMagicNewHcTarget?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: GRETunnelCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a specific GRE tunnel. Use `?validate_only=true` as an optional query
   * parameter to only run validation without persisting changes.
   */
  update(
    greTunnelId: string,
    params: GRETunnelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GRETunnelUpdateResponse> {
    const { account_id, 'x-magic-new-hc-target': xMagicNewHcTarget, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/gre_tunnels/${greTunnelId}`, {
        body,
        ...options,
        headers: {
          ...(xMagicNewHcTarget?.toString() != null ?
            { 'x-magic-new-hc-target': xMagicNewHcTarget?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: GRETunnelUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists GRE tunnels associated with an account.
   */
  list(params: GRETunnelListParams, options?: Core.RequestOptions): Core.APIPromise<GRETunnelListResponse> {
    const { account_id, 'x-magic-new-hc-target': xMagicNewHcTarget } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/gre_tunnels`, {
        ...options,
        headers: {
          ...(xMagicNewHcTarget?.toString() != null ?
            { 'x-magic-new-hc-target': xMagicNewHcTarget?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: GRETunnelListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disables and removes a specific static GRE tunnel. Use `?validate_only=true` as
   * an optional query parameter to only run validation without persisting changes.
   */
  delete(
    greTunnelId: string,
    params: GRETunnelDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GRETunnelDeleteResponse> {
    const { account_id, 'x-magic-new-hc-target': xMagicNewHcTarget } = params;
    return (
      this._client.delete(`/accounts/${account_id}/magic/gre_tunnels/${greTunnelId}`, {
        ...options,
        headers: {
          ...(xMagicNewHcTarget?.toString() != null ?
            { 'x-magic-new-hc-target': xMagicNewHcTarget?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: GRETunnelDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists informtion for a specific GRE tunnel.
   */
  get(
    greTunnelId: string,
    params: GRETunnelGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GRETunnelGetResponse> {
    const { account_id, 'x-magic-new-hc-target': xMagicNewHcTarget } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/gre_tunnels/${greTunnelId}`, {
        ...options,
        headers: {
          ...(xMagicNewHcTarget?.toString() != null ?
            { 'x-magic-new-hc-target': xMagicNewHcTarget?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: GRETunnelGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GRETunnelCreateResponse {
  gre_tunnels?: Array<GRETunnelCreateResponse.GRETunnel>;
}

export namespace GRETunnelCreateResponse {
  export interface GRETunnel {
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

    health_check?: GRETunnel.HealthCheck;

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

  export namespace GRETunnel {
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
      type?: 'reply' | 'request';
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

export interface GRETunnelUpdateResponse {
  modified?: boolean;

  modified_gre_tunnel?: GRETunnelUpdateResponse.ModifiedGRETunnel;
}

export namespace GRETunnelUpdateResponse {
  export interface ModifiedGRETunnel {
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

    health_check?: ModifiedGRETunnel.HealthCheck;

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

  export namespace ModifiedGRETunnel {
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
      type?: 'reply' | 'request';
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

export interface GRETunnelListResponse {
  gre_tunnels?: Array<GRETunnelListResponse.GRETunnel>;
}

export namespace GRETunnelListResponse {
  export interface GRETunnel {
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

    health_check?: GRETunnel.HealthCheck;

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

  export namespace GRETunnel {
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
      type?: 'reply' | 'request';
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

export interface GRETunnelDeleteResponse {
  deleted?: boolean;

  deleted_gre_tunnel?: GRETunnelDeleteResponse.DeletedGRETunnel;
}

export namespace GRETunnelDeleteResponse {
  export interface DeletedGRETunnel {
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

    health_check?: DeletedGRETunnel.HealthCheck;

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

  export namespace DeletedGRETunnel {
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
      type?: 'reply' | 'request';
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

export interface GRETunnelGetResponse {
  gre_tunnel?: GRETunnelGetResponse.GRETunnel;
}

export namespace GRETunnelGetResponse {
  export interface GRETunnel {
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

    health_check?: GRETunnel.HealthCheck;

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

  export namespace GRETunnel {
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
      type?: 'reply' | 'request';
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

export interface GRETunnelCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;

  /**
   * Header param: If true, the health check target in the request and response
   * bodies will be presented using the new object format. Defaults to false.
   */
  'x-magic-new-hc-target'?: boolean;
}

export interface GRETunnelUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The IP address assigned to the Cloudflare side of the GRE tunnel.
   */
  cloudflare_gre_endpoint: string;

  /**
   * Body param: The IP address assigned to the customer side of the GRE tunnel.
   */
  customer_gre_endpoint: string;

  /**
   * Body param: A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for
   * each side of the tunnel. Select the subnet from the following private IP space:
   * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
   */
  interface_address: string;

  /**
   * Body param: The name of the tunnel. The name cannot contain spaces or special
   * characters, must be 15 characters or less, and cannot share a name with another
   * GRE tunnel.
   */
  name: string;

  /**
   * Body param: An optional description of the GRE tunnel.
   */
  description?: string;

  /**
   * Body param:
   */
  health_check?: GRETunnelUpdateParams.HealthCheck;

  /**
   * Body param: Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The
   * minimum value is 576.
   */
  mtu?: number;

  /**
   * Body param: Time To Live (TTL) in number of hops of the GRE tunnel.
   */
  ttl?: number;

  /**
   * Header param: If true, the health check target in the request and response
   * bodies will be presented using the new object format. Defaults to false.
   */
  'x-magic-new-hc-target'?: boolean;
}

export namespace GRETunnelUpdateParams {
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
    type?: 'reply' | 'request';
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

export interface GRETunnelListParams {
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

export interface GRETunnelDeleteParams {
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

export interface GRETunnelGetParams {
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

export namespace GRETunnels {
  export import GRETunnelCreateResponse = GRETunnelsAPI.GRETunnelCreateResponse;
  export import GRETunnelUpdateResponse = GRETunnelsAPI.GRETunnelUpdateResponse;
  export import GRETunnelListResponse = GRETunnelsAPI.GRETunnelListResponse;
  export import GRETunnelDeleteResponse = GRETunnelsAPI.GRETunnelDeleteResponse;
  export import GRETunnelGetResponse = GRETunnelsAPI.GRETunnelGetResponse;
  export import GRETunnelCreateParams = GRETunnelsAPI.GRETunnelCreateParams;
  export import GRETunnelUpdateParams = GRETunnelsAPI.GRETunnelUpdateParams;
  export import GRETunnelListParams = GRETunnelsAPI.GRETunnelListParams;
  export import GRETunnelDeleteParams = GRETunnelsAPI.GRETunnelDeleteParams;
  export import GRETunnelGetParams = GRETunnelsAPI.GRETunnelGetParams;
}
