// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvaluationTypesAPI from './evaluation-types';

export class EvaluationTypes extends APIResource {
  /**
   * List Evaluators
   */
  get(
    params: EvaluationTypeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationTypeGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-gateway/evaluation-types`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: EvaluationTypeGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EvaluationTypeGetResponse = Array<EvaluationTypeGetResponse.EvaluationTypeGetResponseItem>;

export namespace EvaluationTypeGetResponse {
  export interface EvaluationTypeGetResponseItem {
    id: string;

    created_at: string;

    description: string;

    enable: boolean;

    mandatory: boolean;

    modified_at: string;

    name: string;

    type: string;
  }
}

export interface EvaluationTypeGetParams {
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

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  per_page?: number;
}

export namespace EvaluationTypes {
  export import EvaluationTypeGetResponse = EvaluationTypesAPI.EvaluationTypeGetResponse;
  export import EvaluationTypeGetParams = EvaluationTypesAPI.EvaluationTypeGetParams;
}
