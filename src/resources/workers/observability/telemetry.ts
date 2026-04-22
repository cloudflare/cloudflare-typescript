// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Telemetry extends APIResource {
  /**
   * List all the keys in your telemetry events.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const telemetryKeysResponse of client.workers.observability.telemetry.keys(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  keys(
    params: TelemetryKeysParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TelemetryKeysResponsesSinglePage, TelemetryKeysResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/observability/telemetry/keys`,
      TelemetryKeysResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Run a temporary or saved query.
   *
   * @example
   * ```ts
   * const response =
   *   await client.workers.observability.telemetry.query({
   *     account_id: 'account_id',
   *     queryId: 'queryId',
   *     timeframe: { from: 0, to: 0 },
   *   });
   * ```
   */
  query(
    params: TelemetryQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TelemetryQueryResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/observability/telemetry/query`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TelemetryQueryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List unique values found in your events.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const telemetryValuesResponse of client.workers.observability.telemetry.values(
   *   {
   *     account_id: 'account_id',
   *     datasets: ['string'],
   *     key: 'key',
   *     timeframe: { from: 0, to: 0 },
   *     type: 'string',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  values(
    params: TelemetryValuesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TelemetryValuesResponsesSinglePage, TelemetryValuesResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/observability/telemetry/values`,
      TelemetryValuesResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }
}

export class TelemetryKeysResponsesSinglePage extends SinglePage<TelemetryKeysResponse> {}

export class TelemetryValuesResponsesSinglePage extends SinglePage<TelemetryValuesResponse> {}

export interface TelemetryKeysResponse {
  key: string;

  lastSeenAt: number;

  type: 'string' | 'boolean' | 'number';
}

export interface TelemetryQueryResponse {
  /**
   * A Workers Observability Query Object
   */
  run: TelemetryQueryResponse.Run;

  /**
   * The statistics object contains information about query performance from the
   * database, it does not include any network latency
   */
  statistics: TelemetryQueryResponse.Statistics;

  agents?: Array<TelemetryQueryResponse.Agent>;

  calculations?: Array<TelemetryQueryResponse.Calculation>;

  compare?: Array<TelemetryQueryResponse.Compare>;

  events?: TelemetryQueryResponse.Events;

  invocations?: { [key: string]: Array<TelemetryQueryResponse.Invocation> };

  traces?: Array<TelemetryQueryResponse.Trace>;
}

export namespace TelemetryQueryResponse {
  /**
   * A Workers Observability Query Object
   */
  export interface Run {
    id: string;

    accountId: string;

    dry: boolean;

    granularity: number;

    query: Run.Query;

    status: 'STARTED' | 'COMPLETED';

    /**
     * Time range for the query execution
     */
    timeframe: Run.Timeframe;

    userId: string;

    created?: string;

    statistics?: Run.Statistics;

    updated?: string;
  }

  export namespace Run {
    export interface Query {
      id: string;

      /**
       * If the query wasn't explcitly saved
       */
      adhoc: boolean;

      created: string;

      createdBy: string;

      description: string | null;

      /**
       * Query name
       */
      name: string;

      parameters: Query.Parameters;

      updated: string;

      updatedBy: string;
    }

    export namespace Query {
      export interface Parameters {
        /**
         * Create Calculations to compute as part of the query.
         */
        calculations?: Array<Parameters.Calculation>;

        /**
         * Set the Datasets to query. Leave it empty to query all the datasets.
         */
        datasets?: Array<string>;

        /**
         * Set a Flag to describe how to combine the filters on the query.
         */
        filterCombination?: 'and' | 'or' | 'AND' | 'OR';

        /**
         * Configure the Filters to apply to the query. Supports nested groups via kind:
         * 'group'.
         */
        filters?: Array<Parameters.UnionMember0 | Parameters.WorkersObservabilityFilterLeaf>;

        /**
         * Define how to group the results of the query.
         */
        groupBys?: Array<Parameters.GroupBy>;

        /**
         * Configure the Having clauses that filter on calculations in the query result.
         */
        havings?: Array<Parameters.Having>;

        /**
         * Set a limit on the number of results / records returned by the query
         */
        limit?: number;

        /**
         * Define an expression to search using full-text search.
         */
        needle?: Parameters.Needle;

        /**
         * Configure the order of the results returned by the query.
         */
        orderBy?: Parameters.OrderBy;
      }

      export namespace Parameters {
        export interface Calculation {
          operator:
            | 'uniq'
            | 'count'
            | 'max'
            | 'min'
            | 'sum'
            | 'avg'
            | 'median'
            | 'p001'
            | 'p01'
            | 'p05'
            | 'p10'
            | 'p25'
            | 'p75'
            | 'p90'
            | 'p95'
            | 'p99'
            | 'p999'
            | 'stddev'
            | 'variance'
            | 'COUNT_DISTINCT'
            | 'COUNT'
            | 'MAX'
            | 'MIN'
            | 'SUM'
            | 'AVG'
            | 'MEDIAN'
            | 'P001'
            | 'P01'
            | 'P05'
            | 'P10'
            | 'P25'
            | 'P75'
            | 'P90'
            | 'P95'
            | 'P99'
            | 'P999'
            | 'STDDEV'
            | 'VARIANCE';

          alias?: string;

          key?: string;

          keyType?: 'string' | 'number' | 'boolean';
        }

        export interface UnionMember0 {
          filterCombination: 'and' | 'or' | 'AND' | 'OR';

          filters: Array<unknown>;

          kind: 'group';
        }

        /**
         * Filtering best practices: use observability_keys and observability_values to
         * confirm available fields and values. If searching for errors, filter for
         * $metadata.error exists.
         */
        export interface WorkersObservabilityFilterLeaf {
          /**
           * Filter field name. IMPORTANT: do not guess keys. Always use verified keys from
           * previous query results or the observability_keys response. Preferred keys:
           * $metadata.service, $metadata.origin, $metadata.trigger, $metadata.message,
           * $metadata.error.
           */
          key: string;

          operation:
            | 'includes'
            | 'not_includes'
            | 'starts_with'
            | 'regex'
            | 'exists'
            | 'is_null'
            | 'in'
            | 'not_in'
            | 'eq'
            | 'neq'
            | 'gt'
            | 'gte'
            | 'lt'
            | 'lte'
            | '='
            | '!='
            | '>'
            | '>='
            | '<'
            | '<='
            | 'INCLUDES'
            | 'DOES_NOT_INCLUDE'
            | 'MATCH_REGEX'
            | 'EXISTS'
            | 'DOES_NOT_EXIST'
            | 'IN'
            | 'NOT_IN'
            | 'STARTS_WITH';

          type: 'string' | 'number' | 'boolean';

          kind?: 'filter';

          /**
           * Filter comparison value. IMPORTANT: must match actual values in your logs.
           * Verify using previous query results or the /values endpoint. Ensure value type
           * matches the field type. String comparisons are case-sensitive unless using
           * specific operations. Regex uses ClickHouse RE2 syntax (no
           * lookaheads/lookbehinds); examples: ^5\d{2}$ for HTTP 5xx, \bERROR\b for word
           * boundary.
           */
          value?: string | number | boolean;
        }

        export interface GroupBy {
          type: 'string' | 'number' | 'boolean';

          value: string;
        }

        export interface Having {
          key: string;

          operation: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte';

          value: number;
        }

        /**
         * Define an expression to search using full-text search.
         */
        export interface Needle {
          value: Needle.Value;

          isRegex?: boolean;

          matchCase?: boolean;
        }

        export namespace Needle {
          export interface Value {}
        }

        /**
         * Configure the order of the results returned by the query.
         */
        export interface OrderBy {
          /**
           * Configure which Calculation to order the results by.
           */
          value: string;

          /**
           * Set the order of the results
           */
          order?: 'asc' | 'desc';
        }
      }
    }

    /**
     * Time range for the query execution
     */
    export interface Timeframe {
      /**
       * Start timestamp for the query timeframe (Unix timestamp in milliseconds)
       */
      from: number;

      /**
       * End timestamp for the query timeframe (Unix timestamp in milliseconds)
       */
      to: number;
    }

    export interface Statistics {
      /**
       * Number of uncompressed bytes read from the table.
       */
      bytes_read: number;

      /**
       * Time in seconds for the query to run.
       */
      elapsed: number;

      /**
       * Number of rows scanned from the table.
       */
      rows_read: number;

      /**
       * The level of Adaptive Bit Rate (ABR) sampling used for the query. If empty the
       * ABR level is 1
       */
      abr_level?: number;
    }
  }

  /**
   * The statistics object contains information about query performance from the
   * database, it does not include any network latency
   */
  export interface Statistics {
    /**
     * Number of uncompressed bytes read from the table.
     */
    bytes_read: number;

    /**
     * Time in seconds for the query to run.
     */
    elapsed: number;

    /**
     * Number of rows scanned from the table.
     */
    rows_read: number;

    /**
     * The level of Adaptive Bit Rate (ABR) sampling used for the query. If empty the
     * ABR level is 1
     */
    abr_level?: number;
  }

  export interface Agent {
    agentClass: string;

    eventTypeCounts: { [key: string]: number };

    firstEventMs: number;

    hasErrors: boolean;

    lastEventMs: number;

    namespace: string;

    service: string;

    totalEvents: number;
  }

  export interface Calculation {
    aggregates: Array<Calculation.Aggregate>;

    calculation: string;

    series: Array<Calculation.Series>;

    alias?: string;
  }

  export namespace Calculation {
    export interface Aggregate {
      count: number;

      interval: number;

      sampleInterval: number;

      value: number;

      groups?: Array<Aggregate.Group>;
    }

    export namespace Aggregate {
      export interface Group {
        key: string;

        value: string | number | boolean;
      }
    }

    export interface Series {
      data: Array<Series.Data>;

      time: string;
    }

    export namespace Series {
      export interface Data {
        count: number;

        interval: number;

        sampleInterval: number;

        value: number;

        firstSeen?: string;

        groups?: Array<Data.Group>;

        lastSeen?: string;
      }

      export namespace Data {
        export interface Group {
          key: string;

          value: string | number | boolean;
        }
      }
    }
  }

  export interface Compare {
    aggregates: Array<Compare.Aggregate>;

    calculation: string;

    series: Array<Compare.Series>;

    alias?: string;
  }

  export namespace Compare {
    export interface Aggregate {
      count: number;

      interval: number;

      sampleInterval: number;

      value: number;

      groups?: Array<Aggregate.Group>;
    }

    export namespace Aggregate {
      export interface Group {
        key: string;

        value: string | number | boolean;
      }
    }

    export interface Series {
      data: Array<Series.Data>;

      time: string;
    }

    export namespace Series {
      export interface Data {
        count: number;

        interval: number;

        sampleInterval: number;

        value: number;

        firstSeen?: string;

        groups?: Array<Data.Group>;

        lastSeen?: string;
      }

      export namespace Data {
        export interface Group {
          key: string;

          value: string | number | boolean;
        }
      }
    }
  }

  export interface Events {
    count?: number;

    events?: Array<Events.Event>;

    fields?: Array<Events.Field>;

    series?: Array<Events.Series>;
  }

  export namespace Events {
    /**
     * The data structure of a telemetry event
     */
    export interface Event {
      $metadata: Event.Metadata;

      dataset: string;

      source: string | unknown;

      timestamp: number;

      /**
       * Cloudflare Containers event information enriches your logs so you can easily
       * identify and debug issues.
       */
      $containers?: unknown;

      /**
       * Cloudflare Workers event information enriches your logs so you can easily
       * identify and debug issues.
       */
      $workers?: Event.UnionMember0 | Event.UnionMember1;
    }

    export namespace Event {
      export interface Metadata {
        /**
         * Unique event ID. Use as the cursor for offset-based pagination.
         */
        id: string;

        account?: string;

        cloudService?: string;

        coldStart?: number;

        cost?: number;

        duration?: number;

        endTime?: number;

        error?: string;

        errorTemplate?: string;

        fingerprint?: string;

        level?: string;

        message?: string;

        messageTemplate?: string;

        metricName?: string;

        origin?: string;

        parentSpanId?: string;

        provider?: string;

        region?: string;

        requestId?: string;

        service?: string;

        spanId?: string;

        spanName?: string;

        stackId?: string;

        startTime?: number;

        statusCode?: number;

        traceDuration?: number;

        traceId?: string;

        transactionName?: string;

        trigger?: string;

        type?: string;

        url?: string;
      }

      export interface UnionMember0 {
        eventType:
          | 'fetch'
          | 'scheduled'
          | 'alarm'
          | 'cron'
          | 'queue'
          | 'email'
          | 'tail'
          | 'rpc'
          | 'websocket'
          | 'workflow'
          | 'unknown';

        requestId: string;

        scriptName: string;

        durableObjectId?: string;

        entrypoint?: string;

        event?: { [key: string]: unknown };

        executionModel?: 'durableObject' | 'stateless';

        outcome?: string;

        scriptVersion?: UnionMember0.ScriptVersion;

        truncated?: boolean;
      }

      export namespace UnionMember0 {
        export interface ScriptVersion {
          id?: string;

          message?: string;

          tag?: string;
        }
      }

      export interface UnionMember1 {
        cpuTimeMs: number;

        eventType:
          | 'fetch'
          | 'scheduled'
          | 'alarm'
          | 'cron'
          | 'queue'
          | 'email'
          | 'tail'
          | 'rpc'
          | 'websocket'
          | 'workflow'
          | 'unknown';

        outcome: string;

        requestId: string;

        scriptName: string;

        wallTimeMs: number;

        diagnosticsChannelEvents?: Array<UnionMember1.DiagnosticsChannelEvent>;

        dispatchNamespace?: string;

        durableObjectId?: string;

        entrypoint?: string;

        event?: { [key: string]: unknown };

        executionModel?: 'durableObject' | 'stateless';

        scriptVersion?: UnionMember1.ScriptVersion;

        truncated?: boolean;
      }

      export namespace UnionMember1 {
        export interface DiagnosticsChannelEvent {
          channel: string;

          message: string;

          timestamp: number;
        }

        export interface ScriptVersion {
          id?: string;

          message?: string;

          tag?: string;
        }
      }
    }

    export interface Field {
      key: string;

      type: string;
    }

    export interface Series {
      data: Array<Series.Data>;

      time: string;
    }

    export namespace Series {
      export interface Data {
        aggregates: Data.Aggregates;

        count: number;

        interval: number;

        sampleInterval: number;

        errors?: number;

        /**
         * Groups in the query results.
         */
        groups?: { [key: string]: string | number | boolean };
      }

      export namespace Data {
        export interface Aggregates {
          /**
           * @deprecated
           */
          _count: number;

          /**
           * @deprecated
           */
          _interval: number;

          /**
           * @deprecated
           */
          _firstSeen?: string;

          /**
           * @deprecated
           */
          _lastSeen?: string;

          /**
           * @deprecated
           */
          bin?: unknown;
        }
      }
    }
  }

  /**
   * The data structure of a telemetry event
   */
  export interface Invocation {
    $metadata: Invocation.Metadata;

    dataset: string;

    source: string | unknown;

    timestamp: number;

    /**
     * Cloudflare Containers event information enriches your logs so you can easily
     * identify and debug issues.
     */
    $containers?: unknown;

    /**
     * Cloudflare Workers event information enriches your logs so you can easily
     * identify and debug issues.
     */
    $workers?: Invocation.UnionMember0 | Invocation.UnionMember1;
  }

  export namespace Invocation {
    export interface Metadata {
      /**
       * Unique event ID. Use as the cursor for offset-based pagination.
       */
      id: string;

      account?: string;

      cloudService?: string;

      coldStart?: number;

      cost?: number;

      duration?: number;

      endTime?: number;

      error?: string;

      errorTemplate?: string;

      fingerprint?: string;

      level?: string;

      message?: string;

      messageTemplate?: string;

      metricName?: string;

      origin?: string;

      parentSpanId?: string;

      provider?: string;

      region?: string;

      requestId?: string;

      service?: string;

      spanId?: string;

      spanName?: string;

      stackId?: string;

      startTime?: number;

      statusCode?: number;

      traceDuration?: number;

      traceId?: string;

      transactionName?: string;

      trigger?: string;

      type?: string;

      url?: string;
    }

    export interface UnionMember0 {
      eventType:
        | 'fetch'
        | 'scheduled'
        | 'alarm'
        | 'cron'
        | 'queue'
        | 'email'
        | 'tail'
        | 'rpc'
        | 'websocket'
        | 'workflow'
        | 'unknown';

      requestId: string;

      scriptName: string;

      durableObjectId?: string;

      entrypoint?: string;

      event?: { [key: string]: unknown };

      executionModel?: 'durableObject' | 'stateless';

      outcome?: string;

      scriptVersion?: UnionMember0.ScriptVersion;

      truncated?: boolean;
    }

    export namespace UnionMember0 {
      export interface ScriptVersion {
        id?: string;

        message?: string;

        tag?: string;
      }
    }

    export interface UnionMember1 {
      cpuTimeMs: number;

      eventType:
        | 'fetch'
        | 'scheduled'
        | 'alarm'
        | 'cron'
        | 'queue'
        | 'email'
        | 'tail'
        | 'rpc'
        | 'websocket'
        | 'workflow'
        | 'unknown';

      outcome: string;

      requestId: string;

      scriptName: string;

      wallTimeMs: number;

      diagnosticsChannelEvents?: Array<UnionMember1.DiagnosticsChannelEvent>;

      dispatchNamespace?: string;

      durableObjectId?: string;

      entrypoint?: string;

      event?: { [key: string]: unknown };

      executionModel?: 'durableObject' | 'stateless';

      scriptVersion?: UnionMember1.ScriptVersion;

      truncated?: boolean;
    }

    export namespace UnionMember1 {
      export interface DiagnosticsChannelEvent {
        channel: string;

        message: string;

        timestamp: number;
      }

      export interface ScriptVersion {
        id?: string;

        message?: string;

        tag?: string;
      }
    }
  }

  export interface Trace {
    rootSpanName: string;

    rootTransactionName: string;

    service: Array<string>;

    spans: number;

    traceDurationMs: number;

    traceEndMs: number;

    traceId: string;

    traceStartMs: number;

    errors?: Array<string>;
  }
}

export interface TelemetryValuesResponse {
  dataset: string;

  key: string;

  type: 'string' | 'boolean' | 'number';

  value: string | number | boolean;
}

export interface TelemetryKeysParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Leave this empty to use the default datasets
   */
  datasets?: Array<string>;

  /**
   * Body param: Apply filters to narrow key discovery. Supports nested groups via
   * kind: 'group'. Maximum nesting depth is 4.
   */
  filters?: Array<TelemetryKeysParams.UnionMember0 | TelemetryKeysParams.WorkersObservabilityFilterLeaf>;

  /**
   * Body param
   */
  from?: number;

  /**
   * Body param: If the user suggests a key, use this to narrow down the list of keys
   * returned. Make sure matchCase is false to avoid case sensitivity issues.
   */
  keyNeedle?: TelemetryKeysParams.KeyNeedle;

  /**
   * Body param: Advanced usage: set limit=1000+ to retrieve comprehensive key
   * options without needing additional filtering.
   */
  limit?: number;

  /**
   * Body param: Search for a specific substring in any of the events
   */
  needle?: TelemetryKeysParams.Needle;

  /**
   * Body param
   */
  to?: number;
}

export namespace TelemetryKeysParams {
  export interface UnionMember0 {
    filterCombination: 'and' | 'or' | 'AND' | 'OR';

    filters: Array<unknown>;

    kind: 'group';
  }

  /**
   * Filtering best practices: use observability_keys and observability_values to
   * confirm available fields and values. If searching for errors, filter for
   * $metadata.error exists.
   */
  export interface WorkersObservabilityFilterLeaf {
    /**
     * Filter field name. IMPORTANT: do not guess keys. Always use verified keys from
     * previous query results or the observability_keys response. Preferred keys:
     * $metadata.service, $metadata.origin, $metadata.trigger, $metadata.message,
     * $metadata.error.
     */
    key: string;

    operation:
      | 'includes'
      | 'not_includes'
      | 'starts_with'
      | 'regex'
      | 'exists'
      | 'is_null'
      | 'in'
      | 'not_in'
      | 'eq'
      | 'neq'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | '='
      | '!='
      | '>'
      | '>='
      | '<'
      | '<='
      | 'INCLUDES'
      | 'DOES_NOT_INCLUDE'
      | 'MATCH_REGEX'
      | 'EXISTS'
      | 'DOES_NOT_EXIST'
      | 'IN'
      | 'NOT_IN'
      | 'STARTS_WITH';

    type: 'string' | 'number' | 'boolean';

    kind?: 'filter';

    /**
     * Filter comparison value. IMPORTANT: must match actual values in your logs.
     * Verify using previous query results or the /values endpoint. Ensure value type
     * matches the field type. String comparisons are case-sensitive unless using
     * specific operations. Regex uses ClickHouse RE2 syntax (no
     * lookaheads/lookbehinds); examples: ^5\d{2}$ for HTTP 5xx, \bERROR\b for word
     * boundary.
     */
    value?: string | number | boolean;
  }

  /**
   * If the user suggests a key, use this to narrow down the list of keys returned.
   * Make sure matchCase is false to avoid case sensitivity issues.
   */
  export interface KeyNeedle {
    value: string | number | boolean;

    isRegex?: boolean;

    matchCase?: boolean;
  }

  /**
   * Search for a specific substring in any of the events
   */
  export interface Needle {
    value: string | number | boolean;

    isRegex?: boolean;

    matchCase?: boolean;
  }
}

export interface TelemetryQueryParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Unique identifier for the query to execute
   */
  queryId: string;

  /**
   * Body param: Timeframe for your query using Unix timestamps in milliseconds.
   * Provide from/to epoch ms; narrower timeframes provide faster responses and more
   * specific results.
   */
  timeframe: TelemetryQueryParams.Timeframe;

  /**
   * Body param: Whether to include timeseties data in the response
   */
  chart?: boolean;

  /**
   * Body param: Whether to include comparison data with previous time periods
   */
  compare?: boolean;

  /**
   * Body param: Whether to perform a dry run without saving the results of the
   * query. Useful for validation
   */
  dry?: boolean;

  /**
   * Body param: This is only used when the view is calculations. Leaving it empty
   * lets Workers Observability detect the correct granularity.
   */
  granularity?: number;

  /**
   * Body param: Whether to ignore time-series data in the results and return only
   * aggregated values
   */
  ignoreSeries?: boolean;

  /**
   * Body param: Use this limit to cap the number of events returned when the view is
   * events.
   */
  limit?: number;

  /**
   * Body param: Cursor pagination for event/trace/invocation views. Pass the last
   * item's $metadata.id as the next offset.
   */
  offset?: string;

  /**
   * Body param: Numeric offset for pattern results (top-N list). Use with limit to
   * page pattern groups; not used by cursor pagination.
   */
  offsetBy?: number;

  /**
   * Body param: Direction for offset-based pagination (e.g., 'next', 'prev')
   */
  offsetDirection?: string;

  /**
   * Body param: Optional parameters to pass to the query execution
   */
  parameters?: TelemetryQueryParams.Parameters;

  /**
   * Body param: Examples by view type. Events: show errors for a worker in the last
   * 30 minutes. Calculations: p99 of wall time or count by status code. Invocations:
   * find a specific request that resulted in a 500.
   */
  view?: 'traces' | 'events' | 'calculations' | 'invocations' | 'requests' | 'agents';
}

export namespace TelemetryQueryParams {
  /**
   * Timeframe for your query using Unix timestamps in milliseconds. Provide from/to
   * epoch ms; narrower timeframes provide faster responses and more specific
   * results.
   */
  export interface Timeframe {
    /**
     * Start timestamp for the query timeframe (Unix timestamp in milliseconds)
     */
    from: number;

    /**
     * End timestamp for the query timeframe (Unix timestamp in milliseconds)
     */
    to: number;
  }

  /**
   * Optional parameters to pass to the query execution
   */
  export interface Parameters {
    /**
     * Create Calculations to compute as part of the query.
     */
    calculations?: Array<Parameters.Calculation>;

    /**
     * Set the Datasets to query. Leave it empty to query all the datasets.
     */
    datasets?: Array<string>;

    /**
     * Set a Flag to describe how to combine the filters on the query.
     */
    filterCombination?: 'and' | 'or' | 'AND' | 'OR';

    /**
     * Configure the Filters to apply to the query. Supports nested groups via kind:
     * 'group'. Maximum nesting depth is 4.
     */
    filters?: Array<Parameters.UnionMember0 | Parameters.WorkersObservabilityFilterLeaf>;

    /**
     * Define how to group the results of the query.
     */
    groupBys?: Array<Parameters.GroupBy>;

    /**
     * Configure the Having clauses that filter on calculations in the query result.
     */
    havings?: Array<Parameters.Having>;

    /**
     * Set a limit on the number of results / records returned by the query
     */
    limit?: number;

    /**
     * Define an expression to search using full-text search.
     */
    needle?: Parameters.Needle;

    /**
     * Configure the order of the results returned by the query.
     */
    orderBy?: Parameters.OrderBy;
  }

  export namespace Parameters {
    export interface Calculation {
      operator:
        | 'uniq'
        | 'count'
        | 'max'
        | 'min'
        | 'sum'
        | 'avg'
        | 'median'
        | 'p001'
        | 'p01'
        | 'p05'
        | 'p10'
        | 'p25'
        | 'p75'
        | 'p90'
        | 'p95'
        | 'p99'
        | 'p999'
        | 'stddev'
        | 'variance'
        | 'COUNT_DISTINCT'
        | 'COUNT'
        | 'MAX'
        | 'MIN'
        | 'SUM'
        | 'AVG'
        | 'MEDIAN'
        | 'P001'
        | 'P01'
        | 'P05'
        | 'P10'
        | 'P25'
        | 'P75'
        | 'P90'
        | 'P95'
        | 'P99'
        | 'P999'
        | 'STDDEV'
        | 'VARIANCE';

      alias?: string;

      /**
       * The key to use for the calculation. This key must exist in the logs. Use the
       * observability_keys response to confirm. Do not guess keys.
       */
      key?: string;

      keyType?: 'string' | 'number' | 'boolean';
    }

    export interface UnionMember0 {
      filterCombination: 'and' | 'or' | 'AND' | 'OR';

      filters: Array<unknown>;

      kind: 'group';
    }

    /**
     * Filtering best practices: use observability_keys and observability_values to
     * confirm available fields and values. If searching for errors, filter for
     * $metadata.error exists.
     */
    export interface WorkersObservabilityFilterLeaf {
      /**
       * Filter field name. IMPORTANT: do not guess keys. Always use verified keys from
       * previous query results or the observability_keys response. Preferred keys:
       * $metadata.service, $metadata.origin, $metadata.trigger, $metadata.message,
       * $metadata.error.
       */
      key: string;

      operation:
        | 'includes'
        | 'not_includes'
        | 'starts_with'
        | 'regex'
        | 'exists'
        | 'is_null'
        | 'in'
        | 'not_in'
        | 'eq'
        | 'neq'
        | 'gt'
        | 'gte'
        | 'lt'
        | 'lte'
        | '='
        | '!='
        | '>'
        | '>='
        | '<'
        | '<='
        | 'INCLUDES'
        | 'DOES_NOT_INCLUDE'
        | 'MATCH_REGEX'
        | 'EXISTS'
        | 'DOES_NOT_EXIST'
        | 'IN'
        | 'NOT_IN'
        | 'STARTS_WITH';

      type: 'string' | 'number' | 'boolean';

      kind?: 'filter';

      /**
       * Filter comparison value. IMPORTANT: must match actual values in your logs.
       * Verify using previous query results or the /values endpoint. Ensure value type
       * matches the field type. String comparisons are case-sensitive unless using
       * specific operations. Regex uses ClickHouse RE2 syntax (no
       * lookaheads/lookbehinds); examples: ^5\d{2}$ for HTTP 5xx, \bERROR\b for word
       * boundary.
       */
      value?: string | number | boolean;
    }

    export interface GroupBy {
      type: 'string' | 'number' | 'boolean';

      value: string;
    }

    export interface Having {
      key: string;

      operation: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte';

      value: number;
    }

    /**
     * Define an expression to search using full-text search.
     */
    export interface Needle {
      value: string | number | boolean;

      isRegex?: boolean;

      matchCase?: boolean;
    }

    /**
     * Configure the order of the results returned by the query.
     */
    export interface OrderBy {
      /**
       * Configure which Calculation to order the results by.
       */
      value: string;

      /**
       * Set the order of the results
       */
      order?: 'asc' | 'desc';
    }
  }
}

export interface TelemetryValuesParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Leave this empty to use the default datasets
   */
  datasets: Array<string>;

  /**
   * Body param
   */
  key: string;

  /**
   * Body param
   */
  timeframe: TelemetryValuesParams.Timeframe;

  /**
   * Body param
   */
  type: 'string' | 'boolean' | 'number';

  /**
   * Body param: Apply filters before listing values. Supports nested groups via
   * kind: 'group'. Maximum nesting depth is 4.
   */
  filters?: Array<TelemetryValuesParams.UnionMember0 | TelemetryValuesParams.WorkersObservabilityFilterLeaf>;

  /**
   * Body param
   */
  limit?: number;

  /**
   * Body param: Search for a specific substring in the event.
   */
  needle?: TelemetryValuesParams.Needle;
}

export namespace TelemetryValuesParams {
  export interface Timeframe {
    from: number;

    to: number;
  }

  export interface UnionMember0 {
    filterCombination: 'and' | 'or' | 'AND' | 'OR';

    filters: Array<unknown>;

    kind: 'group';
  }

  /**
   * Filtering best practices: use observability_keys and observability_values to
   * confirm available fields and values. If searching for errors, filter for
   * $metadata.error exists.
   */
  export interface WorkersObservabilityFilterLeaf {
    /**
     * Filter field name. IMPORTANT: do not guess keys. Always use verified keys from
     * previous query results or the observability_keys response. Preferred keys:
     * $metadata.service, $metadata.origin, $metadata.trigger, $metadata.message,
     * $metadata.error.
     */
    key: string;

    operation:
      | 'includes'
      | 'not_includes'
      | 'starts_with'
      | 'regex'
      | 'exists'
      | 'is_null'
      | 'in'
      | 'not_in'
      | 'eq'
      | 'neq'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | '='
      | '!='
      | '>'
      | '>='
      | '<'
      | '<='
      | 'INCLUDES'
      | 'DOES_NOT_INCLUDE'
      | 'MATCH_REGEX'
      | 'EXISTS'
      | 'DOES_NOT_EXIST'
      | 'IN'
      | 'NOT_IN'
      | 'STARTS_WITH';

    type: 'string' | 'number' | 'boolean';

    kind?: 'filter';

    /**
     * Filter comparison value. IMPORTANT: must match actual values in your logs.
     * Verify using previous query results or the /values endpoint. Ensure value type
     * matches the field type. String comparisons are case-sensitive unless using
     * specific operations. Regex uses ClickHouse RE2 syntax (no
     * lookaheads/lookbehinds); examples: ^5\d{2}$ for HTTP 5xx, \bERROR\b for word
     * boundary.
     */
    value?: string | number | boolean;
  }

  /**
   * Search for a specific substring in the event.
   */
  export interface Needle {
    value: string | number | boolean;

    isRegex?: boolean;

    matchCase?: boolean;
  }
}

Telemetry.TelemetryKeysResponsesSinglePage = TelemetryKeysResponsesSinglePage;
Telemetry.TelemetryValuesResponsesSinglePage = TelemetryValuesResponsesSinglePage;

export declare namespace Telemetry {
  export {
    type TelemetryKeysResponse as TelemetryKeysResponse,
    type TelemetryQueryResponse as TelemetryQueryResponse,
    type TelemetryValuesResponse as TelemetryValuesResponse,
    TelemetryKeysResponsesSinglePage as TelemetryKeysResponsesSinglePage,
    TelemetryValuesResponsesSinglePage as TelemetryValuesResponsesSinglePage,
    type TelemetryKeysParams as TelemetryKeysParams,
    type TelemetryQueryParams as TelemetryQueryParams,
    type TelemetryValuesParams as TelemetryValuesParams,
  };
}
