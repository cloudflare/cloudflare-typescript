// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseLogoMatches extends APIResource {
  static override readonly _key: readonly ['brandProtection', 'logoMatches'] = Object.freeze([
    'brandProtection',
    'logoMatches',
  ] as const);
}
export class LogoMatches extends BaseLogoMatches {}
