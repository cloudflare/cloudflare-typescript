// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDownloads extends APIResource {
  static override readonly _key: readonly ['intel', 'indicatorFeeds', 'downloads'] = Object.freeze([
    'intel',
    'indicatorFeeds',
    'downloads',
  ] as const);
}
export class Downloads extends BaseDownloads {}
