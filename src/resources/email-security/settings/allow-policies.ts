// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAllowPolicies extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'allowPolicies'] = Object.freeze([
    'emailSecurity',
    'settings',
    'allowPolicies',
  ] as const);
}
export class AllowPolicies extends BaseAllowPolicies {}
