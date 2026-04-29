// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseOrganizationProfile extends APIResource {
  static override readonly _key: readonly ['organizations', 'organizationProfile'] = Object.freeze([
    'organizations',
    'organizationProfile',
  ] as const);
}
export class OrganizationProfile extends BaseOrganizationProfile {}
