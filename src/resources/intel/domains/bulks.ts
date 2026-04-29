// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseBulks extends APIResource {
  static override readonly _key: readonly ['intel', 'domains', 'bulks'] = Object.freeze([
    'intel',
    'domains',
    'bulks',
  ] as const);
}
export class Bulks extends BaseBulks {}
