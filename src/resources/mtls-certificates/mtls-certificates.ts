// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssociationsAPI from './associations';
import { Associations, BaseAssociations } from './associations';

export class BaseMTLSCertificates extends APIResource {
  static override readonly _key: readonly ['mtlsCertificates'] = Object.freeze(['mtlsCertificates'] as const);
}
export class MTLSCertificates extends BaseMTLSCertificates {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
}

MTLSCertificates.Associations = Associations;
MTLSCertificates.BaseAssociations = BaseAssociations;

export declare namespace MTLSCertificates {
  export { Associations as Associations, BaseAssociations as BaseAssociations };
}
