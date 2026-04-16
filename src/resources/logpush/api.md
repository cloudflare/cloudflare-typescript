# Logpush

## Datasets

### Fields

Types:

- <code><a href="./src/resources/logpush/datasets/fields.ts">FieldGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logpush/datasets/{dataset_id}/fields">client.logpush.datasets.fields.<a href="./src/resources/logpush/datasets/fields.ts">get</a>(datasetId, { ...params }) -> FieldGetResponse</code>

### Jobs

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logpush/datasets/{dataset_id}/jobs">client.logpush.datasets.jobs.<a href="./src/resources/logpush/datasets/jobs.ts">get</a>(datasetId, { ...params }) -> LogpushJobsSinglePage</code>

## Edge

Types:

- <code><a href="./src/resources/logpush/edge.ts">InstantLogpushJob</a></code>

Methods:

- <code title="post /zones/{zone_id}/logpush/edge/jobs">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">create</a>({ ...params }) -> InstantLogpushJob | null</code>
- <code title="get /zones/{zone_id}/logpush/edge/jobs">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">get</a>({ ...params }) -> InstantLogpushJobsSinglePage</code>

## Jobs

Types:

- <code><a href="./src/resources/logpush/jobs.ts">LogpushJob</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">OutputOptions</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">create</a>({ ...params }) -> LogpushJob | null</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">update</a>(jobId, { ...params }) -> LogpushJob | null</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">list</a>({ ...params }) -> LogpushJobsSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">delete</a>(jobId, { ...params }) -> JobDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">get</a>(jobId, { ...params }) -> LogpushJob | null</code>

## Ownership

Types:

- <code><a href="./src/resources/logpush/ownership.ts">OwnershipValidation</a></code>
- <code><a href="./src/resources/logpush/ownership.ts">OwnershipCreateResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/ownership">client.logpush.ownership.<a href="./src/resources/logpush/ownership.ts">create</a>({ ...params }) -> OwnershipCreateResponse | null</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/ownership/validate">client.logpush.ownership.<a href="./src/resources/logpush/ownership.ts">validate</a>({ ...params }) -> OwnershipValidation | null</code>

## Validate

Types:

- <code><a href="./src/resources/logpush/validate.ts">ValidateDestinationResponse</a></code>
- <code><a href="./src/resources/logpush/validate.ts">ValidateDestinationExistsResponse</a></code>
- <code><a href="./src/resources/logpush/validate.ts">ValidateOriginResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/validate/destination">client.logpush.validate.<a href="./src/resources/logpush/validate.ts">destination</a>({ ...params }) -> ValidateDestinationResponse | null</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/validate/destination/exists">client.logpush.validate.<a href="./src/resources/logpush/validate.ts">destinationExists</a>({ ...params }) -> ValidateDestinationExistsResponse | null</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/validate/origin">client.logpush.validate.<a href="./src/resources/logpush/validate.ts">origin</a>({ ...params }) -> ValidateOriginResponse | null</code>
