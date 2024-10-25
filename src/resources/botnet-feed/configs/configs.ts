// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ASNAPI from './asn';

export class Configs extends APIResource {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
}

export namespace Configs {
  export import ASN = ASNAPI.ASN;
  export type ASNDeleteResponse = ASNAPI.ASNDeleteResponse;
  export type ASNGetResponse = ASNAPI.ASNGetResponse;
  export type ASNDeleteParams = ASNAPI.ASNDeleteParams;
  export type ASNGetParams = ASNAPI.ASNGetParams;
}
