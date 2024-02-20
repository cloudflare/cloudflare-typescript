// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LoggingsAPI from 'cloudflare/resources/gateways/loggings';

export class Loggings extends APIResource {
  /**
   * Updates logging settings for the current Zero Trust account.
   */
  update(
    accountId: unknown,
    body: LoggingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoggingUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/gateway/logging`, { body, ...options }) as Core.APIPromise<{
        result: LoggingUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the current logging settings for Zero Trust account.
   */
  get(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<LoggingGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/logging`, options) as Core.APIPromise<{
        result: LoggingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LoggingUpdateResponse {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingUpdateResponse.SettingsByRuleType;
}

export namespace LoggingUpdateResponse {
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

export interface LoggingGetResponse {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingGetResponse.SettingsByRuleType;
}

export namespace LoggingGetResponse {
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

export interface LoggingUpdateParams {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingUpdateParams.SettingsByRuleType;
}

export namespace LoggingUpdateParams {
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
  export import LoggingUpdateResponse = LoggingsAPI.LoggingUpdateResponse;
  export import LoggingGetResponse = LoggingsAPI.LoggingGetResponse;
  export import LoggingUpdateParams = LoggingsAPI.LoggingUpdateParams;
}
