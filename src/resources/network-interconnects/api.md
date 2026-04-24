# NetworkInterconnects

## CNIs

Types:

- <code><a href="./src/resources/network-interconnects/cnis.ts">CNICreateResponse</a></code>
- <code><a href="./src/resources/network-interconnects/cnis.ts">CNIUpdateResponse</a></code>
- <code><a href="./src/resources/network-interconnects/cnis.ts">CNIListResponse</a></code>
- <code><a href="./src/resources/network-interconnects/cnis.ts">CNIGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cni/cnis">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">create</a>({ ...params }) -> CNICreateResponse</code>
- <code title="put /accounts/{account_id}/cni/cnis/{cni}">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">update</a>(cni, { ...params }) -> CNIUpdateResponse</code>
- <code title="get /accounts/{account_id}/cni/cnis">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">list</a>({ ...params }) -> CNIListResponse</code>
- <code title="delete /accounts/{account_id}/cni/cnis/{cni}">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">delete</a>(cni, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/cni/cnis/{cni}">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">get</a>(cni, { ...params }) -> CNIGetResponse</code>

## Interconnects

Types:

- <code><a href="./src/resources/network-interconnects/interconnects.ts">InterconnectCreateResponse</a></code>
- <code><a href="./src/resources/network-interconnects/interconnects.ts">InterconnectListResponse</a></code>
- <code><a href="./src/resources/network-interconnects/interconnects.ts">InterconnectGetResponse</a></code>
- <code><a href="./src/resources/network-interconnects/interconnects.ts">InterconnectStatusResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cni/interconnects">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">create</a>({ ...params }) -> InterconnectCreateResponse</code>
- <code title="get /accounts/{account_id}/cni/interconnects">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">list</a>({ ...params }) -> InterconnectListResponse</code>
- <code title="delete /accounts/{account_id}/cni/interconnects/{icon}">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">delete</a>(icon, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/cni/interconnects/{icon}">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">get</a>(icon, { ...params }) -> InterconnectGetResponse</code>
- <code title="get /accounts/{account_id}/cni/interconnects/{icon}/loa">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">loa</a>(icon, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/cni/interconnects/{icon}/status">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">status</a>(icon, { ...params }) -> InterconnectStatusResponse</code>

## Settings

Types:

- <code><a href="./src/resources/network-interconnects/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/network-interconnects/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/cni/settings">client.networkInterconnects.settings.<a href="./src/resources/network-interconnects/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/cni/settings">client.networkInterconnects.settings.<a href="./src/resources/network-interconnects/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

## Slots

Types:

- <code><a href="./src/resources/network-interconnects/slots.ts">SlotListResponse</a></code>
- <code><a href="./src/resources/network-interconnects/slots.ts">SlotGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cni/slots">client.networkInterconnects.slots.<a href="./src/resources/network-interconnects/slots.ts">list</a>({ ...params }) -> SlotListResponse</code>
- <code title="get /accounts/{account_id}/cni/slots/{slot}">client.networkInterconnects.slots.<a href="./src/resources/network-interconnects/slots.ts">get</a>(slot, { ...params }) -> SlotGetResponse</code>
