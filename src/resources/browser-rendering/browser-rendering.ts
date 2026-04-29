// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContentAPI from './content';
import { BaseContent, Content } from './content';
import * as CrawlAPI from './crawl';
import { BaseCrawl, Crawl } from './crawl';
import * as JsonAPI from './json';
import { BaseJson, Json } from './json';
import * as LinksAPI from './links';
import { BaseLinks, Links } from './links';
import * as MarkdownAPI from './markdown';
import { BaseMarkdown, Markdown } from './markdown';
import * as PDFAPI from './pdf';
import { BasePDF, PDF } from './pdf';
import * as ScrapeAPI from './scrape';
import { BaseScrape, Scrape } from './scrape';
import * as ScreenshotAPI from './screenshot';
import { BaseScreenshot, Screenshot } from './screenshot';
import * as SnapshotAPI from './snapshot';
import { BaseSnapshot, Snapshot } from './snapshot';
import * as DevtoolsAPI from './devtools/devtools';
import { BaseDevtools, Devtools } from './devtools/devtools';

export class BaseBrowserRendering extends APIResource {
  static override readonly _key: readonly ['browserRendering'] = Object.freeze(['browserRendering'] as const);
}
export class BrowserRendering extends BaseBrowserRendering {
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
BrowserRendering.BaseContent = BaseContent;
BrowserRendering.PDF = PDF;
BrowserRendering.BasePDF = BasePDF;
BrowserRendering.Scrape = Scrape;
BrowserRendering.BaseScrape = BaseScrape;
BrowserRendering.Screenshot = Screenshot;
BrowserRendering.BaseScreenshot = BaseScreenshot;
BrowserRendering.Snapshot = Snapshot;
BrowserRendering.BaseSnapshot = BaseSnapshot;
BrowserRendering.Json = Json;
BrowserRendering.BaseJson = BaseJson;
BrowserRendering.Links = Links;
BrowserRendering.BaseLinks = BaseLinks;
BrowserRendering.Markdown = Markdown;
BrowserRendering.BaseMarkdown = BaseMarkdown;
BrowserRendering.Crawl = Crawl;
BrowserRendering.BaseCrawl = BaseCrawl;
BrowserRendering.Devtools = Devtools;
BrowserRendering.BaseDevtools = BaseDevtools;

export declare namespace BrowserRendering {
  export { Content as Content, BaseContent as BaseContent };

  export { PDF as PDF, BasePDF as BasePDF };

  export { Scrape as Scrape, BaseScrape as BaseScrape };

  export { Screenshot as Screenshot, BaseScreenshot as BaseScreenshot };

  export { Snapshot as Snapshot, BaseSnapshot as BaseSnapshot };

  export { Json as Json, BaseJson as BaseJson };

  export { Links as Links, BaseLinks as BaseLinks };

  export { Markdown as Markdown, BaseMarkdown as BaseMarkdown };

  export { Crawl as Crawl, BaseCrawl as BaseCrawl };

  export { Devtools as Devtools, BaseDevtools as BaseDevtools };
}
