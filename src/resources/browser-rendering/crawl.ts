// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseCrawl extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'crawl'] = Object.freeze([
    'browserRendering',
    'crawl',
  ] as const);
}
export class Crawl extends BaseCrawl {}
