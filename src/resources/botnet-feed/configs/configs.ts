// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ASNAPI from './asn';

export class Configs extends APIResource {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
}

export namespace Configs {
  export import ASN = ASNAPI.ASN;
  export import ASNDeleteResponse = ASNAPI.ASNDeleteResponse;
  export import ASNGetResponse = ASNAPI.ASNGetResponse;
  export import ASNDeleteParams = ASNAPI.ASNDeleteParams;
  export import ASNGetParams = ASNAPI.ASNGetParams;
}
