// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTrustedDomains extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'trustedDomains'] = Object.freeze([
    'emailSecurity',
    'settings',
    'trustedDomains',
  ] as const);
}
export class TrustedDomains extends BaseTrustedDomains {}
