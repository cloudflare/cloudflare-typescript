// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ReportsAPI from './reports';
import { ReportListParams, ReportListResponse, ReportListResponsesSinglePage, Reports } from './reports';

export class Phishguard extends APIResource {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

Phishguard.Reports = Reports;
Phishguard.ReportListResponsesSinglePage = ReportListResponsesSinglePage;

export declare namespace Phishguard {
  export {
    Reports as Reports,
    type ReportListResponse as ReportListResponse,
    ReportListResponsesSinglePage as ReportListResponsesSinglePage,
    type ReportListParams as ReportListParams,
  };
}
