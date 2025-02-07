// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EvaluationTypes extends APIResource {
  /**
   * List Evaluators
   */
  list(
    params: EvaluationTypeListParams,
    options?: RequestOptions,
  ): PagePromise<EvaluationTypeListResponsesV4PagePaginationArray, EvaluationTypeListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-gateway/evaluation-types`,
      V4PagePaginationArray<EvaluationTypeListResponse>,
      { query, ...options },
    );
  }
}

export type EvaluationTypeListResponsesV4PagePaginationArray =
  V4PagePaginationArray<EvaluationTypeListResponse>;

export interface EvaluationTypeListResponse {
  id: string;

  created_at: string;

  description: string;

  enable: boolean;

  mandatory: boolean;

  modified_at: string;

  name: string;

  type: string;
}

export interface EvaluationTypeListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  order_by?: string;

  /**
   * Query param:
   */
  order_by_direction?: 'asc' | 'desc';
}

export declare namespace EvaluationTypes {
  export {
    type EvaluationTypeListResponse as EvaluationTypeListResponse,
    type EvaluationTypeListResponsesV4PagePaginationArray as EvaluationTypeListResponsesV4PagePaginationArray,
    type EvaluationTypeListParams as EvaluationTypeListParams,
  };
}
