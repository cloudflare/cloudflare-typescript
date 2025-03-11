// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Creates a new tag
   */
  create(accountID: number, body: TagCreateParams, options?: RequestOptions): APIPromise<TagCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/cloudforce-one/events/tags/create`, {
      body,
      ...options,
    });
  }

  /**
   * Adds a tag to an event
   */
  update(eventID: string, params: TagUpdateParams, options?: RequestOptions): APIPromise<TagUpdateResponse> {
    const { accountId, ...body } = params;
    return (
      this._client.post(path`/accounts/${accountId}/cloudforce-one/events/tag/${eventID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: TagUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes a tag from an event
   */
  delete(eventID: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    const { accountId } = params;
    return (
      this._client.delete(
        path`/accounts/${accountId}/cloudforce-one/events/tag/${eventID}`,
        options,
      ) as APIPromise<{ result: TagDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TagCreateResponse {
  name: string;

  uuid: string;
}

export interface TagUpdateResponse {
  success: boolean;
}

export interface TagDeleteResponse {
  success: boolean;
}

export interface TagCreateParams {
  name: string;
}

export interface TagUpdateParams {
  /**
   * Path param: Account ID
   */
  accountId: number;

  /**
   * Body param:
   */
  tags: Array<string>;
}

export interface TagDeleteParams {
  /**
   * Account ID
   */
  accountId: number;
}

export declare namespace Tags {
  export {
    type TagCreateResponse as TagCreateResponse,
    type TagUpdateResponse as TagUpdateResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagDeleteParams as TagDeleteParams,
  };
}
