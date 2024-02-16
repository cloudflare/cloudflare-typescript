// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AvailableAlertsAPI from 'cloudflare/resources/alerting/v3/available-alerts';
import * as DestinationsAPI from 'cloudflare/resources/alerting/v3/destinations/destinations';

export class V3 extends APIResource {
  availableAlerts: AvailableAlertsAPI.AvailableAlerts = new AvailableAlertsAPI.AvailableAlerts(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
}

export namespace V3 {
  export import AvailableAlerts = AvailableAlertsAPI.AvailableAlerts;
  export import AvailableAlertListResponse = AvailableAlertsAPI.AvailableAlertListResponse;
  export import Destinations = DestinationsAPI.Destinations;
}
