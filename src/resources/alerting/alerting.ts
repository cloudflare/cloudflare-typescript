// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as V3API from 'cloudflare/resources/alerting/v3/v3';

export class Alerting extends APIResource {
  v3: V3API.V3 = new V3API.V3(this._client);
}

export namespace Alerting {
  export import V3 = V3API.V3;
  export import V3ListResponse = V3API.V3ListResponse;
  export import V3ListParams = V3API.V3ListParams;
}
