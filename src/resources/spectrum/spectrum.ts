// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import { Apps, BaseApps } from './apps';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics, BaseAnalytics } from './analytics/analytics';

export class BaseSpectrum extends APIResource {
  static override readonly _key: readonly ['spectrum'] = Object.freeze(['spectrum'] as const);
}
export class Spectrum extends BaseSpectrum {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

Spectrum.Analytics = Analytics;
Spectrum.BaseAnalytics = BaseAnalytics;
Spectrum.Apps = Apps;
Spectrum.BaseApps = BaseApps;

export declare namespace Spectrum {
  export { Analytics as Analytics, BaseAnalytics as BaseAnalytics };

  export { Apps as Apps, BaseApps as BaseApps };
}
