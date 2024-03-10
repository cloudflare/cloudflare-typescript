// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SitesAPI from 'cloudflare/resources/magic-transit/sites/sites';
import * as ACLsAPI from 'cloudflare/resources/magic-transit/sites/acls';
import * as LansAPI from 'cloudflare/resources/magic-transit/sites/lans';
import * as WansAPI from 'cloudflare/resources/magic-transit/sites/wans';

export class Sites extends APIResource {
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  lans: LansAPI.Lans = new LansAPI.Lans(this._client);
  wans: WansAPI.Wans = new WansAPI.Wans(this._client);

  /**
   * Creates a new Site
   */
  create(
    accountIdentifier: string,
    body: SiteCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/magic/sites`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SiteCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site.
   */
  update(
    accountIdentifier: string,
    siteIdentifier: string,
    body: SiteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}`, {
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
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SiteListResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/magic/sites`, options) as Core.APIPromise<{
        result: SiteListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific Site.
   */
  delete(
    accountIdentifier: string,
    siteIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: SiteDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site.
   */
  get(
    accountIdentifier: string,
    siteIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: SiteGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SiteCreateResponse {
  site?: SiteCreateResponse.Site;
}

export namespace SiteCreateResponse {
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
    location?: Site.Location;

    /**
     * The name of the site.
     */
    name?: string;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }

  export namespace Site {
    /**
     * Location of site in latitude and longitude.
     */
    export interface Location {
      /**
       * Latitude
       */
      lat?: string;

      /**
       * Longitude
       */
      lon?: string;
    }
  }
}

export interface SiteUpdateResponse {
  site?: SiteUpdateResponse.Site;
}

export namespace SiteUpdateResponse {
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
    location?: Site.Location;

    /**
     * The name of the site.
     */
    name?: string;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }

  export namespace Site {
    /**
     * Location of site in latitude and longitude.
     */
    export interface Location {
      /**
       * Latitude
       */
      lat?: string;

      /**
       * Longitude
       */
      lon?: string;
    }
  }
}

export interface SiteListResponse {
  sites?: Array<SiteListResponse.Site>;
}

export namespace SiteListResponse {
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
    location?: Site.Location;

    /**
     * The name of the site.
     */
    name?: string;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }

  export namespace Site {
    /**
     * Location of site in latitude and longitude.
     */
    export interface Location {
      /**
       * Latitude
       */
      lat?: string;

      /**
       * Longitude
       */
      lon?: string;
    }
  }
}

export interface SiteDeleteResponse {
  deleted?: boolean;

  deleted_site?: SiteDeleteResponse.DeletedSite;
}

export namespace SiteDeleteResponse {
  export interface DeletedSite {
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
    location?: DeletedSite.Location;

    /**
     * The name of the site.
     */
    name?: string;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }

  export namespace DeletedSite {
    /**
     * Location of site in latitude and longitude.
     */
    export interface Location {
      /**
       * Latitude
       */
      lat?: string;

      /**
       * Longitude
       */
      lon?: string;
    }
  }
}

export interface SiteGetResponse {
  site?: SiteGetResponse.Site;
}

export namespace SiteGetResponse {
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
    location?: Site.Location;

    /**
     * The name of the site.
     */
    name?: string;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }

  export namespace Site {
    /**
     * Location of site in latitude and longitude.
     */
    export interface Location {
      /**
       * Latitude
       */
      lat?: string;

      /**
       * Longitude
       */
      lon?: string;
    }
  }
}

export interface SiteCreateParams {
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
    location?: Site.Location;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }

  export namespace Site {
    /**
     * Location of site in latitude and longitude.
     */
    export interface Location {
      /**
       * Latitude
       */
      lat?: string;

      /**
       * Longitude
       */
      lon?: string;
    }
  }
}

export interface SiteUpdateParams {
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
    location?: Site.Location;

    /**
     * The name of the site.
     */
    name?: string;

    /**
     * Magic WAN Connector identifier tag. Used when high availability mode is on.
     */
    secondary_connector_id?: string;
  }

  export namespace Site {
    /**
     * Location of site in latitude and longitude.
     */
    export interface Location {
      /**
       * Latitude
       */
      lat?: string;

      /**
       * Longitude
       */
      lon?: string;
    }
  }
}

export namespace Sites {
  export import SiteCreateResponse = SitesAPI.SiteCreateResponse;
  export import SiteUpdateResponse = SitesAPI.SiteUpdateResponse;
  export import SiteListResponse = SitesAPI.SiteListResponse;
  export import SiteDeleteResponse = SitesAPI.SiteDeleteResponse;
  export import SiteGetResponse = SitesAPI.SiteGetResponse;
  export import SiteCreateParams = SitesAPI.SiteCreateParams;
  export import SiteUpdateParams = SitesAPI.SiteUpdateParams;
  export import ACLs = ACLsAPI.ACLs;
  export import ACLCreateResponse = ACLsAPI.ACLCreateResponse;
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLListResponse = ACLsAPI.ACLListResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import Lans = LansAPI.Lans;
  export import LanCreateResponse = LansAPI.LanCreateResponse;
  export import LanUpdateResponse = LansAPI.LanUpdateResponse;
  export import LanListResponse = LansAPI.LanListResponse;
  export import LanDeleteResponse = LansAPI.LanDeleteResponse;
  export import LanGetResponse = LansAPI.LanGetResponse;
  export import LanCreateParams = LansAPI.LanCreateParams;
  export import LanUpdateParams = LansAPI.LanUpdateParams;
  export import Wans = WansAPI.Wans;
  export import WanCreateResponse = WansAPI.WanCreateResponse;
  export import WanUpdateResponse = WansAPI.WanUpdateResponse;
  export import WanListResponse = WansAPI.WanListResponse;
  export import WanDeleteResponse = WansAPI.WanDeleteResponse;
  export import WanGetResponse = WansAPI.WanGetResponse;
  export import WanCreateParams = WansAPI.WanCreateParams;
  export import WanUpdateParams = WansAPI.WanUpdateParams;
}
