// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PagerdutyAPI from 'cloudflare/resources/alerting/v3/destinations/pagerduty';

export class Destinations extends APIResource {
  pagerduty: PagerdutyAPI.Pagerduty = new PagerdutyAPI.Pagerduty(this._client);
}

export namespace Destinations {
  export import Pagerduty = PagerdutyAPI.Pagerduty;
  export import PagerdutyCreateTokenResponse = PagerdutyAPI.PagerdutyCreateTokenResponse;
  export import PagerdutyDeleteAllResponse = PagerdutyAPI.PagerdutyDeleteAllResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
}
