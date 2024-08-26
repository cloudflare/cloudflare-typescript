// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as PayloadLogsAPI from './payload-logs';

export class PayloadLogs extends APIResource {
  /**
   * Set payload log settings
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
   * Get payload log settings
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

  public_key?: string | null;
}

export interface PayloadLogGetResponse {
  updated_at: string;

  public_key?: string | null;
}

export interface PayloadLogUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  public_key?: string | null;
}

export interface PayloadLogGetParams {
  account_id: string;
}

export namespace PayloadLogs {
  export import PayloadLogUpdateResponse = PayloadLogsAPI.PayloadLogUpdateResponse;
  export import PayloadLogGetResponse = PayloadLogsAPI.PayloadLogGetResponse;
  export import PayloadLogUpdateParams = PayloadLogsAPI.PayloadLogUpdateParams;
  export import PayloadLogGetParams = PayloadLogsAPI.PayloadLogGetParams;
}
