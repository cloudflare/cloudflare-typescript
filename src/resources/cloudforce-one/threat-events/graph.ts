// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseGraph extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'graph'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'graph',
  ] as const);

  /**
   * Expands the single-level relationship neighborhood of one or more seed nodes
   * (event, indicator, or tag) from R2 Data Catalog. Seeds use compact id format
   * (type:uuid), e.g. "event:550e8400-...". Multi-seed requests merge and
   * deduplicate results server-side. Hydrates neighbor entities with summary data
   * from Durable Objects. Supports filtering by relationship type and dataset scope.
   *
   * @example
   * ```ts
   * const graphs =
   *   await client.cloudforceOne.threatEvents.graph.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: GraphListParams, options?: RequestOptions): APIPromise<GraphListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cloudforce-one/events/graph`, {
        query,
        ...options,
      }) as APIPromise<{ result: GraphListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Graph extends BaseGraph {}

export interface GraphListResponse {
  edges: Array<GraphListResponse.Edge>;

  /**
   * Focal node object (legacy single-seed). Null when unavailable.
   */
  node: { [key: string]: unknown } | null;

  nodes: Array<{ [key: string]: unknown }>;
}

export namespace GraphListResponse {
  export interface Edge {
    /**
     * Deterministic composite edge id (source→target:relationshipType)
     */
    id: string;

    relationshipType: string;

    /**
     * Compact id of the source node (type:uuid)
     */
    source: string;

    sourceId: string;

    sourceType: string;

    /**
     * Compact id of the target node (type:uuid)
     */
    target: string;

    targetId: string;

    targetType: string;
  }
}

export interface GraphListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Opaque pagination token. Only valid when seeds has exactly 1 entry;
   * 400 otherwise.
   */
  cursor?: string;

  /**
   * Query param: Comma-separated dataset UUIDs to restrict neighbor scope.
   * Intersected with ACL grants.
   */
  datasetIds?: Array<string>;

  /**
   * Query param: Edge direction relative to each seed: out (seed→neighbors), in
   * (neighbors→seed), both (default).
   */
  direction?: string;

  /**
   * Query param: Comma-separated list of response sections to expand (hydrate).
   * Allowed: `nodes`. Omitting `expand` returns identifier-only nodes.
   */
  expand?: Array<string>;

  /**
   * Query param: Hydration strategy for neighbor nodes when expand=nodes is set.
   * r2_join (default): use R2 JOIN query + DO fallback. do_only: use plain R2
   * query + hydrate all neighbors via Durable Objects.
   */
  hydration?: string;

  /**
   * Query param: Max neighbors per seed (default: 100, max: 1000). Values above 1000
   * return 400.
   */
  limit?: number;

  /**
   * Query param: Total accumulated node cap across all seeds (default: 500, max:
   * 1000). Values above 1000 return 400.
   */
  max_nodes?: number;

  /**
   * Query param: Comma-separated relationship types to filter by. Allowed:
   * tagged_with, appears_in, related_to, caused_by, attributed_to.
   */
  relationshipTypes?: Array<string>;

  /**
   * Query param: Comma-separated compact seed ids (type:uuid). Example:
   * seeds=event:550e8400-...,indicator:661fa920-... Provide 1–50 entries; omitting
   * seeds returns 400.
   */
  seeds?: Array<string>;
}

export declare namespace Graph {
  export { type GraphListResponse as GraphListResponse, type GraphListParams as GraphListParams };
}
