// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EligibleAPI from './eligible';
import * as PagerdutyAPI from './pagerduty';
import * as WebhooksAPI from './webhooks';

export class Destinations extends APIResource {
  eligible: EligibleAPI.Eligible = new EligibleAPI.Eligible(this._client);
  pagerduty: PagerdutyAPI.PagerdutyResource = new PagerdutyAPI.PagerdutyResource(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

export namespace Destinations {
  export import Eligible = EligibleAPI.Eligible;
  export type EligibleGetResponse = EligibleAPI.EligibleGetResponse;
  export type EligibleGetParams = EligibleAPI.EligibleGetParams;
  export import PagerdutyResource = PagerdutyAPI.PagerdutyResource;
  export type Pagerduty = PagerdutyAPI.Pagerduty;
  export type PagerdutyCreateResponse = PagerdutyAPI.PagerdutyCreateResponse;
  export type PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export type PagerdutyGetResponse = PagerdutyAPI.PagerdutyGetResponse;
  export type PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
  export type PagerdutyCreateParams = PagerdutyAPI.PagerdutyCreateParams;
  export type PagerdutyDeleteParams = PagerdutyAPI.PagerdutyDeleteParams;
  export type PagerdutyGetParams = PagerdutyAPI.PagerdutyGetParams;
  export type PagerdutyLinkParams = PagerdutyAPI.PagerdutyLinkParams;
  export import Webhooks = WebhooksAPI.Webhooks;
  export type WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export type WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export type WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhooksSinglePage = WebhooksAPI.WebhooksSinglePage;
  export type WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export type WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export type WebhookListParams = WebhooksAPI.WebhookListParams;
  export type WebhookDeleteParams = WebhooksAPI.WebhookDeleteParams;
  export type WebhookGetParams = WebhooksAPI.WebhookGetParams;
}
