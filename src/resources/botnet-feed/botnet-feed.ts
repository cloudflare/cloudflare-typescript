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
  export import ASNDayReportResponse = ASNAPI.ASNDayReportResponse;
  export import ASNFullReportResponse = ASNAPI.ASNFullReportResponse;
  export import ASNDayReportParams = ASNAPI.ASNDayReportParams;
  export import ASNFullReportParams = ASNAPI.ASNFullReportParams;
  export import Configs = ConfigsAPI.Configs;
}
