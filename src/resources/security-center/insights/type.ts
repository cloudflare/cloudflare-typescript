// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseType extends APIResource {
  static override readonly _key: readonly ['securityCenter', 'insights', 'type'] = Object.freeze([
    'securityCenter',
    'insights',
    'type',
  ] as const);
}
export class Type extends BaseType {}
