// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ActiveSessionAPI from './active-session';
import {
  ActiveSession,
  ActiveSessionCreatePollParams,
  ActiveSessionCreatePollResponse,
  ActiveSessionGetActiveSessionParams,
  ActiveSessionGetActiveSessionResponse,
  ActiveSessionKickAllParticipantsParams,
  ActiveSessionKickAllParticipantsResponse,
  ActiveSessionKickParticipantsParams,
  ActiveSessionKickParticipantsResponse,
} from './active-session';
import * as AnalyticsAPI from './analytics';
import { Analytics, AnalyticsGetOrgAnalyticsParams, AnalyticsGetOrgAnalyticsResponse } from './analytics';
import * as AppsAPI from './apps';
import { AppGetParams, AppGetResponse, AppPostParams, AppPostResponse, Apps } from './apps';
import * as LivestreamsAPI from './livestreams';
import {
  LivestreamCreateIndependentLivestreamParams,
  LivestreamCreateIndependentLivestreamResponse,
  LivestreamGetActiveLivestreamsForLivestreamIDParams,
  LivestreamGetActiveLivestreamsForLivestreamIDResponse,
  LivestreamGetAllLivestreamsParams,
  LivestreamGetAllLivestreamsResponse,
  LivestreamGetLivestreamAnalyticsCompleteParams,
  LivestreamGetLivestreamAnalyticsCompleteResponse,
  LivestreamGetLivestreamSessionDetailsForSessionIDParams,
  LivestreamGetLivestreamSessionDetailsForSessionIDResponse,
  LivestreamGetLivestreamSessionForLivestreamIDParams,
  LivestreamGetLivestreamSessionForLivestreamIDResponse,
  LivestreamGetMeetingActiveLivestreamsParams,
  LivestreamGetMeetingActiveLivestreamsResponse,
  LivestreamGetOrgAnalyticsParams,
  LivestreamGetOrgAnalyticsResponse,
  LivestreamStartLivestreamingAMeetingParams,
  LivestreamStartLivestreamingAMeetingResponse,
  LivestreamStopLivestreamingAMeetingParams,
  LivestreamStopLivestreamingAMeetingResponse,
  Livestreams,
} from './livestreams';
import * as MeetingsAPI from './meetings';
import {
  MeetingAddParticipantParams,
  MeetingAddParticipantResponse,
  MeetingCreateParams,
  MeetingCreateResponse,
  MeetingDeleteMeetingParticipantParams,
  MeetingDeleteMeetingParticipantResponse,
  MeetingEditParticipantParams,
  MeetingEditParticipantResponse,
  MeetingGetMeetingByIDParams,
  MeetingGetMeetingByIDResponse,
  MeetingGetMeetingParticipantParams,
  MeetingGetMeetingParticipantResponse,
  MeetingGetMeetingParticipantsParams,
  MeetingGetMeetingParticipantsResponse,
  MeetingGetParams,
  MeetingGetResponse,
  MeetingRefreshParticipantTokenParams,
  MeetingRefreshParticipantTokenResponse,
  MeetingReplaceMeetingByIDParams,
  MeetingReplaceMeetingByIDResponse,
  MeetingUpdateMeetingByIDParams,
  MeetingUpdateMeetingByIDResponse,
  Meetings,
} from './meetings';
import * as PresetsAPI from './presets';
import {
  PresetCreateParams,
  PresetCreateResponse,
  PresetDeleteParams,
  PresetDeleteResponse,
  PresetGetParams,
  PresetGetPresetByIDParams,
  PresetGetPresetByIDResponse,
  PresetGetResponse,
  PresetUpdateParams,
  PresetUpdateResponse,
  Presets,
} from './presets';
import * as RecordingsAPI from './recordings';
import {
  RecordingGetActiveRecordingsParams,
  RecordingGetActiveRecordingsResponse,
  RecordingGetOneRecordingParams,
  RecordingGetOneRecordingResponse,
  RecordingGetRecordingsParams,
  RecordingGetRecordingsResponse,
  RecordingPauseResumeStopRecordingParams,
  RecordingPauseResumeStopRecordingResponse,
  RecordingStartRecordingsParams,
  RecordingStartRecordingsResponse,
  RecordingStartTrackRecordingParams,
  Recordings,
} from './recordings';
import * as SessionsAPI from './sessions';
import {
  SessionGenerateSummaryOfTranscriptsParams,
  SessionGetParticipantDataFromPeerIDParams,
  SessionGetParticipantDataFromPeerIDResponse,
  SessionGetSessionChatParams,
  SessionGetSessionChatResponse,
  SessionGetSessionDetailsParams,
  SessionGetSessionDetailsResponse,
  SessionGetSessionParticipantDetailsParams,
  SessionGetSessionParticipantDetailsResponse,
  SessionGetSessionParticipantsParams,
  SessionGetSessionParticipantsResponse,
  SessionGetSessionSummaryParams,
  SessionGetSessionSummaryResponse,
  SessionGetSessionTranscriptsParams,
  SessionGetSessionTranscriptsResponse,
  SessionGetSessionsParams,
  SessionGetSessionsResponse,
  Sessions,
} from './sessions';
import * as WebhooksAPI from './webhooks';
import {
  WebhookCreateWebhookParams,
  WebhookCreateWebhookResponse,
  WebhookDeleteWebhookParams,
  WebhookDeleteWebhookResponse,
  WebhookEditWebhookParams,
  WebhookEditWebhookResponse,
  WebhookGetWebhookByIDParams,
  WebhookGetWebhookByIDResponse,
  WebhookGetWebhooksParams,
  WebhookGetWebhooksResponse,
  WebhookReplaceWebhookParams,
  WebhookReplaceWebhookResponse,
  Webhooks,
} from './webhooks';

export class RealtimeKit extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  meetings: MeetingsAPI.Meetings = new MeetingsAPI.Meetings(this._client);
  presets: PresetsAPI.Presets = new PresetsAPI.Presets(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  recordings: RecordingsAPI.Recordings = new RecordingsAPI.Recordings(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  activeSession: ActiveSessionAPI.ActiveSession = new ActiveSessionAPI.ActiveSession(this._client);
  livestreams: LivestreamsAPI.Livestreams = new LivestreamsAPI.Livestreams(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

RealtimeKit.Apps = Apps;
RealtimeKit.Meetings = Meetings;
RealtimeKit.Presets = Presets;
RealtimeKit.Sessions = Sessions;
RealtimeKit.Recordings = Recordings;
RealtimeKit.Webhooks = Webhooks;
RealtimeKit.ActiveSession = ActiveSession;
RealtimeKit.Livestreams = Livestreams;
RealtimeKit.Analytics = Analytics;

export declare namespace RealtimeKit {
  export {
    Apps as Apps,
    type AppGetResponse as AppGetResponse,
    type AppPostResponse as AppPostResponse,
    type AppGetParams as AppGetParams,
    type AppPostParams as AppPostParams,
  };

  export {
    Meetings as Meetings,
    type MeetingCreateResponse as MeetingCreateResponse,
    type MeetingAddParticipantResponse as MeetingAddParticipantResponse,
    type MeetingDeleteMeetingParticipantResponse as MeetingDeleteMeetingParticipantResponse,
    type MeetingEditParticipantResponse as MeetingEditParticipantResponse,
    type MeetingGetResponse as MeetingGetResponse,
    type MeetingGetMeetingByIDResponse as MeetingGetMeetingByIDResponse,
    type MeetingGetMeetingParticipantResponse as MeetingGetMeetingParticipantResponse,
    type MeetingGetMeetingParticipantsResponse as MeetingGetMeetingParticipantsResponse,
    type MeetingRefreshParticipantTokenResponse as MeetingRefreshParticipantTokenResponse,
    type MeetingReplaceMeetingByIDResponse as MeetingReplaceMeetingByIDResponse,
    type MeetingUpdateMeetingByIDResponse as MeetingUpdateMeetingByIDResponse,
    type MeetingCreateParams as MeetingCreateParams,
    type MeetingAddParticipantParams as MeetingAddParticipantParams,
    type MeetingDeleteMeetingParticipantParams as MeetingDeleteMeetingParticipantParams,
    type MeetingEditParticipantParams as MeetingEditParticipantParams,
    type MeetingGetParams as MeetingGetParams,
    type MeetingGetMeetingByIDParams as MeetingGetMeetingByIDParams,
    type MeetingGetMeetingParticipantParams as MeetingGetMeetingParticipantParams,
    type MeetingGetMeetingParticipantsParams as MeetingGetMeetingParticipantsParams,
    type MeetingRefreshParticipantTokenParams as MeetingRefreshParticipantTokenParams,
    type MeetingReplaceMeetingByIDParams as MeetingReplaceMeetingByIDParams,
    type MeetingUpdateMeetingByIDParams as MeetingUpdateMeetingByIDParams,
  };

  export {
    Presets as Presets,
    type PresetCreateResponse as PresetCreateResponse,
    type PresetUpdateResponse as PresetUpdateResponse,
    type PresetDeleteResponse as PresetDeleteResponse,
    type PresetGetResponse as PresetGetResponse,
    type PresetGetPresetByIDResponse as PresetGetPresetByIDResponse,
    type PresetCreateParams as PresetCreateParams,
    type PresetUpdateParams as PresetUpdateParams,
    type PresetDeleteParams as PresetDeleteParams,
    type PresetGetParams as PresetGetParams,
    type PresetGetPresetByIDParams as PresetGetPresetByIDParams,
  };

  export {
    Sessions as Sessions,
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

  export {
    Recordings as Recordings,
    type RecordingGetActiveRecordingsResponse as RecordingGetActiveRecordingsResponse,
    type RecordingGetOneRecordingResponse as RecordingGetOneRecordingResponse,
    type RecordingGetRecordingsResponse as RecordingGetRecordingsResponse,
    type RecordingPauseResumeStopRecordingResponse as RecordingPauseResumeStopRecordingResponse,
    type RecordingStartRecordingsResponse as RecordingStartRecordingsResponse,
    type RecordingGetActiveRecordingsParams as RecordingGetActiveRecordingsParams,
    type RecordingGetOneRecordingParams as RecordingGetOneRecordingParams,
    type RecordingGetRecordingsParams as RecordingGetRecordingsParams,
    type RecordingPauseResumeStopRecordingParams as RecordingPauseResumeStopRecordingParams,
    type RecordingStartRecordingsParams as RecordingStartRecordingsParams,
    type RecordingStartTrackRecordingParams as RecordingStartTrackRecordingParams,
  };

  export {
    Webhooks as Webhooks,
    type WebhookCreateWebhookResponse as WebhookCreateWebhookResponse,
    type WebhookDeleteWebhookResponse as WebhookDeleteWebhookResponse,
    type WebhookEditWebhookResponse as WebhookEditWebhookResponse,
    type WebhookGetWebhookByIDResponse as WebhookGetWebhookByIDResponse,
    type WebhookGetWebhooksResponse as WebhookGetWebhooksResponse,
    type WebhookReplaceWebhookResponse as WebhookReplaceWebhookResponse,
    type WebhookCreateWebhookParams as WebhookCreateWebhookParams,
    type WebhookDeleteWebhookParams as WebhookDeleteWebhookParams,
    type WebhookEditWebhookParams as WebhookEditWebhookParams,
    type WebhookGetWebhookByIDParams as WebhookGetWebhookByIDParams,
    type WebhookGetWebhooksParams as WebhookGetWebhooksParams,
    type WebhookReplaceWebhookParams as WebhookReplaceWebhookParams,
  };

  export {
    ActiveSession as ActiveSession,
    type ActiveSessionCreatePollResponse as ActiveSessionCreatePollResponse,
    type ActiveSessionGetActiveSessionResponse as ActiveSessionGetActiveSessionResponse,
    type ActiveSessionKickAllParticipantsResponse as ActiveSessionKickAllParticipantsResponse,
    type ActiveSessionKickParticipantsResponse as ActiveSessionKickParticipantsResponse,
    type ActiveSessionCreatePollParams as ActiveSessionCreatePollParams,
    type ActiveSessionGetActiveSessionParams as ActiveSessionGetActiveSessionParams,
    type ActiveSessionKickAllParticipantsParams as ActiveSessionKickAllParticipantsParams,
    type ActiveSessionKickParticipantsParams as ActiveSessionKickParticipantsParams,
  };

  export {
    Livestreams as Livestreams,
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

  export {
    Analytics as Analytics,
    type AnalyticsGetOrgAnalyticsResponse as AnalyticsGetOrgAnalyticsResponse,
    type AnalyticsGetOrgAnalyticsParams as AnalyticsGetOrgAnalyticsParams,
  };
}
