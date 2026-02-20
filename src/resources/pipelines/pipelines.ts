// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SinksAPI from './sinks';
import {
  SinkCreateParams,
  SinkCreateResponse,
  SinkDeleteParams,
  SinkGetParams,
  SinkGetResponse,
  SinkListParams,
  SinkListResponse,
  SinkListResponsesV4PagePaginationArray,
  Sinks,
} from './sinks';
import * as StreamsAPI from './streams';
import {
  StreamCreateParams,
  StreamCreateResponse,
  StreamDeleteParams,
  StreamGetParams,
  StreamGetResponse,
  StreamListParams,
  StreamListResponse,
  StreamListResponsesV4PagePaginationArray,
  StreamUpdateParams,
  StreamUpdateResponse,
  Streams,
} from './streams';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Pipelines extends APIResource {
  sinks: SinksAPI.Sinks = new SinksAPI.Sinks(this._client);
  streams: StreamsAPI.Streams = new StreamsAPI.Streams(this._client);

  /**
   * [DEPRECATED] Create a new pipeline. Use the new /pipelines/v1/pipelines endpoint
   * instead.
   *
   * @deprecated Use create_v1 instead. This endpoint will be removed in the future.
   */
  create(
    params: PipelineCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PipelineCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pipelines`, { body, ...options }) as Core.APIPromise<{
        result: PipelineCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * [DEPRECATED] Update an existing pipeline. Use the new /pipelines/v1/pipelines
   * endpoint instead.
   *
   * @deprecated The v1 API does not support updates. This endpoint will be removed in the future.
   */
  update(
    pipelineName: string,
    params: PipelineUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PipelineUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/pipelines/${pipelineName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PipelineUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * [DEPRECATED] List, filter, and paginate pipelines in an account. Use the new
   * /pipelines/v1/pipelines endpoint instead.
   *
   * @deprecated Use list_v1 instead. This endpoint will be removed in the future.
   */
  list(params: PipelineListParams, options?: Core.RequestOptions): Core.APIPromise<PipelineListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/pipelines`, { query, ...options });
  }

  /**
   * [DEPRECATED] Delete a pipeline. Use the new /pipelines/v1/pipelines endpoint
   * instead.
   *
   * @deprecated Use delete_v1 instead. This endpoint will be removed in the future.
   */
  delete(
    pipelineName: string,
    params: PipelineDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/pipelines/${pipelineName}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Create a new Pipeline.
   *
   * @example
   * ```ts
   * const response = await client.pipelines.createV1({
   *   account_id: '0123105f4ecef8ad9ca31a8372d0c353',
   *   name: 'my_pipeline',
   *   sql: 'insert into sink select * from source;',
   * });
   * ```
   */
  createV1(
    params: PipelineCreateV1Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PipelineCreateV1Response> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pipelines/v1/pipelines`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PipelineCreateV1Response }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Pipeline in Account.
   *
   * @example
   * ```ts
   * await client.pipelines.deleteV1(
   *   '043e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  deleteV1(
    pipelineId: string,
    params: PipelineDeleteV1Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/pipelines/v1/pipelines/${pipelineId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * [DEPRECATED] Get configuration of a pipeline. Use the new
   * /pipelines/v1/pipelines endpoint instead.
   *
   * @deprecated Use get_v1 instead. This endpoint will be removed in the future.
   */
  get(
    pipelineName: string,
    params: PipelineGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PipelineGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/pipelines/${pipelineName}`, options) as Core.APIPromise<{
        result: PipelineGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Pipelines Details.
   *
   * @example
   * ```ts
   * const response = await client.pipelines.getV1(
   *   '043e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  getV1(
    pipelineId: string,
    params: PipelineGetV1Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PipelineGetV1Response> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pipelines/v1/pipelines/${pipelineId}`,
        options,
      ) as Core.APIPromise<{ result: PipelineGetV1Response }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List/Filter Pipelines in Account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const pipelineListV1Response of client.pipelines.listV1(
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listV1(
    params: PipelineListV1Params,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PipelineListV1ResponsesV4PagePaginationArray, PipelineListV1Response> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pipelines/v1/pipelines`,
      PipelineListV1ResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Validate Arroyo SQL.
   *
   * @example
   * ```ts
   * const response = await client.pipelines.validateSql({
   *   account_id: '0123105f4ecef8ad9ca31a8372d0c353',
   *   sql: 'insert into sink select * from source;',
   * });
   * ```
   */
  validateSql(
    params: PipelineValidateSqlParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PipelineValidateSqlResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pipelines/v1/validate_sql`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PipelineValidateSqlResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PipelineListV1ResponsesV4PagePaginationArray extends V4PagePaginationArray<PipelineListV1Response> {}

/**
 * @deprecated [DEPRECATED] Describes the configuration of a pipeline. Use the new
 * streams/sinks/pipelines API instead.
 */
export interface PipelineCreateResponse {
  /**
   * Specifies the pipeline identifier.
   */
  id: string;

  destination: PipelineCreateResponse.Destination;

  /**
   * Indicates the endpoint URL to send traffic.
   */
  endpoint: string;

  /**
   * Defines the name of the pipeline.
   */
  name: string;

  source: Array<
    | PipelineCreateResponse.CloudflarePipelinesWorkersPipelinesHTTPSource
    | PipelineCreateResponse.CloudflarePipelinesWorkersPipelinesBindingSource
  >;

  /**
   * Indicates the version number of last saved configuration.
   */
  version: number;
}

export namespace PipelineCreateResponse {
  export interface Destination {
    batch: Destination.Batch;

    compression: Destination.Compression;

    /**
     * Specifies the format of data to deliver.
     */
    format: 'json';

    path: Destination.Path;

    /**
     * Specifies the type of destination.
     */
    type: 'r2';
  }

  export namespace Destination {
    export interface Batch {
      /**
       * Specifies rough maximum size of files.
       */
      max_bytes: number;

      /**
       * Specifies duration to wait to aggregate batches files.
       */
      max_duration_s: number;

      /**
       * Specifies rough maximum number of rows per file.
       */
      max_rows: number;
    }

    export interface Compression {
      /**
       * Specifies the desired compression algorithm and format.
       */
      type: 'none' | 'gzip' | 'deflate';
    }

    export interface Path {
      /**
       * Specifies the R2 Bucket to store files.
       */
      bucket: string;

      /**
       * Specifies the name pattern to for individual data files.
       */
      filename?: string;

      /**
       * Specifies the name pattern for directory.
       */
      filepath?: string;

      /**
       * Specifies the base directory within the bucket.
       */
      prefix?: string;
    }
  }

  /**
   * @deprecated [DEPRECATED] HTTP source configuration. Use the new streams API
   * instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesHTTPSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;

    /**
     * Specifies whether authentication is required to send to this pipeline via HTTP.
     */
    authentication?: boolean;

    cors?: CloudflarePipelinesWorkersPipelinesHTTPSource.CORS;
  }

  export namespace CloudflarePipelinesWorkersPipelinesHTTPSource {
    export interface CORS {
      /**
       * Specifies allowed origins to allow Cross Origin HTTP Requests.
       */
      origins?: Array<string>;
    }
  }

  /**
   * @deprecated [DEPRECATED] Worker binding source configuration. Use the new
   * streams API instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesBindingSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;
  }
}

/**
 * @deprecated [DEPRECATED] Describes the configuration of a pipeline. Use the new
 * streams/sinks/pipelines API instead.
 */
export interface PipelineUpdateResponse {
  /**
   * Specifies the pipeline identifier.
   */
  id: string;

  destination: PipelineUpdateResponse.Destination;

  /**
   * Indicates the endpoint URL to send traffic.
   */
  endpoint: string;

  /**
   * Defines the name of the pipeline.
   */
  name: string;

  source: Array<
    | PipelineUpdateResponse.CloudflarePipelinesWorkersPipelinesHTTPSource
    | PipelineUpdateResponse.CloudflarePipelinesWorkersPipelinesBindingSource
  >;

  /**
   * Indicates the version number of last saved configuration.
   */
  version: number;
}

export namespace PipelineUpdateResponse {
  export interface Destination {
    batch: Destination.Batch;

    compression: Destination.Compression;

    /**
     * Specifies the format of data to deliver.
     */
    format: 'json';

    path: Destination.Path;

    /**
     * Specifies the type of destination.
     */
    type: 'r2';
  }

  export namespace Destination {
    export interface Batch {
      /**
       * Specifies rough maximum size of files.
       */
      max_bytes: number;

      /**
       * Specifies duration to wait to aggregate batches files.
       */
      max_duration_s: number;

      /**
       * Specifies rough maximum number of rows per file.
       */
      max_rows: number;
    }

    export interface Compression {
      /**
       * Specifies the desired compression algorithm and format.
       */
      type: 'none' | 'gzip' | 'deflate';
    }

    export interface Path {
      /**
       * Specifies the R2 Bucket to store files.
       */
      bucket: string;

      /**
       * Specifies the name pattern to for individual data files.
       */
      filename?: string;

      /**
       * Specifies the name pattern for directory.
       */
      filepath?: string;

      /**
       * Specifies the base directory within the bucket.
       */
      prefix?: string;
    }
  }

  /**
   * @deprecated [DEPRECATED] HTTP source configuration. Use the new streams API
   * instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesHTTPSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;

    /**
     * Specifies whether authentication is required to send to this pipeline via HTTP.
     */
    authentication?: boolean;

    cors?: CloudflarePipelinesWorkersPipelinesHTTPSource.CORS;
  }

  export namespace CloudflarePipelinesWorkersPipelinesHTTPSource {
    export interface CORS {
      /**
       * Specifies allowed origins to allow Cross Origin HTTP Requests.
       */
      origins?: Array<string>;
    }
  }

  /**
   * @deprecated [DEPRECATED] Worker binding source configuration. Use the new
   * streams API instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesBindingSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;
  }
}

export interface PipelineListResponse {
  result_info: PipelineListResponse.ResultInfo;

  results: Array<PipelineListResponse.Result>;

  /**
   * Indicates whether the API call was successful.
   */
  success: boolean;
}

export namespace PipelineListResponse {
  export interface ResultInfo {
    /**
     * Indicates the number of items on current page.
     */
    count: number;

    /**
     * Indicates the current page number.
     */
    page: number;

    /**
     * Indicates the number of items per page.
     */
    per_page: number;

    /**
     * Indicates the total number of items.
     */
    total_count: number;
  }

  /**
   * @deprecated [DEPRECATED] Describes the configuration of a pipeline. Use the new
   * streams/sinks/pipelines API instead.
   */
  export interface Result {
    /**
     * Specifies the pipeline identifier.
     */
    id: string;

    destination: Result.Destination;

    /**
     * Indicates the endpoint URL to send traffic.
     */
    endpoint: string;

    /**
     * Defines the name of the pipeline.
     */
    name: string;

    source: Array<
      | Result.CloudflarePipelinesWorkersPipelinesHTTPSource
      | Result.CloudflarePipelinesWorkersPipelinesBindingSource
    >;

    /**
     * Indicates the version number of last saved configuration.
     */
    version: number;
  }

  export namespace Result {
    export interface Destination {
      batch: Destination.Batch;

      compression: Destination.Compression;

      /**
       * Specifies the format of data to deliver.
       */
      format: 'json';

      path: Destination.Path;

      /**
       * Specifies the type of destination.
       */
      type: 'r2';
    }

    export namespace Destination {
      export interface Batch {
        /**
         * Specifies rough maximum size of files.
         */
        max_bytes: number;

        /**
         * Specifies duration to wait to aggregate batches files.
         */
        max_duration_s: number;

        /**
         * Specifies rough maximum number of rows per file.
         */
        max_rows: number;
      }

      export interface Compression {
        /**
         * Specifies the desired compression algorithm and format.
         */
        type: 'none' | 'gzip' | 'deflate';
      }

      export interface Path {
        /**
         * Specifies the R2 Bucket to store files.
         */
        bucket: string;

        /**
         * Specifies the name pattern to for individual data files.
         */
        filename?: string;

        /**
         * Specifies the name pattern for directory.
         */
        filepath?: string;

        /**
         * Specifies the base directory within the bucket.
         */
        prefix?: string;
      }
    }

    /**
     * @deprecated [DEPRECATED] HTTP source configuration. Use the new streams API
     * instead.
     */
    export interface CloudflarePipelinesWorkersPipelinesHTTPSource {
      /**
       * Specifies the format of source data.
       */
      format: 'json';

      type: string;

      /**
       * Specifies whether authentication is required to send to this pipeline via HTTP.
       */
      authentication?: boolean;

      cors?: CloudflarePipelinesWorkersPipelinesHTTPSource.CORS;
    }

    export namespace CloudflarePipelinesWorkersPipelinesHTTPSource {
      export interface CORS {
        /**
         * Specifies allowed origins to allow Cross Origin HTTP Requests.
         */
        origins?: Array<string>;
      }
    }

    /**
     * @deprecated [DEPRECATED] Worker binding source configuration. Use the new
     * streams API instead.
     */
    export interface CloudflarePipelinesWorkersPipelinesBindingSource {
      /**
       * Specifies the format of source data.
       */
      format: 'json';

      type: string;
    }
  }
}

export interface PipelineCreateV1Response {
  /**
   * Indicates a unique identifier for this pipeline.
   */
  id: string;

  created_at: string;

  modified_at: string;

  /**
   * Indicates the name of the Pipeline.
   */
  name: string;

  /**
   * Specifies SQL for the Pipeline processing flow.
   */
  sql: string;

  /**
   * Indicates the current status of the Pipeline.
   */
  status: string;
}

/**
 * @deprecated [DEPRECATED] Describes the configuration of a pipeline. Use the new
 * streams/sinks/pipelines API instead.
 */
export interface PipelineGetResponse {
  /**
   * Specifies the pipeline identifier.
   */
  id: string;

  destination: PipelineGetResponse.Destination;

  /**
   * Indicates the endpoint URL to send traffic.
   */
  endpoint: string;

  /**
   * Defines the name of the pipeline.
   */
  name: string;

  source: Array<
    | PipelineGetResponse.CloudflarePipelinesWorkersPipelinesHTTPSource
    | PipelineGetResponse.CloudflarePipelinesWorkersPipelinesBindingSource
  >;

  /**
   * Indicates the version number of last saved configuration.
   */
  version: number;
}

export namespace PipelineGetResponse {
  export interface Destination {
    batch: Destination.Batch;

    compression: Destination.Compression;

    /**
     * Specifies the format of data to deliver.
     */
    format: 'json';

    path: Destination.Path;

    /**
     * Specifies the type of destination.
     */
    type: 'r2';
  }

  export namespace Destination {
    export interface Batch {
      /**
       * Specifies rough maximum size of files.
       */
      max_bytes: number;

      /**
       * Specifies duration to wait to aggregate batches files.
       */
      max_duration_s: number;

      /**
       * Specifies rough maximum number of rows per file.
       */
      max_rows: number;
    }

    export interface Compression {
      /**
       * Specifies the desired compression algorithm and format.
       */
      type: 'none' | 'gzip' | 'deflate';
    }

    export interface Path {
      /**
       * Specifies the R2 Bucket to store files.
       */
      bucket: string;

      /**
       * Specifies the name pattern to for individual data files.
       */
      filename?: string;

      /**
       * Specifies the name pattern for directory.
       */
      filepath?: string;

      /**
       * Specifies the base directory within the bucket.
       */
      prefix?: string;
    }
  }

  /**
   * @deprecated [DEPRECATED] HTTP source configuration. Use the new streams API
   * instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesHTTPSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;

    /**
     * Specifies whether authentication is required to send to this pipeline via HTTP.
     */
    authentication?: boolean;

    cors?: CloudflarePipelinesWorkersPipelinesHTTPSource.CORS;
  }

  export namespace CloudflarePipelinesWorkersPipelinesHTTPSource {
    export interface CORS {
      /**
       * Specifies allowed origins to allow Cross Origin HTTP Requests.
       */
      origins?: Array<string>;
    }
  }

  /**
   * @deprecated [DEPRECATED] Worker binding source configuration. Use the new
   * streams API instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesBindingSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;
  }
}

export interface PipelineGetV1Response {
  /**
   * Indicates a unique identifier for this pipeline.
   */
  id: string;

  created_at: string;

  modified_at: string;

  /**
   * Indicates the name of the Pipeline.
   */
  name: string;

  /**
   * Specifies SQL for the Pipeline processing flow.
   */
  sql: string;

  /**
   * Indicates the current status of the Pipeline.
   */
  status: string;

  /**
   * List of streams and sinks used by this pipeline.
   */
  tables: Array<PipelineGetV1Response.Table>;
}

export namespace PipelineGetV1Response {
  export interface Table {
    /**
     * Unique identifier for the connection (stream or sink).
     */
    id: string;

    /**
     * Latest available version of the connection.
     */
    latest: number;

    /**
     * Name of the connection.
     */
    name: string;

    /**
     * Type of the connection.
     */
    type: 'stream' | 'sink';

    /**
     * Current version of the connection used by this pipeline.
     */
    version: number;
  }
}

export interface PipelineListV1Response {
  /**
   * Indicates a unique identifier for this pipeline.
   */
  id: string;

  created_at: string;

  modified_at: string;

  /**
   * Indicates the name of the Pipeline.
   */
  name: string;

  /**
   * Specifies SQL for the Pipeline processing flow.
   */
  sql: string;

  /**
   * Indicates the current status of the Pipeline.
   */
  status: string;
}

export interface PipelineValidateSqlResponse {
  /**
   * Indicates tables involved in the processing.
   */
  tables: { [key: string]: PipelineValidateSqlResponse.Tables };

  graph?: PipelineValidateSqlResponse.Graph;
}

export namespace PipelineValidateSqlResponse {
  export interface Tables {
    id: string;

    name: string;

    type: string;

    version: number;
  }

  export interface Graph {
    edges: Array<Graph.Edge>;

    nodes: Array<Graph.Node>;
  }

  export namespace Graph {
    export interface Edge {
      dest_id: number;

      edge_type: string;

      key_type: string;

      src_id: number;

      value_type: string;
    }

    export interface Node {
      description: string;

      node_id: number;

      operator: string;

      parallelism: number;
    }
  }
}

export interface PipelineCreateParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param
   */
  destination: PipelineCreateParams.Destination;

  /**
   * Body param: Defines the name of the pipeline.
   */
  name: string;

  /**
   * Body param
   */
  source: Array<
    | PipelineCreateParams.CloudflarePipelinesWorkersPipelinesHTTPSource
    | PipelineCreateParams.CloudflarePipelinesWorkersPipelinesBindingSource
  >;
}

export namespace PipelineCreateParams {
  export interface Destination {
    batch: Destination.Batch;

    compression: Destination.Compression;

    credentials: Destination.Credentials;

    /**
     * Specifies the format of data to deliver.
     */
    format: 'json';

    path: Destination.Path;

    /**
     * Specifies the type of destination.
     */
    type: 'r2';
  }

  export namespace Destination {
    export interface Batch {
      /**
       * Specifies rough maximum size of files.
       */
      max_bytes?: number;

      /**
       * Specifies duration to wait to aggregate batches files.
       */
      max_duration_s?: number;

      /**
       * Specifies rough maximum number of rows per file.
       */
      max_rows?: number;
    }

    export interface Compression {
      /**
       * Specifies the desired compression algorithm and format.
       */
      type?: 'none' | 'gzip' | 'deflate';
    }

    export interface Credentials {
      /**
       * Specifies the R2 Bucket Access Key Id.
       */
      access_key_id: string;

      /**
       * Specifies the R2 Endpoint.
       */
      endpoint: string;

      /**
       * Specifies the R2 Bucket Secret Access Key.
       */
      secret_access_key: string;
    }

    export interface Path {
      /**
       * Specifies the R2 Bucket to store files.
       */
      bucket: string;

      /**
       * Specifies the name pattern to for individual data files.
       */
      filename?: string;

      /**
       * Specifies the name pattern for directory.
       */
      filepath?: string;

      /**
       * Specifies the base directory within the bucket.
       */
      prefix?: string;
    }
  }

  /**
   * @deprecated [DEPRECATED] HTTP source configuration. Use the new streams API
   * instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesHTTPSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;

    /**
     * Specifies whether authentication is required to send to this pipeline via HTTP.
     */
    authentication?: boolean;

    cors?: CloudflarePipelinesWorkersPipelinesHTTPSource.CORS;
  }

  export namespace CloudflarePipelinesWorkersPipelinesHTTPSource {
    export interface CORS {
      /**
       * Specifies allowed origins to allow Cross Origin HTTP Requests.
       */
      origins?: Array<string>;
    }
  }

  /**
   * @deprecated [DEPRECATED] Worker binding source configuration. Use the new
   * streams API instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesBindingSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;
  }
}

export interface PipelineUpdateParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param
   */
  destination: PipelineUpdateParams.Destination;

  /**
   * Body param: Defines the name of the pipeline.
   */
  name: string;

  /**
   * Body param
   */
  source: Array<
    | PipelineUpdateParams.CloudflarePipelinesWorkersPipelinesHTTPSource
    | PipelineUpdateParams.CloudflarePipelinesWorkersPipelinesBindingSource
  >;
}

export namespace PipelineUpdateParams {
  export interface Destination {
    batch: Destination.Batch;

    compression: Destination.Compression;

    /**
     * Specifies the format of data to deliver.
     */
    format: 'json';

    path: Destination.Path;

    /**
     * Specifies the type of destination.
     */
    type: 'r2';

    credentials?: Destination.Credentials;
  }

  export namespace Destination {
    export interface Batch {
      /**
       * Specifies rough maximum size of files.
       */
      max_bytes?: number;

      /**
       * Specifies duration to wait to aggregate batches files.
       */
      max_duration_s?: number;

      /**
       * Specifies rough maximum number of rows per file.
       */
      max_rows?: number;
    }

    export interface Compression {
      /**
       * Specifies the desired compression algorithm and format.
       */
      type?: 'none' | 'gzip' | 'deflate';
    }

    export interface Path {
      /**
       * Specifies the R2 Bucket to store files.
       */
      bucket: string;

      /**
       * Specifies the name pattern to for individual data files.
       */
      filename?: string;

      /**
       * Specifies the name pattern for directory.
       */
      filepath?: string;

      /**
       * Specifies the base directory within the bucket.
       */
      prefix?: string;
    }

    export interface Credentials {
      /**
       * Specifies the R2 Bucket Access Key Id.
       */
      access_key_id: string;

      /**
       * Specifies the R2 Endpoint.
       */
      endpoint: string;

      /**
       * Specifies the R2 Bucket Secret Access Key.
       */
      secret_access_key: string;
    }
  }

  /**
   * @deprecated [DEPRECATED] HTTP source configuration. Use the new streams API
   * instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesHTTPSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;

    /**
     * Specifies whether authentication is required to send to this pipeline via HTTP.
     */
    authentication?: boolean;

    cors?: CloudflarePipelinesWorkersPipelinesHTTPSource.CORS;
  }

  export namespace CloudflarePipelinesWorkersPipelinesHTTPSource {
    export interface CORS {
      /**
       * Specifies allowed origins to allow Cross Origin HTTP Requests.
       */
      origins?: Array<string>;
    }
  }

  /**
   * @deprecated [DEPRECATED] Worker binding source configuration. Use the new
   * streams API instead.
   */
  export interface CloudflarePipelinesWorkersPipelinesBindingSource {
    /**
     * Specifies the format of source data.
     */
    format: 'json';

    type: string;
  }
}

export interface PipelineListParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Query param: Specifies which page to retrieve.
   */
  page?: string;

  /**
   * Query param: Specifies the number of pipelines per page.
   */
  per_page?: string;

  /**
   * Query param: Specifies the prefix of pipeline name to search.
   */
  search?: string;
}

export interface PipelineDeleteParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export interface PipelineCreateV1Params {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param: Specifies the name of the Pipeline.
   */
  name: string;

  /**
   * Body param: Specifies SQL for the Pipeline processing flow.
   */
  sql: string;
}

export interface PipelineDeleteV1Params {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export interface PipelineGetParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export interface PipelineGetV1Params {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export interface PipelineListV1Params extends V4PagePaginationArrayParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;
}

export interface PipelineValidateSqlParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param: Specifies SQL to validate.
   */
  sql: string;
}

Pipelines.PipelineListV1ResponsesV4PagePaginationArray = PipelineListV1ResponsesV4PagePaginationArray;
Pipelines.Sinks = Sinks;
Pipelines.SinkListResponsesV4PagePaginationArray = SinkListResponsesV4PagePaginationArray;
Pipelines.Streams = Streams;
Pipelines.StreamListResponsesV4PagePaginationArray = StreamListResponsesV4PagePaginationArray;

export declare namespace Pipelines {
  export {
    type PipelineCreateResponse as PipelineCreateResponse,
    type PipelineUpdateResponse as PipelineUpdateResponse,
    type PipelineListResponse as PipelineListResponse,
    type PipelineCreateV1Response as PipelineCreateV1Response,
    type PipelineGetResponse as PipelineGetResponse,
    type PipelineGetV1Response as PipelineGetV1Response,
    type PipelineListV1Response as PipelineListV1Response,
    type PipelineValidateSqlResponse as PipelineValidateSqlResponse,
    PipelineListV1ResponsesV4PagePaginationArray as PipelineListV1ResponsesV4PagePaginationArray,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineListParams as PipelineListParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineCreateV1Params as PipelineCreateV1Params,
    type PipelineDeleteV1Params as PipelineDeleteV1Params,
    type PipelineGetParams as PipelineGetParams,
    type PipelineGetV1Params as PipelineGetV1Params,
    type PipelineListV1Params as PipelineListV1Params,
    type PipelineValidateSqlParams as PipelineValidateSqlParams,
  };

  export {
    Sinks as Sinks,
    type SinkCreateResponse as SinkCreateResponse,
    type SinkListResponse as SinkListResponse,
    type SinkGetResponse as SinkGetResponse,
    SinkListResponsesV4PagePaginationArray as SinkListResponsesV4PagePaginationArray,
    type SinkCreateParams as SinkCreateParams,
    type SinkListParams as SinkListParams,
    type SinkDeleteParams as SinkDeleteParams,
    type SinkGetParams as SinkGetParams,
  };

  export {
    Streams as Streams,
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
