// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseConfig extends APIResource {
  static override readonly _key: readonly ['logs', 'control', 'cmb', 'config'] = Object.freeze([
    'logs',
    'control',
    'cmb',
    'config',
  ] as const);
}
export class Config extends BaseConfig {}
