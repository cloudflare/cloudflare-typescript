// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HostnameCertificatesAPI from './hostname-certificates';
import {
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
  HostnameGetParams,
  HostnameUpdateParams,
  HostnameUpdateResponse,
  HostnameUpdateResponsesSinglePage,
  Hostnames,
} from './hostnames';
import * as SettingsAPI from './settings';
import {
  SettingGetParams,
  SettingGetResponse,
  SettingUpdateParams,
  SettingUpdateResponse,
  Settings,
} from './settings';
import * as ZoneCertificatesAPI from './zone-certificates';
import {
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
import { SinglePage } from '../../pagination';

export class OriginTLSClientAuth extends APIResource {
  zoneCertificates: ZoneCertificatesAPI.ZoneCertificates = new ZoneCertificatesAPI.ZoneCertificates(
    this._client,
  );
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
  hostnameCertificates: HostnameCertificatesAPI.HostnameCertificates =
    new HostnameCertificatesAPI.HostnameCertificates(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

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
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientAuthCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/origin_tls_client_auth`, { body, ...options }) as Core.APIPromise<{
        result: OriginTLSClientAuthCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Certificates
   *
   * @deprecated Use zone_certificates.list for zone-level certificates. This method will be removed in a future major version.
   */
  list(
    params: OriginTLSClientAuthListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OriginTLSClientAuthListResponsesSinglePage, OriginTLSClientAuthListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/origin_tls_client_auth`,
      OriginTLSClientAuthListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete Certificate
   *
   * @deprecated Use zone_certificates.delete for zone-level certificates. This method will be removed in a future major version.
   */
  delete(
    certificateId: string,
    params: OriginTLSClientAuthDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientAuthDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/origin_tls_client_auth/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: OriginTLSClientAuthDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Certificate Details
   *
   * @deprecated Use zone_certificates.get for zone-level certificates. This method will be removed in a future major version.
   */
  get(
    certificateId: string,
    params: OriginTLSClientAuthGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSClientAuthGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/origin_tls_client_auth/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: OriginTLSClientAuthGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OriginTLSClientAuthListResponsesSinglePage extends SinglePage<OriginTLSClientAuthListResponse> {}

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
  zone_id: string;

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
  zone_id: string;
}

export interface OriginTLSClientAuthDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface OriginTLSClientAuthGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

OriginTLSClientAuth.OriginTLSClientAuthListResponsesSinglePage = OriginTLSClientAuthListResponsesSinglePage;
OriginTLSClientAuth.ZoneCertificates = ZoneCertificates;
OriginTLSClientAuth.ZoneCertificateListResponsesSinglePage = ZoneCertificateListResponsesSinglePage;
OriginTLSClientAuth.Hostnames = Hostnames;
OriginTLSClientAuth.HostnameUpdateResponsesSinglePage = HostnameUpdateResponsesSinglePage;
OriginTLSClientAuth.HostnameCertificates = HostnameCertificates;
OriginTLSClientAuth.HostnameCertificateListResponsesSinglePage = HostnameCertificateListResponsesSinglePage;
OriginTLSClientAuth.Settings = Settings;

export declare namespace OriginTLSClientAuth {
  export {
    type OriginTLSClientAuthCreateResponse as OriginTLSClientAuthCreateResponse,
    type OriginTLSClientAuthListResponse as OriginTLSClientAuthListResponse,
    type OriginTLSClientAuthDeleteResponse as OriginTLSClientAuthDeleteResponse,
    type OriginTLSClientAuthGetResponse as OriginTLSClientAuthGetResponse,
    OriginTLSClientAuthListResponsesSinglePage as OriginTLSClientAuthListResponsesSinglePage,
    type OriginTLSClientAuthCreateParams as OriginTLSClientAuthCreateParams,
    type OriginTLSClientAuthListParams as OriginTLSClientAuthListParams,
    type OriginTLSClientAuthDeleteParams as OriginTLSClientAuthDeleteParams,
    type OriginTLSClientAuthGetParams as OriginTLSClientAuthGetParams,
  };

  export {
    ZoneCertificates as ZoneCertificates,
    type ZoneAuthenticatedOriginPull as ZoneAuthenticatedOriginPull,
    type ZoneCertificateCreateResponse as ZoneCertificateCreateResponse,
    type ZoneCertificateListResponse as ZoneCertificateListResponse,
    type ZoneCertificateDeleteResponse as ZoneCertificateDeleteResponse,
    type ZoneCertificateGetResponse as ZoneCertificateGetResponse,
    ZoneCertificateListResponsesSinglePage as ZoneCertificateListResponsesSinglePage,
    type ZoneCertificateCreateParams as ZoneCertificateCreateParams,
    type ZoneCertificateListParams as ZoneCertificateListParams,
    type ZoneCertificateDeleteParams as ZoneCertificateDeleteParams,
    type ZoneCertificateGetParams as ZoneCertificateGetParams,
  };

  export {
    Hostnames as Hostnames,
    type AuthenticatedOriginPull as AuthenticatedOriginPull,
    type HostnameUpdateResponse as HostnameUpdateResponse,
    HostnameUpdateResponsesSinglePage as HostnameUpdateResponsesSinglePage,
    type HostnameUpdateParams as HostnameUpdateParams,
    type HostnameGetParams as HostnameGetParams,
  };

  export {
    HostnameCertificates as HostnameCertificates,
    type Certificate as Certificate,
    type HostnameCertificateCreateResponse as HostnameCertificateCreateResponse,
    type HostnameCertificateListResponse as HostnameCertificateListResponse,
    type HostnameCertificateDeleteResponse as HostnameCertificateDeleteResponse,
    type HostnameCertificateGetResponse as HostnameCertificateGetResponse,
    HostnameCertificateListResponsesSinglePage as HostnameCertificateListResponsesSinglePage,
    type HostnameCertificateCreateParams as HostnameCertificateCreateParams,
    type HostnameCertificateListParams as HostnameCertificateListParams,
    type HostnameCertificateDeleteParams as HostnameCertificateDeleteParams,
    type HostnameCertificateGetParams as HostnameCertificateGetParams,
  };

  export {
    Settings as Settings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };
}
