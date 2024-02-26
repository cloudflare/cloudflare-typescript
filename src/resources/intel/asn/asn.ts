// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ASNAPI from 'cloudflare/resources/intel/asn/asn';
import * as SubnetsAPI from 'cloudflare/resources/intel/asn/subnets';

export class ASN extends APIResource {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);

  /**
   * Get ASN Overview
   */
  get(asn: number, params: ASNGetParams, options?: Core.RequestOptions): Core.APIPromise<ASNGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/asn/${asn}`, options) as Core.APIPromise<{
        result: ASNGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ASNGetResponse = number;

export interface ASNGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ASN {
  export import ASNGetResponse = ASNAPI.ASNGetResponse;
  export import ASNGetParams = ASNAPI.ASNGetParams;
  export import Subnets = SubnetsAPI.Subnets;
  export import SubnetListResponse = SubnetsAPI.SubnetListResponse;
  export import SubnetListParams = SubnetsAPI.SubnetListParams;
}
