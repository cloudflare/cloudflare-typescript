// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MiscategorizationsAPI from './miscategorizations';
import * as Shared from '../shared';

export class Miscategorizations extends APIResource {
  /**
   * Create Miscategorization
   */
  create(
    params: MiscategorizationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MiscategorizationCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/intel/miscategorization`, { body, ...options });
  }
}

export interface MiscategorizationCreateResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface MiscategorizationCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Content category IDs to add.
   */
  content_adds?: Array<number>;

  /**
   * Body param: Content category IDs to remove.
   */
  content_removes?: Array<number>;

  /**
   * Body param:
   */
  indicator_type?: 'domain' | 'ipv4' | 'ipv6' | 'url';

  /**
   * Body param: Provide only if indicator_type is `ipv4` or `ipv6`.
   */
  ip?: string;

  /**
   * Body param: Security category IDs to add.
   */
  security_adds?: Array<number>;

  /**
   * Body param: Security category IDs to remove.
   */
  security_removes?: Array<number>;

  /**
   * Body param: Provide only if indicator_type is `domain` or `url`. Example if
   * indicator_type is `domain`: `example.com`. Example if indicator_type is `url`:
   * `https://example.com/news/`.
   */
  url?: string;
}

export namespace Miscategorizations {
  export import MiscategorizationCreateResponse = MiscategorizationsAPI.MiscategorizationCreateResponse;
  export import MiscategorizationCreateParams = MiscategorizationsAPI.MiscategorizationCreateParams;
}
