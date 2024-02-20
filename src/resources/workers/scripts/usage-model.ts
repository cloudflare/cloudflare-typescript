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
    accountId: string,
    scriptName: string,
    body: UsageModelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/scripts/${scriptName}/usage-model`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UsageModelUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the Usage Model for a given Worker.
   */
  get(
    accountId: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/scripts/${scriptName}/usage-model`,
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

export type UsageModelUpdateParams = unknown;

export namespace UsageModel {
  export import UsageModelUpdateResponse = UsageModelAPI.UsageModelUpdateResponse;
  export import UsageModelGetResponse = UsageModelAPI.UsageModelGetResponse;
  export import UsageModelUpdateParams = UsageModelAPI.UsageModelUpdateParams;
}
