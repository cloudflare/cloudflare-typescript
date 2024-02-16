// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ReportsAPI from 'cloudflare/resources/dns-firewalls/dns-analytics/reports/reports';

export class DNSAnalytics extends APIResource {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

export namespace DNSAnalytics {
  export import Reports = ReportsAPI.Reports;
  export import ReportListResponse = ReportsAPI.ReportListResponse;
  export import ReportListParams = ReportsAPI.ReportListParams;
}
