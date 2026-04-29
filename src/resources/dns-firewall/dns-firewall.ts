// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ReverseDNSAPI from './reverse-dns';
import { ReverseDNS } from './reverse-dns';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';

export class DNSFirewall extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  reverseDNS: ReverseDNSAPI.ReverseDNS = new ReverseDNSAPI.ReverseDNS(this._client);
}

DNSFirewall.Analytics = Analytics;
DNSFirewall.ReverseDNS = ReverseDNS;

export declare namespace DNSFirewall {
  export { Analytics as Analytics };

  export { ReverseDNS as ReverseDNS };
}
