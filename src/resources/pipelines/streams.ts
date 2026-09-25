// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PipelinesAPI from './pipelines';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseStreams extends APIResource {
  static override readonly _key: readonly ['pipelines', 'streams'] = Object.freeze([
    'pipelines',
    'streams',
  ] as const);

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
  create(params: StreamCreateParams, options?: RequestOptions): APIPromise<StreamCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pipelines/v1/streams`, {
        body,
        ...options,
      }) as APIPromise<{ result: StreamCreateResponse }>
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
    streamID: string,
    params: StreamUpdateParams,
    options?: RequestOptions,
  ): APIPromise<StreamUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/pipelines/v1/streams/${streamID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: StreamUpdateResponse }>
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
    options?: RequestOptions,
  ): PagePromise<StreamListResponsesV4PagePaginationArray, StreamListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/pipelines/v1/streams`,
      V4PagePaginationArray<StreamListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete Stream in Account.
   *
   * @example
   * ```ts
   * const stream = await client.pipelines.streams.delete(
   *   '033e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    streamID: string,
    params: StreamDeleteParams,
    options?: RequestOptions,
  ): APIPromise<StreamDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/pipelines/v1/streams/${streamID}`,
        options,
      ) as APIPromise<{ result: StreamDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
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
  get(streamID: string, params: StreamGetParams, options?: RequestOptions): APIPromise<StreamGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/pipelines/v1/streams/${streamID}`,
        options,
      ) as APIPromise<{ result: StreamGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Streams extends BaseStreams {}

export type StreamListResponsesV4PagePaginationArray = V4PagePaginationArray<StreamListResponse>;

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

  /**
   * Defines the data format of the events.
   */
  format?: StreamCreateResponse.Json | StreamCreateResponse.Parquet;

  /**
   * Defines the schema of the events in the data stream.
   */
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

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceField>;

    inferred?: boolean | null;
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

  /**
   * Defines the data format of the events.
   */
  format?: StreamUpdateResponse.Json | StreamUpdateResponse.Parquet;

  /**
   * Defines the schema of the events in the data stream.
   */
  schema?: StreamUpdateResponse.Schema;
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

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceField>;

    inferred?: boolean | null;
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

  /**
   * Defines the data format of the events.
   */
  format?: StreamListResponse.Json | StreamListResponse.Parquet;

  /**
   * Defines the schema of the events in the data stream.
   */
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

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceField>;

    inferred?: boolean | null;
  }
}

export type StreamDeleteResponse = unknown;

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

  /**
   * Defines the data format of the events.
   */
  format?: StreamGetResponse.Json | StreamGetResponse.Parquet;

  /**
   * Defines the schema of the events in the data stream.
   */
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

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceField>;

    inferred?: boolean | null;
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
   * Body param: Defines the data format of the events.
   */
  format?: StreamCreateParams.Json | StreamCreateParams.Parquet;

  /**
   * Body param
   */
  http?: StreamCreateParams.HTTP;

  /**
   * Body param: Defines the schema of the events in the data stream.
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

  /**
   * Defines the schema of the events in the data stream.
   */
  export interface Schema {
    fields?: Array<PipelinesAPI.SourceFieldParam>;

    inferred?: boolean | null;
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
   * Query param: Filters streams by name (case-insensitive substring).
   */
  name?: string;

  /**
   * Query param: Specifies the public ID of the pipeline.
   */
  pipeline_id?: string;
}

export interface StreamDeleteParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export interface StreamGetParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export declare namespace Streams {
  export {
    type StreamCreateResponse as StreamCreateResponse,
    type StreamUpdateResponse as StreamUpdateResponse,
    type StreamListResponse as StreamListResponse,
    type StreamDeleteResponse as StreamDeleteResponse,
    type StreamGetResponse as StreamGetResponse,
    type StreamListResponsesV4PagePaginationArray as StreamListResponsesV4PagePaginationArray,
    type StreamCreateParams as StreamCreateParams,
    type StreamUpdateParams as StreamUpdateParams,
    type StreamListParams as StreamListParams,
    type StreamDeleteParams as StreamDeleteParams,
    type StreamGetParams as StreamGetParams,
  };
}
