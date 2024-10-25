// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
  domainHistory: DomainHistoryAPI.DomainHistoryResource = new DomainHistoryAPI.DomainHistoryResource(
    this._client,
  );
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  ipLists: IPListsAPI.IPLists = new IPListsAPI.IPLists(this._client);
  miscategorizations: MiscategorizationsAPI.Miscategorizations = new MiscategorizationsAPI.Miscategorizations(
    this._client,
  );
  whois: WhoisAPI.Whois = new WhoisAPI.Whois(this._client);
  indicatorFeeds: IndicatorFeedsAPI.IndicatorFeeds = new IndicatorFeedsAPI.IndicatorFeeds(this._client);
  sinkholes: SinkholesAPI.Sinkholes = new SinkholesAPI.Sinkholes(this._client);
  attackSurfaceReport: AttackSurfaceReportAPI.AttackSurfaceReport =
    new AttackSurfaceReportAPI.AttackSurfaceReport(this._client);
}

export namespace Intel {
  export import ASN = ASNAPI.ASN;
  export type ASNGetParams = ASNAPI.ASNGetParams;
  export import DNS = DNSAPI.DNS;
  export type DNSListResponse = DNSAPI.DNSListResponse;
  export import DNSListResponsesV4PagePagination = DNSAPI.DNSListResponsesV4PagePagination;
  export type DNSListParams = DNSAPI.DNSListParams;
  export import Domains = DomainsAPI.Domains;
  export type Domain = DomainsAPI.Domain;
  export type DomainGetParams = DomainsAPI.DomainGetParams;
  export import DomainHistoryResource = DomainHistoryAPI.DomainHistoryResource;
  export type DomainHistory = DomainHistoryAPI.DomainHistory;
  export type DomainHistoryGetResponse = DomainHistoryAPI.DomainHistoryGetResponse;
  export type DomainHistoryGetParams = DomainHistoryAPI.DomainHistoryGetParams;
  export import IPs = IPsAPI.IPs;
  export type IP = IPsAPI.IP;
  export type IPGetResponse = IPsAPI.IPGetResponse;
  export type IPGetParams = IPsAPI.IPGetParams;
  export import IPLists = IPListsAPI.IPLists;
  export type IPList = IPListsAPI.IPList;
  export type IPListGetResponse = IPListsAPI.IPListGetResponse;
  export type IPListGetParams = IPListsAPI.IPListGetParams;
  export import Miscategorizations = MiscategorizationsAPI.Miscategorizations;
  export type MiscategorizationCreateResponse = MiscategorizationsAPI.MiscategorizationCreateResponse;
  export type MiscategorizationCreateParams = MiscategorizationsAPI.MiscategorizationCreateParams;
  export import Whois = WhoisAPI.Whois;
  export type WhoisGetResponse = WhoisAPI.WhoisGetResponse;
  export type WhoisGetParams = WhoisAPI.WhoisGetParams;
  export import IndicatorFeeds = IndicatorFeedsAPI.IndicatorFeeds;
  export type IndicatorFeedCreateResponse = IndicatorFeedsAPI.IndicatorFeedCreateResponse;
  export type IndicatorFeedUpdateResponse = IndicatorFeedsAPI.IndicatorFeedUpdateResponse;
  export type IndicatorFeedListResponse = IndicatorFeedsAPI.IndicatorFeedListResponse;
  export type IndicatorFeedDataResponse = IndicatorFeedsAPI.IndicatorFeedDataResponse;
  export type IndicatorFeedGetResponse = IndicatorFeedsAPI.IndicatorFeedGetResponse;
  export import IndicatorFeedListResponsesSinglePage = IndicatorFeedsAPI.IndicatorFeedListResponsesSinglePage;
  export type IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export type IndicatorFeedUpdateParams = IndicatorFeedsAPI.IndicatorFeedUpdateParams;
  export type IndicatorFeedListParams = IndicatorFeedsAPI.IndicatorFeedListParams;
  export type IndicatorFeedDataParams = IndicatorFeedsAPI.IndicatorFeedDataParams;
  export type IndicatorFeedGetParams = IndicatorFeedsAPI.IndicatorFeedGetParams;
  export import Sinkholes = SinkholesAPI.Sinkholes;
  export type Sinkhole = SinkholesAPI.Sinkhole;
  export import SinkholesSinglePage = SinkholesAPI.SinkholesSinglePage;
  export type SinkholeListParams = SinkholesAPI.SinkholeListParams;
  export import AttackSurfaceReport = AttackSurfaceReportAPI.AttackSurfaceReport;
}
