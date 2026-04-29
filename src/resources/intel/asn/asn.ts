// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubnetsAPI from './subnets';
import { BaseSubnets, Subnets } from './subnets';

export class BaseASN extends APIResource {
  static override readonly _key: readonly ['intel', 'asn'] = Object.freeze(['intel', 'asn'] as const);
}
export class ASN extends BaseASN {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);
}

ASN.Subnets = Subnets;
ASN.BaseSubnets = BaseSubnets;

export declare namespace ASN {
  export { Subnets as Subnets, BaseSubnets as BaseSubnets };
}
