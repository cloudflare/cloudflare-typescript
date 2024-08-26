// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as OperationsAPI from './operations';
import * as DiscoveryAPI from './discovery';
import { DiscoveryOperationsV4PagePaginationArray } from './discovery';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Operations extends APIResource {
  /**
   * Retrieve the most up to date view of discovered operations
   */
  list(params: OperationListParams, options?: Core.RequestOptions): Core.PagePromise<DiscoveryOperationsV4PagePaginationArray, DiscoveryAPI.DiscoveryOperation> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/api_gateway/discovery/operations`, DiscoveryOperationsV4PagePaginationArray, { query, ...options });
  }

  /**
   * Update the `state` on a discovered operation
   */
  edit(operationId: string, params: OperationEditParams, options?: Core.RequestOptions): Core.APIPromise<OperationEditResponse> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}/api_gateway/discovery/operations/${operationId}`, { body, ...options }) as Core.APIPromise<{ result: OperationEditResponse }>)._thenUnwrap((obj) => obj.result);
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

export namespace Operations {
  export import OperationEditResponse = OperationsAPI.OperationEditResponse;
  export import OperationListParams = OperationsAPI.OperationListParams;
  export import OperationEditParams = OperationsAPI.OperationEditParams;
}

export { DiscoveryOperationsV4PagePaginationArray }
