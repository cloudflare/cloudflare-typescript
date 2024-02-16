// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccessTagsAPI from 'cloudflare/resources/access-tags';

export class AccessTags extends APIResource {
  /**
   * Create a tag
   */
  create(
    identifier: string,
    body: AccessTagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessTagCreateResponse> {
    return (
      this._client.post(`/accounts/${identifier}/access/tags`, { body, ...options }) as Core.APIPromise<{
        result: AccessTagCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a tag
   */
  update(
    identifier: string,
    tagName: string,
    body: AccessTagUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessTagUpdateResponse> {
    return (
      this._client.put(`/accounts/${identifier}/access/tags/${tagName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessTagUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a tag
   */
  delete(
    identifier: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessTagDeleteResponse> {
    return (
      this._client.delete(`/accounts/${identifier}/access/tags/${name}`, options) as Core.APIPromise<{
        result: AccessTagDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a tag
   */
  get(
    identifier: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessTagGetResponse> {
    return (
      this._client.get(`/accounts/${identifier}/access/tags/${name}`, options) as Core.APIPromise<{
        result: AccessTagGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A tag
 */
export interface AccessTagCreateResponse {
  /**
   * The name of the tag
   */
  name: string;

  /**
   * The number of applications that have this tag
   */
  app_count?: number;

  created_at?: string;

  updated_at?: string;
}

/**
 * A tag
 */
export interface AccessTagUpdateResponse {
  /**
   * The name of the tag
   */
  name: string;

  /**
   * The number of applications that have this tag
   */
  app_count?: number;

  created_at?: string;

  updated_at?: string;
}

export interface AccessTagDeleteResponse {
  /**
   * The name of the tag
   */
  name?: string;
}

/**
 * A tag
 */
export interface AccessTagGetResponse {
  /**
   * The name of the tag
   */
  name: string;

  /**
   * The number of applications that have this tag
   */
  app_count?: number;

  created_at?: string;

  updated_at?: string;
}

export interface AccessTagCreateParams {
  /**
   * The name of the tag
   */
  name: string;
}

export interface AccessTagUpdateParams {
  /**
   * The name of the tag
   */
  name: string;
}

export namespace AccessTags {
  export import AccessTagCreateResponse = AccessTagsAPI.AccessTagCreateResponse;
  export import AccessTagUpdateResponse = AccessTagsAPI.AccessTagUpdateResponse;
  export import AccessTagDeleteResponse = AccessTagsAPI.AccessTagDeleteResponse;
  export import AccessTagGetResponse = AccessTagsAPI.AccessTagGetResponse;
  export import AccessTagCreateParams = AccessTagsAPI.AccessTagCreateParams;
  export import AccessTagUpdateParams = AccessTagsAPI.AccessTagUpdateParams;
}
