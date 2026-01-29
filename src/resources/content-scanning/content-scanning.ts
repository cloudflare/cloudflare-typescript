// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PayloadsAPI from './payloads';
import {
  PayloadCreateParams,
  PayloadCreateResponse,
  PayloadCreateResponsesSinglePage,
  PayloadDeleteParams,
  PayloadDeleteResponse,
  PayloadDeleteResponsesSinglePage,
  PayloadListParams,
  PayloadListResponse,
  PayloadListResponsesSinglePage,
  Payloads,
} from './payloads';
import * as SettingsAPI from './settings';
import { SettingGetParams, SettingGetResponse, Settings } from './settings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ContentScanning extends APIResource {
  payloads: PayloadsAPI.Payloads = new PayloadsAPI.Payloads(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Update the Content Scanning status.
   *
   * @example
   * ```ts
   * const contentScanning = await client.contentScanning.create(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     value: 'enabled',
   *   },
   * );
   * ```
   */
  create(
    params: ContentScanningCreateParams,
    options?: RequestOptions,
  ): APIPromise<ContentScanningCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/content-upload-scan/settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: ContentScanningCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the Content Scanning status.
   *
   * @example
   * ```ts
   * const contentScanning = await client.contentScanning.update(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     value: 'enabled',
   *   },
   * );
   * ```
   */
  update(
    params: ContentScanningUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ContentScanningUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/content-upload-scan/settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: ContentScanningUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable Content Scanning.
   *
   * @example
   * ```ts
   * const response = await client.contentScanning.disable({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  disable(
    params: ContentScanningDisableParams,
    options?: RequestOptions,
  ): APIPromise<ContentScanningDisableResponse> {
    const { zone_id } = params;
    return (
      this._client.post(path`/zones/${zone_id}/content-upload-scan/disable`, options) as APIPromise<{
        result: ContentScanningDisableResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable Content Scanning.
   *
   * @example
   * ```ts
   * const response = await client.contentScanning.enable({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  enable(
    params: ContentScanningEnableParams,
    options?: RequestOptions,
  ): APIPromise<ContentScanningEnableResponse> {
    const { zone_id } = params;
    return (
      this._client.post(path`/zones/${zone_id}/content-upload-scan/enable`, options) as APIPromise<{
        result: ContentScanningEnableResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the current status of Content Scanning.
   *
   * @example
   * ```ts
   * const contentScanning = await client.contentScanning.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: ContentScanningGetParams, options?: RequestOptions): APIPromise<ContentScanningGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/content-upload-scan/settings`, options) as APIPromise<{
        result: ContentScanningGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Defines the status for Content Scanning.
 */
export interface ContentScanningCreateResponse {
  /**
   * Defines the last modification date (ISO 8601) of the Content Scanning status.
   */
  modified?: string;

  /**
   * Defines the status of Content Scanning.
   */
  value?: string;
}

/**
 * Defines the status for Content Scanning.
 */
export interface ContentScanningUpdateResponse {
  /**
   * Defines the last modification date (ISO 8601) of the Content Scanning status.
   */
  modified?: string;

  /**
   * Defines the status of Content Scanning.
   */
  value?: string;
}

export type ContentScanningDisableResponse = unknown;

export type ContentScanningEnableResponse = unknown;

/**
 * Defines the status for Content Scanning.
 */
export interface ContentScanningGetResponse {
  /**
   * Defines the last modification date (ISO 8601) of the Content Scanning status.
   */
  modified?: string;

  /**
   * Defines the status of Content Scanning.
   */
  value?: string;
}

export interface ContentScanningCreateParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id: string;

  /**
   * Body param: The status value for Content Scanning.
   */
  value: 'enabled' | 'disabled';
}

export interface ContentScanningUpdateParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id: string;

  /**
   * Body param: The status value for Content Scanning.
   */
  value: 'enabled' | 'disabled';
}

export interface ContentScanningDisableParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

export interface ContentScanningEnableParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

export interface ContentScanningGetParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

ContentScanning.Payloads = Payloads;
ContentScanning.Settings = Settings;

export declare namespace ContentScanning {
  export {
    type ContentScanningCreateResponse as ContentScanningCreateResponse,
    type ContentScanningUpdateResponse as ContentScanningUpdateResponse,
    type ContentScanningDisableResponse as ContentScanningDisableResponse,
    type ContentScanningEnableResponse as ContentScanningEnableResponse,
    type ContentScanningGetResponse as ContentScanningGetResponse,
    type ContentScanningCreateParams as ContentScanningCreateParams,
    type ContentScanningUpdateParams as ContentScanningUpdateParams,
    type ContentScanningDisableParams as ContentScanningDisableParams,
    type ContentScanningEnableParams as ContentScanningEnableParams,
    type ContentScanningGetParams as ContentScanningGetParams,
  };

  export {
    Payloads as Payloads,
    type PayloadCreateResponse as PayloadCreateResponse,
    type PayloadListResponse as PayloadListResponse,
    type PayloadDeleteResponse as PayloadDeleteResponse,
    type PayloadCreateResponsesSinglePage as PayloadCreateResponsesSinglePage,
    type PayloadListResponsesSinglePage as PayloadListResponsesSinglePage,
    type PayloadDeleteResponsesSinglePage as PayloadDeleteResponsesSinglePage,
    type PayloadCreateParams as PayloadCreateParams,
    type PayloadListParams as PayloadListParams,
    type PayloadDeleteParams as PayloadDeleteParams,
  };

  export {
    Settings as Settings,
    type SettingGetResponse as SettingGetResponse,
    type SettingGetParams as SettingGetParams,
  };
}
