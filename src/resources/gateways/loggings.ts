// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LoggingsAPI from 'cloudflare/resources/gateways/loggings';

export class Loggings extends APIResource {
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

  /**
   * Updates logging settings for the current Zero Trust account.
   */
  replace(
    accountId: unknown,
    body: LoggingReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoggingReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/gateway/logging`, { body, ...options }) as Core.APIPromise<{
        result: LoggingReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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

export interface LoggingReplaceResponse {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingReplaceResponse.SettingsByRuleType;
}

export namespace LoggingReplaceResponse {
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

export interface LoggingReplaceParams {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingReplaceParams.SettingsByRuleType;
}

export namespace LoggingReplaceParams {
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
  export import LoggingGetResponse = LoggingsAPI.LoggingGetResponse;
  export import LoggingReplaceResponse = LoggingsAPI.LoggingReplaceResponse;
  export import LoggingReplaceParams = LoggingsAPI.LoggingReplaceParams;
}
