// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseFallbackDomains extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'custom', 'fallbackDomains'] =
    Object.freeze(['zeroTrust', 'devices', 'policies', 'custom', 'fallbackDomains'] as const);
}
export class FallbackDomains extends BaseFallbackDomains {}
