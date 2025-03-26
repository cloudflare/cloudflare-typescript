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
   * Disable Content Scanning
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
   * Enable Content Scanning
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
}

export type ContentScanningDisableResponse = unknown;

export type ContentScanningEnableResponse = unknown;

export interface ContentScanningDisableParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ContentScanningEnableParams {
  /**
   * Identifier
   */
  zone_id: string;
}

ContentScanning.Payloads = Payloads;
ContentScanning.Settings = Settings;

export declare namespace ContentScanning {
  export {
    type ContentScanningDisableResponse as ContentScanningDisableResponse,
    type ContentScanningEnableResponse as ContentScanningEnableResponse,
    type ContentScanningDisableParams as ContentScanningDisableParams,
    type ContentScanningEnableParams as ContentScanningEnableParams,
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
