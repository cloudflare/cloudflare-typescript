// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HostnameCertificatesAPI from './hostname-certificates';
import {
  BaseHostnameCertificates,
  Certificate,
  HostnameCertificateCreateParams,
  HostnameCertificateCreateResponse,
  HostnameCertificateDeleteParams,
  HostnameCertificateDeleteResponse,
  HostnameCertificateGetParams,
  HostnameCertificateGetResponse,
  HostnameCertificateListParams,
  HostnameCertificateListResponse,
  HostnameCertificateListResponsesSinglePage,
  HostnameCertificates,
} from './hostname-certificates';
import * as HostnamesAPI from './hostnames';
import {
  AuthenticatedOriginPull,
  BaseHostnames,
  HostnameGetParams,
  HostnameUpdateParams,
  HostnameUpdateResponse,
  HostnameUpdateResponsesSinglePage,
  Hostnames,
} from './hostnames';
import * as SettingsAPI from './settings';
import {
  BaseSettings,
  SettingGetParams,
  SettingGetResponse,
  SettingUpdateParams,
  SettingUpdateResponse,
  Settings,
} from './settings';
import * as ZoneCertificatesAPI from './zone-certificates';
import {
  BaseZoneCertificates,
  ZoneAuthenticatedOriginPull,
  ZoneCertificateCreateParams,
  ZoneCertificateCreateResponse,
  ZoneCertificateDeleteParams,
  ZoneCertificateDeleteResponse,
  ZoneCertificateGetParams,
  ZoneCertificateGetResponse,
  ZoneCertificateListParams,
  ZoneCertificateListResponse,
  ZoneCertificateListResponsesSinglePage,
  ZoneCertificates,
} from './zone-certificates';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseOriginTLSClientAuth extends APIResource {
  static override readonly _key: readonly ['originTLSClientAuth'] = Object.freeze([
    'originTLSClientAuth',
  ] as const);

  /**
   * Upload your own certificate you want Cloudflare to use for edge-to-origin
   * communication to override the shared certificate. Please note that it is
   * important to keep only one certificate active. Also, make sure to enable
   * zone-level authenticated origin pulls by making a PUT call to settings endpoint
   * to see the uploaded certificate in use.
   *
   * @deprecated Use zone_certificates.create for zone-level certificates. This method will be removed in a future major version.
   */
  create(
    params: OriginTLSClientAuthCreateParams,
    options?: RequestOptions,
  ): APIPromise<OriginTLSClientAuthCreateResponse> {
    const { zone_id = this._client.zoneID, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/origin_tls_client_auth`, { body, ...options }) as APIPromise<{
        result: OriginTLSClientAuthCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all client certificates configured for zone-level authenticated origin
   * pulls.
   *
   * @deprecated Use zone_certificates.list for zone-level certificates. This method will be removed in a future major version.
   */
  list(
    params: OriginTLSClientAuthListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OriginTLSClientAuthListResponsesSinglePage, OriginTLSClientAuthListResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return this._client.getAPIList(
      path`/zones/${zone_id}/origin_tls_client_auth`,
      SinglePage<OriginTLSClientAuthListResponse>,
      options,
    );
  }

  /**
   * Removes a client certificate used for zone-level authenticated origin pulls.
   *
   * @deprecated Use zone_certificates.delete for zone-level certificates. This method will be removed in a future major version.
   */
  delete(
    certificateID: string,
    params: OriginTLSClientAuthDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OriginTLSClientAuthDeleteResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.delete(
        path`/zones/${zone_id}/origin_tls_client_auth/${certificateID}`,
        options,
      ) as APIPromise<{ result: OriginTLSClientAuthDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a specific client certificate used in zone-level
   * authenticated origin pulls.
   *
   * @deprecated Use zone_certificates.get for zone-level certificates. This method will be removed in a future major version.
   */
  get(
    certificateID: string,
    params: OriginTLSClientAuthGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OriginTLSClientAuthGetResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(
        path`/zones/${zone_id}/origin_tls_client_auth/${certificateID}`,
        options,
      ) as APIPromise<{ result: OriginTLSClientAuthGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class OriginTLSClientAuth extends BaseOriginTLSClientAuth {
  zoneCertificates: ZoneCertificatesAPI.ZoneCertificates = new ZoneCertificatesAPI.ZoneCertificates(
    this._client,
  );
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
  hostnameCertificates: HostnameCertificatesAPI.HostnameCertificates =
    new HostnameCertificatesAPI.HostnameCertificates(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export type OriginTLSClientAuthListResponsesSinglePage = SinglePage<OriginTLSClientAuthListResponse>;

export interface OriginTLSClientAuthCreateResponse extends ZoneCertificatesAPI.ZoneAuthenticatedOriginPull {
  /**
   * Identifier.
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

export interface OriginTLSClientAuthListResponse extends ZoneCertificatesAPI.ZoneAuthenticatedOriginPull {
  /**
   * Identifier.
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

export interface OriginTLSClientAuthDeleteResponse extends ZoneCertificatesAPI.ZoneAuthenticatedOriginPull {
  /**
   * Identifier.
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

export interface OriginTLSClientAuthGetResponse extends ZoneCertificatesAPI.ZoneAuthenticatedOriginPull {
  /**
   * Identifier.
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

export interface OriginTLSClientAuthCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param: The zone's leaf certificate.
   */
  certificate: string;

  /**
   * Body param: The zone's private key.
   */
  private_key: string;
}

export interface OriginTLSClientAuthListParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export interface OriginTLSClientAuthDeleteParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export interface OriginTLSClientAuthGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

OriginTLSClientAuth.ZoneCertificates = ZoneCertificates;
OriginTLSClientAuth.BaseZoneCertificates = BaseZoneCertificates;
OriginTLSClientAuth.Hostnames = Hostnames;
OriginTLSClientAuth.BaseHostnames = BaseHostnames;
OriginTLSClientAuth.HostnameCertificates = HostnameCertificates;
OriginTLSClientAuth.BaseHostnameCertificates = BaseHostnameCertificates;
OriginTLSClientAuth.Settings = Settings;
OriginTLSClientAuth.BaseSettings = BaseSettings;

export declare namespace OriginTLSClientAuth {
  export {
    type OriginTLSClientAuthCreateResponse as OriginTLSClientAuthCreateResponse,
    type OriginTLSClientAuthListResponse as OriginTLSClientAuthListResponse,
    type OriginTLSClientAuthDeleteResponse as OriginTLSClientAuthDeleteResponse,
    type OriginTLSClientAuthGetResponse as OriginTLSClientAuthGetResponse,
    type OriginTLSClientAuthListResponsesSinglePage as OriginTLSClientAuthListResponsesSinglePage,
    type OriginTLSClientAuthCreateParams as OriginTLSClientAuthCreateParams,
    type OriginTLSClientAuthListParams as OriginTLSClientAuthListParams,
    type OriginTLSClientAuthDeleteParams as OriginTLSClientAuthDeleteParams,
    type OriginTLSClientAuthGetParams as OriginTLSClientAuthGetParams,
  };

  export {
    ZoneCertificates as ZoneCertificates,
    BaseZoneCertificates as BaseZoneCertificates,
    type ZoneAuthenticatedOriginPull as ZoneAuthenticatedOriginPull,
    type ZoneCertificateCreateResponse as ZoneCertificateCreateResponse,
    type ZoneCertificateListResponse as ZoneCertificateListResponse,
    type ZoneCertificateDeleteResponse as ZoneCertificateDeleteResponse,
    type ZoneCertificateGetResponse as ZoneCertificateGetResponse,
    type ZoneCertificateListResponsesSinglePage as ZoneCertificateListResponsesSinglePage,
    type ZoneCertificateCreateParams as ZoneCertificateCreateParams,
    type ZoneCertificateListParams as ZoneCertificateListParams,
    type ZoneCertificateDeleteParams as ZoneCertificateDeleteParams,
    type ZoneCertificateGetParams as ZoneCertificateGetParams,
  };

  export {
    Hostnames as Hostnames,
    BaseHostnames as BaseHostnames,
    type AuthenticatedOriginPull as AuthenticatedOriginPull,
    type HostnameUpdateResponse as HostnameUpdateResponse,
    type HostnameUpdateResponsesSinglePage as HostnameUpdateResponsesSinglePage,
    type HostnameUpdateParams as HostnameUpdateParams,
    type HostnameGetParams as HostnameGetParams,
  };

  export {
    HostnameCertificates as HostnameCertificates,
    BaseHostnameCertificates as BaseHostnameCertificates,
    type Certificate as Certificate,
    type HostnameCertificateCreateResponse as HostnameCertificateCreateResponse,
    type HostnameCertificateListResponse as HostnameCertificateListResponse,
    type HostnameCertificateDeleteResponse as HostnameCertificateDeleteResponse,
    type HostnameCertificateGetResponse as HostnameCertificateGetResponse,
    type HostnameCertificateListResponsesSinglePage as HostnameCertificateListResponsesSinglePage,
    type HostnameCertificateCreateParams as HostnameCertificateCreateParams,
    type HostnameCertificateListParams as HostnameCertificateListParams,
    type HostnameCertificateDeleteParams as HostnameCertificateDeleteParams,
    type HostnameCertificateGetParams as HostnameCertificateGetParams,
  };

  export {
    Settings as Settings,
    BaseSettings as BaseSettings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };
}
