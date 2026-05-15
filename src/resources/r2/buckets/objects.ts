// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { CursorPagination, type CursorPaginationParams } from '../../../pagination';
import { type BlobLike } from '../../../uploads';
import { type Response } from '../../../_shims/index';

export class Objects extends APIResource {
  /**
   * Lists objects in an R2 bucket. Returns object metadata including key, size,
   * etag, last modified date, HTTP metadata, and custom metadata.
   *
   * For most workloads, we recommend using R2's
   * [S3-compatible API](https://developers.cloudflare.com/r2/api/s3/api/) or a
   * [Worker with an R2 binding](https://developers.cloudflare.com/r2/api/workers/workers-api-reference/)
   * instead.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const objectListResponse of client.r2.buckets.objects.list(
   *   'example-bucket',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    bucketName: string,
    params: ObjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ObjectListResponsesCursorPagination, ObjectListResponse> {
    const { account_id, jurisdiction, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/r2/buckets/${bucketName}/objects`,
      ObjectListResponsesCursorPagination,
      {
        query,
        ...options,
        headers: {
          ...(jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      },
    );
  }

  /**
   * Deletes an object from an R2 bucket.
   *
   * For most workloads, we recommend using R2's
   * [S3-compatible API](https://developers.cloudflare.com/r2/api/s3/api/) or a
   * [Worker with an R2 binding](https://developers.cloudflare.com/r2/api/workers/workers-api-reference/)
   * instead.
   *
   * @example
   * ```ts
   * const object = await client.r2.buckets.objects.delete(
   *   'example-bucket',
   *   'path/to/my-object.txt',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    bucketName: string,
    objectKey: string,
    params: ObjectDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectDeleteResponse> {
    const { account_id, jurisdiction } = params;
    return (
      this._client.delete(`/accounts/${account_id}/r2/buckets/${bucketName}/objects/${objectKey}`, {
        ...options,
        headers: {
          ...(jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: ObjectDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves an object from an R2 bucket. Returns the object body along with
   * metadata headers.
   *
   * For most workloads, we recommend using R2's
   * [S3-compatible API](https://developers.cloudflare.com/r2/api/s3/api/) or a
   * [Worker with an R2 binding](https://developers.cloudflare.com/r2/api/workers/workers-api-reference/)
   * instead.
   *
   * @example
   * ```ts
   * const object = await client.r2.buckets.objects.get(
   *   'example-bucket',
   *   'path/to/my-object.txt',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   *
   * const content = await object.blob();
   * console.log(content);
   * ```
   */
  get(
    bucketName: string,
    objectKey: string,
    params: ObjectGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const {
      account_id,
      jurisdiction,
      'If-Modified-Since': ifModifiedSince,
      'If-None-Match': ifNoneMatch,
    } = params;
    return this._client.get(`/accounts/${account_id}/r2/buckets/${bucketName}/objects/${objectKey}`, {
      ...options,
      headers: {
        Accept: 'application/octet-stream',
        ...(jurisdiction?.toString() != null ?
          { 'cf-r2-jurisdiction': jurisdiction?.toString() }
        : undefined),
        ...(ifModifiedSince != null ? { 'If-Modified-Since': ifModifiedSince } : undefined),
        ...(ifNoneMatch != null ? { 'If-None-Match': ifNoneMatch } : undefined),
        ...options?.headers,
      },
      __binaryResponse: true,
    });
  }

  /**
   * Uploads an object to an R2 bucket. The object body is provided as the request
   * body. Returns metadata about the uploaded object.
   *
   * The maximum upload size for this endpoint is 300 MB. For most workloads, we
   * recommend using R2's
   * [S3-compatible API](https://developers.cloudflare.com/r2/api/s3/api/) or a
   * [Worker with an R2 binding](https://developers.cloudflare.com/r2/api/workers/workers-api-reference/)
   * instead.
   *
   * @example
   * ```ts
   * const response = await client.r2.buckets.objects.upload(
   *   'example-bucket',
   *   'path/to/my-object.txt',
   *   fs.createReadStream('path/to/file'),
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  upload(
    bucketName: string,
    objectKey: string,
    body: string | ArrayBufferView | ArrayBuffer | BlobLike,
    params: ObjectUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectUploadResponse> {
    const { account_id, jurisdiction, 'cf-r2-storage-class': cfR2StorageClass } = params;
    return (
      this._client.put(`/accounts/${account_id}/r2/buckets/${bucketName}/objects/${objectKey}`, {
        body: body,
        ...options,
        headers: {
          'Content-Type': 'application/octet-stream',
          ...(jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': jurisdiction?.toString() }
          : undefined),
          ...(cfR2StorageClass?.toString() != null ?
            { 'cf-r2-storage-class': cfR2StorageClass?.toString() }
          : undefined),
          ...options?.headers,
        },
        __binaryRequest: true,
      }) as Core.APIPromise<{ result: ObjectUploadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ObjectListResponsesCursorPagination extends CursorPagination<ObjectListResponse> {}

/**
 * Metadata for an R2 object.
 */
export interface ObjectListResponse {
  /**
   * Custom metadata key-value pairs associated with the object.
   */
  custom_metadata?: { [key: string]: string };

  /**
   * The entity tag for the object. In JSON list/get responses this is the raw hex
   * digest (without surrounding quotes). The HTTP `ETag` response header on Get
   * Object follows RFC 7232 and IS wrapped in surrounding double-quotes.
   */
  etag?: string;

  /**
   * HTTP metadata associated with an R2 object.
   */
  http_metadata?: ObjectListResponse.HTTPMetadata;

  /**
   * The object key (name).
   */
  key?: string;

  /**
   * The date and time the object was last modified.
   */
  last_modified?: string;

  /**
   * The size of the object in bytes.
   */
  size?: number;

  /**
   * Whether the object is encrypted with a customer-supplied encryption key.
   */
  ssec?: boolean;

  /**
   * Storage class for newly uploaded objects, unless specified otherwise.
   */
  storage_class?: 'Standard' | 'InfrequentAccess';
}

export namespace ObjectListResponse {
  /**
   * HTTP metadata associated with an R2 object.
   */
  export interface HTTPMetadata {
    /**
     * Specifies caching behavior for the object.
     */
    cacheControl?: string;

    /**
     * The date and time at which the object's cache entry expires.
     */
    cacheExpiry?: string;

    /**
     * Specifies presentational information for the object.
     */
    contentDisposition?: string;

    /**
     * Specifies the content encoding applied to the object.
     */
    contentEncoding?: string;

    /**
     * The language of the object content.
     */
    contentLanguage?: string;

    /**
     * The MIME type of the object.
     */
    contentType?: string;
  }
}

/**
 * Result of a successful object deletion.
 */
export interface ObjectDeleteResponse {
  /**
   * The key (name) of the deleted object.
   */
  key?: string;
}

/**
 * Result of a successful object upload.
 */
export interface ObjectUploadResponse {
  /**
   * The entity tag for the uploaded object.
   */
  etag?: string;

  /**
   * The key (name) of the uploaded object.
   */
  key?: string;

  /**
   * The size of the uploaded object in bytes (as a string).
   */
  size?: string;

  /**
   * Storage class for newly uploaded objects, unless specified otherwise.
   */
  storage_class?: 'Standard' | 'InfrequentAccess';

  /**
   * The date and time the object was uploaded.
   */
  uploaded?: string;

  /**
   * The version UUID of the uploaded object.
   */
  version?: string;
}

export interface ObjectListParams extends CursorPaginationParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: A single character used to group keys. All keys that contain the
   * delimiter between the prefix and the first occurrence of the delimiter after the
   * prefix are grouped under a single result element.
   */
  delimiter?: string;

  /**
   * Query param: Restricts results to only those objects whose keys begin with the
   * specified prefix.
   */
  prefix?: string;

  /**
   * Query param: Returns objects with keys that come after the specified key in
   * lexicographic order.
   */
  start_after?: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface ObjectDeleteParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface ObjectGetParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';

  /**
   * Header param: Returns the object only if it has been modified since the
   * specified time. Must be formatted as an HTTP-date (RFC 7231), e.g.
   * `Tue, 15 Jan 2024 10:30:00 GMT`.
   */
  'If-Modified-Since'?: string;

  /**
   * Header param: Returns the object only if its ETag does not match the given
   * value.
   */
  'If-None-Match'?: string;
}

export interface ObjectUploadParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';

  /**
   * Header param: Storage class for newly uploaded objects, unless specified
   * otherwise.
   */
  'cf-r2-storage-class'?: 'Standard' | 'InfrequentAccess';
}

Objects.ObjectListResponsesCursorPagination = ObjectListResponsesCursorPagination;

export declare namespace Objects {
  export {
    type ObjectListResponse as ObjectListResponse,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectUploadResponse as ObjectUploadResponse,
    ObjectListResponsesCursorPagination as ObjectListResponsesCursorPagination,
    type ObjectListParams as ObjectListParams,
    type ObjectDeleteParams as ObjectDeleteParams,
    type ObjectGetParams as ObjectGetParams,
    type ObjectUploadParams as ObjectUploadParams,
  };
}
