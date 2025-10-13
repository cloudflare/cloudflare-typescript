// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Pipelines extends APIResource {
  /**
   * [DEPRECATED] Create a new pipeline. Use the new /pipelines/v1/pipelines endpoint
   * instead.
   *
   * @deprecated
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
   * @deprecated
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
   * @deprecated
   */
  list(params: PipelineListParams, options?: Core.RequestOptions): Core.APIPromise<PipelineListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/pipelines`, { query, ...options });
  }

  /**
   * [DEPRECATED] Delete a pipeline. Use the new /pipelines/v1/pipelines endpoint
   * instead.
   *
   * @deprecated
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
   * [DEPRECATED] Get configuration of a pipeline. Use the new
   * /pipelines/v1/pipelines endpoint instead.
   *
   * @deprecated
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
}

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

export interface PipelineCreateParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param:
   */
  destination: PipelineCreateParams.Destination;

  /**
   * Body param: Defines the name of the pipeline.
   */
  name: string;

  /**
   * Body param:
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
   * Body param:
   */
  destination: PipelineUpdateParams.Destination;

  /**
   * Body param: Defines the name of the pipeline.
   */
  name: string;

  /**
   * Body param:
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

export interface PipelineGetParams {
  /**
   * Specifies the public ID of the account.
   */
  account_id: string;
}

export declare namespace Pipelines {
  export {
    type PipelineCreateResponse as PipelineCreateResponse,
    type PipelineUpdateResponse as PipelineUpdateResponse,
    type PipelineListResponse as PipelineListResponse,
    type PipelineGetResponse as PipelineGetResponse,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineListParams as PipelineListParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineGetParams as PipelineGetParams,
  };
}
