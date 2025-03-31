// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CustomCertificateAPI from './custom-certificate';
import { CustomCertificate, CustomCertificateGetParams } from './custom-certificate';

export class Configurations extends APIResource {
  customCertificate: CustomCertificateAPI.CustomCertificate = new CustomCertificateAPI.CustomCertificate(
    this._client,
  );

  /**
   * Updates the current Zero Trust account configuration.
   */
  update(
    params: ConfigurationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/configuration`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigurationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patches the current Zero Trust account configuration. This endpoint can update a
   * single subcollection of settings such as `antivirus`, `tls_decrypt`,
   * `activity_log`, `block_page`, `browser_isolation`, `fips`, `body_scanning`, or
   * `certificate`, without updating the entire configuration object. Returns an
   * error if any collection of settings is not properly configured.
   */
  edit(
    params: ConfigurationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/gateway/configuration`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigurationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the current Zero Trust account configuration.
   */
  get(
    params: ConfigurationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/configuration`, options) as Core.APIPromise<{
        result: ConfigurationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Activity log settings.
 */
export interface ActivityLogSettings {
  /**
   * Enable activity logging.
   */
  enabled?: boolean;
}

/**
 * Anti-virus settings.
 */
export interface AntiVirusSettings {
  /**
   * Enable anti-virus scanning on downloads.
   */
  enabled_download_phase?: boolean;

  /**
   * Enable anti-virus scanning on uploads.
   */
  enabled_upload_phase?: boolean;

  /**
   * Block requests for files that cannot be scanned.
   */
  fail_closed?: boolean;

  /**
   * Configure a message to display on the user's device when an antivirus search is
   * performed.
   */
  notification_settings?: NotificationSettings;
}

/**
 * Block page layout settings.
 */
export interface BlockPageSettings {
  /**
   * If mode is customized_block_page: block page background color in #rrggbb format.
   */
  background_color?: string;

  /**
   * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
   */
  enabled?: boolean;

  /**
   * If mode is customized_block_page: block page footer text.
   */
  footer_text?: string;

  /**
   * If mode is customized_block_page: block page header text.
   */
  header_text?: string;

  /**
   * If mode is redirect_uri: when enabled, context will be appended to target_uri as
   * query parameters.
   */
  include_context?: boolean;

  /**
   * If mode is customized_block_page: full URL to the logo file.
   */
  logo_path?: string;

  /**
   * If mode is customized_block_page: admin email for users to contact.
   */
  mailto_address?: string;

  /**
   * If mode is customized_block_page: subject line for emails created from block
   * page.
   */
  mailto_subject?: string;

  /**
   * Controls whether the user is redirected to a Cloudflare-hosted block page or to
   * a customer-provided URI.
   */
  mode?: 'customized_block_page' | 'redirect_uri';

  /**
   * If mode is customized_block_page: block page title.
   */
  name?: string;

  /**
   * If mode is customized_block_page: suppress detailed info at the bottom of the
   * block page.
   */
  suppress_footer?: boolean;

  /**
   * If mode is redirect_uri: URI to which the user should be redirected.
   */
  target_uri?: string;
}

/**
 * DLP body scanning settings.
 */
export interface BodyScanningSettings {
  /**
   * Set the inspection mode to either `deep` or `shallow`.
   */
  inspection_mode?: string;
}

/**
 * Browser isolation settings.
 */
export interface BrowserIsolationSettings {
  /**
   * Enable non-identity onramp support for Browser Isolation.
   */
  non_identity_enabled?: boolean;

  /**
   * Enable Clientless Browser Isolation.
   */
  url_browser_isolation_enabled?: boolean;
}

/**
 * @deprecated Custom certificate settings for BYO-PKI. (deprecated and replaced by
 * `certificate`)
 */
export interface CustomCertificateSettings {
  /**
   * Enable use of custom certificate authority for signing Gateway traffic.
   */
  enabled: boolean;

  /**
   * UUID of certificate (ID from MTLS certificate store).
   */
  id?: string;

  /**
   * Certificate status (internal).
   */
  binding_status?: string;

  updated_at?: string;
}

/**
 * Extended e-mail matching settings.
 */
export interface ExtendedEmailMatching {
  /**
   * Enable matching all variants of user emails (with + or . modifiers) used as
   * criteria in Firewall policies.
   */
  enabled?: boolean;
}

/**
 * FIPS settings.
 */
export interface FipsSettings {
  /**
   * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
   */
  tls?: boolean;
}

export type GatewayConfigurationSettings = unknown;

/**
 * Configure a message to display on the user's device when an antivirus search is
 * performed.
 */
export interface NotificationSettings {
  /**
   * Set notification on
   */
  enabled?: boolean;

  /**
   * Customize the message shown in the notification.
   */
  msg?: string;

  /**
   * Optional URL to direct users to additional information. If not set, the
   * notification will open a block page.
   */
  support_url?: string;
}

/**
 * Protocol Detection settings.
 */
export interface ProtocolDetection {
  /**
   * Enable detecting protocol on initial bytes of client traffic.
   */
  enabled?: boolean;
}

/**
 * TLS interception settings.
 */
export interface TLSSettings {
  /**
   * Enable inspecting encrypted HTTP traffic.
   */
  enabled?: boolean;
}

/**
 * Account settings
 */
export interface ConfigurationUpdateResponse {
  created_at?: string;

  settings?: unknown;

  updated_at?: string;
}

/**
 * Account settings
 */
export interface ConfigurationEditResponse {
  created_at?: string;

  settings?: unknown;

  updated_at?: string;
}

/**
 * Account settings
 */
export interface ConfigurationGetResponse {
  created_at?: string;

  settings?: unknown;

  updated_at?: string;
}

export interface ConfigurationUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  settings?: unknown;
}

export interface ConfigurationEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  settings?: unknown;
}

export interface ConfigurationGetParams {
  account_id: string;
}

Configurations.CustomCertificate = CustomCertificate;

export declare namespace Configurations {
  export {
    type ActivityLogSettings as ActivityLogSettings,
    type AntiVirusSettings as AntiVirusSettings,
    type BlockPageSettings as BlockPageSettings,
    type BodyScanningSettings as BodyScanningSettings,
    type BrowserIsolationSettings as BrowserIsolationSettings,
    type CustomCertificateSettings as CustomCertificateSettings,
    type ExtendedEmailMatching as ExtendedEmailMatching,
    type FipsSettings as FipsSettings,
    type GatewayConfigurationSettings as GatewayConfigurationSettings,
    type NotificationSettings as NotificationSettings,
    type ProtocolDetection as ProtocolDetection,
    type TLSSettings as TLSSettings,
    type ConfigurationUpdateResponse as ConfigurationUpdateResponse,
    type ConfigurationEditResponse as ConfigurationEditResponse,
    type ConfigurationGetResponse as ConfigurationGetResponse,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
    type ConfigurationEditParams as ConfigurationEditParams,
    type ConfigurationGetParams as ConfigurationGetParams,
  };

  export {
    CustomCertificate as CustomCertificate,
    type CustomCertificateGetParams as CustomCertificateGetParams,
  };
}
