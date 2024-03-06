// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SinkholesAPI from 'cloudflare/resources/intel/sinkholes';

export class Sinkholes extends APIResource {
  /**
   * List sinkholes owned by this account
   */
  list(params: SinkholeListParams, options?: Core.RequestOptions): Core.APIPromise<SinkholeListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/sinkholes`, options) as Core.APIPromise<{
        result: SinkholeListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SinkholeListResponse = Array<SinkholeListResponse.SinkholeListResponseItem>;

export namespace SinkholeListResponse {
  export interface SinkholeListResponseItem {
    /**
     * The unique identifier for the sinkhole
     */
    id?: number;

    /**
     * The account tag that owns this sinkhole
     */
    account_tag?: string;

    /**
     * The date and time when the sinkhole was created
     */
    created_on?: string;

    /**
     * The date and time when the sinkhole was last modified
     */
    modified_on?: string;

    /**
     * The name of the sinkhole
     */
    name?: string;

    /**
     * The name of the R2 bucket to store results
     */
    r2_bucket?: string;

    /**
     * The id of the R2 instance
     */
    r2_id?: string;
  }
}

export interface SinkholeListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Sinkholes {
  export import SinkholeListResponse = SinkholesAPI.SinkholeListResponse;
  export import SinkholeListParams = SinkholesAPI.SinkholeListParams;
}
