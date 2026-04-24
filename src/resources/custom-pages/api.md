# CustomPages

Types:

- <code><a href="./src/resources/custom-pages/custom-pages.ts">CustomPageUpdateResponse</a></code>
- <code><a href="./src/resources/custom-pages/custom-pages.ts">CustomPageListResponse</a></code>
- <code><a href="./src/resources/custom-pages/custom-pages.ts">CustomPageGetResponse</a></code>

Methods:

- <code title="put /{accounts_or_zones}/{account_or_zone_id}/custom_pages/{identifier}">client.customPages.<a href="./src/resources/custom-pages/custom-pages.ts">update</a>(identifier, { ...params }) -> CustomPageUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/custom_pages">client.customPages.<a href="./src/resources/custom-pages/custom-pages.ts">list</a>({ ...params }) -> CustomPageListResponsesSinglePage</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/custom_pages/{identifier}">client.customPages.<a href="./src/resources/custom-pages/custom-pages.ts">get</a>(identifier, { ...params }) -> CustomPageGetResponse</code>

## Assets

Types:

- <code><a href="./src/resources/custom-pages/assets.ts">AssetCreateResponse</a></code>
- <code><a href="./src/resources/custom-pages/assets.ts">AssetUpdateResponse</a></code>
- <code><a href="./src/resources/custom-pages/assets.ts">AssetListResponse</a></code>
- <code><a href="./src/resources/custom-pages/assets.ts">AssetGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/custom_pages/assets">client.customPages.assets.<a href="./src/resources/custom-pages/assets.ts">create</a>({ ...params }) -> AssetCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/custom_pages/assets/{asset_name}">client.customPages.assets.<a href="./src/resources/custom-pages/assets.ts">update</a>(assetName, { ...params }) -> AssetUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/custom_pages/assets">client.customPages.assets.<a href="./src/resources/custom-pages/assets.ts">list</a>({ ...params }) -> AssetListResponsesV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/custom_pages/assets/{asset_name}">client.customPages.assets.<a href="./src/resources/custom-pages/assets.ts">delete</a>(assetName, { ...params }) -> void</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/custom_pages/assets/{asset_name}">client.customPages.assets.<a href="./src/resources/custom-pages/assets.ts">get</a>(assetName, { ...params }) -> AssetGetResponse</code>
