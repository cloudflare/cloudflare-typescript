// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/scripts/${scriptName}/tails`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: TailCreateResponse }>
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
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/workers/scripts/${scriptName}/tails/${id}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: TailDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get list of tails currently deployed on a Worker.
   */
  get(
    scriptName: string,
    params: TailGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/tails`,
        options,
      ) as Core.APIPromise<{ result: TailGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A reference to a script that will consume logs from the attached Worker.
 */
export interface ConsumerScript {
  /**
   * Name of Worker that is to be the consumer.
   */
  service: string;

  /**
   * Optional environment if the Worker utilizes one.
   */
  environment?: string;

  /**
   * Optional dispatch namespace the script belongs to.
   */
  namespace?: string;
}

/**
 * A reference to a script that will consume logs from the attached Worker.
 */
export interface ConsumerScriptItem {
  /**
   * Name of Worker that is to be the consumer.
   */
  service: string;

  /**
   * Optional environment if the Worker utilizes one.
   */
  environment?: string;

  /**
   * Optional dispatch namespace the script belongs to.
   */
  namespace?: string;
}

export interface TailCreateResponse {
  id?: unknown;

  expires_at?: unknown;

  url?: unknown;
}

export type TailDeleteResponse = unknown | Array<unknown> | string;

export interface TailGetResponse {
  id?: unknown;

  expires_at?: unknown;

  url?: unknown;
}

export interface TailCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface TailDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface TailGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Tail {
  export import ConsumerScript = TailAPI.ConsumerScript;
  export import ConsumerScriptItem = TailAPI.ConsumerScriptItem;
  export import TailCreateResponse = TailAPI.TailCreateResponse;
  export import TailDeleteResponse = TailAPI.TailDeleteResponse;
  export import TailGetResponse = TailAPI.TailGetResponse;
  export import TailCreateParams = TailAPI.TailCreateParams;
  export import TailDeleteParams = TailAPI.TailDeleteParams;
  export import TailGetParams = TailAPI.TailGetParams;
}
