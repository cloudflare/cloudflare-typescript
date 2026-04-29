// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSinkholes extends APIResource {
  static override readonly _key: readonly ['intel', 'sinkholes'] = Object.freeze([
    'intel',
    'sinkholes',
  ] as const);
}
export class Sinkholes extends BaseSinkholes {}
