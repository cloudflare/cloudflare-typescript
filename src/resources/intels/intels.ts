// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DNSAPI from 'cloudflare/resources/intels/dns';
import * as DomainHistoriesAPI from 'cloudflare/resources/intels/domain-histories';
import * as IPListsAPI from 'cloudflare/resources/intels/ip-lists';
import * as IPsAPI from 'cloudflare/resources/intels/ips';
import * as MiscategorizationsAPI from 'cloudflare/resources/intels/miscategorizations';
import * as WhoisAPI from 'cloudflare/resources/intels/whois';
import * as AsnAPI from 'cloudflare/resources/intels/asn/asn';
import * as DomainsAPI from 'cloudflare/resources/intels/domains/domains';

export class Intels extends APIResource {
  asn: AsnAPI.Asn = new AsnAPI.Asn(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  domainHistories: DomainHistoriesAPI.DomainHistories = new DomainHistoriesAPI.DomainHistories(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  ipLists: IPListsAPI.IPLists = new IPListsAPI.IPLists(this._client);
  miscategorizations: MiscategorizationsAPI.Miscategorizations = new MiscategorizationsAPI.Miscategorizations(
    this._client,
  );
  whois: WhoisAPI.Whois = new WhoisAPI.Whois(this._client);
}

export namespace Intels {
  export import Asn = AsnAPI.Asn;
  export import AsnGetResponse = AsnAPI.AsnGetResponse;
  export import DNS = DNSAPI.DNS;
  export import DNSPassiveDNSByIPGetPassiveDNSByIPResponse = DNSAPI.DNSPassiveDNSByIPGetPassiveDNSByIPResponse;
  export import DNSPassiveDNSByIPGetPassiveDNSByIPParams = DNSAPI.DNSPassiveDNSByIPGetPassiveDNSByIPParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainDomainIntelligenceGetDomainDetailsResponse = DomainsAPI.DomainDomainIntelligenceGetDomainDetailsResponse;
  export import DomainDomainIntelligenceGetDomainDetailsParams = DomainsAPI.DomainDomainIntelligenceGetDomainDetailsParams;
  export import DomainHistories = DomainHistoriesAPI.DomainHistories;
  export import DomainHistoryListResponse = DomainHistoriesAPI.DomainHistoryListResponse;
  export import DomainHistoryListParams = DomainHistoriesAPI.DomainHistoryListParams;
  export import IPs = IPsAPI.IPs;
  export import IPIPIntelligenceGetIPOverviewResponse = IPsAPI.IPIPIntelligenceGetIPOverviewResponse;
  export import IPIPIntelligenceGetIPOverviewParams = IPsAPI.IPIPIntelligenceGetIPOverviewParams;
  export import IPLists = IPListsAPI.IPLists;
  export import IPListIPListGetIPListsResponse = IPListsAPI.IPListIPListGetIPListsResponse;
  export import Miscategorizations = MiscategorizationsAPI.Miscategorizations;
  export import MiscategorizationMiscategorizationCreateMiscategorizationResponse = MiscategorizationsAPI.MiscategorizationMiscategorizationCreateMiscategorizationResponse;
  export import MiscategorizationMiscategorizationCreateMiscategorizationParams = MiscategorizationsAPI.MiscategorizationMiscategorizationCreateMiscategorizationParams;
  export import Whois = WhoisAPI.Whois;
  export import WhoisWhoisRecordGetWhoisRecordResponse = WhoisAPI.WhoisWhoisRecordGetWhoisRecordResponse;
  export import WhoisWhoisRecordGetWhoisRecordParams = WhoisAPI.WhoisWhoisRecordGetWhoisRecordParams;
}
