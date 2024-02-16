// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LoggingsAPI from 'cloudflare/resources/gateways/loggings';

export class Loggings extends APIResource {
  /**
   * Fetches the current logging settings for Zero Trust account.
   */
  zeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccount(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/logging`, options) as Core.APIPromise<{
        result: LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates logging settings for the current Zero Trust account.
   */
  zeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccount(
    accountId: unknown,
    body: LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse> {
    return (
      this._client.put(`/accounts/${accountId}/gateway/logging`, { body, ...options }) as Core.APIPromise<{
        result: LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse.SettingsByRuleType;
}

export namespace LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse {
  /**
   * Logging settings by rule type.
   */
  export interface SettingsByRuleType {
    /**
     * Logging settings for DNS firewall.
     */
    dns?: unknown;

    /**
     * Logging settings for HTTP/HTTPS firewall.
     */
    http?: unknown;

    /**
     * Logging settings for Network firewall.
     */
    l4?: unknown;
  }
}

export interface LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse.SettingsByRuleType;
}

export namespace LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse {
  /**
   * Logging settings by rule type.
   */
  export interface SettingsByRuleType {
    /**
     * Logging settings for DNS firewall.
     */
    dns?: unknown;

    /**
     * Logging settings for HTTP/HTTPS firewall.
     */
    http?: unknown;

    /**
     * Logging settings for Network firewall.
     */
    l4?: unknown;
  }
}

export interface LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams.SettingsByRuleType;
}

export namespace LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams {
  /**
   * Logging settings by rule type.
   */
  export interface SettingsByRuleType {
    /**
     * Logging settings for DNS firewall.
     */
    dns?: unknown;

    /**
     * Logging settings for HTTP/HTTPS firewall.
     */
    http?: unknown;

    /**
     * Logging settings for Network firewall.
     */
    l4?: unknown;
  }
}

export namespace Loggings {
  export import LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse = LoggingsAPI.LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse;
  export import LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse = LoggingsAPI.LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse;
  export import LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams = LoggingsAPI.LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams;
}
