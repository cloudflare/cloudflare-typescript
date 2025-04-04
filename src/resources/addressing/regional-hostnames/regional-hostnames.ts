// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as RegionsAPI from './regions';
import { RegionListParams, RegionListResponse, RegionListResponsesSinglePage, Regions } from './regions';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RegionalHostnames extends APIResource {
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);

  /**
   * Create a new Regional Hostname entry. Cloudflare will only use data centers that
   * are physically located within the chosen region to decrypt and service HTTPS
   * traffic. Learn more about
   * [Regional Services](https://developers.cloudflare.com/data-localization/regional-services/get-started/).
   */
  create(
    params: RegionalHostnameCreateParams,
    options?: RequestOptions,
  ): APIPromise<RegionalHostnameCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/addressing/regional_hostnames`, {
        body,
        ...options,
      }) as APIPromise<{ result: RegionalHostnameCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Regional Hostnames within a zone.
   */
  list(
    params: RegionalHostnameListParams,
    options?: RequestOptions,
  ): PagePromise<RegionalHostnameListResponsesSinglePage, RegionalHostnameListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/addressing/regional_hostnames`,
      SinglePage<RegionalHostnameListResponse>,
      options,
    );
  }

  /**
   * Delete the region configuration for a specific Regional Hostname.
   */
  delete(
    hostname: string,
    params: RegionalHostnameDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RegionalHostnameDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(path`/zones/${zone_id}/addressing/regional_hostnames/${hostname}`, options);
  }

  /**
   * Update the configuration for a specific Regional Hostname. Only the region_key
   * of a hostname is mutable.
   */
  edit(
    hostname: string,
    params: RegionalHostnameEditParams,
    options?: RequestOptions,
  ): APIPromise<RegionalHostnameEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/addressing/regional_hostnames/${hostname}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RegionalHostnameEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch the configuration for a specific Regional Hostname, within a zone.
   */
  get(
    hostname: string,
    params: RegionalHostnameGetParams,
    options?: RequestOptions,
  ): APIPromise<RegionalHostnameGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/addressing/regional_hostnames/${hostname}`,
        options,
      ) as APIPromise<{ result: RegionalHostnameGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RegionalHostnameListResponsesSinglePage = SinglePage<RegionalHostnameListResponse>;

export interface RegionalHostnameCreateResponse {
  /**
   * When the regional hostname was created
   */
  created_on: string;

  /**
   * DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are
   * supported for one level, e.g `*.example.com`
   */
  hostname: string;

  /**
   * Identifying key for the region
   */
  region_key: string;
}

export interface RegionalHostnameListResponse {
  /**
   * When the regional hostname was created
   */
  created_on: string;

  /**
   * DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are
   * supported for one level, e.g `*.example.com`
   */
  hostname: string;

  /**
   * Identifying key for the region
   */
  region_key: string;
}

export interface RegionalHostnameDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface RegionalHostnameEditResponse {
  /**
   * When the regional hostname was created
   */
  created_on: string;

  /**
   * DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are
   * supported for one level, e.g `*.example.com`
   */
  hostname: string;

  /**
   * Identifying key for the region
   */
  region_key: string;
}

export interface RegionalHostnameGetResponse {
  /**
   * When the regional hostname was created
   */
  created_on: string;

  /**
   * DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are
   * supported for one level, e.g `*.example.com`
   */
  hostname: string;

  /**
   * Identifying key for the region
   */
  region_key: string;
}

export interface RegionalHostnameCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: DNS hostname to be regionalized, must be a subdomain of the zone.
   * Wildcards are supported for one level, e.g `*.example.com`
   */
  hostname: string;

  /**
   * Body param: Identifying key for the region
   */
  region_key: string;
}

export interface RegionalHostnameListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RegionalHostnameDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RegionalHostnameEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Identifying key for the region
   */
  region_key: string;
}

export interface RegionalHostnameGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

RegionalHostnames.Regions = Regions;

export declare namespace RegionalHostnames {
  export {
    type RegionalHostnameCreateResponse as RegionalHostnameCreateResponse,
    type RegionalHostnameListResponse as RegionalHostnameListResponse,
    type RegionalHostnameDeleteResponse as RegionalHostnameDeleteResponse,
    type RegionalHostnameEditResponse as RegionalHostnameEditResponse,
    type RegionalHostnameGetResponse as RegionalHostnameGetResponse,
    type RegionalHostnameListResponsesSinglePage as RegionalHostnameListResponsesSinglePage,
    type RegionalHostnameCreateParams as RegionalHostnameCreateParams,
    type RegionalHostnameListParams as RegionalHostnameListParams,
    type RegionalHostnameDeleteParams as RegionalHostnameDeleteParams,
    type RegionalHostnameEditParams as RegionalHostnameEditParams,
    type RegionalHostnameGetParams as RegionalHostnameGetParams,
  };

  export {
    Regions as Regions,
    type RegionListResponse as RegionListResponse,
    type RegionListResponsesSinglePage as RegionListResponsesSinglePage,
    type RegionListParams as RegionListParams,
  };
}
