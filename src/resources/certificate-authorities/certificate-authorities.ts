// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HostnameAssociationsAPI from 'cloudflare/resources/certificate-authorities/hostname-associations';

export class CertificateAuthorities extends APIResource {
  hostnameAssociations: HostnameAssociationsAPI.HostnameAssociations =
    new HostnameAssociationsAPI.HostnameAssociations(this._client);
}

export namespace CertificateAuthorities {
  export import HostnameAssociations = HostnameAssociationsAPI.HostnameAssociations;
  export import HostnameAssociationListResponse = HostnameAssociationsAPI.HostnameAssociationListResponse;
  export import HostnameAssociationReplaceResponse = HostnameAssociationsAPI.HostnameAssociationReplaceResponse;
  export import HostnameAssociationListParams = HostnameAssociationsAPI.HostnameAssociationListParams;
  export import HostnameAssociationReplaceParams = HostnameAssociationsAPI.HostnameAssociationReplaceParams;
}
