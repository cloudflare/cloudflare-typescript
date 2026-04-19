# ContentScanning

Types:

- <code><a href="./src/resources/content-scanning/content-scanning.ts">ContentScanningCreateResponse</a></code>
- <code><a href="./src/resources/content-scanning/content-scanning.ts">ContentScanningUpdateResponse</a></code>
- <code><a href="./src/resources/content-scanning/content-scanning.ts">ContentScanningDisableResponse</a></code>
- <code><a href="./src/resources/content-scanning/content-scanning.ts">ContentScanningEnableResponse</a></code>
- <code><a href="./src/resources/content-scanning/content-scanning.ts">ContentScanningGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/content-upload-scan/settings">client.contentScanning.<a href="./src/resources/content-scanning/content-scanning.ts">create</a>({ ...params }) -> ContentScanningCreateResponse</code>
- <code title="put /zones/{zone_id}/content-upload-scan/settings">client.contentScanning.<a href="./src/resources/content-scanning/content-scanning.ts">update</a>({ ...params }) -> ContentScanningUpdateResponse</code>
- <code title="post /zones/{zone_id}/content-upload-scan/disable">client.contentScanning.<a href="./src/resources/content-scanning/content-scanning.ts">disable</a>({ ...params }) -> ContentScanningDisableResponse</code>
- <code title="post /zones/{zone_id}/content-upload-scan/enable">client.contentScanning.<a href="./src/resources/content-scanning/content-scanning.ts">enable</a>({ ...params }) -> ContentScanningEnableResponse</code>
- <code title="get /zones/{zone_id}/content-upload-scan/settings">client.contentScanning.<a href="./src/resources/content-scanning/content-scanning.ts">get</a>({ ...params }) -> ContentScanningGetResponse</code>

## Payloads

Types:

- <code><a href="./src/resources/content-scanning/payloads.ts">PayloadCreateResponse</a></code>
- <code><a href="./src/resources/content-scanning/payloads.ts">PayloadListResponse</a></code>
- <code><a href="./src/resources/content-scanning/payloads.ts">PayloadDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/content-upload-scan/payloads">client.contentScanning.payloads.<a href="./src/resources/content-scanning/payloads.ts">create</a>([ ...body ]) -> PayloadCreateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/content-upload-scan/payloads">client.contentScanning.payloads.<a href="./src/resources/content-scanning/payloads.ts">list</a>({ ...params }) -> PayloadListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/content-upload-scan/payloads/{expression_id}">client.contentScanning.payloads.<a href="./src/resources/content-scanning/payloads.ts">delete</a>(expressionId, { ...params }) -> PayloadDeleteResponsesSinglePage</code>

## Settings

Types:

- <code><a href="./src/resources/content-scanning/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/content-upload-scan/settings">client.contentScanning.settings.<a href="./src/resources/content-scanning/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>
