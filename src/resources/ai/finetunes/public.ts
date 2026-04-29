// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePublic extends APIResource {
  static override readonly _key: readonly ['ai', 'finetunes', 'public'] = Object.freeze([
    'ai',
    'finetunes',
    'public',
  ] as const);
}
export class Public extends BasePublic {}
