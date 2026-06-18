// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DMARCReportsAPI from './dmarc-reports';
import {
  BaseDMARCReports,
  DMARCReportEditParams,
  DMARCReportEditResponse,
  DMARCReportGetParams,
  DMARCReportGetResponse,
  DMARCReports,
} from './dmarc-reports';
import * as SPFAPI from './spf/spf';
import { BaseSPF, SPF } from './spf/spf';

export class BaseEmailAuth extends APIResource {
  static override readonly _key: readonly ['emailAuth'] = Object.freeze(['emailAuth'] as const);
}
export class EmailAuth extends BaseEmailAuth {
  dmarcReports: DMARCReportsAPI.DMARCReports = new DMARCReportsAPI.DMARCReports(this._client);
  spf: SPFAPI.SPF = new SPFAPI.SPF(this._client);
}

EmailAuth.DMARCReports = DMARCReports;
EmailAuth.BaseDMARCReports = BaseDMARCReports;
EmailAuth.SPF = SPF;
EmailAuth.BaseSPF = BaseSPF;

export declare namespace EmailAuth {
  export {
    DMARCReports as DMARCReports,
    BaseDMARCReports as BaseDMARCReports,
    type DMARCReportEditResponse as DMARCReportEditResponse,
    type DMARCReportGetResponse as DMARCReportGetResponse,
    type DMARCReportEditParams as DMARCReportEditParams,
    type DMARCReportGetParams as DMARCReportGetParams,
  };

  export { SPF as SPF, BaseSPF as BaseSPF };
}
