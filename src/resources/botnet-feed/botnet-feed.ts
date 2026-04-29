// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ASNAPI from './asn';
import { ASN, BaseASN } from './asn';
import * as ConfigsAPI from './configs/configs';
import { BaseConfigs, Configs } from './configs/configs';

export class BaseBotnetFeed extends APIResource {
  static override readonly _key: readonly ['botnetFeed'] = Object.freeze(['botnetFeed'] as const);
}
export class BotnetFeed extends BaseBotnetFeed {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

BotnetFeed.ASN = ASN;
BotnetFeed.BaseASN = BaseASN;
BotnetFeed.Configs = Configs;
BotnetFeed.BaseConfigs = BaseConfigs;

export declare namespace BotnetFeed {
  export { ASN as ASN, BaseASN as BaseASN };

  export { Configs as Configs, BaseConfigs as BaseConfigs };
}
