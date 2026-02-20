// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Payloads extends APIResource {
  /**
   * Add custom scan expressions for Content Scanning.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payloadCreateResponse of client.contentScanning.payloads.create(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [
   *       {
   *         payload:
   *           'lookup_json_string(http.request.body.raw, "file")',
   *       },
   *     ],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(
    params: PayloadCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayloadCreateResponsesSinglePage, PayloadCreateResponse> {
    const { zone_id, body } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/content-upload-scan/payloads`,
      PayloadCreateResponsesSinglePage,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Get a list of existing custom scan expressions for Content Scanning.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payloadListResponse of client.contentScanning.payloads.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PayloadListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayloadListResponsesSinglePage, PayloadListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/content-upload-scan/payloads`,
      PayloadListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a Content Scan Custom Expression.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payloadDeleteResponse of client.contentScanning.payloads.delete(
   *   'a350a054caa840c9becd89c3b4f0195b',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  delete(
    expressionId: string,
    params: PayloadDeleteParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PayloadDeleteResponsesSinglePage, PayloadDeleteResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/content-upload-scan/payloads/${expressionId}`,
      PayloadDeleteResponsesSinglePage,
      { method: 'delete', ...options },
    );
  }
}

export class PayloadCreateResponsesSinglePage extends SinglePage<PayloadCreateResponse> {}

export class PayloadListResponsesSinglePage extends SinglePage<PayloadListResponse> {}

export class PayloadDeleteResponsesSinglePage extends SinglePage<PayloadDeleteResponse> {}

/**
 * Defines a custom scan expression to match Content Scanning on.
 */
export interface PayloadCreateResponse {
  /**
   * defines the unique ID for this custom scan expression.
   */
  id?: string;

  /**
   * Defines the ruleset expression to use in matching content objects.
   */
  payload?: string;
}

/**
 * Defines a custom scan expression to match Content Scanning on.
 */
export interface PayloadListResponse {
  /**
   * defines the unique ID for this custom scan expression.
   */
  id?: string;

  /**
   * Defines the ruleset expression to use in matching content objects.
   */
  payload?: string;
}

/**
 * Defines a custom scan expression to match Content Scanning on.
 */
export interface PayloadDeleteResponse {
  /**
   * defines the unique ID for this custom scan expression.
   */
  id?: string;

  /**
   * Defines the ruleset expression to use in matching content objects.
   */
  payload?: string;
}

export interface PayloadCreateParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  body: Array<PayloadCreateParams.Body>;
}

export namespace PayloadCreateParams {
  export interface Body {
    /**
     * Defines the ruleset expression to use in matching content objects.
     */
    payload: string;
  }
}

export interface PayloadListParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

export interface PayloadDeleteParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

Payloads.PayloadCreateResponsesSinglePage = PayloadCreateResponsesSinglePage;
Payloads.PayloadListResponsesSinglePage = PayloadListResponsesSinglePage;
Payloads.PayloadDeleteResponsesSinglePage = PayloadDeleteResponsesSinglePage;

export declare namespace Payloads {
  export {
    type PayloadCreateResponse as PayloadCreateResponse,
    type PayloadListResponse as PayloadListResponse,
    type PayloadDeleteResponse as PayloadDeleteResponse,
    PayloadCreateResponsesSinglePage as PayloadCreateResponsesSinglePage,
    PayloadListResponsesSinglePage as PayloadListResponsesSinglePage,
    PayloadDeleteResponsesSinglePage as PayloadDeleteResponsesSinglePage,
    type PayloadCreateParams as PayloadCreateParams,
    type PayloadListParams as PayloadListParams,
    type PayloadDeleteParams as PayloadDeleteParams,
  };
}
