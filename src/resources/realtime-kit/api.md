# RealtimeKit

## Apps

Types:

- <code><a href="./src/resources/realtime-kit/apps.ts">AppGetResponse</a></code>
- <code><a href="./src/resources/realtime-kit/apps.ts">AppPostResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/realtime/kit/apps">client.realtimeKit.apps.<a href="./src/resources/realtime-kit/apps.ts">get</a>({ ...params }) -> AppGetResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/apps">client.realtimeKit.apps.<a href="./src/resources/realtime-kit/apps.ts">post</a>({ ...params }) -> AppPostResponse</code>

## Meetings

Types:

- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingCreateResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingAddParticipantResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingDeleteMeetingParticipantResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingEditParticipantResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingGetResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingGetMeetingByIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingGetMeetingParticipantResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingGetMeetingParticipantsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingRefreshParticipantTokenResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingReplaceMeetingByIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/meetings.ts">MeetingUpdateMeetingByIDResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">create</a>(appID, { ...params }) -> MeetingCreateResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">addParticipant</a>(meetingID, { ...params }) -> MeetingAddParticipantResponse</code>
- <code title="delete /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">deleteMeetingParticipant</a>(participantID, { ...params }) -> MeetingDeleteMeetingParticipantResponse</code>
- <code title="patch /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">editParticipant</a>(participantID, { ...params }) -> MeetingEditParticipantResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">get</a>(appID, { ...params }) -> MeetingGetResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">getMeetingByID</a>(meetingID, { ...params }) -> MeetingGetMeetingByIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">getMeetingParticipant</a>(participantID, { ...params }) -> MeetingGetMeetingParticipantResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">getMeetingParticipants</a>(meetingID, { ...params }) -> MeetingGetMeetingParticipantsResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}/token">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">refreshParticipantToken</a>(participantID, { ...params }) -> MeetingRefreshParticipantTokenResponse</code>
- <code title="put /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">replaceMeetingByID</a>(meetingID, { ...params }) -> MeetingReplaceMeetingByIDResponse</code>
- <code title="patch /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">updateMeetingByID</a>(meetingID, { ...params }) -> MeetingUpdateMeetingByIDResponse</code>

## Presets

Types:

- <code><a href="./src/resources/realtime-kit/presets.ts">PresetCreateResponse</a></code>
- <code><a href="./src/resources/realtime-kit/presets.ts">PresetUpdateResponse</a></code>
- <code><a href="./src/resources/realtime-kit/presets.ts">PresetDeleteResponse</a></code>
- <code><a href="./src/resources/realtime-kit/presets.ts">PresetGetResponse</a></code>
- <code><a href="./src/resources/realtime-kit/presets.ts">PresetGetPresetByIDResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/presets">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">create</a>(appID, { ...params }) -> PresetCreateResponse</code>
- <code title="patch /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">update</a>(presetID, { ...params }) -> PresetUpdateResponse</code>
- <code title="delete /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">delete</a>(presetID, { ...params }) -> PresetDeleteResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/presets">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">get</a>(appID, { ...params }) -> PresetGetResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">getPresetByID</a>(presetID, { ...params }) -> PresetGetPresetByIDResponse</code>

## Sessions

Types:

- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGenerateSummaryOfTranscriptsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetParticipantDataFromPeerIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionChatResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionDetailsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionParticipantDetailsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionParticipantsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionSummaryResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionTranscriptsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">generateSummaryOfTranscripts</a>(sessionID, { ...params }) -> SessionGenerateSummaryOfTranscriptsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/peer-report/{peer_id}">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getParticipantDataFromPeerID</a>(peerID, { ...params }) -> SessionGetParticipantDataFromPeerIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/chat">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionChat</a>(sessionID, { ...params }) -> SessionGetSessionChatResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionDetails</a>(sessionID, { ...params }) -> SessionGetSessionDetailsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants/{participant_id}">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionParticipantDetails</a>(participantID, { ...params }) -> SessionGetSessionParticipantDetailsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionParticipants</a>(sessionID, { ...params }) -> SessionGetSessionParticipantsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionSummary</a>(sessionID, { ...params }) -> SessionGetSessionSummaryResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/transcript">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionTranscripts</a>(sessionID, { ...params }) -> SessionGetSessionTranscriptsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessions</a>(appID, { ...params }) -> SessionGetSessionsResponse</code>

## Recordings

Types:

- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingGetActiveRecordingsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingGetOneRecordingResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingGetRecordingsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingPauseResumeStopRecordingResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingStartRecordingsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingStartTrackRecordingResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/recordings/active-recording/{meeting_id}">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">getActiveRecordings</a>(meetingID, { ...params }) -> RecordingGetActiveRecordingsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/recordings/{recording_id}">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">getOneRecording</a>(recordingID, { ...params }) -> RecordingGetOneRecordingResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/recordings">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">getRecordings</a>(appID, { ...params }) -> RecordingGetRecordingsResponse</code>
- <code title="put /accounts/{account_id}/realtime/kit/{app_id}/recordings/{recording_id}">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">pauseResumeStopRecording</a>(recordingID, { ...params }) -> RecordingPauseResumeStopRecordingResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/recordings">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">startRecordings</a>(appID, { ...params }) -> RecordingStartRecordingsResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/recordings/track">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">startTrackRecording</a>(appID, { ...params }) -> RecordingStartTrackRecordingResponse</code>

## Webhooks

Types:

- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookCreateWebhookResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookDeleteWebhookResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookEditWebhookResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookGetWebhookByIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookGetWebhooksResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookReplaceWebhookResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/webhooks">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">createWebhook</a>(appID, { ...params }) -> WebhookCreateWebhookResponse</code>
- <code title="delete /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">deleteWebhook</a>(webhookID, { ...params }) -> WebhookDeleteWebhookResponse</code>
- <code title="patch /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">editWebhook</a>(webhookID, { ...params }) -> WebhookEditWebhookResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">getWebhookByID</a>(webhookID, { ...params }) -> WebhookGetWebhookByIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/webhooks">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">getWebhooks</a>(appID, { ...params }) -> WebhookGetWebhooksResponse</code>
- <code title="put /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">replaceWebhook</a>(webhookID, { ...params }) -> WebhookReplaceWebhookResponse</code>

## ActiveSession

Types:

- <code><a href="./src/resources/realtime-kit/active-session.ts">ActiveSessionCreatePollResponse</a></code>
- <code><a href="./src/resources/realtime-kit/active-session.ts">ActiveSessionGetActiveSessionResponse</a></code>
- <code><a href="./src/resources/realtime-kit/active-session.ts">ActiveSessionKickAllParticipantsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/active-session.ts">ActiveSessionKickParticipantsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/poll">client.realtimeKit.activeSession.<a href="./src/resources/realtime-kit/active-session.ts">createPoll</a>(meetingID, { ...params }) -> ActiveSessionCreatePollResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session">client.realtimeKit.activeSession.<a href="./src/resources/realtime-kit/active-session.ts">getActiveSession</a>(meetingID, { ...params }) -> ActiveSessionGetActiveSessionResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/kick-all">client.realtimeKit.activeSession.<a href="./src/resources/realtime-kit/active-session.ts">kickAllParticipants</a>(meetingID, { ...params }) -> ActiveSessionKickAllParticipantsResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/kick">client.realtimeKit.activeSession.<a href="./src/resources/realtime-kit/active-session.ts">kickParticipants</a>(meetingID, { ...params }) -> ActiveSessionKickParticipantsResponse</code>

## Livestreams

Types:

- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamCreateIndependentLivestreamResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetActiveLivestreamsForLivestreamIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetAllLivestreamsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetLivestreamAnalyticsCompleteResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetLivestreamAnalyticsDaywiseResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetLivestreamSessionDetailsForSessionIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetLivestreamSessionForLivestreamIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetMeetingActiveLivestreamsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetOrgAnalyticsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamStartLivestreamingAMeetingResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamStopLivestreamingAMeetingResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/livestreams">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">createIndependentLivestream</a>(appID, { ...params }) -> LivestreamCreateIndependentLivestreamResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}/active-livestream-session">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getActiveLivestreamsForLivestreamID</a>(livestreamID, { ...params }) -> LivestreamGetActiveLivestreamsForLivestreamIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/livestreams">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getAllLivestreams</a>(appID, { ...params }) -> LivestreamGetAllLivestreamsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/analytics/livestreams/overall">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getLivestreamAnalyticsComplete</a>(appID, { ...params }) -> LivestreamGetLivestreamAnalyticsCompleteResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/analytics/livestreams/daywise">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getLivestreamAnalyticsDaywise</a>(appID, { ...params }) -> LivestreamGetLivestreamAnalyticsDaywiseResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/livestreams/sessions/{livestream-session-id}">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getLivestreamSessionDetailsForSessionID</a>(livestreamSessionID, { ...params }) -> LivestreamGetLivestreamSessionDetailsForSessionIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getLivestreamSessionForLivestreamID</a>(livestreamID, { ...params }) -> LivestreamGetLivestreamSessionForLivestreamIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-livestream">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getMeetingActiveLivestreams</a>(meetingID, { ...params }) -> LivestreamGetMeetingActiveLivestreamsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/analytics/daywise">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getOrgAnalytics</a>(appID, { ...params }) -> LivestreamGetOrgAnalyticsResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/livestreams">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">startLivestreamingAMeeting</a>(meetingID, { ...params }) -> LivestreamStartLivestreamingAMeetingResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-livestream/stop">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">stopLivestreamingAMeeting</a>(meetingID, { ...params }) -> LivestreamStopLivestreamingAMeetingResponse</code>

## Analytics

Types:

- <code><a href="./src/resources/realtime-kit/analytics.ts">AnalyticsGetOrgAnalyticsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/analytics/daywise">client.realtimeKit.analytics.<a href="./src/resources/realtime-kit/analytics.ts">getOrgAnalytics</a>(appID, { ...params }) -> AnalyticsGetOrgAnalyticsResponse</code>
