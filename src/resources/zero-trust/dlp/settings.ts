// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Settings extends APIResource {
  /**
   * Missing fields are reset to initial (unconfigured) values.
   *
   * @example
   * ```ts
   * const dlpSettings =
   *   await client.zeroTrust.dlp.settings.update({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  update(params?: SettingUpdateParams, options?: Core.RequestOptions): Core.APIPromise<DLPSettings>;
  update(options?: Core.RequestOptions): Core.APIPromise<DLPSettings>;
  update(
    params: SettingUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPSettings> {
    if (isRequestOptions(params)) {
      return this.update({}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/settings`, { body, ...options }) as Core.APIPromise<{
        result: DLPSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete (reset) DLP account-level settings to initial values.
   *
   * @example
   * ```ts
   * const dlpSettings =
   *   await client.zeroTrust.dlp.settings.delete({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  delete(params?: SettingDeleteParams, options?: Core.RequestOptions): Core.APIPromise<DLPSettings>;
  delete(options?: Core.RequestOptions): Core.APIPromise<DLPSettings>;
  delete(
    params: SettingDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPSettings> {
    if (isRequestOptions(params)) {
      return this.delete({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.delete(`/accounts/${account_id}/dlp/settings`, options) as Core.APIPromise<{
        result: DLPSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Missing fields keep their existing values.
   *
   * @example
   * ```ts
   * const dlpSettings =
   *   await client.zeroTrust.dlp.settings.edit({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  edit(params?: SettingEditParams, options?: Core.RequestOptions): Core.APIPromise<DLPSettings>;
  edit(options?: Core.RequestOptions): Core.APIPromise<DLPSettings>;
  edit(
    params: SettingEditParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPSettings> {
    if (isRequestOptions(params)) {
      return this.edit({}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/dlp/settings`, { body, ...options }) as Core.APIPromise<{
        result: DLPSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get DLP account-level settings.
   *
   * @example
   * ```ts
   * const dlpSettings = await client.zeroTrust.dlp.settings.get(
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(params?: SettingGetParams, options?: Core.RequestOptions): Core.APIPromise<DLPSettings>;
  get(options?: Core.RequestOptions): Core.APIPromise<DLPSettings>;
  get(
    params: SettingGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPSettings> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/settings`, options) as Core.APIPromise<{
        result: DLPSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * DLP account-level settings response.
 */
export interface DLPSettings {
  /**
   * Whether AI context analysis is enabled at the account level.
   */
  ai_context_analysis: boolean;

  /**
   * Whether OCR is enabled at the account level.
   */
  ocr: boolean;

  payload_logging: DLPSettings.PayloadLogging;
}

export namespace DLPSettings {
  export interface PayloadLogging {
    updated_at: string;

    /**
     * Masking level for payload logs.
     *
     * - `full`: The entire payload is masked.
     * - `partial`: Only partial payload content is masked.
     * - `clear`: No masking is applied to the payload content.
     * - `default`: DLP uses its default masking behavior.
     */
    masking_level?: 'full' | 'partial' | 'clear' | 'default';

    /**
     * Base64-encoded public key for encrypting payload logs. Null when payload logging
     * is disabled.
     */
    public_key?: string | null;
  }
}

export interface SettingUpdateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param: Whether AI context analysis is enabled at the account level.
   */
  ai_context_analysis?: boolean | null;

  /**
   * Body param: Whether OCR is enabled at the account level.
   */
  ocr?: boolean | null;

  /**
   * Body param: Request model for payload log settings within the DLP settings
   * endpoint. Unlike the legacy endpoint, null and missing are treated identically
   * here (both mean "not provided" for PATCH, "reset to default" for PUT).
   */
  payload_logging?: SettingUpdateParams.PayloadLogging;
}

export namespace SettingUpdateParams {
  /**
   * Request model for payload log settings within the DLP settings endpoint. Unlike
   * the legacy endpoint, null and missing are treated identically here (both mean
   * "not provided" for PATCH, "reset to default" for PUT).
   */
  export interface PayloadLogging {
    /**
     * Masking level for payload logs.
     *
     * - `full`: The entire payload is masked.
     * - `partial`: Only partial payload content is masked.
     * - `clear`: No masking is applied to the payload content.
     * - `default`: DLP uses its default masking behavior.
     */
    masking_level?: 'full' | 'partial' | 'clear' | 'default';

    /**
     * Base64-encoded public key for encrypting payload logs.
     *
     * - Set to a non-empty base64 string to enable payload logging with the given key.
     * - Set to an empty string to disable payload logging.
     * - Omit or set to null to leave unchanged (PATCH) or reset to disabled (PUT).
     */
    public_key?: string | null;
  }
}

export interface SettingDeleteParams {
  account_id?: string;
}

export interface SettingEditParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param: Whether AI context analysis is enabled at the account level.
   */
  ai_context_analysis?: boolean | null;

  /**
   * Body param: Whether OCR is enabled at the account level.
   */
  ocr?: boolean | null;

  /**
   * Body param: Request model for payload log settings within the DLP settings
   * endpoint. Unlike the legacy endpoint, null and missing are treated identically
   * here (both mean "not provided" for PATCH, "reset to default" for PUT).
   */
  payload_logging?: SettingEditParams.PayloadLogging;
}

export namespace SettingEditParams {
  /**
   * Request model for payload log settings within the DLP settings endpoint. Unlike
   * the legacy endpoint, null and missing are treated identically here (both mean
   * "not provided" for PATCH, "reset to default" for PUT).
   */
  export interface PayloadLogging {
    /**
     * Masking level for payload logs.
     *
     * - `full`: The entire payload is masked.
     * - `partial`: Only partial payload content is masked.
     * - `clear`: No masking is applied to the payload content.
     * - `default`: DLP uses its default masking behavior.
     */
    masking_level?: 'full' | 'partial' | 'clear' | 'default';

    /**
     * Base64-encoded public key for encrypting payload logs.
     *
     * - Set to a non-empty base64 string to enable payload logging with the given key.
     * - Set to an empty string to disable payload logging.
     * - Omit or set to null to leave unchanged (PATCH) or reset to disabled (PUT).
     */
    public_key?: string | null;
  }
}

export interface SettingGetParams {
  account_id?: string;
}

export declare namespace Settings {
  export {
    type DLPSettings as DLPSettings,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingDeleteParams as SettingDeleteParams,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };
}
