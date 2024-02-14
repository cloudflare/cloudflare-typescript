// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RoutingsAPI from 'cloudflare/resources/emails/routings/routings';

export class Emails extends APIResource {
  routings: RoutingsAPI.Routings = new RoutingsAPI.Routings(this._client);
}

export namespace Emails {
  export import Routings = RoutingsAPI.Routings;
  export import RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse = RoutingsAPI.RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse;
}
