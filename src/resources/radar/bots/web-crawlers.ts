// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseWebCrawlers extends APIResource {
  static override readonly _key: readonly ['radar', 'bots', 'webCrawlers'] = Object.freeze([
    'radar',
    'bots',
    'webCrawlers',
  ] as const);
}
export class WebCrawlers extends BaseWebCrawlers {}
