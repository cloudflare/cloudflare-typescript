// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as OperationsAPI from './operations';
import {
  OperationBulkEditParams,
  OperationBulkEditResponse,
  OperationEditParams,
  OperationEditResponse,
  OperationListParams,
  OperationListResponse,
  OperationListResponsesV4PagePaginationArray,
  Operations,
} from './operations';

export class Discovery extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Retrieve the most up to date view of discovered operations, rendered as OpenAPI
   * schemas
   */
  get(params: DiscoveryGetParams, options?: Core.RequestOptions): Core.APIPromise<DiscoveryGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/api_gateway/discovery`, options) as Core.APIPromise<{
        result: DiscoveryGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DiscoveryGetResponse {
  schemas: Array<unknown>;

  timestamp: string;
}

export interface DiscoveryGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

Discovery.Operations = Operations;
Discovery.OperationListResponsesV4PagePaginationArray = OperationListResponsesV4PagePaginationArray;

export declare namespace Discovery {
  export { type DiscoveryGetResponse as DiscoveryGetResponse, type DiscoveryGetParams as DiscoveryGetParams };

  export {
    Operations as Operations,
    type OperationListResponse as OperationListResponse,
    type OperationBulkEditResponse as OperationBulkEditResponse,
    type OperationEditResponse as OperationEditResponse,
    OperationListResponsesV4PagePaginationArray as OperationListResponsesV4PagePaginationArray,
    type OperationListParams as OperationListParams,
    type OperationBulkEditParams as OperationBulkEditParams,
    type OperationEditParams as OperationEditParams,
  };
}
