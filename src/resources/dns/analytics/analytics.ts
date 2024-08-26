// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Reports } from './reports/reports';
import * as ReportsAPI from './reports/reports';

export class Analytics extends APIResource {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

export namespace Analytics {
  export import Reports = ReportsAPI.Reports;
  export import Report = ReportsAPI.Report;
  export import ReportGetParams = ReportsAPI.ReportGetParams;
}
