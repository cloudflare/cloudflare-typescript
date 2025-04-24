// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payloads extends APIResource {
  /**
   * Add custom scan expressions for Content Scanning.
   */
  create(
    params: PayloadCreateParams,
    options?: RequestOptions,
  ): PagePromise<PayloadCreateResponsesSinglePage, PayloadCreateResponse> {
    const { zone_id, body } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/content-upload-scan/payloads`,
      SinglePage<PayloadCreateResponse>,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Get a list of existing custom scan expressions for Content Scanning.
   */
  list(
    params: PayloadListParams,
    options?: RequestOptions,
  ): PagePromise<PayloadListResponsesSinglePage, PayloadListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/content-upload-scan/payloads`,
      SinglePage<PayloadListResponse>,
      options,
    );
  }

  /**
   * Delete a Content Scan Custom Expression.
   */
  delete(
    expressionID: string,
    params: PayloadDeleteParams,
    options?: RequestOptions,
  ): PagePromise<PayloadDeleteResponsesSinglePage, PayloadDeleteResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/content-upload-scan/payloads/${expressionID}`,
      SinglePage<PayloadDeleteResponse>,
      { method: 'delete', ...options },
    );
  }
}

export type PayloadCreateResponsesSinglePage = SinglePage<PayloadCreateResponse>;

export type PayloadListResponsesSinglePage = SinglePage<PayloadListResponse>;

export type PayloadDeleteResponsesSinglePage = SinglePage<PayloadDeleteResponse>;

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
   * Body param:
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

export declare namespace Payloads {
  export {
    type PayloadCreateResponse as PayloadCreateResponse,
    type PayloadListResponse as PayloadListResponse,
    type PayloadDeleteResponse as PayloadDeleteResponse,
    type PayloadCreateResponsesSinglePage as PayloadCreateResponsesSinglePage,
    type PayloadListResponsesSinglePage as PayloadListResponsesSinglePage,
    type PayloadDeleteResponsesSinglePage as PayloadDeleteResponsesSinglePage,
    type PayloadCreateParams as PayloadCreateParams,
    type PayloadListParams as PayloadListParams,
    type PayloadDeleteParams as PayloadDeleteParams,
  };
}
