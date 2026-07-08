// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityTreeAPI from './accessibility-tree';
import {
  AccessibilityTree,
  AccessibilityTreeCreateParams,
  AccessibilityTreeCreateResponse,
  BaseAccessibilityTree,
} from './accessibility-tree';
import * as ContentAPI from './content';
import { BaseContent, Content, ContentCreateParams, ContentCreateResponse } from './content';
import * as CrawlAPI from './crawl';
import {
  BaseCrawl,
  Crawl,
  CrawlCreateParams,
  CrawlCreateResponse,
  CrawlDeleteParams,
  CrawlDeleteResponse,
  CrawlGetParams,
  CrawlGetResponse,
} from './crawl';
import * as JsonAPI from './json';
import { BaseJson, Json, JsonCreateParams, JsonCreateResponse } from './json';
import * as LinksAPI from './links';
import { BaseLinks, LinkCreateParams, LinkCreateResponse, Links } from './links';
import * as MarkdownAPI from './markdown';
import { BaseMarkdown, Markdown, MarkdownCreateParams, MarkdownCreateResponse } from './markdown';
import * as PDFAPI from './pdf';
import { BasePDF, PDF, PDFCreateParams } from './pdf';
import * as ScrapeAPI from './scrape';
import { BaseScrape, Scrape, ScrapeCreateParams, ScrapeCreateResponse } from './scrape';
import * as ScreenshotAPI from './screenshot';
import { BaseScreenshot, Screenshot, ScreenshotCreateParams, ScreenshotCreateResponse } from './screenshot';
import * as SnapshotAPI from './snapshot';
import { BaseSnapshot, Snapshot, SnapshotCreateParams, SnapshotCreateResponse } from './snapshot';
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
  accessibilityTree: AccessibilityTreeAPI.AccessibilityTree = new AccessibilityTreeAPI.AccessibilityTree(
    this._client,
  );
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
BrowserRendering.AccessibilityTree = AccessibilityTree;
BrowserRendering.BaseAccessibilityTree = BaseAccessibilityTree;
BrowserRendering.Crawl = Crawl;
BrowserRendering.BaseCrawl = BaseCrawl;
BrowserRendering.Devtools = Devtools;
BrowserRendering.BaseDevtools = BaseDevtools;

export declare namespace BrowserRendering {
  export {
    Content as Content,
    BaseContent as BaseContent,
    type ContentCreateResponse as ContentCreateResponse,
    type ContentCreateParams as ContentCreateParams,
  };

  export { PDF as PDF, BasePDF as BasePDF, type PDFCreateParams as PDFCreateParams };

  export {
    Scrape as Scrape,
    BaseScrape as BaseScrape,
    type ScrapeCreateResponse as ScrapeCreateResponse,
    type ScrapeCreateParams as ScrapeCreateParams,
  };

  export {
    Screenshot as Screenshot,
    BaseScreenshot as BaseScreenshot,
    type ScreenshotCreateResponse as ScreenshotCreateResponse,
    type ScreenshotCreateParams as ScreenshotCreateParams,
  };

  export {
    Snapshot as Snapshot,
    BaseSnapshot as BaseSnapshot,
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
  };

  export {
    Json as Json,
    BaseJson as BaseJson,
    type JsonCreateResponse as JsonCreateResponse,
    type JsonCreateParams as JsonCreateParams,
  };

  export {
    Links as Links,
    BaseLinks as BaseLinks,
    type LinkCreateResponse as LinkCreateResponse,
    type LinkCreateParams as LinkCreateParams,
  };

  export {
    Markdown as Markdown,
    BaseMarkdown as BaseMarkdown,
    type MarkdownCreateResponse as MarkdownCreateResponse,
    type MarkdownCreateParams as MarkdownCreateParams,
  };

  export {
    AccessibilityTree as AccessibilityTree,
    BaseAccessibilityTree as BaseAccessibilityTree,
    type AccessibilityTreeCreateResponse as AccessibilityTreeCreateResponse,
    type AccessibilityTreeCreateParams as AccessibilityTreeCreateParams,
  };

  export {
    Crawl as Crawl,
    BaseCrawl as BaseCrawl,
    type CrawlCreateResponse as CrawlCreateResponse,
    type CrawlDeleteResponse as CrawlDeleteResponse,
    type CrawlGetResponse as CrawlGetResponse,
    type CrawlCreateParams as CrawlCreateParams,
    type CrawlDeleteParams as CrawlDeleteParams,
    type CrawlGetParams as CrawlGetParams,
  };

  export { Devtools as Devtools, BaseDevtools as BaseDevtools };
}
