// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSecrets extends APIResource {
  static override readonly _key: readonly ['secretsStore', 'stores', 'secrets'] = Object.freeze([
    'secretsStore',
    'stores',
    'secrets',
  ] as const);
}
export class Secrets extends BaseSecrets {}
