// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { ASN } from './asn/asn';
import { DNS } from './dns';
import { Domains } from './domains/domains';
import { DomainHistoryResource } from './domain-history';
import { IPs } from './ips';
import { IPLists } from './ip-lists';
import { Miscategorizations } from './miscategorizations';
import { Whois } from './whois';
import { IndicatorFeeds } from './indicator-feeds/indicator-feeds';
import { Sinkholes } from './sinkholes';
import { AttackSurfaceReport } from './attack-surface-report/attack-surface-report';
import * as DNSAPI from './dns';
import * as DomainHistoryAPI from './domain-history';
import * as IPListsAPI from './ip-lists';
import * as IPsAPI from './ips';
import * as MiscategorizationsAPI from './miscategorizations';
import * as SinkholesAPI from './sinkholes';
import * as WhoisAPI from './whois';
import * as ASNAPI from './asn/asn';
import * as AttackSurfaceReportAPI from './attack-surface-report/attack-surface-report';
import * as DomainsAPI from './domains/domains';
import * as IndicatorFeedsAPI from './indicator-feeds/indicator-feeds';

export class Intel extends APIResource {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  domainHistory: DomainHistoryAPI.DomainHistoryResource = new DomainHistoryAPI.DomainHistoryResource(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  ipLists: IPListsAPI.IPLists = new IPListsAPI.IPLists(this._client);
  miscategorizations: MiscategorizationsAPI.Miscategorizations = new MiscategorizationsAPI.Miscategorizations(this._client);
  whois: WhoisAPI.Whois = new WhoisAPI.Whois(this._client);
  indicatorFeeds: IndicatorFeedsAPI.IndicatorFeeds = new IndicatorFeedsAPI.IndicatorFeeds(this._client);
  sinkholes: SinkholesAPI.Sinkholes = new SinkholesAPI.Sinkholes(this._client);
  attackSurfaceReport: AttackSurfaceReportAPI.AttackSurfaceReport = new AttackSurfaceReportAPI.AttackSurfaceReport(this._client);
}

export namespace Intel {
  export import ASN = ASNAPI.ASN;
  export import ASNGetParams = ASNAPI.ASNGetParams;
  export import DNS = DNSAPI.DNS;
  export import DNSListResponse = DNSAPI.DNSListResponse;
  export import DNSListResponsesV4PagePagination = DNSAPI.DNSListResponsesV4PagePagination;
  export import DNSListParams = DNSAPI.DNSListParams;
  export import Domains = DomainsAPI.Domains;
  export import Domain = DomainsAPI.Domain;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
  export import DomainHistoryResource = DomainHistoryAPI.DomainHistoryResource;
  export import DomainHistory = DomainHistoryAPI.DomainHistory;
  export import DomainHistoryGetResponse = DomainHistoryAPI.DomainHistoryGetResponse;
  export import DomainHistoryGetParams = DomainHistoryAPI.DomainHistoryGetParams;
  export import IPs = IPsAPI.IPs;
  export import IP = IPsAPI.IP;
  export import IPGetResponse = IPsAPI.IPGetResponse;
  export import IPGetParams = IPsAPI.IPGetParams;
  export import IPLists = IPListsAPI.IPLists;
  export import IPList = IPListsAPI.IPList;
  export import IPListGetResponse = IPListsAPI.IPListGetResponse;
  export import IPListGetParams = IPListsAPI.IPListGetParams;
  export import Miscategorizations = MiscategorizationsAPI.Miscategorizations;
  export import MiscategorizationCreateResponse = MiscategorizationsAPI.MiscategorizationCreateResponse;
  export import MiscategorizationCreateParams = MiscategorizationsAPI.MiscategorizationCreateParams;
  export import Whois = WhoisAPI.Whois;
  export import WhoisGetResponse = WhoisAPI.WhoisGetResponse;
  export import WhoisGetParams = WhoisAPI.WhoisGetParams;
  export import IndicatorFeeds = IndicatorFeedsAPI.IndicatorFeeds;
  export import IndicatorFeedCreateResponse = IndicatorFeedsAPI.IndicatorFeedCreateResponse;
  export import IndicatorFeedUpdateResponse = IndicatorFeedsAPI.IndicatorFeedUpdateResponse;
  export import IndicatorFeedListResponse = IndicatorFeedsAPI.IndicatorFeedListResponse;
  export import IndicatorFeedDataResponse = IndicatorFeedsAPI.IndicatorFeedDataResponse;
  export import IndicatorFeedGetResponse = IndicatorFeedsAPI.IndicatorFeedGetResponse;
  export import IndicatorFeedListResponsesSinglePage = IndicatorFeedsAPI.IndicatorFeedListResponsesSinglePage;
  export import IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export import IndicatorFeedUpdateParams = IndicatorFeedsAPI.IndicatorFeedUpdateParams;
  export import IndicatorFeedListParams = IndicatorFeedsAPI.IndicatorFeedListParams;
  export import IndicatorFeedDataParams = IndicatorFeedsAPI.IndicatorFeedDataParams;
  export import IndicatorFeedGetParams = IndicatorFeedsAPI.IndicatorFeedGetParams;
  export import Sinkholes = SinkholesAPI.Sinkholes;
  export import Sinkhole = SinkholesAPI.Sinkhole;
  export import SinkholesSinglePage = SinkholesAPI.SinkholesSinglePage;
  export import SinkholeListParams = SinkholesAPI.SinkholeListParams;
  export import AttackSurfaceReport = AttackSurfaceReportAPI.AttackSurfaceReport;
}
