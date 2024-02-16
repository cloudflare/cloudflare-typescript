// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BytimesAPI from 'cloudflare/resources/spectrums/analytics/events/bytimes';
import * as SummariesAPI from 'cloudflare/resources/spectrums/analytics/events/summaries';

export class Events extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
}

export namespace Events {
  export import Bytimes = BytimesAPI.Bytimes;
  export import BytimeSpectrumAnalyticsByTimeGetAnalyticsByTimeResponse = BytimesAPI.BytimeSpectrumAnalyticsByTimeGetAnalyticsByTimeResponse;
  export import BytimeSpectrumAnalyticsByTimeGetAnalyticsByTimeParams = BytimesAPI.BytimeSpectrumAnalyticsByTimeGetAnalyticsByTimeParams;
  export import Summaries = SummariesAPI.Summaries;
  export import SummarySpectrumAnalyticsSummaryGetAnalyticsSummaryResponse = SummariesAPI.SummarySpectrumAnalyticsSummaryGetAnalyticsSummaryResponse;
  export import SummarySpectrumAnalyticsSummaryGetAnalyticsSummaryParams = SummariesAPI.SummarySpectrumAnalyticsSummaryGetAnalyticsSummaryParams;
}
