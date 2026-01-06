// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Sinks extends APIResource {
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
  create(params: SinkCreateParams, options?: Core.RequestOptions): Core.APIPromise<SinkCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pipelines/v1/sinks`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SinkCreateResponse }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<SinkListResponsesV4PagePaginationArray, SinkListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pipelines/v1/sinks`,
      SinkListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete Pipeline in Account.
   *
   * @example
   * ```ts
   * await client.pipelines.sinks.delete(
   *   '0223105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(sinkId: string, params: SinkDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id, force } = params;
    return this._client.delete(`/accounts/${account_id}/pipelines/v1/sinks/${sinkId}`, {
      query: { force },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
  get(
    sinkId: string,
    params: SinkGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SinkGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/pipelines/v1/sinks/${sinkId}`, options) as Core.APIPromise<{
        result: SinkGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SinkListResponsesV4PagePaginationArray extends V4PagePaginationArray<SinkListResponse> {}

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

  format?: SinkCreateResponse.Json | SinkCreateResponse.Parquet;

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

  export interface Json {
    type: 'json';

    decimal_encoding?: 'number' | 'string' | 'bytes';

    timestamp_format?: 'rfc3339' | 'unix_millis';

    unstructured?: boolean;
  }

  export interface Parquet {
    type: 'parquet';

    compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

    row_group_bytes?: number | null;
  }

  export interface Schema {
    fields?: Array<
      | Schema.Int32
      | Schema.Int64
      | Schema.Float32
      | Schema.Float64
      | Schema.Bool
      | Schema.String
      | Schema.Binary
      | Schema.Timestamp
      | Schema.Json
      | Schema.Struct
      | Schema.List
    >;

    format?: Schema.Json | Schema.Parquet;

    inferred?: boolean | null;
  }

  export namespace Schema {
    export interface Int32 {
      type: 'int32';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Int64 {
      type: 'int64';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Float32 {
      type: 'float32';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Float64 {
      type: 'float64';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Bool {
      type: 'bool';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface String {
      type: 'string';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Binary {
      type: 'binary';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Timestamp {
      type: 'timestamp';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;

      unit?: 'second' | 'millisecond' | 'microsecond' | 'nanosecond';
    }

    export interface Json {
      type: 'json';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Struct {}

    export interface List {}

    export interface Json {
      type: 'json';

      decimal_encoding?: 'number' | 'string' | 'bytes';

      timestamp_format?: 'rfc3339' | 'unix_millis';

      unstructured?: boolean;
    }

    export interface Parquet {
      type: 'parquet';

      compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

      row_group_bytes?: number | null;
    }
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
    | SinkListResponse.CloudflarePipelinesR2Table
    | SinkListResponse.CloudflarePipelinesR2DataCatalogTable;

  format?: SinkListResponse.Json | SinkListResponse.Parquet;

  schema?: SinkListResponse.Schema;
}

export namespace SinkListResponse {
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

  export interface Json {
    type: 'json';

    decimal_encoding?: 'number' | 'string' | 'bytes';

    timestamp_format?: 'rfc3339' | 'unix_millis';

    unstructured?: boolean;
  }

  export interface Parquet {
    type: 'parquet';

    compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

    row_group_bytes?: number | null;
  }

  export interface Schema {
    fields?: Array<
      | Schema.Int32
      | Schema.Int64
      | Schema.Float32
      | Schema.Float64
      | Schema.Bool
      | Schema.String
      | Schema.Binary
      | Schema.Timestamp
      | Schema.Json
      | Schema.Struct
      | Schema.List
    >;

    format?: Schema.Json | Schema.Parquet;

    inferred?: boolean | null;
  }

  export namespace Schema {
    export interface Int32 {
      type: 'int32';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Int64 {
      type: 'int64';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Float32 {
      type: 'float32';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Float64 {
      type: 'float64';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Bool {
      type: 'bool';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface String {
      type: 'string';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Binary {
      type: 'binary';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Timestamp {
      type: 'timestamp';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;

      unit?: 'second' | 'millisecond' | 'microsecond' | 'nanosecond';
    }

    export interface Json {
      type: 'json';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Struct {}

    export interface List {}

    export interface Json {
      type: 'json';

      decimal_encoding?: 'number' | 'string' | 'bytes';

      timestamp_format?: 'rfc3339' | 'unix_millis';

      unstructured?: boolean;
    }

    export interface Parquet {
      type: 'parquet';

      compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

      row_group_bytes?: number | null;
    }
  }
}

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
  config?: SinkGetResponse.CloudflarePipelinesR2Table | SinkGetResponse.CloudflarePipelinesR2DataCatalogTable;

  format?: SinkGetResponse.Json | SinkGetResponse.Parquet;

  schema?: SinkGetResponse.Schema;
}

export namespace SinkGetResponse {
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

  export interface Json {
    type: 'json';

    decimal_encoding?: 'number' | 'string' | 'bytes';

    timestamp_format?: 'rfc3339' | 'unix_millis';

    unstructured?: boolean;
  }

  export interface Parquet {
    type: 'parquet';

    compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

    row_group_bytes?: number | null;
  }

  export interface Schema {
    fields?: Array<
      | Schema.Int32
      | Schema.Int64
      | Schema.Float32
      | Schema.Float64
      | Schema.Bool
      | Schema.String
      | Schema.Binary
      | Schema.Timestamp
      | Schema.Json
      | Schema.Struct
      | Schema.List
    >;

    format?: Schema.Json | Schema.Parquet;

    inferred?: boolean | null;
  }

  export namespace Schema {
    export interface Int32 {
      type: 'int32';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Int64 {
      type: 'int64';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Float32 {
      type: 'float32';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Float64 {
      type: 'float64';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Bool {
      type: 'bool';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface String {
      type: 'string';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Binary {
      type: 'binary';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Timestamp {
      type: 'timestamp';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;

      unit?: 'second' | 'millisecond' | 'microsecond' | 'nanosecond';
    }

    export interface Json {
      type: 'json';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Struct {}

    export interface List {}

    export interface Json {
      type: 'json';

      decimal_encoding?: 'number' | 'string' | 'bytes';

      timestamp_format?: 'rfc3339' | 'unix_millis';

      unstructured?: boolean;
    }

    export interface Parquet {
      type: 'parquet';

      compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

      row_group_bytes?: number | null;
    }
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
   * Body param:
   */
  format?: SinkCreateParams.Json | SinkCreateParams.Parquet;

  /**
   * Body param:
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

  export interface Json {
    type: 'json';

    decimal_encoding?: 'number' | 'string' | 'bytes';

    timestamp_format?: 'rfc3339' | 'unix_millis';

    unstructured?: boolean;
  }

  export interface Parquet {
    type: 'parquet';

    compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

    row_group_bytes?: number | null;
  }

  export interface Schema {
    fields?: Array<
      | Schema.Int32
      | Schema.Int64
      | Schema.Float32
      | Schema.Float64
      | Schema.Bool
      | Schema.String
      | Schema.Binary
      | Schema.Timestamp
      | Schema.Json
      | Schema.Struct
      | Schema.List
    >;

    format?: Schema.Json | Schema.Parquet;

    inferred?: boolean | null;
  }

  export namespace Schema {
    export interface Int32 {
      type: 'int32';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Int64 {
      type: 'int64';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Float32 {
      type: 'float32';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Float64 {
      type: 'float64';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Bool {
      type: 'bool';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface String {
      type: 'string';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Binary {
      type: 'binary';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Timestamp {
      type: 'timestamp';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;

      unit?: 'second' | 'millisecond' | 'microsecond' | 'nanosecond';
    }

    export interface Json {
      type: 'json';

      metadata_key?: string | null;

      name?: string;

      required?: boolean;

      sql_name?: string;
    }

    export interface Struct {}

    export interface List {}

    export interface Json {
      type: 'json';

      decimal_encoding?: 'number' | 'string' | 'bytes';

      timestamp_format?: 'rfc3339' | 'unix_millis';

      unstructured?: boolean;
    }

    export interface Parquet {
      type: 'parquet';

      compression?: 'uncompressed' | 'snappy' | 'gzip' | 'zstd' | 'lz4';

      row_group_bytes?: number | null;
    }
  }
}

export interface SinkListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Query param:
   */
  pipeline_id?: string;
}

export interface SinkDeleteParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Query param: Delete sink forcefully, including deleting any dependent pipelines.
   */
  force?: string;
}

export interface SinkGetParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

Sinks.SinkListResponsesV4PagePaginationArray = SinkListResponsesV4PagePaginationArray;

export declare namespace Sinks {
  export {
    type SinkCreateResponse as SinkCreateResponse,
    type SinkListResponse as SinkListResponse,
    type SinkGetResponse as SinkGetResponse,
    SinkListResponsesV4PagePaginationArray as SinkListResponsesV4PagePaginationArray,
    type SinkCreateParams as SinkCreateParams,
    type SinkListParams as SinkListParams,
    type SinkDeleteParams as SinkDeleteParams,
    type SinkGetParams as SinkGetParams,
  };
}
