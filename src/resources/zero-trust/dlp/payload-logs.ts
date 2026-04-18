// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class PayloadLogs extends APIResource {
  /**
   * Enables or disables payload logging for DLP matches. When enabled, matched
   * content is stored for review.
   *
   * @example
   * ```ts
   * const payloadLog =
   *   await client.zeroTrust.dlp.payloadLogs.update({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  update(
    params: PayloadLogUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayloadLogUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/payload_log`, { body, ...options }) as Core.APIPromise<{
        result: PayloadLogUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the current payload logging configuration for DLP, showing whether matched
   * content is being logged.
   *
   * @example
   * ```ts
   * const payloadLog =
   *   await client.zeroTrust.dlp.payloadLogs.get({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  get(params: PayloadLogGetParams, options?: Core.RequestOptions): Core.APIPromise<PayloadLogGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/payload_log`, options) as Core.APIPromise<{
        result: PayloadLogGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PayloadLogUpdateResponse {
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

export interface PayloadLogGetResponse {
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

export interface PayloadLogUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: Masking level for payload logs.
   *
   * - `full`: The entire payload is masked.
   * - `partial`: Only partial payload content is masked.
   * - `clear`: No masking is applied to the payload content.
   * - `default`: DLP uses its default masking behavior.
   */
  masking_level?: 'full' | 'partial' | 'clear' | 'default';

  /**
   * Body param: Base64-encoded public key for encrypting payload logs.
   *
   * - Set to null or empty string to disable payload logging.
   * - Set to a non-empty base64 string to enable payload logging with the given key.
   *
   * For customers with configurable payload masking feature rolled out:
   *
   * - If the field is missing, the existing setting will be kept. Note that this is
   *   different from setting to null or empty string.
   *
   * For all other customers:
   *
   * - If the field is missing, the existing setting will be cleared.
   */
  public_key?: string | null;
}

export interface PayloadLogGetParams {
  account_id: string;
}

export declare namespace PayloadLogs {
  export {
    type PayloadLogUpdateResponse as PayloadLogUpdateResponse,
    type PayloadLogGetResponse as PayloadLogGetResponse,
    type PayloadLogUpdateParams as PayloadLogUpdateParams,
    type PayloadLogGetParams as PayloadLogGetParams,
  };
}
