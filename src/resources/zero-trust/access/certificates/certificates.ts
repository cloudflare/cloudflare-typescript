// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { CloudflareError } from '../../../../error';
import * as CertificatesAPI from './certificates';
import * as SettingsAPI from './settings';
import { SinglePage } from '../../../../pagination';

export class Certificates extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Adds a new mTLS root certificate to Access.
   */
  create(params: CertificateCreateParams, options?: Core.RequestOptions): Core.APIPromise<Certificate> {
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
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Certificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS root certificates.
   */
  list(
    params?: CertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CertificatesSinglePage, Certificate>;
  list(options?: Core.RequestOptions): Core.PagePromise<CertificatesSinglePage, Certificate>;
  list(
    params: CertificateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CertificatesSinglePage, Certificate> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
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
      `/${accountOrZone}/${accountOrZoneId}/access/certificates`,
      CertificatesSinglePage,
      options,
    );
  }
}

export class CertificatesSinglePage extends SinglePage<Certificate> {}

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

export namespace Certificates {
  export import AssociatedHostnames = CertificatesAPI.AssociatedHostnames;
  export import Certificate = CertificatesAPI.Certificate;
  export import CertificatesSinglePage = CertificatesAPI.CertificatesSinglePage;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import Settings = SettingsAPI.Settings;
  export import CertificateSettings = SettingsAPI.CertificateSettings;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
