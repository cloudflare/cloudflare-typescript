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
  export import EligibleGetResponse = EligibleAPI.EligibleGetResponse;
  export import EligibleGetParams = EligibleAPI.EligibleGetParams;
  export import PagerdutyResource = PagerdutyAPI.PagerdutyResource;
  export import Pagerduty = PagerdutyAPI.Pagerduty;
  export import PagerdutyCreateResponse = PagerdutyAPI.PagerdutyCreateResponse;
  export import PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export import PagerdutyGetResponse = PagerdutyAPI.PagerdutyGetResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
  export import PagerdutyCreateParams = PagerdutyAPI.PagerdutyCreateParams;
  export import PagerdutyDeleteParams = PagerdutyAPI.PagerdutyDeleteParams;
  export import PagerdutyGetParams = PagerdutyAPI.PagerdutyGetParams;
  export import PagerdutyLinkParams = PagerdutyAPI.PagerdutyLinkParams;
  export import Webhooks = WebhooksAPI.Webhooks;
  export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhooksSinglePage = WebhooksAPI.WebhooksSinglePage;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export import WebhookListParams = WebhooksAPI.WebhookListParams;
  export import WebhookDeleteParams = WebhooksAPI.WebhookDeleteParams;
  export import WebhookGetParams = WebhooksAPI.WebhookGetParams;
}
