// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/images/v1s/keys';

export class Keys extends APIResource {
  /**
   * Lists your signing keys. These can be found on your Cloudflare Images dashboard.
   */
  list(params: KeyListParams, options?: Core.RequestOptions): Core.APIPromise<KeyListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/images/v1/keys`, options) as Core.APIPromise<{
        result: KeyListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface KeyListResponse {
  keys?: Array<KeyListResponse.Key>;
}

export namespace KeyListResponse {
  export interface Key {
    /**
     * Key name.
     */
    name?: string;

    /**
     * Key value.
     */
    value?: string;
  }
}

export interface KeyListParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export namespace Keys {
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyListParams = KeysAPI.KeyListParams;
}
