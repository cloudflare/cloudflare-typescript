// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BucketsAPI from './buckets';
import { CursorPagination, type CursorPaginationParams } from '../../pagination';

export class Buckets extends APIResource {
  /**
   * Creates a new R2 bucket.
   */
  create(params: BucketCreateParams, options?: Core.RequestOptions): Core.APIPromise<Bucket> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/r2/buckets`, { body, ...options }) as Core.APIPromise<{
        result: Bucket;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all R2 buckets on your account
   */
  list(
    params: BucketListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BucketsCursorPagination, Bucket> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/r2/buckets`, BucketsCursorPagination, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an existing R2 bucket.
   */
  delete(
    bucketName: string,
    params: BucketDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/r2/buckets/${bucketName}`, options) as Core.APIPromise<{
        result: BucketDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets metadata for an existing R2 bucket.
   */
  get(bucketName: string, params: BucketGetParams, options?: Core.RequestOptions): Core.APIPromise<Bucket> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2/buckets/${bucketName}`, options) as Core.APIPromise<{
        result: Bucket;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class BucketsCursorPagination extends CursorPagination<Bucket> {}

/**
 * A single R2 bucket
 */
export interface Bucket {
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

  /**
   * Storage class for newly uploaded objects, unless specified otherwise.
   */
  storage_class?: 'Standard' | 'InfrequentAccess';
}

export type BucketDeleteResponse = unknown;

export interface BucketCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: Name of the bucket
   */
  name: string;

  /**
   * Body param: Location of the bucket
   */
  locationHint?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

  /**
   * Body param: Storage class for newly uploaded objects, unless specified
   * otherwise.
   */
  storageClass?: 'Standard' | 'InfrequentAccess';
}

export interface BucketListParams extends CursorPaginationParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Query param: Direction to order buckets
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Bucket names to filter by. Only buckets with this phrase in their
   * name will be returned.
   */
  name_contains?: string;

  /**
   * Query param: Field to order buckets by
   */
  order?: 'name';

  /**
   * Query param: Bucket name to start searching after. Buckets are ordered
   * lexicographically.
   */
  start_after?: string;
}

export interface BucketDeleteParams {
  /**
   * Account ID
   */
  account_id: string;
}

export interface BucketGetParams {
  /**
   * Account ID
   */
  account_id: string;
}

export namespace Buckets {
  export import Bucket = BucketsAPI.Bucket;
  export import BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export import BucketsCursorPagination = BucketsAPI.BucketsCursorPagination;
  export import BucketCreateParams = BucketsAPI.BucketCreateParams;
  export import BucketListParams = BucketsAPI.BucketListParams;
  export import BucketDeleteParams = BucketsAPI.BucketDeleteParams;
  export import BucketGetParams = BucketsAPI.BucketGetParams;
}
