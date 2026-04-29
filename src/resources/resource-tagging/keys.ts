// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseKeys extends APIResource {
  static override readonly _key: readonly ['resourceTagging', 'keys'] = Object.freeze([
    'resourceTagging',
    'keys',
  ] as const);
}
export class Keys extends BaseKeys {}
