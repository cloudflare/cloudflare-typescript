// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TailAPI from 'cloudflare/resources/workers/scripts/tail';

export class Tail extends APIResource {
  /**
   * Starts a tail that receives logs and exception from a Worker.
   */
  create(
    scriptName: string,
    params: TailCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/workers/scripts/${scriptName}/tails`,
        options,
      ) as Core.APIPromise<{ result: TailCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get list of tails currently deployed on a Worker.
   */
  list(
    scriptName: string,
    params: TailListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/tails`,
        options,
      ) as Core.APIPromise<{ result: TailListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a tail from a Worker.
   */
  delete(
    scriptName: string,
    id: string,
    params: TailDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/workers/scripts/${scriptName}/tails/${id}`,
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

export interface TailCreateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface TailListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface TailDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Tail {
  export import TailCreateResponse = TailAPI.TailCreateResponse;
  export import TailListResponse = TailAPI.TailListResponse;
  export import TailDeleteResponse = TailAPI.TailDeleteResponse;
  export import TailCreateParams = TailAPI.TailCreateParams;
  export import TailListParams = TailAPI.TailListParams;
  export import TailDeleteParams = TailAPI.TailDeleteParams;
}
