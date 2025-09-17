// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Logging extends APIResource {
  /**
   * Update logging settings for the current Zero Trust account.
   *
   * @example
   * ```ts
   * const loggingSetting =
   *   await client.zeroTrust.gateway.logging.update({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
   */
  update(params: LoggingUpdateParams, options?: RequestOptions): APIPromise<LoggingSetting> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/gateway/logging`, { body, ...options }) as APIPromise<{
        result: LoggingSetting;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the current logging settings for the Zero Trust account.
   *
   * @example
   * ```ts
   * const loggingSetting =
   *   await client.zeroTrust.gateway.logging.get({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
   */
  get(params: LoggingGetParams, options?: RequestOptions): APIPromise<LoggingSetting> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/gateway/logging`, options) as APIPromise<{
        result: LoggingSetting;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LoggingSetting {
  /**
   * Indicate whether to redact personally identifiable information from activity
   * logging (PII fields include source IP, user email, user ID, device ID, URL,
   * referrer, and user agent).
   */
  redact_pii?: boolean;

  /**
   * Configure logging settings for each rule type.
   */
  settings_by_rule_type?: LoggingSetting.SettingsByRuleType;
}

export namespace LoggingSetting {
  /**
   * Configure logging settings for each rule type.
   */
  export interface SettingsByRuleType {
    /**
     * Configure logging settings for DNS firewall.
     */
    dns?: SettingsByRuleType.DNS;

    /**
     * Configure logging settings for HTTP/HTTPS firewall.
     */
    http?: SettingsByRuleType.HTTP;

    /**
     * Configure logging settings for Network firewall.
     */
    l4?: SettingsByRuleType.L4;
  }

  export namespace SettingsByRuleType {
    /**
     * Configure logging settings for DNS firewall.
     */
    export interface DNS {
      /**
       * Specify whether to log all requests to this service.
       */
      log_all?: boolean;

      /**
       * Specify whether to log only blocking requests to this service.
       */
      log_blocks?: boolean;
    }

    /**
     * Configure logging settings for HTTP/HTTPS firewall.
     */
    export interface HTTP {
      /**
       * Specify whether to log all requests to this service.
       */
      log_all?: boolean;

      /**
       * Specify whether to log only blocking requests to this service.
       */
      log_blocks?: boolean;
    }

    /**
     * Configure logging settings for Network firewall.
     */
    export interface L4 {
      /**
       * Specify whether to log all requests to this service.
       */
      log_all?: boolean;

      /**
       * Specify whether to log only blocking requests to this service.
       */
      log_blocks?: boolean;
    }
  }
}

export interface LoggingUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Indicate whether to redact personally identifiable information from
   * activity logging (PII fields include source IP, user email, user ID, device ID,
   * URL, referrer, and user agent).
   */
  redact_pii?: boolean;

  /**
   * Body param: Configure logging settings for each rule type.
   */
  settings_by_rule_type?: LoggingUpdateParams.SettingsByRuleType;
}

export namespace LoggingUpdateParams {
  /**
   * Configure logging settings for each rule type.
   */
  export interface SettingsByRuleType {
    /**
     * Configure logging settings for DNS firewall.
     */
    dns?: SettingsByRuleType.DNS;

    /**
     * Configure logging settings for HTTP/HTTPS firewall.
     */
    http?: SettingsByRuleType.HTTP;

    /**
     * Configure logging settings for Network firewall.
     */
    l4?: SettingsByRuleType.L4;
  }

  export namespace SettingsByRuleType {
    /**
     * Configure logging settings for DNS firewall.
     */
    export interface DNS {
      /**
       * Specify whether to log all requests to this service.
       */
      log_all?: boolean;

      /**
       * Specify whether to log only blocking requests to this service.
       */
      log_blocks?: boolean;
    }

    /**
     * Configure logging settings for HTTP/HTTPS firewall.
     */
    export interface HTTP {
      /**
       * Specify whether to log all requests to this service.
       */
      log_all?: boolean;

      /**
       * Specify whether to log only blocking requests to this service.
       */
      log_blocks?: boolean;
    }

    /**
     * Configure logging settings for Network firewall.
     */
    export interface L4 {
      /**
       * Specify whether to log all requests to this service.
       */
      log_all?: boolean;

      /**
       * Specify whether to log only blocking requests to this service.
       */
      log_blocks?: boolean;
    }
  }
}

export interface LoggingGetParams {
  account_id: string;
}

export declare namespace Logging {
  export {
    type LoggingSetting as LoggingSetting,
    type LoggingUpdateParams as LoggingUpdateParams,
    type LoggingGetParams as LoggingGetParams,
  };
}
