// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UsageModelAPI from 'cloudflare/resources/workers/scripts/usage-model';

export class UsageModel extends APIResource {
  /**
   * Updates the Usage Model for a given Worker. Requires a Workers Paid
   * subscription.
   */
  update(
    scriptName: string,
    params: UsageModelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelUpdateResponse> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/scripts/${scriptName}/usage-model`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: UsageModelUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the Usage Model for a given Worker.
   */
  get(
    scriptName: string,
    params: UsageModelGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/usage-model`,
        options,
      ) as Core.APIPromise<{ result: UsageModelGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UsageModelUpdateResponse {
  usage_model?: unknown;
}

export interface UsageModelGetResponse {
  usage_model?: unknown;
}

export interface UsageModelUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface UsageModelGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace UsageModel {
  export import UsageModelUpdateResponse = UsageModelAPI.UsageModelUpdateResponse;
  export import UsageModelGetResponse = UsageModelAPI.UsageModelGetResponse;
  export import UsageModelUpdateParams = UsageModelAPI.UsageModelUpdateParams;
  export import UsageModelGetParams = UsageModelAPI.UsageModelGetParams;
}
