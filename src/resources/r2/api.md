# R2

## Buckets

Types:

- <code><a href="./src/resources/r2/buckets/buckets.ts">Bucket</a></code>
- <code><a href="./src/resources/r2/buckets/buckets.ts">BucketListResponse</a></code>
- <code><a href="./src/resources/r2/buckets/buckets.ts">BucketDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">create</a>({ ...params }) -> Bucket</code>
- <code title="get /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">list</a>({ ...params }) -> BucketListResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">delete</a>(bucketName, { ...params }) -> BucketDeleteResponse</code>
- <code title="patch /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">edit</a>(bucketName, { ...params }) -> Bucket</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">get</a>(bucketName, { ...params }) -> Bucket</code>

### Lifecycle

Types:

- <code><a href="./src/resources/r2/buckets/lifecycle.ts">LifecycleUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/lifecycle.ts">LifecycleGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/lifecycle">client.r2.buckets.lifecycle.<a href="./src/resources/r2/buckets/lifecycle.ts">update</a>(bucketName, { ...params }) -> LifecycleUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/lifecycle">client.r2.buckets.lifecycle.<a href="./src/resources/r2/buckets/lifecycle.ts">get</a>(bucketName, { ...params }) -> LifecycleGetResponse</code>

### CORS

Types:

- <code><a href="./src/resources/r2/buckets/cors.ts">CORSUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/cors.ts">CORSDeleteResponse</a></code>
- <code><a href="./src/resources/r2/buckets/cors.ts">CORSGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/cors">client.r2.buckets.cors.<a href="./src/resources/r2/buckets/cors.ts">update</a>(bucketName, { ...params }) -> CORSUpdateResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/cors">client.r2.buckets.cors.<a href="./src/resources/r2/buckets/cors.ts">delete</a>(bucketName, { ...params }) -> CORSDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/cors">client.r2.buckets.cors.<a href="./src/resources/r2/buckets/cors.ts">get</a>(bucketName, { ...params }) -> CORSGetResponse</code>

### Domains

#### Custom

Types:

- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomCreateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomListResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomDeleteResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">create</a>(bucketName, { ...params }) -> CustomCreateResponse</code>
- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">update</a>(bucketName, domain, { ...params }) -> CustomUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">list</a>(bucketName, { ...params }) -> CustomListResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">delete</a>(bucketName, domain, { ...params }) -> CustomDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">get</a>(bucketName, domain, { ...params }) -> CustomGetResponse</code>

#### Managed

Types:

- <code><a href="./src/resources/r2/buckets/domains/managed.ts">ManagedUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/managed.ts">ManagedListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/domains/managed">client.r2.buckets.domains.managed.<a href="./src/resources/r2/buckets/domains/managed.ts">update</a>(bucketName, { ...params }) -> ManagedUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/domains/managed">client.r2.buckets.domains.managed.<a href="./src/resources/r2/buckets/domains/managed.ts">list</a>(bucketName, { ...params }) -> ManagedListResponse</code>

### EventNotifications

Types:

- <code><a href="./src/resources/r2/buckets/event-notifications.ts">EventNotificationUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/event-notifications.ts">EventNotificationListResponse</a></code>
- <code><a href="./src/resources/r2/buckets/event-notifications.ts">EventNotificationDeleteResponse</a></code>
- <code><a href="./src/resources/r2/buckets/event-notifications.ts">EventNotificationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}">client.r2.buckets.eventNotifications.<a href="./src/resources/r2/buckets/event-notifications.ts">update</a>(bucketName, queueId, { ...params }) -> EventNotificationUpdateResponse</code>
- <code title="get /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration">client.r2.buckets.eventNotifications.<a href="./src/resources/r2/buckets/event-notifications.ts">list</a>(bucketName, { ...params }) -> EventNotificationListResponse</code>
- <code title="delete /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}">client.r2.buckets.eventNotifications.<a href="./src/resources/r2/buckets/event-notifications.ts">delete</a>(bucketName, queueId, { ...params }) -> EventNotificationDeleteResponse</code>
- <code title="get /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}">client.r2.buckets.eventNotifications.<a href="./src/resources/r2/buckets/event-notifications.ts">get</a>(bucketName, queueId, { ...params }) -> EventNotificationGetResponse</code>

### Locks

Types:

- <code><a href="./src/resources/r2/buckets/locks.ts">LockUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/locks.ts">LockGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/lock">client.r2.buckets.locks.<a href="./src/resources/r2/buckets/locks.ts">update</a>(bucketName, { ...params }) -> LockUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/lock">client.r2.buckets.locks.<a href="./src/resources/r2/buckets/locks.ts">get</a>(bucketName, { ...params }) -> LockGetResponse</code>

### Metrics

Types:

- <code><a href="./src/resources/r2/buckets/metrics.ts">MetricListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/r2/metrics">client.r2.buckets.metrics.<a href="./src/resources/r2/buckets/metrics.ts">list</a>({ ...params }) -> MetricListResponse</code>

### Sippy

Types:

- <code><a href="./src/resources/r2/buckets/sippy.ts">Provider</a></code>
- <code><a href="./src/resources/r2/buckets/sippy.ts">Sippy</a></code>
- <code><a href="./src/resources/r2/buckets/sippy.ts">SippyDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.buckets.sippy.<a href="./src/resources/r2/buckets/sippy.ts">update</a>(bucketName, { ...params }) -> Sippy</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.buckets.sippy.<a href="./src/resources/r2/buckets/sippy.ts">delete</a>(bucketName, { ...params }) -> SippyDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.buckets.sippy.<a href="./src/resources/r2/buckets/sippy.ts">get</a>(bucketName, { ...params }) -> Sippy</code>

### Objects

Types:

- <code><a href="./src/resources/r2/buckets/objects.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/r2/buckets/objects.ts">ObjectDeleteResponse</a></code>
- <code><a href="./src/resources/r2/buckets/objects.ts">ObjectUploadResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/objects">client.r2.buckets.objects.<a href="./src/resources/r2/buckets/objects.ts">list</a>(bucketName, { ...params }) -> ObjectListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/objects/{object_key}">client.r2.buckets.objects.<a href="./src/resources/r2/buckets/objects.ts">delete</a>(bucketName, objectKey, { ...params }) -> ObjectDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/objects/{object_key}">client.r2.buckets.objects.<a href="./src/resources/r2/buckets/objects.ts">get</a>(bucketName, objectKey, { ...params }) -> Response</code>
- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/objects/{object_key}">client.r2.buckets.objects.<a href="./src/resources/r2/buckets/objects.ts">upload</a>(bucketName, objectKey, body, { ...params }) -> ObjectUploadResponse</code>

## TemporaryCredentials

Types:

- <code><a href="./src/resources/r2/temporary-credentials.ts">TemporaryCredential</a></code>
- <code><a href="./src/resources/r2/temporary-credentials.ts">TemporaryCredentialCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/temp-access-credentials">client.r2.temporaryCredentials.<a href="./src/resources/r2/temporary-credentials.ts">create</a>({ ...params }) -> TemporaryCredentialCreateResponse</code>

## SuperSlurper

### Jobs

Types:

- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobCreateResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobAbortResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobAbortAllResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobGetResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobPauseResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobProgressResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobResumeResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/slurper/jobs">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">create</a>({ ...params }) -> JobCreateResponse</code>
- <code title="get /accounts/{account_id}/slurper/jobs">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">list</a>({ ...params }) -> JobListResponsesSinglePage</code>
- <code title="put /accounts/{account_id}/slurper/jobs/{job_id}/abort">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">abort</a>(jobId, { ...params }) -> JobAbortResponse</code>
- <code title="put /accounts/{account_id}/slurper/jobs/abortAll">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">abortAll</a>({ ...params }) -> JobAbortAllResponse</code>
- <code title="get /accounts/{account_id}/slurper/jobs/{job_id}">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">get</a>(jobId, { ...params }) -> JobGetResponse</code>
- <code title="put /accounts/{account_id}/slurper/jobs/{job_id}/pause">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">pause</a>(jobId, { ...params }) -> JobPauseResponse</code>
- <code title="get /accounts/{account_id}/slurper/jobs/{job_id}/progress">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">progress</a>(jobId, { ...params }) -> JobProgressResponse</code>
- <code title="put /accounts/{account_id}/slurper/jobs/{job_id}/resume">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">resume</a>(jobId, { ...params }) -> JobResumeResponse</code>

#### Logs

Types:

- <code><a href="./src/resources/r2/super-slurper/jobs/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/slurper/jobs/{job_id}/logs">client.r2.superSlurper.jobs.logs.<a href="./src/resources/r2/super-slurper/jobs/logs.ts">list</a>(jobId, { ...params }) -> LogListResponsesSinglePage</code>

### ConnectivityPrecheck

Types:

- <code><a href="./src/resources/r2/super-slurper/connectivity-precheck.ts">ConnectivityPrecheckSourceResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/connectivity-precheck.ts">ConnectivityPrecheckTargetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/slurper/source/connectivity-precheck">client.r2.superSlurper.connectivityPrecheck.<a href="./src/resources/r2/super-slurper/connectivity-precheck.ts">source</a>({ ...params }) -> ConnectivityPrecheckSourceResponse</code>
- <code title="put /accounts/{account_id}/slurper/target/connectivity-precheck">client.r2.superSlurper.connectivityPrecheck.<a href="./src/resources/r2/super-slurper/connectivity-precheck.ts">target</a>({ ...params }) -> ConnectivityPrecheckTargetResponse</code>
