# Stream

Types:

- <code><a href="./src/resources/stream/stream.ts">AllowedOrigins</a></code>
- <code><a href="./src/resources/stream/stream.ts">Video</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">create</a>({ ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">list</a>({ ...params }) -> VideosSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">delete</a>(identifier, { ...params }) -> void</code>
- <code title="post /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">edit</a>(identifier, { ...params }) -> Video</code>
- <code title="get /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">get</a>(identifier, { ...params }) -> Video</code>

## AudioTracks

Types:

- <code><a href="./src/resources/stream/audio-tracks.ts">Audio</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackDeleteResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">delete</a>(identifier, audioIdentifier, { ...params }) -> AudioTrackDeleteResponse</code>
- <code title="post /accounts/{account_id}/stream/{identifier}/audio/copy">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">copy</a>(identifier, { ...params }) -> Audio</code>
- <code title="patch /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">edit</a>(identifier, audioIdentifier, { ...params }) -> Audio</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/audio">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">get</a>(identifier, { ...params }) -> AudioTrackGetResponse</code>

## Videos

Types:

- <code><a href="./src/resources/stream/videos.ts">VideoStorageUsageResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/storage-usage">client.stream.videos.<a href="./src/resources/stream/videos.ts">storageUsage</a>({ ...params }) -> VideoStorageUsageResponse</code>

## Clip

Types:

- <code><a href="./src/resources/stream/clip.ts">Clip</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/clip">client.stream.clip.<a href="./src/resources/stream/clip.ts">create</a>({ ...params }) -> Video</code>

## Copy

Methods:

- <code title="post /accounts/{account_id}/stream/copy">client.stream.copy.<a href="./src/resources/stream/copy.ts">create</a>({ ...params }) -> Video</code>

## DirectUpload

Types:

- <code><a href="./src/resources/stream/direct-upload.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/direct_upload">client.stream.directUpload.<a href="./src/resources/stream/direct-upload.ts">create</a>({ ...params }) -> DirectUploadCreateResponse</code>

## Keys

Types:

- <code><a href="./src/resources/stream/keys.ts">Keys</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">create</a>({ ...params }) -> Keys</code>
- <code title="delete /accounts/{account_id}/stream/keys/{identifier}">client.stream.keys.<a href="./src/resources/stream/keys.ts">delete</a>(identifier, { ...params }) -> KeyDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">get</a>({ ...params }) -> KeyGetResponsesSinglePage</code>

## LiveInputs

Types:

- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInput</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">create</a>({ ...params }) -> LiveInput</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">update</a>(liveInputIdentifier, { ...params }) -> LiveInput</code>
- <code title="get /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">list</a>({ ...params }) -> LiveInputListResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">delete</a>(liveInputIdentifier, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">get</a>(liveInputIdentifier, { ...params }) -> LiveInput</code>

### Outputs

Types:

- <code><a href="./src/resources/stream/live-inputs/outputs.ts">Output</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">create</a>(liveInputIdentifier, { ...params }) -> Output</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">update</a>(liveInputIdentifier, outputIdentifier, { ...params }) -> Output</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">list</a>(liveInputIdentifier, { ...params }) -> OutputsSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">delete</a>(liveInputIdentifier, outputIdentifier, { ...params }) -> void</code>

## Watermarks

Types:

- <code><a href="./src/resources/stream/watermarks.ts">Watermark</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">create</a>({ ...params }) -> Watermark</code>
- <code title="get /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">list</a>({ ...params }) -> WatermarksSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">delete</a>(identifier, { ...params }) -> WatermarkDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">get</a>(identifier, { ...params }) -> Watermark</code>

## Webhooks

Types:

- <code><a href="./src/resources/stream/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">update</a>({ ...params }) -> WebhookUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">delete</a>({ ...params }) -> WebhookDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">get</a>({ ...params }) -> WebhookGetResponse</code>

## Captions

Types:

- <code><a href="./src/resources/stream/captions/captions.ts">Caption</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/captions">client.stream.captions.<a href="./src/resources/stream/captions/captions.ts">get</a>(identifier, { ...params }) -> CaptionsSinglePage</code>

### Language

Types:

- <code><a href="./src/resources/stream/captions/language/language.ts">LanguageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/captions/{language}/generate">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">create</a>(identifier, language, { ...params }) -> Caption</code>
- <code title="put /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">update</a>(identifier, language, { ...params }) -> Caption</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">delete</a>(identifier, language, { ...params }) -> LanguageDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">get</a>(identifier, language, { ...params }) -> Caption</code>

#### Vtt

Types:

- <code><a href="./src/resources/stream/captions/language/vtt.ts">VttGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/captions/{language}/vtt">client.stream.captions.language.vtt.<a href="./src/resources/stream/captions/language/vtt.ts">get</a>(identifier, language, { ...params }) -> string</code>

## Downloads

Types:

- <code><a href="./src/resources/stream/downloads.ts">DownloadCreateResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadDeleteResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">create</a>(identifier, { ...params }) -> DownloadCreateResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">delete</a>(identifier, { ...params }) -> DownloadDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">get</a>(identifier, { ...params }) -> DownloadGetResponse</code>

## Embed

Types:

- <code><a href="./src/resources/stream/embed.ts">EmbedGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/embed">client.stream.embed.<a href="./src/resources/stream/embed.ts">get</a>(identifier, { ...params }) -> string</code>

## Token

Types:

- <code><a href="./src/resources/stream/token.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/token">client.stream.token.<a href="./src/resources/stream/token.ts">create</a>(identifier, { ...params }) -> TokenCreateResponse</code>
