// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseScrape extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'scrape'] = Object.freeze([
    'browserRendering',
    'scrape',
  ] as const);
}
export class Scrape extends BaseScrape {}
