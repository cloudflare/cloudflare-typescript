// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as OriginAPI from 'cloudflare/resources/radar/attacks/layer3/top/locations/origin';
import * as TargetAPI from 'cloudflare/resources/radar/attacks/layer3/top/locations/target';

export class Locations extends APIResource {
  origin: OriginAPI.Origin = new OriginAPI.Origin(this._client);
  target: TargetAPI.Target = new TargetAPI.Target(this._client);
}

export namespace Locations {
  export import Origin = OriginAPI.Origin;
  export import OriginListResponse = OriginAPI.OriginListResponse;
  export import OriginListParams = OriginAPI.OriginListParams;
  export import Target = TargetAPI.Target;
  export import TargetListResponse = TargetAPI.TargetListResponse;
  export import TargetListParams = TargetAPI.TargetListParams;
}
