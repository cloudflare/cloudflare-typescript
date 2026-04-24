// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Labels extends APIResource {
  /**
   * Attach label(s) on an operation in endpoint management
   *
   * @example
   * ```ts
   * const label =
   *   await client.apiGateway.operations.labels.create(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    operationId: string,
    params: LabelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/api_gateway/operations/${operationId}/labels`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LabelCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replace label(s) on an operation in endpoint management
   *
   * @example
   * ```ts
   * const label =
   *   await client.apiGateway.operations.labels.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    operationId: string,
    params: LabelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/api_gateway/operations/${operationId}/labels`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LabelUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove label(s) on an operation in endpoint management
   *
   * @example
   * ```ts
   * const label =
   *   await client.apiGateway.operations.labels.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    operationId: string,
    params: LabelDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/api_gateway/operations/${operationId}/labels`,
        options,
      ) as Core.APIPromise<{ result: LabelDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Bulk attach label(s) on operation(s) in endpoint management
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const labelBulkCreateResponse of client.apiGateway.operations.labels.bulkCreate(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     selector: {
   *       include: {
   *         operation_ids: [
   *           'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *         ],
   *       },
   *     },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkCreate(
    params: LabelBulkCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LabelBulkCreateResponsesSinglePage, LabelBulkCreateResponse> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/operations/labels`,
      LabelBulkCreateResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Bulk remove label(s) on operation(s) in endpoint management
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const labelBulkDeleteResponse of client.apiGateway.operations.labels.bulkDelete(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkDelete(
    params: LabelBulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LabelBulkDeleteResponsesSinglePage, LabelBulkDeleteResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/operations/labels`,
      LabelBulkDeleteResponsesSinglePage,
      { method: 'delete', ...options },
    );
  }

  /**
   * Bulk replace label(s) on operation(s) in endpoint management
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const labelBulkUpdateResponse of client.apiGateway.operations.labels.bulkUpdate(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     managed: { labels: ['login'] },
   *     selector: {
   *       include: {
   *         operation_ids: [
   *           'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *         ],
   *       },
   *     },
   *     user: { labels: ['login'] },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkUpdate(
    params: LabelBulkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LabelBulkUpdateResponsesSinglePage, LabelBulkUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/operations/labels`,
      LabelBulkUpdateResponsesSinglePage,
      { body, method: 'put', ...options },
    );
  }
}

export class LabelBulkCreateResponsesSinglePage extends SinglePage<LabelBulkCreateResponse> {}

export class LabelBulkDeleteResponsesSinglePage extends SinglePage<LabelBulkDeleteResponse> {}

export class LabelBulkUpdateResponsesSinglePage extends SinglePage<LabelBulkUpdateResponse> {}

export interface LabelCreateResponse {
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
   * UUID.
   */
  operation_id: string;

  labels?: Array<LabelCreateResponse.Label>;
}

export namespace LabelCreateResponse {
  export interface Label {
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
  }
}

export interface LabelUpdateResponse {
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
   * UUID.
   */
  operation_id: string;

  labels?: Array<LabelUpdateResponse.Label>;
}

export namespace LabelUpdateResponse {
  export interface Label {
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
  }
}

export interface LabelDeleteResponse {
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
   * UUID.
   */
  operation_id: string;

  labels?: Array<LabelDeleteResponse.Label>;
}

export namespace LabelDeleteResponse {
  export interface Label {
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
  }
}

export interface LabelBulkCreateResponse {
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
   * UUID.
   */
  operation_id: string;

  labels?: Array<LabelBulkCreateResponse.Label>;
}

export namespace LabelBulkCreateResponse {
  export interface Label {
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
  }
}

export interface LabelBulkDeleteResponse {
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
   * UUID.
   */
  operation_id: string;

  labels?: Array<LabelBulkDeleteResponse.Label>;
}

export namespace LabelBulkDeleteResponse {
  export interface Label {
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
  }
}

export interface LabelBulkUpdateResponse {
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
   * UUID.
   */
  operation_id: string;

  labels?: Array<LabelBulkUpdateResponse.Label>;
}

export namespace LabelBulkUpdateResponse {
  export interface Label {
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
  }
}

export interface LabelCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: List of managed label names.
   */
  managed?: Array<string>;

  /**
   * Body param: List of user label names.
   */
  user?: Array<string>;
}

export interface LabelUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: List of managed label names. Omitting this property or passing an
   * empty array will result in all managed labels being removed from the operation
   */
  managed?: Array<string>;

  /**
   * Body param: List of user label names. Omitting this property or passing an empty
   * array will result in all user labels being removed from the operation
   */
  user?: Array<string>;
}

export interface LabelDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface LabelBulkCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Operation IDs selector
   */
  selector: LabelBulkCreateParams.Selector;

  /**
   * Body param
   */
  managed?: LabelBulkCreateParams.Managed;

  /**
   * Body param
   */
  user?: LabelBulkCreateParams.User;
}

export namespace LabelBulkCreateParams {
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

  export interface Managed {
    /**
     * List of managed label names.
     */
    labels?: Array<string>;
  }

  export interface User {
    /**
     * List of user label names.
     */
    labels?: Array<string>;
  }
}

export interface LabelBulkDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface LabelBulkUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Managed labels to replace for all affected operations
   */
  managed: LabelBulkUpdateParams.Managed;

  /**
   * Body param: Operation IDs selector
   */
  selector: LabelBulkUpdateParams.Selector;

  /**
   * Body param: User labels to replace for all affected operations
   */
  user: LabelBulkUpdateParams.User;
}

export namespace LabelBulkUpdateParams {
  /**
   * Managed labels to replace for all affected operations
   */
  export interface Managed {
    /**
     * List of managed label names. Providing an empty array will result in all managed
     * labels being removed from all affected operations
     */
    labels: Array<string>;
  }

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

  /**
   * User labels to replace for all affected operations
   */
  export interface User {
    /**
     * List of user label names. Providing an empty array will result in all user
     * labels being removed from all affected operations
     */
    labels: Array<string>;
  }
}

Labels.LabelBulkCreateResponsesSinglePage = LabelBulkCreateResponsesSinglePage;
Labels.LabelBulkDeleteResponsesSinglePage = LabelBulkDeleteResponsesSinglePage;
Labels.LabelBulkUpdateResponsesSinglePage = LabelBulkUpdateResponsesSinglePage;

export declare namespace Labels {
  export {
    type LabelCreateResponse as LabelCreateResponse,
    type LabelUpdateResponse as LabelUpdateResponse,
    type LabelDeleteResponse as LabelDeleteResponse,
    type LabelBulkCreateResponse as LabelBulkCreateResponse,
    type LabelBulkDeleteResponse as LabelBulkDeleteResponse,
    type LabelBulkUpdateResponse as LabelBulkUpdateResponse,
    LabelBulkCreateResponsesSinglePage as LabelBulkCreateResponsesSinglePage,
    LabelBulkDeleteResponsesSinglePage as LabelBulkDeleteResponsesSinglePage,
    LabelBulkUpdateResponsesSinglePage as LabelBulkUpdateResponsesSinglePage,
    type LabelCreateParams as LabelCreateParams,
    type LabelUpdateParams as LabelUpdateParams,
    type LabelDeleteParams as LabelDeleteParams,
    type LabelBulkCreateParams as LabelBulkCreateParams,
    type LabelBulkDeleteParams as LabelBulkDeleteParams,
    type LabelBulkUpdateParams as LabelBulkUpdateParams,
  };
}
