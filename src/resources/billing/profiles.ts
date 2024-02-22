// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/billing/profiles';

export class Profiles extends APIResource {
  /**
   * Gets the current billing profile for the account.
   */
  get(accountIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<ProfileGetResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/billing/profile`, options) as Core.APIPromise<{
        result: ProfileGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ProfileGetResponse = unknown | string | null;

export namespace Profiles {
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
}
