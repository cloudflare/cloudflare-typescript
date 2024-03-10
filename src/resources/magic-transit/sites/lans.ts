// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LansAPI from 'cloudflare/resources/magic-transit/sites/lans';

export class Lans extends APIResource {
  /**
   * Creates a new LAN. If the site is in high availability mode, static_addressing
   * is required along with secondary and virtual address.
   */
  create(
    accountIdentifier: string,
    siteIdentifier: string,
    body: LanCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/lans`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LanCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific LAN.
   */
  update(
    accountIdentifier: string,
    siteIdentifier: string,
    lanIdentifier: string,
    body: LanUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/lans/${lanIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LanUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists LANs associated with an account and site.
   */
  list(
    accountIdentifier: string,
    siteIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanListResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/lans`,
        options,
      ) as Core.APIPromise<{ result: LanListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific LAN.
   */
  delete(
    accountIdentifier: string,
    siteIdentifier: string,
    lanIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/lans/${lanIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: LanDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific LAN.
   */
  get(
    accountIdentifier: string,
    siteIdentifier: string,
    lanIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/lans/${lanIdentifier}`,
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

export namespace Lans {
  export import LanCreateResponse = LansAPI.LanCreateResponse;
  export import LanUpdateResponse = LansAPI.LanUpdateResponse;
  export import LanListResponse = LansAPI.LanListResponse;
  export import LanDeleteResponse = LansAPI.LanDeleteResponse;
  export import LanGetResponse = LansAPI.LanGetResponse;
  export import LanCreateParams = LansAPI.LanCreateParams;
  export import LanUpdateParams = LansAPI.LanUpdateParams;
}
