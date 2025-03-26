// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Creates a new tag
   */
  create(params: TagCreateParams, options?: RequestOptions): APIPromise<TagCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/tags/create`, {
      body,
      ...options,
    });
  }
}

export interface TagCreateResponse {
  name: string;

  uuid: string;
}

export interface TagCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param:
   */
  name: string;
}

export declare namespace Tags {
  export { type TagCreateResponse as TagCreateResponse, type TagCreateParams as TagCreateParams };
}
