// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'settings'] = Object.freeze([
    'workers',
    'scripts',
    'settings',
  ] as const);
}
export class Settings extends BaseSettings {}
