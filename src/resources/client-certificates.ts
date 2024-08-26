// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as ClientCertificatesAPI from './client-certificates';
import * as CustomCertificatesAPI from './custom-certificates/custom-certificates';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../pagination';

export class ClientCertificates extends APIResource {
  /**
   * Create a new API Shield mTLS Client Certificate
   */
  create(params: ClientCertificateCreateParams, options?: Core.RequestOptions): Core.APIPromise<ClientCertificate> {
    const { zone_id, ...body } = params;
    return (this._client.post(`/zones/${zone_id}/client_certificates`, { body, ...options }) as Core.APIPromise<{ result: ClientCertificate }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all of your Zone's API Shield mTLS Client Certificates by Status and/or
   * using Pagination
   */
  list(params: ClientCertificateListParams, options?: Core.RequestOptions): Core.PagePromise<ClientCertificatesV4PagePaginationArray, ClientCertificate> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/client_certificates`, ClientCertificatesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Set a API Shield mTLS Client Certificate to pending_revocation status for
   * processing to revoked status.
   */
  delete(clientCertificateId: string, params: ClientCertificateDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ClientCertificate> {
    const { zone_id } = params;
    return (this._client.delete(`/zones/${zone_id}/client_certificates/${clientCertificateId}`, options) as Core.APIPromise<{ result: ClientCertificate }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * If a API Shield mTLS Client Certificate is in a pending_revocation state, you
   * may reactivate it with this endpoint.
   */
  edit(clientCertificateId: string, params: ClientCertificateEditParams, options?: Core.RequestOptions): Core.APIPromise<ClientCertificate> {
    const { zone_id } = params;
    return (this._client.patch(`/zones/${zone_id}/client_certificates/${clientCertificateId}`, options) as Core.APIPromise<{ result: ClientCertificate }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Details for a single mTLS API Shield Client Certificate
   */
  get(clientCertificateId: string, params: ClientCertificateGetParams, options?: Core.RequestOptions): Core.APIPromise<ClientCertificate> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/client_certificates/${clientCertificateId}`, options) as Core.APIPromise<{ result: ClientCertificate }>)._thenUnwrap((obj) => obj.result);
  }
}

export class ClientCertificatesV4PagePaginationArray extends V4PagePaginationArray<ClientCertificate> {
}

export interface ClientCertificate {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The Client Certificate PEM
   */
  certificate?: string;

  /**
   * Certificate Authority used to issue the Client Certificate
   */
  certificate_authority?: ClientCertificate.CertificateAuthority;

  /**
   * Common Name of the Client Certificate
   */
  common_name?: string;

  /**
   * Country, provided by the CSR
   */
  country?: string;

  /**
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr?: string;

  /**
   * Date that the Client Certificate expires
   */
  expires_on?: string;

  /**
   * Unique identifier of the Client Certificate
   */
  fingerprint_sha256?: string;

  /**
   * Date that the Client Certificate was issued by the Certificate Authority
   */
  issued_on?: string;

  /**
   * Location, provided by the CSR
   */
  location?: string;

  /**
   * Organization, provided by the CSR
   */
  organization?: string;

  /**
   * Organizational Unit, provided by the CSR
   */
  organizational_unit?: string;

  /**
   * The serial number on the created Client Certificate.
   */
  serial_number?: string;

  /**
   * The type of hash used for the Client Certificate..
   */
  signature?: string;

  /**
   * Subject Key Identifier
   */
  ski?: string;

  /**
   * State, provided by the CSR
   */
  state?: string;

  /**
   * Client Certificates may be active or revoked, and the pending_reactivation or
   * pending_revocation represent in-progress asynchronous transitions
   */
  status?: CustomCertificatesAPI.Status;

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days?: number;
}

export namespace ClientCertificate {
  /**
   * Certificate Authority used to issue the Client Certificate
   */
  export interface CertificateAuthority {
    id?: string;

    name?: string;
  }
}

export interface ClientCertificateCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr: string;

  /**
   * Body param: The number of days the Client Certificate will be valid after the
   * issued_on date
   */
  validity_days: number;
}

export interface ClientCertificateListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Limit to the number of records returned.
   */
  limit?: number;

  /**
   * Query param: Offset the results
   */
  offset?: number;

  /**
   * Query param: Client Certitifcate Status to filter results by.
   */
  status?: 'all' | 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';
}

export interface ClientCertificateDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ClientCertificateEditParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ClientCertificateGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}
