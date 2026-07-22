// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTransformations extends APIResource {
  static override readonly _key: readonly ['accounts', 'speedSettings', 'transformations'] = Object.freeze([
    'accounts',
    'speedSettings',
    'transformations',
  ] as const);
}
export class Transformations extends BaseTransformations {}
