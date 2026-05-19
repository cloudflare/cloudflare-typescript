# Test Coverage Analysis

This document inventories the test suite in `cloudflare-typescript` and identifies
the highest-value gaps to close. It is meant as a working document, not an
exhaustive audit.

> Note: a real `jest --coverage` run was not possible in this environment
> (`node_modules` is not installed and the test suite requires a running Prism
> mock server on `:4010`). The findings below are based on static analysis of
> `src/` and `tests/`. Recommendation #1 below is to start collecting coverage
> numbers and gating CI on them.

## Inventory

| Bucket | Files | Cases (approx) | Notes |
| --- | ---:| ---:| --- |
| `tests/api-resources/**` | 677 | 3,631 | Codegen-emitted, one per API endpoint. Run against a Prism mock. |
| `tests/index.test.ts` | 1 | 32 | Top-level client tests: instantiation, headers, baseURL, retries, env vars. Content is substantive (not just codegen-templated calls). |
| `tests/uploads.test.ts` | 1 | 6 | `toFile` only. |
| `tests/form.test.ts` | 1 | 5 | `createForm` / `multipartFormRequestOptions` happy paths. |
| `tests/responses.test.ts` | 1 | 2 | `createResponseHeaders` only. |
| `tests/stringifyQuery.test.ts` | 1 | 4 cases | Covers `Cloudflare.prototype.stringifyQuery`, which is the `qs.stringify` override in `src/index.ts:492` (not the parent `Core.APIClient.stringifyQuery`). |
| `tests/qs/**` | 2 test files (+ 1 fixture, `empty-keys-cases.ts`) | many | Vendored qs library tests; well-covered. |

> Note: every file under `tests/` carries the `// File generated from our OpenAPI spec by Stainless` banner because Stainless re-emits the entire `tests/` tree. For the rows above, the distinction is whether the content is hand-authored (top-level runtime tests, qs vendored tests) or codegen-templated per endpoint (`tests/api-resources/**`).

Source side: `src/` has ~1,360 TS files (most are auto-generated resource
modules and types). The hand-maintained "runtime" surface is concentrated in:

- `src/core.ts` (~1,250 LOC) — `APIClient`, request/retry pipeline, `APIPromise`,
  `AbstractPage`, `PagePromise`, helper utilities (`safeJSON`, `castToError`,
  `coerceInteger/Float/Boolean`, `maybeCoerce*`, `readEnv`, `isEmptyObj`,
  `hasOwn`, `toBase64`, `isHeadersProtocol`, `getHeader`, `applyHeadersMut`,
  `defaultParseResponse`, `isAbsoluteURL`, …)
- `src/index.ts` (~900 LOC) — `Cloudflare` client subclass, multi-mode auth
  (`apiKey + apiEmail`, `apiToken`, `userServiceKey`), header validation,
  the `qs.stringify`-based `stringifyQuery` override.
- `src/error.ts` (~140 LOC) — `APIError` hierarchy and `APIError.generate`.
- `src/pagination.ts` (~370 LOC) — six pagination implementations.
- `src/uploads.ts` (~300 LOC) — `toFile`, predicate helpers, multipart form
  builder (nested + JSON modes).
- `src/_shims/**` — runtime detection (node / web / deno / bun / edge).

## What the existing tests do — and don't do

### Auto-generated `tests/api-resources/*`

A representative test (`tests/api-resources/audit-logs.test.ts`) does this:

```ts
const responsePromise = client.auditLogs.list({ account_id: '...' });
const rawResponse = await responsePromise.asResponse();
expect(rawResponse).toBeInstanceOf(Response);
const response = await responsePromise;
expect(response).not.toBeInstanceOf(Response);
const dataAndResponse = await responsePromise.withResponse();
expect(dataAndResponse.data).toBe(response);
expect(dataAndResponse.response).toBe(rawResponse);
```

These are essentially smoke tests against a Prism mock server. They confirm:
1. The method exists with the documented signature.
2. The SDK can serialize the request and deserialize Prism's mock response.
3. `APIPromise.asResponse()` / `withResponse()` produce the expected types.

They do **not** assert:
- The HTTP method, path, or query string actually sent.
- That request bodies are encoded the way the OpenAPI spec describes.
- Anything about the parsed response shape.
- Pagination iteration on `list` endpoints.
- Any error-path behavior (only ~107 of the 677 files have any
  `rejects.toThrow`, and those only check that `path: '/_stainless_unknown_path'`
  yields a `NotFoundError`).

### Hand-written tests

`index.test.ts` is the closest thing to a unit-test suite. It covers
default headers, default query, custom fetch, signals/abort, baseURL resolution
(including env-var precedence), `maxRetries` defaults, and the retry/backoff
header (`X-Stainless-Retry-Count`). The retry tests cover **only 429 with
`Retry-After`/`Retry-After-Ms` and request-timeout retry**.

`uploads.test.ts` covers `toFile` only and does not exercise the wider
`uploads.ts` surface (`createForm`, `addFormValueJson`,
`maybeMultipartFormRequestOptions`, `isUploadable`, async iterables,
`ArrayBuffer`/`DataView`).

`form.test.ts` covers nested `undefined` stripping but not nested objects,
arrays of objects, deeply-nested files, JSON-mode multipart, or null/`TypeError`
branches beyond a single case.

## Highest-value gaps

The following modules have substantial branching logic and effectively zero
direct unit-test coverage. They are ordered by an informal blast-radius × ease
score.

### 1. Pagination (`src/pagination.ts`) — **critical, zero direct tests**

`V4PagePagination`, `V4PagePaginationArray`, `CursorPagination`,
`CursorPaginationAfter`, `CursorLimitPagination`, and `SinglePage` each
implement `nextPageInfo()` / `getPaginatedItems()` with non-trivial logic
(cursor extraction, page increment, null cursors). On top of that,
`AbstractPage.hasNextPage` / `getNextPage` / `iterPages` / async-iterator
behavior in `core.ts` is also untested.

Recommended tests (no Prism dependency needed — drive `APIClient` with a
custom `fetch`):

- For each pagination class:
  - `nextPageInfo()` returns `null` when there are no items / no cursor.
  - `nextPageInfo()` returns the right `params` for page 1 → 2.
  - `hasNextPage()` correctness on empty result vs. populated result.
- `for await (const item of client.x.list())` walks across pages and stops.
- `getNextPage()` throws when `hasNextPage()` is false (CloudflareError path
  in `core.ts:700`).
- `nextPageInfo` returning a `url` (the alternate branch in
  `getNextPage` at `core.ts:707-714`) — currently no pagination class returns
  this shape, but the code path exists and should be locked down.

### 2. Error class generation (`src/error.ts`) — **zero tests**

`APIError.generate` is the single dispatch point that turns an HTTP status code
into the right typed error. Tests should pin:

- 400 → `BadRequestError`, 401 → `AuthenticationError`,
  403 → `PermissionDeniedError`, 404 → `NotFoundError`,
  409 → `ConflictError`, 422 → `UnprocessableEntityError`,
  429 → `RateLimitError`, 500/502/503 → `InternalServerError`,
  418 → generic `APIError`, undefined status → `APIConnectionError`.
- `APIError.makeMessage` covers all five branches (string `error.message`,
  non-string `error.message`, JSON-stringifying `error`, fallback to `message`,
  status-only "no body", neither).
- `errors` array is populated from `error.errors` and falls back to `[]`.

### 3. Auth resolution (`src/index.ts:439-490`) — **no direct tests**

The client supports four auth modes (`apiKey + apiEmail`, `apiToken`,
`userServiceKey`, custom headers) and `validateHeaders` has a precedence
ladder. None of this is exercised in `index.test.ts`, which only ever uses
`apiKey + apiEmail`.

Recommended tests:
- A request with only `apiToken` set produces `Authorization: Bearer …` and no
  `X-Auth-Key` / `X-Auth-Email`.
- A request with only `userServiceKey` produces
  `X-Auth-User-Service-Key: …`.
- `apiToken` env var (`CLOUDFLARE_API_TOKEN`) and `CLOUDFLARE_API_USER_SERVICE_KEY`
  are honored (we have the analogous test for `apiKey` / `apiEmail` already).
- `validateHeaders` throws when no auth method is set (and a custom fetch is
  not used).
- Explicitly setting any auth header to `null` opts out of validation
  (`customHeaders[…] === null` branches at `index.ts:404,411,418,425`).

### 4. Retry logic (`src/core.ts:582-656`) — partially tested

`shouldRetry` covers `x-should-retry` (true/false), 408, 409, 429, ≥500. Today
the suite only covers 429 + `Retry-After[-Ms]` and request timeouts.

Recommended tests:
- 408 / 409 / 500 / 503 retry then succeed.
- `x-should-retry: false` on a 500 stops retries.
- `x-should-retry: true` on a 200 (would not normally retry) does not retry —
  it only matters on errors; lock down the precedence.
- `Retry-After: <HTTP-date>` is honored (`core.ts:628`,
  `Date.parse(retryAfterHeader) - Date.now()`).
- `Retry-After-Ms` clamps to ≤ 60s (the `0 <= x < 60_000` guard at
  `core.ts:634`).
- Exponential backoff cap at 8s and jitter range (`core.ts:643-655`) — at
  minimum verify "5 retries doesn't exceed N seconds" and that delays are
  monotonic-ish given a fixed RNG.
- `AbortSignal` aborting *during* a retry sleep cancels the whole chain.

### 5. `defaultParseResponse` (`src/core.ts:58-85`) — **zero tests**

This is the response decoder for every request. Branches:
- `response.status === 204` → `null`.
- `__binaryResponse` → returns the raw `Response`.
- `Content-Type: application/json` and `application/vnd.api+json` (i.e. the
  `+json` suffix) → `response.json()`.
- Anything else → `response.text()`.

All four branches deserve a unit test against a custom `fetch`.

### 6. `APIPromise` (`src/core.ts:91-…`) — indirectly tested

`asResponse` / `withResponse` are touched by every generated test, but
`_thenUnwrap`, repeated `await` (the cached `parsedPromise`), and the
overridden `then`/`catch`/`finally` semantics are not. A small dedicated
`apiPromise.test.ts` would catch regressions in this very-easy-to-break Promise
subclass.

### 7. Coercion + helper utilities (`src/core.ts:1050-1230`) — **zero tests**

These are exported and used by generated code: `coerceInteger`, `coerceFloat`,
`coerceBoolean`, `maybeCoerceInteger`, `maybeCoerceFloat`, `maybeCoerceBoolean`,
`safeJSON`, `castToError`, `ensurePresent`, `readEnv`, `isEmptyObj`, `hasOwn`,
`toBase64`, `isObj`, `isHeadersProtocol`, `getRequiredHeader`, `getHeader`,
`applyHeadersMut`. They are simple pure functions — easy and high-leverage to
cover.

In particular `applyHeadersMut` (case-insensitive merge with null-to-delete
semantics) underlies `defaultHeaders` resolution and only has incidental
coverage through the existing "X-My-Default-Header" tests.

### 8. Multipart / uploads (`src/uploads.ts`)

Currently tested:
- `toFile` for `Response`-like, `File`, `fs.ReadStream`, error on bad input.
- `createForm` strips `undefined` (top-level + one level deep + array entries).

Currently **not** tested:
- `addFormValueJson` (the entire `__multipartSyntax: 'json'` branch).
- `maybeMultipartFormRequestOptions` falls back to non-multipart when no
  uploadable value is present.
- `hasUploadableValue` walks nested arrays/objects.
- `isUploadable` / `isFileLike` / `isBlobLike` / `isResponseLike` predicates
  (each exported, each used in user code via `instanceof`-style checks).
- Async-iterable `toFile` input (`Symbol.asyncIterator`).
- `ArrayBuffer` / `DataView` / `Uint8Array` `toFile` input.

### 9. URL building & query stringification (`src/core.ts:510-551`, `src/index.ts:492`)

There are two `stringifyQuery` implementations:

- `Core.APIClient.stringifyQuery` (`src/core.ts:536`) — a minimal flat
  serializer that throws a `CloudflareError` on nested objects. **Not directly
  covered by any test.**
- `Cloudflare.stringifyQuery` (`src/index.ts:492`) — overrides the parent and
  delegates to `qs.stringify` with `allowDots: true, arrayFormat: 'repeat'`.
  `tests/stringifyQuery.test.ts` exercises this override (4 happy-path cases).

Uncovered branches:

- `buildURL`: an absolute `path` (starts with a scheme) bypasses `baseURL`
  (`core.ts:520`).
- `buildURL`: `defaultQuery` merging with explicit `query`.
- `Core.APIClient.stringifyQuery`: the `CloudflareError` branch for nested
  values. A pure unit test against the parent class (or a subclass that does
  not override `stringifyQuery`) would lock this down.

The richer `qs` builder in `src/internal/qs` *is* well-covered (the vendored
test file is ~2.2k LOC). What's missing is integration: how
`Cloudflare.stringifyQuery`'s `allowDots` / `arrayFormat: 'repeat'` options
flow end-to-end on a real request with nested array/object query parameters.

### 10. API-resource tests are integration-only and shallow

The 3,631 generated cases are valuable as "did the OpenAPI codegen produce
something that compiles and matches the spec," but they don't catch:
- Wrong HTTP method/path being emitted.
- Path-param substitution bugs (e.g. forgetting to URL-encode `{zone_id}`).
- Body schema drift (a renamed field still serializes to old name).
- Pagination iteration on real list endpoints.
- Error-body parsing into `APIError.errors`.

Because they depend on Prism, they are also slow and add a hard external
dependency to local dev (`scripts/test` boots Prism on :4010).

Recommendations:
- Add a small set of **non-Prism** tests per "shape" (one for each pagination
  type, one for `delete` returning 204, one for binary download, one for
  `__binaryRequest` upload, one with a path param, one with a deep nested body)
  using a custom `fetch` that captures the request and returns canned data.
  This gives real assertion power on what the SDK *actually* sends and parses.
- The 5 tests under `tests/api-resources` that lack any `expect()` (e.g.
  `browser-rendering/pdf.test.ts`, `snippets/content.test.ts`) should be
  flagged in codegen — they currently only assert that the call doesn't throw.

### 11. Streaming, binary, and `prepareRequest` hooks

`src/core.ts` exposes `prepareOptions`/`prepareRequest` as override points and
honors `__binaryRequest`/`__binaryResponse`/`stream`. None of these are
covered. At minimum:
- `__binaryResponse: true` returns the raw `Response`.
- `stream: true` does not call `defaultParseResponse`.
- A subclass overriding `prepareRequest` sees the final `RequestInit`.

### 12. Shims (`src/_shims/**`)

Runtime detection (Node vs Bun vs Deno vs browser vs Edge) is entirely
untested. We could at least snapshot `getPlatformProperties()` under Node and
have a separate `*.web.test.ts` that loads the web shim and asserts
`X-Stainless-Runtime` / `X-Stainless-OS`.

## Cross-cutting recommendations

1. **Turn on coverage reporting.** Add `collectCoverage: true` to
   `jest.config.ts` (or a `test:coverage` script) and configure
   `coverageThreshold` for at least `src/core.ts`, `src/error.ts`,
   `src/pagination.ts`, `src/uploads.ts`, `src/index.ts`. The bulk of `src/`
   is generated code; thresholds should target the hand-written runtime.
2. **Split the test commands.** `yarn test:unit` (no Prism, fast, runs against
   a custom `fetch`) vs. `yarn test:integration` (Prism). Today everything
   requires Prism, which discourages running tests locally.
3. **Adopt a request-capturing fetch helper.** A 20-line helper that returns
   a `Cloudflare` instance plus a `getLastRequest()` accessor would unlock
   most of the unit tests proposed above without a mock server.
4. **Lock down public API surface.** A `tests/exports.test.ts` that imports
   every public name from `cloudflare`, `cloudflare/core`, `cloudflare/error`,
   `cloudflare/pagination`, `cloudflare/uploads` would catch accidental
   removals during codegen.
5. **CI gating.** Run coverage in CI and fail the build below the threshold;
   surface the report in PRs.

## Suggested first PRs

In rough priority order:
1. `tests/pagination.test.ts` — covers all six pagination classes plus
   `iterPages` / async-iterator. (~150 LOC, no Prism.)
2. `tests/error.test.ts` — covers `APIError.generate` and `makeMessage`.
   (~80 LOC, no Prism.)
3. `tests/auth.test.ts` — covers all four auth modes + `validateHeaders`
   precedence. (~100 LOC, no Prism.)
4. `tests/retry.test.ts` — extends the existing retry tests to cover
   408/409/500, `x-should-retry`, HTTP-date `Retry-After`, the 60s clamp,
   and abort-during-retry. (~150 LOC.)
5. `tests/parseResponse.test.ts` — covers `defaultParseResponse` branches.
   (~50 LOC.)
6. `tests/coerce.test.ts` + `tests/headers.test.ts` — covers the helper
   utilities. (~100 LOC combined.)
7. Enable coverage with thresholds on the hand-written runtime modules.
