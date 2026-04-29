// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSecrets extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'secrets'] = Object.freeze([
    'workers',
    'scripts',
    'secrets',
  ] as const);
}
export class Secrets extends BaseSecrets {}
