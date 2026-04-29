// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAssets extends APIResource {
  static override readonly _key: readonly ['customPages', 'assets'] = Object.freeze([
    'customPages',
    'assets',
  ] as const);
}
export class Assets extends BaseAssets {}
