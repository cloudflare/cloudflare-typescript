// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SinkholesAPI from './sinkholes';
import { SinglePage } from '../../pagination';

export class Sinkholes extends APIResource {
  /**
   * List sinkholes owned by this account
   */
  list(
    params: SinkholeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SinkholesSinglePage, Sinkhole> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/intel/sinkholes`, SinkholesSinglePage, options);
  }
}

export class SinkholesSinglePage extends SinglePage<Sinkhole> {}

export interface Sinkhole {
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

export interface SinkholeListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Sinkholes {
  export import Sinkhole = SinkholesAPI.Sinkhole;
  export import SinkholesSinglePage = SinkholesAPI.SinkholesSinglePage;
  export import SinkholeListParams = SinkholesAPI.SinkholeListParams;
}
