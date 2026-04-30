// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Queries extends APIResource {
  /**
   * Get all saved brand protection queries for an account
   */
  get(params: QueryGetParams, options?: Core.RequestOptions): Core.APIPromise<QueryGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/v2/brand-protection/domain/queries`, {
      query,
      ...options,
    });
  }
}

export type QueryGetResponse = Array<QueryGetResponse.QueryGetResponseItem>;

export namespace QueryGetResponse {
  export interface QueryGetResponseItem {
    created: string;

    parameters: QueryGetResponseItem.Parameters | null;

    query_id: number;

    query_tag: string;

    scan: boolean;

    updated: string;
  }

  export namespace QueryGetResponseItem {
    export interface Parameters {
      string_matches: Array<Parameters.StringMatch>;

      max_time?: string;

      min_time?: string;
    }

    export namespace Parameters {
      export interface StringMatch {
        max_edit_distance: number;

        pattern: string;
      }
    }
  }
}

export interface QueryGetParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  id?: string;
}

export declare namespace Queries {
  export { type QueryGetResponse as QueryGetResponse, type QueryGetParams as QueryGetParams };
}
