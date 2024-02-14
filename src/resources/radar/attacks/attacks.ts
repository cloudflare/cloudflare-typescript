// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as Layer3API from 'cloudflare/resources/radar/attacks/layer3/layer3';

export class Attacks extends APIResource {
  layer3: Layer3API.Layer3 = new Layer3API.Layer3(this._client);
}

export namespace Attacks {
  export import Layer3 = Layer3API.Layer3;
}
