// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSnapshots extends APIResource {
  static override readonly _key: readonly ['intel', 'indicatorFeeds', 'snapshots'] = Object.freeze([
    'intel',
    'indicatorFeeds',
    'snapshots',
  ] as const);
}
export class Snapshots extends BaseSnapshots {}
