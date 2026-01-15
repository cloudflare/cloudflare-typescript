// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ActiveSession extends APIResource {
  /**
   * Creates a new poll in an active session for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.activeSession.createPoll(
   *     'app_id',
   *     'meeting_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       options: ['string'],
   *       question: 'question',
   *     },
   *   );
   * ```
   */
  createPoll(
    appId: string,
    meetingId: string,
    params: ActiveSessionCreatePollParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveSessionCreatePollResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/active-session/poll`,
      { body, ...options },
    );
  }

  /**
   * Returns details of an ongoing active session for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.activeSession.getActiveSession(
   *     'app_id',
   *     'meeting_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getActiveSession(
    appId: string,
    meetingId: string,
    params: ActiveSessionGetActiveSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveSessionGetActiveSessionResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/active-session`,
      options,
    );
  }

  /**
   * Kicks all participants from an active session for the given meeting ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.activeSession.kickAllParticipants(
   *     'app_id',
   *     'meeting_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  kickAllParticipants(
    appId: string,
    meetingId: string,
    params: ActiveSessionKickAllParticipantsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveSessionKickAllParticipantsResponse> {
    const { account_id } = params;
    return this._client.post(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/active-session/kick-all`,
      options,
    );
  }

  /**
   * Kicks one or more participants from an active session using user ID or custom
   * participant ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.activeSession.kickParticipants(
   *     'app_id',
   *     'meeting_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       custom_participant_ids: ['string'],
   *       participant_ids: ['string'],
   *     },
   *   );
   * ```
   */
  kickParticipants(
    appId: string,
    meetingId: string,
    params: ActiveSessionKickParticipantsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveSessionKickParticipantsResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      `/accounts/${account_id}/realtime/kit/${appId}/meetings/${meetingId}/active-session/kick`,
      { body, ...options },
    );
  }
}

export interface ActiveSessionCreatePollResponse {
  data?: ActiveSessionCreatePollResponse.Data;

  success?: boolean;
}

export namespace ActiveSessionCreatePollResponse {
  export interface Data {
    action?: string;

    poll?: Data.Poll;
  }

  export namespace Data {
    export interface Poll {
      /**
       * ID of the poll
       */
      id: string;

      /**
       * Answer options
       */
      options: Array<Poll.Option>;

      /**
       * Question asked by the poll
       */
      question: string;

      anonymous?: boolean;

      created_by?: string;

      hide_votes?: boolean;

      voted?: Array<string>;
    }

    export namespace Poll {
      export interface Option {
        count: number;

        /**
         * Text of the answer option
         */
        text: string;

        votes: Array<Option.Vote>;
      }

      export namespace Option {
        export interface Vote {
          id: string;

          name: string;
        }
      }
    }
  }
}

export interface ActiveSessionGetActiveSessionResponse {
  data?: ActiveSessionGetActiveSessionResponse.Data;

  success?: boolean;
}

export namespace ActiveSessionGetActiveSessionResponse {
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

export interface ActiveSessionKickAllParticipantsResponse {
  data?: ActiveSessionKickAllParticipantsResponse.Data;

  success?: boolean;
}

export namespace ActiveSessionKickAllParticipantsResponse {
  export interface Data {
    action?: string;

    kicked_participants_count?: number;
  }
}

export interface ActiveSessionKickParticipantsResponse {
  data?: ActiveSessionKickParticipantsResponse.Data;

  success?: boolean;
}

export namespace ActiveSessionKickParticipantsResponse {
  export interface Data {
    action?: string;

    participants?: Array<Data.Participant>;
  }

  export namespace Data {
    export interface Participant {
      /**
       * ID of the session participant
       */
      id: string;

      created_at: string;

      updated_at: string;

      /**
       * Email of the session participant.
       */
      email?: string;

      /**
       * Name of the session participant.
       */
      name?: string;

      /**
       * A URL pointing to a picture of the participant.
       */
      picture?: string;
    }
  }
}

export interface ActiveSessionCreatePollParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Different options for the question
   */
  options: Array<string>;

  /**
   * Body param: Question of the poll
   */
  question: string;

  /**
   * Body param: if voters on a poll are anonymous
   */
  anonymous?: boolean;

  /**
   * Body param: if votes on an option are visible before a person votes
   */
  hide_votes?: boolean;
}

export interface ActiveSessionGetActiveSessionParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface ActiveSessionKickAllParticipantsParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface ActiveSessionKickParticipantsParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  custom_participant_ids: Array<string>;

  /**
   * Body param:
   */
  participant_ids: Array<string>;
}

export declare namespace ActiveSession {
  export {
    type ActiveSessionCreatePollResponse as ActiveSessionCreatePollResponse,
    type ActiveSessionGetActiveSessionResponse as ActiveSessionGetActiveSessionResponse,
    type ActiveSessionKickAllParticipantsResponse as ActiveSessionKickAllParticipantsResponse,
    type ActiveSessionKickParticipantsResponse as ActiveSessionKickParticipantsResponse,
    type ActiveSessionCreatePollParams as ActiveSessionCreatePollParams,
    type ActiveSessionGetActiveSessionParams as ActiveSessionGetActiveSessionParams,
    type ActiveSessionKickAllParticipantsParams as ActiveSessionKickAllParticipantsParams,
    type ActiveSessionKickParticipantsParams as ActiveSessionKickParticipantsParams,
  };
}
