// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OutputsAPI from 'cloudflare/resources/stream/live-inputs/outputs';

export class Outputs extends APIResource {
  /**
   * Creates a new output that can be used to simulcast or restream live video to
   * other RTMP or SRT destinations. Outputs are always linked to a specific live
   * input — one live input can have many outputs.
   */
  create(
    liveInputIdentifier: string,
    params: OutputCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutputCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}/outputs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OutputCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the state of an output.
   */
  update(
    liveInputIdentifier: string,
    outputIdentifier: string,
    params: OutputUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutputUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}/outputs/${outputIdentifier}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: OutputUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves all outputs associated with a specified live input.
   */
  list(
    liveInputIdentifier: string,
    params: OutputListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutputListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}/outputs`,
        options,
      ) as Core.APIPromise<{ result: OutputListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an output and removes it from the associated live input.
   */
  delete(
    liveInputIdentifier: string,
    outputIdentifier: string,
    params: OutputDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}/outputs/${outputIdentifier}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }
}

export interface OutputCreateResponse {
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

export interface OutputUpdateResponse {
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

export type OutputListResponse = Array<OutputListResponse.OutputListResponseItem>;

export namespace OutputListResponse {
  export interface OutputListResponseItem {
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
}

export interface OutputCreateParams {
  /**
   * Path param: Identifier
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
   * Path param: Identifier
   */
  account_id: string;

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
   * Identifier
   */
  account_id: string;
}

export interface OutputDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Outputs {
  export import OutputCreateResponse = OutputsAPI.OutputCreateResponse;
  export import OutputUpdateResponse = OutputsAPI.OutputUpdateResponse;
  export import OutputListResponse = OutputsAPI.OutputListResponse;
  export import OutputCreateParams = OutputsAPI.OutputCreateParams;
  export import OutputUpdateParams = OutputsAPI.OutputUpdateParams;
  export import OutputListParams = OutputsAPI.OutputListParams;
  export import OutputDeleteParams = OutputsAPI.OutputDeleteParams;
}
