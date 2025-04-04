// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tail extends APIResource {
  /**
   * Starts a tail that receives logs and exception from a Worker.
   */
  create(
    scriptName: string,
    params: TailCreateParams,
    options?: RequestOptions,
  ): APIPromise<TailCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/workers/scripts/${scriptName}/tails`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: TailCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a tail from a Worker.
   */
  delete(id: string, params: TailDeleteParams, options?: RequestOptions): APIPromise<TailDeleteResponse> {
    const { account_id, script_name } = params;
    return this._client.delete(
      path`/accounts/${account_id}/workers/scripts/${script_name}/tails/${id}`,
      options,
    );
  }

  /**
   * Get list of tails currently deployed on a Worker.
   */
  get(scriptName: string, params: TailGetParams, options?: RequestOptions): APIPromise<TailGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workers/scripts/${scriptName}/tails`,
        options,
      ) as APIPromise<{ result: TailGetResponse }>
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
export interface ConsumerScriptParam {
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
  id?: string;

  expires_at?: string;

  url?: string;
}

export interface TailDeleteResponse {
  errors: Array<TailDeleteResponse.Error>;

  messages: Array<TailDeleteResponse.Message>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace TailDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TailGetResponse {
  id?: string;

  expires_at?: string;

  url?: string;
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
   * Identifier
   */
  account_id: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script_name: string;
}

export interface TailGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Tail {
  export {
    type ConsumerScript as ConsumerScript,
    type TailCreateResponse as TailCreateResponse,
    type TailDeleteResponse as TailDeleteResponse,
    type TailGetResponse as TailGetResponse,
    type TailCreateParams as TailCreateParams,
    type TailDeleteParams as TailDeleteParams,
    type TailGetParams as TailGetParams,
  };
}
