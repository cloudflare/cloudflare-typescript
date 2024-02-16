// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/users/billings/profiles';

export class Profiles extends APIResource {
  /**
   * Accesses your billing profile object.
   */
  userBillingProfileBillingProfileDetails(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileUserBillingProfileBillingProfileDetailsResponse> {
    return (
      this._client.get('/user/billing/profile', options) as Core.APIPromise<{
        result: ProfileUserBillingProfileBillingProfileDetailsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ProfileUserBillingProfileBillingProfileDetailsResponse = unknown | string | null;

export namespace Profiles {
  export import ProfileUserBillingProfileBillingProfileDetailsResponse = ProfilesAPI.ProfileUserBillingProfileBillingProfileDetailsResponse;
}
