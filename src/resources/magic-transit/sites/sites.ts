// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { ACLs } from './acls';
import { LANs } from './lans';
import { WANs } from './wans';
import * as SitesAPI from './sites';
import * as ACLsAPI from './acls';
import * as LANsAPI from './lans';
import * as WANsAPI from './wans';
import { SinglePage } from '../../../pagination';

export class Sites extends APIResource {
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  lans: LANsAPI.LANs = new LANsAPI.LANs(this._client);
  wans: WANsAPI.WANs = new WANsAPI.WANs(this._client);

  /**
   * Creates a new Site
   */
  create(params: SiteCreateParams, options?: Core.RequestOptions): Core.APIPromise<Site> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/magic/sites`, { body, ...options }) as Core.APIPromise<{ result: Site }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site.
   */
  update(siteId: string, params: SiteUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Site> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/magic/sites/${siteId}`, { body, ...options }) as Core.APIPromise<{ result: Site }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Sites associated with an account. Use connector_identifier query param to
   * return sites where connector_identifier matches either site.ConnectorID or
   * site.SecondaryConnectorID.
   */
  list(params: SiteListParams, options?: Core.RequestOptions): Core.PagePromise<SitesSinglePage, Site> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/magic/sites`, SitesSinglePage, { query, ...options });
  }

  /**
   * Remove a specific Site.
   */
  delete(siteId: string, params: SiteDeleteParams, options?: Core.RequestOptions): Core.APIPromise<Site> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/magic/sites/${siteId}`, options) as Core.APIPromise<{ result: Site }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch a specific Site.
   */
  edit(siteId: string, params: SiteEditParams, options?: Core.RequestOptions): Core.APIPromise<Site> {
    const { account_id, ...body } = params;
    return (this._client.patch(`/accounts/${account_id}/magic/sites/${siteId}`, { body, ...options }) as Core.APIPromise<{ result: Site }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site.
   */
  get(siteId: string, params: SiteGetParams, options?: Core.RequestOptions): Core.APIPromise<Site> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/magic/sites/${siteId}`, options) as Core.APIPromise<{ result: Site }>)._thenUnwrap((obj) => obj.result);
  }
}

export class SitesSinglePage extends SinglePage<Site> {
}

export interface Site {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Magic Connector identifier tag.
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
   * Magic Connector identifier tag. Used when high availability mode is on.
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

/**
 * Location of site in latitude and longitude.
 */
export interface SiteLocationParam {
  /**
   * Latitude
   */
  lat?: string;

  /**
   * Longitude
   */
  lon?: string;
}

export interface SiteCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The name of the site.
   */
  name: string;

  /**
   * Body param: Magic Connector identifier tag.
   */
  connector_id?: string;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param: Site high availability mode. If set to true, the site can have two
   * connectors and runs in high availability mode.
   */
  ha_mode?: boolean;

  /**
   * Body param: Location of site in latitude and longitude.
   */
  location?: SiteLocationParam;

  /**
   * Body param: Magic Connector identifier tag. Used when high availability mode is
   * on.
   */
  secondary_connector_id?: string;
}

export interface SiteUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Magic Connector identifier tag.
   */
  connector_id?: string;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param: Location of site in latitude and longitude.
   */
  location?: SiteLocationParam;

  /**
   * Body param: The name of the site.
   */
  name?: string;

  /**
   * Body param: Magic Connector identifier tag. Used when high availability mode is
   * on.
   */
  secondary_connector_id?: string;
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
   * Identifier
   */
  account_id: string;
}

export interface SiteEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Magic Connector identifier tag.
   */
  connector_id?: string;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param: Location of site in latitude and longitude.
   */
  location?: SiteLocationParam;

  /**
   * Body param: The name of the site.
   */
  name?: string;

  /**
   * Body param: Magic Connector identifier tag. Used when high availability mode is
   * on.
   */
  secondary_connector_id?: string;
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
  export import SitesSinglePage = SitesAPI.SitesSinglePage;
  export import SiteCreateParams = SitesAPI.SiteCreateParams;
  export import SiteUpdateParams = SitesAPI.SiteUpdateParams;
  export import SiteListParams = SitesAPI.SiteListParams;
  export import SiteDeleteParams = SitesAPI.SiteDeleteParams;
  export import SiteEditParams = SitesAPI.SiteEditParams;
  export import SiteGetParams = SitesAPI.SiteGetParams;
  export import ACLs = ACLsAPI.ACLs;
  export import ACL = ACLsAPI.ACL;
  export import ACLConfiguration = ACLsAPI.ACLConfiguration;
  export import AllowedProtocol = ACLsAPI.AllowedProtocol;
  export import Subnet = ACLsAPI.Subnet;
  export import ACLsSinglePage = ACLsAPI.ACLsSinglePage;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLListParams = ACLsAPI.ACLListParams;
  export import ACLDeleteParams = ACLsAPI.ACLDeleteParams;
  export import ACLEditParams = ACLsAPI.ACLEditParams;
  export import ACLGetParams = ACLsAPI.ACLGetParams;
  export import LANs = LANsAPI.LANs;
  export import DHCPRelay = LANsAPI.DHCPRelay;
  export import DHCPServer = LANsAPI.DHCPServer;
  export import LAN = LANsAPI.LAN;
  export import LANStaticAddressing = LANsAPI.LANStaticAddressing;
  export import Nat = LANsAPI.Nat;
  export import RoutedSubnet = LANsAPI.RoutedSubnet;
  export import LANCreateResponse = LANsAPI.LANCreateResponse;
  export import LANsSinglePage = LANsAPI.LANsSinglePage;
  export import LANCreateParams = LANsAPI.LANCreateParams;
  export import LANUpdateParams = LANsAPI.LANUpdateParams;
  export import LANListParams = LANsAPI.LANListParams;
  export import LANDeleteParams = LANsAPI.LANDeleteParams;
  export import LANEditParams = LANsAPI.LANEditParams;
  export import LANGetParams = LANsAPI.LANGetParams;
  export import WANs = WANsAPI.WANs;
  export import WAN = WANsAPI.WAN;
  export import WANStaticAddressing = WANsAPI.WANStaticAddressing;
  export import WANCreateResponse = WANsAPI.WANCreateResponse;
  export import WANsSinglePage = WANsAPI.WANsSinglePage;
  export import WANCreateParams = WANsAPI.WANCreateParams;
  export import WANUpdateParams = WANsAPI.WANUpdateParams;
  export import WANListParams = WANsAPI.WANListParams;
  export import WANDeleteParams = WANsAPI.WANDeleteParams;
  export import WANEditParams = WANsAPI.WANEditParams;
  export import WANGetParams = WANsAPI.WANGetParams;
}
