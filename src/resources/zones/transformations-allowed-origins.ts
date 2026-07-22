// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseTransformationsAllowedOrigins extends APIResource {
  static override readonly _key: readonly ['zones', 'transformationsAllowedOrigins'] = Object.freeze([
    'zones',
    'transformationsAllowedOrigins',
  ] as const);
}
export class TransformationsAllowedOrigins extends BaseTransformationsAllowedOrigins {}
