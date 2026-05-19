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

/**
 * Complete results of a query run. The populated fields depend on the requested
 * view type (events, calculations, invocations, traces, or agents).
 */
export interface TelemetryQueryResponse {
  /**
   * Represents a single execution of a query against Workers Observability data,
   * including the query definition, execution status, and performance statistics.
   */
  run: TelemetryQueryResponse.Run;

  /**
   * Query performance statistics from the database. Includes execution time, rows
   * scanned, and bytes read. Does not include network latency.
   */
  statistics: TelemetryQueryResponse.Statistics;

  /**
   * Durable Object agent summaries. Present when the query view is 'agents'. Each
   * entry represents an agent with its event counts and status.
   */
  agents?: Array<TelemetryQueryResponse.Agent>;

  /**
   * Aggregated calculation results. Present when the query view is 'calculations'.
   * Contains computed metrics (count, avg, p99, etc.) with optional group-by
   * breakdowns and time-series data.
   */
  calculations?: Array<TelemetryQueryResponse.Calculation>;

  /**
   * Comparison calculation results from the previous time period. Present when the
   * compare option is enabled. Same structure as calculations.
   */
  compare?: Array<TelemetryQueryResponse.Compare>;

  /**
   * Individual event results. Present when the query view is 'events'. Contains the
   * matching log lines and their metadata.
   */
  events?: TelemetryQueryResponse.Events;

  /**
   * Events grouped by invocation (request ID). Present when the query view is
   * 'invocations'. Each key is a request ID mapping to all events from that
   * invocation.
   */
  invocations?: { [key: string]: Array<TelemetryQueryResponse.Invocation> };

  /**
   * Trace summaries matching the query. Present when the query view is 'traces'.
   * Each entry represents a distributed trace with its spans, duration, and services
   * involved.
   */
  traces?: Array<TelemetryQueryResponse.Trace>;
}

export namespace TelemetryQueryResponse {
  /**
   * Represents a single execution of a query against Workers Observability data,
   * including the query definition, execution status, and performance statistics.
   */
  export interface Run {
    /**
     * Unique identifier for this query run.
     */
    id: string;

    /**
     * Cloudflare account ID that owns this query run.
     */
    accountId: string;

    /**
     * Whether this was a dry run (results not persisted).
     */
    dry: boolean;

    /**
     * Number of time-series buckets used for the query. Higher values produce more
     * detailed series data.
     */
    granularity: number;

    /**
     * A saved query definition with its parameters, metadata, and ownership
     * information.
     */
    query: Run.Query;

    /**
     * Current execution status of the query run.
     */
    status: 'STARTED' | 'COMPLETED';

    /**
     * Time range for the query execution
     */
    timeframe: Run.Timeframe;

    /**
     * ID of the user who initiated the query run.
     */
    userId: string;

    /**
     * ISO-8601 timestamp when the query run was created.
     */
    created?: string;

    /**
     * Query performance statistics from the database (does not include network
     * latency).
     */
    statistics?: Run.Statistics;

    /**
     * ISO-8601 timestamp when the query run was last updated.
     */
    updated?: string;
  }

  export namespace Run {
    /**
     * A saved query definition with its parameters, metadata, and ownership
     * information.
     */
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
         * A filter condition applied to query results. Use the keys and values endpoints
         * to discover available fields and their values before constructing filters.
         */
        export interface WorkersObservabilityFilterLeaf {
          /**
           * Filter field name. Use verified keys from previous query results or the keys
           * endpoint. Common keys include $metadata.service, $metadata.origin,
           * $metadata.trigger, $metadata.message, and $metadata.error.
           */
          key: string;

          /**
           * Comparison operator. String operators: includes, not_includes, starts_with,
           * ends_with, regex. Existence: exists, is_null. Set membership: in, not_in
           * (comma-separated values). Numeric: eq, neq, gt, gte, lt, lte.
           */
          operation:
            | 'includes'
            | 'not_includes'
            | 'starts_with'
            | 'ends_with'
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
            | 'STARTS_WITH'
            | 'ENDS_WITH';

          /**
           * Data type of the filter field. Must match the actual type of the key being
           * filtered.
           */
          type: 'string' | 'number' | 'boolean';

          /**
           * Discriminator for leaf filter nodes. Always 'filter' when present; may be
           * omitted.
           */
          kind?: 'filter';

          /**
           * Comparison value. Must match actual values in your data — verify with the values
           * endpoint. Ensure the value type (string/number/boolean) matches the field type.
           * String comparisons are case-sensitive. Regex uses RE2 syntax (no
           * lookaheads/lookbehinds).
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

    /**
     * Query performance statistics from the database (does not include network
     * latency).
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
  }

  /**
   * Query performance statistics from the database. Includes execution time, rows
   * scanned, and bytes read. Does not include network latency.
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
    /**
     * Class name of the Durable Object agent.
     */
    agentClass: string;

    /**
     * Breakdown of event counts by event type.
     */
    eventTypeCounts: { [key: string]: number };

    /**
     * Timestamp of the earliest event from this agent in the queried window (Unix
     * epoch ms).
     */
    firstEventMs: number;

    /**
     * Whether the agent emitted any error events in the queried window.
     */
    hasErrors: boolean;

    /**
     * Timestamp of the most recent event from this agent (Unix epoch ms).
     */
    lastEventMs: number;

    /**
     * Durable Object namespace the agent belongs to.
     */
    namespace: string;

    /**
     * Worker service name that hosts this agent.
     */
    service: string;

    /**
     * Total number of events emitted by this agent in the queried window.
     */
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

  /**
   * Individual event results. Present when the query view is 'events'. Contains the
   * matching log lines and their metadata.
   */
  export interface Events {
    /**
     * Total number of events matching the query (may exceed the number returned due to
     * limits).
     */
    count?: number;

    /**
     * List of individual telemetry events matching the query.
     */
    events?: Array<Events.Event>;

    /**
     * List of fields discovered in the matched events. Useful for building dynamic
     * UIs.
     */
    fields?: Array<Events.Field>;

    /**
     * Time-series data for the matched events, bucketed by the query granularity.
     */
    series?: Array<Events.Series>;
  }

  export namespace Events {
    /**
     * A single telemetry event representing a log line, span, or metric data point
     * emitted by a Worker.
     */
    export interface Event {
      /**
       * Structured metadata extracted from the event. These fields are indexed and
       * available for filtering and aggregation.
       */
      $metadata: Event.Metadata;

      /**
       * The dataset this event belongs to (e.g. cloudflare-workers).
       */
      dataset: string;

      /**
       * Raw log payload. May be a string or a structured object depending on how the log
       * was emitted.
       */
      source: string | { [key: string]: unknown };

      /**
       * Event timestamp as a Unix epoch in milliseconds.
       */
      timestamp: number;

      /**
       * Cloudflare Containers event information that enriches your logs for identifying
       * and debugging issues.
       */
      $containers?: { [key: string]: unknown };

      /**
       * Cloudflare Workers event information that enriches your logs for identifying and
       * debugging issues.
       */
      $workers?: Event.UnionMember0 | Event.UnionMember1;
    }

    export namespace Event {
      /**
       * Structured metadata extracted from the event. These fields are indexed and
       * available for filtering and aggregation.
       */
      export interface Metadata {
        /**
         * Unique event ID. Use as the cursor value for offset-based pagination.
         */
        id: string;

        /**
         * Cloudflare account identifier.
         */
        account?: string;

        /**
         * Cloudflare product that generated this event (e.g. workers, pages).
         */
        cloudService?: string;

        coldStart?: number;

        /**
         * Estimated cost units for this invocation.
         */
        cost?: number;

        /**
         * Span duration in milliseconds.
         */
        duration?: number;

        /**
         * Span end time as a Unix epoch in milliseconds.
         */
        endTime?: number;

        /**
         * Error message, present when the log represents an error.
         */
        error?: string;

        /**
         * Templatized version of the error message used for grouping similar errors.
         */
        errorTemplate?: string;

        /**
         * Content-based fingerprint used to group similar events.
         */
        fingerprint?: string;

        /**
         * Log level (e.g. log, debug, info, warn, error).
         */
        level?: string;

        /**
         * Log message text.
         */
        message?: string;

        /**
         * Templatized version of the log message used for grouping similar messages.
         */
        messageTemplate?: string;

        /**
         * Metric name when the event represents a metric data point.
         */
        metricName?: string;

        /**
         * Origin of the event (e.g. fetch, scheduled, queue).
         */
        origin?: string;

        /**
         * Span ID of the parent span in the trace hierarchy.
         */
        parentSpanId?: string;

        /**
         * Infrastructure provider identifier.
         */
        provider?: string;

        /**
         * Cloudflare data center / region that handled the request.
         */
        region?: string;

        /**
         * Cloudflare request ID that ties all logs from a single invocation together.
         */
        requestId?: string;

        /**
         * Worker script name that produced this event.
         */
        service?: string;

        /**
         * Span ID for this individual unit of work within a trace.
         */
        spanId?: string;

        /**
         * Human-readable name for this span.
         */
        spanName?: string;

        /**
         * Stack / deployment identifier.
         */
        stackId?: string;

        /**
         * Span start time as a Unix epoch in milliseconds.
         */
        startTime?: number;

        /**
         * HTTP response status code returned by the Worker.
         */
        statusCode?: number;

        /**
         * Total duration of the entire trace in milliseconds.
         */
        traceDuration?: number;

        /**
         * Distributed trace ID linking spans across services.
         */
        traceId?: string;

        /**
         * Logical transaction name for this request.
         */
        transactionName?: string;

        /**
         * What triggered the invocation (e.g. GET /users, POST /orders, queue message).
         */
        trigger?: string;

        /**
         * Event type classifier (e.g. cf-worker-event, cf-worker-log).
         */
        type?: string;

        /**
         * Request URL that triggered the Worker invocation.
         */
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

        preview?: UnionMember0.Preview;

        scriptVersion?: UnionMember0.ScriptVersion;

        spanId?: string;

        traceId?: string;

        truncated?: boolean;
      }

      export namespace UnionMember0 {
        export interface Preview {
          id?: string;

          name?: string;

          slug?: string;
        }

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

        preview?: UnionMember1.Preview;

        scriptVersion?: UnionMember1.ScriptVersion;

        spanId?: string;

        traceId?: string;

        truncated?: boolean;
      }

      export namespace UnionMember1 {
        export interface DiagnosticsChannelEvent {
          channel: string;

          message: string;

          timestamp: number;
        }

        export interface Preview {
          id?: string;

          name?: string;

          slug?: string;
        }

        export interface ScriptVersion {
          id?: string;

          message?: string;

          tag?: string;
        }
      }
    }

    export interface Field {
      /**
       * Field name present in the matched events.
       */
      key: string;

      /**
       * Data type of the field (string, number, or boolean).
       */
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
   * A single telemetry event representing a log line, span, or metric data point
   * emitted by a Worker.
   */
  export interface Invocation {
    /**
     * Structured metadata extracted from the event. These fields are indexed and
     * available for filtering and aggregation.
     */
    $metadata: Invocation.Metadata;

    /**
     * The dataset this event belongs to (e.g. cloudflare-workers).
     */
    dataset: string;

    /**
     * Raw log payload. May be a string or a structured object depending on how the log
     * was emitted.
     */
    source: string | { [key: string]: unknown };

    /**
     * Event timestamp as a Unix epoch in milliseconds.
     */
    timestamp: number;

    /**
     * Cloudflare Containers event information that enriches your logs for identifying
     * and debugging issues.
     */
    $containers?: { [key: string]: unknown };

    /**
     * Cloudflare Workers event information that enriches your logs for identifying and
     * debugging issues.
     */
    $workers?: Invocation.UnionMember0 | Invocation.UnionMember1;
  }

  export namespace Invocation {
    /**
     * Structured metadata extracted from the event. These fields are indexed and
     * available for filtering and aggregation.
     */
    export interface Metadata {
      /**
       * Unique event ID. Use as the cursor value for offset-based pagination.
       */
      id: string;

      /**
       * Cloudflare account identifier.
       */
      account?: string;

      /**
       * Cloudflare product that generated this event (e.g. workers, pages).
       */
      cloudService?: string;

      coldStart?: number;

      /**
       * Estimated cost units for this invocation.
       */
      cost?: number;

      /**
       * Span duration in milliseconds.
       */
      duration?: number;

      /**
       * Span end time as a Unix epoch in milliseconds.
       */
      endTime?: number;

      /**
       * Error message, present when the log represents an error.
       */
      error?: string;

      /**
       * Templatized version of the error message used for grouping similar errors.
       */
      errorTemplate?: string;

      /**
       * Content-based fingerprint used to group similar events.
       */
      fingerprint?: string;

      /**
       * Log level (e.g. log, debug, info, warn, error).
       */
      level?: string;

      /**
       * Log message text.
       */
      message?: string;

      /**
       * Templatized version of the log message used for grouping similar messages.
       */
      messageTemplate?: string;

      /**
       * Metric name when the event represents a metric data point.
       */
      metricName?: string;

      /**
       * Origin of the event (e.g. fetch, scheduled, queue).
       */
      origin?: string;

      /**
       * Span ID of the parent span in the trace hierarchy.
       */
      parentSpanId?: string;

      /**
       * Infrastructure provider identifier.
       */
      provider?: string;

      /**
       * Cloudflare data center / region that handled the request.
       */
      region?: string;

      /**
       * Cloudflare request ID that ties all logs from a single invocation together.
       */
      requestId?: string;

      /**
       * Worker script name that produced this event.
       */
      service?: string;

      /**
       * Span ID for this individual unit of work within a trace.
       */
      spanId?: string;

      /**
       * Human-readable name for this span.
       */
      spanName?: string;

      /**
       * Stack / deployment identifier.
       */
      stackId?: string;

      /**
       * Span start time as a Unix epoch in milliseconds.
       */
      startTime?: number;

      /**
       * HTTP response status code returned by the Worker.
       */
      statusCode?: number;

      /**
       * Total duration of the entire trace in milliseconds.
       */
      traceDuration?: number;

      /**
       * Distributed trace ID linking spans across services.
       */
      traceId?: string;

      /**
       * Logical transaction name for this request.
       */
      transactionName?: string;

      /**
       * What triggered the invocation (e.g. GET /users, POST /orders, queue message).
       */
      trigger?: string;

      /**
       * Event type classifier (e.g. cf-worker-event, cf-worker-log).
       */
      type?: string;

      /**
       * Request URL that triggered the Worker invocation.
       */
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

      preview?: UnionMember0.Preview;

      scriptVersion?: UnionMember0.ScriptVersion;

      spanId?: string;

      traceId?: string;

      truncated?: boolean;
    }

    export namespace UnionMember0 {
      export interface Preview {
        id?: string;

        name?: string;

        slug?: string;
      }

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

      preview?: UnionMember1.Preview;

      scriptVersion?: UnionMember1.ScriptVersion;

      spanId?: string;

      traceId?: string;

      truncated?: boolean;
    }

    export namespace UnionMember1 {
      export interface DiagnosticsChannelEvent {
        channel: string;

        message: string;

        timestamp: number;
      }

      export interface Preview {
        id?: string;

        name?: string;

        slug?: string;
      }

      export interface ScriptVersion {
        id?: string;

        message?: string;

        tag?: string;
      }
    }
  }

  export interface Trace {
    /**
     * Name of the root span that initiated the trace.
     */
    rootSpanName: string;

    /**
     * Logical transaction name for the root span.
     */
    rootTransactionName: string;

    /**
     * List of Worker services involved in the trace.
     */
    service: Array<string>;

    /**
     * Total number of spans in the trace.
     */
    spans: number;

    /**
     * Total duration of the trace in milliseconds.
     */
    traceDurationMs: number;

    /**
     * Trace end time as a Unix epoch in milliseconds.
     */
    traceEndMs: number;

    /**
     * Unique identifier for the distributed trace.
     */
    traceId: string;

    /**
     * Trace start time as a Unix epoch in milliseconds.
     */
    traceStartMs: number;

    /**
     * Error messages encountered during the trace, if any.
     */
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

    filters: Array<UnionMember0.UnionMember0 | UnionMember0.WorkersObservabilityFilterLeaf>;

    kind: 'group';
  }

  export namespace UnionMember0 {
    export interface UnionMember0 {
      filterCombination: 'and' | 'or' | 'AND' | 'OR';

      filters: Array<unknown>;

      kind: 'group';
    }

    /**
     * A filter condition applied to query results. Use the keys and values endpoints
     * to discover available fields and their values before constructing filters.
     */
    export interface WorkersObservabilityFilterLeaf {
      /**
       * Filter field name. Use verified keys from previous query results or the keys
       * endpoint. Common keys include $metadata.service, $metadata.origin,
       * $metadata.trigger, $metadata.message, and $metadata.error.
       */
      key: string;

      /**
       * Comparison operator. String operators: includes, not_includes, starts_with,
       * ends_with, regex. Existence: exists, is_null. Set membership: in, not_in
       * (comma-separated values). Numeric: eq, neq, gt, gte, lt, lte.
       */
      operation:
        | 'includes'
        | 'not_includes'
        | 'starts_with'
        | 'ends_with'
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
        | 'STARTS_WITH'
        | 'ENDS_WITH';

      /**
       * Data type of the filter field. Must match the actual type of the key being
       * filtered.
       */
      type: 'string' | 'number' | 'boolean';

      /**
       * Discriminator for leaf filter nodes. Always 'filter' when present; may be
       * omitted.
       */
      kind?: 'filter';

      /**
       * Comparison value. Must match actual values in your data — verify with the values
       * endpoint. Ensure the value type (string/number/boolean) matches the field type.
       * String comparisons are case-sensitive. Regex uses RE2 syntax (no
       * lookaheads/lookbehinds).
       */
      value?: string | number | boolean;
    }
  }

  /**
   * A filter condition applied to query results. Use the keys and values endpoints
   * to discover available fields and their values before constructing filters.
   */
  export interface WorkersObservabilityFilterLeaf {
    /**
     * Filter field name. Use verified keys from previous query results or the keys
     * endpoint. Common keys include $metadata.service, $metadata.origin,
     * $metadata.trigger, $metadata.message, and $metadata.error.
     */
    key: string;

    /**
     * Comparison operator. String operators: includes, not_includes, starts_with,
     * ends_with, regex. Existence: exists, is_null. Set membership: in, not_in
     * (comma-separated values). Numeric: eq, neq, gt, gte, lt, lte.
     */
    operation:
      | 'includes'
      | 'not_includes'
      | 'starts_with'
      | 'ends_with'
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
      | 'STARTS_WITH'
      | 'ENDS_WITH';

    /**
     * Data type of the filter field. Must match the actual type of the key being
     * filtered.
     */
    type: 'string' | 'number' | 'boolean';

    /**
     * Discriminator for leaf filter nodes. Always 'filter' when present; may be
     * omitted.
     */
    kind?: 'filter';

    /**
     * Comparison value. Must match actual values in your data — verify with the values
     * endpoint. Ensure the value type (string/number/boolean) matches the field type.
     * String comparisons are case-sensitive. Regex uses RE2 syntax (no
     * lookaheads/lookbehinds).
     */
    value?: string | number | boolean;
  }

  /**
   * If the user suggests a key, use this to narrow down the list of keys returned.
   * Make sure matchCase is false to avoid case sensitivity issues.
   */
  export interface KeyNeedle {
    /**
     * The text or pattern to search for.
     */
    value: string | number | boolean;

    /**
     * When true, treats the value as a regular expression (RE2 syntax).
     */
    isRegex?: boolean;

    /**
     * When true, performs a case-sensitive search. Defaults to case-insensitive.
     */
    matchCase?: boolean;
  }

  /**
   * Search for a specific substring in any of the events
   */
  export interface Needle {
    /**
     * The text or pattern to search for.
     */
    value: string | number | boolean;

    /**
     * When true, treats the value as a regular expression (RE2 syntax).
     */
    isRegex?: boolean;

    /**
     * When true, performs a case-sensitive search. Defaults to case-insensitive.
     */
    matchCase?: boolean;
  }
}

export interface TelemetryQueryParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Identifier for the query. When parameters are omitted, this ID is
   * used to load a previously saved query's parameters. When providing parameters
   * inline, pass any identifier (e.g. an ad-hoc ID).
   */
  queryId: string;

  /**
   * Body param: Timeframe for the query using Unix timestamps in milliseconds.
   * Narrower timeframes produce faster responses and more specific results.
   */
  timeframe: TelemetryQueryParams.Timeframe;

  /**
   * Body param: When true, includes time-series data in the response.
   */
  chart?: boolean;

  /**
   * Body param: When true, includes a comparison dataset from the previous time
   * period of equal length.
   */
  compare?: boolean;

  /**
   * Body param: When true, executes the query without persisting the results. Useful
   * for validation or previewing.
   */
  dry?: boolean;

  /**
   * Body param: Number of time-series buckets. Only used when view is
   * 'calculations'. Omit to let the system auto-detect an appropriate granularity.
   */
  granularity?: number;

  /**
   * Body param: When true, omits time-series data from the response and returns only
   * aggregated values. Reduces response size when series are not needed.
   */
  ignoreSeries?: boolean;

  /**
   * Body param: Maximum number of events to return when view is 'events'. Also
   * controls the number of group-by rows when view is 'calculations'.
   */
  limit?: number;

  /**
   * Body param: Cursor for pagination in event, trace, and invocation views. Pass
   * the $metadata.id of the last returned item to fetch the next page.
   */
  offset?: string;

  /**
   * Body param: Numeric offset for paginating grouped/pattern results (top-N lists).
   * Use together with limit. Not used by cursor-based pagination.
   */
  offsetBy?: number;

  /**
   * Body param: Pagination direction: 'next' for forward, 'prev' for backward.
   */
  offsetDirection?: string;

  /**
   * Body param: Query parameters defining what data to retrieve — filters,
   * calculations, group-bys, and ordering. In practice this should always be
   * provided for ad-hoc queries. Only omit when executing a previously saved query
   * by queryId. Use the keys and values endpoints to discover available fields
   * before building filters.
   */
  parameters?: TelemetryQueryParams.Parameters;

  /**
   * Body param: Controls the shape of the response. 'events': individual log lines
   * matching the query. 'calculations': aggregated metrics (count, avg, p99, etc.)
   * with optional group-by breakdowns and time-series. 'invocations': events grouped
   * by request ID. 'traces': distributed trace summaries. 'agents': Durable Object
   * agent summaries.
   */
  view?: 'traces' | 'events' | 'calculations' | 'invocations' | 'requests' | 'agents';
}

export namespace TelemetryQueryParams {
  /**
   * Timeframe for the query using Unix timestamps in milliseconds. Narrower
   * timeframes produce faster responses and more specific results.
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
   * Query parameters defining what data to retrieve — filters, calculations,
   * group-bys, and ordering. In practice this should always be provided for ad-hoc
   * queries. Only omit when executing a previously saved query by queryId. Use the
   * keys and values endpoints to discover available fields before building filters.
   */
  export interface Parameters {
    /**
     * Aggregation calculations to compute (e.g. count, avg, p99). Each calculation
     * produces aggregate values and optional time-series data.
     */
    calculations?: Array<Parameters.Calculation>;

    /**
     * Datasets to query. Leave empty to query all available datasets.
     */
    datasets?: Array<string>;

    /**
     * Logical operator for combining top-level filters: 'and' (all must match) or 'or'
     * (any must match). Defaults to 'and'.
     */
    filterCombination?: 'and' | 'or' | 'AND' | 'OR';

    /**
     * Filters to narrow query results. Use the keys and values endpoints to discover
     * available fields before building filters. Supports nested groups via kind:
     * 'group'. Maximum nesting depth is 4.
     */
    filters?: Array<Parameters.UnionMember0 | Parameters.WorkersObservabilityFilterLeaf>;

    /**
     * Fields to group calculation results by. Only applicable when the query view is
     * 'calculations'. Produces per-group aggregate values.
     */
    groupBys?: Array<Parameters.GroupBy>;

    /**
     * Post-aggregation filters applied to calculation results. Use to filter groups
     * after aggregation (e.g. only groups where count > 100).
     */
    havings?: Array<Parameters.Having>;

    /**
     * Maximum number of group-by rows to return in calculation results. A value of 10
     * is a sensible default for most use cases.
     */
    limit?: number;

    /**
     * Full-text search expression applied across all event fields. Matches events
     * containing the specified text.
     */
    needle?: Parameters.Needle;

    /**
     * Ordering for grouped calculation results. Only effective when a group-by is
     * present.
     */
    orderBy?: Parameters.OrderBy;
  }

  export namespace Parameters {
    export interface Calculation {
      /**
       * Aggregation operator to apply. Examples: count, avg, sum, min, max, median, p90,
       * p95, p99, uniq, stddev, variance.
       */
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

      /**
       * Custom label for this calculation in the results. Useful for distinguishing
       * multiple calculations.
       */
      alias?: string;

      /**
       * Field name to calculate over. Must exist in the data — verify with the keys
       * endpoint. Omit for operators that don't require a key (e.g. count).
       */
      key?: string;

      /**
       * Data type of the key. Required when key is provided to ensure correct
       * aggregation.
       */
      keyType?: 'string' | 'number' | 'boolean';
    }

    export interface UnionMember0 {
      filterCombination: 'and' | 'or' | 'AND' | 'OR';

      filters: Array<UnionMember0.UnionMember0 | UnionMember0.WorkersObservabilityFilterLeaf>;

      kind: 'group';
    }

    export namespace UnionMember0 {
      export interface UnionMember0 {
        filterCombination: 'and' | 'or' | 'AND' | 'OR';

        filters: Array<unknown>;

        kind: 'group';
      }

      /**
       * A filter condition applied to query results. Use the keys and values endpoints
       * to discover available fields and their values before constructing filters.
       */
      export interface WorkersObservabilityFilterLeaf {
        /**
         * Filter field name. Use verified keys from previous query results or the keys
         * endpoint. Common keys include $metadata.service, $metadata.origin,
         * $metadata.trigger, $metadata.message, and $metadata.error.
         */
        key: string;

        /**
         * Comparison operator. String operators: includes, not_includes, starts_with,
         * ends_with, regex. Existence: exists, is_null. Set membership: in, not_in
         * (comma-separated values). Numeric: eq, neq, gt, gte, lt, lte.
         */
        operation:
          | 'includes'
          | 'not_includes'
          | 'starts_with'
          | 'ends_with'
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
          | 'STARTS_WITH'
          | 'ENDS_WITH';

        /**
         * Data type of the filter field. Must match the actual type of the key being
         * filtered.
         */
        type: 'string' | 'number' | 'boolean';

        /**
         * Discriminator for leaf filter nodes. Always 'filter' when present; may be
         * omitted.
         */
        kind?: 'filter';

        /**
         * Comparison value. Must match actual values in your data — verify with the values
         * endpoint. Ensure the value type (string/number/boolean) matches the field type.
         * String comparisons are case-sensitive. Regex uses RE2 syntax (no
         * lookaheads/lookbehinds).
         */
        value?: string | number | boolean;
      }
    }

    /**
     * A filter condition applied to query results. Use the keys and values endpoints
     * to discover available fields and their values before constructing filters.
     */
    export interface WorkersObservabilityFilterLeaf {
      /**
       * Filter field name. Use verified keys from previous query results or the keys
       * endpoint. Common keys include $metadata.service, $metadata.origin,
       * $metadata.trigger, $metadata.message, and $metadata.error.
       */
      key: string;

      /**
       * Comparison operator. String operators: includes, not_includes, starts_with,
       * ends_with, regex. Existence: exists, is_null. Set membership: in, not_in
       * (comma-separated values). Numeric: eq, neq, gt, gte, lt, lte.
       */
      operation:
        | 'includes'
        | 'not_includes'
        | 'starts_with'
        | 'ends_with'
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
        | 'STARTS_WITH'
        | 'ENDS_WITH';

      /**
       * Data type of the filter field. Must match the actual type of the key being
       * filtered.
       */
      type: 'string' | 'number' | 'boolean';

      /**
       * Discriminator for leaf filter nodes. Always 'filter' when present; may be
       * omitted.
       */
      kind?: 'filter';

      /**
       * Comparison value. Must match actual values in your data — verify with the values
       * endpoint. Ensure the value type (string/number/boolean) matches the field type.
       * String comparisons are case-sensitive. Regex uses RE2 syntax (no
       * lookaheads/lookbehinds).
       */
      value?: string | number | boolean;
    }

    export interface GroupBy {
      /**
       * Data type of the group-by field.
       */
      type: 'string' | 'number' | 'boolean';

      /**
       * Field name to group results by (e.g. $metadata.service, $metadata.statusCode).
       */
      value: string;
    }

    export interface Having {
      /**
       * Calculation alias or operator to filter on after aggregation.
       */
      key: string;

      /**
       * Numeric comparison operator: eq, neq, gt, gte, lt, lte.
       */
      operation: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte';

      /**
       * Threshold value to compare the calculation result against.
       */
      value: number;
    }

    /**
     * Full-text search expression applied across all event fields. Matches events
     * containing the specified text.
     */
    export interface Needle {
      /**
       * The text or pattern to search for.
       */
      value: string | number | boolean;

      /**
       * When true, treats the value as a regular expression (RE2 syntax).
       */
      isRegex?: boolean;

      /**
       * When true, performs a case-sensitive search. Defaults to case-insensitive.
       */
      matchCase?: boolean;
    }

    /**
     * Ordering for grouped calculation results. Only effective when a group-by is
     * present.
     */
    export interface OrderBy {
      /**
       * Alias of the calculation to order results by. Must match the alias (or operator)
       * of a calculation in the query.
       */
      value: string;

      /**
       * Sort direction: 'asc' for ascending, 'desc' for descending.
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
   * Body param: Full-text search expression to match events containing the specified
   * text or pattern.
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

    filters: Array<UnionMember0.UnionMember0 | UnionMember0.WorkersObservabilityFilterLeaf>;

    kind: 'group';
  }

  export namespace UnionMember0 {
    export interface UnionMember0 {
      filterCombination: 'and' | 'or' | 'AND' | 'OR';

      filters: Array<unknown>;

      kind: 'group';
    }

    /**
     * A filter condition applied to query results. Use the keys and values endpoints
     * to discover available fields and their values before constructing filters.
     */
    export interface WorkersObservabilityFilterLeaf {
      /**
       * Filter field name. Use verified keys from previous query results or the keys
       * endpoint. Common keys include $metadata.service, $metadata.origin,
       * $metadata.trigger, $metadata.message, and $metadata.error.
       */
      key: string;

      /**
       * Comparison operator. String operators: includes, not_includes, starts_with,
       * ends_with, regex. Existence: exists, is_null. Set membership: in, not_in
       * (comma-separated values). Numeric: eq, neq, gt, gte, lt, lte.
       */
      operation:
        | 'includes'
        | 'not_includes'
        | 'starts_with'
        | 'ends_with'
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
        | 'STARTS_WITH'
        | 'ENDS_WITH';

      /**
       * Data type of the filter field. Must match the actual type of the key being
       * filtered.
       */
      type: 'string' | 'number' | 'boolean';

      /**
       * Discriminator for leaf filter nodes. Always 'filter' when present; may be
       * omitted.
       */
      kind?: 'filter';

      /**
       * Comparison value. Must match actual values in your data — verify with the values
       * endpoint. Ensure the value type (string/number/boolean) matches the field type.
       * String comparisons are case-sensitive. Regex uses RE2 syntax (no
       * lookaheads/lookbehinds).
       */
      value?: string | number | boolean;
    }
  }

  /**
   * A filter condition applied to query results. Use the keys and values endpoints
   * to discover available fields and their values before constructing filters.
   */
  export interface WorkersObservabilityFilterLeaf {
    /**
     * Filter field name. Use verified keys from previous query results or the keys
     * endpoint. Common keys include $metadata.service, $metadata.origin,
     * $metadata.trigger, $metadata.message, and $metadata.error.
     */
    key: string;

    /**
     * Comparison operator. String operators: includes, not_includes, starts_with,
     * ends_with, regex. Existence: exists, is_null. Set membership: in, not_in
     * (comma-separated values). Numeric: eq, neq, gt, gte, lt, lte.
     */
    operation:
      | 'includes'
      | 'not_includes'
      | 'starts_with'
      | 'ends_with'
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
      | 'STARTS_WITH'
      | 'ENDS_WITH';

    /**
     * Data type of the filter field. Must match the actual type of the key being
     * filtered.
     */
    type: 'string' | 'number' | 'boolean';

    /**
     * Discriminator for leaf filter nodes. Always 'filter' when present; may be
     * omitted.
     */
    kind?: 'filter';

    /**
     * Comparison value. Must match actual values in your data — verify with the values
     * endpoint. Ensure the value type (string/number/boolean) matches the field type.
     * String comparisons are case-sensitive. Regex uses RE2 syntax (no
     * lookaheads/lookbehinds).
     */
    value?: string | number | boolean;
  }

  /**
   * Full-text search expression to match events containing the specified text or
   * pattern.
   */
  export interface Needle {
    /**
     * The text or pattern to search for.
     */
    value: string | number | boolean;

    /**
     * When true, treats the value as a regular expression (RE2 syntax).
     */
    isRegex?: boolean;

    /**
     * When true, performs a case-sensitive search. Defaults to case-insensitive.
     */
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
