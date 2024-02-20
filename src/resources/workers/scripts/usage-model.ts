// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UsageModelAPI from 'cloudflare/resources/workers/scripts/usage-model';

export class UsageModel extends APIResource {
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

  /**
   * Updates the Usage Model for a given Worker. Requires a Workers Paid
   * subscription.
   */
  replace(
    accountId: string,
    scriptName: string,
    body: UsageModelReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/scripts/${scriptName}/usage-model`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UsageModelReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UsageModelGetResponse {
  usage_model?: unknown;
}

export interface UsageModelReplaceResponse {
  usage_model?: unknown;
}

export type UsageModelReplaceParams = unknown;

export namespace UsageModel {
  export import UsageModelGetResponse = UsageModelAPI.UsageModelGetResponse;
  export import UsageModelReplaceResponse = UsageModelAPI.UsageModelReplaceResponse;
  export import UsageModelReplaceParams = UsageModelAPI.UsageModelReplaceParams;
}
