// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/access/certificates/certificates';
import * as SettingsAPI from 'cloudflare/resources/access/certificates/settings';

export class Certificates extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Adds a new mTLS root certificate to Access.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: string,
    body: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateCreateResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS root certificates.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateListResponse | null> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/certificates`,
        options,
      ) as Core.APIPromise<{ result: CertificateListResponse | null }>
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

  /**
   * Updates a configured mTLS certificate.
   */
  replace(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    body: CertificateReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateReplaceResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/certificates/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CertificateCreateResponse {
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

export type CertificateListResponse = Array<CertificateListResponse.CertificateListResponseItem>;

export namespace CertificateListResponse {
  export interface CertificateListResponseItem {
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

export interface CertificateDeleteResponse {
  /**
   * UUID
   */
  id?: string;
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

export interface CertificateReplaceResponse {
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

export interface CertificateCreateParams {
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

export interface CertificateReplaceParams {
  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames: Array<string>;

  /**
   * The name of the certificate.
   */
  name?: string;
}

export namespace Certificates {
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateReplaceResponse = CertificatesAPI.CertificateReplaceResponse;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateReplaceParams = CertificatesAPI.CertificateReplaceParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingReplaceResponse = SettingsAPI.SettingReplaceResponse;
  export import SettingReplaceParams = SettingsAPI.SettingReplaceParams;
}
