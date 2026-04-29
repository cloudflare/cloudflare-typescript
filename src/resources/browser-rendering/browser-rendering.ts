// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ContentAPI from './content';
import { Content } from './content';
import * as CrawlAPI from './crawl';
import { Crawl } from './crawl';
import * as JsonAPI from './json';
import { Json } from './json';
import * as LinksAPI from './links';
import { Links } from './links';
import * as MarkdownAPI from './markdown';
import { Markdown } from './markdown';
import * as PDFAPI from './pdf';
import { PDF } from './pdf';
import * as ScrapeAPI from './scrape';
import { Scrape } from './scrape';
import * as ScreenshotAPI from './screenshot';
import { Screenshot } from './screenshot';
import * as SnapshotAPI from './snapshot';
import { Snapshot } from './snapshot';
import * as DevtoolsAPI from './devtools/devtools';
import { Devtools } from './devtools/devtools';

export class BrowserRendering extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  pdf: PDFAPI.PDF = new PDFAPI.PDF(this._client);
  scrape: ScrapeAPI.Scrape = new ScrapeAPI.Scrape(this._client);
  screenshot: ScreenshotAPI.Screenshot = new ScreenshotAPI.Screenshot(this._client);
  snapshot: SnapshotAPI.Snapshot = new SnapshotAPI.Snapshot(this._client);
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
  links: LinksAPI.Links = new LinksAPI.Links(this._client);
  markdown: MarkdownAPI.Markdown = new MarkdownAPI.Markdown(this._client);
  crawl: CrawlAPI.Crawl = new CrawlAPI.Crawl(this._client);
  devtools: DevtoolsAPI.Devtools = new DevtoolsAPI.Devtools(this._client);
}

BrowserRendering.Content = Content;
BrowserRendering.PDF = PDF;
BrowserRendering.Scrape = Scrape;
BrowserRendering.Screenshot = Screenshot;
BrowserRendering.Snapshot = Snapshot;
BrowserRendering.Json = Json;
BrowserRendering.Links = Links;
BrowserRendering.Markdown = Markdown;
BrowserRendering.Crawl = Crawl;
BrowserRendering.Devtools = Devtools;

export declare namespace BrowserRendering {
  export { Content as Content };

  export { PDF as PDF };

  export { Scrape as Scrape };

  export { Screenshot as Screenshot };

  export { Snapshot as Snapshot };

  export { Json as Json };

  export { Links as Links };

  export { Markdown as Markdown };

  export { Crawl as Crawl };

  export { Devtools as Devtools };
}
