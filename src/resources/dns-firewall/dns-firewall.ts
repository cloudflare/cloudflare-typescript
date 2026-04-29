// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReverseDNSAPI from './reverse-dns';
import { BaseReverseDNS, ReverseDNS } from './reverse-dns';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics, BaseAnalytics } from './analytics/analytics';

export class BaseDNSFirewall extends APIResource {
  static override readonly _key: readonly ['dnsFirewall'] = Object.freeze(['dnsFirewall'] as const);
}
export class DNSFirewall extends BaseDNSFirewall {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  reverseDNS: ReverseDNSAPI.ReverseDNS = new ReverseDNSAPI.ReverseDNS(this._client);
}

DNSFirewall.Analytics = Analytics;
DNSFirewall.BaseAnalytics = BaseAnalytics;
DNSFirewall.ReverseDNS = ReverseDNS;
DNSFirewall.BaseReverseDNS = BaseReverseDNS;

export declare namespace DNSFirewall {
  export { Analytics as Analytics, BaseAnalytics as BaseAnalytics };

  export { ReverseDNS as ReverseDNS, BaseReverseDNS as BaseReverseDNS };
}
