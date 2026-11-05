// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseTags extends APIResource {
  static override readonly _key: readonly [
    'workersForPlatforms',
    'dispatch',
    'namespaces',
    'scripts',
    'tags',
  ] = Object.freeze(['workersForPlatforms', 'dispatch', 'namespaces', 'scripts', 'tags'] as const);

  /**
   * Replace tags for a script uploaded to a Workers for Platforms dispatch
   * namespace.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tagUpdateResponse of client.workersForPlatforms.dispatch.namespaces.scripts.tags.update(
   *   'this-is_my_script-01',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     dispatch_namespace: 'my-dispatch-namespace',
   *     body: ['my-team', 'my-public-api'],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  update(
    scriptName: string,
    params: TagUpdateParams,
    options?: RequestOptions,
  ): PagePromise<TagUpdateResponsesSinglePage, TagUpdateResponse> {
    const { account_id, dispatch_namespace, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/tags`,
      SinglePage<TagUpdateResponse>,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * Fetch tags from a script uploaded to a Workers for Platforms dispatch namespace.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tagListResponse of client.workersForPlatforms.dispatch.namespaces.scripts.tags.list(
   *   'this-is_my_script-01',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     dispatch_namespace: 'my-dispatch-namespace',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    scriptName: string,
    params: TagListParams,
    options?: RequestOptions,
  ): PagePromise<TagListResponsesSinglePage, TagListResponse> {
    const { account_id, dispatch_namespace } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/tags`,
      SinglePage<TagListResponse>,
      options,
    );
  }

  /**
   * Delete a tag from a script uploaded to a Workers for Platforms dispatch
   * namespace.
   *
   * On `api-version` dates on or after `2026-10-01`, `tag` identifies a key and the
   * operation returns the complete updated tag map. Deleting a missing key succeeds.
   * Earlier versions retain the legacy string-tag behavior and return a null result.
   *
   * @example
   * ```ts
   * const tag =
   *   await client.workersForPlatforms.dispatch.namespaces.scripts.tags.delete(
   *     'environment',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       dispatch_namespace: 'my-dispatch-namespace',
   *       script_name: 'this-is_my_script-01',
   *     },
   *   );
   * ```
   */
  delete(tag: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    const { account_id, dispatch_namespace, script_name, 'api-version': apiVersion } = params;
    return this._client.delete(
      path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${script_name}/tags/${tag}`,
      {
        ...options,
        headers: buildHeaders([
          { ...(apiVersion != null ? { 'api-version': apiVersion } : undefined) },
          options?.headers,
        ]),
      },
    );
  }
}
export class Tags extends BaseTags {}

export type TagUpdateResponsesSinglePage = SinglePage<TagUpdateResponse>;

export type TagListResponsesSinglePage = SinglePage<TagListResponse>;

export type TagUpdateResponse = string;

export type TagListResponse = string;

export type TagDeleteResponse =
  | TagDeleteResponse.WorkersTagsKVResponse
  | TagDeleteResponse.WorkersAPIResponseNullResult;

export namespace TagDeleteResponse {
  export interface WorkersTagsKVResponse {
    errors: Array<WorkersTagsKVResponse.Error>;

    messages: Array<WorkersTagsKVResponse.Message>;

    /**
     * Tags associated with the Worker, as a key/value object. Each complete UTF-8
     * encoded tag (the key plus `=` and the value when the value is non-empty) must
     * not exceed 1024 bytes.
     */
    result: { [key: string]: string };

    /**
     * Whether the API call was successful.
     */
    success: true;
  }

  export namespace WorkersTagsKVResponse {
    export interface Error {
      code: number;

      message: string;

      documentation_url?: string;

      source?: Error.Source;
    }

    export namespace Error {
      export interface Source {
        pointer?: string;
      }
    }

    export interface Message {
      code: number;

      message: string;

      documentation_url?: string;

      source?: Message.Source;
    }

    export namespace Message {
      export interface Source {
        pointer?: string;
      }
    }
  }

  export interface WorkersAPIResponseNullResult {
    errors: Array<WorkersAPIResponseNullResult.Error>;

    messages: Array<WorkersAPIResponseNullResult.Message>;

    /**
     * Whether the API call was successful.
     */
    success: true;

    result?: unknown | null;
  }

  export namespace WorkersAPIResponseNullResult {
    export interface Error {
      code: number;

      message: string;

      documentation_url?: string;

      source?: Error.Source;
    }

    export namespace Error {
      export interface Source {
        pointer?: string;
      }
    }

    export interface Message {
      code: number;

      message: string;

      documentation_url?: string;

      source?: Message.Source;
    }

    export namespace Message {
      export interface Source {
        pointer?: string;
      }
    }
  }
}

export interface TagUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;

  /**
   * Body param: Tags associated with the Worker.
   */
  body: Array<string> | null;
}

export interface TagListParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;
}

export interface TagDeleteParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;

  /**
   * Path param: Name of the script.
   */
  script_name: string;

  /**
   * Header param: Requested API compatibility date in `YYYY-MM-DD[.release]` format
   * (UTC). The optional release suffix contains lowercase letters; for example,
   * `2026-10-01.epoch`.
   *
   * Typed Worker tag operations require a date on or after `2026-10-01`.
   */
  'api-version'?: string;
}

export declare namespace Tags {
  export {
    type TagUpdateResponse as TagUpdateResponse,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagUpdateResponsesSinglePage as TagUpdateResponsesSinglePage,
    type TagListResponsesSinglePage as TagListResponsesSinglePage,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
  };
}
