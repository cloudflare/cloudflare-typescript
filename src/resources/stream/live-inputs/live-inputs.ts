// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LiveInputsAPI from 'cloudflare/resources/stream/live-inputs/live-inputs';
import * as OutputsAPI from 'cloudflare/resources/stream/live-inputs/outputs';

export class LiveInputs extends APIResource {
  outputs: OutputsAPI.Outputs = new OutputsAPI.Outputs(this._client);

  /**
   * Creates a live input, and returns credentials that you or your users can use to
   * stream live video to Cloudflare Stream.
   */
  create(
    accountId: string,
    body: LiveInputCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/stream/live_inputs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LiveInputCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the live inputs created for an account. To get the credentials needed to
   * stream to a specific live input, request a single live input.
   */
  list(
    accountId: string,
    query?: LiveInputListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<LiveInputListResponse>;
  list(
    accountId: string,
    query: LiveInputListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/stream/live_inputs`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: LiveInputListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Prevents a live input from being streamed to and makes the live input
   * inaccessible to any future API calls.
   */
  delete(
    accountId: string,
    liveInputIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieves details of an existing live input.
   */
  get(
    accountId: string,
    liveInputIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: LiveInputGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a specified live input.
   */
  replace(
    accountId: string,
    liveInputIdentifier: string,
    body: LiveInputReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/stream/live_inputs/${liveInputIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LiveInputReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Details about a live input.
 */
export interface LiveInputCreateResponse {
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
  recording?: LiveInputCreateResponse.Recording;

  /**
   * Details for streaming to an live input using RTMPS.
   */
  rtmps?: LiveInputCreateResponse.Rtmps;

  /**
   * Details for playback from an live input using RTMPS.
   */
  rtmpsPlayback?: LiveInputCreateResponse.RtmpsPlayback;

  /**
   * Details for streaming to a live input using SRT.
   */
  srt?: LiveInputCreateResponse.Srt;

  /**
   * Details for playback from an live input using SRT.
   */
  srtPlayback?: LiveInputCreateResponse.SrtPlayback;

  /**
   * The connection status of a live input.
   */
  status?:
    | 'connected'
    | 'reconnected'
    | 'reconnecting'
    | 'client_disconnect'
    | 'ttl_exceeded'
    | 'failed_to_connect'
    | 'failed_to_reconnect'
    | 'new_configuration_accepted'
    | null;

  /**
   * A unique identifier for a live input.
   */
  uid?: string;

  /**
   * Details for streaming to a live input using WebRTC.
   */
  webRTC?: LiveInputCreateResponse.WebRtc;

  /**
   * Details for playback from a live input using WebRTC.
   */
  webRTCPlayback?: LiveInputCreateResponse.WebRtcPlayback;
}

export namespace LiveInputCreateResponse {
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

/**
 * Details about a live input.
 */
export interface LiveInputGetResponse {
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
  recording?: LiveInputGetResponse.Recording;

  /**
   * Details for streaming to an live input using RTMPS.
   */
  rtmps?: LiveInputGetResponse.Rtmps;

  /**
   * Details for playback from an live input using RTMPS.
   */
  rtmpsPlayback?: LiveInputGetResponse.RtmpsPlayback;

  /**
   * Details for streaming to a live input using SRT.
   */
  srt?: LiveInputGetResponse.Srt;

  /**
   * Details for playback from an live input using SRT.
   */
  srtPlayback?: LiveInputGetResponse.SrtPlayback;

  /**
   * The connection status of a live input.
   */
  status?:
    | 'connected'
    | 'reconnected'
    | 'reconnecting'
    | 'client_disconnect'
    | 'ttl_exceeded'
    | 'failed_to_connect'
    | 'failed_to_reconnect'
    | 'new_configuration_accepted'
    | null;

  /**
   * A unique identifier for a live input.
   */
  uid?: string;

  /**
   * Details for streaming to a live input using WebRTC.
   */
  webRTC?: LiveInputGetResponse.WebRtc;

  /**
   * Details for playback from a live input using WebRTC.
   */
  webRTCPlayback?: LiveInputGetResponse.WebRtcPlayback;
}

export namespace LiveInputGetResponse {
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

/**
 * Details about a live input.
 */
export interface LiveInputReplaceResponse {
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
  recording?: LiveInputReplaceResponse.Recording;

  /**
   * Details for streaming to an live input using RTMPS.
   */
  rtmps?: LiveInputReplaceResponse.Rtmps;

  /**
   * Details for playback from an live input using RTMPS.
   */
  rtmpsPlayback?: LiveInputReplaceResponse.RtmpsPlayback;

  /**
   * Details for streaming to a live input using SRT.
   */
  srt?: LiveInputReplaceResponse.Srt;

  /**
   * Details for playback from an live input using SRT.
   */
  srtPlayback?: LiveInputReplaceResponse.SrtPlayback;

  /**
   * The connection status of a live input.
   */
  status?:
    | 'connected'
    | 'reconnected'
    | 'reconnecting'
    | 'client_disconnect'
    | 'ttl_exceeded'
    | 'failed_to_connect'
    | 'failed_to_reconnect'
    | 'new_configuration_accepted'
    | null;

  /**
   * A unique identifier for a live input.
   */
  uid?: string;

  /**
   * Details for streaming to a live input using WebRTC.
   */
  webRTC?: LiveInputReplaceResponse.WebRtc;

  /**
   * Details for playback from a live input using WebRTC.
   */
  webRTCPlayback?: LiveInputReplaceResponse.WebRtcPlayback;
}

export namespace LiveInputReplaceResponse {
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

export interface LiveInputCreateParams {
  /**
   * Sets the creator ID asssociated with this live input.
   */
  defaultCreator?: string;

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
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
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
   * Includes the total number of videos associated with the submitted query
   * parameters.
   */
  include_counts?: boolean;
}

export interface LiveInputReplaceParams {
  /**
   * Sets the creator ID asssociated with this live input.
   */
  defaultCreator?: string;

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
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  recording?: LiveInputReplaceParams.Recording;
}

export namespace LiveInputReplaceParams {
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

export namespace LiveInputs {
  export import LiveInputCreateResponse = LiveInputsAPI.LiveInputCreateResponse;
  export import LiveInputListResponse = LiveInputsAPI.LiveInputListResponse;
  export import LiveInputGetResponse = LiveInputsAPI.LiveInputGetResponse;
  export import LiveInputReplaceResponse = LiveInputsAPI.LiveInputReplaceResponse;
  export import LiveInputCreateParams = LiveInputsAPI.LiveInputCreateParams;
  export import LiveInputListParams = LiveInputsAPI.LiveInputListParams;
  export import LiveInputReplaceParams = LiveInputsAPI.LiveInputReplaceParams;
  export import Outputs = OutputsAPI.Outputs;
  export import OutputCreateResponse = OutputsAPI.OutputCreateResponse;
  export import OutputListResponse = OutputsAPI.OutputListResponse;
  export import OutputReplaceResponse = OutputsAPI.OutputReplaceResponse;
  export import OutputCreateParams = OutputsAPI.OutputCreateParams;
  export import OutputReplaceParams = OutputsAPI.OutputReplaceParams;
}
