# BrandProtection

Types:

- <code><a href="./src/resources/brand-protection/brand-protection.ts">Info</a></code>
- <code><a href="./src/resources/brand-protection/brand-protection.ts">Submit</a></code>
- <code><a href="./src/resources/brand-protection/brand-protection.ts">BrandProtectionSubmitResponse</a></code>
- <code><a href="./src/resources/brand-protection/brand-protection.ts">BrandProtectionURLInfoResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/brand-protection/submit">client.brandProtection.<a href="./src/resources/brand-protection/brand-protection.ts">submit</a>({ ...params }) -> BrandProtectionSubmitResponse</code>
- <code title="get /accounts/{account_id}/brand-protection/url-info">client.brandProtection.<a href="./src/resources/brand-protection/brand-protection.ts">urlInfo</a>({ ...params }) -> BrandProtectionURLInfoResponsesSinglePage</code>

## Queries

Methods:

- <code title="post /accounts/{account_id}/brand-protection/queries">client.brandProtection.queries.<a href="./src/resources/brand-protection/queries.ts">create</a>({ ...params }) -> void</code>
- <code title="delete /accounts/{account_id}/brand-protection/queries">client.brandProtection.queries.<a href="./src/resources/brand-protection/queries.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /accounts/{account_id}/brand-protection/queries/bulk">client.brandProtection.queries.<a href="./src/resources/brand-protection/queries.ts">bulk</a>({ ...params }) -> void</code>

## Matches

Types:

- <code><a href="./src/resources/brand-protection/matches.ts">MatchDownloadResponse</a></code>
- <code><a href="./src/resources/brand-protection/matches.ts">MatchGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/brand-protection/matches/download">client.brandProtection.matches.<a href="./src/resources/brand-protection/matches.ts">download</a>({ ...params }) -> MatchDownloadResponse</code>
- <code title="get /accounts/{account_id}/brand-protection/matches">client.brandProtection.matches.<a href="./src/resources/brand-protection/matches.ts">get</a>({ ...params }) -> MatchGetResponse</code>

## Logos

Types:

- <code><a href="./src/resources/brand-protection/logos.ts">LogoCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/brand-protection/logos">client.brandProtection.logos.<a href="./src/resources/brand-protection/logos.ts">create</a>({ ...params }) -> LogoCreateResponse</code>
- <code title="delete /accounts/{account_id}/brand-protection/logos/{logo_id}">client.brandProtection.logos.<a href="./src/resources/brand-protection/logos.ts">delete</a>(logoId, { ...params }) -> void</code>

## LogoMatches

Types:

- <code><a href="./src/resources/brand-protection/logo-matches.ts">LogoMatchDownloadResponse</a></code>
- <code><a href="./src/resources/brand-protection/logo-matches.ts">LogoMatchGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/brand-protection/logo-matches/download">client.brandProtection.logoMatches.<a href="./src/resources/brand-protection/logo-matches.ts">download</a>({ ...params }) -> LogoMatchDownloadResponse</code>
- <code title="get /accounts/{account_id}/brand-protection/logo-matches">client.brandProtection.logoMatches.<a href="./src/resources/brand-protection/logo-matches.ts">get</a>({ ...params }) -> LogoMatchGetResponse</code>

## V2

### Queries

Types:

- <code><a href="./src/resources/brand-protection/v2/queries.ts">QueryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/queries">client.brandProtection.v2.queries.<a href="./src/resources/brand-protection/v2/queries.ts">get</a>({ ...params }) -> QueryGetResponse</code>

### Matches

Types:

- <code><a href="./src/resources/brand-protection/v2/matches.ts">MatchGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/v2/brand-protection/domain/matches">client.brandProtection.v2.matches.<a href="./src/resources/brand-protection/v2/matches.ts">get</a>({ ...params }) -> MatchGetResponse</code>

### Logos

Types:

- <code><a href="./src/resources/brand-protection/v2/logos.ts">LogoCreateResponse</a></code>
- <code><a href="./src/resources/brand-protection/v2/logos.ts">LogoDeleteResponse</a></code>
- <code><a href="./src/resources/brand-protection/v2/logos.ts">LogoGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries">client.brandProtection.v2.logos.<a href="./src/resources/brand-protection/v2/logos.ts">create</a>({ ...params }) -> LogoCreateResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries/{query_id}">client.brandProtection.v2.logos.<a href="./src/resources/brand-protection/v2/logos.ts">delete</a>(queryId, { ...params }) -> LogoDeleteResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/queries">client.brandProtection.v2.logos.<a href="./src/resources/brand-protection/v2/logos.ts">get</a>({ ...params }) -> LogoGetResponse</code>

### LogoMatches

Types:

- <code><a href="./src/resources/brand-protection/v2/logo-matches.ts">LogoMatchGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/v2/brand-protection/logo/matches">client.brandProtection.v2.logoMatches.<a href="./src/resources/brand-protection/v2/logo-matches.ts">get</a>({ ...params }) -> LogoMatchGetResponse</code>
