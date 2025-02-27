// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ContentAPI from './content';
import { Content, ContentCreateParams, ContentCreateResponse } from './content';
import * as PdfAPI from './pdf';
import { Pdf, PdfCreateParams } from './pdf';
import * as ScrapeAPI from './scrape';
import { Scrape, ScrapeCreateParams, ScrapeCreateResponse } from './scrape';
import * as ScreenshotAPI from './screenshot';
import { Screenshot, ScreenshotCreateParams, ScreenshotCreateResponse } from './screenshot';
import * as SnapshotAPI from './snapshot';
import { Snapshot, SnapshotCreateParams, SnapshotCreateResponse } from './snapshot';

export class BrowsingRendering extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  pdf: PdfAPI.Pdf = new PdfAPI.Pdf(this._client);
  scrape: ScrapeAPI.Scrape = new ScrapeAPI.Scrape(this._client);
  screenshot: ScreenshotAPI.Screenshot = new ScreenshotAPI.Screenshot(this._client);
  snapshot: SnapshotAPI.Snapshot = new SnapshotAPI.Snapshot(this._client);
}

BrowsingRendering.Content = Content;
BrowsingRendering.Pdf = Pdf;
BrowsingRendering.Scrape = Scrape;
BrowsingRendering.Screenshot = Screenshot;
BrowsingRendering.Snapshot = Snapshot;

export declare namespace BrowsingRendering {
  export {
    Content as Content,
    type ContentCreateResponse as ContentCreateResponse,
    type ContentCreateParams as ContentCreateParams,
  };

  export { Pdf as Pdf, type PdfCreateParams as PdfCreateParams };

  export {
    Scrape as Scrape,
    type ScrapeCreateResponse as ScrapeCreateResponse,
    type ScrapeCreateParams as ScrapeCreateParams,
  };

  export {
    Screenshot as Screenshot,
    type ScreenshotCreateResponse as ScreenshotCreateResponse,
    type ScreenshotCreateParams as ScreenshotCreateParams,
  };

  export {
    Snapshot as Snapshot,
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
  };
}
