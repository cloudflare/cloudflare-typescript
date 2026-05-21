// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSessions extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'sessions'] = Object.freeze([
    'realtimeKit',
    'sessions',
  ] as const);

  /**
   * Trigger Summary generation of Transcripts for the session ID.
   *
   * @example
   * ```ts
   * await client.realtimeKit.sessions.generateSummaryOfTranscripts(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     app_id: 'app_id',
   *   },
   * );
   * ```
   */
  generateSummaryOfTranscripts(
    sessionID: string,
    params: SessionGenerateSummaryOfTranscriptsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id, app_id } = params;
    return this._client.post(
      path`/accounts/${account_id}/realtime/kit/${app_id}/sessions/${sessionID}/summary`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Returns details of the given peer ID along with call statistics for the given
   * session ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getParticipantDataFromPeerID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       app_id: 'app_id',
   *     },
   *   );
   * ```
   */
  getParticipantDataFromPeerID(
    peerID: string,
    params: SessionGetParticipantDataFromPeerIDParams,
    options?: RequestOptions,
  ): APIPromise<SessionGetParticipantDataFromPeerIDResponse> {
    const { account_id, app_id, ...query } = params;
    return this._client.get(
      path`/accounts/${account_id}/realtime/kit/${app_id}/sessions/peer-report/${peerID}`,
      { query, ...options },
    );
  }

  /**
   * Returns a URL to download all chat messages of the session ID in CSV format.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionChat(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       app_id: 'app_id',
   *     },
   *   );
   * ```
   */
  getSessionChat(
    sessionID: string,
    params: SessionGetSessionChatParams,
    options?: RequestOptions,
  ): APIPromise<SessionGetSessionChatResponse> {
    const { account_id, app_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/realtime/kit/${app_id}/sessions/${sessionID}/chat`,
      options,
    );
  }

  /**
   * Returns data of the given session ID including recording details.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionDetails(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       app_id: 'app_id',
   *     },
   *   );
   * ```
   */
  getSessionDetails(
    sessionID: string,
    params: SessionGetSessionDetailsParams,
    options?: RequestOptions,
  ): APIPromise<SessionGetSessionDetailsResponse> {
    const { account_id, app_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/realtime/kit/${app_id}/sessions/${sessionID}`, {
      query,
      ...options,
    });
  }

  /**
   * Returns details of the given participant ID along with call statistics for the
   * given session ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionParticipantDetails(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       app_id: 'app_id',
   *       session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  getSessionParticipantDetails(
    participantID: string,
    params: SessionGetSessionParticipantDetailsParams,
    options?: RequestOptions,
  ): APIPromise<SessionGetSessionParticipantDetailsResponse> {
    const { account_id, app_id, session_id, ...query } = params;
    return this._client.get(
      path`/accounts/${account_id}/realtime/kit/${app_id}/sessions/${session_id}/participants/${participantID}`,
      { query, ...options },
    );
  }

  /**
   * Returns a list of participants for the given session ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionParticipants(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       app_id: 'app_id',
   *     },
   *   );
   * ```
   */
  getSessionParticipants(
    sessionID: string,
    params: SessionGetSessionParticipantsParams,
    options?: RequestOptions,
  ): APIPromise<SessionGetSessionParticipantsResponse> {
    const { account_id, app_id, ...query } = params;
    return this._client.get(
      path`/accounts/${account_id}/realtime/kit/${app_id}/sessions/${sessionID}/participants`,
      { query, ...options },
    );
  }

  /**
   * Returns a Summary URL to download the Summary of Transcripts for the session ID
   * as plain text.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionSummary(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       app_id: 'app_id',
   *     },
   *   );
   * ```
   */
  getSessionSummary(
    sessionID: string,
    params: SessionGetSessionSummaryParams,
    options?: RequestOptions,
  ): APIPromise<SessionGetSessionSummaryResponse> {
    const { account_id, app_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/realtime/kit/${app_id}/sessions/${sessionID}/summary`,
      options,
    );
  }

  /**
   * Returns a URL to download the transcript for the session ID in CSV format.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessionTranscripts(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       app_id: 'app_id',
   *     },
   *   );
   * ```
   */
  getSessionTranscripts(
    sessionID: string,
    params: SessionGetSessionTranscriptsParams,
    options?: RequestOptions,
  ): APIPromise<SessionGetSessionTranscriptsResponse> {
    const { account_id, app_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/realtime/kit/${app_id}/sessions/${sessionID}/transcript`,
      options,
    );
  }

  /**
   * Returns details of all sessions of an App.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.sessions.getSessions('app_id', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  getSessions(
    appID: string,
    params: SessionGetSessionsParams,
    options?: RequestOptions,
  ): APIPromise<SessionGetSessionsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/realtime/kit/${appID}/sessions`, {
      query,
      ...options,
    });
  }
}
export class Sessions extends BaseSessions {}

export interface SessionGetParticipantDataFromPeerIDResponse {
  data?: SessionGetParticipantDataFromPeerIDResponse.Data;

  success?: boolean;
}

export namespace SessionGetParticipantDataFromPeerIDResponse {
  export interface Data {
    /**
     * Participant ID. This maps to the corresponding peerId.
     */
    id?: string;

    /**
     * timestamp when this participant was created.
     */
    created_at?: string;

    /**
     * ID passed by client to create this participant.
     */
    custom_participant_id?: string;

    /**
     * Display name of participant when joining the session.
     */
    display_name?: string;

    /**
     * number of minutes for which the participant was in the session.
     */
    duration?: number;

    /**
     * timestamp at which participant joined the session.
     */
    joined_at?: string;

    /**
     * timestamp at which participant left the session.
     */
    left_at?: string;

    peer_events?: Array<{ [key: string]: unknown }>;

    /**
     * Peer call statistics report.
     */
    peer_report?: Data.PeerReport;

    /**
     * Name of the preset associated with the participant.
     */
    preset_name?: string;

    session_id?: string;

    /**
     * timestamp when this participant's data was last updated.
     */
    updated_at?: string;

    /**
     * User id for this participant.
     */
    user_id?: string;
  }

  export namespace Data {
    /**
     * Peer call statistics report.
     */
    export interface PeerReport {
      metadata?: { [key: string]: unknown };

      quality?: { [key: string]: unknown };

      [k: string]: unknown;
    }
  }
}

export interface SessionGetSessionChatResponse {
  data?: SessionGetSessionChatResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionChatResponse {
  export interface Data {
    /**
     * URL where the chat logs can be downloaded
     */
    chat_download_url: string;

    /**
     * Time when the download URL will expire
     */
    chat_download_url_expiry: string;
  }
}

export interface SessionGetSessionDetailsResponse {
  data?: SessionGetSessionDetailsResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionDetailsResponse {
  export interface Data {
    /**
     * ID of the session
     */
    id: string;

    /**
     * ID of the meeting this session is associated with. In the case of V2 meetings,
     * it is always a UUID. In V1 meetings, it is a room name of the form
     * `abcdef-ghijkl`
     */
    associated_id: string;

    /**
     * timestamp when session created
     */
    created_at: string;

    /**
     * number of participants currently in the session
     */
    live_participants: number;

    /**
     * number of maximum participants that were in the session
     */
    max_concurrent_participants: number;

    /**
     * Title of the meeting this session belongs to
     */
    meeting_display_name: string;

    /**
     * number of minutes consumed since the session started
     */
    minutes_consumed: number;

    /**
     * App id that hosted this session
     */
    organization_id: string;

    /**
     * timestamp when session started
     */
    started_at: string;

    /**
     * current status of session
     */
    status: 'LIVE' | 'ENDED';

    /**
     * type of session
     */
    type: 'meeting' | 'livestream' | 'participant';

    /**
     * timestamp when session was last updated
     */
    updated_at: string;

    breakout_rooms?: Array<unknown>;

    /**
     * timestamp when session ended
     */
    ended_at?: string;

    /**
     * Any meta data about session.
     */
    meta?: unknown;
  }
}

export interface SessionGetSessionParticipantDetailsResponse {
  data?: SessionGetSessionParticipantDetailsResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionParticipantDetailsResponse {
  export interface Data {
    participant?: Data.Participant;
  }

  export namespace Data {
    export interface Participant {
      /**
       * Participant ID. This maps to the corresponding peerId.
       */
      id?: string;

      /**
       * timestamp when this participant was created.
       */
      created_at?: string;

      /**
       * ID passed by client to create this participant.
       */
      custom_participant_id?: string;

      /**
       * Display name of participant when joining the session.
       */
      display_name?: string;

      /**
       * number of minutes for which the participant was in the session.
       */
      duration?: number;

      /**
       * timestamp at which participant joined the session.
       */
      joined_at?: string;

      /**
       * timestamp at which participant left the session.
       */
      left_at?: string;

      /**
       * Name of the preset associated with the participant.
       */
      preset_name?: string;

      /**
       * timestamp when this participant's data was last updated.
       */
      updated_at?: string;

      /**
       * User id for this participant.
       */
      user_id?: string;
    }
  }
}

export interface SessionGetSessionParticipantsResponse {
  data?: SessionGetSessionParticipantsResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionParticipantsResponse {
  export interface Data {
    participants?: Array<Data.Participant>;
  }

  export namespace Data {
    export interface Participant {
      /**
       * Participant ID. This maps to the corresponding peerId.
       */
      id?: string;

      /**
       * timestamp when this participant was created.
       */
      created_at?: string;

      /**
       * ID passed by client to create this participant.
       */
      custom_participant_id?: string;

      /**
       * Display name of participant when joining the session.
       */
      display_name?: string;

      /**
       * number of minutes for which the participant was in the session.
       */
      duration?: number;

      /**
       * timestamp at which participant joined the session.
       */
      joined_at?: string;

      /**
       * timestamp at which participant left the session.
       */
      left_at?: string;

      /**
       * Name of the preset associated with the participant.
       */
      preset_name?: string;

      /**
       * timestamp when this participant's data was last updated.
       */
      updated_at?: string;

      /**
       * User id for this participant.
       */
      user_id?: string;
    }
  }
}

export interface SessionGetSessionSummaryResponse {
  data?: SessionGetSessionSummaryResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionSummaryResponse {
  export interface Data {
    sessionId: string;

    /**
     * URL where the summary of transcripts can be downloaded
     */
    summaryDownloadUrl: string;

    /**
     * Time of Expiry before when you need to download the csv file.
     */
    summaryDownloadUrlExpiry: string;
  }
}

export interface SessionGetSessionTranscriptsResponse {
  data?: SessionGetSessionTranscriptsResponse.Data;

  success?: boolean;
}

export namespace SessionGetSessionTranscriptsResponse {
  export interface Data {
    sessionId: string;

    /**
     * URL where the transcript can be downloaded
     */
    transcript_download_url: string;

    /**
     * Time when the download URL will expire
     */
    transcript_download_url_expiry: string;
  }
}

export interface SessionGetSessionsResponse {
  data?: SessionGetSessionsResponse.Data;

  paging?: SessionGetSessionsResponse.Paging;

  success?: boolean;
}

export namespace SessionGetSessionsResponse {
  export interface Data {
    sessions?: Array<Data.Session>;
  }

  export namespace Data {
    export interface Session {
      /**
       * ID of the session
       */
      id: string;

      /**
       * ID of the meeting this session is associated with. In the case of V2 meetings,
       * it is always a UUID. In V1 meetings, it is a room name of the form
       * `abcdef-ghijkl`
       */
      associated_id: string;

      /**
       * timestamp when session created
       */
      created_at: string;

      /**
       * number of participants currently in the session
       */
      live_participants: number;

      /**
       * number of maximum participants that were in the session
       */
      max_concurrent_participants: number;

      /**
       * Title of the meeting this session belongs to
       */
      meeting_display_name: string;

      /**
       * number of minutes consumed since the session started
       */
      minutes_consumed: number;

      /**
       * App id that hosted this session
       */
      organization_id: string;

      /**
       * timestamp when session started
       */
      started_at: string;

      /**
       * current status of session
       */
      status: 'LIVE' | 'ENDED';

      /**
       * type of session
       */
      type: 'meeting' | 'livestream' | 'participant';

      /**
       * timestamp when session was last updated
       */
      updated_at: string;

      breakout_rooms?: Array<unknown>;

      /**
       * timestamp when session ended
       */
      ended_at?: string;

      /**
       * Any meta data about session.
       */
      meta?: unknown;
    }
  }

  export interface Paging {
    end_offset?: number;

    start_offset?: number;

    total_count?: number;
  }
}

export interface SessionGenerateSummaryOfTranscriptsParams {
  /**
   * The account identifier tag.
   */
  account_id: string;

  /**
   * The app identifier tag.
   */
  app_id: string;
}

export interface SessionGetParticipantDataFromPeerIDParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Path param: The app identifier tag.
   */
  app_id: string;

  /**
   * Query param: Comma separated list of filters to apply. Note that there must be
   * no spaces between the filters.
   */
  filters?: 'device_info' | 'ip_information' | 'precall_network_information' | 'events' | 'quality_stats';
}

export interface SessionGetSessionChatParams {
  /**
   * The account identifier tag.
   */
  account_id: string;

  /**
   * The app identifier tag.
   */
  app_id: string;
}

export interface SessionGetSessionDetailsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Path param: The app identifier tag.
   */
  app_id: string;

  /**
   * Query param: List all breakout rooms
   */
  include_breakout_rooms?: boolean;
}

export interface SessionGetSessionParticipantDetailsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Path param: The app identifier tag.
   */
  app_id: string;

  /**
   * Path param: ID of the session
   */
  session_id: string;

  /**
   * Query param: Comma separated list of filters to apply. Note that there must be
   * no spaces between the filters.
   */
  filters?: 'device_info' | 'ip_information' | 'precall_network_information' | 'events' | 'quality_stats';

  /**
   * Query param: if true, response includes all the peer events of participant.
   */
  include_peer_events?: boolean;
}

export interface SessionGetSessionParticipantsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Path param: The app identifier tag.
   */
  app_id: string;

  /**
   * Query param: if true, response includes all the peer events of participants.
   */
  include_peer_events?: boolean;

  /**
   * Query param: The page number from which you want your page search results to be
   * displayed.
   */
  page_no?: number;

  /**
   * Query param: Number of results per page
   */
  per_page?: number;

  /**
   * Query param: The search query string. You can search using the meeting ID or
   * title.
   */
  search?: string;

  /**
   * Query param
   */
  sort_by?: 'joinedAt' | 'duration';

  /**
   * Query param
   */
  sort_order?: 'ASC' | 'DESC';

  /**
   * Query param: In breakout room sessions, the view parameter can be set to `raw`
   * for session specific duration for participants or `consolidated` to accumulate
   * breakout room durations.
   */
  view?: 'raw' | 'consolidated';
}

export interface SessionGetSessionSummaryParams {
  /**
   * The account identifier tag.
   */
  account_id: string;

  /**
   * The app identifier tag.
   */
  app_id: string;
}

export interface SessionGetSessionTranscriptsParams {
  /**
   * The account identifier tag.
   */
  account_id: string;

  /**
   * The app identifier tag.
   */
  app_id: string;
}

export interface SessionGetSessionsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: ID of the meeting that sessions should be associated with
   */
  associated_id?: string;

  /**
   * Query param: The end time range for which you want to retrieve the meetings. The
   * time must be specified in ISO format.
   */
  end_time?: string;

  /**
   * Query param: The page number from which you want your page search results to be
   * displayed.
   */
  page_no?: number;

  /**
   * Query param
   */
  participants?: string;

  /**
   * Query param: Number of results per page
   */
  per_page?: number;

  /**
   * Query param: Search string that matches sessions based on meeting title, meeting
   * ID, and session ID
   */
  search?: string;

  /**
   * Query param
   */
  sort_by?: 'minutesConsumed' | 'createdAt';

  /**
   * Query param
   */
  sort_order?: 'ASC' | 'DESC';

  /**
   * Query param: The start time range for which you want to retrieve the meetings.
   * The time must be specified in ISO format.
   */
  start_time?: string;

  /**
   * Query param
   */
  status?: 'LIVE' | 'ENDED';
}

export declare namespace Sessions {
  export {
    type SessionGetParticipantDataFromPeerIDResponse as SessionGetParticipantDataFromPeerIDResponse,
    type SessionGetSessionChatResponse as SessionGetSessionChatResponse,
    type SessionGetSessionDetailsResponse as SessionGetSessionDetailsResponse,
    type SessionGetSessionParticipantDetailsResponse as SessionGetSessionParticipantDetailsResponse,
    type SessionGetSessionParticipantsResponse as SessionGetSessionParticipantsResponse,
    type SessionGetSessionSummaryResponse as SessionGetSessionSummaryResponse,
    type SessionGetSessionTranscriptsResponse as SessionGetSessionTranscriptsResponse,
    type SessionGetSessionsResponse as SessionGetSessionsResponse,
    type SessionGenerateSummaryOfTranscriptsParams as SessionGenerateSummaryOfTranscriptsParams,
    type SessionGetParticipantDataFromPeerIDParams as SessionGetParticipantDataFromPeerIDParams,
    type SessionGetSessionChatParams as SessionGetSessionChatParams,
    type SessionGetSessionDetailsParams as SessionGetSessionDetailsParams,
    type SessionGetSessionParticipantDetailsParams as SessionGetSessionParticipantDetailsParams,
    type SessionGetSessionParticipantsParams as SessionGetSessionParticipantsParams,
    type SessionGetSessionSummaryParams as SessionGetSessionSummaryParams,
    type SessionGetSessionTranscriptsParams as SessionGetSessionTranscriptsParams,
    type SessionGetSessionsParams as SessionGetSessionsParams,
  };
}
