// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseQueries extends APIResource {
  static override readonly _key: readonly ['workers', 'observability', 'queries'] = Object.freeze([
    'workers',
    'observability',
    'queries',
  ] as const);

  /**
   * Persist query for later use.
   *
   * @example
   * ```ts
   * const query =
   *   await client.workers.observability.queries.create({
   *     account_id: 'account_id',
   *     description: 'Query description',
   *     name: 'x',
   *     parameters: {},
   *   });
   * ```
   */
  create(params: QueryCreateParams, options?: RequestOptions): APIPromise<QueryCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/workers/observability/queries`, {
        body,
        ...options,
      }) as APIPromise<{ result: QueryCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List saved queries.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const queryListResponse of client.workers.observability.queries.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: QueryListParams,
    options?: RequestOptions,
  ): PagePromise<QueryListResponsesSinglePage, QueryListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/observability/queries`,
      SinglePage<QueryListResponse>,
      { query, ...options },
    );
  }
}
export class Queries extends BaseQueries {}

export type QueryListResponsesSinglePage = SinglePage<QueryListResponse>;

export interface QueryCreateResponse {
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

  parameters: QueryCreateResponse.Parameters;

  updated: string;

  updatedBy: string;
}

export namespace QueryCreateResponse {
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

export interface QueryListResponse {
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

  parameters: QueryListResponse.Parameters;

  updated: string;

  updatedBy: string;
}

export namespace QueryListResponse {
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

export interface QueryCreateParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  description: string | null;

  /**
   * Body param: Query name
   */
  name: string;

  /**
   * Body param
   */
  parameters: QueryCreateParams.Parameters;
}

export namespace QueryCreateParams {
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

export interface QueryListParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Query param
   */
  order?: 'asc' | 'desc';

  /**
   * Query param
   */
  orderBy?: 'created' | 'updated';

  /**
   * Query param
   */
  page?: number;

  /**
   * Query param
   */
  perPage?: number;
}

export declare namespace Queries {
  export {
    type QueryCreateResponse as QueryCreateResponse,
    type QueryListResponse as QueryListResponse,
    type QueryListResponsesSinglePage as QueryListResponsesSinglePage,
    type QueryCreateParams as QueryCreateParams,
    type QueryListParams as QueryListParams,
  };
}
