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
   * Partially updates the business profile (name, email, phone, address, and
   * external metadata) associated with this organization's customer record, creating
   * the profile if it does not exist. Changes apply to every account and
   * organization sharing that profile. Omitted, empty, or null fields are left
   * unchanged. Each profile field is limited to 1,000 UTF-8 bytes. Only available to
   * members of the organization.
   *
   * @example
   * ```ts
   * await client.organizations.organizationProfile.update(
   *   'a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8',
   * );
   * ```
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
   * Retrieves the business profile (name, email, phone, address, and external
   * metadata) associated with this organization's customer record. Profiles can be
   * shared across accounts and organizations. Only available to members of the
   * organization.
   *
   * @example
   * ```ts
   * const organizationProfile =
   *   await client.organizations.organizationProfile.get(
   *     'a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8',
   *   );
   * ```
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

export interface OrganizationProfileUpdateParams {
  business_address?: string | null;

  business_email?: string | null;

  business_name?: string | null;

  business_phone?: string | null;

  external_metadata?: string | null;
}

export declare namespace OrganizationProfileResource {
  export {
    type OrganizationProfile as OrganizationProfile,
    type OrganizationProfileUpdateParams as OrganizationProfileUpdateParams,
  };
}
