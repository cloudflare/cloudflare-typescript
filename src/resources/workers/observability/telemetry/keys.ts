// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * List all the keys in your telemetry events.
   */
  create(
    params: KeyCreateParams,
    options?: RequestOptions,
  ): PagePromise<KeyCreateResponsesSinglePage, KeyCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/observability/telemetry/keys`,
      SinglePage<KeyCreateResponse>,
      { body, method: 'post', ...options },
    );
  }
}

export type KeyCreateResponsesSinglePage = SinglePage<KeyCreateResponse>;

export interface KeyCreateResponse {
  key: string;

  lastSeenAt: number;

  type: 'string' | 'boolean' | 'number';
}

export interface KeyCreateParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param:
   */
  datasets?: Array<string>;

  /**
   * Body param:
   */
  filters?: Array<KeyCreateParams.Filter>;

  /**
   * Body param: Search for a specific substring in the keys.
   */
  keyNeedle?: KeyCreateParams.KeyNeedle;

  /**
   * Body param:
   */
  limit?: number;

  /**
   * Body param: Search for a specific substring in the event.
   */
  needle?: KeyCreateParams.Needle;

  /**
   * Body param:
   */
  timeframe?: KeyCreateParams.Timeframe;
}

export namespace KeyCreateParams {
  export interface Filter {
    key: string;

    operation:
      | 'includes'
      | 'not_includes'
      | 'starts_with'
      | 'regex'
      | 'exists'
      | 'is_null'
      | 'in'
      | 'not_in'
      | 'eq'
      | 'neq'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | '='
      | '!='
      | '>'
      | '>='
      | '<'
      | '<='
      | 'INCLUDES'
      | 'DOES_NOT_INCLUDE'
      | 'MATCH_REGEX'
      | 'EXISTS'
      | 'DOES_NOT_EXIST'
      | 'IN'
      | 'NOT_IN'
      | 'STARTS_WITH';

    type: 'string' | 'number' | 'boolean';

    value?: string | number | boolean;
  }

  /**
   * Search for a specific substring in the keys.
   */
  export interface KeyNeedle {
    value: string | number | boolean;

    isRegex?: boolean;

    matchCase?: boolean;
  }

  /**
   * Search for a specific substring in the event.
   */
  export interface Needle {
    value: string | number | boolean;

    isRegex?: boolean;

    matchCase?: boolean;
  }

  export interface Timeframe {
    from: number;

    to: number;
  }
}

export declare namespace Keys {
  export {
    type KeyCreateResponse as KeyCreateResponse,
    type KeyCreateResponsesSinglePage as KeyCreateResponsesSinglePage,
    type KeyCreateParams as KeyCreateParams,
  };
}
