// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BulkOperationsAPI from 'cloudflare/resources/rules/lists/bulk-operations';

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
  ): Core.APIPromise<BulkOperationGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/rules/lists/bulk_operations/${operationId}`,
        options,
      ) as Core.APIPromise<{ result: BulkOperationGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The current status of the asynchronous operation.
 */
export type UnnamedSchemaRefCc279fb99baf6a166db5c4e790a8c6cd = 'pending' | 'running' | 'completed' | 'failed';

export type BulkOperationGetResponse = Array<unknown>;

export namespace BulkOperations {
  export import UnnamedSchemaRefCc279fb99baf6a166db5c4e790a8c6cd = BulkOperationsAPI.UnnamedSchemaRefCc279fb99baf6a166db5c4e790a8c6cd;
  export import BulkOperationGetResponse = BulkOperationsAPI.BulkOperationGetResponse;
}
