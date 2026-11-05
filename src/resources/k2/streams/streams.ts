// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  BaseSubscriptions,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionListResponsesSinglePage,
  Subscriptions,
} from './subscriptions';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseStreams extends APIResource {
  static override readonly _key: readonly ['k2', 'streams'] = Object.freeze(['k2', 'streams'] as const);

  /**
   * Create a new K2 stream. HTTP is disabled when `http` is omitted. Enabled HTTP
   * requires authentication and allows all origins unless `authentication` or `cors`
   * say otherwise. At least one input must be enabled.
   *
   * @example
   * ```ts
   * const stream = await client.k2.streams.create({
   *   account_id: '0123105f4ecef8ad9ca31a8372d0c353',
   *   name: 'my_k2_stream',
   * });
   * ```
   */
  create(params: StreamCreateParams, options?: RequestOptions): APIPromise<StreamCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/k2/streams`, { body, ...options }) as APIPromise<{
        result: StreamCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a K2 stream. Omitted `http` settings, such as `authentication` and
   * `cors`, keep their current values. Disabling HTTP keeps them, so enabling HTTP
   * again restores them. At least one input must remain enabled.
   *
   * @example
   * ```ts
   * const stream = await client.k2.streams.update(
   *   '053e105f4ecef8ad9ca31a8372d0c353',
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
      this._client.patch(path`/accounts/${account_id}/k2/streams/${streamID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: StreamUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List or filter K2 streams in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const streamListResponse of client.k2.streams.list(
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
      path`/accounts/${account_id}/k2/streams`,
      V4PagePaginationArray<StreamListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a K2 stream in an account. Deleting a stream that does not exist also
   * succeeds.
   *
   * @example
   * ```ts
   * const stream = await client.k2.streams.delete(
   *   '053e105f4ecef8ad9ca31a8372d0c353',
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
      this._client.delete(path`/accounts/${account_id}/k2/streams/${streamID}`, options) as APIPromise<{
        result: StreamDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get K2 stream details.
   *
   * @example
   * ```ts
   * const stream = await client.k2.streams.get(
   *   '053e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '0123105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(streamID: string, params: StreamGetParams, options?: RequestOptions): APIPromise<StreamGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/k2/streams/${streamID}`, options) as APIPromise<{
        result: StreamGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Streams extends BaseStreams {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

export type StreamListResponsesV4PagePaginationArray = V4PagePaginationArray<StreamListResponse>;

export interface StreamCreateResponse {
  /**
   * Specifies the public ID of the K2 stream.
   */
  id: string;

  created_at: string;

  /**
   * Indicates the base HTTP endpoint for producing and consuming records.
   */
  endpoint: string;

  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  http: StreamCreateResponse.HTTP;

  modified_at: string;

  /**
   * Indicates the name of the K2 stream.
   */
  name: string;

  /**
   * Shows the configured record retention period from 1 hour (3600 seconds) to 30
   * days (2592000 seconds), inclusive.
   */
  retention_seconds: number;

  worker_binding: StreamCreateResponse.WorkerBinding;
}

export namespace StreamCreateResponse {
  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  export interface HTTP {
    /**
     * Indicates whether the HTTP endpoint accepts records.
     */
    enabled: boolean;

    /**
     * Indicates whether the HTTP endpoint requires an API token with K2 produce
     * permission. When false, the endpoint accepts unauthenticated records. Defaults
     * to true when HTTP is enabled without a stored value.
     */
    authentication?: boolean;

    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    export interface CORS {
      /**
       * Allows browser requests from these HTTP or HTTPS origins. Use a wildcard only as
       * the sole origin. An empty list blocks cross-origin browser requests. Defaults to
       * `['*']` when HTTP is enabled without stored origins.
       */
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates whether Workers bindings can produce records to the stream.
     */
    enabled: boolean;
  }
}

export interface StreamUpdateResponse {
  /**
   * Specifies the public ID of the K2 stream.
   */
  id: string;

  created_at: string;

  /**
   * Indicates the base HTTP endpoint for producing and consuming records.
   */
  endpoint: string;

  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  http: StreamUpdateResponse.HTTP;

  modified_at: string;

  /**
   * Indicates the name of the K2 stream.
   */
  name: string;

  /**
   * Shows the configured record retention period from 1 hour (3600 seconds) to 30
   * days (2592000 seconds), inclusive.
   */
  retention_seconds: number;

  worker_binding: StreamUpdateResponse.WorkerBinding;
}

export namespace StreamUpdateResponse {
  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  export interface HTTP {
    /**
     * Indicates whether the HTTP endpoint accepts records.
     */
    enabled: boolean;

    /**
     * Indicates whether the HTTP endpoint requires an API token with K2 produce
     * permission. When false, the endpoint accepts unauthenticated records. Defaults
     * to true when HTTP is enabled without a stored value.
     */
    authentication?: boolean;

    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    export interface CORS {
      /**
       * Allows browser requests from these HTTP or HTTPS origins. Use a wildcard only as
       * the sole origin. An empty list blocks cross-origin browser requests. Defaults to
       * `['*']` when HTTP is enabled without stored origins.
       */
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates whether Workers bindings can produce records to the stream.
     */
    enabled: boolean;
  }
}

export interface StreamListResponse {
  /**
   * Specifies the public ID of the K2 stream.
   */
  id: string;

  created_at: string;

  /**
   * Indicates the base HTTP endpoint for producing and consuming records.
   */
  endpoint: string;

  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  http: StreamListResponse.HTTP;

  modified_at: string;

  /**
   * Indicates the name of the K2 stream.
   */
  name: string;

  /**
   * Shows the configured record retention period from 1 hour (3600 seconds) to 30
   * days (2592000 seconds), inclusive.
   */
  retention_seconds: number;

  worker_binding: StreamListResponse.WorkerBinding;
}

export namespace StreamListResponse {
  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  export interface HTTP {
    /**
     * Indicates whether the HTTP endpoint accepts records.
     */
    enabled: boolean;

    /**
     * Indicates whether the HTTP endpoint requires an API token with K2 produce
     * permission. When false, the endpoint accepts unauthenticated records. Defaults
     * to true when HTTP is enabled without a stored value.
     */
    authentication?: boolean;

    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    export interface CORS {
      /**
       * Allows browser requests from these HTTP or HTTPS origins. Use a wildcard only as
       * the sole origin. An empty list blocks cross-origin browser requests. Defaults to
       * `['*']` when HTTP is enabled without stored origins.
       */
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates whether Workers bindings can produce records to the stream.
     */
    enabled: boolean;
  }
}

export type StreamDeleteResponse = unknown;

export interface StreamGetResponse {
  /**
   * Specifies the public ID of the K2 stream.
   */
  id: string;

  created_at: string;

  /**
   * Indicates the base HTTP endpoint for producing and consuming records.
   */
  endpoint: string;

  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  http: StreamGetResponse.HTTP;

  modified_at: string;

  /**
   * Indicates the name of the K2 stream.
   */
  name: string;

  /**
   * Shows the configured record retention period from 1 hour (3600 seconds) to 30
   * days (2592000 seconds), inclusive.
   */
  retention_seconds: number;

  worker_binding: StreamGetResponse.WorkerBinding;
}

export namespace StreamGetResponse {
  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  export interface HTTP {
    /**
     * Indicates whether the HTTP endpoint accepts records.
     */
    enabled: boolean;

    /**
     * Indicates whether the HTTP endpoint requires an API token with K2 produce
     * permission. When false, the endpoint accepts unauthenticated records. Defaults
     * to true when HTTP is enabled without a stored value.
     */
    authentication?: boolean;

    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    export interface CORS {
      /**
       * Allows browser requests from these HTTP or HTTPS origins. Use a wildcard only as
       * the sole origin. An empty list blocks cross-origin browser requests. Defaults to
       * `['*']` when HTTP is enabled without stored origins.
       */
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates whether Workers bindings can produce records to the stream.
     */
    enabled: boolean;
  }
}

export interface StreamCreateParams {
  /**
   * Path param: Specifies the public ID of the account.
   */
  account_id: string;

  /**
   * Body param: Specifies the name of the K2 stream.
   */
  name: string;

  /**
   * Body param: Configures the HTTP endpoint. Disabling HTTP keeps `authentication`
   * and `cors`, so enabling it again restores them.
   */
  http?: StreamCreateParams.HTTP;

  /**
   * Body param: Sets the record retention period from 1 hour (3600 seconds) to 30
   * days (2592000 seconds), inclusive.
   */
  retention_seconds?: number;

  /**
   * Body param
   */
  worker_binding?: StreamCreateParams.WorkerBinding;
}

export namespace StreamCreateParams {
  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  export interface HTTP {
    /**
     * Indicates whether the HTTP endpoint accepts records.
     */
    enabled: boolean;

    /**
     * Indicates whether the HTTP endpoint requires an API token with K2 produce
     * permission. When false, the endpoint accepts unauthenticated records. Defaults
     * to true when HTTP is enabled without a stored value.
     */
    authentication?: boolean;

    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    export interface CORS {
      /**
       * Allows browser requests from these HTTP or HTTPS origins. Use a wildcard only as
       * the sole origin. An empty list blocks cross-origin browser requests. Defaults to
       * `['*']` when HTTP is enabled without stored origins.
       */
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates whether Workers bindings can produce records to the stream.
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
   * Body param: Configures the HTTP endpoint. Disabling HTTP keeps `authentication`
   * and `cors`, so enabling it again restores them.
   */
  http?: StreamUpdateParams.HTTP;

  /**
   * Body param: Sets the record retention period from 1 hour (3600 seconds) to 30
   * days (2592000 seconds), inclusive.
   */
  retention_seconds?: number;

  /**
   * Body param
   */
  worker_binding?: StreamUpdateParams.WorkerBinding;
}

export namespace StreamUpdateParams {
  /**
   * Configures the HTTP endpoint. Disabling HTTP keeps `authentication` and `cors`,
   * so enabling it again restores them.
   */
  export interface HTTP {
    /**
     * Indicates whether the HTTP endpoint accepts records.
     */
    enabled: boolean;

    /**
     * Indicates whether the HTTP endpoint requires an API token with K2 produce
     * permission. When false, the endpoint accepts unauthenticated records. Defaults
     * to true when HTTP is enabled without a stored value.
     */
    authentication?: boolean;

    cors?: HTTP.CORS;
  }

  export namespace HTTP {
    export interface CORS {
      /**
       * Allows browser requests from these HTTP or HTTPS origins. Use a wildcard only as
       * the sole origin. An empty list blocks cross-origin browser requests. Defaults to
       * `['*']` when HTTP is enabled without stored origins.
       */
      origins?: Array<string>;
    }
  }

  export interface WorkerBinding {
    /**
     * Indicates whether Workers bindings can produce records to the stream.
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
   * Query param: Filters K2 streams by name using a case-insensitive substring.
   */
  name?: string;
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

Streams.Subscriptions = Subscriptions;
Streams.BaseSubscriptions = BaseSubscriptions;

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

  export {
    Subscriptions as Subscriptions,
    BaseSubscriptions as BaseSubscriptions,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionListResponsesSinglePage as SubscriptionListResponsesSinglePage,
    type SubscriptionListParams as SubscriptionListParams,
  };
}
