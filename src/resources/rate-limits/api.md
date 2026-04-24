# RateLimits

Types:

- <code><a href="./src/resources/rate-limits.ts">Action</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimit</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">create</a>({ ...params }) -> RateLimit</code>
- <code title="get /zones/{zone_id}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">list</a>({ ...params }) -> RateLimitsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/rate_limits/{rate_limit_id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">delete</a>(rateLimitId, { ...params }) -> RateLimitDeleteResponse</code>
- <code title="put /zones/{zone_id}/rate_limits/{rate_limit_id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">edit</a>(rateLimitId, { ...params }) -> RateLimit</code>
- <code title="get /zones/{zone_id}/rate_limits/{rate_limit_id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">get</a>(rateLimitId, { ...params }) -> RateLimit</code>
