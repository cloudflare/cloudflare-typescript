// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { CloudflareError } from '../../../../core/error';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Updates an mTLS certificate's hostname settings.
   */
  update(
    params: SettingUpdateParams,
    options?: RequestOptions,
  ): PagePromise<CertificateSettingsSinglePage, CertificateSettings> {
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
    return this._client.getAPIList(
      path`/${accountOrZone}/${accountOrZoneId}/access/certificates/settings`,
      SinglePage<CertificateSettings>,
      { body, method: 'put', ...options },
    );
  }

  /**
   * List all mTLS hostname settings for this account or zone.
   */
  get(
    params: SettingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CertificateSettingsSinglePage, CertificateSettings> {
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
      path`/${accountOrZone}/${accountOrZoneId}/access/certificates/settings`,
      SinglePage<CertificateSettings>,
      options,
    );
  }
}

export type CertificateSettingsSinglePage = SinglePage<CertificateSettings>;

export interface CertificateSettings {
  /**
   * Request client certificates for this hostname in China. Can only be set to true
   * if this zone is china network enabled.
   */
  china_network: boolean;

  /**
   * Client Certificate Forwarding is a feature that takes the client cert provided
   * by the eyeball to the edge, and forwards it to the origin as a HTTP header to
   * allow logging on the origin.
   */
  client_certificate_forwarding: boolean;

  /**
   * The hostname that these settings apply to.
   */
  hostname: string;
}

export interface CertificateSettingsParam {
  /**
   * Request client certificates for this hostname in China. Can only be set to true
   * if this zone is china network enabled.
   */
  china_network: boolean;

  /**
   * Client Certificate Forwarding is a feature that takes the client cert provided
   * by the eyeball to the edge, and forwards it to the origin as a HTTP header to
   * allow logging on the origin.
   */
  client_certificate_forwarding: boolean;

  /**
   * The hostname that these settings apply to.
   */
  hostname: string;
}

export interface SettingUpdateParams {
  /**
   * Body param:
   */
  settings: Array<CertificateSettingsParam>;

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
}

export interface SettingGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export declare namespace Settings {
  export {
    type CertificateSettings as CertificateSettings,
    type CertificateSettingsSinglePage as CertificateSettingsSinglePage,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };
}
