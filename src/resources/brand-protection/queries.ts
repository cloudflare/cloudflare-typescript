// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Queries extends APIResource {
  /**
   * Return a success message after creating new saved string queries
   */
  create(params: QueryCreateParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, id, query_scan, query_tag, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/brand-protection/queries`, {
      query: { id, scan: query_scan, tag: query_tag },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after deleting saved string queries by ID
   */
  delete(params: QueryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, id, scan, tag } = params;
    return this._client.delete(path`/accounts/${account_id}/brand-protection/queries`, {
      query: { id, scan, tag },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface QueryCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  id?: string;

  /**
   * Query param:
   */
  query_scan?: boolean;

  /**
   * Query param:
   */
  query_tag?: string;

  /**
   * Body param:
   */
  max_time?: string | null;

  /**
   * Body param:
   */
  min_time?: string | null;

  /**
   * Body param:
   */
  body_scan?: boolean;

  /**
   * Body param:
   */
  string_matches?: unknown;

  /**
   * Body param:
   */
  body_tag?: string;
}

export interface QueryDeleteParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  id?: string;

  /**
   * Query param:
   */
  scan?: boolean;

  /**
   * Query param:
   */
  tag?: string;
}

export declare namespace Queries {
  export { type QueryCreateParams as QueryCreateParams, type QueryDeleteParams as QueryDeleteParams };
}
