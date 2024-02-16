// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EligiblesAPI from 'cloudflare/resources/alerting/v3s/destinations/eligibles';
import * as PagerdutiesAPI from 'cloudflare/resources/alerting/v3s/destinations/pagerduties';
import * as WebhooksAPI from 'cloudflare/resources/alerting/v3s/destinations/webhooks';

export class Destinations extends APIResource {
  eligibles: EligiblesAPI.Eligibles = new EligiblesAPI.Eligibles(this._client);
  pagerduties: PagerdutiesAPI.Pagerduties = new PagerdutiesAPI.Pagerduties(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

export namespace Destinations {
  export import Eligibles = EligiblesAPI.Eligibles;
  export import EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse = EligiblesAPI.EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse;
  export import Pagerduties = PagerdutiesAPI.Pagerduties;
  export import PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse = PagerdutiesAPI.PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse;
  export import Webhooks = WebhooksAPI.Webhooks;
  export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookGetResponse = WebhooksAPI.WebhookGetResponse;
  export import WebhookNotificationWebhooksCreateAWebhookResponse = WebhooksAPI.WebhookNotificationWebhooksCreateAWebhookResponse;
  export import WebhookNotificationWebhooksListWebhooksResponse = WebhooksAPI.WebhookNotificationWebhooksListWebhooksResponse;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export import WebhookNotificationWebhooksCreateAWebhookParams = WebhooksAPI.WebhookNotificationWebhooksCreateAWebhookParams;
}
