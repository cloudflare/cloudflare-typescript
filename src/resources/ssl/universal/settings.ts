// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['ssl', 'universal', 'settings'] = Object.freeze([
    'ssl',
    'universal',
    'settings',
  ] as const);
}
export class Settings extends BaseSettings {}
