// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ApplicationsAPI from './applications';
import { APIPromise } from '../../../../core/api-promise';
import { CloudflareError } from '../../../../core/error';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Updates Access application settings.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.zeroTrust.access.applications.settings.update(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    appID: ApplicationsAPI.AppIDParam,
    params: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SettingUpdateResponse> {
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
      this._client.put(path`/${accountOrZone}/${accountOrZoneId}/access/apps/${appID}/settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: SettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates Access application settings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.access.applications.settings.edit(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(
    appID: ApplicationsAPI.AppIDParam,
    params: SettingEditParams,
    options?: RequestOptions,
  ): APIPromise<SettingEditResponse> {
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
      this._client.patch(path`/${accountOrZone}/${accountOrZoneId}/access/apps/${appID}/settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: SettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingUpdateResponse {
  /**
   * Enables loading application content in an iFrame.
   */
  allow_iframe?: boolean;

  /**
   * Enables automatic authentication through cloudflared.
   */
  skip_interstitial?: boolean;
}

export interface SettingEditResponse {
  /**
   * Enables loading application content in an iFrame.
   */
  allow_iframe?: boolean;

  /**
   * Enables automatic authentication through cloudflared.
   */
  skip_interstitial?: boolean;
}

export interface SettingUpdateParams {
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
   * Body param: Enables loading application content in an iFrame.
   */
  allow_iframe?: boolean;

  /**
   * Body param: Enables automatic authentication through cloudflared.
   */
  skip_interstitial?: boolean;
}

export interface SettingEditParams {
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
   * Body param: Enables loading application content in an iFrame.
   */
  allow_iframe?: boolean;

  /**
   * Body param: Enables automatic authentication through cloudflared.
   */
  skip_interstitial?: boolean;
}

export declare namespace Settings {
  export {
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingEditResponse as SettingEditResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingEditParams as SettingEditParams,
  };
}
