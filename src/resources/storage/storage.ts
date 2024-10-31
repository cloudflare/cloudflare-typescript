// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AnalyticsAPI from './analytics';
import { Analytics, AnalyticsListParams, AnalyticsStoredParams, Components, Schema } from './analytics';

export class Storage extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

Storage.Analytics = Analytics;

export declare namespace Storage {
  export {
    Analytics as Analytics,
    type Components as Components,
    type Schema as Schema,
    type AnalyticsListParams as AnalyticsListParams,
    type AnalyticsStoredParams as AnalyticsStoredParams,
  };
}
