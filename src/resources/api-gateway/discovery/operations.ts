// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DiscoveryAPI from './discovery';
import { DiscoveryOperationsV4PagePaginationArray } from './discovery';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOperations extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'discovery', 'operations'] = Object.freeze([
    'apiGateway',
    'discovery',
    'operations',
  ] as const);

  /**
   * Retrieve the most up to date view of discovered operations
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const discoveryOperation of client.apiGateway.discovery.operations.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: OperationListParams,
    options?: RequestOptions,
  ): PagePromise<DiscoveryOperationsV4PagePaginationArray, DiscoveryAPI.DiscoveryOperation> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/api_gateway/discovery/operations`,
      V4PagePaginationArray<DiscoveryAPI.DiscoveryOperation>,
      { query, ...options },
    );
  }

  /**
   * Update the `state` on one or more discovered operations
   *
   * @example
   * ```ts
   * const response =
   *   await client.apiGateway.discovery.operations.bulkEdit({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: {
   *       '3818d821-5901-4147-a474-f5f5aec1d54e': {},
   *       'b17c8043-99a0-4202-b7d9-8f7cdbee02cd': {},
   *     },
   *   });
   * ```
   */
  bulkEdit(params: OperationBulkEditParams, options?: RequestOptions): APIPromise<OperationBulkEditResponse> {
    const { zone_id, body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/api_gateway/discovery/operations`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: OperationBulkEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Operations extends BaseOperations {}

export type OperationBulkEditResponse = { [key: string]: OperationBulkEditResponse.item };

export namespace OperationBulkEditResponse {
  /**
   * Mappings of discovered operations (keys) to objects describing their state
   */
  export interface item {
    /**
     * Mark state of operation in API Discovery
     *
     * - `review` - Mark operation as for review
     * - `ignored` - Mark operation as ignored
     */
    state?: 'review' | 'ignored';
  }
}

export interface OperationListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: When `true`, only return API Discovery results that are not saved
   * into API Shield Endpoint Management
   */
  diff?: boolean;

  /**
   * Query param: Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter results to only include endpoints containing this pattern.
   */
  endpoint?: string;

  /**
   * Query param: Filter results to only include the specified hosts.
   */
  host?: Array<string>;

  /**
   * Query param: Filter results to only include the specified HTTP methods.
   */
  method?: Array<string>;

  /**
   * Query param: Field to order by
   */
  order?: 'host' | 'method' | 'endpoint' | 'traffic_stats.requests' | 'traffic_stats.last_updated';

  /**
   * Query param: Filter results to only include discovery results sourced from a
   * particular discovery engine
   *
   * - `ML` - Discovered operations that were sourced using ML API Discovery
   * - `SessionIdentifier` - Discovered operations that were sourced using Session
   *   Identifier API Discovery
   */
  origin?: 'ML' | 'SessionIdentifier' | 'LabelDiscovery';

  /**
   * Query param: Filter results to only include discovery results in a particular
   * state. States are as follows
   *
   * - `review` - Discovered operations that are not saved into API Shield Endpoint
   *   Management
   * - `saved` - Discovered operations that are already saved into API Shield
   *   Endpoint Management
   * - `ignored` - Discovered operations that have been marked as ignored
   */
  state?: 'review' | 'saved' | 'ignored';
}

export interface OperationBulkEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  body: { [key: string]: OperationBulkEditParams.Body };
}

export namespace OperationBulkEditParams {
  /**
   * Mappings of discovered operations (keys) to objects describing their state
   */
  export interface Body {
    /**
     * Mark state of operation in API Discovery
     *
     * - `review` - Mark operation as for review
     * - `ignored` - Mark operation as ignored
     */
    state?: 'review' | 'ignored';
  }
}

export declare namespace Operations {
  export {
    type OperationBulkEditResponse as OperationBulkEditResponse,
    type OperationListParams as OperationListParams,
    type OperationBulkEditParams as OperationBulkEditParams,
  };
}

export { type DiscoveryOperationsV4PagePaginationArray };
