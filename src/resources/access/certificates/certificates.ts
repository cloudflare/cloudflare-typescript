// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/access/certificates/certificates';
import * as SettingsAPI from 'cloudflare/resources/access/certificates/settings';

export class Certificates extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Updates a configured mTLS certificate.
   */
  update(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    body: CertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateUpdateResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/certificates/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an mTLS certificate.
   */
  delete(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateDeleteResponse> {
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/certificates/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: CertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Adds a new mTLS root certificate to Access.
   */
  accessMTLSAuthenticationAddAnMTLSCertificate(
    accountOrZone: string,
    accountOrZoneId: string,
    body: CertificateAccessMTLSAuthenticationAddAnMTLSCertificateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS root certificates.
   */
  accessMTLSAuthenticationListMTLSCertificates(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse | null> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/certificates`,
        options,
      ) as Core.APIPromise<{ result: CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single mTLS certificate.
   */
  get(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateGetResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/certificates/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: CertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CertificateUpdateResponse {
  /**
   * The ID of the application that will use this certificate.
   */
  id?: unknown;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;

  created_at?: string;

  expires_on?: string;

  /**
   * The MD5 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * The name of the certificate.
   */
  name?: string;

  updated_at?: string;
}

export interface CertificateDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse {
  /**
   * The ID of the application that will use this certificate.
   */
  id?: unknown;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;

  created_at?: string;

  expires_on?: string;

  /**
   * The MD5 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * The name of the certificate.
   */
  name?: string;

  updated_at?: string;
}

export type CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse =
  Array<CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse.CertificateAccessMtlsAuthenticationListMtlsCertificatesResponseItem>;

export namespace CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse {
  export interface CertificateAccessMtlsAuthenticationListMtlsCertificatesResponseItem {
    /**
     * The ID of the application that will use this certificate.
     */
    id?: unknown;

    /**
     * The hostnames of the applications that will use this certificate.
     */
    associated_hostnames?: Array<string>;

    created_at?: string;

    expires_on?: string;

    /**
     * The MD5 fingerprint of the certificate.
     */
    fingerprint?: string;

    /**
     * The name of the certificate.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface CertificateGetResponse {
  /**
   * The ID of the application that will use this certificate.
   */
  id?: unknown;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;

  created_at?: string;

  expires_on?: string;

  /**
   * The MD5 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * The name of the certificate.
   */
  name?: string;

  updated_at?: string;
}

export interface CertificateUpdateParams {
  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames: Array<string>;

  /**
   * The name of the certificate.
   */
  name?: string;
}

export interface CertificateAccessMTLSAuthenticationAddAnMTLSCertificateParams {
  /**
   * The certificate content.
   */
  certificate: string;

  /**
   * The name of the certificate.
   */
  name: string;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;
}

export namespace Certificates {
  export import CertificateUpdateResponse = CertificatesAPI.CertificateUpdateResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse = CertificatesAPI.CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse;
  export import CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse = CertificatesAPI.CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateAccessMTLSAuthenticationAddAnMTLSCertificateParams = CertificatesAPI.CertificateAccessMTLSAuthenticationAddAnMTLSCertificateParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
