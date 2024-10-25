// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AnalyticsAPI from './analytics';

export class Storage extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

export namespace Storage {
  export import Analytics = AnalyticsAPI.Analytics;
  export type Components = AnalyticsAPI.Components;
  export type Schema = AnalyticsAPI.Schema;
  export type AnalyticsListParams = AnalyticsAPI.AnalyticsListParams;
  export type AnalyticsStoredParams = AnalyticsAPI.AnalyticsStoredParams;
}
