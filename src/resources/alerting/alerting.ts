// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as V3API from 'cloudflare/resources/alerting/v3/v3';
import * as V3sAPI from 'cloudflare/resources/alerting/v3s/v3s';

export class Alerting extends APIResource {
  v3s: V3sAPI.V3s = new V3sAPI.V3s(this._client);
  v3: V3API.V3 = new V3API.V3(this._client);
}

export namespace Alerting {
  export import V3s = V3sAPI.V3s;
  export import V3 = V3API.V3;
}
