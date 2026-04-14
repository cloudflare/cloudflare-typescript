// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';

export class Operation extends APIResource {
  /**
   * Replace all operations(s) attached to a managed label
   *
   * @example
   * ```ts
   * const operation =
   *   await client.apiGateway.labels.managed.resources.operation.update(
   *     'login',
   *     {
   *       zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       selector: {
   *         include: {
   *           operation_ids: [
   *             'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *           ],
   *         },
   *       },
   *     },
   *   );
   * ```
   */
  update(
    name: string,
    params: OperationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/api_gateway/labels/managed/${name}/resources/operation`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OperationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OperationUpdateResponse {
  created_at: string;

  /**
   * The description of the label
   */
  description: string;

  last_updated: string;

  /**
   * Metadata for the label
   */
  metadata: unknown;

  /**
   * The name of the label
   */
  name: string;

  /**
   * - `user` - label is owned by the user
   * - `managed` - label is owned by cloudflare
   */
  source: 'user' | 'managed';

  /**
   * Provides counts of what resources are linked to this label
   */
  mapped_resources?: unknown;
}

export interface OperationUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Operation IDs selector
   */
  selector: OperationUpdateParams.Selector;
}

export namespace OperationUpdateParams {
  /**
   * Operation IDs selector
   */
  export interface Selector {
    include: Selector.Include;
  }

  export namespace Selector {
    export interface Include {
      operation_ids: Array<string>;
    }
  }
}

export declare namespace Operation {
  export {
    type OperationUpdateResponse as OperationUpdateResponse,
    type OperationUpdateParams as OperationUpdateParams,
  };
}
