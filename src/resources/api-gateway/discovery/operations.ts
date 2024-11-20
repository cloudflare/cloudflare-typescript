// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Operations extends APIResource {
  /**
   * Retrieve the most up to date view of discovered operations
   */
  list(
    params: OperationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OperationListResponsesV4PagePaginationArray, OperationListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/discovery/operations`,
      OperationListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Update the `state` on one or more discovered operations
   */
  bulkEdit(
    params: OperationBulkEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationBulkEditResponse> {
    const { zone_id, body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/api_gateway/discovery/operations`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: OperationBulkEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the `state` on a discovered operation
   */
  edit(
    operationId: string,
    params: OperationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/api_gateway/discovery/operations/${operationId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OperationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OperationListResponsesV4PagePaginationArray extends V4PagePaginationArray<OperationListResponse> {}

export interface OperationListResponse {
  /**
   * UUID
   */
  id: string;

  /**
   * The endpoint which can contain path parameter templates in curly braces, each
   * will be replaced from left to right with {varN}, starting with {var1}, during
   * insertion. This will further be Cloudflare-normalized upon insertion. See:
   * https://developers.cloudflare.com/rules/normalization/how-it-works/.
   */
  endpoint: string;

  /**
   * RFC3986-compliant host.
   */
  host: string;

  last_updated: string;

  /**
   * The HTTP method used to access the endpoint.
   */
  method: 'GET' | 'POST' | 'HEAD' | 'OPTIONS' | 'PUT' | 'DELETE' | 'CONNECT' | 'PATCH' | 'TRACE';

  /**
   * API discovery engine(s) that discovered this operation
   */
  origin: Array<'ML' | 'SessionIdentifier'>;

  /**
   * State of operation in API Discovery
   *
   * - `review` - Operation is not saved into API Shield Endpoint Management
   * - `saved` - Operation is saved into API Shield Endpoint Management
   * - `ignored` - Operation is marked as ignored
   */
  state: 'review' | 'saved' | 'ignored';

  features?: OperationListResponse.Features;
}

export namespace OperationListResponse {
  export interface Features {
    traffic_stats?: Features.TrafficStats;
  }

  export namespace Features {
    export interface TrafficStats {
      last_updated: string;

      /**
       * The period in seconds these statistics were computed over
       */
      period_seconds: number;

      /**
       * The average number of requests seen during this period
       */
      requests: number;
    }
  }
}

export type OperationBulkEditResponse = Record<string, OperationBulkEditResponse.item>;

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

export interface OperationEditResponse {
  /**
   * State of operation in API Discovery
   *
   * - `review` - Operation is not saved into API Shield Endpoint Management
   * - `saved` - Operation is saved into API Shield Endpoint Management
   * - `ignored` - Operation is marked as ignored
   */
  state?: 'review' | 'saved' | 'ignored';
}

export interface OperationListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
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
  origin?: 'ML' | 'SessionIdentifier';

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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: Record<string, OperationBulkEditParams.Body>;
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

export interface OperationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Mark state of operation in API Discovery
   *
   * - `review` - Mark operation as for review
   * - `ignored` - Mark operation as ignored
   */
  state?: 'review' | 'ignored';
}

Operations.OperationListResponsesV4PagePaginationArray = OperationListResponsesV4PagePaginationArray;

export declare namespace Operations {
  export {
    type OperationListResponse as OperationListResponse,
    type OperationBulkEditResponse as OperationBulkEditResponse,
    type OperationEditResponse as OperationEditResponse,
    OperationListResponsesV4PagePaginationArray as OperationListResponsesV4PagePaginationArray,
    type OperationListParams as OperationListParams,
    type OperationBulkEditParams as OperationBulkEditParams,
    type OperationEditParams as OperationEditParams,
  };
}
