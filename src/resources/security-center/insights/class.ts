// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseClass extends APIResource {
  static override readonly _key: readonly ['securityCenter', 'insights', 'class'] = Object.freeze([
    'securityCenter',
    'insights',
    'class',
  ] as const);
}
export class Class extends BaseClass {}
