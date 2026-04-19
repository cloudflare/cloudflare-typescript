// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class OrganizationProfileResource extends APIResource {
  /**
   * Modify organization profile. (Currently in Closed Beta - see
   * https://developers.cloudflare.com/fundamentals/organizations/)
   */
  update(
    organizationId: string,
    body: OrganizationProfileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/organizations/${organizationId}/profile`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get an organizations profile if it exists. (Currently in Closed Beta - see
   * https://developers.cloudflare.com/fundamentals/organizations/)
   */
  get(
    organizationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<organizations_api_ProfileResponse.Result> {
    return (
      this._client.get(`/organizations/${organizationId}/profile`, options) as Core.APIPromise<{
        result: organizations_api_ProfileResponse.Result;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OrganizationProfile {
  business_address: string;

  business_email: string;

  business_name: string;

  business_phone: string;

  external_metadata: string;
}

export interface OrganizationProfileUpdateParams {
  business_address: string;

  business_email: string;

  business_name: string;

  business_phone: string;

  external_metadata: string;
}

export declare namespace OrganizationProfileResource {
  export {
    type OrganizationProfile as OrganizationProfile,
    type OrganizationProfileUpdateParams as OrganizationProfileUpdateParams,
  };
}
