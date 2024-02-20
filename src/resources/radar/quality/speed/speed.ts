// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HistogramAPI from 'cloudflare/resources/radar/quality/speed/histogram';
import * as SummaryAPI from 'cloudflare/resources/radar/quality/speed/summary';
import * as TopAPI from 'cloudflare/resources/radar/quality/speed/top/top';

export class Speed extends APIResource {
  histogram: HistogramAPI.Histogram = new HistogramAPI.Histogram(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export namespace Speed {
  export import Histogram = HistogramAPI.Histogram;
  export import HistogramListResponse = HistogramAPI.HistogramListResponse;
  export import HistogramListParams = HistogramAPI.HistogramListParams;
  export import Summary = SummaryAPI.Summary;
  export import SummaryListResponse = SummaryAPI.SummaryListResponse;
  export import SummaryListParams = SummaryAPI.SummaryListParams;
  export import Top = TopAPI.Top;
}
