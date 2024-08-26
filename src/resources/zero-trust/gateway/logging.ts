// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as LoggingAPI from './logging';

export class Logging extends APIResource {
  /**
   * Updates logging settings for the current Zero Trust account.
   */
  update(params: LoggingUpdateParams, options?: Core.RequestOptions): Core.APIPromise<LoggingSetting> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/gateway/logging`, { body, ...options }) as Core.APIPromise<{ result: LoggingSetting }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the current logging settings for Zero Trust account.
   */
  get(params: LoggingGetParams, options?: Core.RequestOptions): Core.APIPromise<LoggingSetting> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/gateway/logging`, options) as Core.APIPromise<{ result: LoggingSetting }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface LoggingSetting {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingSetting.SettingsByRuleType;
}

export namespace LoggingSetting {
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
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Redact personally identifiable information from activity logging
   * (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user
   * agent).
   */
  redact_pii?: boolean;

  /**
   * Body param: Logging settings by rule type.
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

export interface LoggingGetParams {
  account_id: string;
}

export namespace Logging {
  export import LoggingSetting = LoggingAPI.LoggingSetting;
  export import LoggingUpdateParams = LoggingAPI.LoggingUpdateParams;
  export import LoggingGetParams = LoggingAPI.LoggingGetParams;
}
