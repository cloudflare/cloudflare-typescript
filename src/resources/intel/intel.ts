// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DNSAPI from './dns';
import { BaseDNS, DNS, DNSListParams, DNSV4PagePagination } from './dns';
import * as DomainHistoryAPI from './domain-history';
import {
  BaseDomainHistoryResource,
  DomainHistory,
  DomainHistoryGetParams,
  DomainHistoryGetResponse,
  DomainHistoryResource,
} from './domain-history';
import * as IPListsAPI from './ip-lists';
import { BaseIPLists, IPList, IPLists } from './ip-lists';
import * as IPsAPI from './ips';
import { BaseIPs, IP, IPGetParams, IPGetResponse, IPs } from './ips';
import * as MiscategorizationsAPI from './miscategorizations';
import {
  BaseMiscategorizations,
  MiscategorizationCreateParams,
  MiscategorizationCreateResponse,
  Miscategorizations,
} from './miscategorizations';
import * as SinkholesAPI from './sinkholes';
import { BaseSinkholes, Sinkhole, SinkholeListParams, Sinkholes, SinkholesSinglePage } from './sinkholes';
import * as WhoisAPI from './whois';
import { BaseWhois, Whois, WhoisGetParams, WhoisGetResponse } from './whois';
import * as ASNAPI from './asn/asn';
import { ASN, ASNGetParams, BaseASN } from './asn/asn';
import * as AttackSurfaceReportAPI from './attack-surface-report/attack-surface-report';
import { AttackSurfaceReport, BaseAttackSurfaceReport } from './attack-surface-report/attack-surface-report';
import * as DomainsAPI from './domains/domains';
import { BaseDomains, Domain, DomainGetParams, Domains } from './domains/domains';
import * as IndicatorFeedsAPI from './indicator-feeds/indicator-feeds';
import {
  BaseIndicatorFeeds,
  IndicatorFeedCreateParams,
  IndicatorFeedCreateResponse,
  IndicatorFeedDataParams,
  IndicatorFeedDataResponse,
  IndicatorFeedGetParams,
  IndicatorFeedGetResponse,
  IndicatorFeedListParams,
  IndicatorFeedListResponse,
  IndicatorFeedListResponsesSinglePage,
  IndicatorFeedUpdateParams,
  IndicatorFeedUpdateResponse,
  IndicatorFeeds,
} from './indicator-feeds/indicator-feeds';

export class BaseIntel extends APIResource {
  static override readonly _key: readonly ['intel'] = Object.freeze(['intel'] as const);
}
export class Intel extends BaseIntel {
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

Intel.ASN = ASN;
Intel.BaseASN = BaseASN;
Intel.BaseDNS = BaseDNS;
Intel.Domains = Domains;
Intel.BaseDomains = BaseDomains;
Intel.DomainHistoryResource = DomainHistoryResource;
Intel.BaseDomainHistoryResource = BaseDomainHistoryResource;
Intel.IPs = IPs;
Intel.BaseIPs = BaseIPs;
Intel.IPLists = IPLists;
Intel.BaseIPLists = BaseIPLists;
Intel.Miscategorizations = Miscategorizations;
Intel.BaseMiscategorizations = BaseMiscategorizations;
Intel.BaseWhois = BaseWhois;
Intel.IndicatorFeeds = IndicatorFeeds;
Intel.BaseIndicatorFeeds = BaseIndicatorFeeds;
Intel.Sinkholes = Sinkholes;
Intel.BaseSinkholes = BaseSinkholes;
Intel.AttackSurfaceReport = AttackSurfaceReport;
Intel.BaseAttackSurfaceReport = BaseAttackSurfaceReport;

export declare namespace Intel {
  export { ASN as ASN, BaseASN as BaseASN, type ASNGetParams as ASNGetParams };

  export {
    type DNS as DNS,
    BaseDNS as BaseDNS,
    type DNSV4PagePagination as DNSV4PagePagination,
    type DNSListParams as DNSListParams,
  };

  export {
    Domains as Domains,
    BaseDomains as BaseDomains,
    type Domain as Domain,
    type DomainGetParams as DomainGetParams,
  };

  export {
    DomainHistoryResource as DomainHistoryResource,
    BaseDomainHistoryResource as BaseDomainHistoryResource,
    type DomainHistory as DomainHistory,
    type DomainHistoryGetResponse as DomainHistoryGetResponse,
    type DomainHistoryGetParams as DomainHistoryGetParams,
  };

  export {
    IPs as IPs,
    BaseIPs as BaseIPs,
    type IP as IP,
    type IPGetResponse as IPGetResponse,
    type IPGetParams as IPGetParams,
  };

  export { IPLists as IPLists, BaseIPLists as BaseIPLists, type IPList as IPList };

  export {
    Miscategorizations as Miscategorizations,
    BaseMiscategorizations as BaseMiscategorizations,
    type MiscategorizationCreateResponse as MiscategorizationCreateResponse,
    type MiscategorizationCreateParams as MiscategorizationCreateParams,
  };

  export {
    type Whois as Whois,
    BaseWhois as BaseWhois,
    type WhoisGetResponse as WhoisGetResponse,
    type WhoisGetParams as WhoisGetParams,
  };

  export {
    IndicatorFeeds as IndicatorFeeds,
    BaseIndicatorFeeds as BaseIndicatorFeeds,
    type IndicatorFeedCreateResponse as IndicatorFeedCreateResponse,
    type IndicatorFeedUpdateResponse as IndicatorFeedUpdateResponse,
    type IndicatorFeedListResponse as IndicatorFeedListResponse,
    type IndicatorFeedDataResponse as IndicatorFeedDataResponse,
    type IndicatorFeedGetResponse as IndicatorFeedGetResponse,
    type IndicatorFeedListResponsesSinglePage as IndicatorFeedListResponsesSinglePage,
    type IndicatorFeedCreateParams as IndicatorFeedCreateParams,
    type IndicatorFeedUpdateParams as IndicatorFeedUpdateParams,
    type IndicatorFeedListParams as IndicatorFeedListParams,
    type IndicatorFeedDataParams as IndicatorFeedDataParams,
    type IndicatorFeedGetParams as IndicatorFeedGetParams,
  };

  export {
    Sinkholes as Sinkholes,
    BaseSinkholes as BaseSinkholes,
    type Sinkhole as Sinkhole,
    type SinkholesSinglePage as SinkholesSinglePage,
    type SinkholeListParams as SinkholeListParams,
  };

  export { AttackSurfaceReport as AttackSurfaceReport, BaseAttackSurfaceReport as BaseAttackSurfaceReport };
}
