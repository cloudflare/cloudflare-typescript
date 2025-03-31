// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AddressMapsAPI from './address-maps';
import * as Shared from '../../shared';
import * as AccountsAPI from './accounts';
import {
  AccountDeleteParams,
  AccountDeleteResponse,
  AccountUpdateParams,
  AccountUpdateResponse,
  Accounts,
} from './accounts';
import * as IPsAPI from './ips';
import { IPDeleteParams, IPDeleteResponse, IPUpdateParams, IPUpdateResponse, IPs } from './ips';
import * as ZonesAPI from './zones';
import { ZoneDeleteParams, ZoneDeleteResponse, ZoneUpdateParams, ZoneUpdateResponse, Zones } from './zones';
import { SinglePage } from '../../../pagination';

export class AddressMaps extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);

  /**
   * Create a new address map under the account.
   */
  create(
    params: AddressMapCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/addressing/address_maps`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressMapCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all address maps owned by the account.
   */
  list(
    params: AddressMapListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressMapsSinglePage, AddressMap> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/addressing/address_maps`,
      AddressMapsSinglePage,
      options,
    );
  }

  /**
   * Delete a particular address map owned by the account. An Address Map must be
   * disabled before it can be deleted.
   */
  delete(
    addressMapId: string,
    params: AddressMapDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/addressing/address_maps/${addressMapId}`, options);
  }

  /**
   * Modify properties of an address map owned by the account.
   */
  edit(
    addressMapId: string,
    params: AddressMapEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMap> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/addressing/address_maps/${addressMapId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressMap }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show a particular address map owned by the account.
   */
  get(
    addressMapId: string,
    params: AddressMapGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}`,
        options,
      ) as Core.APIPromise<{ result: AddressMapGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AddressMapsSinglePage extends SinglePage<AddressMap> {}

export interface AddressMap {
  /**
   * Identifier of an Address Map.
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

/**
 * The type of the membership.
 */
export type Kind = 'zone' | 'account';

/**
 * The type of the membership.
 */
export type KindParam = 'zone' | 'account';

export interface AddressMapCreateResponse {
  /**
   * Identifier of an Address Map.
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
     * The identifier for the membership (eg. a zone or account tag).
     */
    identifier?: string;

    /**
     * The type of the membership.
     */
    kind?: AddressMapsAPI.Kind;
  }
}

export interface AddressMapDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: AddressMapDeleteResponse.ResultInfo;
}

export namespace AddressMapDeleteResponse {
  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface AddressMapGetResponse {
  /**
   * Identifier of an Address Map.
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
     * The identifier for the membership (eg. a zone or account tag).
     */
    identifier?: string;

    /**
     * The type of the membership.
     */
    kind?: AddressMapsAPI.Kind;
  }
}

export interface AddressMapCreateParams {
  /**
   * Path param: Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Body param: An optional description field which may be used to describe the
   * types of IPs or zones on the map.
   */
  description?: string | null;

  /**
   * Body param: Whether the Address Map is enabled or not. Cloudflare's DNS will not
   * respond with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;

  /**
   * Body param:
   */
  ips?: Array<string>;

  /**
   * Body param: Zones and Accounts which will be assigned IPs on this Address Map. A
   * zone membership will take priority over an account membership.
   */
  memberships?: Array<AddressMapCreateParams.Membership>;
}

export namespace AddressMapCreateParams {
  export interface Membership {
    /**
     * The identifier for the membership (eg. a zone or account tag).
     */
    identifier?: string;

    /**
     * The type of the membership.
     */
    kind?: AddressMapsAPI.KindParam;
  }
}

export interface AddressMapListParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export interface AddressMapDeleteParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export interface AddressMapEditParams {
  /**
   * Path param: Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Body param: If you have legacy TLS clients which do not send the TLS server name
   * indicator, then you can specify one default SNI on the map. If Cloudflare
   * receives a TLS handshake from a client without an SNI, it will respond with the
   * default SNI on those IPs. The default SNI can be any valid zone or subdomain
   * owned by the account.
   */
  default_sni?: string | null;

  /**
   * Body param: An optional description field which may be used to describe the
   * types of IPs or zones on the map.
   */
  description?: string | null;

  /**
   * Body param: Whether the Address Map is enabled or not. Cloudflare's DNS will not
   * respond with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;
}

export interface AddressMapGetParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

AddressMaps.AddressMapsSinglePage = AddressMapsSinglePage;
AddressMaps.Accounts = Accounts;
AddressMaps.IPs = IPs;
AddressMaps.Zones = Zones;

export declare namespace AddressMaps {
  export {
    type AddressMap as AddressMap,
    type Kind as Kind,
    type AddressMapCreateResponse as AddressMapCreateResponse,
    type AddressMapDeleteResponse as AddressMapDeleteResponse,
    type AddressMapGetResponse as AddressMapGetResponse,
    AddressMapsSinglePage as AddressMapsSinglePage,
    type AddressMapCreateParams as AddressMapCreateParams,
    type AddressMapListParams as AddressMapListParams,
    type AddressMapDeleteParams as AddressMapDeleteParams,
    type AddressMapEditParams as AddressMapEditParams,
    type AddressMapGetParams as AddressMapGetParams,
  };

  export {
    Accounts as Accounts,
    type AccountUpdateResponse as AccountUpdateResponse,
    type AccountDeleteResponse as AccountDeleteResponse,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountDeleteParams as AccountDeleteParams,
  };

  export {
    IPs as IPs,
    type IPUpdateResponse as IPUpdateResponse,
    type IPDeleteResponse as IPDeleteResponse,
    type IPUpdateParams as IPUpdateParams,
    type IPDeleteParams as IPDeleteParams,
  };

  export {
    Zones as Zones,
    type ZoneUpdateResponse as ZoneUpdateResponse,
    type ZoneDeleteResponse as ZoneDeleteResponse,
    type ZoneUpdateParams as ZoneUpdateParams,
    type ZoneDeleteParams as ZoneDeleteParams,
  };
}
