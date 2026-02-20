// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Streams extends APIResource {
  /**
   * Create a new Stream.
   *
   * @example
   * ```ts
   * const stream = await client.pipelines.streams.create({
   *   account_id: '0123105f4ecef8ad9ca31a8372d0c353',
   *   name: 'my_stream',
   * });
   * ```
   */
  create(params: StreamCreateParams, options?: Core.RequestOptions): Core.APIPromise<StreamCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pipelines/v1/streams`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: StreamCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Stream.
   *
   * @example
   * ```ts
   * const stream = await client.pipelines.streams.update(
   *   '033e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(
    streamId: string,
    params: StreamUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/pipelines/v1/streams/${streamId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: StreamUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List/Filter Streams in Account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const streamListResponse of client.pipelines.streams.list(
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: StreamListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<StreamListResponsesV4PagePaginationArray, StreamListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pipelines/v1/streams`,
      StreamListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete Stream in Account.
   *
   * @example
   * ```ts
   * await client.pipelines.streams.delete(
   *   '033e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(streamId: string, params: StreamDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id, force } = params;
    return this._client.delete(`/accounts/${account_id}/pipelines/v1/streams/${streamId}`, {
      query: { force },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get Stream Details.
   *
   * @example
   * ```ts
   * const stream = await client.pipelines.streams.get(
   *   '033e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    streamId: string,
    params: StreamGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pipelines/v1/streams/${streamId}`,
        options,
      ) as Core.APIPromise<{ result: StreamGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class StreamListResponsesV4PagePaginationArray extends V4PagePaginationArray<StreamListResponse> {}

export interface StreamCreateResponse {
  /**
   * Indicates a unique identifier for this stream.
   */
  id: string;

  created_at: string;

  http: StreamCreateResponse.HTTP;

  modified_at: string;

  /**
   * Indicates the name of the Stream.
   */
  name: string;

  /**
   * Indicates the current version of this stream.
   */
  version: number;

  worker_binding: StreamCreateResponse.WorkerBinding;

  /**
   * Indicates the endpoint URL of this stream.
   */
  endpoint?: string;

  format?: StreamCreateResponse.Json | StreamCreateResponse.Parquet;

  schema?: StreamCreateResponse.Schema;
}

export namespace StreamCreateResponse {
  export interface HTTP {
    /**
     * Indicates that authentication is required for the HTTP endpoint.
     */
    authentication: boolean;

    /**
     * Indicates that the HTTP endpoint is enabled.
     */
    enabled: boolean;

    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    export interface CORS {
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates that the worker binding is enabled.
     */
    enabled: boolean;
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

export interface StreamUpdateResponse {
  /**
   * Indicates a unique identifier for this stream.
   */
  id: string;

  created_at: string;

  http: StreamUpdateResponse.HTTP;

  modified_at: string;

  /**
   * Indicates the name of the Stream.
   */
  name: string;

  /**
   * Indicates the current version of this stream.
   */
  version: number;

  worker_binding: StreamUpdateResponse.WorkerBinding;

  /**
   * Indicates the endpoint URL of this stream.
   */
  endpoint?: string;

  format?: StreamUpdateResponse.Json | StreamUpdateResponse.Parquet;
}

export namespace StreamUpdateResponse {
  export interface HTTP {
    /**
     * Indicates that authentication is required for the HTTP endpoint.
     */
    authentication: boolean;

    /**
     * Indicates that the HTTP endpoint is enabled.
     */
    enabled: boolean;

    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    export interface CORS {
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates that the worker binding is enabled.
     */
    enabled: boolean;
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
}

export interface StreamListResponse {
  /**
   * Indicates a unique identifier for this stream.
   */
  id: string;

  created_at: string;

  http: StreamListResponse.HTTP;

  modified_at: string;

  /**
   * Indicates the name of the Stream.
   */
  name: string;

  /**
   * Indicates the current version of this stream.
   */
  version: number;

  worker_binding: StreamListResponse.WorkerBinding;

  /**
   * Indicates the endpoint URL of this stream.
   */
  endpoint?: string;

  format?: StreamListResponse.Json | StreamListResponse.Parquet;

  schema?: StreamListResponse.Schema;
}

export namespace StreamListResponse {
  export interface HTTP {
    /**
     * Indicates that authentication is required for the HTTP endpoint.
     */
    authentication: boolean;

    /**
     * Indicates that the HTTP endpoint is enabled.
     */
    enabled: boolean;

    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    export interface CORS {
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates that the worker binding is enabled.
     */
    enabled: boolean;
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

export interface StreamGetResponse {
  /**
   * Indicates a unique identifier for this stream.
   */
  id: string;

  created_at: string;

  http: StreamGetResponse.HTTP;

  modified_at: string;

  /**
   * Indicates the name of the Stream.
   */
  name: string;

  /**
   * Indicates the current version of this stream.
   */
  version: number;

  worker_binding: StreamGetResponse.WorkerBinding;

  /**
   * Indicates the endpoint URL of this stream.
   */
  endpoint?: string;

  format?: StreamGetResponse.Json | StreamGetResponse.Parquet;

  schema?: StreamGetResponse.Schema;
}

export namespace StreamGetResponse {
  export interface HTTP {
    /**
     * Indicates that authentication is required for the HTTP endpoint.
     */
    authentication: boolean;

    /**
     * Indicates that the HTTP endpoint is enabled.
     */
    enabled: boolean;

    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    export interface CORS {
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates that the worker binding is enabled.
     */
    enabled: boolean;
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

export interface StreamCreateParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param: Specifies the name of the Stream.
   */
  name: string;

  /**
   * Body param
   */
  format?: StreamCreateParams.Json | StreamCreateParams.Parquet;

  /**
   * Body param
   */
  http?: StreamCreateParams.HTTP;

  /**
   * Body param
   */
  schema?: StreamCreateParams.Schema;

  /**
   * Body param
   */
  worker_binding?: StreamCreateParams.WorkerBinding;
}

export namespace StreamCreateParams {
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

  export interface HTTP {
    /**
     * Indicates that authentication is required for the HTTP endpoint.
     */
    authentication: boolean;

    /**
     * Indicates that the HTTP endpoint is enabled.
     */
    enabled: boolean;

    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    export interface CORS {
      origins?: Array<string>;
    }
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

  export interface WorkerBinding {
    /**
     * Indicates that the worker binding is enabled.
     */
    enabled: boolean;
  }
}

export interface StreamUpdateParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param
   */
  http?: StreamUpdateParams.HTTP;

  /**
   * Body param
   */
  worker_binding?: StreamUpdateParams.WorkerBinding;
}

export namespace StreamUpdateParams {
  export interface HTTP {
    /**
     * Indicates that authentication is required for the HTTP endpoint.
     */
    authentication: boolean;

    /**
     * Indicates that the HTTP endpoint is enabled.
     */
    enabled: boolean;

    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    /**
     * Specifies the CORS options for the HTTP endpoint.
     */
    export interface CORS {
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates that the worker binding is enabled.
     */
    enabled: boolean;
  }
}

export interface StreamListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Query param: Specifies the public ID of the pipeline.
   */
  pipeline_id?: string;
}

export interface StreamDeleteParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Query param: Delete stream forcefully, including deleting any dependent
   * pipelines.
   */
  force?: string;
}

export interface StreamGetParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

Streams.StreamListResponsesV4PagePaginationArray = StreamListResponsesV4PagePaginationArray;

export declare namespace Streams {
  export {
    type StreamCreateResponse as StreamCreateResponse,
    type StreamUpdateResponse as StreamUpdateResponse,
    type StreamListResponse as StreamListResponse,
    type StreamGetResponse as StreamGetResponse,
    StreamListResponsesV4PagePaginationArray as StreamListResponsesV4PagePaginationArray,
    type StreamCreateParams as StreamCreateParams,
    type StreamUpdateParams as StreamUpdateParams,
    type StreamListParams as StreamListParams,
    type StreamDeleteParams as StreamDeleteParams,
    type StreamGetParams as StreamGetParams,
  };
}
