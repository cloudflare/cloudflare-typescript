// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DMARCReportsAPI from './dmarc-reports';
import {
  DMARCReportEditParams,
  DMARCReportEditResponse,
  DMARCReportGetParams,
  DMARCReportGetResponse,
  DMARCReports,
} from './dmarc-reports';
import * as SPFAPI from './spf/spf';
import { SPF } from './spf/spf';

export class EmailAuth extends APIResource {
  dmarcReports: DMARCReportsAPI.DMARCReports = new DMARCReportsAPI.DMARCReports(this._client);
  spf: SPFAPI.SPF = new SPFAPI.SPF(this._client);
}

EmailAuth.DMARCReports = DMARCReports;
EmailAuth.SPF = SPF;

export declare namespace EmailAuth {
  export {
    DMARCReports as DMARCReports,
    type DMARCReportEditResponse as DMARCReportEditResponse,
    type DMARCReportGetResponse as DMARCReportGetResponse,
    type DMARCReportEditParams as DMARCReportEditParams,
    type DMARCReportGetParams as DMARCReportGetParams,
  };

  export { SPF as SPF };
}
