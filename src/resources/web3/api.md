# Web3

## Hostnames

Types:

- <code><a href="./src/resources/web3/hostnames/hostnames.ts">Hostname</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">create</a>({ ...params }) -> Hostname</code>
- <code title="get /zones/{zone_id}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">list</a>({ ...params }) -> HostnamesSinglePage</code>
- <code title="delete /zones/{zone_id}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">delete</a>(identifier, { ...params }) -> HostnameDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">edit</a>(identifier, { ...params }) -> Hostname</code>
- <code title="get /zones/{zone_id}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">get</a>(identifier, { ...params }) -> Hostname</code>

### IPFSUniversalPaths

#### ContentLists

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentList</a></code>

Methods:

- <code title="put /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">update</a>(identifier, { ...params }) -> ContentList</code>
- <code title="get /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">get</a>(identifier, { ...params }) -> ContentList</code>

##### Entries

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryCreateResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryUpdateResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryListResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryDeleteResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">create</a>(identifier, { ...params }) -> EntryCreateResponse</code>
- <code title="put /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">update</a>(identifier, contentListEntryIdentifier, { ...params }) -> EntryUpdateResponse</code>
- <code title="get /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">list</a>(identifier, { ...params }) -> EntryListResponse | null</code>
- <code title="delete /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">delete</a>(identifier, contentListEntryIdentifier, { ...params }) -> EntryDeleteResponse | null</code>
- <code title="get /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">get</a>(identifier, contentListEntryIdentifier, { ...params }) -> EntryGetResponse</code>
