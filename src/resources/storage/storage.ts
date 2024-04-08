// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AnalyticsAPI from 'cloudflare/resources/storage/analytics';

export class Storage extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

export namespace Storage {
  export import Analytics = AnalyticsAPI.Analytics;
  export import Components = AnalyticsAPI.Components;
  export import Schema = AnalyticsAPI.Schema;
  export import UnnamedSchemaRef608bee5065f7314d6fa572b89a1910f7 = AnalyticsAPI.UnnamedSchemaRef608bee5065f7314d6fa572b89a1910f7;
  export import AnalyticsListParams = AnalyticsAPI.AnalyticsListParams;
  export import AnalyticsStoredParams = AnalyticsAPI.AnalyticsStoredParams;
}
