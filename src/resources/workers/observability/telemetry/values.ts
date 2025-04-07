// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { SinglePage } from '../../../../pagination';

export class Values extends APIResource {
  /**
   * List unique values found in your events
   */
  create(
    params: ValueCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ValueCreateResponsesSinglePage, ValueCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/observability/telemetry/values`,
      ValueCreateResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }
}

export class ValueCreateResponsesSinglePage extends SinglePage<ValueCreateResponse> {}

export interface ValueCreateResponse {
  dataset: string;

  key: string;

  type: 'string' | 'boolean' | 'number';

  value: string | number | boolean;
}

export interface ValueCreateParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param:
   */
  datasets: Array<string>;

  /**
   * Body param:
   */
  key: string;

  /**
   * Body param:
   */
  timeframe: ValueCreateParams.Timeframe;

  /**
   * Body param:
   */
  type: 'string' | 'boolean' | 'number';

  /**
   * Body param:
   */
  filters?: Array<ValueCreateParams.Filter>;

  /**
   * Body param:
   */
  limit?: number;

  /**
   * Body param: Search for a specific substring in the event.
   */
  needle?: ValueCreateParams.Needle;
}

export namespace ValueCreateParams {
  export interface Timeframe {
    from: number;

    to: number;
  }

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
   * Search for a specific substring in the event.
   */
  export interface Needle {
    value: string | number | boolean;

    isRegex?: boolean;

    matchCase?: boolean;
  }
}

Values.ValueCreateResponsesSinglePage = ValueCreateResponsesSinglePage;

export declare namespace Values {
  export {
    type ValueCreateResponse as ValueCreateResponse,
    ValueCreateResponsesSinglePage as ValueCreateResponsesSinglePage,
    type ValueCreateParams as ValueCreateParams,
  };
}
