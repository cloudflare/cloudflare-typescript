// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EligibleAPI from './eligible';
import { BaseEligible, Eligible, EligibleGetParams, EligibleGetResponse } from './eligible';
import * as PagerdutyAPI from './pagerduty';
import {
  BasePagerdutyResource,
  PagerdutiesSinglePage,
  Pagerduty,
  PagerdutyCreateParams,
  PagerdutyCreateResponse,
  PagerdutyDeleteParams,
  PagerdutyDeleteResponse,
  PagerdutyGetParams,
  PagerdutyLinkParams,
  PagerdutyLinkResponse,
  PagerdutyResource,
} from './pagerduty';
import * as WebhooksAPI from './webhooks';
import {
  BaseWebhooks,
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteParams,
  WebhookDeleteResponse,
  WebhookGetParams,
  WebhookListParams,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
  WebhooksSinglePage,
} from './webhooks';

export class BaseDestinations extends APIResource {
  static override readonly _key: readonly ['alerting', 'destinations'] = Object.freeze([
    'alerting',
    'destinations',
  ] as const);
}
export class Destinations extends BaseDestinations {
  eligible: EligibleAPI.Eligible = new EligibleAPI.Eligible(this._client);
  pagerduty: PagerdutyAPI.PagerdutyResource = new PagerdutyAPI.PagerdutyResource(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Destinations.Eligible = Eligible;
Destinations.BaseEligible = BaseEligible;
Destinations.PagerdutyResource = PagerdutyResource;
Destinations.BasePagerdutyResource = BasePagerdutyResource;
Destinations.BaseWebhooks = BaseWebhooks;

export declare namespace Destinations {
  export {
    Eligible as Eligible,
    BaseEligible as BaseEligible,
    type EligibleGetResponse as EligibleGetResponse,
    type EligibleGetParams as EligibleGetParams,
  };

  export {
    PagerdutyResource as PagerdutyResource,
    BasePagerdutyResource as BasePagerdutyResource,
    type Pagerduty as Pagerduty,
    type PagerdutyCreateResponse as PagerdutyCreateResponse,
    type PagerdutyDeleteResponse as PagerdutyDeleteResponse,
    type PagerdutyLinkResponse as PagerdutyLinkResponse,
    type PagerdutiesSinglePage as PagerdutiesSinglePage,
    type PagerdutyCreateParams as PagerdutyCreateParams,
    type PagerdutyDeleteParams as PagerdutyDeleteParams,
    type PagerdutyGetParams as PagerdutyGetParams,
    type PagerdutyLinkParams as PagerdutyLinkParams,
  };

  export {
    type Webhooks as Webhooks,
    BaseWebhooks as BaseWebhooks,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhooksSinglePage as WebhooksSinglePage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookGetParams as WebhookGetParams,
  };
}
