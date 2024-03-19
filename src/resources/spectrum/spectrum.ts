// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AppsAPI from 'cloudflare/resources/spectrum/apps';
import * as AnalyticsAPI from 'cloudflare/resources/spectrum/analytics/analytics';

export class Spectrum extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

export namespace Spectrum {
  export import Analytics = AnalyticsAPI.Analytics;
  export import Apps = AppsAPI.Apps;
  export import AppCreateResponse = AppsAPI.AppCreateResponse;
  export import AppUpdateResponse = AppsAPI.AppUpdateResponse;
  export import AppListResponse = AppsAPI.AppListResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppGetResponse = AppsAPI.AppGetResponse;
  export import AppListResponsesV4PagePaginationArray = AppsAPI.AppListResponsesV4PagePaginationArray;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import AppListParams = AppsAPI.AppListParams;
}
