// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReportsAPI from './reports/reports';
import { BaseReports, Reports } from './reports/reports';

export class BaseAnalytics extends APIResource {
  static override readonly _key: readonly ['dnsFirewall', 'analytics'] = Object.freeze([
    'dnsFirewall',
    'analytics',
  ] as const);
}
export class Analytics extends BaseAnalytics {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

Analytics.Reports = Reports;
Analytics.BaseReports = BaseReports;

export declare namespace Analytics {
  export { Reports as Reports, BaseReports as BaseReports };
}
