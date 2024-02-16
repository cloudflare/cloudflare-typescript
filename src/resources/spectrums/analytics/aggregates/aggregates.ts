// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as CurrentsAPI from 'cloudflare/resources/spectrums/analytics/aggregates/currents';

export class Aggregates extends APIResource {
  currents: CurrentsAPI.Currents = new CurrentsAPI.Currents(this._client);
}

export namespace Aggregates {
  export import Currents = CurrentsAPI.Currents;
  export import CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse = CurrentsAPI.CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse;
  export import CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsParams = CurrentsAPI.CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsParams;
}
