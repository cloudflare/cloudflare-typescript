// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ProfilesAPI from './profiles';

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
