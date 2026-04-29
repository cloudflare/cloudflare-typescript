// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SubnetsAPI from './subnets';
import { Subnets } from './subnets';

export class ASN extends APIResource {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);
}

ASN.Subnets = Subnets;

export declare namespace ASN {
  export { Subnets as Subnets };
}
