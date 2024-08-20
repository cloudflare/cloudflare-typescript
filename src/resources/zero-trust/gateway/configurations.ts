// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ConfigurationsAPI from './configurations';

export class Configurations extends APIResource {
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
 * Activity log settings.
 */
export interface ActivityLogSettingsParam {
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
 * Anti-virus settings.
 */
export interface AntiVirusSettingsParam {
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
  notification_settings?: NotificationSettingsParam;
}

/**
 * Block page layout settings.
 */
export interface BlockPageSettings {
  /**
   * Block page background color in #rrggbb format.
   */
  background_color?: string;

  /**
   * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
   */
  enabled?: boolean;

  /**
   * Block page footer text.
   */
  footer_text?: string;

  /**
   * Block page header text.
   */
  header_text?: string;

  /**
   * Full URL to the logo file.
   */
  logo_path?: string;

  /**
   * Admin email for users to contact.
   */
  mailto_address?: string;

  /**
   * Subject line for emails created from block page.
   */
  mailto_subject?: string;

  /**
   * Block page title.
   */
  name?: string;

  /**
   * Suppress detailed info at the bottom of the block page.
   */
  suppress_footer?: boolean;
}

/**
 * Block page layout settings.
 */
export interface BlockPageSettingsParam {
  /**
   * Block page background color in #rrggbb format.
   */
  background_color?: string;

  /**
   * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
   */
  enabled?: boolean;

  /**
   * Block page footer text.
   */
  footer_text?: string;

  /**
   * Block page header text.
   */
  header_text?: string;

  /**
   * Full URL to the logo file.
   */
  logo_path?: string;

  /**
   * Admin email for users to contact.
   */
  mailto_address?: string;

  /**
   * Subject line for emails created from block page.
   */
  mailto_subject?: string;

  /**
   * Block page title.
   */
  name?: string;

  /**
   * Suppress detailed info at the bottom of the block page.
   */
  suppress_footer?: boolean;
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
 * DLP body scanning settings.
 */
export interface BodyScanningSettingsParam {
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
 * Browser isolation settings.
 */
export interface BrowserIsolationSettingsParam {
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
 * @deprecated: Custom certificate settings for BYO-PKI. (deprecated and replaced
 * by `certificate`)
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
 * @deprecated: Custom certificate settings for BYO-PKI. (deprecated and replaced
 * by `certificate`)
 */
export interface CustomCertificateSettingsParam {
  /**
   * Enable use of custom certificate authority for signing Gateway traffic.
   */
  enabled: boolean;

  /**
   * UUID of certificate (ID from MTLS certificate store).
   */
  id?: string;
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
 * Extended e-mail matching settings.
 */
export interface ExtendedEmailMatchingParam {
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

/**
 * FIPS settings.
 */
export interface FipsSettingsParam {
  /**
   * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
   */
  tls?: boolean;
}

/**
 * account settings.
 */
export interface GatewayConfigurationSettings {
  /**
   * Activity log settings.
   */
  activity_log?: ActivityLogSettings;

  /**
   * Anti-virus settings.
   */
  antivirus?: AntiVirusSettings;

  /**
   * Block page layout settings.
   */
  block_page?: BlockPageSettings;

  /**
   * DLP body scanning settings.
   */
  body_scanning?: BodyScanningSettings;

  /**
   * Browser isolation settings.
   */
  browser_isolation?: BrowserIsolationSettings;

  /**
   * Certificate settings for Gateway TLS interception. If not specified, the
   * Cloudflare Root CA will be used.
   */
  certificate?: GatewayConfigurationSettings.Certificate;

  /**
   * @deprecated: Custom certificate settings for BYO-PKI. (deprecated and replaced
   * by `certificate`)
   */
  custom_certificate?: CustomCertificateSettings;

  /**
   * Extended e-mail matching settings.
   */
  extended_email_matching?: ExtendedEmailMatching;

  /**
   * FIPS settings.
   */
  fips?: FipsSettings;

  /**
   * Protocol Detection settings.
   */
  protocol_detection?: ProtocolDetection;

  /**
   * TLS interception settings.
   */
  tls_decrypt?: TLSSettings;
}

export namespace GatewayConfigurationSettings {
  /**
   * Certificate settings for Gateway TLS interception. If not specified, the
   * Cloudflare Root CA will be used.
   */
  export interface Certificate {
    /**
     * UUID of certificate to be used for interception. Certificate must be active on
     * the edge. A nil UUID will indicate the Cloudflare Root CA should be used.
     */
    id: string;
  }
}

/**
 * account settings.
 */
export interface GatewayConfigurationSettingsParam {
  /**
   * Activity log settings.
   */
  activity_log?: ActivityLogSettingsParam;

  /**
   * Anti-virus settings.
   */
  antivirus?: AntiVirusSettingsParam;

  /**
   * Block page layout settings.
   */
  block_page?: BlockPageSettingsParam;

  /**
   * DLP body scanning settings.
   */
  body_scanning?: BodyScanningSettingsParam;

  /**
   * Browser isolation settings.
   */
  browser_isolation?: BrowserIsolationSettingsParam;

  /**
   * Certificate settings for Gateway TLS interception. If not specified, the
   * Cloudflare Root CA will be used.
   */
  certificate?: GatewayConfigurationSettingsParam.Certificate;

  /**
   * @deprecated: Custom certificate settings for BYO-PKI. (deprecated and replaced
   * by `certificate`)
   */
  custom_certificate?: CustomCertificateSettingsParam;

  /**
   * Extended e-mail matching settings.
   */
  extended_email_matching?: ExtendedEmailMatchingParam;

  /**
   * FIPS settings.
   */
  fips?: FipsSettingsParam;

  /**
   * Protocol Detection settings.
   */
  protocol_detection?: ProtocolDetectionParam;

  /**
   * TLS interception settings.
   */
  tls_decrypt?: TLSSettingsParam;
}

export namespace GatewayConfigurationSettingsParam {
  /**
   * Certificate settings for Gateway TLS interception. If not specified, the
   * Cloudflare Root CA will be used.
   */
  export interface Certificate {
    /**
     * UUID of certificate to be used for interception. Certificate must be active on
     * the edge. A nil UUID will indicate the Cloudflare Root CA should be used.
     */
    id: string;
  }
}

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
 * Configure a message to display on the user's device when an antivirus search is
 * performed.
 */
export interface NotificationSettingsParam {
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
 * Protocol Detection settings.
 */
export interface ProtocolDetectionParam {
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
 * TLS interception settings.
 */
export interface TLSSettingsParam {
  /**
   * Enable inspecting encrypted HTTP traffic.
   */
  enabled?: boolean;
}

/**
 * account settings.
 */
export interface ConfigurationUpdateResponse {
  created_at?: string;

  /**
   * account settings.
   */
  settings?: GatewayConfigurationSettings;

  updated_at?: string;
}

/**
 * account settings.
 */
export interface ConfigurationEditResponse {
  created_at?: string;

  /**
   * account settings.
   */
  settings?: GatewayConfigurationSettings;

  updated_at?: string;
}

/**
 * account settings.
 */
export interface ConfigurationGetResponse {
  created_at?: string;

  /**
   * account settings.
   */
  settings?: GatewayConfigurationSettings;

  updated_at?: string;
}

export interface ConfigurationUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: account settings.
   */
  settings?: GatewayConfigurationSettingsParam;
}

export interface ConfigurationEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: account settings.
   */
  settings?: GatewayConfigurationSettingsParam;
}

export interface ConfigurationGetParams {
  account_id: string;
}

export namespace Configurations {
  export import ActivityLogSettings = ConfigurationsAPI.ActivityLogSettings;
  export import AntiVirusSettings = ConfigurationsAPI.AntiVirusSettings;
  export import BlockPageSettings = ConfigurationsAPI.BlockPageSettings;
  export import BodyScanningSettings = ConfigurationsAPI.BodyScanningSettings;
  export import BrowserIsolationSettings = ConfigurationsAPI.BrowserIsolationSettings;
  export import CustomCertificateSettings = ConfigurationsAPI.CustomCertificateSettings;
  export import ExtendedEmailMatching = ConfigurationsAPI.ExtendedEmailMatching;
  export import FipsSettings = ConfigurationsAPI.FipsSettings;
  export import GatewayConfigurationSettings = ConfigurationsAPI.GatewayConfigurationSettings;
  export import NotificationSettings = ConfigurationsAPI.NotificationSettings;
  export import ProtocolDetection = ConfigurationsAPI.ProtocolDetection;
  export import TLSSettings = ConfigurationsAPI.TLSSettings;
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationEditResponse = ConfigurationsAPI.ConfigurationEditResponse;
  export import ConfigurationGetResponse = ConfigurationsAPI.ConfigurationGetResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationEditParams = ConfigurationsAPI.ConfigurationEditParams;
  export import ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
}
