# Speed

Types:

- <code><a href="./src/resources/speed/speed.ts">LabeledRegion</a></code>
- <code><a href="./src/resources/speed/speed.ts">LighthouseReport</a></code>
- <code><a href="./src/resources/speed/speed.ts">Trend</a></code>

## Schedule

Types:

- <code><a href="./src/resources/speed/schedule.ts">Schedule</a></code>
- <code><a href="./src/resources/speed/schedule.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/speed/schedule.ts">ScheduleDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">create</a>(url, { ...params }) -> ScheduleCreateResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">delete</a>(url, { ...params }) -> ScheduleDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">get</a>(url, { ...params }) -> Schedule</code>

## Availabilities

Types:

- <code><a href="./src/resources/speed/availabilities.ts">Availability</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/availabilities">client.speed.availabilities.<a href="./src/resources/speed/availabilities.ts">list</a>({ ...params }) -> Availability</code>

## Pages

Types:

- <code><a href="./src/resources/speed/pages/pages.ts">PageListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/pages">client.speed.pages.<a href="./src/resources/speed/pages/pages.ts">list</a>({ ...params }) -> PageListResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/trend">client.speed.pages.<a href="./src/resources/speed/pages/pages.ts">trend</a>(url, { ...params }) -> Trend</code>

### Tests

Types:

- <code><a href="./src/resources/speed/pages/tests.ts">Test</a></code>
- <code><a href="./src/resources/speed/pages/tests.ts">TestDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">create</a>(url, { ...params }) -> Test</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">list</a>(url, { ...params }) -> TestsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">delete</a>(url, { ...params }) -> TestDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">get</a>(url, testId, { ...params }) -> Test</code>
