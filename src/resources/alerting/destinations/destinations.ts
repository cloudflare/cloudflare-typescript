// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EligibleAPI from './eligible';
import { Eligible } from './eligible';
import * as PagerdutyAPI from './pagerduty';
import { Pagerduty } from './pagerduty';
import * as WebhooksAPI from './webhooks';
import { Webhooks } from './webhooks';

export class Destinations extends APIResource {
  eligible: EligibleAPI.Eligible = new EligibleAPI.Eligible(this._client);
  pagerduty: PagerdutyAPI.Pagerduty = new PagerdutyAPI.Pagerduty(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Destinations.Eligible = Eligible;
Destinations.Pagerduty = Pagerduty;
Destinations.Webhooks = Webhooks;

export declare namespace Destinations {
  export { Eligible as Eligible };

  export { Pagerduty as Pagerduty };

  export { Webhooks as Webhooks };
}
