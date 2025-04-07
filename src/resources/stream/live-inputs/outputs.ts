// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Outputs extends APIResource {
  /**
   * Creates a new output that can be used to simulcast or restream live video to
   * other RTMP or SRT destinations. Outputs are always linked to a specific live
   * input — one live input can have many outputs.
   */
  create(
    liveInputIdentifier: string,
    params: OutputCreateParams,
    options?: RequestOptions,
  ): APIPromise<Output> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}/outputs`, {
        body,
        ...options,
      }) as APIPromise<{ result: Output }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the state of an output.
   */
  update(outputIdentifier: string, params: OutputUpdateParams, options?: RequestOptions): APIPromise<Output> {
    const { account_id, live_input_identifier, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/stream/live_inputs/${live_input_identifier}/outputs/${outputIdentifier}`,
        { body, ...options },
      ) as APIPromise<{ result: Output }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves all outputs associated with a specified live input.
   */
  list(
    liveInputIdentifier: string,
    params: OutputListParams,
    options?: RequestOptions,
  ): PagePromise<OutputsSinglePage, Output> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}/outputs`,
      SinglePage<Output>,
      options,
    );
  }

  /**
   * Deletes an output and removes it from the associated live input.
   */
  delete(outputIdentifier: string, params: OutputDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, live_input_identifier } = params;
    return this._client.delete(
      path`/accounts/${account_id}/stream/live_inputs/${live_input_identifier}/outputs/${outputIdentifier}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export type OutputsSinglePage = SinglePage<Output>;

export interface Output {
  /**
   * When enabled, live video streamed to the associated live input will be sent to
   * the output URL. When disabled, live video will not be sent to the output URL,
   * even when streaming to the associated live input. Use this to control precisely
   * when you start and stop simulcasting to specific destinations like YouTube and
   * Twitch.
   */
  enabled?: boolean;

  /**
   * The streamKey used to authenticate against an output's target.
   */
  streamKey?: string;

  /**
   * A unique identifier for the output.
   */
  uid?: string;

  /**
   * The URL an output uses to restream.
   */
  url?: string;
}

export interface OutputCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The streamKey used to authenticate against an output's target.
   */
  streamKey: string;

  /**
   * Body param: The URL an output uses to restream.
   */
  url: string;

  /**
   * Body param: When enabled, live video streamed to the associated live input will
   * be sent to the output URL. When disabled, live video will not be sent to the
   * output URL, even when streaming to the associated live input. Use this to
   * control precisely when you start and stop simulcasting to specific destinations
   * like YouTube and Twitch.
   */
  enabled?: boolean;
}

export interface OutputUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: A unique identifier for a live input.
   */
  live_input_identifier: string;

  /**
   * Body param: When enabled, live video streamed to the associated live input will
   * be sent to the output URL. When disabled, live video will not be sent to the
   * output URL, even when streaming to the associated live input. Use this to
   * control precisely when you start and stop simulcasting to specific destinations
   * like YouTube and Twitch.
   */
  enabled: boolean;
}

export interface OutputListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface OutputDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * A unique identifier for a live input.
   */
  live_input_identifier: string;
}

export declare namespace Outputs {
  export {
    type Output as Output,
    type OutputsSinglePage as OutputsSinglePage,
    type OutputCreateParams as OutputCreateParams,
    type OutputUpdateParams as OutputUpdateParams,
    type OutputListParams as OutputListParams,
    type OutputDeleteParams as OutputDeleteParams,
  };
}
