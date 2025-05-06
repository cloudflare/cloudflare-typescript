// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Associations extends APIResource {
  /**
   * Lists all active associations between the certificate and Cloudflare services.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const certificateAsssociation of client.mtlsCertificates.associations.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    mtlsCertificateID: string,
    params: AssociationGetParams,
    options?: RequestOptions,
  ): PagePromise<CertificateAsssociationsSinglePage, CertificateAsssociation> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/mtls_certificates/${mtlsCertificateID}/associations`,
      SinglePage<CertificateAsssociation>,
      options,
    );
  }
}

export type CertificateAsssociationsSinglePage = SinglePage<CertificateAsssociation>;

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
   * Identifier.
   */
  account_id: string;
}

export declare namespace Associations {
  export {
    type CertificateAsssociation as CertificateAsssociation,
    type CertificateAsssociationsSinglePage as CertificateAsssociationsSinglePage,
    type AssociationGetParams as AssociationGetParams,
  };
}
