// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AppsAPI from 'cloudflare/resources/spectrums/apps';
import * as AnalyticsAPI from 'cloudflare/resources/spectrums/analytics/analytics';

export class Spectrums extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

export namespace Spectrums {
  export import Analytics = AnalyticsAPI.Analytics;
  export import Apps = AppsAPI.Apps;
  export import AppUpdateResponse = AppsAPI.AppUpdateResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppGetResponse = AppsAPI.AppGetResponse;
  export import AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse = AppsAPI.AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse;
  export import AppSpectrumApplicationsListSpectrumApplicationsResponse = AppsAPI.AppSpectrumApplicationsListSpectrumApplicationsResponse;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams = AppsAPI.AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginParams;
  export import AppSpectrumApplicationsListSpectrumApplicationsParams = AppsAPI.AppSpectrumApplicationsListSpectrumApplicationsParams;
}
