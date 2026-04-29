// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSchema extends APIResource {
  static override readonly _key: readonly ['ai', 'models', 'schema'] = Object.freeze([
    'ai',
    'models',
    'schema',
  ] as const);
}
export class Schema extends BaseSchema {}
