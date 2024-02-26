// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DNSAPI from 'cloudflare/resources/intel/dns';
import * as DomainHistoriesAPI from 'cloudflare/resources/intel/domain-histories';
import * as IPListsAPI from 'cloudflare/resources/intel/ip-lists';
import * as IPsAPI from 'cloudflare/resources/intel/ips';
import * as MiscategorizationsAPI from 'cloudflare/resources/intel/miscategorizations';
import * as SinkholesAPI from 'cloudflare/resources/intel/sinkholes';
import * as WhoisAPI from 'cloudflare/resources/intel/whois';
import * as ASNAPI from 'cloudflare/resources/intel/asn/asn';
import * as DomainsAPI from 'cloudflare/resources/intel/domains/domains';
import * as IndicatorFeedsAPI from 'cloudflare/resources/intel/indicator-feeds/indicator-feeds';

export class Intel extends APIResource {
  asn: ASNAPI.ASN = new ASNAPI.ASN(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  domainHistories: DomainHistoriesAPI.DomainHistories = new DomainHistoriesAPI.DomainHistories(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  ipLists: IPListsAPI.IPLists = new IPListsAPI.IPLists(this._client);
  miscategorizations: MiscategorizationsAPI.Miscategorizations = new MiscategorizationsAPI.Miscategorizations(
    this._client,
  );
  whois: WhoisAPI.Whois = new WhoisAPI.Whois(this._client);
  indicatorFeeds: IndicatorFeedsAPI.IndicatorFeeds = new IndicatorFeedsAPI.IndicatorFeeds(this._client);
  sinkholes: SinkholesAPI.Sinkholes = new SinkholesAPI.Sinkholes(this._client);
}

export namespace Intel {
  export import ASN = ASNAPI.ASN;
  export import ASNGetResponse = ASNAPI.ASNGetResponse;
  export import ASNGetParams = ASNAPI.ASNGetParams;
  export import DNS = DNSAPI.DNS;
  export import DNSGetResponse = DNSAPI.DNSGetResponse;
  export import DNSGetParams = DNSAPI.DNSGetParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
  export import DomainHistories = DomainHistoriesAPI.DomainHistories;
  export import DomainHistoryListResponse = DomainHistoriesAPI.DomainHistoryListResponse;
  export import DomainHistoryListParams = DomainHistoriesAPI.DomainHistoryListParams;
  export import IPs = IPsAPI.IPs;
  export import IPGetResponse = IPsAPI.IPGetResponse;
  export import IPGetParams = IPsAPI.IPGetParams;
  export import IPLists = IPListsAPI.IPLists;
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
  export import IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export import IndicatorFeedUpdateParams = IndicatorFeedsAPI.IndicatorFeedUpdateParams;
  export import IndicatorFeedListParams = IndicatorFeedsAPI.IndicatorFeedListParams;
  export import IndicatorFeedDataParams = IndicatorFeedsAPI.IndicatorFeedDataParams;
  export import IndicatorFeedGetParams = IndicatorFeedsAPI.IndicatorFeedGetParams;
  export import Sinkholes = SinkholesAPI.Sinkholes;
  export import SinkholeListResponse = SinkholesAPI.SinkholeListResponse;
  export import SinkholeListParams = SinkholesAPI.SinkholeListParams;
}
