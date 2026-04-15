// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ASNAPI from './asn';
import { ASN, ASNDeleteParams, ASNDeleteResponse, ASNGetParams, ASNGetResponse, BaseASN } from './asn';

export class BaseConfigs extends APIResource {
  static override readonly _key: readonly ['botnetFeed', 'configs'] = Object.freeze([
    'botnetFeed',
    'configs',
  ] as const);
}
export class Configs extends BaseConfigs {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
}

Configs.ASN = ASN;
Configs.BaseASN = BaseASN;

export declare namespace Configs {
  export {
    ASN as ASN,
    BaseASN as BaseASN,
    type ASNDeleteResponse as ASNDeleteResponse,
    type ASNGetResponse as ASNGetResponse,
    type ASNDeleteParams as ASNDeleteParams,
    type ASNGetParams as ASNGetParams,
  };
}
