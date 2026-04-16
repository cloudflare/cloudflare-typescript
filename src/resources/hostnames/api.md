# Hostnames

## Settings

### TLS

Types:

- <code><a href="./src/resources/hostnames/settings/tls.ts">Setting</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">SettingValue</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSDeleteResponse</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">update</a>(settingId, hostname, { ...params }) -> Setting</code>
- <code title="delete /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">delete</a>(settingId, hostname, { ...params }) -> TLSDeleteResponse</code>
- <code title="get /zones/{zone_id}/hostnames/settings/{setting_id}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">get</a>(settingId, { ...params }) -> TLSGetResponsesSinglePage</code>
