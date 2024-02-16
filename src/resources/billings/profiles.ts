// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/billings/profiles';

export class Profiles extends APIResource {
  /**
   * Gets the current billing profile for the account.
   */
  accountBillingProfileBillingProfileDetails(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileAccountBillingProfileBillingProfileDetailsResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/billing/profile`, options) as Core.APIPromise<{
        result: ProfileAccountBillingProfileBillingProfileDetailsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ProfileAccountBillingProfileBillingProfileDetailsResponse = unknown | string | null;

export namespace Profiles {
  export import ProfileAccountBillingProfileBillingProfileDetailsResponse = ProfilesAPI.ProfileAccountBillingProfileBillingProfileDetailsResponse;
}
