// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PayloadLogsAPI from 'cloudflare/resources/dlp/payload-logs';

export class PayloadLogs extends APIResource {
  /**
   * Gets the current DLP payload log settings for this account.
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PayloadLogGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/dlp/payload_log`, options) as Core.APIPromise<{
        result: PayloadLogGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the DLP payload log settings for this account.
   */
  replace(
    accountId: string,
    body: PayloadLogReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayloadLogReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/dlp/payload_log`, { body, ...options }) as Core.APIPromise<{
        result: PayloadLogReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PayloadLogGetResponse {
  public_key: string | null;
}

export interface PayloadLogReplaceResponse {
  public_key: string | null;
}

export interface PayloadLogReplaceParams {
  /**
   * The public key to use when encrypting extracted payloads, as a base64 string
   */
  public_key: string | null;
}

export namespace PayloadLogs {
  export import PayloadLogGetResponse = PayloadLogsAPI.PayloadLogGetResponse;
  export import PayloadLogReplaceResponse = PayloadLogsAPI.PayloadLogReplaceResponse;
  export import PayloadLogReplaceParams = PayloadLogsAPI.PayloadLogReplaceParams;
}
