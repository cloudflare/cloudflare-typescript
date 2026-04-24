# ResourceTagging

Types:

- <code><a href="./src/resources/resource-tagging/resource-tagging.ts">ResourceTaggingListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/tags/resources">client.resourceTagging.<a href="./src/resources/resource-tagging/resource-tagging.ts">list</a>({ ...params }) -> ResourceTaggingListResponsesCursorPaginationAfter</code>

## AccountTags

Types:

- <code><a href="./src/resources/resource-tagging/account-tags.ts">AccountTagUpdateResponse</a></code>
- <code><a href="./src/resources/resource-tagging/account-tags.ts">AccountTagGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/tags">client.resourceTagging.accountTags.<a href="./src/resources/resource-tagging/account-tags.ts">update</a>({ ...params }) -> AccountTagUpdateResponse</code>
- <code title="delete /accounts/{account_id}/tags">client.resourceTagging.accountTags.<a href="./src/resources/resource-tagging/account-tags.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /accounts/{account_id}/tags">client.resourceTagging.accountTags.<a href="./src/resources/resource-tagging/account-tags.ts">get</a>({ ...params }) -> AccountTagGetResponse</code>

## ZoneTags

Types:

- <code><a href="./src/resources/resource-tagging/zone-tags.ts">ZoneTagUpdateResponse</a></code>
- <code><a href="./src/resources/resource-tagging/zone-tags.ts">ZoneTagGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/tags">client.resourceTagging.zoneTags.<a href="./src/resources/resource-tagging/zone-tags.ts">update</a>({ ...params }) -> ZoneTagUpdateResponse</code>
- <code title="delete /zones/{zone_id}/tags">client.resourceTagging.zoneTags.<a href="./src/resources/resource-tagging/zone-tags.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /zones/{zone_id}/tags">client.resourceTagging.zoneTags.<a href="./src/resources/resource-tagging/zone-tags.ts">get</a>({ ...params }) -> ZoneTagGetResponse</code>

## Keys

Types:

- <code><a href="./src/resources/resource-tagging/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/tags/keys">client.resourceTagging.keys.<a href="./src/resources/resource-tagging/keys.ts">list</a>({ ...params }) -> KeyListResponsesCursorPaginationAfter</code>

## Values

Types:

- <code><a href="./src/resources/resource-tagging/values.ts">ValueListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/tags/values/{tag_key}">client.resourceTagging.values.<a href="./src/resources/resource-tagging/values.ts">list</a>(tagKey, { ...params }) -> ValueListResponsesCursorPaginationAfter</code>
