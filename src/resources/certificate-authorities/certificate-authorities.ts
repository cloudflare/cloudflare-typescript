// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HostnameAssociationsAPI from './hostname-associations';

export class CertificateAuthorities extends APIResource {
  hostnameAssociations: HostnameAssociationsAPI.HostnameAssociations =
    new HostnameAssociationsAPI.HostnameAssociations(this._client);
}

export namespace CertificateAuthorities {
  export import HostnameAssociations = HostnameAssociationsAPI.HostnameAssociations;
  export import HostnameAssociation = HostnameAssociationsAPI.HostnameAssociation;
  export import TLSHostnameAssociation = HostnameAssociationsAPI.TLSHostnameAssociation;
  export import HostnameAssociationUpdateResponse = HostnameAssociationsAPI.HostnameAssociationUpdateResponse;
  export import HostnameAssociationGetResponse = HostnameAssociationsAPI.HostnameAssociationGetResponse;
  export import HostnameAssociationUpdateParams = HostnameAssociationsAPI.HostnameAssociationUpdateParams;
  export import HostnameAssociationGetParams = HostnameAssociationsAPI.HostnameAssociationGetParams;
}
