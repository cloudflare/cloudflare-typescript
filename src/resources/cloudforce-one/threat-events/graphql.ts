// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseGraphql extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'graphql'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'graphql',
  ] as const);

  /**
   * Execute GraphQL aggregations over threat events. Supports multi-dimensional
   * group-bys, optional date range filtering, and multi-dataset aggregation.
   *
   * @example
   * ```ts
   * const graphql =
   *   await client.cloudforceOne.threatEvents.graphql.create({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  create(params: GraphqlCreateParams, options?: RequestOptions): APIPromise<GraphqlCreateResponse> {
    const { account_id } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/graphql`, options);
  }
}
export class Graphql extends BaseGraphql {}

export interface GraphqlCreateResponse {
  data?: unknown | null;

  errors?: Array<unknown> | null;
}

export interface GraphqlCreateParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Graphql {
  export {
    type GraphqlCreateResponse as GraphqlCreateResponse,
    type GraphqlCreateParams as GraphqlCreateParams,
  };
}
