# DNS

## DNSSEC

Types:

- <code><a href="./src/resources/dns/dnssec.ts">DNSSEC</a></code>
- <code><a href="./src/resources/dns/dnssec.ts">DNSSECDeleteResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/dnssec">client.dns.dnssec.<a href="./src/resources/dns/dnssec.ts">delete</a>({ ...params }) -> DNSSECDeleteResponse</code>
- <code title="patch /zones/{zone_id}/dnssec">client.dns.dnssec.<a href="./src/resources/dns/dnssec.ts">edit</a>({ ...params }) -> DNSSEC</code>
- <code title="get /zones/{zone_id}/dnssec">client.dns.dnssec.<a href="./src/resources/dns/dnssec.ts">get</a>({ ...params }) -> DNSSEC</code>

## Records

Types:

- <code><a href="./src/resources/dns/records.ts">ARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">AAAARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">BatchPatch</a></code>
- <code><a href="./src/resources/dns/records.ts">BatchPut</a></code>
- <code><a href="./src/resources/dns/records.ts">CAARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">CERTRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">CNAMERecord</a></code>
- <code><a href="./src/resources/dns/records.ts">DNSKEYRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">DSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">HTTPSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">LOCRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">MXRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">NAPTRRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">NSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">PTRRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">Record</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordTags</a></code>
- <code><a href="./src/resources/dns/records.ts">SMIMEARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SRVRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SSHFPRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SVCBRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">TLSARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">TTL</a></code>
- <code><a href="./src/resources/dns/records.ts">TXTRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">URIRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordDeleteResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordBatchResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordExportResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordImportResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordScanResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordScanReviewResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordScanTriggerResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">create</a>({ ...params }) -> RecordResponse</code>
- <code title="put /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">update</a>(dnsRecordId, { ...params }) -> RecordResponse</code>
- <code title="get /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">list</a>({ ...params }) -> RecordResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">delete</a>(dnsRecordId, { ...params }) -> RecordDeleteResponse</code>
- <code title="post /zones/{zone_id}/dns_records/batch">client.dns.records.<a href="./src/resources/dns/records.ts">batch</a>({ ...params }) -> RecordBatchResponse</code>
- <code title="patch /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">edit</a>(dnsRecordId, { ...params }) -> RecordResponse</code>
- <code title="get /zones/{zone_id}/dns_records/export">client.dns.records.<a href="./src/resources/dns/records.ts">export</a>({ ...params }) -> string</code>
- <code title="get /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">get</a>(dnsRecordId, { ...params }) -> RecordResponse</code>
- <code title="post /zones/{zone_id}/dns_records/import">client.dns.records.<a href="./src/resources/dns/records.ts">import</a>({ ...params }) -> RecordImportResponse</code>
- <code title="post /zones/{zone_id}/dns_records/scan">client.dns.records.<a href="./src/resources/dns/records.ts">scan</a>({ ...params }) -> RecordScanResponse</code>
- <code title="get /zones/{zone_id}/dns_records/scan/review">client.dns.records.<a href="./src/resources/dns/records.ts">scanList</a>({ ...params }) -> RecordResponsesSinglePage</code>
- <code title="post /zones/{zone_id}/dns_records/scan/review">client.dns.records.<a href="./src/resources/dns/records.ts">scanReview</a>({ ...params }) -> RecordScanReviewResponse</code>
- <code title="post /zones/{zone_id}/dns_records/scan/trigger">client.dns.records.<a href="./src/resources/dns/records.ts">scanTrigger</a>({ ...params }) -> RecordScanTriggerResponse</code>

## Usage

### Zone

### Account

## Settings

### Zone

Types:

- <code><a href="./src/resources/dns/settings/zone.ts">ZoneEditResponse</a></code>
- <code><a href="./src/resources/dns/settings/zone.ts">ZoneGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/dns_settings">client.dns.settings.zone.<a href="./src/resources/dns/settings/zone.ts">edit</a>({ ...params }) -> ZoneEditResponse</code>
- <code title="get /zones/{zone_id}/dns_settings">client.dns.settings.zone.<a href="./src/resources/dns/settings/zone.ts">get</a>({ ...params }) -> ZoneGetResponse</code>

### Account

Types:

- <code><a href="./src/resources/dns/settings/account/account.ts">AccountEditResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/account.ts">AccountGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/dns_settings">client.dns.settings.account.<a href="./src/resources/dns/settings/account/account.ts">edit</a>({ ...params }) -> AccountEditResponse</code>
- <code title="get /accounts/{account_id}/dns_settings">client.dns.settings.account.<a href="./src/resources/dns/settings/account/account.ts">get</a>({ ...params }) -> AccountGetResponse</code>

#### Views

Types:

- <code><a href="./src/resources/dns/settings/account/views.ts">ViewCreateResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/views.ts">ViewListResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/views.ts">ViewDeleteResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/views.ts">ViewEditResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/views.ts">ViewGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dns_settings/views">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">create</a>({ ...params }) -> ViewCreateResponse</code>
- <code title="get /accounts/{account_id}/dns_settings/views">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">list</a>({ ...params }) -> ViewListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/dns_settings/views/{view_id}">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">delete</a>(viewId, { ...params }) -> ViewDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dns_settings/views/{view_id}">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">edit</a>(viewId, { ...params }) -> ViewEditResponse</code>
- <code title="get /accounts/{account_id}/dns_settings/views/{view_id}">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">get</a>(viewId, { ...params }) -> ViewGetResponse</code>

## Analytics

### Reports

Types:

- <code><a href="./src/resources/dns/analytics/reports/reports.ts">Report</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_analytics/report">client.dns.analytics.reports.<a href="./src/resources/dns/analytics/reports/reports.ts">get</a>({ ...params }) -> Report</code>

#### Bytimes

Types:

- <code><a href="./src/resources/dns/analytics/reports/bytimes.ts">ByTime</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_analytics/report/bytime">client.dns.analytics.reports.bytimes.<a href="./src/resources/dns/analytics/reports/bytimes.ts">get</a>({ ...params }) -> ByTime</code>

## ZoneTransfers

### ForceAXFR

Types:

- <code><a href="./src/resources/dns/zone-transfers/force-axfr.ts">ForceAXFR</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/force_axfr">client.dns.zoneTransfers.forceAXFR.<a href="./src/resources/dns/zone-transfers/force-axfr.ts">create</a>({ ...params }) -> ForceAXFR</code>

### Incoming

Types:

- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">Incoming</a></code>
- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">IncomingCreateResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">IncomingUpdateResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">IncomingDeleteResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">IncomingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/incoming">client.dns.zoneTransfers.incoming.<a href="./src/resources/dns/zone-transfers/incoming.ts">create</a>({ ...params }) -> IncomingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/incoming">client.dns.zoneTransfers.incoming.<a href="./src/resources/dns/zone-transfers/incoming.ts">update</a>({ ...params }) -> IncomingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/incoming">client.dns.zoneTransfers.incoming.<a href="./src/resources/dns/zone-transfers/incoming.ts">delete</a>({ ...params }) -> IncomingDeleteResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/incoming">client.dns.zoneTransfers.incoming.<a href="./src/resources/dns/zone-transfers/incoming.ts">get</a>({ ...params }) -> IncomingGetResponse</code>

### Outgoing

Types:

- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">DisableTransfer</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">EnableTransfer</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">Outgoing</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingStatus</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingCreateResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingUpdateResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingDeleteResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingForceNotifyResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/outgoing">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">create</a>({ ...params }) -> OutgoingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/outgoing">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">update</a>({ ...params }) -> OutgoingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/outgoing">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">delete</a>({ ...params }) -> OutgoingDeleteResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/disable">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">disable</a>({ ...params }) -> DisableTransfer</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/enable">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">enable</a>({ ...params }) -> EnableTransfer</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/force_notify">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">forceNotify</a>({ ...params }) -> OutgoingForceNotifyResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/outgoing">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">get</a>({ ...params }) -> OutgoingGetResponse</code>

#### Status

Methods:

- <code title="get /zones/{zone_id}/secondary_dns/outgoing/status">client.dns.zoneTransfers.outgoing.status.<a href="./src/resources/dns/zone-transfers/outgoing/status.ts">get</a>({ ...params }) -> EnableTransfer</code>

### ACLs

Types:

- <code><a href="./src/resources/dns/zone-transfers/acls.ts">ACL</a></code>
- <code><a href="./src/resources/dns/zone-transfers/acls.ts">ACLDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/acls">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">create</a>({ ...params }) -> ACL</code>
- <code title="put /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">update</a>(aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">list</a>({ ...params }) -> ACLsSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">delete</a>(aclId, { ...params }) -> ACLDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">get</a>(aclId, { ...params }) -> ACL</code>

### Peers

Types:

- <code><a href="./src/resources/dns/zone-transfers/peers.ts">Peer</a></code>
- <code><a href="./src/resources/dns/zone-transfers/peers.ts">PeerDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/peers">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">create</a>({ ...params }) -> Peer</code>
- <code title="put /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">update</a>(peerId, { ...params }) -> Peer</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">list</a>({ ...params }) -> PeersSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">delete</a>(peerId, { ...params }) -> PeerDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">get</a>(peerId, { ...params }) -> Peer</code>

### TSIGs

Types:

- <code><a href="./src/resources/dns/zone-transfers/tsigs.ts">TSIG</a></code>
- <code><a href="./src/resources/dns/zone-transfers/tsigs.ts">TSIGDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/tsigs">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">create</a>({ ...params }) -> TSIG</code>
- <code title="put /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">update</a>(tsigId, { ...params }) -> TSIG</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">list</a>({ ...params }) -> TSIGsSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">delete</a>(tsigId, { ...params }) -> TSIGDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">get</a>(tsigId, { ...params }) -> TSIG</code>
