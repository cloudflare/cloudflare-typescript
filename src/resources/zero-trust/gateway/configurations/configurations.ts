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
   * Update the current Zero Trust account configuration.
   *
   * @example
   * ```ts
   * const configuration =
   *   await client.zeroTrust.gateway.configurations.update({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
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
   * Update (PATCH) a single subcollection of settings such as `antivirus`,
   * `tls_decrypt`, `activity_log`, `block_page`, `browser_isolation`, `fips`,
   * `body_scanning`, or `certificate` without updating the entire configuration
   * object. This endpoint returns an error if any settings collection lacks proper
   * configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.gateway.configurations.edit({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
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
   * Retrieve the current Zero Trust account configuration.
   *
   * @example
   * ```ts
   * const configuration =
   *   await client.zeroTrust.gateway.configurations.get({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
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
 * Specify activity log settings.
 */
export interface ActivityLogSettings {
  /**
   * Specify whether to log activity.
   */
  enabled?: boolean | null;
}

/**
 * Specify activity log settings.
 */
export interface ActivityLogSettingsParam {
  /**
   * Specify whether to log activity.
   */
  enabled?: boolean | null;
}

/**
 * Specify anti-virus settings.
 */
export interface AntiVirusSettings {
  /**
   * Specify whether to enable anti-virus scanning on downloads.
   */
  enabled_download_phase?: boolean | null;

  /**
   * Specify whether to enable anti-virus scanning on uploads.
   */
  enabled_upload_phase?: boolean | null;

  /**
   * Specify whether to block requests for unscannable files.
   */
  fail_closed?: boolean | null;

  /**
   * Configure the message the user's device shows during an antivirus scan.
   */
  notification_settings?: NotificationSettings | null;
}

/**
 * Specify anti-virus settings.
 */
export interface AntiVirusSettingsParam {
  /**
   * Specify whether to enable anti-virus scanning on downloads.
   */
  enabled_download_phase?: boolean | null;

  /**
   * Specify whether to enable anti-virus scanning on uploads.
   */
  enabled_upload_phase?: boolean | null;

  /**
   * Specify whether to block requests for unscannable files.
   */
  fail_closed?: boolean | null;

  /**
   * Configure the message the user's device shows during an antivirus scan.
   */
  notification_settings?: NotificationSettingsParam | null;
}

/**
 * Specify block page layout settings.
 */
export interface BlockPageSettings {
  /**
   * Specify the block page background color in `#rrggbb` format when the mode is
   * customized_block_page.
   */
  background_color?: string;

  /**
   * Specify whether to enable the custom block page.
   */
  enabled?: boolean | null;

  /**
   * Specify the block page footer text when the mode is customized_block_page.
   */
  footer_text?: string;

  /**
   * Specify the block page header text when the mode is customized_block_page.
   */
  header_text?: string;

  /**
   * Specify whether to append context to target_uri as query parameters. This
   * applies only when the mode is redirect_uri.
   */
  include_context?: boolean;

  /**
   * Specify the full URL to the logo file when the mode is customized_block_page.
   */
  logo_path?: string;

  /**
   * Specify the admin email for users to contact when the mode is
   * customized_block_page.
   */
  mailto_address?: string;

  /**
   * Specify the subject line for emails created from the block page when the mode is
   * customized_block_page.
   */
  mailto_subject?: string;

  /**
   * Specify whether to redirect users to a Cloudflare-hosted block page or a
   * customer-provided URI.
   */
  mode?: '' | 'customized_block_page' | 'redirect_uri';

  /**
   * Specify the block page title when the mode is customized_block_page.
   */
  name?: string;

  /**
   * Indicate that this setting was shared via the Orgs API and read only for the
   * current account.
   */
  read_only?: boolean | null;

  /**
   * Indicate the account tag of the account that shared this setting.
   */
  source_account?: string | null;

  /**
   * Specify whether to suppress detailed information at the bottom of the block page
   * when the mode is customized_block_page.
   */
  suppress_footer?: boolean;

  /**
   * Specify the URI to redirect users to when the mode is redirect_uri.
   */
  target_uri?: string;

  /**
   * Indicate the version number of the setting.
   */
  version?: number | null;
}

/**
 * Specify block page layout settings.
 */
export interface BlockPageSettingsParam {
  /**
   * Specify the block page background color in `#rrggbb` format when the mode is
   * customized_block_page.
   */
  background_color?: string;

  /**
   * Specify whether to enable the custom block page.
   */
  enabled?: boolean | null;

  /**
   * Specify the block page footer text when the mode is customized_block_page.
   */
  footer_text?: string;

  /**
   * Specify the block page header text when the mode is customized_block_page.
   */
  header_text?: string;

  /**
   * Specify whether to append context to target_uri as query parameters. This
   * applies only when the mode is redirect_uri.
   */
  include_context?: boolean;

  /**
   * Specify the full URL to the logo file when the mode is customized_block_page.
   */
  logo_path?: string;

  /**
   * Specify the admin email for users to contact when the mode is
   * customized_block_page.
   */
  mailto_address?: string;

  /**
   * Specify the subject line for emails created from the block page when the mode is
   * customized_block_page.
   */
  mailto_subject?: string;

  /**
   * Specify whether to redirect users to a Cloudflare-hosted block page or a
   * customer-provided URI.
   */
  mode?: '' | 'customized_block_page' | 'redirect_uri';

  /**
   * Specify the block page title when the mode is customized_block_page.
   */
  name?: string;

  /**
   * Specify whether to suppress detailed information at the bottom of the block page
   * when the mode is customized_block_page.
   */
  suppress_footer?: boolean;

  /**
   * Specify the URI to redirect users to when the mode is redirect_uri.
   */
  target_uri?: string;
}

/**
 * Specify the DLP inspection mode.
 */
export interface BodyScanningSettings {
  /**
   * Specify the inspection mode as either `deep` or `shallow`.
   */
  inspection_mode?: 'deep' | 'shallow';
}

/**
 * Specify the DLP inspection mode.
 */
export interface BodyScanningSettingsParam {
  /**
   * Specify the inspection mode as either `deep` or `shallow`.
   */
  inspection_mode?: 'deep' | 'shallow';
}

/**
 * Specify Clientless Browser Isolation settings.
 */
export interface BrowserIsolationSettings {
  /**
   * Specify whether to enable non-identity onramp support for Browser Isolation.
   */
  non_identity_enabled?: boolean;

  /**
   * Specify whether to enable Clientless Browser Isolation.
   */
  url_browser_isolation_enabled?: boolean;
}

/**
 * Specify Clientless Browser Isolation settings.
 */
export interface BrowserIsolationSettingsParam {
  /**
   * Specify whether to enable non-identity onramp support for Browser Isolation.
   */
  non_identity_enabled?: boolean;

  /**
   * Specify whether to enable Clientless Browser Isolation.
   */
  url_browser_isolation_enabled?: boolean;
}

/**
 * @deprecated Specify custom certificate settings for BYO-PKI. This field is
 * deprecated; use `certificate` instead.
 */
export interface CustomCertificateSettings {
  /**
   * Specify whether to enable a custom certificate authority for signing Gateway
   * traffic.
   */
  enabled: boolean | null;

  /**
   * Specify the UUID of the certificate (ID from MTLS certificate store).
   */
  id?: string;

  /**
   * Indicate the internal certificate status.
   */
  binding_status?: string;

  updated_at?: string;
}

/**
 * @deprecated Specify custom certificate settings for BYO-PKI. This field is
 * deprecated; use `certificate` instead.
 */
export interface CustomCertificateSettingsParam {
  /**
   * Specify whether to enable a custom certificate authority for signing Gateway
   * traffic.
   */
  enabled: boolean | null;

  /**
   * Specify the UUID of the certificate (ID from MTLS certificate store).
   */
  id?: string;
}

/**
 * Specify user email settings for the firewall policies. When this is enabled, we
 * standardize the email addresses in the identity part of the rule, so that they
 * match the extended email variants in the firewall policies. When this setting is
 * turned off, the email addresses in the identity part of the rule will be matched
 * exactly as provided. If your email has `.` or `+` modifiers, you should enable
 * this setting.
 */
export interface ExtendedEmailMatching {
  /**
   * Specify whether to match all variants of user emails (with + or . modifiers)
   * used as criteria in Firewall policies.
   */
  enabled?: boolean | null;

  /**
   * Indicate that this setting was shared via the Orgs API and read only for the
   * current account.
   */
  read_only?: boolean;

  /**
   * Indicate the account tag of the account that shared this setting.
   */
  source_account?: string;

  /**
   * Indicate the version number of the setting.
   */
  version?: number;
}

/**
 * Specify user email settings for the firewall policies. When this is enabled, we
 * standardize the email addresses in the identity part of the rule, so that they
 * match the extended email variants in the firewall policies. When this setting is
 * turned off, the email addresses in the identity part of the rule will be matched
 * exactly as provided. If your email has `.` or `+` modifiers, you should enable
 * this setting.
 */
export interface ExtendedEmailMatchingParam {
  /**
   * Specify whether to match all variants of user emails (with + or . modifiers)
   * used as criteria in Firewall policies.
   */
  enabled?: boolean | null;
}

/**
 * Specify FIPS settings.
 */
export interface FipsSettings {
  /**
   * Enforce cipher suites and TLS versions compliant with FIPS 140-2.
   */
  tls?: boolean;
}

/**
 * Specify FIPS settings.
 */
export interface FipsSettingsParam {
  /**
   * Enforce cipher suites and TLS versions compliant with FIPS 140-2.
   */
  tls?: boolean;
}

/**
 * Specify account settings.
 */
export interface GatewayConfigurationSettings {
  /**
   * Specify activity log settings.
   */
  activity_log?: ActivityLogSettings | null;

  /**
   * Specify anti-virus settings.
   */
  antivirus?: AntiVirusSettings | null;

  /**
   * Specify block page layout settings.
   */
  block_page?: BlockPageSettings | null;

  /**
   * Specify the DLP inspection mode.
   */
  body_scanning?: BodyScanningSettings | null;

  /**
   * Specify Clientless Browser Isolation settings.
   */
  browser_isolation?: BrowserIsolationSettings | null;

  /**
   * Specify certificate settings for Gateway TLS interception. If unset, the
   * Cloudflare Root CA handles interception.
   */
  certificate?: GatewayConfigurationSettings.Certificate | null;

  /**
   * @deprecated Specify custom certificate settings for BYO-PKI. This field is
   * deprecated; use `certificate` instead.
   */
  custom_certificate?: CustomCertificateSettings | null;

  /**
   * Specify user email settings for the firewall policies. When this is enabled, we
   * standardize the email addresses in the identity part of the rule, so that they
   * match the extended email variants in the firewall policies. When this setting is
   * turned off, the email addresses in the identity part of the rule will be matched
   * exactly as provided. If your email has `.` or `+` modifiers, you should enable
   * this setting.
   */
  extended_email_matching?: ExtendedEmailMatching | null;

  /**
   * Specify FIPS settings.
   */
  fips?: FipsSettings | null;

  /**
   * Enable host selection in egress policies.
   */
  host_selector?: GatewayConfigurationSettings.HostSelector | null;

  /**
   * Define the proxy inspection mode.
   */
  inspection?: GatewayConfigurationSettings.Inspection | null;

  /**
   * Specify whether to detect protocols from the initial bytes of client traffic.
   */
  protocol_detection?: ProtocolDetection | null;

  /**
   * Specify whether to enable the sandbox.
   */
  sandbox?: GatewayConfigurationSettings.Sandbox | null;

  /**
   * Specify whether to inspect encrypted HTTP traffic.
   */
  tls_decrypt?: TLSSettings | null;
}

export namespace GatewayConfigurationSettings {
  /**
   * Specify certificate settings for Gateway TLS interception. If unset, the
   * Cloudflare Root CA handles interception.
   */
  export interface Certificate {
    /**
     * Specify the UUID of the certificate used for interception. Ensure the
     * certificate is available at the edge(previously called 'active'). A nil UUID
     * directs Cloudflare to use the Root CA.
     */
    id: string;
  }

  /**
   * Enable host selection in egress policies.
   */
  export interface HostSelector {
    /**
     * Specify whether to enable filtering via hosts for egress policies.
     */
    enabled?: boolean | null;
  }

  /**
   * Define the proxy inspection mode.
   */
  export interface Inspection {
    /**
     * Define the proxy inspection mode. 1. static: Gateway applies static inspection
     * to HTTP on TCP(80). With TLS decryption on, Gateway inspects HTTPS traffic on
     * TCP(443) and UDP(443). 2. dynamic: Gateway applies protocol detection to inspect
     * HTTP and HTTPS traffic on any port. TLS decryption must remain on to inspect
     * HTTPS traffic.
     */
    mode?: 'static' | 'dynamic';
  }

  /**
   * Specify whether to enable the sandbox.
   */
  export interface Sandbox {
    /**
     * Specify whether to enable the sandbox.
     */
    enabled?: boolean | null;

    /**
     * Specify the action to take when the system cannot scan the file.
     */
    fallback_action?: 'allow' | 'block';
  }
}

/**
 * Specify account settings.
 */
export interface GatewayConfigurationSettingsParam {
  /**
   * Specify activity log settings.
   */
  activity_log?: ActivityLogSettingsParam | null;

  /**
   * Specify anti-virus settings.
   */
  antivirus?: AntiVirusSettingsParam | null;

  /**
   * Specify block page layout settings.
   */
  block_page?: BlockPageSettingsParam | null;

  /**
   * Specify the DLP inspection mode.
   */
  body_scanning?: BodyScanningSettingsParam | null;

  /**
   * Specify Clientless Browser Isolation settings.
   */
  browser_isolation?: BrowserIsolationSettingsParam | null;

  /**
   * Specify certificate settings for Gateway TLS interception. If unset, the
   * Cloudflare Root CA handles interception.
   */
  certificate?: GatewayConfigurationSettingsParam.Certificate | null;

  /**
   * @deprecated Specify custom certificate settings for BYO-PKI. This field is
   * deprecated; use `certificate` instead.
   */
  custom_certificate?: CustomCertificateSettingsParam | null;

  /**
   * Specify user email settings for the firewall policies. When this is enabled, we
   * standardize the email addresses in the identity part of the rule, so that they
   * match the extended email variants in the firewall policies. When this setting is
   * turned off, the email addresses in the identity part of the rule will be matched
   * exactly as provided. If your email has `.` or `+` modifiers, you should enable
   * this setting.
   */
  extended_email_matching?: ExtendedEmailMatchingParam | null;

  /**
   * Specify FIPS settings.
   */
  fips?: FipsSettingsParam | null;

  /**
   * Enable host selection in egress policies.
   */
  host_selector?: GatewayConfigurationSettingsParam.HostSelector | null;

  /**
   * Define the proxy inspection mode.
   */
  inspection?: GatewayConfigurationSettingsParam.Inspection | null;

  /**
   * Specify whether to detect protocols from the initial bytes of client traffic.
   */
  protocol_detection?: ProtocolDetectionParam | null;

  /**
   * Specify whether to enable the sandbox.
   */
  sandbox?: GatewayConfigurationSettingsParam.Sandbox | null;

  /**
   * Specify whether to inspect encrypted HTTP traffic.
   */
  tls_decrypt?: TLSSettingsParam | null;
}

export namespace GatewayConfigurationSettingsParam {
  /**
   * Specify certificate settings for Gateway TLS interception. If unset, the
   * Cloudflare Root CA handles interception.
   */
  export interface Certificate {
    /**
     * Specify the UUID of the certificate used for interception. Ensure the
     * certificate is available at the edge(previously called 'active'). A nil UUID
     * directs Cloudflare to use the Root CA.
     */
    id: string;
  }

  /**
   * Enable host selection in egress policies.
   */
  export interface HostSelector {
    /**
     * Specify whether to enable filtering via hosts for egress policies.
     */
    enabled?: boolean | null;
  }

  /**
   * Define the proxy inspection mode.
   */
  export interface Inspection {
    /**
     * Define the proxy inspection mode. 1. static: Gateway applies static inspection
     * to HTTP on TCP(80). With TLS decryption on, Gateway inspects HTTPS traffic on
     * TCP(443) and UDP(443). 2. dynamic: Gateway applies protocol detection to inspect
     * HTTP and HTTPS traffic on any port. TLS decryption must remain on to inspect
     * HTTPS traffic.
     */
    mode?: 'static' | 'dynamic';
  }

  /**
   * Specify whether to enable the sandbox.
   */
  export interface Sandbox {
    /**
     * Specify whether to enable the sandbox.
     */
    enabled?: boolean | null;

    /**
     * Specify the action to take when the system cannot scan the file.
     */
    fallback_action?: 'allow' | 'block';
  }
}

/**
 * Configure the message the user's device shows during an antivirus scan.
 */
export interface NotificationSettings {
  /**
   * Specify whether to enable notifications.
   */
  enabled?: boolean;

  /**
   * Specify whether to include context information as query parameters.
   */
  include_context?: boolean;

  /**
   * Specify the message to show in the notification.
   */
  msg?: string;

  /**
   * Specify a URL that directs users to more information. If unset, the notification
   * opens a block page.
   */
  support_url?: string;
}

/**
 * Configure the message the user's device shows during an antivirus scan.
 */
export interface NotificationSettingsParam {
  /**
   * Specify whether to enable notifications.
   */
  enabled?: boolean;

  /**
   * Specify whether to include context information as query parameters.
   */
  include_context?: boolean;

  /**
   * Specify the message to show in the notification.
   */
  msg?: string;

  /**
   * Specify a URL that directs users to more information. If unset, the notification
   * opens a block page.
   */
  support_url?: string;
}

/**
 * Specify whether to detect protocols from the initial bytes of client traffic.
 */
export interface ProtocolDetection {
  /**
   * Specify whether to detect protocols from the initial bytes of client traffic.
   */
  enabled?: boolean | null;
}

/**
 * Specify whether to detect protocols from the initial bytes of client traffic.
 */
export interface ProtocolDetectionParam {
  /**
   * Specify whether to detect protocols from the initial bytes of client traffic.
   */
  enabled?: boolean | null;
}

/**
 * Specify whether to inspect encrypted HTTP traffic.
 */
export interface TLSSettings {
  /**
   * Specify whether to inspect encrypted HTTP traffic.
   */
  enabled?: boolean;
}

/**
 * Specify whether to inspect encrypted HTTP traffic.
 */
export interface TLSSettingsParam {
  /**
   * Specify whether to inspect encrypted HTTP traffic.
   */
  enabled?: boolean;
}

/**
 * Specify account settings.
 */
export interface ConfigurationUpdateResponse {
  created_at?: string;

  /**
   * Specify account settings.
   */
  settings?: GatewayConfigurationSettings;

  updated_at?: string;
}

/**
 * Specify account settings.
 */
export interface ConfigurationEditResponse {
  created_at?: string;

  /**
   * Specify account settings.
   */
  settings?: GatewayConfigurationSettings;

  updated_at?: string;
}

/**
 * Specify account settings.
 */
export interface ConfigurationGetResponse {
  created_at?: string;

  /**
   * Specify account settings.
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
   * Body param: Specify account settings.
   */
  settings?: GatewayConfigurationSettingsParam;
}

export interface ConfigurationEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Specify account settings.
   */
  settings?: GatewayConfigurationSettingsParam;
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
