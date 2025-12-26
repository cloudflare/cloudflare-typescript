// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Livestreams extends APIResource {
  /**
   * Creates a livestream for the given App ID and returns ingest server, stream key,
   * and playback URL. You can pass custom input to the ingest server and stream key,
   * and freely distribute the content using the playback URL on any player that
   * supports HLS/LHLS.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.createIndependentLivestream(
   *     'app_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       name: 'prdmmp-xhycsl',
   *     },
   *   );
   * ```
   */
  createIndependentLivestream(
    appId: string,
    params: LivestreamCreateIndependentLivestreamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamCreateIndependentLivestreamResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/realtime/kit/${appId}/livestreams`, {
      body,
      ...options,
    });
  }

  /**
   * Returns details of all active livestreams for the given livestream ID. Retreive
   * the livestream ID using the `Start livestreaming a meeting` API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.getActiveLivestreamsForLivestreamId(
   *     'app_id',
   *     'livestream_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getActiveLivestreamsForLivestreamId(
    appId: string,
    livestreamId: string,
    params: LivestreamGetActiveLivestreamsForLivestreamIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamGetActiveLivestreamsForLivestreamIDResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/livestreams/${livestreamId}/active-livestream-session`,
      options,
    );
  }

  /**
   * Returns details of livestreams associated with the given App ID. It includes
   * livestreams created by your App and RealtimeKit meetings that are livestreamed
   * by your App. If you only want details of livestreams created by your App and not
   * RealtimeKit meetings, you can use the `exclude_meetings` query parameter.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.getAllLivestreams(
   *     'app_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getAllLivestreams(
    appId: string,
    params: LivestreamGetAllLivestreamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamGetAllLivestreamsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/livestreams`, {
      query,
      ...options,
    });
  }

  /**
   * Returns livestream analytics for the specified time range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.getLivestreamAnalyticsComplete(
   *     'app_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getLivestreamAnalyticsComplete(
    appId: string,
    params: LivestreamGetLivestreamAnalyticsCompleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamGetLivestreamAnalyticsCompleteResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/analytics/livestreams/overall`, {
      query,
      ...options,
    });
  }

  /**
   * Returns livestream session details for the given livestream session ID. Retrieve
   * the `livestream_session_id`using the
   * `Fetch livestream session details using a session ID` API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.getLivestreamSessionDetailsForSessionId(
   *     'app_id',
   *     'livestream-session-id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getLivestreamSessionDetailsForSessionId(
    appId: string,
    livestreamSessionId: string,
    params: LivestreamGetLivestreamSessionDetailsForSessionIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamGetLivestreamSessionDetailsForSessionIDResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/livestreams/sessions/${livestreamSessionId}`,
      options,
    );
  }

  /**
   * Returns details of a livestream with sessions for the given livestream ID.
   * Retreive the livestream ID using the `Start livestreaming a meeting` API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.getLivestreamSessionForLivestreamId(
   *     'app_id',
   *     'livestream_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getLivestreamSessionForLivestreamId(
    appId: string,
    livestreamId: string,
    params: LivestreamGetLivestreamSessionForLivestreamIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamGetLivestreamSessionForLivestreamIDResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/livestreams/${livestreamId}`, {
      query,
      ...options,
    });
  }

  /**
   * Returns details of all active livestreams for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.getMeetingActiveLivestreams(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getMeetingActiveLivestreams(
    appId: string,
    meetingId: string,
    params: LivestreamGetMeetingActiveLivestreamsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamGetMeetingActiveLivestreamsResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/active-livestream`,
      options,
    );
  }

  /**
   * Returns day-wise session and recording analytics data of an App for the
   * specified time range start_date to end_date. If start_date and end_date are not
   * provided, the default time range is set from 30 days ago to the current date.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.getOrgAnalytics(
   *     'app_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getOrgAnalytics(
    appId: string,
    params: LivestreamGetOrgAnalyticsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamGetOrgAnalyticsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/analytics/daywise`, {
      query,
      ...options,
    });
  }

  /**
   * Starts livestream of a meeting associated with the given meeting ID. Retreive
   * the meeting ID using the `Create a meeting` API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.startLivestreamingAMeeting(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       name: 'prdmmp-xhycsl',
   *     },
   *   );
   * ```
   */
  startLivestreamingAMeeting(
    appId: string,
    meetingId: string,
    params: LivestreamStartLivestreamingAMeetingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamStartLivestreamingAMeetingResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/livestreams`,
      { body, ...options },
    );
  }

  /**
   * Stops the active livestream of a meeting associated with the given meeting ID.
   * Retreive the meeting ID using the `Create a meeting` API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.livestreams.stopLivestreamingAMeeting(
   *     'app_id',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  stopLivestreamingAMeeting(
    appId: string,
    meetingId: string,
    params: LivestreamStopLivestreamingAMeetingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LivestreamStopLivestreamingAMeetingResponse> {
    const { account_id } = params;
    return this._client.post(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/active-livestream/stop`,
      options,
    );
  }
}

export interface LivestreamCreateIndependentLivestreamResponse {
  data?: LivestreamCreateIndependentLivestreamResponse.Data;

  success?: boolean;
}

export namespace LivestreamCreateIndependentLivestreamResponse {
  export interface Data {
    /**
     * The livestream ID.
     */
    id?: string;

    /**
     * Specifies if the livestream was disabled.
     */
    disabled?: boolean;

    /**
     * The server URL to which the RTMP encoder should send the video and audio data.
     */
    ingest_server?: string;

    meeting_id?: string | null;

    name?: string;

    /**
     * The web address that viewers can use to watch the livestream.
     */
    playback_url?: string;

    status?: 'LIVE' | 'IDLE' | 'ERRORED' | 'INVOKED';

    /**
     * Unique key for accessing each livestream.
     */
    stream_key?: string;
  }
}

export interface LivestreamGetActiveLivestreamsForLivestreamIDResponse {
  data?: LivestreamGetActiveLivestreamsForLivestreamIDResponse.Data;

  success?: boolean;
}

export namespace LivestreamGetActiveLivestreamsForLivestreamIDResponse {
  export interface Data {
    livestream?: Data.Livestream;

    session?: Data.Session;
  }

  export namespace Data {
    export interface Livestream {
      id?: string;

      /**
       * Timestamp the object was created at. The time is returned in ISO format.
       */
      created_at?: string;

      /**
       * Specifies if the livestream was disabled.
       */
      disabled?: string;

      /**
       * The server URL to which the RTMP encoder sends the video and audio data.
       */
      ingest_server?: string;

      /**
       * ID of the meeting.
       */
      meeting_id?: string;

      /**
       * Name of the livestream.
       */
      name?: string;

      /**
       * The web address that viewers can use to watch the livestream.
       */
      playback_url?: string;

      status?: 'LIVE' | 'IDLE' | 'ERRORED' | 'INVOKED';

      /**
       * Unique key for accessing each livestream.
       */
      stream_key?: string;

      /**
       * Timestamp the object was updated at. The time is returned in ISO format.
       */
      updated_at?: string;
    }

    export interface Session {
      id?: string;

      /**
       * Timestamp the object was created at. The time is returned in ISO format.
       */
      created_at?: string;

      err_message?: string;

      /**
       * The time duration for which the input was given or the meeting was streamed.
       */
      ingest_seconds?: string;

      /**
       * Timestamp the object was invoked. The time is returned in ISO format.
       */
      invoked_time?: string;

      livestream_id?: string;

      /**
       * Timestamp the object was started. The time is returned in ISO format.
       */
      started_time?: string;

      /**
       * Timestamp the object was stopped. The time is returned in ISO format.
       */
      stopped_time?: string;

      /**
       * Timestamp the object was updated at. The time is returned in ISO format.
       */
      updated_at?: string;

      /**
       * The total view time for which the viewers watched the stream.
       */
      viewer_seconds?: string;
    }
  }
}

export interface LivestreamGetAllLivestreamsResponse {
  data?: LivestreamGetAllLivestreamsResponse.Data;

  success?: boolean;
}

export namespace LivestreamGetAllLivestreamsResponse {
  export interface Data {
    /**
     * The ID of the livestream.
     */
    id?: string;

    /**
     * Timestamp the object was created at. The time is returned in ISO format.
     */
    created_at?: string;

    /**
     * Specifies if the livestream was disabled.
     */
    disabled?: string;

    /**
     * The server URL to which the RTMP encoder sends the video and audio data.
     */
    ingest_server?: string;

    /**
     * ID of the meeting.
     */
    meeting_id?: string;

    /**
     * Name of the livestream.
     */
    name?: string;

    paging?: Data.Paging;

    /**
     * The web address that viewers can use to watch the livestream.
     */
    playback_url?: string;

    status?: 'LIVE' | 'IDLE' | 'ERRORED' | 'INVOKED';

    /**
     * Unique key for accessing each livestream.
     */
    stream_key?: string;

    /**
     * Timestamp the object was updated at. The time is returned in ISO format.
     */
    updated_at?: string;
  }

  export namespace Data {
    export interface Paging {
      end_offset?: number;

      start_offset?: number;

      total_count?: number;
    }
  }
}

export interface LivestreamGetLivestreamAnalyticsCompleteResponse {
  data?: LivestreamGetLivestreamAnalyticsCompleteResponse.Data;

  success?: boolean;
}

export namespace LivestreamGetLivestreamAnalyticsCompleteResponse {
  export interface Data {
    /**
     * Count of total livestreams.
     */
    count?: number;

    /**
     * Total time duration for which the input was given or the meeting was streamed.
     */
    total_ingest_seconds?: number;

    /**
     * Total view time for which the viewers watched the stream.
     */
    total_viewer_seconds?: number;
  }
}

export interface LivestreamGetLivestreamSessionDetailsForSessionIDResponse {
  data?: LivestreamGetLivestreamSessionDetailsForSessionIDResponse.Data;

  success?: boolean;
}

export namespace LivestreamGetLivestreamSessionDetailsForSessionIDResponse {
  export interface Data {
    /**
     * The livestream ID.
     */
    id?: string;

    /**
     * Timestamp the object was created at. The time is returned in ISO format.
     */
    created_at?: string;

    /**
     * The server URL to which the RTMP encoder sends the video and audio data.
     */
    err_message?: string;

    /**
     * Name of the livestream.
     */
    ingest_seconds?: number;

    livestream_id?: string;

    /**
     * Unique key for accessing each livestream.
     */
    started_time?: string;

    /**
     * The web address that viewers can use to watch the livestream.
     */
    stopped_time?: string;

    /**
     * Timestamp the object was updated at. The time is returned in ISO format.
     */
    updated_at?: string;

    /**
     * Specifies if the livestream was disabled.
     */
    viewer_seconds?: number;
  }
}

export interface LivestreamGetLivestreamSessionForLivestreamIDResponse {
  data?: LivestreamGetLivestreamSessionForLivestreamIDResponse.Data;

  success?: boolean;
}

export namespace LivestreamGetLivestreamSessionForLivestreamIDResponse {
  export interface Data {
    livestream?: Data.Livestream;

    paging?: Data.Paging;

    session?: Data.Session;
  }

  export namespace Data {
    export interface Livestream {
      /**
       * ID of the livestream.
       */
      id?: string;

      /**
       * Timestamp the object was created at. The time is returned in ISO format.
       */
      created_at?: string;

      /**
       * Specifies if the livestream was disabled.
       */
      disabled?: string;

      /**
       * The server URL to which the RTMP encoder sends the video and audio data.
       */
      ingest_server?: string;

      /**
       * The ID of the meeting.
       */
      meeting_id?: string;

      /**
       * Name of the livestream.
       */
      name?: string;

      /**
       * The web address that viewers can use to watch the livestream.
       */
      playback_url?: string;

      status?: 'LIVE' | 'IDLE' | 'ERRORED' | 'INVOKED';

      /**
       * Unique key for accessing each livestream.
       */
      stream_key?: string;

      /**
       * Timestamp the object was updated at. The time is returned in ISO format.
       */
      updated_at?: string;
    }

    export interface Paging {
      end_offset?: number;

      start_offset?: number;

      total_count?: number;
    }

    export interface Session {
      /**
       * ID of the session.
       */
      id?: string;

      /**
       * Timestamp the object was created at. The time is returned in ISO format.
       */
      created_at?: string;

      err_message?: string;

      /**
       * The time duration for which the input was given or the meeting was streamed.
       */
      ingest_seconds?: number;

      /**
       * Timestamp the object was invoked. The time is returned in ISO format.
       */
      invoked_time?: string;

      livestream_id?: string;

      /**
       * Timestamp the object was started. The time is returned in ISO format.
       */
      started_time?: string;

      /**
       * Timestamp the object was stopped. The time is returned in ISO format.
       */
      stopped_time?: string;

      /**
       * Timestamp the object was updated at. The time is returned in ISO format.
       */
      updated_at?: string;

      /**
       * The total view time for which the viewers watched the stream.
       */
      viewer_seconds?: number;
    }
  }
}

export interface LivestreamGetMeetingActiveLivestreamsResponse {
  data?: LivestreamGetMeetingActiveLivestreamsResponse.Data;

  success?: boolean;
}

export namespace LivestreamGetMeetingActiveLivestreamsResponse {
  export interface Data {
    /**
     * The livestream ID.
     */
    id?: string;

    /**
     * Timestamp the object was created at. The time is returned in ISO format.
     */
    created_at?: string;

    /**
     * Specifies if the livestream was disabled.
     */
    disabled?: string;

    /**
     * The server URL to which the RTMP encoder sends the video and audio data.
     */
    ingest_server?: string;

    meeting_id?: string;

    /**
     * Name of the livestream.
     */
    name?: string | null;

    /**
     * The web address that viewers can use to watch the livestream.
     */
    playback_url?: string;

    status?: 'LIVE' | 'IDLE' | 'ERRORED' | 'INVOKED';

    /**
     * Unique key for accessing each livestream.
     */
    stream_key?: string;

    /**
     * Timestamp the object was updated at. The time is returned in ISO format.
     */
    updated_at?: string;
  }
}

export interface LivestreamGetOrgAnalyticsResponse {
  data?: LivestreamGetOrgAnalyticsResponse.Data;

  success?: boolean;
}

export namespace LivestreamGetOrgAnalyticsResponse {
  export interface Data {
    /**
     * Recording statistics of an App during the range specified
     */
    recording_stats?: Data.RecordingStats;

    /**
     * Session statistics of an App during the range specified
     */
    session_stats?: Data.SessionStats;
  }

  export namespace Data {
    /**
     * Recording statistics of an App during the range specified
     */
    export interface RecordingStats {
      /**
       * Day wise recording stats
       */
      day_stats?: Array<RecordingStats.DayStat>;

      /**
       * Total number of recordings during the range specified
       */
      recording_count?: number;

      /**
       * Total recording minutes during the range specified
       */
      recording_minutes_consumed?: number;
    }

    export namespace RecordingStats {
      export interface DayStat {
        day?: string;

        /**
         * Total recording minutes for a specific day
         */
        total_recording_minutes?: number;

        /**
         * Total number of recordings for a specific day
         */
        total_recordings?: number;
      }
    }

    /**
     * Session statistics of an App during the range specified
     */
    export interface SessionStats {
      /**
       * Day wise session stats
       */
      day_stats?: Array<SessionStats.DayStat>;

      /**
       * Total number of sessions during the range specified
       */
      sessions_count?: number;

      /**
       * Total session minutes during the range specified
       */
      sessions_minutes_consumed?: number;
    }

    export namespace SessionStats {
      export interface DayStat {
        day?: string;

        /**
         * Total session minutes for a specific day
         */
        total_session_minutes?: number;

        /**
         * Total number of sessions for a specific day
         */
        total_sessions?: number;
      }
    }
  }
}

export interface LivestreamStartLivestreamingAMeetingResponse {
  data?: LivestreamStartLivestreamingAMeetingResponse.Data;

  success?: boolean;
}

export namespace LivestreamStartLivestreamingAMeetingResponse {
  export interface Data {
    /**
     * The livestream ID.
     */
    id?: string;

    /**
     * The server URL to which the RTMP encoder sends the video and audio data.
     */
    ingest_server?: string;

    /**
     * The web address that viewers can use to watch the livestream.
     */
    playback_url?: string;

    status?: 'LIVE' | 'IDLE' | 'ERRORED' | 'INVOKED';

    /**
     * Unique key for accessing each livestream.
     */
    stream_key?: string;
  }
}

export interface LivestreamStopLivestreamingAMeetingResponse {
  data?: LivestreamStopLivestreamingAMeetingResponse.Data;

  success?: boolean;
}

export namespace LivestreamStopLivestreamingAMeetingResponse {
  export interface Data {
    message?: string;
  }
}

export interface LivestreamCreateIndependentLivestreamParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Name of the livestream
   */
  name?: string | null;
}

export interface LivestreamGetActiveLivestreamsForLivestreamIDParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface LivestreamGetAllLivestreamsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Specify the end time range in ISO format to access the live stream.
   */
  end_time?: string;

  /**
   * Query param: Exclude the RealtimeKit meetings that are livestreamed.
   */
  exclude_meetings?: boolean;

  /**
   * Query param: The page number from which you want your page search results to be
   * displayed.
   */
  page_no?: number;

  /**
   * Query param: Number of results per page.
   */
  per_page?: number;

  /**
   * Query param: Specifies the sorting order for the results.
   */
  sort_order?: 'ASC' | 'DSC';

  /**
   * Query param: Specify the start time range in ISO format to access the live
   * stream.
   */
  start_time?: string;

  /**
   * Query param: Specifies the status of the operation.
   */
  status?: 'LIVE' | 'IDLE' | 'ERRORED' | 'INVOKED';
}

export interface LivestreamGetLivestreamAnalyticsCompleteParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Specify the end time range in ISO format to access the livestream
   * analytics.
   */
  end_time?: string;

  /**
   * Query param: Specify the start time range in ISO format to access the livestream
   * analytics.
   */
  start_time?: string;
}

export interface LivestreamGetLivestreamSessionDetailsForSessionIDParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface LivestreamGetLivestreamSessionForLivestreamIDParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: The page number from which you want your page search results to be
   * displayed.
   */
  page_no?: number;

  /**
   * Query param: Number of results per page.
   */
  per_page?: number;
}

export interface LivestreamGetMeetingActiveLivestreamsParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface LivestreamGetOrgAnalyticsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: end date in YYYY-MM-DD format
   */
  end_date?: string;

  /**
   * Query param: start date in YYYY-MM-DD format
   */
  start_date?: string;
}

export interface LivestreamStartLivestreamingAMeetingParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  name?: string | null;

  /**
   * Body param:
   */
  video_config?: LivestreamStartLivestreamingAMeetingParams.VideoConfig;
}

export namespace LivestreamStartLivestreamingAMeetingParams {
  export interface VideoConfig {
    /**
     * Height of the livestreaming video in pixels
     */
    height?: number;

    /**
     * Width of the livestreaming video in pixels
     */
    width?: number;
  }
}

export interface LivestreamStopLivestreamingAMeetingParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export declare namespace Livestreams {
  export {
    type LivestreamCreateIndependentLivestreamResponse as LivestreamCreateIndependentLivestreamResponse,
    type LivestreamGetActiveLivestreamsForLivestreamIDResponse as LivestreamGetActiveLivestreamsForLivestreamIDResponse,
    type LivestreamGetAllLivestreamsResponse as LivestreamGetAllLivestreamsResponse,
    type LivestreamGetLivestreamAnalyticsCompleteResponse as LivestreamGetLivestreamAnalyticsCompleteResponse,
    type LivestreamGetLivestreamSessionDetailsForSessionIDResponse as LivestreamGetLivestreamSessionDetailsForSessionIDResponse,
    type LivestreamGetLivestreamSessionForLivestreamIDResponse as LivestreamGetLivestreamSessionForLivestreamIDResponse,
    type LivestreamGetMeetingActiveLivestreamsResponse as LivestreamGetMeetingActiveLivestreamsResponse,
    type LivestreamGetOrgAnalyticsResponse as LivestreamGetOrgAnalyticsResponse,
    type LivestreamStartLivestreamingAMeetingResponse as LivestreamStartLivestreamingAMeetingResponse,
    type LivestreamStopLivestreamingAMeetingResponse as LivestreamStopLivestreamingAMeetingResponse,
    type LivestreamCreateIndependentLivestreamParams as LivestreamCreateIndependentLivestreamParams,
    type LivestreamGetActiveLivestreamsForLivestreamIDParams as LivestreamGetActiveLivestreamsForLivestreamIDParams,
    type LivestreamGetAllLivestreamsParams as LivestreamGetAllLivestreamsParams,
    type LivestreamGetLivestreamAnalyticsCompleteParams as LivestreamGetLivestreamAnalyticsCompleteParams,
    type LivestreamGetLivestreamSessionDetailsForSessionIDParams as LivestreamGetLivestreamSessionDetailsForSessionIDParams,
    type LivestreamGetLivestreamSessionForLivestreamIDParams as LivestreamGetLivestreamSessionForLivestreamIDParams,
    type LivestreamGetMeetingActiveLivestreamsParams as LivestreamGetMeetingActiveLivestreamsParams,
    type LivestreamGetOrgAnalyticsParams as LivestreamGetOrgAnalyticsParams,
    type LivestreamStartLivestreamingAMeetingParams as LivestreamStartLivestreamingAMeetingParams,
    type LivestreamStopLivestreamingAMeetingParams as LivestreamStopLivestreamingAMeetingParams,
  };
}
