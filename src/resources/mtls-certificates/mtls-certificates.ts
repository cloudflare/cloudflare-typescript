// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssociationsAPI from './associations';
import { Associations } from './associations';

export class MTLSCertificates extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
}

MTLSCertificates.Associations = Associations;

export declare namespace MTLSCertificates {
  export { Associations as Associations };
}
