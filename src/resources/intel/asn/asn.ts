// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as SubnetsAPI from './subnets';
import { BaseSubnets, SubnetGetParams, SubnetGetResponse, Subnets } from './subnets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseASN extends APIResource {
  static override readonly _key: readonly ['intel', 'asn'] = Object.freeze(['intel', 'asn'] as const);

  /**
   * Gets an overview of the Autonomous System Number (ASN) and a list of subnets for
   * it.
   *
   * @example
   * ```ts
   * const asn = await client.intel.asn.get(0, {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
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
export class ASN extends BaseASN {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);
}

export interface ASNGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

ASN.Subnets = Subnets;
ASN.BaseSubnets = BaseSubnets;

export declare namespace ASN {
  export { type ASNGetParams as ASNGetParams };

  export {
    Subnets as Subnets,
    BaseSubnets as BaseSubnets,
    type SubnetGetResponse as SubnetGetResponse,
    type SubnetGetParams as SubnetGetParams,
  };
}
