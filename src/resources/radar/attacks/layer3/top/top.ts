// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/layer3/top/attacks';
import * as IndustryAPI from 'cloudflare/resources/radar/attacks/layer3/top/industry';
import * as VerticalAPI from 'cloudflare/resources/radar/attacks/layer3/top/vertical';
import * as LocationsAPI from 'cloudflare/resources/radar/attacks/layer3/top/locations/locations';

export class Top extends APIResource {
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  industry: IndustryAPI.Industry = new IndustryAPI.Industry(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  vertical: VerticalAPI.Vertical = new VerticalAPI.Vertical(this._client);
}

export namespace Top {
  export import Attacks = AttacksAPI.Attacks;
  export import AttackListResponse = AttacksAPI.AttackListResponse;
  export import AttackListParams = AttacksAPI.AttackListParams;
  export import Industry = IndustryAPI.Industry;
  export import IndustryListResponse = IndustryAPI.IndustryListResponse;
  export import IndustryListParams = IndustryAPI.IndustryListParams;
  export import Locations = LocationsAPI.Locations;
  export import Vertical = VerticalAPI.Vertical;
  export import VerticalListResponse = VerticalAPI.VerticalListResponse;
  export import VerticalListParams = VerticalAPI.VerticalListParams;
}
