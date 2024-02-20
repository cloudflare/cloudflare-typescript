// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EligibleAPI from 'cloudflare/resources/alerting/v3/destinations/eligible';
import * as PagerdutyAPI from 'cloudflare/resources/alerting/v3/destinations/pagerduty';
import * as WebhooksAPI from 'cloudflare/resources/alerting/v3/destinations/webhooks';

export class Destinations extends APIResource {
  eligible: EligibleAPI.Eligible = new EligibleAPI.Eligible(this._client);
  pagerduty: PagerdutyAPI.Pagerduty = new PagerdutyAPI.Pagerduty(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

export namespace Destinations {
  export import Eligible = EligibleAPI.Eligible;
  export import EligibleGetResponse = EligibleAPI.EligibleGetResponse;
  export import Pagerduty = PagerdutyAPI.Pagerduty;
  export import PagerdutyCreateResponse = PagerdutyAPI.PagerdutyCreateResponse;
  export import PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export import PagerdutyGetResponse = PagerdutyAPI.PagerdutyGetResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
  export import Webhooks = WebhooksAPI.Webhooks;
  export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export import WebhookListResponse = WebhooksAPI.WebhookListResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookGetResponse = WebhooksAPI.WebhookGetResponse;
  export import WebhookReplaceResponse = WebhooksAPI.WebhookReplaceResponse;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export import WebhookReplaceParams = WebhooksAPI.WebhookReplaceParams;
}
