// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SettingsAPI from './settings';
import {
  SettingGetParams,
  SettingGetResponse,
  SettingUpdateParams,
  SettingUpdateResponse,
  Settings,
} from './settings';
import * as HostnamesAPI from './hostnames/hostnames';
import {
  AuthenticatedOriginPull,
  HostnameGetParams,
  HostnameUpdateParams,
  HostnameUpdateResponse,
  HostnameUpdateResponsesSinglePage,
  Hostnames,
} from './hostnames/hostnames';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
    params: OriginTLSClientAuthCreateParams,
    options?: RequestOptions,
  ): APIPromise<OriginTLSClientAuthCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/origin_tls_client_auth`, { body, ...options }) as APIPromise<{
        result: OriginTLSClientAuthCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Certificates
   */
  list(
    params: OriginTLSClientAuthListParams,
    options?: RequestOptions,
  ): PagePromise<OriginTLSClientAuthListResponsesSinglePage, OriginTLSClientAuthListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/origin_tls_client_auth`,
      SinglePage<OriginTLSClientAuthListResponse>,
      options,
    );
  }

  /**
   * Delete Certificate
   */
  delete(
    certificateID: string,
    params: OriginTLSClientAuthDeleteParams,
    options?: RequestOptions,
  ): APIPromise<OriginTLSClientAuthDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/origin_tls_client_auth/${certificateID}`,
        options,
      ) as APIPromise<{ result: OriginTLSClientAuthDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Certificate Details
   */
  get(
    certificateID: string,
    params: OriginTLSClientAuthGetParams,
    options?: RequestOptions,
  ): APIPromise<OriginTLSClientAuthGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/origin_tls_client_auth/${certificateID}`,
        options,
      ) as APIPromise<{ result: OriginTLSClientAuthGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OriginTLSClientAuthListResponsesSinglePage = SinglePage<OriginTLSClientAuthListResponse>;

export interface ZoneAuthenticatedOriginPull {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The zone's leaf certificate.
   */
  certificate?: string;

  /**
   * When the certificate from the authority expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * Status of the certificate activation.
   */
  status?:
    | 'initializing'
    | 'pending_deployment'
    | 'pending_deletion'
    | 'active'
    | 'deleted'
    | 'deployment_timed_out'
    | 'deletion_timed_out';

  /**
   * This is the time the certificate was uploaded.
   */
  uploaded_on?: string;
}

export interface OriginTLSClientAuthCreateResponse extends ZoneAuthenticatedOriginPull {
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

export interface OriginTLSClientAuthListResponse extends ZoneAuthenticatedOriginPull {
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

export interface OriginTLSClientAuthDeleteResponse extends ZoneAuthenticatedOriginPull {
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

export interface OriginTLSClientAuthGetResponse extends ZoneAuthenticatedOriginPull {
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

export interface OriginTLSClientAuthCreateParams {
  /**
   * Path param: Identifier
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
   * Identifier
   */
  zone_id: string;
}

export interface OriginTLSClientAuthDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface OriginTLSClientAuthGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

OriginTLSClientAuth.Hostnames = Hostnames;
OriginTLSClientAuth.Settings = Settings;

export declare namespace OriginTLSClientAuth {
  export {
    Hostnames as Hostnames,
    type AuthenticatedOriginPull as AuthenticatedOriginPull,
    type HostnameUpdateResponse as HostnameUpdateResponse,
    type HostnameUpdateResponsesSinglePage as HostnameUpdateResponsesSinglePage,
    type HostnameUpdateParams as HostnameUpdateParams,
    type HostnameGetParams as HostnameGetParams,
  };

  export {
    Settings as Settings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };
}
