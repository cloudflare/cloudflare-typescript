// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseOrganizationProfileResource extends APIResource {
  static override readonly _key: readonly ['organizations', 'organizationProfile'] = Object.freeze([
    'organizations',
    'organizationProfile',
  ] as const);

  /**
   * Modify organization profile. (Currently in Closed Beta - see
   * https://developers.cloudflare.com/fundamentals/organizations/)
   */
  update(
    organizationID: string,
    body: OrganizationProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/organizations/${organizationID}/profile`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get an organizations profile if it exists. (Currently in Closed Beta - see
   * https://developers.cloudflare.com/fundamentals/organizations/)
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<OrganizationProfile> {
    return (
      this._client.get(path`/organizations/${organizationID}/profile`, options) as APIPromise<{
        result: OrganizationProfile;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class OrganizationProfileResource extends BaseOrganizationProfileResource {}

export interface OrganizationProfile {
  business_address: string;

  business_email: string;

  business_name: string;

  business_phone: string;

  external_metadata: string;
}

export interface OrganizationProfileParam {
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
