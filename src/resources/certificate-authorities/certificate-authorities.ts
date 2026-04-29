// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HostnameAssociationsAPI from './hostname-associations';
import { HostnameAssociations } from './hostname-associations';

export class CertificateAuthorities extends APIResource {
  hostnameAssociations: HostnameAssociationsAPI.HostnameAssociations =
    new HostnameAssociationsAPI.HostnameAssociations(this._client);
}

CertificateAuthorities.HostnameAssociations = HostnameAssociations;

export declare namespace CertificateAuthorities {
  export { HostnameAssociations as HostnameAssociations };
}
