// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OutputsAPI from 'cloudflare/resources/stream/live-inputs/outputs';

export class Outputs extends APIResource {
  /**
   * Updates the state of an output.
   */
  update(
    accountId: string,
    liveInputIdentifier: string,
    outputIdentifier: string,
    body: OutputUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutputUpdateResponse> {
    return (
      this._client.put(
        `/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/outputs/${outputIdentifier}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: OutputUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an output and removes it from the associated live input.
   */
  delete(
    accountId: string,
    liveInputIdentifier: string,
    outputIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(
      `/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/outputs/${outputIdentifier}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }

  /**
   * Creates a new output that can be used to simulcast or restream live video to
   * other RTMP or SRT destinations. Outputs are always linked to a specific live
   * input — one live input can have many outputs.
   */
  streamLiveInputsCreateANewOutputConnectedToALiveInput(
    accountId: string,
    liveInputIdentifier: string,
    body: OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse> {
    return (
      this._client.post(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/outputs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves all outputs associated with a specified live input.
   */
  streamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInput(
    accountId: string,
    liveInputIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}/outputs`,
        options,
      ) as Core.APIPromise<{
        result: OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
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

export interface OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse {
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

export type OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse =
  Array<OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse.OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponseItem>;

export namespace OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse {
  export interface OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponseItem {
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

export interface OutputUpdateParams {
  /**
   * When enabled, live video streamed to the associated live input will be sent to
   * the output URL. When disabled, live video will not be sent to the output URL,
   * even when streaming to the associated live input. Use this to control precisely
   * when you start and stop simulcasting to specific destinations like YouTube and
   * Twitch.
   */
  enabled: boolean;
}

export interface OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputParams {
  /**
   * The streamKey used to authenticate against an output's target.
   */
  streamKey: string;

  /**
   * The URL an output uses to restream.
   */
  url: string;

  /**
   * When enabled, live video streamed to the associated live input will be sent to
   * the output URL. When disabled, live video will not be sent to the output URL,
   * even when streaming to the associated live input. Use this to control precisely
   * when you start and stop simulcasting to specific destinations like YouTube and
   * Twitch.
   */
  enabled?: boolean;
}

export namespace Outputs {
  export import OutputUpdateResponse = OutputsAPI.OutputUpdateResponse;
  export import OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse = OutputsAPI.OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse;
  export import OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse = OutputsAPI.OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse;
  export import OutputUpdateParams = OutputsAPI.OutputUpdateParams;
  export import OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputParams = OutputsAPI.OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputParams;
}
