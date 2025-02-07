// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SettingsAPI from './settings';
import {
  CertificateSettings,
  CertificateSettingsSinglePage,
  SettingGetParams,
  SettingUpdateParams,
  Settings,
} from './settings';
import { APIPromise } from '../../../../api-promise';
import { CloudflareError } from '../../../../error';
import { PagePromise, SinglePage } from '../../../../pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Certificates extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Adds a new mTLS root certificate to Access.
   */
  create(params: CertificateCreateParams, options?: RequestOptions): APIPromise<Certificate> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(path`/${accountOrZone}/${accountOrZoneId}/access/certificates`, {
        body,
        ...options,
      }) as APIPromise<{ result: Certificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured mTLS certificate.
   */
  update(
    certificateID: string,
    params: CertificateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Certificate> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(path`/${accountOrZone}/${accountOrZoneId}/access/certificates/${certificateID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Certificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS root certificates.
   */
  list(
    params: CertificateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CertificatesSinglePage, Certificate> {
    const { account_id, zone_id } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      path`/${accountOrZone}/${accountOrZoneId}/access/certificates`,
      SinglePage<Certificate>,
      options,
    );
  }

  /**
   * Deletes an mTLS certificate.
   */
  delete(
    certificateID: string,
    params: CertificateDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CertificateDeleteResponse> {
    const { account_id, zone_id } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        path`/${accountOrZone}/${accountOrZoneId}/access/certificates/${certificateID}`,
        options,
      ) as APIPromise<{ result: CertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single mTLS certificate.
   */
  get(
    certificateID: string,
    params: CertificateGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Certificate> {
    const { account_id, zone_id } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        path`/${accountOrZone}/${accountOrZoneId}/access/certificates/${certificateID}`,
        options,
      ) as APIPromise<{ result: Certificate }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CertificatesSinglePage = SinglePage<Certificate>;

/**
 * A fully-qualified domain name (FQDN).
 */
export type AssociatedHostnames = string;

/**
 * A fully-qualified domain name (FQDN).
 */
export type AssociatedHostnamesParam = string;

export interface Certificate {
  /**
   * The ID of the application that will use this certificate.
   */
  id?: string;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<AssociatedHostnames>;

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

export interface CertificateCreateParams {
  /**
   * Body param: The certificate content.
   */
  certificate: string;

  /**
   * Body param: The name of the certificate.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<AssociatedHostnamesParam>;
}

export interface CertificateUpdateParams {
  /**
   * Body param: The hostnames of the applications that will use this certificate.
   */
  associated_hostnames: Array<AssociatedHostnamesParam>;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: The name of the certificate.
   */
  name?: string;
}

export interface CertificateListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CertificateDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CertificateGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

Certificates.Settings = Settings;

export declare namespace Certificates {
  export {
    type AssociatedHostnames as AssociatedHostnames,
    type Certificate as Certificate,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    type CertificatesSinglePage as CertificatesSinglePage,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateUpdateParams as CertificateUpdateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateDeleteParams as CertificateDeleteParams,
    type CertificateGetParams as CertificateGetParams,
  };

  export {
    Settings as Settings,
    type CertificateSettings as CertificateSettings,
    type CertificateSettingsSinglePage as CertificateSettingsSinglePage,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };
}
