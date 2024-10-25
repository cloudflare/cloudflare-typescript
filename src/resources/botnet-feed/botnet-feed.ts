// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ASNAPI from './asn';
import * as ConfigsAPI from './configs/configs';

export class BotnetFeed extends APIResource {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export namespace BotnetFeed {
  export import ASN = ASNAPI.ASN;
  export type ASNDayReportResponse = ASNAPI.ASNDayReportResponse;
  export type ASNFullReportResponse = ASNAPI.ASNFullReportResponse;
  export type ASNDayReportParams = ASNAPI.ASNDayReportParams;
  export type ASNFullReportParams = ASNAPI.ASNFullReportParams;
  export import Configs = ConfigsAPI.Configs;
}
