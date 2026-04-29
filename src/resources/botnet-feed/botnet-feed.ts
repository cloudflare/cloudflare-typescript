// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ASNAPI from './asn';
import { ASN } from './asn';
import * as ConfigsAPI from './configs/configs';
import { Configs } from './configs/configs';

export class BotnetFeed extends APIResource {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

BotnetFeed.ASN = ASN;
BotnetFeed.Configs = Configs;

export declare namespace BotnetFeed {
  export { ASN as ASN };

  export { Configs as Configs };
}
