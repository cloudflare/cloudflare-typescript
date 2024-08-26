// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Regions } from './regions';
import * as RegionalHostnamesAPI from './regional-hostnames';
import * as Shared from '../../shared';
import * as RegionsAPI from './regions';
import { SinglePage } from '../../../pagination';

export class RegionalHostnames extends APIResource {
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);

  /**
   * Create a new Regional Hostname entry. Cloudflare will only use data centers that
   * are physically located within the chosen region to decrypt and service HTTPS
   * traffic. Learn more about
   * [Regional Services](https://developers.cloudflare.com/data-localization/regional-services/get-started/).
   */
  create(params: RegionalHostnameCreateParams, options?: Core.RequestOptions): Core.APIPromise<RegionalHostnameCreateResponse> {
    const { zone_id, ...body } = params;
    return (this._client.post(`/zones/${zone_id}/addressing/regional_hostnames`, { body, ...options }) as Core.APIPromise<{ result: RegionalHostnameCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Regional Hostnames within a zone.
   */
  list(params: RegionalHostnameListParams, options?: Core.RequestOptions): Core.PagePromise<RegionalHostnameListResponsesSinglePage, RegionalHostnameListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/addressing/regional_hostnames`, RegionalHostnameListResponsesSinglePage, options);
  }

  /**
   * Delete the region configuration for a specific Regional Hostname.
   */
  delete(hostname: string, params: RegionalHostnameDeleteParams, options?: Core.RequestOptions): Core.APIPromise<RegionalHostnameDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(`/zones/${zone_id}/addressing/regional_hostnames/${hostname}`, options);
  }

  /**
   * Update the configuration for a specific Regional Hostname. Only the region_key
   * of a hostname is mutable.
   */
  edit(hostname: string, params: RegionalHostnameEditParams, options?: Core.RequestOptions): Core.APIPromise<RegionalHostnameEditResponse> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}/addressing/regional_hostnames/${hostname}`, { body, ...options }) as Core.APIPromise<{ result: RegionalHostnameEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch the configuration for a specific Regional Hostname, within a zone.
   */
  get(hostname: string, params: RegionalHostnameGetParams, options?: Core.RequestOptions): Core.APIPromise<RegionalHostnameGetResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/addressing/regional_hostnames/${hostname}`, options) as Core.APIPromise<{ result: RegionalHostnameGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class RegionalHostnameListResponsesSinglePage extends SinglePage<RegionalHostnameListResponse> {
}

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

export namespace RegionalHostnames {
  export import RegionalHostnameCreateResponse = RegionalHostnamesAPI.RegionalHostnameCreateResponse;
  export import RegionalHostnameListResponse = RegionalHostnamesAPI.RegionalHostnameListResponse;
  export import RegionalHostnameDeleteResponse = RegionalHostnamesAPI.RegionalHostnameDeleteResponse;
  export import RegionalHostnameEditResponse = RegionalHostnamesAPI.RegionalHostnameEditResponse;
  export import RegionalHostnameGetResponse = RegionalHostnamesAPI.RegionalHostnameGetResponse;
  export import RegionalHostnameListResponsesSinglePage = RegionalHostnamesAPI.RegionalHostnameListResponsesSinglePage;
  export import RegionalHostnameCreateParams = RegionalHostnamesAPI.RegionalHostnameCreateParams;
  export import RegionalHostnameListParams = RegionalHostnamesAPI.RegionalHostnameListParams;
  export import RegionalHostnameDeleteParams = RegionalHostnamesAPI.RegionalHostnameDeleteParams;
  export import RegionalHostnameEditParams = RegionalHostnamesAPI.RegionalHostnameEditParams;
  export import RegionalHostnameGetParams = RegionalHostnamesAPI.RegionalHostnameGetParams;
  export import Regions = RegionsAPI.Regions;
  export import RegionListResponse = RegionsAPI.RegionListResponse;
  export import RegionListResponsesSinglePage = RegionsAPI.RegionListResponsesSinglePage;
  export import RegionListParams = RegionsAPI.RegionListParams;
}
