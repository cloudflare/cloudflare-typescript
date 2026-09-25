// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PipelinesAPI from './pipelines';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSinks extends APIResource {
  static override readonly _key: readonly ['pipelines', 'sinks'] = Object.freeze([
    'pipelines',
    'sinks',
  ] as const);

  /**
   * Create a new Sink.
   *
   * @example
   * ```ts
   * const sink = await client.pipelines.sinks.create({
   *   account_id: '0123105f4ecef8ad9ca31a8372d0c353',
   *   name: 'my_sink',
   *   type: 'r2',
   * });
   * ```
   */
  create(params: SinkCreateParams, options?: RequestOptions): APIPromise<SinkCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pipelines/v1/sinks`, {
        body,
        ...options,
      }) as APIPromise<{ result: SinkCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List/Filter Sinks in Account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sinkListResponse of client.pipelines.sinks.list(
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SinkListParams,
    options?: RequestOptions,
  ): PagePromise<SinkListResponsesV4PagePaginationArray, SinkListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/pipelines/v1/sinks`,
      V4PagePaginationArray<SinkListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete Sink in Account.
   *
   * @example
   * ```ts
   * const sink = await client.pipelines.sinks.delete(
   *   '0223105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(sinkID: string, params: SinkDeleteParams, options?: RequestOptions): APIPromise<SinkDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/pipelines/v1/sinks/${sinkID}`, options) as APIPromise<{
        result: SinkDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Sink Details.
   *
   * @example
   * ```ts
   * const sink = await client.pipelines.sinks.get(
   *   '0223105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(sinkID: string, params: SinkGetParams, options?: RequestOptions): APIPromise<SinkGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/pipelines/v1/sinks/${sinkID}`, options) as APIPromise<{
        result: SinkGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Sinks extends BaseSinks {}

export type SinkListResponsesV4PagePaginationArray = V4PagePaginationArray<SinkListResponse>;

export interface SinkCreateResponse {
  /**
   * Indicates a unique identifier for this sink.
   */
  id: string;

  created_at: string;

  modified_at: string;

  /**
   * Defines the name of the Sink.
   */
  name: string;

  /**
   * Specifies the type of sink.
   */
  type: 'r2' | 'r2_data_catalog';

  /**
   * R2 Data Catalog Sink
   */
  config?:
    | SinkCreateResponse.CloudflarePipelinesR2Table
    | SinkCreateResponse.CloudflarePipelinesR2DataCatalogTable;

  /**
   * Defines the output data format of a sink.
   */
  format?:
    | SinkCreateResponse.CloudflarePipelinesSinkJsonFormat
    | SinkCreateResponse.CloudflarePipelinesSinkParquetFormat;

  /**
   * Defines the schema of the events in the data stream.
   */
  schema?: SinkCreateResponse.Schema;
}

export namespace SinkCreateResponse {
  export interface CloudflarePipelinesR2Table {
    /**
     * Cloudflare Account ID for the bucket
     */
    account_id: string;

    /**
     * R2 Bucket to write to
     */
    bucket: string;

    credentials: CloudflarePipelinesR2Table.Credentials;

    /**
     * Controls filename prefix/suffix and strategy.
     */
    file_naming?: CloudflarePipelinesR2Table.FileNaming;

    /**
     * Jurisdiction this bucket is hosted in
     */
    jurisdiction?: string;

    /**
     * Data-layout partitioning for sinks.
     */
    partitioning?: CloudflarePipelinesR2Table.Partitioning;

    /**
     * Subpath within the bucket to write to
     */
    path?: string;

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    rolling_policy?: CloudflarePipelinesR2Table.RollingPolicy;
  }

  export namespace CloudflarePipelinesR2Table {
    export interface Credentials {
      /**
       * Cloudflare Account ID for the bucket
       */
      access_key_id: string;

      /**
       * Cloudflare Account ID for the bucket
       */
      secret_access_key: string;
    }

    /**
     * Controls filename prefix/suffix and strategy.
     */
    export interface FileNaming {
      /**
       * The prefix to use in file name. i.e prefix-<uuid>.parquet
       */
      prefix?: string;

      /**
       * Filename generation strategy.
       */
      strategy?: 'serial' | 'uuid' | 'uuid_v7' | 'ulid';

      /**
       * This will overwrite the default file suffix. i.e .parquet, use with caution
       */
      suffix?: string;
    }

    /**
     * Data-layout partitioning for sinks.
     */
    export interface Partitioning {
      /**
       * The pattern of the date string
       */
      time_pattern?: string;
    }

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    export interface RollingPolicy {
      /**
       * Files will be rolled after reaching this number of bytes
       */
      file_size_bytes?: number;

      /**
       * Number of seconds of inactivity to wait before rolling over to a new file
       */
      inactivity_seconds?: number;

      /**
       * Number of seconds to wait before rolling over to a new file
       */
      interval_seconds?: number;
    }
  }

  /**
   * R2 Data Catalog Sink
   */
  export interface CloudflarePipelinesR2DataCatalogTable {
    /**
     * Authentication token
     */
    token: string;

    /**
     * Cloudflare Account ID
     */
    account_id: string;

    /**
     * The R2 Bucket that hosts this catalog
     */
    bucket: string;

    /**
     * Table name
     */
    table_name: string;

    /**
     * Table namespace
     */
    namespace?: string;

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    rolling_policy?: CloudflarePipelinesR2DataCatalogTable.RollingPolicy;
  }

  export namespace CloudflarePipelinesR2DataCatalogTable {
    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    export interface RollingPolicy {
      /**
       * Files will be rolled after reaching this number of bytes
       */
      file_size_bytes?: number;

      /**
       * Number of seconds of inactivity to wait before rolling over to a new file
       */
      inactivity_seconds?: number;

      /**
       * Number of seconds to wait before rolling over to a new file
       */
      interval_seconds?: number;
    }
  }

  export interface CloudflarePipelinesSinkJsonFormat {
    type: 'json';

    /**
     * Specifies the compression applied to JSON sink output.
     */
    compression?: 'uncompressed' | 'gzip';

    decimal_encoding?: 'number' | 'string' | 'bytes';

    timestamp_format?: 'rfc3339' | 'unix_millis';

    unstructured?: boolean;
  }

  export interface CloudflarePipelinesSinkParquetFormat {
    type: 'parquet';

    compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

    row_group_bytes?: number | null;
  }

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceField>;

    inferred?: boolean | null;
  }
}

export interface SinkListResponse {
  /**
   * Indicates a unique identifier for this sink.
   */
  id: string;

  created_at: string;

  modified_at: string;

  /**
   * Defines the name of the Sink.
   */
  name: string;

  /**
   * Specifies the type of sink.
   */
  type: 'r2' | 'r2_data_catalog';

  /**
   * Defines the configuration of the R2 Sink.
   */
  config?:
    | SinkListResponse.CloudflarePipelinesR2TablePublic
    | SinkListResponse.CloudflarePipelinesR2DataCatalogTablePublic;

  /**
   * Defines the output data format of a sink.
   */
  format?:
    | SinkListResponse.CloudflarePipelinesSinkJsonFormat
    | SinkListResponse.CloudflarePipelinesSinkParquetFormat;

  /**
   * Defines the schema of the events in the data stream.
   */
  schema?: SinkListResponse.Schema;
}

export namespace SinkListResponse {
  /**
   * R2 Sink public configuration.
   */
  export interface CloudflarePipelinesR2TablePublic {
    /**
     * Cloudflare Account ID for the bucket
     */
    account_id: string;

    /**
     * R2 Bucket to write to
     */
    bucket: string;

    /**
     * Controls filename prefix/suffix and strategy.
     */
    file_naming?: CloudflarePipelinesR2TablePublic.FileNaming;

    /**
     * Jurisdiction this bucket is hosted in
     */
    jurisdiction?: string;

    /**
     * Data-layout partitioning for sinks.
     */
    partitioning?: CloudflarePipelinesR2TablePublic.Partitioning;

    /**
     * Subpath within the bucket to write to
     */
    path?: string;

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    rolling_policy?: CloudflarePipelinesR2TablePublic.RollingPolicy;
  }

  export namespace CloudflarePipelinesR2TablePublic {
    /**
     * Controls filename prefix/suffix and strategy.
     */
    export interface FileNaming {
      /**
       * The prefix to use in file name. i.e prefix-<uuid>.parquet
       */
      prefix?: string;

      /**
       * Filename generation strategy.
       */
      strategy?: 'serial' | 'uuid' | 'uuid_v7' | 'ulid';

      /**
       * This will overwrite the default file suffix. i.e .parquet, use with caution
       */
      suffix?: string;
    }

    /**
     * Data-layout partitioning for sinks.
     */
    export interface Partitioning {
      /**
       * The pattern of the date string
       */
      time_pattern?: string;
    }

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    export interface RollingPolicy {
      /**
       * Files will be rolled after reaching this number of bytes
       */
      file_size_bytes?: number;

      /**
       * Number of seconds of inactivity to wait before rolling over to a new file
       */
      inactivity_seconds?: number;

      /**
       * Number of seconds to wait before rolling over to a new file
       */
      interval_seconds?: number;
    }
  }

  /**
   * R2 Data Catalog Sink public configuration.
   */
  export interface CloudflarePipelinesR2DataCatalogTablePublic {
    /**
     * Cloudflare Account ID
     */
    account_id: string;

    /**
     * The R2 Bucket that hosts this catalog
     */
    bucket: string;

    /**
     * Table name
     */
    table_name: string;

    /**
     * Table namespace
     */
    namespace?: string;

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    rolling_policy?: CloudflarePipelinesR2DataCatalogTablePublic.RollingPolicy;
  }

  export namespace CloudflarePipelinesR2DataCatalogTablePublic {
    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    export interface RollingPolicy {
      /**
       * Files will be rolled after reaching this number of bytes
       */
      file_size_bytes?: number;

      /**
       * Number of seconds of inactivity to wait before rolling over to a new file
       */
      inactivity_seconds?: number;

      /**
       * Number of seconds to wait before rolling over to a new file
       */
      interval_seconds?: number;
    }
  }

  export interface CloudflarePipelinesSinkJsonFormat {
    type: 'json';

    /**
     * Specifies the compression applied to JSON sink output.
     */
    compression?: 'uncompressed' | 'gzip';

    decimal_encoding?: 'number' | 'string' | 'bytes';

    timestamp_format?: 'rfc3339' | 'unix_millis';

    unstructured?: boolean;
  }

  export interface CloudflarePipelinesSinkParquetFormat {
    type: 'parquet';

    compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

    row_group_bytes?: number | null;
  }

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceField>;

    inferred?: boolean | null;
  }
}

export type SinkDeleteResponse = unknown;

export interface SinkGetResponse {
  /**
   * Indicates a unique identifier for this sink.
   */
  id: string;

  created_at: string;

  modified_at: string;

  /**
   * Defines the name of the Sink.
   */
  name: string;

  /**
   * Specifies the type of sink.
   */
  type: 'r2' | 'r2_data_catalog';

  /**
   * Defines the configuration of the R2 Sink.
   */
  config?:
    | SinkGetResponse.CloudflarePipelinesR2TablePublic
    | SinkGetResponse.CloudflarePipelinesR2DataCatalogTablePublic;

  /**
   * Defines the output data format of a sink.
   */
  format?:
    | SinkGetResponse.CloudflarePipelinesSinkJsonFormat
    | SinkGetResponse.CloudflarePipelinesSinkParquetFormat;

  /**
   * Defines the schema of the events in the data stream.
   */
  schema?: SinkGetResponse.Schema;
}

export namespace SinkGetResponse {
  /**
   * R2 Sink public configuration.
   */
  export interface CloudflarePipelinesR2TablePublic {
    /**
     * Cloudflare Account ID for the bucket
     */
    account_id: string;

    /**
     * R2 Bucket to write to
     */
    bucket: string;

    /**
     * Controls filename prefix/suffix and strategy.
     */
    file_naming?: CloudflarePipelinesR2TablePublic.FileNaming;

    /**
     * Jurisdiction this bucket is hosted in
     */
    jurisdiction?: string;

    /**
     * Data-layout partitioning for sinks.
     */
    partitioning?: CloudflarePipelinesR2TablePublic.Partitioning;

    /**
     * Subpath within the bucket to write to
     */
    path?: string;

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    rolling_policy?: CloudflarePipelinesR2TablePublic.RollingPolicy;
  }

  export namespace CloudflarePipelinesR2TablePublic {
    /**
     * Controls filename prefix/suffix and strategy.
     */
    export interface FileNaming {
      /**
       * The prefix to use in file name. i.e prefix-<uuid>.parquet
       */
      prefix?: string;

      /**
       * Filename generation strategy.
       */
      strategy?: 'serial' | 'uuid' | 'uuid_v7' | 'ulid';

      /**
       * This will overwrite the default file suffix. i.e .parquet, use with caution
       */
      suffix?: string;
    }

    /**
     * Data-layout partitioning for sinks.
     */
    export interface Partitioning {
      /**
       * The pattern of the date string
       */
      time_pattern?: string;
    }

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    export interface RollingPolicy {
      /**
       * Files will be rolled after reaching this number of bytes
       */
      file_size_bytes?: number;

      /**
       * Number of seconds of inactivity to wait before rolling over to a new file
       */
      inactivity_seconds?: number;

      /**
       * Number of seconds to wait before rolling over to a new file
       */
      interval_seconds?: number;
    }
  }

  /**
   * R2 Data Catalog Sink public configuration.
   */
  export interface CloudflarePipelinesR2DataCatalogTablePublic {
    /**
     * Cloudflare Account ID
     */
    account_id: string;

    /**
     * The R2 Bucket that hosts this catalog
     */
    bucket: string;

    /**
     * Table name
     */
    table_name: string;

    /**
     * Table namespace
     */
    namespace?: string;

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    rolling_policy?: CloudflarePipelinesR2DataCatalogTablePublic.RollingPolicy;
  }

  export namespace CloudflarePipelinesR2DataCatalogTablePublic {
    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    export interface RollingPolicy {
      /**
       * Files will be rolled after reaching this number of bytes
       */
      file_size_bytes?: number;

      /**
       * Number of seconds of inactivity to wait before rolling over to a new file
       */
      inactivity_seconds?: number;

      /**
       * Number of seconds to wait before rolling over to a new file
       */
      interval_seconds?: number;
    }
  }

  export interface CloudflarePipelinesSinkJsonFormat {
    type: 'json';

    /**
     * Specifies the compression applied to JSON sink output.
     */
    compression?: 'uncompressed' | 'gzip';

    decimal_encoding?: 'number' | 'string' | 'bytes';

    timestamp_format?: 'rfc3339' | 'unix_millis';

    unstructured?: boolean;
  }

  export interface CloudflarePipelinesSinkParquetFormat {
    type: 'parquet';

    compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

    row_group_bytes?: number | null;
  }

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceField>;

    inferred?: boolean | null;
  }
}

export interface SinkCreateParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param: Defines the name of the Sink.
   */
  name: string;

  /**
   * Body param: Specifies the type of sink.
   */
  type: 'r2' | 'r2_data_catalog';

  /**
   * Body param: Defines the configuration of the R2 Sink.
   */
  config?:
    | SinkCreateParams.CloudflarePipelinesR2Table
    | SinkCreateParams.CloudflarePipelinesR2DataCatalogTable;

  /**
   * Body param: Defines the output data format of a sink.
   */
  format?:
    | SinkCreateParams.CloudflarePipelinesSinkJsonFormat
    | SinkCreateParams.CloudflarePipelinesSinkParquetFormat;

  /**
   * Body param: Defines the schema of the events in the data stream.
   */
  schema?: SinkCreateParams.Schema;
}

export namespace SinkCreateParams {
  export interface CloudflarePipelinesR2Table {
    /**
     * Cloudflare Account ID for the bucket
     */
    account_id: string;

    /**
     * R2 Bucket to write to
     */
    bucket: string;

    credentials: CloudflarePipelinesR2Table.Credentials;

    /**
     * Controls filename prefix/suffix and strategy.
     */
    file_naming?: CloudflarePipelinesR2Table.FileNaming;

    /**
     * Jurisdiction this bucket is hosted in
     */
    jurisdiction?: string;

    /**
     * Data-layout partitioning for sinks.
     */
    partitioning?: CloudflarePipelinesR2Table.Partitioning;

    /**
     * Subpath within the bucket to write to
     */
    path?: string;

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    rolling_policy?: CloudflarePipelinesR2Table.RollingPolicy;
  }

  export namespace CloudflarePipelinesR2Table {
    export interface Credentials {
      /**
       * Cloudflare Account ID for the bucket
       */
      access_key_id: string;

      /**
       * Cloudflare Account ID for the bucket
       */
      secret_access_key: string;
    }

    /**
     * Controls filename prefix/suffix and strategy.
     */
    export interface FileNaming {
      /**
       * The prefix to use in file name. i.e prefix-<uuid>.parquet
       */
      prefix?: string;

      /**
       * Filename generation strategy.
       */
      strategy?: 'serial' | 'uuid' | 'uuid_v7' | 'ulid';

      /**
       * This will overwrite the default file suffix. i.e .parquet, use with caution
       */
      suffix?: string;
    }

    /**
     * Data-layout partitioning for sinks.
     */
    export interface Partitioning {
      /**
       * The pattern of the date string
       */
      time_pattern?: string;
    }

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    export interface RollingPolicy {
      /**
       * Files will be rolled after reaching this number of bytes
       */
      file_size_bytes?: number;

      /**
       * Number of seconds of inactivity to wait before rolling over to a new file
       */
      inactivity_seconds?: number;

      /**
       * Number of seconds to wait before rolling over to a new file
       */
      interval_seconds?: number;
    }
  }

  /**
   * R2 Data Catalog Sink
   */
  export interface CloudflarePipelinesR2DataCatalogTable {
    /**
     * Authentication token
     */
    token: string;

    /**
     * Cloudflare Account ID
     */
    account_id: string;

    /**
     * The R2 Bucket that hosts this catalog
     */
    bucket: string;

    /**
     * Table name
     */
    table_name: string;

    /**
     * Table namespace
     */
    namespace?: string;

    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    rolling_policy?: CloudflarePipelinesR2DataCatalogTable.RollingPolicy;
  }

  export namespace CloudflarePipelinesR2DataCatalogTable {
    /**
     * Rolling policy for file sinks (when & why to close a file and open a new one).
     */
    export interface RollingPolicy {
      /**
       * Files will be rolled after reaching this number of bytes
       */
      file_size_bytes?: number;

      /**
       * Number of seconds of inactivity to wait before rolling over to a new file
       */
      inactivity_seconds?: number;

      /**
       * Number of seconds to wait before rolling over to a new file
       */
      interval_seconds?: number;
    }
  }

  export interface CloudflarePipelinesSinkJsonFormat {
    type: 'json';

    /**
     * Specifies the compression applied to JSON sink output.
     */
    compression?: 'uncompressed' | 'gzip';

    decimal_encoding?: 'number' | 'string' | 'bytes';

    timestamp_format?: 'rfc3339' | 'unix_millis';

    unstructured?: boolean;
  }

  export interface CloudflarePipelinesSinkParquetFormat {
    type: 'parquet';

    compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

    row_group_bytes?: number | null;
  }

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceFieldParam>;

    inferred?: boolean | null;
  }
}

export interface SinkListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Query param: Filters sinks by name (case-insensitive substring).
   */
  name?: string;

  /**
   * Query param
   */
  pipeline_id?: string;
}

export interface SinkDeleteParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export interface SinkGetParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export declare namespace Sinks {
  export {
    type SinkCreateResponse as SinkCreateResponse,
    type SinkListResponse as SinkListResponse,
    type SinkDeleteResponse as SinkDeleteResponse,
    type SinkGetResponse as SinkGetResponse,
    type SinkListResponsesV4PagePaginationArray as SinkListResponsesV4PagePaginationArray,
    type SinkCreateParams as SinkCreateParams,
    type SinkListParams as SinkListParams,
    type SinkDeleteParams as SinkDeleteParams,
    type SinkGetParams as SinkGetParams,
  };
}
