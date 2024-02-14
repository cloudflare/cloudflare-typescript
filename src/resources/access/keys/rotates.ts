// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RotatesAPI from 'cloudflare/resources/access/keys/rotates';

export class Rotates extends APIResource {
  /**
   * Perfoms a key rotation for an account.
   */
  accessKeyConfigurationRotateAccessKeys(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RotateAccessKeyConfigurationRotateAccessKeysResponse> {
    return (
      this._client.post(`/accounts/${identifier}/access/keys/rotate`, options) as Core.APIPromise<{
        result: RotateAccessKeyConfigurationRotateAccessKeysResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RotateAccessKeyConfigurationRotateAccessKeysResponse = unknown | string;

export namespace Rotates {
  export import RotateAccessKeyConfigurationRotateAccessKeysResponse = RotatesAPI.RotateAccessKeyConfigurationRotateAccessKeysResponse;
}
