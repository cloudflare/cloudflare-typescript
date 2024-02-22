// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DefaultPolicyAPI from 'cloudflare/resources/devices/policies/default-policy';

export class DefaultPolicy extends APIResource {
  /**
   * Fetches the default device settings profile for an account.
   */
  get(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<DefaultPolicyGetResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/devices/policy`, options) as Core.APIPromise<{
        result: DefaultPolicyGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DefaultPolicyGetResponse = Array<unknown>;

export namespace DefaultPolicy {
  export import DefaultPolicyGetResponse = DefaultPolicyAPI.DefaultPolicyGetResponse;
}
