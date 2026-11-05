// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseJobs extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'jobs'] = Object.freeze([
    'r2',
    'buckets',
    'jobs',
  ] as const);

  /**
   * Creates a background job for an R2 bucket. The `jobType` field selects the job:
   *
   * - **`prefixDelete`**: deletes every object whose key begins with `prefix`. A
   *   non-empty prefix must end in `/`. An empty prefix (`""`) empties the entire
   *   bucket.
   * - **`storageClassMigration`**: migrates every object in the bucket between
   *   storage classes. `sourceStorageClass` and `destinationStorageClass` must be
   *   provided together and must differ; omitting both migrates from
   *   `InfrequentAccess` to `Standard`.
   *
   * Poll the returned `id` with the Get Bucket Job endpoint. Small prefix-delete
   * jobs can finish synchronously and return `COMPLETED`. Objects uploaded after a
   * background job starts are not affected by that job.
   *
   * For prefix-delete jobs: abort active multipart uploads before submitting the
   * request, since a synchronously completed job does not abort them, and avoid
   * writing objects or starting multipart uploads while a bucket-emptying job is in
   * progress. Each request creates a distinct job, and the number of active
   * prefix-delete jobs is limited per bucket; wait for an existing job to finish
   * before retrying a request rejected with HTTP 429. A bucket cannot be emptied
   * while event notifications are configured (HTTP 409 / error code 10083). To
   * protect a bucket with R2 Data Catalog enabled, send the
   * `cf-r2-data-catalog-check` header; a conflict is returned with HTTP 409 / error
   * code 10081.
   *
   * Prefix-delete jobs require permission to delete objects; storage-class migration
   * jobs require permission to write to the bucket.
   *
   * @example
   * ```ts
   * const job = await client.r2.buckets.jobs.create(
   *   'example-bucket',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     jobType: 'prefixDelete',
   *     prefix: 'logs/2026/',
   *   },
   * );
   * ```
   */
  create(
    bucketName: string,
    params: JobCreateParams,
    options?: RequestOptions,
  ): APIPromise<JobCreateResponse> {
    const {
      account_id,
      'cf-r2-data-catalog-check': cfR2DataCatalogCheck,
      'cf-r2-jurisdiction': cfR2Jurisdiction,
      ...body
    } = params;
    return (
      this._client.post(path`/accounts/${account_id}/r2/buckets/${bucketName}/jobs`, {
        body,
        ...options,
        headers: buildHeaders([
          {
            ...(cfR2DataCatalogCheck != null ?
              { 'cf-r2-data-catalog-check': cfR2DataCatalogCheck }
            : undefined),
            ...(cfR2Jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
            : undefined),
          },
          options?.headers,
        ]),
      }) as APIPromise<{ result: JobCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists background jobs for an R2 bucket, including prefix-delete (and
   * bucket-emptying) jobs and storage-class migration jobs. Jobs of every type are
   * returned unless `jobType` is provided.
   *
   * @example
   * ```ts
   * const jobs = await client.r2.buckets.jobs.list(
   *   'example-bucket',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  list(bucketName: string, params: JobListParams, options?: RequestOptions): APIPromise<JobListResponse> {
    const { account_id, 'cf-r2-jurisdiction': cfR2Jurisdiction, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/r2/buckets/${bucketName}/jobs`, {
        query,
        ...options,
        headers: buildHeaders([
          {
            ...(cfR2Jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
            : undefined),
          },
          options?.headers,
        ]),
      }) as APIPromise<{ result: JobListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the current status of a background job of any type for an R2 bucket. Poll
   * this endpoint with the job identifier returned by Create Bucket Job until the
   * status is `COMPLETED`, `FAILED`, or `CANCELLED`.
   *
   * @example
   * ```ts
   * const job = await client.r2.buckets.jobs.get('job_id', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   bucket_name: 'example-bucket',
   * });
   * ```
   */
  get(jobID: string, params: JobGetParams, options?: RequestOptions): APIPromise<JobGetResponse> {
    const { account_id, bucket_name, 'cf-r2-jurisdiction': cfR2Jurisdiction } = params;
    return (
      this._client.get(path`/accounts/${account_id}/r2/buckets/${bucket_name}/jobs/${jobID}`, {
        ...options,
        headers: buildHeaders([
          {
            ...(cfR2Jurisdiction?.toString() != null ?
              { 'cf-r2-jurisdiction': cfR2Jurisdiction?.toString() }
            : undefined),
          },
          options?.headers,
        ]),
      }) as APIPromise<{ result: JobGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Jobs extends BaseJobs {}

/**
 * Descriptor of a bucket background job, discriminated by `jobType`. Returned by
 * the Create Bucket Job, Get Bucket Job and List Bucket Jobs endpoints. A small
 * operation can already be `COMPLETED` when it is returned.
 */
export type JobCreateResponse =
  | JobCreateResponse.R2PrefixDeleteJob
  | JobCreateResponse.R2StorageClassMigrationJob;

export namespace JobCreateResponse {
  /**
   * Descriptor of a prefix-delete job. An empty prefix indicates a job that empties
   * the whole bucket.
   */
  export interface R2PrefixDeleteJob {
    /**
     * Unique identifier used to poll the job.
     */
    id: string;

    /**
     * The job kind.
     */
    jobType: 'prefixDelete';

    /**
     * Details specific to the prefix-delete job.
     */
    prefixDelete: R2PrefixDeleteJob.PrefixDelete;

    /**
     * When the job was created.
     */
    startTime: string;

    /**
     * Lifecycle status of a bucket background job.
     */
    status: 'ENQUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

    /**
     * When the job finished. Absent while the job is still `ENQUEUED` or `RUNNING`.
     */
    endTime?: string;
  }

  export namespace R2PrefixDeleteJob {
    /**
     * Details specific to the prefix-delete job.
     */
    export interface PrefixDelete {
      /**
       * Number of objects deleted by the job so far.
       */
      deletedObjects: number;

      /**
       * The prefix matched against object keys. An empty string means the entire bucket.
       */
      prefix: string;

      /**
       * True when the job was created to clear the entire bucket. This field can be
       * absent on jobs created before Empty Bucket job tracking was introduced.
       */
      isBucketClear?: boolean;
    }
  }

  /**
   * Descriptor of a bucket-wide storage-class migration job.
   */
  export interface R2StorageClassMigrationJob {
    /**
     * Unique identifier used to poll the job.
     */
    id: string;

    /**
     * The job kind.
     */
    jobType: 'storageClassMigration';

    /**
     * When the job was created.
     */
    startTime: string;

    /**
     * Lifecycle status of a bucket background job.
     */
    status: 'ENQUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

    storageClassMigration: R2StorageClassMigrationJob.StorageClassMigration;

    /**
     * When the job finished. Absent while the job is still `ENQUEUED` or `RUNNING`.
     */
    endTime?: string;
  }

  export namespace R2StorageClassMigrationJob {
    export interface StorageClassMigration {
      /**
       * The storage class objects are migrated to. The source and destination storage
       * classes always differ.
       */
      destinationStorageClass: 'Standard' | 'InfrequentAccess';

      /**
       * Number of object versions migrated successfully.
       */
      migratedObjects: number;

      /**
       * The storage class objects are migrated from.
       */
      sourceStorageClass: 'Standard' | 'InfrequentAccess';

      /**
       * Payload bytes belonging to failed object versions.
       */
      failedBytes?: number;

      /**
       * Number of object versions that failed migration.
       */
      failedObjects?: number;

      /**
       * Object payload bytes migrated successfully. Present for Metadata Worker jobs.
       */
      migratedBytes?: number;

      /**
       * Object metadata bytes migrated successfully. Present for Metadata Worker jobs.
       */
      migratedMetadataBytes?: number;

      /**
       * Payload bytes belonging to skipped object versions.
       */
      skippedBytes?: number;

      /**
       * Number of object versions skipped.
       */
      skippedObjects?: number;
    }
  }
}

export interface JobListResponse {
  /**
   * Bucket jobs in the current page.
   */
  jobs: Array<JobListResponse.R2PrefixDeleteJob | JobListResponse.R2StorageClassMigrationJob>;

  /**
   * Token to pass as `continuationToken` to retrieve the next page.
   */
  nextContinuationToken?: string;
}

export namespace JobListResponse {
  /**
   * Descriptor of a prefix-delete job. An empty prefix indicates a job that empties
   * the whole bucket.
   */
  export interface R2PrefixDeleteJob {
    /**
     * Unique identifier used to poll the job.
     */
    id: string;

    /**
     * The job kind.
     */
    jobType: 'prefixDelete';

    /**
     * Details specific to the prefix-delete job.
     */
    prefixDelete: R2PrefixDeleteJob.PrefixDelete;

    /**
     * When the job was created.
     */
    startTime: string;

    /**
     * Lifecycle status of a bucket background job.
     */
    status: 'ENQUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

    /**
     * When the job finished. Absent while the job is still `ENQUEUED` or `RUNNING`.
     */
    endTime?: string;
  }

  export namespace R2PrefixDeleteJob {
    /**
     * Details specific to the prefix-delete job.
     */
    export interface PrefixDelete {
      /**
       * Number of objects deleted by the job so far.
       */
      deletedObjects: number;

      /**
       * The prefix matched against object keys. An empty string means the entire bucket.
       */
      prefix: string;

      /**
       * True when the job was created to clear the entire bucket. This field can be
       * absent on jobs created before Empty Bucket job tracking was introduced.
       */
      isBucketClear?: boolean;
    }
  }

  /**
   * Descriptor of a bucket-wide storage-class migration job.
   */
  export interface R2StorageClassMigrationJob {
    /**
     * Unique identifier used to poll the job.
     */
    id: string;

    /**
     * The job kind.
     */
    jobType: 'storageClassMigration';

    /**
     * When the job was created.
     */
    startTime: string;

    /**
     * Lifecycle status of a bucket background job.
     */
    status: 'ENQUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

    storageClassMigration: R2StorageClassMigrationJob.StorageClassMigration;

    /**
     * When the job finished. Absent while the job is still `ENQUEUED` or `RUNNING`.
     */
    endTime?: string;
  }

  export namespace R2StorageClassMigrationJob {
    export interface StorageClassMigration {
      /**
       * The storage class objects are migrated to. The source and destination storage
       * classes always differ.
       */
      destinationStorageClass: 'Standard' | 'InfrequentAccess';

      /**
       * Number of object versions migrated successfully.
       */
      migratedObjects: number;

      /**
       * The storage class objects are migrated from.
       */
      sourceStorageClass: 'Standard' | 'InfrequentAccess';

      /**
       * Payload bytes belonging to failed object versions.
       */
      failedBytes?: number;

      /**
       * Number of object versions that failed migration.
       */
      failedObjects?: number;

      /**
       * Object payload bytes migrated successfully. Present for Metadata Worker jobs.
       */
      migratedBytes?: number;

      /**
       * Object metadata bytes migrated successfully. Present for Metadata Worker jobs.
       */
      migratedMetadataBytes?: number;

      /**
       * Payload bytes belonging to skipped object versions.
       */
      skippedBytes?: number;

      /**
       * Number of object versions skipped.
       */
      skippedObjects?: number;
    }
  }
}

/**
 * Descriptor of a bucket background job, discriminated by `jobType`. Returned by
 * the Create Bucket Job, Get Bucket Job and List Bucket Jobs endpoints. A small
 * operation can already be `COMPLETED` when it is returned.
 */
export type JobGetResponse = JobGetResponse.R2PrefixDeleteJob | JobGetResponse.R2StorageClassMigrationJob;

export namespace JobGetResponse {
  /**
   * Descriptor of a prefix-delete job. An empty prefix indicates a job that empties
   * the whole bucket.
   */
  export interface R2PrefixDeleteJob {
    /**
     * Unique identifier used to poll the job.
     */
    id: string;

    /**
     * The job kind.
     */
    jobType: 'prefixDelete';

    /**
     * Details specific to the prefix-delete job.
     */
    prefixDelete: R2PrefixDeleteJob.PrefixDelete;

    /**
     * When the job was created.
     */
    startTime: string;

    /**
     * Lifecycle status of a bucket background job.
     */
    status: 'ENQUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

    /**
     * When the job finished. Absent while the job is still `ENQUEUED` or `RUNNING`.
     */
    endTime?: string;
  }

  export namespace R2PrefixDeleteJob {
    /**
     * Details specific to the prefix-delete job.
     */
    export interface PrefixDelete {
      /**
       * Number of objects deleted by the job so far.
       */
      deletedObjects: number;

      /**
       * The prefix matched against object keys. An empty string means the entire bucket.
       */
      prefix: string;

      /**
       * True when the job was created to clear the entire bucket. This field can be
       * absent on jobs created before Empty Bucket job tracking was introduced.
       */
      isBucketClear?: boolean;
    }
  }

  /**
   * Descriptor of a bucket-wide storage-class migration job.
   */
  export interface R2StorageClassMigrationJob {
    /**
     * Unique identifier used to poll the job.
     */
    id: string;

    /**
     * The job kind.
     */
    jobType: 'storageClassMigration';

    /**
     * When the job was created.
     */
    startTime: string;

    /**
     * Lifecycle status of a bucket background job.
     */
    status: 'ENQUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

    storageClassMigration: R2StorageClassMigrationJob.StorageClassMigration;

    /**
     * When the job finished. Absent while the job is still `ENQUEUED` or `RUNNING`.
     */
    endTime?: string;
  }

  export namespace R2StorageClassMigrationJob {
    export interface StorageClassMigration {
      /**
       * The storage class objects are migrated to. The source and destination storage
       * classes always differ.
       */
      destinationStorageClass: 'Standard' | 'InfrequentAccess';

      /**
       * Number of object versions migrated successfully.
       */
      migratedObjects: number;

      /**
       * The storage class objects are migrated from.
       */
      sourceStorageClass: 'Standard' | 'InfrequentAccess';

      /**
       * Payload bytes belonging to failed object versions.
       */
      failedBytes?: number;

      /**
       * Number of object versions that failed migration.
       */
      failedObjects?: number;

      /**
       * Object payload bytes migrated successfully. Present for Metadata Worker jobs.
       */
      migratedBytes?: number;

      /**
       * Object metadata bytes migrated successfully. Present for Metadata Worker jobs.
       */
      migratedMetadataBytes?: number;

      /**
       * Payload bytes belonging to skipped object versions.
       */
      skippedBytes?: number;

      /**
       * Number of object versions skipped.
       */
      skippedObjects?: number;
    }
  }
}

export type JobCreateParams =
  | JobCreateParams.R2CreatePrefixDeleteJobRequest
  | JobCreateParams.R2CreateStorageClassMigrationJobRequest;

export declare namespace JobCreateParams {
  export interface R2CreatePrefixDeleteJobRequest {
    /**
     * Path param: Cloudflare account ID that owns the R2 resource.
     */
    account_id: string;

    /**
     * Body param
     */
    jobType: 'prefixDelete';

    /**
     * Body param: Prefix matched against object keys. A non-empty value must end in
     * `/`. An empty string empties the entire bucket.
     */
    prefix: string;

    /**
     * Header param: For prefix-delete jobs, set this header to reject the request when
     * R2 Data Catalog is enabled for the bucket.
     */
    'cf-r2-data-catalog-check'?: string;

    /**
     * Header param: Jurisdiction where objects in this bucket are guaranteed to be
     * stored.
     */
    'cf-r2-jurisdiction'?: 'default' | 'eu' | 'us' | 'fedramp' | 'fedramp-high';
  }

  export interface R2CreateStorageClassMigrationJobRequest {
    /**
     * Path param: Cloudflare account ID that owns the R2 resource.
     */
    account_id: string;

    /**
     * Body param
     */
    jobType: 'storageClassMigration';

    /**
     * Body param
     */
    destinationStorageClass?: 'Standard' | 'InfrequentAccess';

    /**
     * Body param
     */
    sourceStorageClass?: 'Standard' | 'InfrequentAccess';

    /**
     * Header param: For prefix-delete jobs, set this header to reject the request when
     * R2 Data Catalog is enabled for the bucket.
     */
    'cf-r2-data-catalog-check'?: string;

    /**
     * Header param: Jurisdiction where objects in this bucket are guaranteed to be
     * stored.
     */
    'cf-r2-jurisdiction'?: 'default' | 'eu' | 'us' | 'fedramp' | 'fedramp-high';
  }
}

export interface JobListParams {
  /**
   * Path param: Cloudflare account ID that owns the R2 resource.
   */
  account_id: string;

  /**
   * Query param: Pagination token received as `nextContinuationToken` in the
   * previous response.
   */
  continuationToken?: string;

  /**
   * Query param: Restricts results to jobs of the specified type.
   */
  jobType?: 'prefixDelete' | 'storageClassMigration';

  /**
   * Query param: Maximum number of jobs to return.
   */
  maxKeys?: number;

  /**
   * Query param: Restricts results to jobs with the specified status. `jobType` is
   * required when this parameter is provided.
   */
  status?: 'ENQUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'us' | 'fedramp' | 'fedramp-high';
}

export interface JobGetParams {
  /**
   * Path param: Cloudflare account ID that owns the R2 resource.
   */
  account_id: string;

  /**
   * Path param: Name of the bucket.
   */
  bucket_name: string;

  /**
   * Header param: Jurisdiction where objects in this bucket are guaranteed to be
   * stored.
   */
  'cf-r2-jurisdiction'?: 'default' | 'eu' | 'us' | 'fedramp' | 'fedramp-high';
}

export declare namespace Jobs {
  export {
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobGetResponse as JobGetResponse,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobGetParams as JobGetParams,
  };
}
