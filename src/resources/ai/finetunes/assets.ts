// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAssets extends APIResource {
  static override readonly _key: readonly ['ai', 'finetunes', 'assets'] = Object.freeze([
    'ai',
    'finetunes',
    'assets',
  ] as const);
}
export class Assets extends BaseAssets {}
