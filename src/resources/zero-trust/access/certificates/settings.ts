// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as SettingsAPI from 'cloudflare/resources/zero-trust/access/certificates/settings';

export class Settings extends APIResource {
  /**
   * Updates an mTLS certificate's hostname settings.
   */
  update(
    params: SettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUpdateResponse | null> {
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
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/certificates/settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SettingUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all mTLS hostname settings for this account or zone.
   */
  list(
    params?: SettingListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingListResponse | null>;
  list(options?: Core.RequestOptions): Core.APIPromise<SettingListResponse | null>;
  list(
    params: SettingListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingListResponse | null> {
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
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/certificates/settings`,
        options,
      ) as Core.APIPromise<{ result: SettingListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccessSettings {
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

export type SettingUpdateResponse = Array<AccessSettings>;

export type SettingListResponse = Array<AccessSettings>;

export interface SettingUpdateParams {
  /**
   * Body param:
   */
  settings: Array<AccessSettings>;

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

export interface SettingListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Settings {
  export import AccessSettings = SettingsAPI.AccessSettings;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingListParams = SettingsAPI.SettingListParams;
}
