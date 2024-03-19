// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LansAPI from 'cloudflare/resources/magic-transit/sites/lans';

export class Lans extends APIResource {
  /**
   * Creates a new LAN. If the site is in high availability mode, static_addressing
   * is required along with secondary and virtual address.
   */
  create(
    siteId: string,
    params: LanCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/sites/${siteId}/lans`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LanCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific LAN.
   */
  update(
    siteId: string,
    lanId: string,
    params: LanUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LanUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists LANs associated with an account and site.
   */
  list(
    siteId: string,
    params: LanListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/sites/${siteId}/lans`, options) as Core.APIPromise<{
        result: LanListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific LAN.
   */
  delete(
    siteId: string,
    lanId: string,
    params: LanDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`,
        options,
      ) as Core.APIPromise<{ result: LanDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific LAN.
   */
  get(
    siteId: string,
    lanId: string,
    params: LanGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`,
        options,
      ) as Core.APIPromise<{ result: LanGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LanCreateResponse {
  lans?: Array<LanCreateResponse.Lan>;
}

export namespace LanCreateResponse {
  export interface Lan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: Lan.Nat;

    physport?: number;

    routed_subnets?: Array<Lan.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: Lan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Lan {
    export interface Nat {
      /**
       * A valid CIDR notation representing an IP range.
       */
      static_prefix?: string;
    }

    export interface RoutedSubnet {
      /**
       * A valid IPv4 address.
       */
      next_hop: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      prefix: string;

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DhcpRelay;

      dhcp_server?: StaticAddressing.DhcpServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DhcpRelay {
        /**
         * List of DHCP server IPs.
         */
        server_addresses?: Array<string>;
      }

      export interface DhcpServer {
        /**
         * A valid IPv4 address.
         */
        dhcp_pool_end?: string;

        /**
         * A valid IPv4 address.
         */
        dhcp_pool_start?: string;

        /**
         * A valid IPv4 address.
         */
        dns_server?: string;

        /**
         * Mapping of MAC addresses to IP addresses
         */
        reservations?: Record<string, string>;
      }
    }
  }
}

export interface LanUpdateResponse {
  lan?: LanUpdateResponse.Lan;
}

export namespace LanUpdateResponse {
  export interface Lan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: Lan.Nat;

    physport?: number;

    routed_subnets?: Array<Lan.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: Lan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Lan {
    export interface Nat {
      /**
       * A valid CIDR notation representing an IP range.
       */
      static_prefix?: string;
    }

    export interface RoutedSubnet {
      /**
       * A valid IPv4 address.
       */
      next_hop: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      prefix: string;

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DhcpRelay;

      dhcp_server?: StaticAddressing.DhcpServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DhcpRelay {
        /**
         * List of DHCP server IPs.
         */
        server_addresses?: Array<string>;
      }

      export interface DhcpServer {
        /**
         * A valid IPv4 address.
         */
        dhcp_pool_end?: string;

        /**
         * A valid IPv4 address.
         */
        dhcp_pool_start?: string;

        /**
         * A valid IPv4 address.
         */
        dns_server?: string;

        /**
         * Mapping of MAC addresses to IP addresses
         */
        reservations?: Record<string, string>;
      }
    }
  }
}

export interface LanListResponse {
  lans?: Array<LanListResponse.Lan>;
}

export namespace LanListResponse {
  export interface Lan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: Lan.Nat;

    physport?: number;

    routed_subnets?: Array<Lan.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: Lan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Lan {
    export interface Nat {
      /**
       * A valid CIDR notation representing an IP range.
       */
      static_prefix?: string;
    }

    export interface RoutedSubnet {
      /**
       * A valid IPv4 address.
       */
      next_hop: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      prefix: string;

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DhcpRelay;

      dhcp_server?: StaticAddressing.DhcpServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DhcpRelay {
        /**
         * List of DHCP server IPs.
         */
        server_addresses?: Array<string>;
      }

      export interface DhcpServer {
        /**
         * A valid IPv4 address.
         */
        dhcp_pool_end?: string;

        /**
         * A valid IPv4 address.
         */
        dhcp_pool_start?: string;

        /**
         * A valid IPv4 address.
         */
        dns_server?: string;

        /**
         * Mapping of MAC addresses to IP addresses
         */
        reservations?: Record<string, string>;
      }
    }
  }
}

export interface LanDeleteResponse {
  deleted?: boolean;

  deleted_lan?: LanDeleteResponse.DeletedLan;
}

export namespace LanDeleteResponse {
  export interface DeletedLan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: DeletedLan.Nat;

    physport?: number;

    routed_subnets?: Array<DeletedLan.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: DeletedLan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace DeletedLan {
    export interface Nat {
      /**
       * A valid CIDR notation representing an IP range.
       */
      static_prefix?: string;
    }

    export interface RoutedSubnet {
      /**
       * A valid IPv4 address.
       */
      next_hop: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      prefix: string;

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DhcpRelay;

      dhcp_server?: StaticAddressing.DhcpServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DhcpRelay {
        /**
         * List of DHCP server IPs.
         */
        server_addresses?: Array<string>;
      }

      export interface DhcpServer {
        /**
         * A valid IPv4 address.
         */
        dhcp_pool_end?: string;

        /**
         * A valid IPv4 address.
         */
        dhcp_pool_start?: string;

        /**
         * A valid IPv4 address.
         */
        dns_server?: string;

        /**
         * Mapping of MAC addresses to IP addresses
         */
        reservations?: Record<string, string>;
      }
    }
  }
}

export interface LanGetResponse {
  lan?: LanGetResponse.Lan;
}

export namespace LanGetResponse {
  export interface Lan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: Lan.Nat;

    physport?: number;

    routed_subnets?: Array<Lan.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: Lan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Lan {
    export interface Nat {
      /**
       * A valid CIDR notation representing an IP range.
       */
      static_prefix?: string;
    }

    export interface RoutedSubnet {
      /**
       * A valid IPv4 address.
       */
      next_hop: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      prefix: string;

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DhcpRelay;

      dhcp_server?: StaticAddressing.DhcpServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DhcpRelay {
        /**
         * List of DHCP server IPs.
         */
        server_addresses?: Array<string>;
      }

      export interface DhcpServer {
        /**
         * A valid IPv4 address.
         */
        dhcp_pool_end?: string;

        /**
         * A valid IPv4 address.
         */
        dhcp_pool_start?: string;

        /**
         * A valid IPv4 address.
         */
        dns_server?: string;

        /**
         * Mapping of MAC addresses to IP addresses
         */
        reservations?: Record<string, string>;
      }
    }
  }
}

export interface LanCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  lan?: LanCreateParams.Lan;
}

export namespace LanCreateParams {
  export interface Lan {
    physport: number;

    /**
     * VLAN port number.
     */
    vlan_tag: number;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: Lan.Nat;

    routed_subnets?: Array<Lan.RoutedSubnet>;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: Lan.StaticAddressing;
  }

  export namespace Lan {
    export interface Nat {
      /**
       * A valid CIDR notation representing an IP range.
       */
      static_prefix?: string;
    }

    export interface RoutedSubnet {
      /**
       * A valid IPv4 address.
       */
      next_hop: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      prefix: string;

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DhcpRelay;

      dhcp_server?: StaticAddressing.DhcpServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DhcpRelay {
        /**
         * List of DHCP server IPs.
         */
        server_addresses?: Array<string>;
      }

      export interface DhcpServer {
        /**
         * A valid IPv4 address.
         */
        dhcp_pool_end?: string;

        /**
         * A valid IPv4 address.
         */
        dhcp_pool_start?: string;

        /**
         * A valid IPv4 address.
         */
        dns_server?: string;

        /**
         * Mapping of MAC addresses to IP addresses
         */
        reservations?: Record<string, string>;
      }
    }
  }
}

export interface LanUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  lan?: LanUpdateParams.Lan;
}

export namespace LanUpdateParams {
  export interface Lan {
    description?: string;

    nat?: Lan.Nat;

    physport?: number;

    routed_subnets?: Array<Lan.RoutedSubnet>;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: Lan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Lan {
    export interface Nat {
      /**
       * A valid CIDR notation representing an IP range.
       */
      static_prefix?: string;
    }

    export interface RoutedSubnet {
      /**
       * A valid IPv4 address.
       */
      next_hop: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      prefix: string;

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DhcpRelay;

      dhcp_server?: StaticAddressing.DhcpServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DhcpRelay {
        /**
         * List of DHCP server IPs.
         */
        server_addresses?: Array<string>;
      }

      export interface DhcpServer {
        /**
         * A valid IPv4 address.
         */
        dhcp_pool_end?: string;

        /**
         * A valid IPv4 address.
         */
        dhcp_pool_start?: string;

        /**
         * A valid IPv4 address.
         */
        dns_server?: string;

        /**
         * Mapping of MAC addresses to IP addresses
         */
        reservations?: Record<string, string>;
      }
    }
  }
}

export interface LanListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface LanDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface LanGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Lans {
  export import LanCreateResponse = LansAPI.LanCreateResponse;
  export import LanUpdateResponse = LansAPI.LanUpdateResponse;
  export import LanListResponse = LansAPI.LanListResponse;
  export import LanDeleteResponse = LansAPI.LanDeleteResponse;
  export import LanGetResponse = LansAPI.LanGetResponse;
  export import LanCreateParams = LansAPI.LanCreateParams;
  export import LanUpdateParams = LansAPI.LanUpdateParams;
  export import LanListParams = LansAPI.LanListParams;
  export import LanDeleteParams = LansAPI.LanDeleteParams;
  export import LanGetParams = LansAPI.LanGetParams;
}
