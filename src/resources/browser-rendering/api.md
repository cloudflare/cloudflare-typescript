# BrowserRendering

## Content

Types:

- <code><a href="./src/resources/browser-rendering/content.ts">ContentCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/content">client.browserRendering.content.<a href="./src/resources/browser-rendering/content.ts">create</a>({ ...params }) -> ContentCreateResponse</code>

## PDF

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/pdf">client.browserRendering.pdf.<a href="./src/resources/browser-rendering/pdf.ts">create</a>({ ...params }) -> Response</code>

## Scrape

Types:

- <code><a href="./src/resources/browser-rendering/scrape.ts">ScrapeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/scrape">client.browserRendering.scrape.<a href="./src/resources/browser-rendering/scrape.ts">create</a>({ ...params }) -> ScrapeCreateResponse</code>

## Screenshot

Types:

- <code><a href="./src/resources/browser-rendering/screenshot.ts">ScreenshotCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/screenshot">client.browserRendering.screenshot.<a href="./src/resources/browser-rendering/screenshot.ts">create</a>({ ...params }) -> ScreenshotCreateResponse</code>

## Snapshot

Types:

- <code><a href="./src/resources/browser-rendering/snapshot.ts">SnapshotCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/snapshot">client.browserRendering.snapshot.<a href="./src/resources/browser-rendering/snapshot.ts">create</a>({ ...params }) -> SnapshotCreateResponse</code>

## Json

Types:

- <code><a href="./src/resources/browser-rendering/json.ts">JsonCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/json">client.browserRendering.json.<a href="./src/resources/browser-rendering/json.ts">create</a>({ ...params }) -> JsonCreateResponse</code>

## Links

Types:

- <code><a href="./src/resources/browser-rendering/links.ts">LinkCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/links">client.browserRendering.links.<a href="./src/resources/browser-rendering/links.ts">create</a>({ ...params }) -> LinkCreateResponse</code>

## Markdown

Types:

- <code><a href="./src/resources/browser-rendering/markdown.ts">MarkdownCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/markdown">client.browserRendering.markdown.<a href="./src/resources/browser-rendering/markdown.ts">create</a>({ ...params }) -> MarkdownCreateResponse</code>

## Crawl

Types:

- <code><a href="./src/resources/browser-rendering/crawl.ts">CrawlCreateResponse</a></code>
- <code><a href="./src/resources/browser-rendering/crawl.ts">CrawlDeleteResponse</a></code>
- <code><a href="./src/resources/browser-rendering/crawl.ts">CrawlGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/crawl">client.browserRendering.crawl.<a href="./src/resources/browser-rendering/crawl.ts">create</a>({ ...params }) -> CrawlCreateResponse</code>
- <code title="delete /accounts/{account_id}/browser-rendering/crawl/{job_id}">client.browserRendering.crawl.<a href="./src/resources/browser-rendering/crawl.ts">delete</a>(jobId, { ...params }) -> CrawlDeleteResponse</code>
- <code title="get /accounts/{account_id}/browser-rendering/crawl/{job_id}">client.browserRendering.crawl.<a href="./src/resources/browser-rendering/crawl.ts">get</a>(jobId, { ...params }) -> CrawlGetResponse</code>

## Devtools

### Session

Types:

- <code><a href="./src/resources/browser-rendering/devtools/session.ts">SessionListResponse</a></code>
- <code><a href="./src/resources/browser-rendering/devtools/session.ts">SessionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/browser-rendering/devtools/session">client.browserRendering.devtools.session.<a href="./src/resources/browser-rendering/devtools/session.ts">list</a>({ ...params }) -> SessionListResponse</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/session/{session_id}">client.browserRendering.devtools.session.<a href="./src/resources/browser-rendering/devtools/session.ts">get</a>(sessionId, { ...params }) -> SessionGetResponse | null</code>

### Browser

Types:

- <code><a href="./src/resources/browser-rendering/devtools/browser/browser.ts">BrowserCreateResponse</a></code>
- <code><a href="./src/resources/browser-rendering/devtools/browser/browser.ts">BrowserDeleteResponse</a></code>
- <code><a href="./src/resources/browser-rendering/devtools/browser/browser.ts">BrowserProtocolResponse</a></code>
- <code><a href="./src/resources/browser-rendering/devtools/browser/browser.ts">BrowserVersionResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/devtools/browser">client.browserRendering.devtools.browser.<a href="./src/resources/browser-rendering/devtools/browser/browser.ts">create</a>({ ...params }) -> BrowserCreateResponse</code>
- <code title="delete /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}">client.browserRendering.devtools.browser.<a href="./src/resources/browser-rendering/devtools/browser/browser.ts">delete</a>(sessionId, { ...params }) -> BrowserDeleteResponse</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}">client.browserRendering.devtools.browser.<a href="./src/resources/browser-rendering/devtools/browser/browser.ts">connect</a>(sessionId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser">client.browserRendering.devtools.browser.<a href="./src/resources/browser-rendering/devtools/browser/browser.ts">launch</a>({ ...params }) -> void</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/protocol">client.browserRendering.devtools.browser.<a href="./src/resources/browser-rendering/devtools/browser/browser.ts">protocol</a>(sessionId, { ...params }) -> BrowserProtocolResponse</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/version">client.browserRendering.devtools.browser.<a href="./src/resources/browser-rendering/devtools/browser/browser.ts">version</a>(sessionId, { ...params }) -> BrowserVersionResponse</code>

#### Page

Methods:

- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/page/{target_id}">client.browserRendering.devtools.browser.page.<a href="./src/resources/browser-rendering/devtools/browser/page.ts">get</a>(sessionId, targetId, { ...params }) -> void</code>

#### Targets

Types:

- <code><a href="./src/resources/browser-rendering/devtools/browser/targets.ts">TargetCreateResponse</a></code>
- <code><a href="./src/resources/browser-rendering/devtools/browser/targets.ts">TargetListResponse</a></code>
- <code><a href="./src/resources/browser-rendering/devtools/browser/targets.ts">TargetActivateResponse</a></code>
- <code><a href="./src/resources/browser-rendering/devtools/browser/targets.ts">TargetCloseResponse</a></code>
- <code><a href="./src/resources/browser-rendering/devtools/browser/targets.ts">TargetGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/new">client.browserRendering.devtools.browser.targets.<a href="./src/resources/browser-rendering/devtools/browser/targets.ts">create</a>(sessionId, { ...params }) -> TargetCreateResponse</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/list">client.browserRendering.devtools.browser.targets.<a href="./src/resources/browser-rendering/devtools/browser/targets.ts">list</a>(sessionId, { ...params }) -> TargetListResponse</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/activate/{target_id}">client.browserRendering.devtools.browser.targets.<a href="./src/resources/browser-rendering/devtools/browser/targets.ts">activate</a>(sessionId, targetId, { ...params }) -> TargetActivateResponse</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/close/{target_id}">client.browserRendering.devtools.browser.targets.<a href="./src/resources/browser-rendering/devtools/browser/targets.ts">close</a>(sessionId, targetId, { ...params }) -> TargetCloseResponse</code>
- <code title="get /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/list/{target_id}">client.browserRendering.devtools.browser.targets.<a href="./src/resources/browser-rendering/devtools/browser/targets.ts">get</a>(sessionId, targetId, { ...params }) -> TargetGetResponse</code>
