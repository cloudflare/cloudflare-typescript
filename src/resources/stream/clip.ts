// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StreamAPI from './stream';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseClip extends APIResource {
  static override readonly _key: readonly ['stream', 'clip'] = Object.freeze(['stream', 'clip'] as const);

  /**
   * Clips a video based on the specified start and end times provided in seconds.
   *
   * @example
   * ```ts
   * const video = await client.stream.clip.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   clippedFromVideoUID: '023e105f4ecef8ad9ca31a8372d0c353',
   *   endTimeSeconds: 0,
   *   startTimeSeconds: 0,
   * });
   * ```
   */
  create(params: ClipCreateParams, options?: RequestOptions): APIPromise<StreamAPI.Video> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/stream/clip`, { body, ...options }) as APIPromise<{
        result: StreamAPI.Video;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Clip extends BaseClip {}

export interface ClipCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The unique video identifier (UID).
   */
  clippedFromVideoUID: string;

  /**
   * Body param: Specifies the end time for the video clip in seconds.
   */
  endTimeSeconds: number;

  /**
   * Body param: Specifies the start time for the video clip in seconds.
   */
  startTimeSeconds: number;

  /**
   * Body param: Lists the origins allowed to display the video. Enter allowed origin
   * domains in an array and use `*` for wildcard subdomains. Empty arrays allow the
   * video to be viewed on any origin.
   */
  allowedOrigins?: Array<StreamAPI.AllowedOriginsParam>;

  /**
   * Body param: A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * Body param: A video's URL. Preferred over 'url'.
   */
  input?: string;

  /**
   * Body param: A user modifiable key-value store used to reference other systems of
   * record for managing videos.
   */
  meta?: unknown;

  /**
   * Body param: A name for the video.
   */
  name?: string;

  /**
   * Body param: Indicates whether the video can be a accessed using the UID. When
   * set to `true`, a signed token must be generated with a signing key to view the
   * video.
   */
  requireSignedURLs?: boolean;

  /**
   * Body param: Indicates the date and time at which the video will be deleted. Omit
   * the field to indicate no change, or include with a `null` value to remove an
   * existing scheduled deletion. If specified, must be at least 30 days from upload
   * time.
   */
  scheduledDeletion?: string;

  /**
   * Body param: The timestamp for a thumbnail image calculated as a percentage value
   * of the video's duration. To convert from a second-wise timestamp to a
   * percentage, divide the desired timestamp by the total duration of the video. If
   * this value is not set, the default thumbnail image is taken from 0s of the
   * video.
   */
  thumbnailTimestampPct?: number;

  /**
   * Body param: A video's URL (legacy field, use 'input' instead).
   */
  url?: string;

  /**
   * Body param
   */
  watermark?: ClipCreateParams.Watermark;
}

export namespace ClipCreateParams {
  export interface Watermark {
    /**
     * The unique identifier for the watermark profile.
     */
    uid?: string;
  }
}

export declare namespace Clip {
  export { type ClipCreateParams as ClipCreateParams };
}
