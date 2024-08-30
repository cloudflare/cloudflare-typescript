// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GatewayAPI from './gateway/gateway';

export class AI extends APIResource {
  gateway: GatewayAPI.Gateway = new GatewayAPI.Gateway(this._client);
}

export namespace AI {
  export import Gateway = GatewayAPI.Gateway;
}
