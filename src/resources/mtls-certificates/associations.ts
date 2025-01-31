// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Associations extends APIResource {
  /**
   * Lists all active associations between the certificate and Cloudflare services.
   */
  get(
    mtlsCertificateId: string,
    params: AssociationGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CertificateAsssociationsSinglePage, CertificateAsssociation> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/mtls_certificates/${mtlsCertificateId}/associations`,
      CertificateAsssociationsSinglePage,
      options,
    );
  }
}

export class CertificateAsssociationsSinglePage extends SinglePage<CertificateAsssociation> {}

export interface CertificateAsssociation {
  /**
   * The service using the certificate.
   */
  service?: string;

  /**
   * Certificate deployment status for the given service.
   */
  status?: string;
}

export interface AssociationGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Associations.CertificateAsssociationsSinglePage = CertificateAsssociationsSinglePage;

export declare namespace Associations {
  export {
    type CertificateAsssociation as CertificateAsssociation,
    CertificateAsssociationsSinglePage as CertificateAsssociationsSinglePage,
    type AssociationGetParams as AssociationGetParams,
  };
}
