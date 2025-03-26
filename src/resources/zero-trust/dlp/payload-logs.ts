// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PayloadLogs extends APIResource {
  /**
   * Set payload log settings
   */
  update(params: PayloadLogUpdateParams, options?: RequestOptions): APIPromise<PayloadLogUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/payload_log`, { body, ...options }) as APIPromise<{
        result: PayloadLogUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get payload log settings
   */
  get(params: PayloadLogGetParams, options?: RequestOptions): APIPromise<PayloadLogGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dlp/payload_log`, options) as APIPromise<{
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

export declare namespace PayloadLogs {
  export {
    type PayloadLogUpdateResponse as PayloadLogUpdateResponse,
    type PayloadLogGetResponse as PayloadLogGetResponse,
    type PayloadLogUpdateParams as PayloadLogUpdateParams,
    type PayloadLogGetParams as PayloadLogGetParams,
  };
}
