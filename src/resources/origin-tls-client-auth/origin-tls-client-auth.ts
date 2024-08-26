// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Hostnames } from './hostnames/hostnames';
import { Settings } from './settings';
import * as OriginTLSClientAuthAPI from './origin-tls-client-auth';
import * as SettingsAPI from './settings';
import * as HostnamesAPI from './hostnames/hostnames';
import { SinglePage } from '../../pagination';

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
  create(params: OriginTLSClientAuthCreateParams, options?: Core.RequestOptions): Core.APIPromise<ZoneAuthenticatedOriginPull> {
    const { zone_id, ...body } = params;
    return (this._client.post(`/zones/${zone_id}/origin_tls_client_auth`, { body, ...options }) as Core.APIPromise<{ result: ZoneAuthenticatedOriginPull }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Certificates
   */
  list(params: OriginTLSClientAuthListParams, options?: Core.RequestOptions): Core.PagePromise<ZoneAuthenticatedOriginPullsSinglePage, ZoneAuthenticatedOriginPull> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/origin_tls_client_auth`, ZoneAuthenticatedOriginPullsSinglePage, options);
  }

  /**
   * Delete Certificate
   */
  delete(certificateId: string, params: OriginTLSClientAuthDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ZoneAuthenticatedOriginPull> {
    const { zone_id } = params;
    return (this._client.delete(`/zones/${zone_id}/origin_tls_client_auth/${certificateId}`, options) as Core.APIPromise<{ result: ZoneAuthenticatedOriginPull }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Certificate Details
   */
  get(certificateId: string, params: OriginTLSClientAuthGetParams, options?: Core.RequestOptions): Core.APIPromise<ZoneAuthenticatedOriginPull> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/origin_tls_client_auth/${certificateId}`, options) as Core.APIPromise<{ result: ZoneAuthenticatedOriginPull }>)._thenUnwrap((obj) => obj.result);
  }
}

export class ZoneAuthenticatedOriginPullsSinglePage extends SinglePage<ZoneAuthenticatedOriginPull> {
}

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
  status?: 'initializing' | 'pending_deployment' | 'pending_deletion' | 'active' | 'deleted' | 'deployment_timed_out' | 'deletion_timed_out';

  /**
   * This is the time the certificate was uploaded.
   */
  uploaded_on?: string;
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

export namespace OriginTLSClientAuth {
  export import Hostnames = HostnamesAPI.Hostnames;
  export import AuthenticatedOriginPull = HostnamesAPI.AuthenticatedOriginPull;
  export import HostnameUpdateResponse = HostnamesAPI.HostnameUpdateResponse;
  export import HostnameUpdateParams = HostnamesAPI.HostnameUpdateParams;
  export import HostnameGetParams = HostnamesAPI.HostnameGetParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
