// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AddressMapsAPI from 'cloudflare/resources/addresses/address-maps/address-maps';
import * as AccountsAPI from 'cloudflare/resources/addresses/address-maps/accounts';
import * as IPsAPI from 'cloudflare/resources/addresses/address-maps/ips';
import * as ZonesAPI from 'cloudflare/resources/addresses/address-maps/zones';

export class AddressMaps extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);

  /**
   * Create a new address map under the account.
   */
  create(
    accountId: string,
    body: AddressMapCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/addressing/address_maps`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressMapCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify properties of an address map owned by the account.
   */
  update(
    accountId: string,
    addressMapId: string,
    body: AddressMapUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapUpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/addressing/address_maps/${addressMapId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressMapUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all address maps owned by the account.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<AddressMapListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/addressing/address_maps`, options) as Core.APIPromise<{
        result: AddressMapListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a particular address map owned by the account. An Address Map must be
   * disabled before it can be deleted.
   */
  delete(
    accountId: string,
    addressMapId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}`,
        options,
      ) as Core.APIPromise<{ result: AddressMapDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show a particular address map owned by the account.
   */
  get(
    accountId: string,
    addressMapId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}`,
        options,
      ) as Core.APIPromise<{ result: AddressMapGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AddressMapCreateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * If set to false, then the Address Map cannot be deleted via API. This is true
   * for Cloudflare-managed maps.
   */
  can_delete?: boolean;

  /**
   * If set to false, then the IPs on the Address Map cannot be modified via the API.
   * This is true for Cloudflare-managed maps.
   */
  can_modify_ips?: boolean;

  created_at?: string;

  /**
   * If you have legacy TLS clients which do not send the TLS server name indicator,
   * then you can specify one default SNI on the map. If Cloudflare receives a TLS
   * handshake from a client without an SNI, it will respond with the default SNI on
   * those IPs. The default SNI can be any valid zone or subdomain owned by the
   * account.
   */
  default_sni?: string | null;

  /**
   * An optional description field which may be used to describe the types of IPs or
   * zones on the map.
   */
  description?: string | null;

  /**
   * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
   * with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;

  /**
   * The set of IPs on the Address Map.
   */
  ips?: Array<AddressMapCreateResponse.IP>;

  /**
   * Zones and Accounts which will be assigned IPs on this Address Map. A zone
   * membership will take priority over an account membership.
   */
  memberships?: Array<AddressMapCreateResponse.Membership>;

  modified_at?: string;
}

export namespace AddressMapCreateResponse {
  export interface IP {
    created_at?: string;

    /**
     * An IPv4 or IPv6 address.
     */
    ip?: string;
  }

  export interface Membership {
    /**
     * Controls whether the membership can be deleted via the API or not.
     */
    can_delete?: boolean;

    created_at?: string;

    /**
     * Identifier
     */
    identifier?: string;

    /**
     * The type of the membership.
     */
    kind?: 'zone' | 'account';
  }
}

export interface AddressMapUpdateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * If set to false, then the Address Map cannot be deleted via API. This is true
   * for Cloudflare-managed maps.
   */
  can_delete?: boolean;

  /**
   * If set to false, then the IPs on the Address Map cannot be modified via the API.
   * This is true for Cloudflare-managed maps.
   */
  can_modify_ips?: boolean;

  created_at?: string;

  /**
   * If you have legacy TLS clients which do not send the TLS server name indicator,
   * then you can specify one default SNI on the map. If Cloudflare receives a TLS
   * handshake from a client without an SNI, it will respond with the default SNI on
   * those IPs. The default SNI can be any valid zone or subdomain owned by the
   * account.
   */
  default_sni?: string | null;

  /**
   * An optional description field which may be used to describe the types of IPs or
   * zones on the map.
   */
  description?: string | null;

  /**
   * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
   * with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;

  modified_at?: string;
}

export type AddressMapListResponse = Array<AddressMapListResponse.AddressMapListResponseItem>;

export namespace AddressMapListResponse {
  export interface AddressMapListResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * If set to false, then the Address Map cannot be deleted via API. This is true
     * for Cloudflare-managed maps.
     */
    can_delete?: boolean;

    /**
     * If set to false, then the IPs on the Address Map cannot be modified via the API.
     * This is true for Cloudflare-managed maps.
     */
    can_modify_ips?: boolean;

    created_at?: string;

    /**
     * If you have legacy TLS clients which do not send the TLS server name indicator,
     * then you can specify one default SNI on the map. If Cloudflare receives a TLS
     * handshake from a client without an SNI, it will respond with the default SNI on
     * those IPs. The default SNI can be any valid zone or subdomain owned by the
     * account.
     */
    default_sni?: string | null;

    /**
     * An optional description field which may be used to describe the types of IPs or
     * zones on the map.
     */
    description?: string | null;

    /**
     * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
     * with IP addresses on an Address Map until the map is enabled.
     */
    enabled?: boolean | null;

    modified_at?: string;
  }
}

export type AddressMapDeleteResponse = unknown | Array<unknown> | string;

export interface AddressMapGetResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * If set to false, then the Address Map cannot be deleted via API. This is true
   * for Cloudflare-managed maps.
   */
  can_delete?: boolean;

  /**
   * If set to false, then the IPs on the Address Map cannot be modified via the API.
   * This is true for Cloudflare-managed maps.
   */
  can_modify_ips?: boolean;

  created_at?: string;

  /**
   * If you have legacy TLS clients which do not send the TLS server name indicator,
   * then you can specify one default SNI on the map. If Cloudflare receives a TLS
   * handshake from a client without an SNI, it will respond with the default SNI on
   * those IPs. The default SNI can be any valid zone or subdomain owned by the
   * account.
   */
  default_sni?: string | null;

  /**
   * An optional description field which may be used to describe the types of IPs or
   * zones on the map.
   */
  description?: string | null;

  /**
   * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
   * with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;

  /**
   * The set of IPs on the Address Map.
   */
  ips?: Array<AddressMapGetResponse.IP>;

  /**
   * Zones and Accounts which will be assigned IPs on this Address Map. A zone
   * membership will take priority over an account membership.
   */
  memberships?: Array<AddressMapGetResponse.Membership>;

  modified_at?: string;
}

export namespace AddressMapGetResponse {
  export interface IP {
    created_at?: string;

    /**
     * An IPv4 or IPv6 address.
     */
    ip?: string;
  }

  export interface Membership {
    /**
     * Controls whether the membership can be deleted via the API or not.
     */
    can_delete?: boolean;

    created_at?: string;

    /**
     * Identifier
     */
    identifier?: string;

    /**
     * The type of the membership.
     */
    kind?: 'zone' | 'account';
  }
}

export interface AddressMapCreateParams {
  /**
   * An optional description field which may be used to describe the types of IPs or
   * zones on the map.
   */
  description?: string | null;

  /**
   * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
   * with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;
}

export interface AddressMapUpdateParams {
  /**
   * If you have legacy TLS clients which do not send the TLS server name indicator,
   * then you can specify one default SNI on the map. If Cloudflare receives a TLS
   * handshake from a client without an SNI, it will respond with the default SNI on
   * those IPs. The default SNI can be any valid zone or subdomain owned by the
   * account.
   */
  default_sni?: string | null;

  /**
   * An optional description field which may be used to describe the types of IPs or
   * zones on the map.
   */
  description?: string | null;

  /**
   * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
   * with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;
}

export namespace AddressMaps {
  export import AddressMapCreateResponse = AddressMapsAPI.AddressMapCreateResponse;
  export import AddressMapUpdateResponse = AddressMapsAPI.AddressMapUpdateResponse;
  export import AddressMapListResponse = AddressMapsAPI.AddressMapListResponse;
  export import AddressMapDeleteResponse = AddressMapsAPI.AddressMapDeleteResponse;
  export import AddressMapGetResponse = AddressMapsAPI.AddressMapGetResponse;
  export import AddressMapCreateParams = AddressMapsAPI.AddressMapCreateParams;
  export import AddressMapUpdateParams = AddressMapsAPI.AddressMapUpdateParams;
  export import Accounts = AccountsAPI.Accounts;
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountDeleteResponse = AccountsAPI.AccountDeleteResponse;
  export import IPs = IPsAPI.IPs;
  export import IPUpdateResponse = IPsAPI.IPUpdateResponse;
  export import IPDeleteResponse = IPsAPI.IPDeleteResponse;
  export import Zones = ZonesAPI.Zones;
  export import ZoneUpdateResponse = ZonesAPI.ZoneUpdateResponse;
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
}
