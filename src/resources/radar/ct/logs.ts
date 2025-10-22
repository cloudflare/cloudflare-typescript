// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * Retrieves a list of certificate logs.
   *
   * @example
   * ```ts
   * const logs = await client.radar.ct.logs.list();
   * ```
   */
  list(query: LogListParams | null | undefined = {}, options?: RequestOptions): APIPromise<LogListResponse> {
    return (
      this._client.get('/radar/ct/logs', { query, ...options }) as APIPromise<{ result: LogListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the requested certificate log information.
   *
   * @example
   * ```ts
   * const log = await client.radar.ct.logs.get('argon2024');
   * ```
   */
  get(
    logSlug: string,
    query: LogGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogGetResponse> {
    return (
      this._client.get(path`/radar/ct/logs/${logSlug}`, { query, ...options }) as APIPromise<{
        result: LogGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LogListResponse {
  certificateLogs: Array<LogListResponse.CertificateLog>;
}

export namespace LogListResponse {
  export interface CertificateLog {
    /**
     * The API standard that the certificate log follows.
     */
    api: 'RFC6962' | 'STATIC';

    /**
     * A brief description of the certificate log.
     */
    description: string;

    /**
     * The end date and time for when the log will stop accepting certificates.
     */
    endExclusive: string;

    /**
     * The organization responsible for operating the certificate log.
     */
    operator: string;

    /**
     * A URL-friendly, kebab-case identifier for the certificate log.
     */
    slug: string;

    /**
     * The start date and time for when the log starts accepting certificates.
     */
    startInclusive: string;

    /**
     * The current state of the certificate log. More details about log states can be
     * found here:
     * https://googlechrome.github.io/CertificateTransparency/log_states.html
     */
    state: 'USABLE' | 'PENDING' | 'QUALIFIED' | 'READ_ONLY' | 'RETIRED' | 'REJECTED';

    /**
     * Timestamp of when the log state was last updated.
     */
    stateTimestamp: string;

    /**
     * The URL for the certificate log.
     */
    url: string;
  }
}

export interface LogGetResponse {
  certificateLog: LogGetResponse.CertificateLog;
}

export namespace LogGetResponse {
  export interface CertificateLog {
    /**
     * The API standard that the certificate log follows.
     */
    api: 'RFC6962' | 'STATIC';

    /**
     * A brief description of the certificate log.
     */
    description: string;

    /**
     * The end date and time for when the log will stop accepting certificates.
     */
    endExclusive: string;

    /**
     * The organization responsible for operating the certificate log.
     */
    operator: string;

    /**
     * Log performance metrics, including averages and per-endpoint details.
     */
    performance: CertificateLog.Performance | null;

    /**
     * Logs from the same operator.
     */
    related: Array<CertificateLog.Related>;

    /**
     * A URL-friendly, kebab-case identifier for the certificate log.
     */
    slug: string;

    /**
     * The start date and time for when the log starts accepting certificates.
     */
    startInclusive: string;

    /**
     * The current state of the certificate log. More details about log states can be
     * found here:
     * https://googlechrome.github.io/CertificateTransparency/log_states.html
     */
    state: 'USABLE' | 'PENDING' | 'QUALIFIED' | 'READ_ONLY' | 'RETIRED' | 'REJECTED';

    /**
     * Timestamp of when the log state was last updated.
     */
    stateTimestamp: string;

    /**
     * The URL for the certificate log.
     */
    url: string;
  }

  export namespace CertificateLog {
    /**
     * Log performance metrics, including averages and per-endpoint details.
     */
    export interface Performance {
      endpoints: Array<Performance.Endpoint>;

      responseTime: number;

      uptime: number;
    }

    export namespace Performance {
      export interface Endpoint {
        /**
         * The certificate log endpoint names used in performance metrics.
         */
        endpoint:
          | 'add-chain (new)'
          | 'add-chain (old)'
          | 'add-pre-chain (new)'
          | 'add-pre-chain (old)'
          | 'get-entries'
          | 'get-roots'
          | 'get-sth';

        responseTime: number;

        uptime: number;
      }
    }

    export interface Related {
      /**
       * A brief description of the certificate log.
       */
      description: string;

      /**
       * The end date and time for when the log will stop accepting certificates.
       */
      endExclusive: string;

      /**
       * A URL-friendly, kebab-case identifier for the certificate log.
       */
      slug: string;

      /**
       * The start date and time for when the log starts accepting certificates.
       */
      startInclusive: string;

      /**
       * The current state of the certificate log. More details about log states can be
       * found here:
       * https://googlechrome.github.io/CertificateTransparency/log_states.html
       */
      state: 'USABLE' | 'PENDING' | 'QUALIFIED' | 'READ_ONLY' | 'RETIRED' | 'REJECTED';
    }
  }
}

export interface LogListParams {
  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Skips the specified number of objects before fetching the results.
   */
  offset?: number;
}

export interface LogGetParams {
  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

export declare namespace Logs {
  export {
    type LogListResponse as LogListResponse,
    type LogGetResponse as LogGetResponse,
    type LogListParams as LogListParams,
    type LogGetParams as LogGetParams,
  };
}
