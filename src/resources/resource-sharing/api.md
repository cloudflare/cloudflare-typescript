# ResourceSharing

Types:

- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingCreateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingUpdateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingListResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingDeleteResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/shares">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">create</a>({ ...params }) -> ResourceSharingCreateResponse</code>
- <code title="put /accounts/{account_id}/shares/{share_id}">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">update</a>(shareID, { ...params }) -> ResourceSharingUpdateResponse</code>
- <code title="get /accounts/{account_id}/shares">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">list</a>({ ...params }) -> ResourceSharingListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/shares/{share_id}">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">delete</a>(shareID, { ...params }) -> ResourceSharingDeleteResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">get</a>(shareID, { ...params }) -> ResourceSharingGetResponse</code>

## Recipients

Types:

- <code><a href="./src/resources/resource-sharing/recipients.ts">RecipientCreateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/recipients.ts">RecipientListResponse</a></code>
- <code><a href="./src/resources/resource-sharing/recipients.ts">RecipientDeleteResponse</a></code>
- <code><a href="./src/resources/resource-sharing/recipients.ts">RecipientGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/shares/{share_id}/recipients">client.resourceSharing.recipients.<a href="./src/resources/resource-sharing/recipients.ts">create</a>(shareID, { ...params }) -> RecipientCreateResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}/recipients">client.resourceSharing.recipients.<a href="./src/resources/resource-sharing/recipients.ts">list</a>(shareID, { ...params }) -> RecipientListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}">client.resourceSharing.recipients.<a href="./src/resources/resource-sharing/recipients.ts">delete</a>(recipientID, { ...params }) -> RecipientDeleteResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}">client.resourceSharing.recipients.<a href="./src/resources/resource-sharing/recipients.ts">get</a>(recipientID, { ...params }) -> RecipientGetResponse</code>

## Resources

Types:

- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceCreateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceUpdateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceListResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceDeleteResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/shares/{share_id}/resources">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">create</a>(shareID, { ...params }) -> ResourceCreateResponse</code>
- <code title="put /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">update</a>(shareResourceID, { ...params }) -> ResourceUpdateResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}/resources">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">list</a>(shareID, { ...params }) -> ResourceListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">delete</a>(shareResourceID, { ...params }) -> ResourceDeleteResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">get</a>(shareResourceID, { ...params }) -> ResourceGetResponse</code>
