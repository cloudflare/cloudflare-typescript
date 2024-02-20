// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RoutesAPI from 'cloudflare/resources/teamnet/routes';

export class Teamnet extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

export namespace Teamnet {
  export import Routes = RoutesAPI.Routes;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteEditResponse = RoutesAPI.RouteEditResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteEditParams = RoutesAPI.RouteEditParams;
}
