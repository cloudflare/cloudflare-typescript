// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ClientCertificatesAPI from 'cloudflare/resources/client-certificates';

export class ClientCertificates extends APIResource {
  /**
   * If a API Shield mTLS Client Certificate is in a pending_revocation state, you
   * may reactivate it with this endpoint.
   */
  update(
    zoneId: string,
    clientCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateUpdateResponse> {
    return (
      this._client.patch(
        `/zones/${zoneId}/client_certificates/${clientCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: ClientCertificateUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
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
   * Create a new API Shield mTLS Client Certificate
   */
  clientCertificateForAZoneCreateClientCertificate(
    zoneId: string,
    body: ClientCertificateClientCertificateForAZoneCreateClientCertificateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/client_certificates`, { body, ...options }) as Core.APIPromise<{
        result: ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all of your Zone's API Shield mTLS Client Certificates by Status and/or
   * using Pagination
   */
  clientCertificateForAZoneListClientCertificates(
    zoneId: string,
    query?: ClientCertificateClientCertificateForAZoneListClientCertificatesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateClientCertificateForAZoneListClientCertificatesResponse | null>;
  clientCertificateForAZoneListClientCertificates(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateClientCertificateForAZoneListClientCertificatesResponse | null>;
  clientCertificateForAZoneListClientCertificates(
    zoneId: string,
    query: ClientCertificateClientCertificateForAZoneListClientCertificatesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateClientCertificateForAZoneListClientCertificatesResponse | null> {
    if (isRequestOptions(query)) {
      return this.clientCertificateForAZoneListClientCertificates(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/client_certificates`, { query, ...options }) as Core.APIPromise<{
        result: ClientCertificateClientCertificateForAZoneListClientCertificatesResponse | null;
      }>
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

export interface ClientCertificateUpdateResponse {
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
  certificate_authority?: ClientCertificateUpdateResponse.CertificateAuthority;

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

export namespace ClientCertificateUpdateResponse {
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

export interface ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse {
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
  certificate_authority?: ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse.CertificateAuthority;

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

export namespace ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse {
  /**
   * Certificate Authority used to issue the Client Certificate
   */
  export interface CertificateAuthority {
    id?: string;

    name?: string;
  }
}

export type ClientCertificateClientCertificateForAZoneListClientCertificatesResponse =
  Array<ClientCertificateClientCertificateForAZoneListClientCertificatesResponse.ClientCertificateClientCertificateForAZoneListClientCertificatesResponseItem>;

export namespace ClientCertificateClientCertificateForAZoneListClientCertificatesResponse {
  export interface ClientCertificateClientCertificateForAZoneListClientCertificatesResponseItem {
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
    certificate_authority?: ClientCertificateClientCertificateForAZoneListClientCertificatesResponseItem.CertificateAuthority;

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

  export namespace ClientCertificateClientCertificateForAZoneListClientCertificatesResponseItem {
    /**
     * Certificate Authority used to issue the Client Certificate
     */
    export interface CertificateAuthority {
      id?: string;

      name?: string;
    }
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

export interface ClientCertificateClientCertificateForAZoneCreateClientCertificateParams {
  /**
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr: string;

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days: number;
}

export interface ClientCertificateClientCertificateForAZoneListClientCertificatesParams {
  /**
   * Limit to the number of records returned.
   */
  limit?: number;

  /**
   * Offset the results
   */
  offset?: number;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of records per page.
   */
  per_page?: number;

  /**
   * Client Certitifcate Status to filter results by.
   */
  status?: 'all' | 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';
}

export namespace ClientCertificates {
  export import ClientCertificateUpdateResponse = ClientCertificatesAPI.ClientCertificateUpdateResponse;
  export import ClientCertificateDeleteResponse = ClientCertificatesAPI.ClientCertificateDeleteResponse;
  export import ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesResponse = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneListClientCertificatesResponse;
  export import ClientCertificateGetResponse = ClientCertificatesAPI.ClientCertificateGetResponse;
  export import ClientCertificateClientCertificateForAZoneCreateClientCertificateParams = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneCreateClientCertificateParams;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesParams = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneListClientCertificatesParams;
}
