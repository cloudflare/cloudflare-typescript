// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/images/v1s/keys';

export class Keys extends APIResource {
  /**
   * Lists your signing keys. These can be found on your Cloudflare Images dashboard.
   */
  cloudflareImagesKeysListSigningKeys(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyCloudflareImagesKeysListSigningKeysResponse> {
    return (
      this._client.get(`/accounts/${accountId}/images/v1/keys`, options) as Core.APIPromise<{
        result: KeyCloudflareImagesKeysListSigningKeysResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface KeyCloudflareImagesKeysListSigningKeysResponse {
  keys?: Array<KeyCloudflareImagesKeysListSigningKeysResponse.Key>;
}

export namespace KeyCloudflareImagesKeysListSigningKeysResponse {
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

export namespace Keys {
  export import KeyCloudflareImagesKeysListSigningKeysResponse = KeysAPI.KeyCloudflareImagesKeysListSigningKeysResponse;
}
