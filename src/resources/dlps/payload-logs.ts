// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PayloadLogsAPI from 'cloudflare/resources/dlps/payload-logs';

export class PayloadLogs extends APIResource {
  /**
   * Gets the current DLP payload log settings for this account.
   */
  dlpPayloadLogSettingsGetSettings(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayloadLogDLPPayloadLogSettingsGetSettingsResponse> {
    return (
      this._client.get(`/accounts/${accountId}/dlp/payload_log`, options) as Core.APIPromise<{
        result: PayloadLogDLPPayloadLogSettingsGetSettingsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the DLP payload log settings for this account.
   */
  dlpPayloadLogSettingsUpdateSettings(
    accountId: string,
    body: PayloadLogDLPPayloadLogSettingsUpdateSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse> {
    return (
      this._client.put(`/accounts/${accountId}/dlp/payload_log`, { body, ...options }) as Core.APIPromise<{
        result: PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PayloadLogDLPPayloadLogSettingsGetSettingsResponse {
  public_key: string | null;
}

export interface PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse {
  public_key: string | null;
}

export interface PayloadLogDLPPayloadLogSettingsUpdateSettingsParams {
  /**
   * The public key to use when encrypting extracted payloads, as a base64 string
   */
  public_key: string | null;
}

export namespace PayloadLogs {
  export import PayloadLogDLPPayloadLogSettingsGetSettingsResponse = PayloadLogsAPI.PayloadLogDLPPayloadLogSettingsGetSettingsResponse;
  export import PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse = PayloadLogsAPI.PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse;
  export import PayloadLogDLPPayloadLogSettingsUpdateSettingsParams = PayloadLogsAPI.PayloadLogDLPPayloadLogSettingsUpdateSettingsParams;
}
