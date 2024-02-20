// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TailAPI from 'cloudflare/resources/workers/scripts/tail';

export class Tail extends APIResource {
  /**
   * Starts a tail that receives logs and exception from a Worker.
   */
  create(
    accountId: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailCreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/workers/scripts/${scriptName}/tails`,
        options,
      ) as Core.APIPromise<{ result: TailCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get list of tails currently deployed on a Worker.
   */
  list(
    accountId: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/scripts/${scriptName}/tails`,
        options,
      ) as Core.APIPromise<{ result: TailListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

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
}

export interface TailCreateResponse {
  id?: unknown;

  expires_at?: unknown;

  url?: unknown;
}

export interface TailListResponse {
  id?: unknown;

  expires_at?: unknown;

  url?: unknown;
}

export type TailDeleteResponse = unknown | Array<unknown> | string;

export namespace Tail {
  export import TailCreateResponse = TailAPI.TailCreateResponse;
  export import TailListResponse = TailAPI.TailListResponse;
  export import TailDeleteResponse = TailAPI.TailDeleteResponse;
}
