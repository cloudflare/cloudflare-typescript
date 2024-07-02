// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as PayloadLogsAPI from './payload-logs';

export class PayloadLogs extends APIResource {
  /**
   * Updates the DLP payload log settings for this account.
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
   * Gets the current DLP payload log settings for this account.
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
  public_key: string | null;
}

export interface PayloadLogGetResponse {
  public_key: string | null;
}

export interface PayloadLogUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The public key to use when encrypting extracted payloads, as a
   * base64 string
   */
  public_key: string | null;
}

export interface PayloadLogGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace PayloadLogs {
  export import PayloadLogUpdateResponse = PayloadLogsAPI.PayloadLogUpdateResponse;
  export import PayloadLogGetResponse = PayloadLogsAPI.PayloadLogGetResponse;
  export import PayloadLogUpdateParams = PayloadLogsAPI.PayloadLogUpdateParams;
  export import PayloadLogGetParams = PayloadLogsAPI.PayloadLogGetParams;
}
