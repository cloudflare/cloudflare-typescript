// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TailsAPI from 'cloudflare/resources/workers/scripts/tails';

export class Tails extends APIResource {
  /**
   * Deletes a tail from a Worker.
   */
  delete(
    accountId: string,
    scriptName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/workers/scripts/${scriptName}/tails/${id}`,
        options,
      ) as Core.APIPromise<{ result: TailDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get list of tails currently deployed on a Worker.
   */
  workerTailLogsListTails(
    accountId: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailWorkerTailLogsListTailsResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/scripts/${scriptName}/tails`,
        options,
      ) as Core.APIPromise<{ result: TailWorkerTailLogsListTailsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Starts a tail that receives logs and exception from a Worker.
   */
  workerTailLogsStartTail(
    accountId: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailWorkerTailLogsStartTailResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/workers/scripts/${scriptName}/tails`,
        options,
      ) as Core.APIPromise<{ result: TailWorkerTailLogsStartTailResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TailDeleteResponse = unknown | Array<unknown> | string;

export interface TailWorkerTailLogsListTailsResponse {
  id?: unknown;

  expires_at?: unknown;

  url?: unknown;
}

export interface TailWorkerTailLogsStartTailResponse {
  id?: unknown;

  expires_at?: unknown;

  url?: unknown;
}

export namespace Tails {
  export import TailDeleteResponse = TailsAPI.TailDeleteResponse;
  export import TailWorkerTailLogsListTailsResponse = TailsAPI.TailWorkerTailLogsListTailsResponse;
  export import TailWorkerTailLogsStartTailResponse = TailsAPI.TailWorkerTailLogsStartTailResponse;
}
