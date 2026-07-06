// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseQueries extends APIResource {
  static override readonly _key: readonly ['brandProtection', 'v2', 'queries'] = Object.freeze([
    'brandProtection',
    'v2',
    'queries',
  ] as const);

  /**
   * Get all saved brand protection queries for an account
   */
  get(params: QueryGetParams, options?: RequestOptions): APIPromise<QueryGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/v2/brand-protection/domain/queries`, {
      query,
      ...options,
    });
  }
}
export class Queries extends BaseQueries {}

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
