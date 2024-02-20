// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigurationsAPI from 'cloudflare/resources/gateways/configurations';

export class Configurations extends APIResource {
  /**
   * Patches the current Zero Trust account configuration. This endpoint can update a
   * single subcollection of settings such as `antivirus`, `tls_decrypt`,
   * `activity_log`, `block_page`, `browser_isolation`, `fips`, `body_scanning`, or
   * `custom_certificate`, without updating the entire configuration object. Returns
   * an error if any collection of settings is not properly configured.
   */
  update(
    accountId: unknown,
    body: ConfigurationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationUpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/gateway/configuration`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigurationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the current Zero Trust account configuration.
   */
  get(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<ConfigurationGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/configuration`, options) as Core.APIPromise<{
        result: ConfigurationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the current Zero Trust account configuration.
   */
  replace(
    accountId: unknown,
    body: ConfigurationReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/gateway/configuration`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigurationReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * account settings.
 */
export interface ConfigurationUpdateResponse {
  created_at?: string;

  /**
   * account settings.
   */
  settings?: ConfigurationUpdateResponse.Settings;

  updated_at?: string;
}

export namespace ConfigurationUpdateResponse {
  /**
   * account settings.
   */
  export interface Settings {
    /**
     * Activity log settings.
     */
    activity_log?: Settings.ActivityLog;

    /**
     * Anti-virus settings.
     */
    antivirus?: Settings.Antivirus;

    /**
     * Block page layout settings.
     */
    block_page?: Settings.BlockPage;

    /**
     * DLP body scanning settings.
     */
    body_scanning?: Settings.BodyScanning;

    /**
     * Browser isolation settings.
     */
    browser_isolation?: Settings.BrowserIsolation;

    /**
     * Custom certificate settings for BYO-PKI.
     */
    custom_certificate?: Settings.CustomCertificate;

    /**
     * Extended e-mail matching settings.
     */
    extended_email_matching?: Settings.ExtendedEmailMatching;

    /**
     * FIPS settings.
     */
    fips?: Settings.Fips;

    /**
     * Protocol Detection settings.
     */
    protocol_detection?: Settings.ProtocolDetection;

    /**
     * TLS interception settings.
     */
    tls_decrypt?: Settings.TLSDecrypt;
  }

  export namespace Settings {
    /**
     * Activity log settings.
     */
    export interface ActivityLog {
      /**
       * Enable activity logging.
       */
      enabled?: boolean;
    }

    /**
     * Anti-virus settings.
     */
    export interface Antivirus {
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
      notification_settings?: Antivirus.NotificationSettings;
    }

    export namespace Antivirus {
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
    }

    /**
     * Block page layout settings.
     */
    export interface BlockPage {
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
    export interface BodyScanning {
      /**
       * Set the inspection mode to either `deep` or `shallow`.
       */
      inspection_mode?: string;
    }

    /**
     * Browser isolation settings.
     */
    export interface BrowserIsolation {
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
     * Custom certificate settings for BYO-PKI.
     */
    export interface CustomCertificate {
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
    export interface Fips {
      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      tls?: boolean;
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
    export interface TLSDecrypt {
      /**
       * Enable inspecting encrypted HTTP traffic.
       */
      enabled?: boolean;
    }
  }
}

/**
 * account settings.
 */
export interface ConfigurationGetResponse {
  created_at?: string;

  /**
   * account settings.
   */
  settings?: ConfigurationGetResponse.Settings;

  updated_at?: string;
}

export namespace ConfigurationGetResponse {
  /**
   * account settings.
   */
  export interface Settings {
    /**
     * Activity log settings.
     */
    activity_log?: Settings.ActivityLog;

    /**
     * Anti-virus settings.
     */
    antivirus?: Settings.Antivirus;

    /**
     * Block page layout settings.
     */
    block_page?: Settings.BlockPage;

    /**
     * DLP body scanning settings.
     */
    body_scanning?: Settings.BodyScanning;

    /**
     * Browser isolation settings.
     */
    browser_isolation?: Settings.BrowserIsolation;

    /**
     * Custom certificate settings for BYO-PKI.
     */
    custom_certificate?: Settings.CustomCertificate;

    /**
     * Extended e-mail matching settings.
     */
    extended_email_matching?: Settings.ExtendedEmailMatching;

    /**
     * FIPS settings.
     */
    fips?: Settings.Fips;

    /**
     * Protocol Detection settings.
     */
    protocol_detection?: Settings.ProtocolDetection;

    /**
     * TLS interception settings.
     */
    tls_decrypt?: Settings.TLSDecrypt;
  }

  export namespace Settings {
    /**
     * Activity log settings.
     */
    export interface ActivityLog {
      /**
       * Enable activity logging.
       */
      enabled?: boolean;
    }

    /**
     * Anti-virus settings.
     */
    export interface Antivirus {
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
      notification_settings?: Antivirus.NotificationSettings;
    }

    export namespace Antivirus {
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
    }

    /**
     * Block page layout settings.
     */
    export interface BlockPage {
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
    export interface BodyScanning {
      /**
       * Set the inspection mode to either `deep` or `shallow`.
       */
      inspection_mode?: string;
    }

    /**
     * Browser isolation settings.
     */
    export interface BrowserIsolation {
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
     * Custom certificate settings for BYO-PKI.
     */
    export interface CustomCertificate {
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
    export interface Fips {
      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      tls?: boolean;
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
    export interface TLSDecrypt {
      /**
       * Enable inspecting encrypted HTTP traffic.
       */
      enabled?: boolean;
    }
  }
}

/**
 * account settings.
 */
export interface ConfigurationReplaceResponse {
  created_at?: string;

  /**
   * account settings.
   */
  settings?: ConfigurationReplaceResponse.Settings;

  updated_at?: string;
}

export namespace ConfigurationReplaceResponse {
  /**
   * account settings.
   */
  export interface Settings {
    /**
     * Activity log settings.
     */
    activity_log?: Settings.ActivityLog;

    /**
     * Anti-virus settings.
     */
    antivirus?: Settings.Antivirus;

    /**
     * Block page layout settings.
     */
    block_page?: Settings.BlockPage;

    /**
     * DLP body scanning settings.
     */
    body_scanning?: Settings.BodyScanning;

    /**
     * Browser isolation settings.
     */
    browser_isolation?: Settings.BrowserIsolation;

    /**
     * Custom certificate settings for BYO-PKI.
     */
    custom_certificate?: Settings.CustomCertificate;

    /**
     * Extended e-mail matching settings.
     */
    extended_email_matching?: Settings.ExtendedEmailMatching;

    /**
     * FIPS settings.
     */
    fips?: Settings.Fips;

    /**
     * Protocol Detection settings.
     */
    protocol_detection?: Settings.ProtocolDetection;

    /**
     * TLS interception settings.
     */
    tls_decrypt?: Settings.TLSDecrypt;
  }

  export namespace Settings {
    /**
     * Activity log settings.
     */
    export interface ActivityLog {
      /**
       * Enable activity logging.
       */
      enabled?: boolean;
    }

    /**
     * Anti-virus settings.
     */
    export interface Antivirus {
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
      notification_settings?: Antivirus.NotificationSettings;
    }

    export namespace Antivirus {
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
    }

    /**
     * Block page layout settings.
     */
    export interface BlockPage {
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
    export interface BodyScanning {
      /**
       * Set the inspection mode to either `deep` or `shallow`.
       */
      inspection_mode?: string;
    }

    /**
     * Browser isolation settings.
     */
    export interface BrowserIsolation {
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
     * Custom certificate settings for BYO-PKI.
     */
    export interface CustomCertificate {
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
    export interface Fips {
      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      tls?: boolean;
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
    export interface TLSDecrypt {
      /**
       * Enable inspecting encrypted HTTP traffic.
       */
      enabled?: boolean;
    }
  }
}

export interface ConfigurationUpdateParams {
  /**
   * account settings.
   */
  settings?: ConfigurationUpdateParams.Settings;
}

export namespace ConfigurationUpdateParams {
  /**
   * account settings.
   */
  export interface Settings {
    /**
     * Activity log settings.
     */
    activity_log?: Settings.ActivityLog;

    /**
     * Anti-virus settings.
     */
    antivirus?: Settings.Antivirus;

    /**
     * Block page layout settings.
     */
    block_page?: Settings.BlockPage;

    /**
     * DLP body scanning settings.
     */
    body_scanning?: Settings.BodyScanning;

    /**
     * Browser isolation settings.
     */
    browser_isolation?: Settings.BrowserIsolation;

    /**
     * Custom certificate settings for BYO-PKI.
     */
    custom_certificate?: Settings.CustomCertificate;

    /**
     * Extended e-mail matching settings.
     */
    extended_email_matching?: Settings.ExtendedEmailMatching;

    /**
     * FIPS settings.
     */
    fips?: Settings.Fips;

    /**
     * Protocol Detection settings.
     */
    protocol_detection?: Settings.ProtocolDetection;

    /**
     * TLS interception settings.
     */
    tls_decrypt?: Settings.TLSDecrypt;
  }

  export namespace Settings {
    /**
     * Activity log settings.
     */
    export interface ActivityLog {
      /**
       * Enable activity logging.
       */
      enabled?: boolean;
    }

    /**
     * Anti-virus settings.
     */
    export interface Antivirus {
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
      notification_settings?: Antivirus.NotificationSettings;
    }

    export namespace Antivirus {
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
    }

    /**
     * Block page layout settings.
     */
    export interface BlockPage {
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
    export interface BodyScanning {
      /**
       * Set the inspection mode to either `deep` or `shallow`.
       */
      inspection_mode?: string;
    }

    /**
     * Browser isolation settings.
     */
    export interface BrowserIsolation {
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
     * Custom certificate settings for BYO-PKI.
     */
    export interface CustomCertificate {
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
     * FIPS settings.
     */
    export interface Fips {
      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      tls?: boolean;
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
    export interface TLSDecrypt {
      /**
       * Enable inspecting encrypted HTTP traffic.
       */
      enabled?: boolean;
    }
  }
}

export interface ConfigurationReplaceParams {
  /**
   * account settings.
   */
  settings?: ConfigurationReplaceParams.Settings;
}

export namespace ConfigurationReplaceParams {
  /**
   * account settings.
   */
  export interface Settings {
    /**
     * Activity log settings.
     */
    activity_log?: Settings.ActivityLog;

    /**
     * Anti-virus settings.
     */
    antivirus?: Settings.Antivirus;

    /**
     * Block page layout settings.
     */
    block_page?: Settings.BlockPage;

    /**
     * DLP body scanning settings.
     */
    body_scanning?: Settings.BodyScanning;

    /**
     * Browser isolation settings.
     */
    browser_isolation?: Settings.BrowserIsolation;

    /**
     * Custom certificate settings for BYO-PKI.
     */
    custom_certificate?: Settings.CustomCertificate;

    /**
     * Extended e-mail matching settings.
     */
    extended_email_matching?: Settings.ExtendedEmailMatching;

    /**
     * FIPS settings.
     */
    fips?: Settings.Fips;

    /**
     * Protocol Detection settings.
     */
    protocol_detection?: Settings.ProtocolDetection;

    /**
     * TLS interception settings.
     */
    tls_decrypt?: Settings.TLSDecrypt;
  }

  export namespace Settings {
    /**
     * Activity log settings.
     */
    export interface ActivityLog {
      /**
       * Enable activity logging.
       */
      enabled?: boolean;
    }

    /**
     * Anti-virus settings.
     */
    export interface Antivirus {
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
      notification_settings?: Antivirus.NotificationSettings;
    }

    export namespace Antivirus {
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
    }

    /**
     * Block page layout settings.
     */
    export interface BlockPage {
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
    export interface BodyScanning {
      /**
       * Set the inspection mode to either `deep` or `shallow`.
       */
      inspection_mode?: string;
    }

    /**
     * Browser isolation settings.
     */
    export interface BrowserIsolation {
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
     * Custom certificate settings for BYO-PKI.
     */
    export interface CustomCertificate {
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
     * FIPS settings.
     */
    export interface Fips {
      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      tls?: boolean;
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
    export interface TLSDecrypt {
      /**
       * Enable inspecting encrypted HTTP traffic.
       */
      enabled?: boolean;
    }
  }
}

export namespace Configurations {
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationGetResponse = ConfigurationsAPI.ConfigurationGetResponse;
  export import ConfigurationReplaceResponse = ConfigurationsAPI.ConfigurationReplaceResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationReplaceParams = ConfigurationsAPI.ConfigurationReplaceParams;
}
