// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ASNAPI from 'cloudflare/resources/intel/asn/asn';
import * as SubnetsAPI from 'cloudflare/resources/intel/asn/subnets';

export class ASNResource extends APIResource {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);

  /**
   * Get ASN Overview
   */
  get(asn: ASN, params: ASNGetParams, options?: Core.RequestOptions): Core.APIPromise<ASN> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/asn/${asn}`, options) as Core.APIPromise<{
        result: ASN;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ASN = number;

export interface ASNGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ASNResource {
  export import ASN = ASNAPI.ASN;
  export import ASNGetParams = ASNAPI.ASNGetParams;
  export import Subnets = SubnetsAPI.Subnets;
  export import SubnetGetResponse = SubnetsAPI.SubnetGetResponse;
  export import SubnetGetParams = SubnetsAPI.SubnetGetParams;
}
