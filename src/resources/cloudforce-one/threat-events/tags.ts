// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Tags extends APIResource {
  /**
   * Creates a new tag
   */
  create(
    accountId: number,
    body: TagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagCreateResponse> {
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/tags/create`, {
      body,
      ...options,
    });
  }

  /**
   * Adds a tag to an event
   */
  update(
    accountId: number,
    eventId: string,
    body: TagUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagUpdateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/cloudforce-one/events/tag/${eventId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TagUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes a tag from an event
   */
  delete(
    accountId: number,
    eventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/cloudforce-one/events/tag/${eventId}`,
        options,
      ) as Core.APIPromise<{ result: TagDeleteResponse }>
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
  tags: Array<string>;
}

export declare namespace Tags {
  export {
    type TagCreateResponse as TagCreateResponse,
    type TagUpdateResponse as TagUpdateResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
  };
}
