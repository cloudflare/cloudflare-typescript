# Changelog

## 7.0.0 (2026-07-01)

Full Changelog: [v6.5.0...v7.0.0](https://github.com/cloudflare/cloudflare-typescript/compare/v6.5.0...v7.0.0)

This is a major release with significant breaking changes to the SDK internals and API surface.
The SDK now uses the builtin Web fetch API, has zero runtime dependencies, and adopts a new
parameter convention for methods with multiple path parameters. A migration CLI is included to
help automate code updates.

Please read through the breaking changes below and the [Migration Guide](./MIGRATION.md) before
upgrading. You can also run the automated migration tool:

```sh
npx cloudflare migrate ./your/src/folders
```

---

### General Changes

#### Zero dependencies

The SDK no longer depends on `node-fetch`, `agentkeepalive`, `form-data-encoder`, `formdata-node`,
or `abort-controller`. It uses the builtin Web fetch API on all platforms. The `dependencies` field
in `package.json` is now empty.

#### New client options

- **`fetchOptions`** -- pass additional `RequestInit` options to every `fetch` call (e.g. custom
  `signal`, `keepalive`, `cache`). Per-request `fetchOptions` override the client-level default.
- **`logLevel`** / **`logger`** -- configure SDK logging. Defaults to `process.env['CLOUDFLARE_LOG']`
  or `'warn'`. Set `logLevel: 'debug'` for request/response tracing.

#### Removed client options

- **`apiVersion`** -- removed. API versioning is no longer configured at the client level.
- **`httpAgent`** -- removed. Use `fetchOptions` to pass agent-like configuration instead.

#### Type changes

- `defaultHeaders` type changed from `Core.Headers` to `HeadersLike`
- `fetch` type changed from `Core.Fetch` to `Fetch`

#### Internal restructuring

The SDK internals have been reorganized:
- `src/core.ts` -> split into `src/core/` modules (`api-promise.ts`, `error.ts`, `pagination.ts`,
  `resource.ts`, `uploads.ts`)
- `src/_shims/` -> replaced by `src/internal/` (`builtin-types.ts`, `detect-platform.ts`,
  `errors.ts`, `headers.ts`, `parse.ts`, `shims.ts`, etc.)
- `src/index.ts` now re-exports from `src/client.ts`

Import paths for internal modules have changed. If you were importing from `cloudflare/core` or
`cloudflare/_shims`, update your imports accordingly.

---

### Breaking Changes

#### Named path parameters

Methods that take multiple path parameters now use named instead of positional arguments for all
but the _last_ path parameter. This prevents a common footgun where arguments could be accidentally
passed in the wrong order.

```ts
// Before (v6.x)
client.accounts.members.get(memberId, { account_id: '...' });

// After (v7.0.0)
client.accounts.members.get(memberID, { account_id: '...' });
```

For methods with 3+ path parameters, intermediate parameters move into the options object:

```ts
// Before (v6.x)
client.customHostnames.certificatePack.certificates.update(
  customHostnameId, certificatePackId, certificateId, { ...params }
);

// After (v7.0.0)
client.customHostnames.certificatePack.certificates.update(
  certificateID, { custom_hostname_id: '...', certificate_pack_id: '...', ...params }
);
```

This affects 232 methods across the SDK. See the [Migration Guide](./MIGRATION.md) for the
complete list.

#### Parameter name casing (`camelCase` -> `UPPER_ID`)

Path parameter argument names have been standardized from `camelCase` to `UPPER_ID` format
across 792 methods:

```ts
// Before (v6.x)
client.alerting.policies.get(policyId, { ...params });

// After (v7.0.0)
client.alerting.policies.get(policyID, { ...params });
```

While this is not a runtime breaking change (positional arguments work regardless of name),
it is a TypeScript compilation change if you were using named/destructured parameters.

#### Web types for `withResponse`, `asResponse`, and `APIError.headers`

The SDK now uses the builtin Web fetch API on all platforms. If you accessed `node-fetch`-specific
properties on response objects, you need to switch to standardized alternatives:

```ts
// Before (v6.x)
const res = await client.example.retrieve('id').asResponse();
res.body.pipe(process.stdout);

// After (v7.0.0)
import { Readable } from 'node:stream';
const res = await client.example.retrieve('id').asResponse();
Readable.fromWeb(res.body).pipe(process.stdout);
```

The `headers` property on `APIError` objects is now an instance of the Web `Headers` class
(previously `Record<string, string | null | undefined>`).

#### Return type changes

| Resource | Method | Old Return Type | New Return Type |
|----------|--------|----------------|-----------------|
| `zeroTrust.devices.dexTests` | `create()` | `DEXTestCreateResponse` | `SchemaHTTP` |
| `zeroTrust.devices.dexTests` | `update()` | `DEXTestUpdateResponse` | `SchemaHTTP` |
| `zeroTrust.devices.dexTests` | `list()` | `DEXTestListResponsesV4PagePaginationArray` | `SchemaHTTPSV4PagePaginationArray` |
| `zeroTrust.devices.dexTests` | `get()` | `DEXTestGetResponse` | `SchemaHTTP` |

#### Removed types

- `DEXTestCreateResponse` (use `SchemaHTTP`)
- `DEXTestUpdateResponse` (use `SchemaHTTP`)
- `DEXTestListResponse` (use `SchemaHTTPS`)
- `DEXTestGetResponse` (use `SchemaHTTP`)

#### Method renames (`Id` -> `ID`)

Several methods were renamed to use consistent `ID` casing:

| Resource | Old Method | New Method |
|----------|-----------|------------|
| `vectorize.indexes` | `deleteByIds()` | `deleteByIDs()` |
| `vectorize.indexes` | `getByIds()` | `getByIDs()` |
| `realtimeKit.meetings` | `getMeetingById()` | `getMeetingByID()` |
| `realtimeKit.meetings` | `replaceMeetingById()` | `replaceMeetingByID()` |
| `realtimeKit.meetings` | `updateMeetingById()` | `updateMeetingByID()` |
| `realtimeKit.presets` | `getPresetById()` | `getPresetByID()` |
| `realtimeKit.sessions` | `getParticipantDataFromPeerId()` | `getParticipantDataFromPeerID()` |
| `realtimeKit.webhooks` | `getWebhookById()` | `getWebhookByID()` |
| `realtimeKit.livestreams` | `getActiveLivestreamsForLivestreamId()` | `getActiveLivestreamsForLivestreamID()` |
| `realtimeKit.livestreams` | `getLivestreamSessionDetailsForSessionId()` | `getLivestreamSessionDetailsForSessionID()` |
| `realtimeKit.livestreams` | `getLivestreamSessionForLivestreamId()` | `getLivestreamSessionForLivestreamID()` |

---

### Features

#### New Resources

- **`registrar.registrations`** -- `create()`, `list()`, `edit()`, `get()` for domain registrations

#### New Methods

- **`accounts.logs.audit.history()`** -- `GET /accounts/{account_id}/logs/audit/{id}/history`
- **`accounts.logs.audit.productCategories()`** -- `GET /accounts/{account_id}/logs/audit/product_categories`
- **`organizations.logs.audit.history()`** -- `GET /organizations/{organization_id}/logs/audit/{id}/history`
- **`emailRouting.unlock()`** -- `POST /zones/{zone_id}/email/routing/unlock`
- **`emailRouting.addresses.edit()`** -- `PATCH /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}`

#### New Types

- `AuditHistoryResponse` (on `accounts.logs.audit` and `organizations.logs.audit`)
- `AuditProductCategoriesResponse` (on `accounts.logs.audit`)

---

### Bug Fixes

- **workflows:** move Workflow payload types into `Payload` namespace to avoid TS2717 duplicate
  identifier errors

---

### Chores

- Zero runtime dependencies (removed `node-fetch`, `agentkeepalive`, `form-data-encoder`,
  `formdata-node`, `abort-controller`)
- TypeScript upgraded to 5.8.3 (from ^4.8.2)
- ESLint upgraded to ^9.39.1 (from ^8.49.0)
- Node.js minimum version: 20 LTS
- Internal module restructuring (`src/core.ts` -> `src/core/`, `src/_shims/` -> `src/internal/`)
