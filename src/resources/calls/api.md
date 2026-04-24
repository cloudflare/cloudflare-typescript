# Calls

## SFU

Types:

- <code><a href="./src/resources/calls/sfu.ts">SFUCreateResponse</a></code>
- <code><a href="./src/resources/calls/sfu.ts">SFUUpdateResponse</a></code>
- <code><a href="./src/resources/calls/sfu.ts">SFUListResponse</a></code>
- <code><a href="./src/resources/calls/sfu.ts">SFUDeleteResponse</a></code>
- <code><a href="./src/resources/calls/sfu.ts">SFUGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/calls/apps">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">create</a>({ ...params }) -> SFUCreateResponse</code>
- <code title="put /accounts/{account_id}/calls/apps/{app_id}">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">update</a>(appId, { ...params }) -> SFUUpdateResponse</code>
- <code title="get /accounts/{account_id}/calls/apps">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">list</a>({ ...params }) -> SFUListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/calls/apps/{app_id}">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">delete</a>(appId, { ...params }) -> SFUDeleteResponse</code>
- <code title="get /accounts/{account_id}/calls/apps/{app_id}">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">get</a>(appId, { ...params }) -> SFUGetResponse</code>

## TURN

Types:

- <code><a href="./src/resources/calls/turn.ts">TURNCreateResponse</a></code>
- <code><a href="./src/resources/calls/turn.ts">TURNUpdateResponse</a></code>
- <code><a href="./src/resources/calls/turn.ts">TURNListResponse</a></code>
- <code><a href="./src/resources/calls/turn.ts">TURNDeleteResponse</a></code>
- <code><a href="./src/resources/calls/turn.ts">TURNGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/calls/turn_keys">client.calls.turn.<a href="./src/resources/calls/turn.ts">create</a>({ ...params }) -> TURNCreateResponse</code>
- <code title="put /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.<a href="./src/resources/calls/turn.ts">update</a>(keyId, { ...params }) -> TURNUpdateResponse</code>
- <code title="get /accounts/{account_id}/calls/turn_keys">client.calls.turn.<a href="./src/resources/calls/turn.ts">list</a>({ ...params }) -> TURNListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.<a href="./src/resources/calls/turn.ts">delete</a>(keyId, { ...params }) -> TURNDeleteResponse</code>
- <code title="get /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.<a href="./src/resources/calls/turn.ts">get</a>(keyId, { ...params }) -> TURNGetResponse</code>
