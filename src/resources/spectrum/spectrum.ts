// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AppsAPI from './apps';
import { Apps } from './apps';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';

export class Spectrum extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

Spectrum.Analytics = Analytics;
Spectrum.Apps = Apps;

export declare namespace Spectrum {
  export { Analytics as Analytics };

  export { Apps as Apps };
}
