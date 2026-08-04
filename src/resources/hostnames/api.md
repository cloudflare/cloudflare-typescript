# Hostnames

## Settings

### TLS

Types:

- <code><a href="./src/resources/hostnames/settings/tls.ts">Setting</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">SettingValue</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSListResponse</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSDeleteResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">update</a>(hostname, { ...params }) -> Setting</code>
- <code title="get /zones/{zone_id}/hostnames/settings/{setting_id}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">list</a>(settingID, { ...params }) -> TLSListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">delete</a>(hostname, { ...params }) -> TLSDeleteResponse</code>
- <code title="get /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">get</a>(hostname, { ...params }) -> Setting</code>
