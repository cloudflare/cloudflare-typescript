# MagicTransit

Types:

- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheck</a></code>
- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheckRate</a></code>
- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheckType</a></code>

## Apps

Types:

- <code><a href="./src/resources/magic-transit/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/apps">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">create</a>({ ...params }) -> AppCreateResponse | null</code>
- <code title="put /accounts/{account_id}/magic/apps/{account_app_id}">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">update</a>(accountAppId, { ...params }) -> AppUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/magic/apps">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">list</a>({ ...params }) -> AppListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/apps/{account_app_id}">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">delete</a>(accountAppId, { ...params }) -> AppDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/magic/apps/{account_app_id}">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">edit</a>(accountAppId, { ...params }) -> AppEditResponse | null</code>

## CfInterconnects

Types:

- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectListResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectBulkUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">update</a>(cfInterconnectId, { ...params }) -> CfInterconnectUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cf_interconnects">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">list</a>({ ...params }) -> CfInterconnectListResponse</code>
- <code title="put /accounts/{account_id}/magic/cf_interconnects">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">bulkUpdate</a>({ ...params }) -> CfInterconnectBulkUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">get</a>(cfInterconnectId, { ...params }) -> CfInterconnectGetResponse</code>

## GRETunnels

Types:

- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelListResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelBulkUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">create</a>({ ...params }) -> GRETunnelCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">update</a>(greTunnelId, { ...params }) -> GRETunnelUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">list</a>({ ...params }) -> GRETunnelListResponse</code>
- <code title="delete /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">delete</a>(greTunnelId, { ...params }) -> GRETunnelDeleteResponse</code>
- <code title="put /accounts/{account_id}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">bulkUpdate</a>({ ...params }) -> GRETunnelBulkUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">get</a>(greTunnelId, { ...params }) -> GRETunnelGetResponse</code>

## IPSECTunnels

Types:

- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">PSKMetadata</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelListResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelBulkUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelGetResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelPSKGenerateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">create</a>({ ...params }) -> IPSECTunnelCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">update</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">list</a>({ ...params }) -> IPSECTunnelListResponse</code>
- <code title="delete /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">delete</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelDeleteResponse</code>
- <code title="put /accounts/{account_id}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">bulkUpdate</a>({ ...params }) -> IPSECTunnelBulkUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">get</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelGetResponse</code>
- <code title="post /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}/psk_generate">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">pskGenerate</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelPSKGenerateResponse</code>

## Routes

Types:

- <code><a href="./src/resources/magic-transit/routes.ts">Scope</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteBulkUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteEmptyResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">create</a>({ ...params }) -> RouteCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">update</a>(routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">list</a>({ ...params }) -> RouteListResponse</code>
- <code title="delete /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">delete</a>(routeId, { ...params }) -> RouteDeleteResponse</code>
- <code title="put /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">bulkUpdate</a>({ ...params }) -> RouteBulkUpdateResponse</code>
- <code title="delete /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">empty</a>({ ...params }) -> RouteEmptyResponse</code>
- <code title="get /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">get</a>(routeId, { ...params }) -> RouteGetResponse</code>

## Sites

Types:

- <code><a href="./src/resources/magic-transit/sites/sites.ts">Site</a></code>
- <code><a href="./src/resources/magic-transit/sites/sites.ts">SiteLocation</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">create</a>({ ...params }) -> Site</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">update</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/magic/sites">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">list</a>({ ...params }) -> SitesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">delete</a>(siteId, { ...params }) -> Site</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">edit</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">get</a>(siteId, { ...params }) -> Site</code>

### ACLs

Types:

- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACL</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACLConfiguration</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">AllowedProtocol</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">Subnet</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/acls">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">create</a>(siteId, { ...params }) -> ACL</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">update</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/acls">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">list</a>(siteId, { ...params }) -> ACLsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">delete</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">edit</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">get</a>(siteId, aclId, { ...params }) -> ACL</code>

### LANs

Types:

- <code><a href="./src/resources/magic-transit/sites/lans.ts">DHCPRelay</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">DHCPServer</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LAN</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LANStaticAddressing</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">Nat</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">RoutedSubnet</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/lans">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">create</a>(siteId, { ...params }) -> LANsSinglePage</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">update</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/lans">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">list</a>(siteId, { ...params }) -> LANsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">delete</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">edit</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">get</a>(siteId, lanId, { ...params }) -> LAN</code>

### WANs

Types:

- <code><a href="./src/resources/magic-transit/sites/wans.ts">WAN</a></code>
- <code><a href="./src/resources/magic-transit/sites/wans.ts">WANStaticAddressing</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/wans">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">create</a>(siteId, { ...params }) -> WANsSinglePage</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">update</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/wans">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">list</a>(siteId, { ...params }) -> WANsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">delete</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">edit</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">get</a>(siteId, wanId, { ...params }) -> WAN</code>

## Connectors

Types:

- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorListResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorEditResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/connectors">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">create</a>({ ...params }) -> ConnectorCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">update</a>(connectorId, { ...params }) -> ConnectorUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">list</a>({ ...params }) -> ConnectorListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">delete</a>(connectorId, { ...params }) -> ConnectorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">edit</a>(connectorId, { ...params }) -> ConnectorEditResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">get</a>(connectorId, { ...params }) -> ConnectorGetResponse</code>

### Events

Types:

- <code><a href="./src/resources/magic-transit/connectors/events/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/events/events.ts">EventGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events">client.magicTransit.connectors.events.<a href="./src/resources/magic-transit/connectors/events/events.ts">list</a>(connectorId, { ...params }) -> EventListResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/{event_t}.{event_n}">client.magicTransit.connectors.events.<a href="./src/resources/magic-transit/connectors/events/events.ts">get</a>(connectorId, eventT, eventN, { ...params }) -> EventGetResponse</code>

#### Latest

Types:

- <code><a href="./src/resources/magic-transit/connectors/events/latest.ts">LatestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/latest">client.magicTransit.connectors.events.latest.<a href="./src/resources/magic-transit/connectors/events/latest.ts">list</a>(connectorId, { ...params }) -> LatestListResponse</code>

### Snapshots

Types:

- <code><a href="./src/resources/magic-transit/connectors/snapshots/snapshots.ts">SnapshotListResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/snapshots/snapshots.ts">SnapshotGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots">client.magicTransit.connectors.snapshots.<a href="./src/resources/magic-transit/connectors/snapshots/snapshots.ts">list</a>(connectorId, { ...params }) -> SnapshotListResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots/{snapshot_t}">client.magicTransit.connectors.snapshots.<a href="./src/resources/magic-transit/connectors/snapshots/snapshots.ts">get</a>(connectorId, snapshotT, { ...params }) -> SnapshotGetResponse</code>

#### Latest

Types:

- <code><a href="./src/resources/magic-transit/connectors/snapshots/latest.ts">LatestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots/latest">client.magicTransit.connectors.snapshots.latest.<a href="./src/resources/magic-transit/connectors/snapshots/latest.ts">list</a>(connectorId, { ...params }) -> LatestListResponse</code>

## PCAPs

Types:

- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAP</a></code>
- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAPFilter</a></code>
- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAPCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAPListResponse</a></code>
- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAPGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps">client.magicTransit.pcaps.<a href="./src/resources/magic-transit/pcaps/pcaps.ts">create</a>({ ...params }) -> PCAPCreateResponse</code>
- <code title="get /accounts/{account_id}/pcaps">client.magicTransit.pcaps.<a href="./src/resources/magic-transit/pcaps/pcaps.ts">list</a>({ ...params }) -> PCAPListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/pcaps/{pcap_id}">client.magicTransit.pcaps.<a href="./src/resources/magic-transit/pcaps/pcaps.ts">get</a>(pcapId, { ...params }) -> PCAPGetResponse</code>
- <code title="put /accounts/{account_id}/pcaps/{pcap_id}/stop">client.magicTransit.pcaps.<a href="./src/resources/magic-transit/pcaps/pcaps.ts">stop</a>(pcapId, { ...params }) -> void</code>

### Ownership

Types:

- <code><a href="./src/resources/magic-transit/pcaps/ownership.ts">Ownership</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps/ownership">client.magicTransit.pcaps.ownership.<a href="./src/resources/magic-transit/pcaps/ownership.ts">create</a>({ ...params }) -> Ownership</code>
- <code title="delete /accounts/{account_id}/pcaps/ownership/{ownership_id}">client.magicTransit.pcaps.ownership.<a href="./src/resources/magic-transit/pcaps/ownership.ts">delete</a>(ownershipId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/pcaps/ownership">client.magicTransit.pcaps.ownership.<a href="./src/resources/magic-transit/pcaps/ownership.ts">get</a>({ ...params }) -> OwnershipsSinglePage</code>
- <code title="post /accounts/{account_id}/pcaps/ownership/validate">client.magicTransit.pcaps.ownership.<a href="./src/resources/magic-transit/pcaps/ownership.ts">validate</a>({ ...params }) -> Ownership</code>

### Download

Methods:

- <code title="get /accounts/{account_id}/pcaps/{pcap_id}/download">client.magicTransit.pcaps.download.<a href="./src/resources/magic-transit/pcaps/download.ts">get</a>(pcapId, { ...params }) -> Response</code>
