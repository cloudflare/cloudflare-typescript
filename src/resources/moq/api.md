# MoQ

## Relays

Types:

- <code><a href="./src/resources/moq/relays/relays.ts">RelayCreateResponse</a></code>
- <code><a href="./src/resources/moq/relays/relays.ts">RelayUpdateResponse</a></code>
- <code><a href="./src/resources/moq/relays/relays.ts">RelayListResponse</a></code>
- <code><a href="./src/resources/moq/relays/relays.ts">RelayDeleteResponse</a></code>
- <code><a href="./src/resources/moq/relays/relays.ts">RelayGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/moq/relays">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">create</a>({ ...params }) -> RelayCreateResponse</code>
- <code title="put /accounts/{account_id}/moq/relays/{relay_id}">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">update</a>(relayID, { ...params }) -> RelayUpdateResponse</code>
- <code title="get /accounts/{account_id}/moq/relays">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">list</a>({ ...params }) -> RelayListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/moq/relays/{relay_id}">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">delete</a>(relayID, { ...params }) -> RelayDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/moq/relays/{relay_id}">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">get</a>(relayID, { ...params }) -> RelayGetResponse</code>

### Tokens

Types:

- <code><a href="./src/resources/moq/relays/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/moq/relays/tokens.ts">TokenListResponse</a></code>
- <code><a href="./src/resources/moq/relays/tokens.ts">TokenDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/moq/relays/{relay_id}/tokens">client.moq.relays.tokens.<a href="./src/resources/moq/relays/tokens.ts">create</a>(relayID, { ...params }) -> TokenCreateResponse</code>
- <code title="get /accounts/{account_id}/moq/relays/{relay_id}/tokens">client.moq.relays.tokens.<a href="./src/resources/moq/relays/tokens.ts">list</a>(relayID, { ...params }) -> TokenListResponse</code>
- <code title="delete /accounts/{account_id}/moq/relays/{relay_id}/tokens/{jti}">client.moq.relays.tokens.<a href="./src/resources/moq/relays/tokens.ts">delete</a>(jti, { ...params }) -> TokenDeleteResponse</code>
