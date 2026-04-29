// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EligibleAPI from './eligible';
import { BaseEligible, Eligible } from './eligible';
import * as PagerdutyAPI from './pagerduty';
import { BasePagerduty, Pagerduty } from './pagerduty';
import * as WebhooksAPI from './webhooks';
import { BaseWebhooks, Webhooks } from './webhooks';

export class BaseDestinations extends APIResource {
  static override readonly _key: readonly ['alerting', 'destinations'] = Object.freeze([
    'alerting',
    'destinations',
  ] as const);
}
export class Destinations extends BaseDestinations {
  eligible: EligibleAPI.Eligible = new EligibleAPI.Eligible(this._client);
  pagerduty: PagerdutyAPI.Pagerduty = new PagerdutyAPI.Pagerduty(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Destinations.Eligible = Eligible;
Destinations.BaseEligible = BaseEligible;
Destinations.Pagerduty = Pagerduty;
Destinations.BasePagerduty = BasePagerduty;
Destinations.Webhooks = Webhooks;
Destinations.BaseWebhooks = BaseWebhooks;

export declare namespace Destinations {
  export { Eligible as Eligible, BaseEligible as BaseEligible };

  export { Pagerduty as Pagerduty, BasePagerduty as BasePagerduty };

  export { Webhooks as Webhooks, BaseWebhooks as BaseWebhooks };
}
