// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginTLSClientAuthAPI from 'cloudflare/resources/origin-tls-client-auth/origin-tls-client-auth';
import * as SettingsAPI from 'cloudflare/resources/origin-tls-client-auth/settings';
import * as HostnamesAPI from 'cloudflare/resources/origin-tls-client-auth/hostnames/hostnames';

export class OriginTLSClientAuth extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Upload your own certificate you want Cloudflare to use for edge-to-origin
   * communication to override the shared certificate. Please note that it is
   * important to keep only one certificate active. Also, make sure to enable
   * zone-level authenticated origin pulls by making a PUT call to settings endpoint
   * to see the uploaded certificate in use.
   */
  create(
    zoneId: string,
    body: OriginTLSClientAuthCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientAuthCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/origin_tls_client_auth`, { body, ...options }) as Core.APIPromise<{
        result: OriginTLSClientAuthCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Certificates
   */
  list(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientAuthListResponse | null> {
    return (
      this._client.get(`/zones/${zoneId}/origin_tls_client_auth`, options) as Core.APIPromise<{
        result: OriginTLSClientAuthListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Certificate
   */
  delete(
    zoneId: string,
    certificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientAuthDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneId}/origin_tls_client_auth/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: OriginTLSClientAuthDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Certificate Details
   */
  get(
    zoneId: string,
    certificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientAuthGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/origin_tls_client_auth/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: OriginTLSClientAuthGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OriginTLSClientAuthCreateResponse = unknown | string;

export type OriginTLSClientAuthListResponse =
  Array<OriginTLSClientAuthListResponse.OriginTLSClientAuthListResponseItem>;

export namespace OriginTLSClientAuthListResponse {
  export interface OriginTLSClientAuthListResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * The zone's leaf certificate.
     */
    certificate?: string;

    /**
     * Indicates whether zone-level authenticated origin pulls is enabled.
     */
    enabled?: boolean;

    /**
     * The zone's private key.
     */
    private_key?: string;
  }
}

export type OriginTLSClientAuthDeleteResponse = unknown | string;

export type OriginTLSClientAuthGetResponse = unknown | string;

export interface OriginTLSClientAuthCreateParams {
  /**
   * The zone's leaf certificate.
   */
  certificate: string;

  /**
   * The zone's private key.
   */
  private_key: string;
}

export namespace OriginTLSClientAuth {
  export import OriginTLSClientAuthCreateResponse = OriginTLSClientAuthAPI.OriginTLSClientAuthCreateResponse;
  export import OriginTLSClientAuthListResponse = OriginTLSClientAuthAPI.OriginTLSClientAuthListResponse;
  export import OriginTLSClientAuthDeleteResponse = OriginTLSClientAuthAPI.OriginTLSClientAuthDeleteResponse;
  export import OriginTLSClientAuthGetResponse = OriginTLSClientAuthAPI.OriginTLSClientAuthGetResponse;
  export import OriginTLSClientAuthCreateParams = OriginTLSClientAuthAPI.OriginTLSClientAuthCreateParams;
  export import Hostnames = HostnamesAPI.Hostnames;
  export import HostnameUpdateResponse = HostnamesAPI.HostnameUpdateResponse;
  export import HostnameGetResponse = HostnamesAPI.HostnameGetResponse;
  export import HostnameUpdateParams = HostnamesAPI.HostnameUpdateParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse;
  export import SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse;
  export import SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams;
}
