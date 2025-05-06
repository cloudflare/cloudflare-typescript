// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SiteInfo extends APIResource {
  /**
   * Creates a new Web Analytics site.
   *
   * @example
   * ```ts
   * const site = await client.rum.siteInfo.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  create(params: SiteInfoCreateParams, options?: RequestOptions): APIPromise<Site> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/rum/site_info`, { body, ...options }) as APIPromise<{
        result: Site;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Web Analytics site.
   *
   * @example
   * ```ts
   * const site = await client.rum.siteInfo.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(siteID: string, params: SiteInfoUpdateParams, options?: RequestOptions): APIPromise<Site> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/rum/site_info/${siteID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Site }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Web Analytics sites of an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const site of client.rum.siteInfo.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(params: SiteInfoListParams, options?: RequestOptions): PagePromise<SitesV4PagePaginationArray, Site> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/rum/site_info/list`,
      V4PagePaginationArray<Site>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing Web Analytics site.
   *
   * @example
   * ```ts
   * const siteInfo = await client.rum.siteInfo.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    siteID: string,
    params: SiteInfoDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SiteInfoDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/rum/site_info/${siteID}`, options) as APIPromise<{
        result: SiteInfoDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a Web Analytics site.
   *
   * @example
   * ```ts
   * const site = await client.rum.siteInfo.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(siteID: string, params: SiteInfoGetParams, options?: RequestOptions): APIPromise<Site> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/rum/site_info/${siteID}`, options) as APIPromise<{
        result: Site;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SitesV4PagePaginationArray = V4PagePaginationArray<Site>;

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
   * Path param: Identifier.
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
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: If enabled, the JavaScript snippet is automatically injected for
   * orange-clouded sites.
   */
  auto_install?: boolean;

  /**
   * Body param: Enables or disables RUM. This option can be used only when
   * auto_install is set to true.
   */
  enabled?: boolean;

  /**
   * Body param: The hostname to use for gray-clouded sites.
   */
  host?: string;

  /**
   * Body param: If enabled, the JavaScript snippet will not be injected for visitors
   * from the EU.
   */
  lite?: boolean;

  /**
   * Body param: The zone identifier.
   */
  zone_tag?: string;
}

export interface SiteInfoListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The property used to sort the list of results.
   */
  order_by?: 'host' | 'created';
}

export interface SiteInfoDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface SiteInfoGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace SiteInfo {
  export {
    type Site as Site,
    type SiteInfoDeleteResponse as SiteInfoDeleteResponse,
    type SitesV4PagePaginationArray as SitesV4PagePaginationArray,
    type SiteInfoCreateParams as SiteInfoCreateParams,
    type SiteInfoUpdateParams as SiteInfoUpdateParams,
    type SiteInfoListParams as SiteInfoListParams,
    type SiteInfoDeleteParams as SiteInfoDeleteParams,
    type SiteInfoGetParams as SiteInfoGetParams,
  };
}
