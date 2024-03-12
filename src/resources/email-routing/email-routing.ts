// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RoutingAPI from 'cloudflare/resources/email-routing/routing/routing';

export class EmailRouting extends APIResource {
  routing: RoutingAPI.Routing = new RoutingAPI.Routing(this._client);
}

export namespace EmailRouting {
  export import Routing = RoutingAPI.Routing;
  export import EmailSettings = RoutingAPI.EmailSettings;
  export import RoutingDisableResponse = RoutingAPI.RoutingDisableResponse;
  export import RoutingEnableResponse = RoutingAPI.RoutingEnableResponse;
  export import RoutingGetResponse = RoutingAPI.RoutingGetResponse;
}
