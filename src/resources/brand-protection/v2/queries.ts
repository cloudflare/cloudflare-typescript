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
    return (
      this._client.get(path`/accounts/${account_id}/cloudforce-one/v2/brand-protection/domain/queries`, {
        query,
        ...options,
      }) as APIPromise<{ result: QueryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Queries extends BaseQueries {}

export type QueryGetResponse = Array<QueryGetResponse.UnionMember0> | QueryGetResponse.UnionMember1;

export namespace QueryGetResponse {
  export interface UnionMember0 {
    created: string;

    parameters: UnionMember0.Parameters | null;

    query_id: number;

    query_tag: string;

    scan: boolean;

    updated: string;
  }

  export namespace UnionMember0 {
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

  export interface UnionMember1 {
    created: string;

    parameters: UnionMember1.Parameters | null;

    query_id: number;

    query_tag: string;

    scan: boolean;

    updated: string;
  }

  export namespace UnionMember1 {
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

  /**
   * Query param: Optional page number for paginated list requests. Defaults to 1
   * when only per_page is supplied. Omit page and per_page to preserve the legacy
   * full-list response.
   */
  page?: number;

  /**
   * Query param: Optional number of queries per page for paginated list requests.
   * Defaults to 100 when only page is supplied. Maximum 100. Omit page and per_page
   * to preserve the legacy full-list response.
   */
  per_page?: number;
}

export declare namespace Queries {
  export { type QueryGetResponse as QueryGetResponse, type QueryGetParams as QueryGetParams };
}
