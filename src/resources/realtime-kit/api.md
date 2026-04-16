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

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">create</a>(appId, { ...params }) -> MeetingCreateResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">addParticipant</a>(appId, meetingId, { ...params }) -> MeetingAddParticipantResponse</code>
- <code title="delete /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">deleteMeetingParticipant</a>(appId, meetingId, participantId, { ...params }) -> MeetingDeleteMeetingParticipantResponse</code>
- <code title="patch /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">editParticipant</a>(appId, meetingId, participantId, { ...params }) -> MeetingEditParticipantResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">get</a>(appId, { ...params }) -> MeetingGetResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">getMeetingById</a>(appId, meetingId, { ...params }) -> MeetingGetMeetingByIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">getMeetingParticipant</a>(appId, meetingId, participantId, { ...params }) -> MeetingGetMeetingParticipantResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">getMeetingParticipants</a>(appId, meetingId, { ...params }) -> MeetingGetMeetingParticipantsResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}/token">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">refreshParticipantToken</a>(appId, meetingId, participantId, { ...params }) -> MeetingRefreshParticipantTokenResponse</code>
- <code title="put /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">replaceMeetingById</a>(appId, meetingId, { ...params }) -> MeetingReplaceMeetingByIDResponse</code>
- <code title="patch /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}">client.realtimeKit.meetings.<a href="./src/resources/realtime-kit/meetings.ts">updateMeetingById</a>(appId, meetingId, { ...params }) -> MeetingUpdateMeetingByIDResponse</code>

## Presets

Types:

- <code><a href="./src/resources/realtime-kit/presets.ts">PresetCreateResponse</a></code>
- <code><a href="./src/resources/realtime-kit/presets.ts">PresetUpdateResponse</a></code>
- <code><a href="./src/resources/realtime-kit/presets.ts">PresetDeleteResponse</a></code>
- <code><a href="./src/resources/realtime-kit/presets.ts">PresetGetResponse</a></code>
- <code><a href="./src/resources/realtime-kit/presets.ts">PresetGetPresetByIDResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/presets">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">create</a>(appId, { ...params }) -> PresetCreateResponse</code>
- <code title="patch /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">update</a>(appId, presetId, { ...params }) -> PresetUpdateResponse</code>
- <code title="delete /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">delete</a>(appId, presetId, { ...params }) -> PresetDeleteResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/presets">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">get</a>(appId, { ...params }) -> PresetGetResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}">client.realtimeKit.presets.<a href="./src/resources/realtime-kit/presets.ts">getPresetById</a>(appId, presetId, { ...params }) -> PresetGetPresetByIDResponse</code>

## Sessions

Types:

- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetParticipantDataFromPeerIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionChatResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionDetailsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionParticipantDetailsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionParticipantsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionSummaryResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionTranscriptsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/sessions.ts">SessionGetSessionsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">generateSummaryOfTranscripts</a>(appId, sessionId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/peer-report/{peer_id}">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getParticipantDataFromPeerId</a>(appId, peerId, { ...params }) -> SessionGetParticipantDataFromPeerIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/chat">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionChat</a>(appId, sessionId, { ...params }) -> SessionGetSessionChatResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionDetails</a>(appId, sessionId, { ...params }) -> SessionGetSessionDetailsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants/{participant_id}">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionParticipantDetails</a>(appId, sessionId, participantId, { ...params }) -> SessionGetSessionParticipantDetailsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionParticipants</a>(appId, sessionId, { ...params }) -> SessionGetSessionParticipantsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionSummary</a>(appId, sessionId, { ...params }) -> SessionGetSessionSummaryResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/transcript">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessionTranscripts</a>(appId, sessionId, { ...params }) -> SessionGetSessionTranscriptsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/sessions">client.realtimeKit.sessions.<a href="./src/resources/realtime-kit/sessions.ts">getSessions</a>(appId, { ...params }) -> SessionGetSessionsResponse</code>

## Recordings

Types:

- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingGetActiveRecordingsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingGetOneRecordingResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingGetRecordingsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingPauseResumeStopRecordingResponse</a></code>
- <code><a href="./src/resources/realtime-kit/recordings.ts">RecordingStartRecordingsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/recordings/active-recording/{meeting_id}">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">getActiveRecordings</a>(appId, meetingId, { ...params }) -> RecordingGetActiveRecordingsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/recordings/{recording_id}">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">getOneRecording</a>(appId, recordingId, { ...params }) -> RecordingGetOneRecordingResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/recordings">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">getRecordings</a>(appId, { ...params }) -> RecordingGetRecordingsResponse</code>
- <code title="put /accounts/{account_id}/realtime/kit/{app_id}/recordings/{recording_id}">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">pauseResumeStopRecording</a>(appId, recordingId, { ...params }) -> RecordingPauseResumeStopRecordingResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/recordings">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">startRecordings</a>(appId, { ...params }) -> RecordingStartRecordingsResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/recordings/track">client.realtimeKit.recordings.<a href="./src/resources/realtime-kit/recordings.ts">startTrackRecording</a>(appId, { ...params }) -> void</code>

## Webhooks

Types:

- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookCreateWebhookResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookDeleteWebhookResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookEditWebhookResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookGetWebhookByIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookGetWebhooksResponse</a></code>
- <code><a href="./src/resources/realtime-kit/webhooks.ts">WebhookReplaceWebhookResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/webhooks">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">createWebhook</a>(appId, { ...params }) -> WebhookCreateWebhookResponse</code>
- <code title="delete /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">deleteWebhook</a>(appId, webhookId, { ...params }) -> WebhookDeleteWebhookResponse</code>
- <code title="patch /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">editWebhook</a>(appId, webhookId, { ...params }) -> WebhookEditWebhookResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">getWebhookById</a>(appId, webhookId, { ...params }) -> WebhookGetWebhookByIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/webhooks">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">getWebhooks</a>(appId, { ...params }) -> WebhookGetWebhooksResponse</code>
- <code title="put /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}">client.realtimeKit.webhooks.<a href="./src/resources/realtime-kit/webhooks.ts">replaceWebhook</a>(appId, webhookId, { ...params }) -> WebhookReplaceWebhookResponse</code>

## ActiveSession

Types:

- <code><a href="./src/resources/realtime-kit/active-session.ts">ActiveSessionCreatePollResponse</a></code>
- <code><a href="./src/resources/realtime-kit/active-session.ts">ActiveSessionGetActiveSessionResponse</a></code>
- <code><a href="./src/resources/realtime-kit/active-session.ts">ActiveSessionKickAllParticipantsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/active-session.ts">ActiveSessionKickParticipantsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/poll">client.realtimeKit.activeSession.<a href="./src/resources/realtime-kit/active-session.ts">createPoll</a>(appId, meetingId, { ...params }) -> ActiveSessionCreatePollResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session">client.realtimeKit.activeSession.<a href="./src/resources/realtime-kit/active-session.ts">getActiveSession</a>(appId, meetingId, { ...params }) -> ActiveSessionGetActiveSessionResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/kick-all">client.realtimeKit.activeSession.<a href="./src/resources/realtime-kit/active-session.ts">kickAllParticipants</a>(appId, meetingId, { ...params }) -> ActiveSessionKickAllParticipantsResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/kick">client.realtimeKit.activeSession.<a href="./src/resources/realtime-kit/active-session.ts">kickParticipants</a>(appId, meetingId, { ...params }) -> ActiveSessionKickParticipantsResponse</code>

## Livestreams

Types:

- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamCreateIndependentLivestreamResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetActiveLivestreamsForLivestreamIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetAllLivestreamsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetLivestreamAnalyticsCompleteResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetLivestreamSessionDetailsForSessionIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetLivestreamSessionForLivestreamIDResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetMeetingActiveLivestreamsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamGetOrgAnalyticsResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamStartLivestreamingAMeetingResponse</a></code>
- <code><a href="./src/resources/realtime-kit/livestreams.ts">LivestreamStopLivestreamingAMeetingResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/livestreams">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">createIndependentLivestream</a>(appId, { ...params }) -> LivestreamCreateIndependentLivestreamResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}/active-livestream-session">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getActiveLivestreamsForLivestreamId</a>(appId, livestreamId, { ...params }) -> LivestreamGetActiveLivestreamsForLivestreamIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/livestreams">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getAllLivestreams</a>(appId, { ...params }) -> LivestreamGetAllLivestreamsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/analytics/livestreams/overall">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getLivestreamAnalyticsComplete</a>(appId, { ...params }) -> LivestreamGetLivestreamAnalyticsCompleteResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/livestreams/sessions/{livestream-session-id}">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getLivestreamSessionDetailsForSessionId</a>(appId, livestreamSessionId, { ...params }) -> LivestreamGetLivestreamSessionDetailsForSessionIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getLivestreamSessionForLivestreamId</a>(appId, livestreamId, { ...params }) -> LivestreamGetLivestreamSessionForLivestreamIDResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-livestream">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getMeetingActiveLivestreams</a>(appId, meetingId, { ...params }) -> LivestreamGetMeetingActiveLivestreamsResponse</code>
- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/analytics/daywise">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">getOrgAnalytics</a>(appId, { ...params }) -> LivestreamGetOrgAnalyticsResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/livestreams">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">startLivestreamingAMeeting</a>(appId, meetingId, { ...params }) -> LivestreamStartLivestreamingAMeetingResponse</code>
- <code title="post /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-livestream/stop">client.realtimeKit.livestreams.<a href="./src/resources/realtime-kit/livestreams.ts">stopLivestreamingAMeeting</a>(appId, meetingId, { ...params }) -> LivestreamStopLivestreamingAMeetingResponse</code>

## Analytics

Types:

- <code><a href="./src/resources/realtime-kit/analytics.ts">AnalyticsGetOrgAnalyticsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/realtime/kit/{app_id}/analytics/daywise">client.realtimeKit.analytics.<a href="./src/resources/realtime-kit/analytics.ts">getOrgAnalytics</a>(appId, { ...params }) -> AnalyticsGetOrgAnalyticsResponse</code>
