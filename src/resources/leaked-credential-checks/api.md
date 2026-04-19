# LeakedCredentialChecks

Types:

- <code><a href="./src/resources/leaked-credential-checks/leaked-credential-checks.ts">LeakedCredentialCheckCreateResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/leaked-credential-checks.ts">LeakedCredentialCheckGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/leaked-credential-checks">client.leakedCredentialChecks.<a href="./src/resources/leaked-credential-checks/leaked-credential-checks.ts">create</a>({ ...params }) -> LeakedCredentialCheckCreateResponse</code>
- <code title="get /zones/{zone_id}/leaked-credential-checks">client.leakedCredentialChecks.<a href="./src/resources/leaked-credential-checks/leaked-credential-checks.ts">get</a>({ ...params }) -> LeakedCredentialCheckGetResponse</code>

## Detections

Types:

- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionCreateResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionUpdateResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionListResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionDeleteResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/leaked-credential-checks/detections">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">create</a>({ ...params }) -> DetectionCreateResponse</code>
- <code title="put /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">update</a>(detectionId, { ...params }) -> DetectionUpdateResponse</code>
- <code title="get /zones/{zone_id}/leaked-credential-checks/detections">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">list</a>({ ...params }) -> DetectionListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">delete</a>(detectionId, { ...params }) -> DetectionDeleteResponse</code>
- <code title="get /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">get</a>(detectionId, { ...params }) -> DetectionGetResponse</code>
