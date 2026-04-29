// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WebCrawlersAPI from './web-crawlers';
import { BaseWebCrawlers, WebCrawlers } from './web-crawlers';

export class BaseBots extends APIResource {
  static override readonly _key: readonly ['radar', 'bots'] = Object.freeze(['radar', 'bots'] as const);
}
export class Bots extends BaseBots {
  webCrawlers: WebCrawlersAPI.WebCrawlers = new WebCrawlersAPI.WebCrawlers(this._client);
}

Bots.WebCrawlers = WebCrawlers;
Bots.BaseWebCrawlers = BaseWebCrawlers;

export declare namespace Bots {
  export { WebCrawlers as WebCrawlers, BaseWebCrawlers as BaseWebCrawlers };
}
