# Turnstile

## Widgets

Types:

- <code><a href="./src/resources/turnstile/widgets.ts">Widget</a></code>
- <code><a href="./src/resources/turnstile/widgets.ts">WidgetDomain</a></code>
- <code><a href="./src/resources/turnstile/widgets.ts">WidgetListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/challenges/widgets">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">create</a>({ ...params }) -> Widget</code>
- <code title="put /accounts/{account_id}/challenges/widgets/{sitekey}">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">update</a>(sitekey, { ...params }) -> Widget</code>
- <code title="get /accounts/{account_id}/challenges/widgets">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">list</a>({ ...params }) -> WidgetListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/challenges/widgets/{sitekey}">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">delete</a>(sitekey, { ...params }) -> Widget</code>
- <code title="get /accounts/{account_id}/challenges/widgets/{sitekey}">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">get</a>(sitekey, { ...params }) -> Widget</code>
- <code title="post /accounts/{account_id}/challenges/widgets/{sitekey}/rotate_secret">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">rotateSecret</a>(sitekey, { ...params }) -> Widget</code>
