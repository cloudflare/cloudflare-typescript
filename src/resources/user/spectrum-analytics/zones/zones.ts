// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReportsAPI from './reports';
import { BaseReports, ReportGetParams, ReportGetResponse, Reports } from './reports';

export class BaseZones extends APIResource {
  static override readonly _key: readonly ['user', 'spectrumAnalytics', 'zones'] = Object.freeze([
    'user',
    'spectrumAnalytics',
    'zones',
  ] as const);
}
export class Zones extends BaseZones {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

Zones.Reports = Reports;
Zones.BaseReports = BaseReports;

export declare namespace Zones {
  export {
    Reports as Reports,
    BaseReports as BaseReports,
    type ReportGetResponse as ReportGetResponse,
    type ReportGetParams as ReportGetParams,
  };
}
