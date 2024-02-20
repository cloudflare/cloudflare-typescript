// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ClientCertificatesAPI from 'cloudflare/resources/client-certificates';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class ClientCertificates extends APIResource {
  /**
   * Create a new API Shield mTLS Client Certificate
   */
  create(
    zoneId: string,
    body: ClientCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/client_certificates`, { body, ...options }) as Core.APIPromise<{
        result: ClientCertificateCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all of your Zone's API Shield mTLS Client Certificates by Status and/or
   * using Pagination
   */
  list(
    zoneId: string,
    query?: ClientCertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ClientCertificateListResponsesV4PagePaginationArray, ClientCertificateListResponse>;
  list(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ClientCertificateListResponsesV4PagePaginationArray, ClientCertificateListResponse>;
  list(
    zoneId: string,
    query: ClientCertificateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ClientCertificateListResponsesV4PagePaginationArray, ClientCertificateListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneId}/client_certificates`,
      ClientCertificateListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Set a API Shield mTLS Client Certificate to pending_revocation status for
   * processing to revoked status.
   */
  delete(
    zoneId: string,
    clientCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneId}/client_certificates/${clientCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: ClientCertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * If a API Shield mTLS Client Certificate is in a pending_revocation state, you
   * may reactivate it with this endpoint.
   */
  edit(
    zoneId: string,
    clientCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateEditResponse> {
    return (
      this._client.patch(
        `/zones/${zoneId}/client_certificates/${clientCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: ClientCertificateEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Details for a single mTLS API Shield Client Certificate
   */
  get(
    zoneId: string,
    clientCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/client_certificates/${clientCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: ClientCertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ClientCertificateListResponsesV4PagePaginationArray extends V4PagePaginationArray<ClientCertificateListResponse> {}

export interface ClientCertificateCreateResponse {
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
  certificate_authority?: ClientCertificateCreateResponse.CertificateAuthority;

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
  status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days?: number;
}

export namespace ClientCertificateCreateResponse {
  /**
   * Certificate Authority used to issue the Client Certificate
   */
  export interface CertificateAuthority {
    id?: string;

    name?: string;
  }
}

export interface ClientCertificateListResponse {
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
  certificate_authority?: ClientCertificateListResponse.CertificateAuthority;

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
  status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days?: number;
}

export namespace ClientCertificateListResponse {
  /**
   * Certificate Authority used to issue the Client Certificate
   */
  export interface CertificateAuthority {
    id?: string;

    name?: string;
  }
}

export interface ClientCertificateDeleteResponse {
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
  certificate_authority?: ClientCertificateDeleteResponse.CertificateAuthority;

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
  status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days?: number;
}

export namespace ClientCertificateDeleteResponse {
  /**
   * Certificate Authority used to issue the Client Certificate
   */
  export interface CertificateAuthority {
    id?: string;

    name?: string;
  }
}

export interface ClientCertificateEditResponse {
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
  certificate_authority?: ClientCertificateEditResponse.CertificateAuthority;

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
  status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days?: number;
}

export namespace ClientCertificateEditResponse {
  /**
   * Certificate Authority used to issue the Client Certificate
   */
  export interface CertificateAuthority {
    id?: string;

    name?: string;
  }
}

export interface ClientCertificateGetResponse {
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
  certificate_authority?: ClientCertificateGetResponse.CertificateAuthority;

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
  status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days?: number;
}

export namespace ClientCertificateGetResponse {
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
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr: string;

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days: number;
}

export interface ClientCertificateListParams extends V4PagePaginationArrayParams {
  /**
   * Limit to the number of records returned.
   */
  limit?: number;

  /**
   * Offset the results
   */
  offset?: number;

  /**
   * Client Certitifcate Status to filter results by.
   */
  status?: 'all' | 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';
}

export namespace ClientCertificates {
  export import ClientCertificateCreateResponse = ClientCertificatesAPI.ClientCertificateCreateResponse;
  export import ClientCertificateListResponse = ClientCertificatesAPI.ClientCertificateListResponse;
  export import ClientCertificateDeleteResponse = ClientCertificatesAPI.ClientCertificateDeleteResponse;
  export import ClientCertificateEditResponse = ClientCertificatesAPI.ClientCertificateEditResponse;
  export import ClientCertificateGetResponse = ClientCertificatesAPI.ClientCertificateGetResponse;
  export import ClientCertificateListResponsesV4PagePaginationArray = ClientCertificatesAPI.ClientCertificateListResponsesV4PagePaginationArray;
  export import ClientCertificateCreateParams = ClientCertificatesAPI.ClientCertificateCreateParams;
  export import ClientCertificateListParams = ClientCertificatesAPI.ClientCertificateListParams;
}
