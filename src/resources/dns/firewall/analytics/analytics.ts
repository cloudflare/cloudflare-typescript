// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as AnalyticsAPI from './analytics';
import * as ReportsAPI from './reports/reports';

export class Analytics extends APIResource {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

/**
 * Unit of time to group data by.
 */
export type Delta =
  | 'all'
  | 'auto'
  | 'year'
  | 'quarter'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'dekaminute'
  | 'minute';

/**
 * Unit of time to group data by.
 */
export type DeltaParam =
  | 'all'
  | 'auto'
  | 'year'
  | 'quarter'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'dekaminute'
  | 'minute';

export namespace Analytics {
  export import Delta = AnalyticsAPI.Delta;
  export import Reports = ReportsAPI.Reports;
  export import ReportGetParams = ReportsAPI.ReportGetParams;
}
