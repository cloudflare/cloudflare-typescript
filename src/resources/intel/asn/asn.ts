// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ASNAPI from './asn';
import * as Shared from '../../shared';
import * as SubnetsAPI from './subnets';

export class ASN extends APIResource {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);

  /**
   * Get ASN Overview
   */
  get(
    asn: Shared.ASNParam,
    params: ASNGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ASN> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/asn/${asn}`, options) as Core.APIPromise<{
        result: Shared.ASN;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ASNGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ASN {
  export import ASNGetParams = ASNAPI.ASNGetParams;
  export import Subnets = SubnetsAPI.Subnets;
  export import SubnetGetResponse = SubnetsAPI.SubnetGetResponse;
  export import SubnetGetParams = SubnetsAPI.SubnetGetParams;
}
