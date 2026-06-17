# Moq

## Relays

Types:

- <code><a href="./src/resources/moq/relays/relays.ts">RelayCreateResponse</a></code>
- <code><a href="./src/resources/moq/relays/relays.ts">RelayUpdateResponse</a></code>
- <code><a href="./src/resources/moq/relays/relays.ts">RelayListResponse</a></code>
- <code><a href="./src/resources/moq/relays/relays.ts">RelayDeleteResponse</a></code>
- <code><a href="./src/resources/moq/relays/relays.ts">RelayGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/moq/relays">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">create</a>({ ...params }) -> RelayCreateResponse</code>
- <code title="put /accounts/{account_id}/moq/relays/{relay_id}">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">update</a>(relayId, { ...params }) -> RelayUpdateResponse</code>
- <code title="get /accounts/{account_id}/moq/relays">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">list</a>({ ...params }) -> RelayListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/moq/relays/{relay_id}">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">delete</a>(relayId, { ...params }) -> RelayDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/moq/relays/{relay_id}">client.moq.relays.<a href="./src/resources/moq/relays/relays.ts">get</a>(relayId, { ...params }) -> RelayGetResponse</code>

### Tokens

Types:

- <code><a href="./src/resources/moq/relays/tokens.ts">TokenRotateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/moq/relays/{relay_id}/tokens/rotate">client.moq.relays.tokens.<a href="./src/resources/moq/relays/tokens.ts">rotate</a>(relayId, { ...params }) -> TokenRotateResponse</code>
