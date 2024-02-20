// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RoutingAPI from 'cloudflare/resources/emails/routing/routing';

export class Emails extends APIResource {
  routing: RoutingAPI.Routing = new RoutingAPI.Routing(this._client);
}

export namespace Emails {
  export import Routing = RoutingAPI.Routing;
  export import RoutingGetResponse = RoutingAPI.RoutingGetResponse;
}
