// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as SubnetsAPI from './subnets';
import { SubnetGetParams, SubnetGetResponse, Subnets } from './subnets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ASN extends APIResource {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);

  /**
   * Gets an overview of the Autonomous System Number (ASN) and a list of subnets for
   * it.
   */
  get(asn: Shared.ASNParam, params: ASNGetParams, options?: RequestOptions): APIPromise<Shared.ASN> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/intel/asn/${asn}`, options) as APIPromise<{
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

ASN.Subnets = Subnets;

export declare namespace ASN {
  export { type ASNGetParams as ASNGetParams };

  export {
    Subnets as Subnets,
    type SubnetGetResponse as SubnetGetResponse,
    type SubnetGetParams as SubnetGetParams,
  };
}
