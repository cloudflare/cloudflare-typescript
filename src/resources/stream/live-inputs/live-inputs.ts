// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Outputs } from './outputs';
import * as LiveInputsAPI from './live-inputs';
import * as OutputsAPI from './outputs';

export class LiveInputs extends APIResource {
  outputs: OutputsAPI.Outputs = new OutputsAPI.Outputs(this._client);

  /**
   * Creates a live input, and returns credentials that you or your users can use to
   * stream live video to Cloudflare Stream.
   */
  create(params: LiveInputCreateParams, options?: Core.RequestOptions): Core.APIPromise<LiveInput> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/stream/live_inputs`, { body, ...options }) as Core.APIPromise<{ result: LiveInput }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a specified live input.
   */
  update(liveInputIdentifier: string, params: LiveInputUpdateParams, options?: Core.RequestOptions): Core.APIPromise<LiveInput> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}`, { body, ...options }) as Core.APIPromise<{ result: LiveInput }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the live inputs created for an account. To get the credentials needed to
   * stream to a specific live input, request a single live input.
   */
  list(params: LiveInputListParams, options?: Core.RequestOptions): Core.APIPromise<LiveInputListResponse> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/stream/live_inputs`, { query, ...options }) as Core.APIPromise<{ result: LiveInputListResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Prevents a live input from being streamed to and makes the live input
   * inaccessible to any future API calls.
   */
  delete(liveInputIdentifier: string, params: LiveInputDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * Retrieves details of an existing live input.
   */
  get(liveInputIdentifier: string, params: LiveInputGetParams, options?: Core.RequestOptions): Core.APIPromise<LiveInput> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/stream/live_inputs/${liveInputIdentifier}`, options) as Core.APIPromise<{ result: LiveInput }>)._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Details about a live input.
 */
export interface LiveInput {
  /**
   * The date and time the live input was created.
   */
  created?: string;

  /**
   * Indicates the number of days after which the live inputs recordings will be
   * deleted. When a stream completes and the recording is ready, the value is used
   * to calculate a scheduled deletion date for that recording. Omit the field to
   * indicate no change, or include with a `null` value to remove an existing
   * scheduled deletion.
   */
  deleteRecordingAfterDays?: number;

  /**
   * A user modifiable key-value store used to reference other systems of record for
   * managing live inputs.
   */
  meta?: unknown;

  /**
   * The date and time the live input was last modified.
   */
  modified?: string;

  /**
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  recording?: LiveInput.Recording;

  /**
   * Details for streaming to an live input using RTMPS.
   */
  rtmps?: LiveInput.Rtmps;

  /**
   * Details for playback from an live input using RTMPS.
   */
  rtmpsPlayback?: LiveInput.RtmpsPlayback;

  /**
   * Details for streaming to a live input using SRT.
   */
  srt?: LiveInput.Srt;

  /**
   * Details for playback from an live input using SRT.
   */
  srtPlayback?: LiveInput.SrtPlayback;

  /**
   * The connection status of a live input.
   */
  status?: 'connected' | 'reconnected' | 'reconnecting' | 'client_disconnect' | 'ttl_exceeded' | 'failed_to_connect' | 'failed_to_reconnect' | 'new_configuration_accepted' | null;

  /**
   * A unique identifier for a live input.
   */
  uid?: string;

  /**
   * Details for streaming to a live input using WebRTC.
   */
  webRTC?: LiveInput.WebRtc;

  /**
   * Details for playback from a live input using WebRTC.
   */
  webRTCPlayback?: LiveInput.WebRtcPlayback;
}

export namespace LiveInput {
  /**
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  export interface Recording {
    /**
     * Lists the origins allowed to display videos created with this input. Enter
     * allowed origin domains in an array and use `*` for wildcard subdomains. An empty
     * array allows videos to be viewed on any origin.
     */
    allowedOrigins?: Array<string>;

    /**
     * Disables reporting the number of live viewers when this property is set to
     * `true`.
     */
    hideLiveViewerCount?: boolean;

    /**
     * Specifies the recording behavior for the live input. Set this value to `off` to
     * prevent a recording. Set the value to `automatic` to begin a recording and
     * transition to on-demand after Stream Live stops receiving input.
     */
    mode?: 'off' | 'automatic';

    /**
     * Indicates if a video using the live input has the `requireSignedURLs` property
     * set. Also enforces access controls on any video recording of the livestream with
     * the live input.
     */
    requireSignedURLs?: boolean;

    /**
     * Determines the amount of time a live input configured in `automatic` mode should
     * wait before a recording transitions from live to on-demand. `0` is recommended
     * for most use cases and indicates the platform default should be used.
     */
    timeoutSeconds?: number;
  }

  /**
   * Details for streaming to an live input using RTMPS.
   */
  export interface Rtmps {
    /**
     * The secret key to use when streaming via RTMPS to a live input.
     */
    streamKey?: string;

    /**
     * The RTMPS URL you provide to the broadcaster, which they stream live video to.
     */
    url?: string;
  }

  /**
   * Details for playback from an live input using RTMPS.
   */
  export interface RtmpsPlayback {
    /**
     * The secret key to use for playback via RTMPS.
     */
    streamKey?: string;

    /**
     * The URL used to play live video over RTMPS.
     */
    url?: string;
  }

  /**
   * Details for streaming to a live input using SRT.
   */
  export interface Srt {
    /**
     * The secret key to use when streaming via SRT to a live input.
     */
    passphrase?: string;

    /**
     * The identifier of the live input to use when streaming via SRT.
     */
    streamId?: string;

    /**
     * The SRT URL you provide to the broadcaster, which they stream live video to.
     */
    url?: string;
  }

  /**
   * Details for playback from an live input using SRT.
   */
  export interface SrtPlayback {
    /**
     * The secret key to use for playback via SRT.
     */
    passphrase?: string;

    /**
     * The identifier of the live input to use for playback via SRT.
     */
    streamId?: string;

    /**
     * The URL used to play live video over SRT.
     */
    url?: string;
  }

  /**
   * Details for streaming to a live input using WebRTC.
   */
  export interface WebRtc {
    /**
     * The WebRTC URL you provide to the broadcaster, which they stream live video to.
     */
    url?: string;
  }

  /**
   * Details for playback from a live input using WebRTC.
   */
  export interface WebRtcPlayback {
    /**
     * The URL used to play live video over WebRTC.
     */
    url?: string;
  }
}

export interface LiveInputListResponse {
  liveInputs?: Array<LiveInputListResponse.LiveInput>;

  /**
   * The total number of remaining live inputs based on cursor position.
   */
  range?: number;

  /**
   * The total number of live inputs that match the provided filters.
   */
  total?: number;
}

export namespace LiveInputListResponse {
  export interface LiveInput {
    /**
     * The date and time the live input was created.
     */
    created?: string;

    /**
     * Indicates the number of days after which the live inputs recordings will be
     * deleted. When a stream completes and the recording is ready, the value is used
     * to calculate a scheduled deletion date for that recording. Omit the field to
     * indicate no change, or include with a `null` value to remove an existing
     * scheduled deletion.
     */
    deleteRecordingAfterDays?: number;

    /**
     * A user modifiable key-value store used to reference other systems of record for
     * managing live inputs.
     */
    meta?: unknown;

    /**
     * The date and time the live input was last modified.
     */
    modified?: string;

    /**
     * A unique identifier for a live input.
     */
    uid?: string;
  }
}

export interface LiveInputCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Sets the creator ID asssociated with this live input.
   */
  defaultCreator?: string;

  /**
   * Body param: Indicates the number of days after which the live inputs recordings
   * will be deleted. When a stream completes and the recording is ready, the value
   * is used to calculate a scheduled deletion date for that recording. Omit the
   * field to indicate no change, or include with a `null` value to remove an
   * existing scheduled deletion.
   */
  deleteRecordingAfterDays?: number;

  /**
   * Body param: A user modifiable key-value store used to reference other systems of
   * record for managing live inputs.
   */
  meta?: unknown;

  /**
   * Body param: Records the input to a Cloudflare Stream video. Behavior depends on
   * the mode. In most cases, the video will initially be viewable as a live video
   * and transition to on-demand after a condition is satisfied.
   */
  recording?: LiveInputCreateParams.Recording;
}

export namespace LiveInputCreateParams {
  /**
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  export interface Recording {
    /**
     * Lists the origins allowed to display videos created with this input. Enter
     * allowed origin domains in an array and use `*` for wildcard subdomains. An empty
     * array allows videos to be viewed on any origin.
     */
    allowedOrigins?: Array<string>;

    /**
     * Disables reporting the number of live viewers when this property is set to
     * `true`.
     */
    hideLiveViewerCount?: boolean;

    /**
     * Specifies the recording behavior for the live input. Set this value to `off` to
     * prevent a recording. Set the value to `automatic` to begin a recording and
     * transition to on-demand after Stream Live stops receiving input.
     */
    mode?: 'off' | 'automatic';

    /**
     * Indicates if a video using the live input has the `requireSignedURLs` property
     * set. Also enforces access controls on any video recording of the livestream with
     * the live input.
     */
    requireSignedURLs?: boolean;

    /**
     * Determines the amount of time a live input configured in `automatic` mode should
     * wait before a recording transitions from live to on-demand. `0` is recommended
     * for most use cases and indicates the platform default should be used.
     */
    timeoutSeconds?: number;
  }
}

export interface LiveInputUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Sets the creator ID asssociated with this live input.
   */
  defaultCreator?: string;

  /**
   * Body param: Indicates the number of days after which the live inputs recordings
   * will be deleted. When a stream completes and the recording is ready, the value
   * is used to calculate a scheduled deletion date for that recording. Omit the
   * field to indicate no change, or include with a `null` value to remove an
   * existing scheduled deletion.
   */
  deleteRecordingAfterDays?: number;

  /**
   * Body param: A user modifiable key-value store used to reference other systems of
   * record for managing live inputs.
   */
  meta?: unknown;

  /**
   * Body param: Records the input to a Cloudflare Stream video. Behavior depends on
   * the mode. In most cases, the video will initially be viewable as a live video
   * and transition to on-demand after a condition is satisfied.
   */
  recording?: LiveInputUpdateParams.Recording;
}

export namespace LiveInputUpdateParams {
  /**
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  export interface Recording {
    /**
     * Lists the origins allowed to display videos created with this input. Enter
     * allowed origin domains in an array and use `*` for wildcard subdomains. An empty
     * array allows videos to be viewed on any origin.
     */
    allowedOrigins?: Array<string>;

    /**
     * Disables reporting the number of live viewers when this property is set to
     * `true`.
     */
    hideLiveViewerCount?: boolean;

    /**
     * Specifies the recording behavior for the live input. Set this value to `off` to
     * prevent a recording. Set the value to `automatic` to begin a recording and
     * transition to on-demand after Stream Live stops receiving input.
     */
    mode?: 'off' | 'automatic';

    /**
     * Indicates if a video using the live input has the `requireSignedURLs` property
     * set. Also enforces access controls on any video recording of the livestream with
     * the live input.
     */
    requireSignedURLs?: boolean;

    /**
     * Determines the amount of time a live input configured in `automatic` mode should
     * wait before a recording transitions from live to on-demand. `0` is recommended
     * for most use cases and indicates the platform default should be used.
     */
    timeoutSeconds?: number;
  }
}

export interface LiveInputListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Includes the total number of videos associated with the submitted
   * query parameters.
   */
  include_counts?: boolean;
}

export interface LiveInputDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface LiveInputGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace LiveInputs {
  export import LiveInput = LiveInputsAPI.LiveInput;
  export import LiveInputListResponse = LiveInputsAPI.LiveInputListResponse;
  export import LiveInputCreateParams = LiveInputsAPI.LiveInputCreateParams;
  export import LiveInputUpdateParams = LiveInputsAPI.LiveInputUpdateParams;
  export import LiveInputListParams = LiveInputsAPI.LiveInputListParams;
  export import LiveInputDeleteParams = LiveInputsAPI.LiveInputDeleteParams;
  export import LiveInputGetParams = LiveInputsAPI.LiveInputGetParams;
  export import Outputs = OutputsAPI.Outputs;
  export import Output = OutputsAPI.Output;
  export import OutputsSinglePage = OutputsAPI.OutputsSinglePage;
  export import OutputCreateParams = OutputsAPI.OutputCreateParams;
  export import OutputUpdateParams = OutputsAPI.OutputUpdateParams;
  export import OutputListParams = OutputsAPI.OutputListParams;
  export import OutputDeleteParams = OutputsAPI.OutputDeleteParams;
}
