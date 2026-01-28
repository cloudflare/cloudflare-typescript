# DNS

## Records

Types:

- <code><a href="./src/resources/dns/records.ts">RecordListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">list</a>({ ...params }) -> RecordListResponsesV4PagePaginationArray</code>

# Zones

Types:

- <code><a href="./src/resources/zones.ts">ZoneCreateResponse</a></code>
- <code><a href="./src/resources/zones.ts">ZoneEditResponse</a></code>
- <code><a href="./src/resources/zones.ts">ZoneGetResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones.ts">create</a>({ ...params }) -> ZoneCreateResponse</code>
- <code title="patch /zones/{zone_id}">client.zones.<a href="./src/resources/zones.ts">edit</a>({ ...params }) -> ZoneEditResponse</code>
- <code title="get /zones/{zone_id}">client.zones.<a href="./src/resources/zones.ts">get</a>({ ...params }) -> ZoneGetResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponsesV4PagePaginationArray</code>
