// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BulkOperationsAPI from './bulk-operations';

export class BulkOperations extends APIResource {
  /**
   * Gets the current status of an asynchronous operation on a list.
   *
   * The `status` property can have one of the following values: `pending`,
   * `running`, `completed`, or `failed`. If the status is `failed`, the `error`
   * property will contain a message describing the error.
   */
  get(
    accountIdentifier: string,
    operationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkOperationGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/rules/lists/bulk_operations/${operationId}`,
        options,
      ) as Core.APIPromise<{ result: BulkOperationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The current status of the asynchronous operation.
 */
export type OperationStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface BulkOperationGetResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  id: string;

  /**
   * The current status of the asynchronous operation.
   */
  status: OperationStatus;

  /**
   * The RFC 3339 timestamp of when the operation was completed.
   */
  completed?: string;

  /**
   * A message describing the error when the status is `failed`.
   */
  error?: string;
}

export namespace BulkOperations {
  export import OperationStatus = BulkOperationsAPI.OperationStatus;
  export import BulkOperationGetResponse = BulkOperationsAPI.BulkOperationGetResponse;
}
