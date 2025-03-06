// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ContentAPI from './content';
import { Content } from './content';
import * as PDFAPI from './pdf';
import { PDF } from './pdf';
import * as ScrapeAPI from './scrape';
import { Scrape } from './scrape';
import * as ScreenshotAPI from './screenshot';
import { Screenshot } from './screenshot';
import * as SnapshotAPI from './snapshot';
import { Snapshot } from './snapshot';

export class BrowserRendering extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  pdf: PDFAPI.PDF = new PDFAPI.PDF(this._client);
  scrape: ScrapeAPI.Scrape = new ScrapeAPI.Scrape(this._client);
  screenshot: ScreenshotAPI.Screenshot = new ScreenshotAPI.Screenshot(this._client);
  snapshot: SnapshotAPI.Snapshot = new SnapshotAPI.Snapshot(this._client);
}

BrowserRendering.Content = Content;
BrowserRendering.PDF = PDF;
BrowserRendering.Scrape = Scrape;
BrowserRendering.Screenshot = Screenshot;
BrowserRendering.Snapshot = Snapshot;

export declare namespace BrowserRendering {
  export { Content as Content };

  export { PDF as PDF };

  export { Scrape as Scrape };

  export { Screenshot as Screenshot };

  export { Snapshot as Snapshot };
}
