// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sinkholes extends APIResource {
  /**
   * List sinkholes owned by this account
   */
  list(params: SinkholeListParams, options?: RequestOptions): PagePromise<SinkholesSinglePage, Sinkhole> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/intel/sinkholes`,
      SinglePage<Sinkhole>,
      options,
    );
  }
}

export type SinkholesSinglePage = SinglePage<Sinkhole>;

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

export declare namespace Sinkholes {
  export {
    type Sinkhole as Sinkhole,
    type SinkholesSinglePage as SinkholesSinglePage,
    type SinkholeListParams as SinkholeListParams,
  };
}
