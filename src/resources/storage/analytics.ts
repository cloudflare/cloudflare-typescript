// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AnalyticsAPI from './analytics';

export class Analytics extends APIResource {
  /**
   * Retrieves Workers KV request metrics for the given account.
   */
  list(params: AnalyticsListParams, options?: Core.RequestOptions): Core.APIPromise<Schema> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/storage/analytics`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Schema }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves Workers KV stored data metrics for the given account.
   */
  stored(params: AnalyticsStoredParams, options?: Core.RequestOptions): Core.APIPromise<Components> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/storage/analytics/stored`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Components }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Metrics on Workers KV requests.
 */
export interface Components {
  data: Array<Components.Data> | null;

  /**
   * Number of seconds between current time and last processed event, i.e. how many
   * seconds of data could be missing.
   */
  data_lag: number;

  /**
   * Maximum results for each metric.
   */
  max: Record<string, number>;

  /**
   * Minimum results for each metric.
   */
  min: Record<string, number>;

  /**
   * For specifying result metrics.
   */
  query: Components.Query;

  /**
   * Total number of rows in the result.
   */
  rows: number;

  /**
   * Total results for metrics across all data.
   */
  totals: Record<string, number>;

  /**
   * Time interval buckets by beginning and ending
   */
  time_intervals?: Array<Array<string>>;
}

export namespace Components {
  export interface Data {
    /**
     * List of metrics returned by the query.
     */
    metrics: Array<Array<number>>;

    dimensions?: Array<string>;
  }

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
    sort?: Array<string>;

    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
  }
}

/**
 * Metrics on Workers KV requests.
 */
export interface Schema {
  data: Array<Schema.Data> | null;

  /**
   * Number of seconds between current time and last processed event, i.e. how many
   * seconds of data could be missing.
   */
  data_lag: number;

  /**
   * Maximum results for each metric.
   */
  max: Record<string, number>;

  /**
   * Minimum results for each metric.
   */
  min: Record<string, number>;

  /**
   * For specifying result metrics.
   */
  query: Schema.Query;

  /**
   * Total number of rows in the result.
   */
  rows: number;

  /**
   * Total results for metrics across all data.
   */
  totals: Record<string, number>;

  /**
   * Time interval buckets by beginning and ending
   */
  time_intervals?: Array<Array<string>>;
}

export namespace Schema {
  export interface Data {
    /**
     * List of metrics returned by the query.
     */
    metrics: Array<Array<number>>;

    dimensions?: Array<string>;
  }

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
    sort?: Array<string>;

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
    sort?: Array<string>;

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
    sort?: Array<string>;

    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
  }
}

export namespace Analytics {
  export import Components = AnalyticsAPI.Components;
  export import Schema = AnalyticsAPI.Schema;
  export import AnalyticsListParams = AnalyticsAPI.AnalyticsListParams;
  export import AnalyticsStoredParams = AnalyticsAPI.AnalyticsStoredParams;
}
