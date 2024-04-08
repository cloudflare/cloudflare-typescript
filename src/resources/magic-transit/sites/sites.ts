// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SitesAPI from 'cloudflare/resources/magic-transit/sites/sites';
import * as ACLsAPI from 'cloudflare/resources/magic-transit/sites/acls';
import * as LANsAPI from 'cloudflare/resources/magic-transit/sites/lans';
import * as WANsAPI from 'cloudflare/resources/magic-transit/sites/wans';

export class Sites extends APIResource {
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  lans: LANsAPI.LANs = new LANsAPI.LANs(this._client);
  wans: WANsAPI.WANs = new WANsAPI.WANs(this._client);

  /**
   * Creates a new Site
   */
  create(params: SiteCreateParams, options?: Core.RequestOptions): Core.APIPromise<SiteCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/sites`, { body, ...options }) as Core.APIPromise<{
        result: SiteCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site.
   */
  update(
    siteId: string,
    params: SiteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SiteUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Sites associated with an account. Use connector_identifier query param to
   * return sites where connector_identifier matches either site.ConnectorID or
   * site.SecondaryConnectorID.
   */
  list(params: SiteListParams, options?: Core.RequestOptions): Core.APIPromise<SiteListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/sites`, { query, ...options }) as Core.APIPromise<{
        result: SiteListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific Site.
   */
  delete(
    siteId: string,
    params: SiteDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/magic/sites/${siteId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: SiteDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site.
   */
  get(
    siteId: string,
    params: SiteGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/sites/${siteId}`, options) as Core.APIPromise<{
        result: SiteGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Site {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Magic WAN Connector identifier tag.
   */
  connector_id?: string;

  description?: string;

  /**
   * Site high availability mode. If set to true, the site can have two connectors
   * and runs in high availability mode.
   */
  ha_mode?: boolean;

  /**
   * Location of site in latitude and longitude.
   */
  location?: SiteLocation;

  /**
   * The name of the site.
   */
  name?: string;

  /**
   * Magic WAN Connector identifier tag. Used when high availability mode is on.
   */
  secondary_connector_id?: string;
}

/**
 * Location of site in latitude and longitude.
 */
export interface SiteLocation {
  /**
   * Latitude
   */
  lat?: string;

  /**
   * Longitude
   */
  lon?: string;
}

export interface SiteCreateResponse {
  site?: Site;
}

export interface SiteUpdateResponse {
  site?: Site;
}

export interface SiteListResponse {
  sites?: Array<Site>;
}

export interface SiteDeleteResponse {
  deleted?: boolean;

  deleted_site?: Site;
}

export interface SiteGetResponse {
  site?: Site;
}

export interface SiteCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  site?: SiteCreateParams.Site;
}

export namespace SiteCreateParams {
  export interface Site {
    /**
     * The name of the site.
     */
    name: string;

    /**
     * Magic WAN Connector identifier tag.
     */
    connector_id?: string;

    description?: string;

    /**
     * Site high availability mode. If set to true, the site can have two connectors
     * and runs in high availability mode.
     */
    ha_mode?: boolean;

    /**
     * Location of site in latitude and longitude.
     */
    location?: SitesAPI.SiteLocation;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }
}

export interface SiteUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  site?: SiteUpdateParams.Site;
}

export namespace SiteUpdateParams {
  export interface Site {
    /**
     * Magic WAN Connector identifier tag.
     */
    connector_id?: string;

    description?: string;

    /**
     * Location of site in latitude and longitude.
     */
    location?: SitesAPI.SiteLocation;

    /**
     * The name of the site.
     */
    name?: string;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }
}

export interface SiteListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Identifier
   */
  connector_identifier?: string;
}

export interface SiteDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface SiteGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Sites {
  export import Site = SitesAPI.Site;
  export import SiteLocation = SitesAPI.SiteLocation;
  export import SiteCreateResponse = SitesAPI.SiteCreateResponse;
  export import SiteUpdateResponse = SitesAPI.SiteUpdateResponse;
  export import SiteListResponse = SitesAPI.SiteListResponse;
  export import SiteDeleteResponse = SitesAPI.SiteDeleteResponse;
  export import SiteGetResponse = SitesAPI.SiteGetResponse;
  export import SiteCreateParams = SitesAPI.SiteCreateParams;
  export import SiteUpdateParams = SitesAPI.SiteUpdateParams;
  export import SiteListParams = SitesAPI.SiteListParams;
  export import SiteDeleteParams = SitesAPI.SiteDeleteParams;
  export import SiteGetParams = SitesAPI.SiteGetParams;
  export import ACLs = ACLsAPI.ACLs;
  export import ACL = ACLsAPI.ACL;
  export import ACLConfiguration = ACLsAPI.ACLConfiguration;
  export import Subnet = ACLsAPI.Subnet;
  export import UnnamedSchemaRef87fa9e5fe9f6b8d607be1df57340d916 = ACLsAPI.UnnamedSchemaRef87fa9e5fe9f6b8d607be1df57340d916;
  export import ACLCreateResponse = ACLsAPI.ACLCreateResponse;
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLListResponse = ACLsAPI.ACLListResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLListParams = ACLsAPI.ACLListParams;
  export import ACLDeleteParams = ACLsAPI.ACLDeleteParams;
  export import ACLGetParams = ACLsAPI.ACLGetParams;
  export import LANs = LANsAPI.LANs;
  export import DHCPRelay = LANsAPI.DHCPRelay;
  export import DHCPServer = LANsAPI.DHCPServer;
  export import LAN = LANsAPI.LAN;
  export import Nat = LANsAPI.Nat;
  export import RoutedSubnet = LANsAPI.RoutedSubnet;
  export import StaticAddressing = LANsAPI.StaticAddressing;
  export import LANCreateResponse = LANsAPI.LANCreateResponse;
  export import LANUpdateResponse = LANsAPI.LANUpdateResponse;
  export import LANListResponse = LANsAPI.LANListResponse;
  export import LANDeleteResponse = LANsAPI.LANDeleteResponse;
  export import LANGetResponse = LANsAPI.LANGetResponse;
  export import LANCreateParams = LANsAPI.LANCreateParams;
  export import LANUpdateParams = LANsAPI.LANUpdateParams;
  export import LANListParams = LANsAPI.LANListParams;
  export import LANDeleteParams = LANsAPI.LANDeleteParams;
  export import LANGetParams = LANsAPI.LANGetParams;
  export import WANs = WANsAPI.WANs;
  export import WAN = WANsAPI.WAN;
  export import WANCreateResponse = WANsAPI.WANCreateResponse;
  export import WANUpdateResponse = WANsAPI.WANUpdateResponse;
  export import WANListResponse = WANsAPI.WANListResponse;
  export import WANDeleteResponse = WANsAPI.WANDeleteResponse;
  export import WANGetResponse = WANsAPI.WANGetResponse;
  export import WANCreateParams = WANsAPI.WANCreateParams;
  export import WANUpdateParams = WANsAPI.WANUpdateParams;
  export import WANListParams = WANsAPI.WANListParams;
  export import WANDeleteParams = WANsAPI.WANDeleteParams;
  export import WANGetParams = WANsAPI.WANGetParams;
}
