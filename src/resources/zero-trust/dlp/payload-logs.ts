// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PayloadLogsAPI from 'cloudflare/resources/zero-trust/dlp/payload-logs';

export class PayloadLogs extends APIResource {
  /**
   * Updates the DLP payload log settings for this account.
   */
  update(
    params: PayloadLogUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5 | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/payload_log`, { body, ...options }) as Core.APIPromise<{
        result: UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5 | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the current DLP payload log settings for this account.
   */
  get(
    params: PayloadLogGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5 | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/payload_log`, options) as Core.APIPromise<{
        result: UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5 | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5 {
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
  export import UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5 = PayloadLogsAPI.UnnamedSchemaRefE31ff4936b1b42746e8cb62bbc87f2e5;
  export import PayloadLogUpdateParams = PayloadLogsAPI.PayloadLogUpdateParams;
  export import PayloadLogGetParams = PayloadLogsAPI.PayloadLogGetParams;
}
