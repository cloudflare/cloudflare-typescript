// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SiteInfoAPI from './site-info';
import * as RulesAPI from './rules';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class SiteInfo extends APIResource {
  /**
   * Creates a new Web Analytics site.
   */
  create(params: SiteInfoCreateParams, options?: Core.RequestOptions): Core.APIPromise<Site> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/rum/site_info`, { body, ...options }) as Core.APIPromise<{ result: Site }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Web Analytics site.
   */
  update(siteId: string, params: SiteInfoUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Site> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/rum/site_info/${siteId}`, { body, ...options }) as Core.APIPromise<{ result: Site }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Web Analytics sites of an account.
   */
  list(params: SiteInfoListParams, options?: Core.RequestOptions): Core.PagePromise<SitesV4PagePaginationArray, Site> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/rum/site_info/list`, SitesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes an existing Web Analytics site.
   */
  delete(siteId: string, params: SiteInfoDeleteParams, options?: Core.RequestOptions): Core.APIPromise<SiteInfoDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/rum/site_info/${siteId}`, options) as Core.APIPromise<{ result: SiteInfoDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a Web Analytics site.
   */
  get(siteId: string, params: SiteInfoGetParams, options?: Core.RequestOptions): Core.APIPromise<Site> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/rum/site_info/${siteId}`, options) as Core.APIPromise<{ result: Site }>)._thenUnwrap((obj) => obj.result);
  }
}

export class SitesV4PagePaginationArray extends V4PagePaginationArray<Site> {
}

export interface Site {
  /**
   * If enabled, the JavaScript snippet is automatically injected for orange-clouded
   * sites.
   */
  auto_install?: boolean;

  created?: string;

  /**
   * A list of rules.
   */
  rules?: Array<RulesAPI.RUMRule>;

  ruleset?: Site.Ruleset;

  /**
   * The Web Analytics site identifier.
   */
  site_tag?: string;

  /**
   * The Web Analytics site token.
   */
  site_token?: string;

  /**
   * Encoded JavaScript snippet.
   */
  snippet?: string;
}

export namespace Site {
  export interface Ruleset {
    /**
     * The Web Analytics ruleset identifier.
     */
    id?: string;

    /**
     * Whether the ruleset is enabled.
     */
    enabled?: boolean;

    zone_name?: string;

    /**
     * The zone identifier.
     */
    zone_tag?: string;
  }
}

export interface SiteInfoDeleteResponse {
  /**
   * The Web Analytics site identifier.
   */
  site_tag?: string;
}

export interface SiteInfoCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: If enabled, the JavaScript snippet is automatically injected for
   * orange-clouded sites.
   */
  auto_install?: boolean;

  /**
   * Body param: The hostname to use for gray-clouded sites.
   */
  host?: string;

  /**
   * Body param: The zone identifier.
   */
  zone_tag?: string;
}

export interface SiteInfoUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: If enabled, the JavaScript snippet is automatically injected for
   * orange-clouded sites.
   */
  auto_install?: boolean;

  /**
   * Body param: The hostname to use for gray-clouded sites.
   */
  host?: string;

  /**
   * Body param: The zone identifier.
   */
  zone_tag?: string;
}

export interface SiteInfoListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: The property used to sort the list of results.
   */
  order_by?: 'host' | 'created';
}

export interface SiteInfoDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface SiteInfoGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace SiteInfo {
  export import Site = SiteInfoAPI.Site;
  export import SiteInfoDeleteResponse = SiteInfoAPI.SiteInfoDeleteResponse;
  export import SitesV4PagePaginationArray = SiteInfoAPI.SitesV4PagePaginationArray;
  export import SiteInfoCreateParams = SiteInfoAPI.SiteInfoCreateParams;
  export import SiteInfoUpdateParams = SiteInfoAPI.SiteInfoUpdateParams;
  export import SiteInfoListParams = SiteInfoAPI.SiteInfoListParams;
  export import SiteInfoDeleteParams = SiteInfoAPI.SiteInfoDeleteParams;
  export import SiteInfoGetParams = SiteInfoAPI.SiteInfoGetParams;
}
