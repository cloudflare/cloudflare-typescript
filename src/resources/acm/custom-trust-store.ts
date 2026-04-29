// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseCustomTrustStore extends APIResource {
  static override readonly _key: readonly ['acm', 'customTrustStore'] = Object.freeze([
    'acm',
    'customTrustStore',
  ] as const);
}
export class CustomTrustStore extends BaseCustomTrustStore {}
