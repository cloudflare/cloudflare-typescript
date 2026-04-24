# Images

## V1

Types:

- <code><a href="./src/resources/images/v1/v1.ts">Image</a></code>
- <code><a href="./src/resources/images/v1/v1.ts">V1ListResponse</a></code>
- <code><a href="./src/resources/images/v1/v1.ts">V1DeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1">client.images.v1.<a href="./src/resources/images/v1/v1.ts">create</a>({ ...params }) -> Image</code>
- <code title="get /accounts/{account_id}/images/v1">client.images.v1.<a href="./src/resources/images/v1/v1.ts">list</a>({ ...params }) -> V1ListResponsesV4PagePagination</code>
- <code title="delete /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">delete</a>(imageId, { ...params }) -> V1DeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">edit</a>(imageId, { ...params }) -> Image</code>
- <code title="get /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">get</a>(imageId, { ...params }) -> Image</code>

### Keys

Types:

- <code><a href="./src/resources/images/v1/keys.ts">Key</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/images/v1/keys/{signing_key_name}">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">update</a>(signingKeyName, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /accounts/{account_id}/images/v1/keys">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /accounts/{account_id}/images/v1/keys/{signing_key_name}">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">delete</a>(signingKeyName, { ...params }) -> KeyDeleteResponse</code>

### Stats

Types:

- <code><a href="./src/resources/images/v1/stats.ts">Stat</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v1/stats">client.images.v1.stats.<a href="./src/resources/images/v1/stats.ts">get</a>({ ...params }) -> Stat</code>

### Variants

Types:

- <code><a href="./src/resources/images/v1/variants.ts">Variant</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantEditResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1/variants">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">create</a>({ ...params }) -> VariantCreateResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">list</a>({ ...params }) -> Variant</code>
- <code title="delete /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">delete</a>(variantId, { ...params }) -> VariantDeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">edit</a>(variantId, { ...params }) -> VariantEditResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">get</a>(variantId, { ...params }) -> VariantGetResponse</code>

### Blobs

Methods:

- <code title="get /accounts/{account_id}/images/v1/{image_id}/blob">client.images.v1.blobs.<a href="./src/resources/images/v1/blobs.ts">get</a>(imageId, { ...params }) -> Response</code>

## V2

Types:

- <code><a href="./src/resources/images/v2/v2.ts">V2ListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v2">client.images.v2.<a href="./src/resources/images/v2/v2.ts">list</a>({ ...params }) -> V2ListResponse</code>

### DirectUploads

Types:

- <code><a href="./src/resources/images/v2/direct-uploads.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v2/direct_upload">client.images.v2.directUploads.<a href="./src/resources/images/v2/direct-uploads.ts">create</a>({ ...params }) -> DirectUploadCreateResponse</code>
