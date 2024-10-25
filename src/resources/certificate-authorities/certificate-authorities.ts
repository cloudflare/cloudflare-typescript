// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HostnameAssociationsAPI from './hostname-associations';

export class CertificateAuthorities extends APIResource {
  hostnameAssociations: HostnameAssociationsAPI.HostnameAssociations =
    new HostnameAssociationsAPI.HostnameAssociations(this._client);
}

export namespace CertificateAuthorities {
  export import HostnameAssociations = HostnameAssociationsAPI.HostnameAssociations;
  export type HostnameAssociation = HostnameAssociationsAPI.HostnameAssociation;
  export type TLSHostnameAssociation = HostnameAssociationsAPI.TLSHostnameAssociation;
  export type HostnameAssociationUpdateResponse = HostnameAssociationsAPI.HostnameAssociationUpdateResponse;
  export type HostnameAssociationGetResponse = HostnameAssociationsAPI.HostnameAssociationGetResponse;
  export type HostnameAssociationUpdateParams = HostnameAssociationsAPI.HostnameAssociationUpdateParams;
  export type HostnameAssociationGetParams = HostnameAssociationsAPI.HostnameAssociationGetParams;
}
