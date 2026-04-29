// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DNSAPI from './dns';
import { BaseDNS, DNS } from './dns';
import * as DomainHistoryAPI from './domain-history';
import { BaseDomainHistory, DomainHistory } from './domain-history';
import * as IPListsAPI from './ip-lists';
import { BaseIPLists, IPLists } from './ip-lists';
import * as IPsAPI from './ips';
import { BaseIPs, IPs } from './ips';
import * as MiscategorizationsAPI from './miscategorizations';
import { BaseMiscategorizations, Miscategorizations } from './miscategorizations';
import * as SinkholesAPI from './sinkholes';
import { BaseSinkholes, Sinkholes } from './sinkholes';
import * as WhoisAPI from './whois';
import { BaseWhois, Whois } from './whois';
import * as ASNAPI from './asn/asn';
import { ASN, BaseASN } from './asn/asn';
import * as AttackSurfaceReportAPI from './attack-surface-report/attack-surface-report';
import { AttackSurfaceReport, BaseAttackSurfaceReport } from './attack-surface-report/attack-surface-report';
import * as DomainsAPI from './domains/domains';
import { BaseDomains, Domains } from './domains/domains';
import * as IndicatorFeedsAPI from './indicator-feeds/indicator-feeds';
import { BaseIndicatorFeeds, IndicatorFeeds } from './indicator-feeds/indicator-feeds';

export class BaseIntel extends APIResource {
  static override readonly _key: readonly ['intel'] = Object.freeze(['intel'] as const);
}
export class Intel extends BaseIntel {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  domainHistory: DomainHistoryAPI.DomainHistory = new DomainHistoryAPI.DomainHistory(this._client);
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
Intel.DNS = DNS;
Intel.BaseDNS = BaseDNS;
Intel.Domains = Domains;
Intel.BaseDomains = BaseDomains;
Intel.DomainHistory = DomainHistory;
Intel.BaseDomainHistory = BaseDomainHistory;
Intel.IPs = IPs;
Intel.BaseIPs = BaseIPs;
Intel.IPLists = IPLists;
Intel.BaseIPLists = BaseIPLists;
Intel.Miscategorizations = Miscategorizations;
Intel.BaseMiscategorizations = BaseMiscategorizations;
Intel.Whois = Whois;
Intel.BaseWhois = BaseWhois;
Intel.IndicatorFeeds = IndicatorFeeds;
Intel.BaseIndicatorFeeds = BaseIndicatorFeeds;
Intel.Sinkholes = Sinkholes;
Intel.BaseSinkholes = BaseSinkholes;
Intel.AttackSurfaceReport = AttackSurfaceReport;
Intel.BaseAttackSurfaceReport = BaseAttackSurfaceReport;

export declare namespace Intel {
  export { ASN as ASN, BaseASN as BaseASN };

  export { DNS as DNS, BaseDNS as BaseDNS };

  export { Domains as Domains, BaseDomains as BaseDomains };

  export { DomainHistory as DomainHistory, BaseDomainHistory as BaseDomainHistory };

  export { IPs as IPs, BaseIPs as BaseIPs };

  export { IPLists as IPLists, BaseIPLists as BaseIPLists };

  export { Miscategorizations as Miscategorizations, BaseMiscategorizations as BaseMiscategorizations };

  export { Whois as Whois, BaseWhois as BaseWhois };

  export { IndicatorFeeds as IndicatorFeeds, BaseIndicatorFeeds as BaseIndicatorFeeds };

  export { Sinkholes as Sinkholes, BaseSinkholes as BaseSinkholes };

  export { AttackSurfaceReport as AttackSurfaceReport, BaseAttackSurfaceReport as BaseAttackSurfaceReport };
}
