// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RevokesAPI from 'cloudflare/resources/devices/revokes';

export class Revokes extends APIResource {
  /**
   * Revokes a list of devices.
   */
  create(
    accountId: unknown,
    body: RevokeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RevokeCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/devices/revoke`, { body, ...options }) as Core.APIPromise<{
        result: RevokeCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RevokeCreateResponse = unknown | string;

export type RevokeCreateParams = Array<string>;

export namespace Revokes {
  export import RevokeCreateResponse = RevokesAPI.RevokeCreateResponse;
  export import RevokeCreateParams = RevokesAPI.RevokeCreateParams;
}
