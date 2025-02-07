// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Retrieve the current status of Content Scanning
   */
  get(params: SettingGetParams, options?: RequestOptions): APIPromise<SettingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/content-upload-scan/settings`, options) as APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The status for Content Scanning
 */
export interface SettingGetResponse {
  /**
   * Last modification date (ISO 8601) of the Content Scanning status
   */
  modified?: string;

  /**
   * Status of Content Scanning
   */
  value?: string;
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Settings {
  export { type SettingGetResponse as SettingGetResponse, type SettingGetParams as SettingGetParams };
}
