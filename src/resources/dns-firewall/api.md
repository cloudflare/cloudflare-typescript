# DNSFirewall

Types:

- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">AttackMitigation</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">FirewallIPs</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">UpstreamIPs</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallCreateResponse</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallListResponse</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallDeleteResponse</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallEditResponse</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dns_firewall">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">create</a>({ ...params }) -> DNSFirewallCreateResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">list</a>({ ...params }) -> DNSFirewallListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">delete</a>(dnsFirewallId, { ...params }) -> DNSFirewallDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">edit</a>(dnsFirewallId, { ...params }) -> DNSFirewallEditResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">get</a>(dnsFirewallId, { ...params }) -> DNSFirewallGetResponse</code>

## Analytics

### Reports

Methods:

- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}/dns_analytics/report">client.dnsFirewall.analytics.reports.<a href="./src/resources/dns-firewall/analytics/reports/reports.ts">get</a>(dnsFirewallId, { ...params }) -> Report</code>

#### Bytimes

Methods:

- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}/dns_analytics/report/bytime">client.dnsFirewall.analytics.reports.bytimes.<a href="./src/resources/dns-firewall/analytics/reports/bytimes.ts">get</a>(dnsFirewallId, { ...params }) -> ByTime</code>

## ReverseDNS

Types:

- <code><a href="./src/resources/dns-firewall/reverse-dns.ts">ReverseDNSEditResponse</a></code>
- <code><a href="./src/resources/dns-firewall/reverse-dns.ts">ReverseDNSGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns">client.dnsFirewall.reverseDNS.<a href="./src/resources/dns-firewall/reverse-dns.ts">edit</a>(dnsFirewallId, { ...params }) -> ReverseDNSEditResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns">client.dnsFirewall.reverseDNS.<a href="./src/resources/dns-firewall/reverse-dns.ts">get</a>(dnsFirewallId, { ...params }) -> ReverseDNSGetResponse</code>
