// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/access/certificates/settings';

export class Settings extends APIResource {
  /**
   * Updates an mTLS certificate's hostname settings.
   */
  update(
    accountOrZone: string,
    accountOrZoneId: string,
    body: SettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUpdateResponse | null> {
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
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingListResponse | null> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/certificates/settings`,
        options,
      ) as Core.APIPromise<{ result: SettingListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SettingUpdateResponse = Array<SettingUpdateResponse.SettingUpdateResponseItem>;

export namespace SettingUpdateResponse {
  export interface SettingUpdateResponseItem {
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
}

export type SettingListResponse = Array<SettingListResponse.SettingListResponseItem>;

export namespace SettingListResponse {
  export interface SettingListResponseItem {
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
}

export interface SettingUpdateParams {
  settings: Array<SettingUpdateParams.Setting>;
}

export namespace SettingUpdateParams {
  export interface Setting {
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
}

export namespace Settings {
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
