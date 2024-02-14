// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IndexesAPI from 'cloudflare/resources/vectorize/indexes';

export class Indexes extends APIResource {
  /**
   * Returns a list of Vectorize Indexes
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<IndexListResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/vectorize/indexes`, options) as Core.APIPromise<{
        result: IndexListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IndexListResponse = Array<IndexListResponse.IndexListResponseItem>;

export namespace IndexListResponse {
  export interface IndexListResponseItem {
    config?: IndexListResponseItem.Config;

    /**
     * Specifies the timestamp the resource was created as an ISO8601 string.
     */
    created_on?: unknown;

    /**
     * Specifies the description of the index.
     */
    description?: string;

    /**
     * Specifies the timestamp the resource was modified as an ISO8601 string.
     */
    modified_on?: unknown;

    name?: string;
  }

  export namespace IndexListResponseItem {
    export interface Config {
      /**
       * Specifies the number of dimensions for the index
       */
      dimensions: number;

      /**
       * Specifies the type of metric to use calculating distance.
       */
      metric: 'cosine' | 'euclidean' | 'dot-product';
    }
  }
}

export namespace Indexes {
  export import IndexListResponse = IndexesAPI.IndexListResponse;
}
