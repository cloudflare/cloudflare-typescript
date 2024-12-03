// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ReportsAPI from './reports/reports';
import { ReportGetParams, Reports } from './reports/reports';

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

Analytics.Reports = Reports;

export declare namespace Analytics {
  export { type Delta as Delta };

  export { Reports as Reports, type ReportGetParams as ReportGetParams };
}
