// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Put script tags for a script uploaded to a Workers for Platforms namespace.
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
   * Fetch tags from a script uploaded to a Workers for Platforms namespace.
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
   * Delete script tag for a script uploaded to a Workers for Platforms namespace.
   */
  delete(
    tag: string,
    params: TagDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TagDeleteResponse | null> {
    const { account_id, dispatch_namespace, script_name } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${script_name}/tags/${tag}`,
        options,
      ) as APIPromise<{ result: TagDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TagUpdateResponsesSinglePage = SinglePage<TagUpdateResponse>;

export type TagListResponsesSinglePage = SinglePage<TagListResponse>;

/**
 * Tag to help you manage your Worker
 */
export type TagUpdateResponse = string;

/**
 * Tag to help you manage your Worker
 */
export type TagListResponse = string;

export type TagDeleteResponse = unknown;

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
   * Body param: Tags to help you manage your Workers
   */
  body: Array<string>;
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
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script_name: string;
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
