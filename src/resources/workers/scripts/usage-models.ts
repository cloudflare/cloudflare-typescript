// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UsageModelsAPI from 'cloudflare/resources/workers/scripts/usage-models';

export class UsageModels extends APIResource {
  /**
   * Fetches the Usage Model for a given Worker.
   */
  workerScriptFetchUsageModel(
    accountId: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelWorkerScriptFetchUsageModelResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/scripts/${scriptName}/usage-model`,
        options,
      ) as Core.APIPromise<{ result: UsageModelWorkerScriptFetchUsageModelResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the Usage Model for a given Worker. Requires a Workers Paid
   * subscription.
   */
  workerScriptUpdateUsageModel(
    accountId: string,
    scriptName: string,
    body: UsageModelWorkerScriptUpdateUsageModelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelWorkerScriptUpdateUsageModelResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/scripts/${scriptName}/usage-model`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UsageModelWorkerScriptUpdateUsageModelResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UsageModelWorkerScriptFetchUsageModelResponse {
  usage_model?: unknown;
}

export interface UsageModelWorkerScriptUpdateUsageModelResponse {
  usage_model?: unknown;
}

export type UsageModelWorkerScriptUpdateUsageModelParams = unknown;

export namespace UsageModels {
  export import UsageModelWorkerScriptFetchUsageModelResponse = UsageModelsAPI.UsageModelWorkerScriptFetchUsageModelResponse;
  export import UsageModelWorkerScriptUpdateUsageModelResponse = UsageModelsAPI.UsageModelWorkerScriptUpdateUsageModelResponse;
  export import UsageModelWorkerScriptUpdateUsageModelParams = UsageModelsAPI.UsageModelWorkerScriptUpdateUsageModelParams;
}
