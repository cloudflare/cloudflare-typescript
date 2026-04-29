// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DNSAPI from './dns';
import { DNS } from './dns';
import * as DomainHistoryAPI from './domain-history';
import { DomainHistory } from './domain-history';
import * as IPListsAPI from './ip-lists';
import { IPLists } from './ip-lists';
import * as IPsAPI from './ips';
import { IPs } from './ips';
import * as MiscategorizationsAPI from './miscategorizations';
import { Miscategorizations } from './miscategorizations';
import * as SinkholesAPI from './sinkholes';
import { Sinkholes } from './sinkholes';
import * as WhoisAPI from './whois';
import { Whois } from './whois';
import * as ASNAPI from './asn/asn';
import { ASN } from './asn/asn';
import * as AttackSurfaceReportAPI from './attack-surface-report/attack-surface-report';
import { AttackSurfaceReport } from './attack-surface-report/attack-surface-report';
import * as DomainsAPI from './domains/domains';
import { Domains } from './domains/domains';
import * as IndicatorFeedsAPI from './indicator-feeds/indicator-feeds';
import { IndicatorFeeds } from './indicator-feeds/indicator-feeds';

export class Intel extends APIResource {
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
Intel.DNS = DNS;
Intel.Domains = Domains;
Intel.DomainHistory = DomainHistory;
Intel.IPs = IPs;
Intel.IPLists = IPLists;
Intel.Miscategorizations = Miscategorizations;
Intel.Whois = Whois;
Intel.IndicatorFeeds = IndicatorFeeds;
Intel.Sinkholes = Sinkholes;
Intel.AttackSurfaceReport = AttackSurfaceReport;

export declare namespace Intel {
  export { ASN as ASN };

  export { DNS as DNS };

  export { Domains as Domains };

  export { DomainHistory as DomainHistory };

  export { IPs as IPs };

  export { IPLists as IPLists };

  export { Miscategorizations as Miscategorizations };

  export { Whois as Whois };

  export { IndicatorFeeds as IndicatorFeeds };

  export { Sinkholes as Sinkholes };

  export { AttackSurfaceReport as AttackSurfaceReport };
}
