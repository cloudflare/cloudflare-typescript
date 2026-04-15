// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HostnameAssociationsAPI from './hostname-associations';
import {
  BaseHostnameAssociations,
  HostnameAssociation,
  HostnameAssociationGetParams,
  HostnameAssociationGetResponse,
  HostnameAssociationUpdateParams,
  HostnameAssociationUpdateResponse,
  HostnameAssociations,
  TLSHostnameAssociation,
} from './hostname-associations';

export class BaseCertificateAuthorities extends APIResource {
  static override readonly _key: readonly ['certificateAuthorities'] = Object.freeze([
    'certificateAuthorities',
  ] as const);
}
export class CertificateAuthorities extends BaseCertificateAuthorities {
  hostnameAssociations: HostnameAssociationsAPI.HostnameAssociations =
    new HostnameAssociationsAPI.HostnameAssociations(this._client);
}

CertificateAuthorities.HostnameAssociations = HostnameAssociations;
CertificateAuthorities.BaseHostnameAssociations = BaseHostnameAssociations;

export declare namespace CertificateAuthorities {
  export {
    HostnameAssociations as HostnameAssociations,
    BaseHostnameAssociations as BaseHostnameAssociations,
    type HostnameAssociation as HostnameAssociation,
    type TLSHostnameAssociation as TLSHostnameAssociation,
    type HostnameAssociationUpdateResponse as HostnameAssociationUpdateResponse,
    type HostnameAssociationGetResponse as HostnameAssociationGetResponse,
    type HostnameAssociationUpdateParams as HostnameAssociationUpdateParams,
    type HostnameAssociationGetParams as HostnameAssociationGetParams,
  };
}
