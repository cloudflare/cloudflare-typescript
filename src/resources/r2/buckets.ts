// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BucketsAPI from 'cloudflare/resources/r2/buckets';

export class Buckets extends APIResource {
  /**
   * Creates a new R2 bucket.
   */
  create(
    accountId: string,
    body: BucketCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/r2/buckets`, { body, ...options }) as Core.APIPromise<{
        result: BucketCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets metadata for an existing R2 bucket.
   */
  retrieve(
    accountId: string,
    bucketName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketRetrieveResponse> {
    return (
      this._client.get(`/accounts/${accountId}/r2/buckets/${bucketName}`, options) as Core.APIPromise<{
        result: BucketRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all R2 buckets on your account
   */
  list(
    accountId: string,
    query?: BucketListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<BucketListResponse>;
  list(
    accountId: string,
    query: BucketListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/r2/buckets`, { query, ...options }) as Core.APIPromise<{
        result: BucketListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing R2 bucket.
   */
  delete(
    accountId: string,
    bucketName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/r2/buckets/${bucketName}`, options) as Core.APIPromise<{
        result: BucketDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A single R2 bucket
 */
export interface BucketCreateResponse {
  /**
   * Creation timestamp
   */
  creation_date?: string;

  /**
   * Location of the bucket
   */
  location?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

  /**
   * Name of the bucket
   */
  name?: string;
}

/**
 * A single R2 bucket
 */
export interface BucketRetrieveResponse {
  /**
   * Creation timestamp
   */
  creation_date?: string;

  /**
   * Location of the bucket
   */
  location?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

  /**
   * Name of the bucket
   */
  name?: string;
}

export type BucketListResponse = Array<BucketListResponse.BucketListResponseItem>;

export namespace BucketListResponse {
  /**
   * A single R2 bucket
   */
  export interface BucketListResponseItem {
    /**
     * Creation timestamp
     */
    creation_date?: string;

    /**
     * Location of the bucket
     */
    location?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

    /**
     * Name of the bucket
     */
    name?: string;
  }
}

export type BucketDeleteResponse = unknown;

export interface BucketCreateParams {
  /**
   * Name of the bucket
   */
  name: string;

  /**
   * Location of the bucket
   */
  locationHint?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';
}

export interface BucketListParams {
  /**
   * Pagination cursor received during the last List Buckets call. R2 buckets are
   * paginated using cursors instead of page numbers.
   */
  cursor?: string;

  /**
   * Direction to order buckets
   */
  direction?: 'asc' | 'desc';

  /**
   * Bucket names to filter by. Only buckets with this phrase in their name will be
   * returned.
   */
  name_contains?: string;

  /**
   * Field to order buckets by
   */
  order?: 'name';

  /**
   * Maximum number of buckets to return in a single call
   */
  per_page?: number;

  /**
   * Bucket name to start searching after. Buckets are ordered lexicographically.
   */
  start_after?: string;
}

export namespace Buckets {
  export import BucketCreateResponse = BucketsAPI.BucketCreateResponse;
  export import BucketRetrieveResponse = BucketsAPI.BucketRetrieveResponse;
  export import BucketListResponse = BucketsAPI.BucketListResponse;
  export import BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export import BucketCreateParams = BucketsAPI.BucketCreateParams;
  export import BucketListParams = BucketsAPI.BucketListParams;
}
