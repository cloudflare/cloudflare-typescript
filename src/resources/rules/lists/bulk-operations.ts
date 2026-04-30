// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class BulkOperations extends APIResource {
  /**
   * Gets the current status of an asynchronous operation on a list.
   *
   * The `status` property can have one of the following values: `pending`,
   * `running`, `completed`, or `failed`. If the status is `failed`, the `error`
   * property will contain a message describing the error.
   *
   * @example
   * ```ts
   * const bulkOperation =
   *   await client.rules.lists.bulkOperations.get(
   *     '4da8780eeb215e6cb7f48dd981c4ea02',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    operationId: string,
    params: BulkOperationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkOperationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/rules/lists/bulk_operations/${operationId}`,
        options,
      ) as Core.APIPromise<{ result: BulkOperationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BulkOperationGetResponse =
  | BulkOperationGetResponse.ListsBulkOperationPendingOrRunning
  | BulkOperationGetResponse.ListsBulkOperationCompleted
  | BulkOperationGetResponse.ListsBulkOperationFailed;

export namespace BulkOperationGetResponse {
  export interface ListsBulkOperationPendingOrRunning {
    /**
     * The unique operation ID of the asynchronous action.
     */
    id: string;

    /**
     * The current status of the asynchronous operation.
     */
    status: 'pending' | 'running';
  }

  export interface ListsBulkOperationCompleted {
    /**
     * The unique operation ID of the asynchronous action.
     */
    id: string;

    /**
     * The RFC 3339 timestamp of when the operation was completed.
     */
    completed: string;

    /**
     * The current status of the asynchronous operation.
     */
    status: 'completed';
  }

  export interface ListsBulkOperationFailed {
    /**
     * The unique operation ID of the asynchronous action.
     */
    id: string;

    /**
     * The RFC 3339 timestamp of when the operation was completed.
     */
    completed: string;

    /**
     * A message describing the error when the status is `failed`.
     */
    error: string;

    /**
     * The current status of the asynchronous operation.
     */
    status: 'failed';
  }
}

export interface BulkOperationGetParams {
  /**
   * The Account ID for this resource.
   */
  account_id: string;
}

export declare namespace BulkOperations {
  export {
    type BulkOperationGetResponse as BulkOperationGetResponse,
    type BulkOperationGetParams as BulkOperationGetParams,
  };
}
