// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AsnAPI from 'cloudflare/resources/intels/asn/asn';
import * as SubnetsAPI from 'cloudflare/resources/intels/asn/subnets';

export class Asn extends APIResource {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);

  /**
   * Get ASN Overview
   */
  get(accountId: string, asn: number, options?: Core.RequestOptions): Core.APIPromise<AsnGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/intel/asn/${asn}`, options) as Core.APIPromise<{
        result: AsnGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AsnGetResponse = number;

export namespace Asn {
  export import AsnGetResponse = AsnAPI.AsnGetResponse;
  export import Subnets = SubnetsAPI.Subnets;
  export import SubnetListResponse = SubnetsAPI.SubnetListResponse;
}
