// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Payloads extends APIResource {
  /**
   * Add custom scan expressions for Content Scanning
   */
  create(
    params: PayloadCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayloadCreateResponse | null> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/content-upload-scan/payloads`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: PayloadCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a list of existing custom scan expressions for Content Scanning
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
   * Delete a Content Scan Custom Expression
   */
  delete(
    expressionId: string,
    params: PayloadDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayloadDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/content-upload-scan/payloads/${expressionId}`,
        options,
      ) as Core.APIPromise<{ result: PayloadDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PayloadListResponsesSinglePage extends SinglePage<PayloadListResponse> {}

export type PayloadCreateResponse = Array<PayloadCreateResponse.PayloadCreateResponseItem>;

export namespace PayloadCreateResponse {
  /**
   * A custom scan expression to match Content Scanning on
   */
  export interface PayloadCreateResponseItem {
    /**
     * The unique ID for this custom scan expression
     */
    id?: string;

    /**
     * Ruleset expression to use in matching content objects
     */
    payload?: string;
  }
}

/**
 * A custom scan expression to match Content Scanning on
 */
export interface PayloadListResponse {
  /**
   * The unique ID for this custom scan expression
   */
  id?: string;

  /**
   * Ruleset expression to use in matching content objects
   */
  payload?: string;
}

export type PayloadDeleteResponse = Array<PayloadDeleteResponse.PayloadDeleteResponseItem>;

export namespace PayloadDeleteResponse {
  /**
   * A custom scan expression to match Content Scanning on
   */
  export interface PayloadDeleteResponseItem {
    /**
     * The unique ID for this custom scan expression
     */
    id?: string;

    /**
     * Ruleset expression to use in matching content objects
     */
    payload?: string;
  }
}

export interface PayloadCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: Array<PayloadCreateParams.Body>;
}

export namespace PayloadCreateParams {
  export interface Body {
    /**
     * Ruleset expression to use in matching content objects
     */
    payload: string;
  }
}

export interface PayloadListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface PayloadDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

Payloads.PayloadListResponsesSinglePage = PayloadListResponsesSinglePage;

export declare namespace Payloads {
  export {
    type PayloadCreateResponse as PayloadCreateResponse,
    type PayloadListResponse as PayloadListResponse,
    type PayloadDeleteResponse as PayloadDeleteResponse,
    PayloadListResponsesSinglePage as PayloadListResponsesSinglePage,
    type PayloadCreateParams as PayloadCreateParams,
    type PayloadListParams as PayloadListParams,
    type PayloadDeleteParams as PayloadDeleteParams,
  };
}
