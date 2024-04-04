// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AnalyticsAPI from 'cloudflare/resources/storage/analytics';

export class Analytics extends APIResource {
  /**
   * Retrieves Workers KV request metrics for the given account.
   */
  list(params: AnalyticsListParams, options?: Core.RequestOptions): Core.APIPromise<WorkersKVSchemasResult> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/storage/analytics`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: WorkersKVSchemasResult }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves Workers KV stored data metrics for the given account.
   */
  stored(
    params: AnalyticsStoredParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkersKVComponentsSchemasResult> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/storage/analytics/stored`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: WorkersKVComponentsSchemasResult }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UnnamedSchemaRef608bee5065f7314d6fa572b89a1910f7 {
  /**
   * List of metrics returned by the query.
   */
  metrics: Array<unknown>;
}

/**
 * Metrics on Workers KV requests.
 */
export interface WorkersKVComponentsSchemasResult {
  data: Array<UnnamedSchemaRef608bee5065f7314d6fa572b89a1910f7> | null;

  /**
   * Number of seconds between current time and last processed event, i.e. how many
   * seconds of data could be missing.
   */
  data_lag: number;

  /**
   * Maximum results for each metric.
   */
  max: unknown;

  /**
   * Minimum results for each metric.
   */
  min: unknown;

  /**
   * For specifying result metrics.
   */
  query: WorkersKVComponentsSchemasResult.Query;

  /**
   * Total number of rows in the result.
   */
  rows: number;

  /**
   * Total results for metrics across all data.
   */
  totals: unknown;
}

export namespace WorkersKVComponentsSchemasResult {
  /**
   * For specifying result metrics.
   */
  export interface Query {
    /**
     * Can be used to break down the data by given attributes.
     */
    dimensions?: Array<string>;

    /**
     * Used to filter rows by one or more dimensions. Filters can be combined using OR
     * and AND boolean logic. AND takes precedence over OR in all the expressions. The
     * OR operator is defined using a comma (,) or OR keyword surrounded by whitespace.
     * The AND operator is defined using a semicolon (;) or AND keyword surrounded by
     * whitespace. Note that the semicolon is a reserved character in URLs (rfc1738)
     * and needs to be percent-encoded as %3B. Comparison options are:
     *
     * | Operator | Name                     | URL Encoded |
     * | -------- | ------------------------ | ----------- |
     * | ==       | Equals                   | %3D%3D      |
     * | !=       | Does not equals          | !%3D        |
     * | >        | Greater Than             | %3E         |
     * | <        | Less Than                | %3C         |
     * | >=       | Greater than or equal to | %3E%3D      |
     * | <=       | Less than or equal to    | %3C%3D .    |
     */
    filters?: string;

    /**
     * Limit number of returned metrics.
     */
    limit?: number;

    /**
     * One or more metrics to compute.
     */
    metrics?: Array<string>;

    /**
     * Start of time interval to query, defaults to 6 hours before request received.
     */
    since?: string;

    /**
     * Array of dimensions or metrics to sort by, each dimension/metric may be prefixed
     * by - (descending) or + (ascending).
     */
    sort?: Array<unknown>;

    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
  }
}

/**
 * Metrics on Workers KV requests.
 */
export interface WorkersKVSchemasResult {
  data: Array<UnnamedSchemaRef608bee5065f7314d6fa572b89a1910f7> | null;

  /**
   * Number of seconds between current time and last processed event, i.e. how many
   * seconds of data could be missing.
   */
  data_lag: number;

  /**
   * Maximum results for each metric.
   */
  max: unknown;

  /**
   * Minimum results for each metric.
   */
  min: unknown;

  /**
   * For specifying result metrics.
   */
  query: WorkersKVSchemasResult.Query;

  /**
   * Total number of rows in the result.
   */
  rows: number;

  /**
   * Total results for metrics across all data.
   */
  totals: unknown;
}

export namespace WorkersKVSchemasResult {
  /**
   * For specifying result metrics.
   */
  export interface Query {
    /**
     * Can be used to break down the data by given attributes.
     */
    dimensions?: Array<string>;

    /**
     * Used to filter rows by one or more dimensions. Filters can be combined using OR
     * and AND boolean logic. AND takes precedence over OR in all the expressions. The
     * OR operator is defined using a comma (,) or OR keyword surrounded by whitespace.
     * The AND operator is defined using a semicolon (;) or AND keyword surrounded by
     * whitespace. Note that the semicolon is a reserved character in URLs (rfc1738)
     * and needs to be percent-encoded as %3B. Comparison options are:
     *
     * | Operator | Name                     | URL Encoded |
     * | -------- | ------------------------ | ----------- |
     * | ==       | Equals                   | %3D%3D      |
     * | !=       | Does not equals          | !%3D        |
     * | >        | Greater Than             | %3E         |
     * | <        | Less Than                | %3C         |
     * | >=       | Greater than or equal to | %3E%3D      |
     * | <=       | Less than or equal to    | %3C%3D .    |
     */
    filters?: string;

    /**
     * Limit number of returned metrics.
     */
    limit?: number;

    /**
     * One or more metrics to compute.
     */
    metrics?: Array<string>;

    /**
     * Start of time interval to query, defaults to 6 hours before request received.
     */
    since?: string;

    /**
     * Array of dimensions or metrics to sort by, each dimension/metric may be prefixed
     * by - (descending) or + (ascending).
     */
    sort?: Array<unknown>;

    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
  }
}

export interface AnalyticsListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: For specifying result metrics.
   */
  query?: AnalyticsListParams.Query;
}

export namespace AnalyticsListParams {
  /**
   * For specifying result metrics.
   */
  export interface Query {
    /**
     * Can be used to break down the data by given attributes.
     */
    dimensions?: Array<'accountId' | 'responseCode' | 'requestType'>;

    /**
     * Used to filter rows by one or more dimensions. Filters can be combined using OR
     * and AND boolean logic. AND takes precedence over OR in all the expressions. The
     * OR operator is defined using a comma (,) or OR keyword surrounded by whitespace.
     * The AND operator is defined using a semicolon (;) or AND keyword surrounded by
     * whitespace. Note that the semicolon is a reserved character in URLs (rfc1738)
     * and needs to be percent-encoded as %3B. Comparison options are:
     *
     * | Operator | Name                     | URL Encoded |
     * | -------- | ------------------------ | ----------- |
     * | ==       | Equals                   | %3D%3D      |
     * | !=       | Does not equals          | !%3D        |
     * | >        | Greater Than             | %3E         |
     * | <        | Less Than                | %3C         |
     * | >=       | Greater than or equal to | %3E%3D      |
     * | <=       | Less than or equal to    | %3C%3D .    |
     */
    filters?: string;

    /**
     * Limit number of returned metrics.
     */
    limit?: number;

    /**
     * One or more metrics to compute.
     */
    metrics?: Array<'requests' | 'writeKiB' | 'readKiB'>;

    /**
     * Start of time interval to query, defaults to 6 hours before request received.
     */
    since?: string;

    /**
     * Array of dimensions or metrics to sort by, each dimension/metric may be prefixed
     * by - (descending) or + (ascending).
     */
    sort?: Array<unknown>;

    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
  }
}

export interface AnalyticsStoredParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: For specifying result metrics.
   */
  query?: AnalyticsStoredParams.Query;
}

export namespace AnalyticsStoredParams {
  /**
   * For specifying result metrics.
   */
  export interface Query {
    /**
     * Can be used to break down the data by given attributes.
     */
    dimensions?: Array<'namespaceId'>;

    /**
     * Used to filter rows by one or more dimensions. Filters can be combined using OR
     * and AND boolean logic. AND takes precedence over OR in all the expressions. The
     * OR operator is defined using a comma (,) or OR keyword surrounded by whitespace.
     * The AND operator is defined using a semicolon (;) or AND keyword surrounded by
     * whitespace. Note that the semicolon is a reserved character in URLs (rfc1738)
     * and needs to be percent-encoded as %3B. Comparison options are:
     *
     * | Operator | Name                     | URL Encoded |
     * | -------- | ------------------------ | ----------- |
     * | ==       | Equals                   | %3D%3D      |
     * | !=       | Does not equals          | !%3D        |
     * | >        | Greater Than             | %3E         |
     * | <        | Less Than                | %3C         |
     * | >=       | Greater than or equal to | %3E%3D      |
     * | <=       | Less than or equal to    | %3C%3D .    |
     */
    filters?: string;

    /**
     * Limit number of returned metrics.
     */
    limit?: number;

    /**
     * One or more metrics to compute.
     */
    metrics?: Array<'storedBytes' | 'storedKeys'>;

    /**
     * Start of time interval to query, defaults to 6 hours before request received.
     */
    since?: string;

    /**
     * Array of dimensions or metrics to sort by, each dimension/metric may be prefixed
     * by - (descending) or + (ascending).
     */
    sort?: Array<unknown>;

    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
  }
}

export namespace Analytics {
  export import UnnamedSchemaRef608bee5065f7314d6fa572b89a1910f7 = AnalyticsAPI.UnnamedSchemaRef608bee5065f7314d6fa572b89a1910f7;
  export import WorkersKVComponentsSchemasResult = AnalyticsAPI.WorkersKVComponentsSchemasResult;
  export import WorkersKVSchemasResult = AnalyticsAPI.WorkersKVSchemasResult;
  export import AnalyticsListParams = AnalyticsAPI.AnalyticsListParams;
  export import AnalyticsStoredParams = AnalyticsAPI.AnalyticsStoredParams;
}
