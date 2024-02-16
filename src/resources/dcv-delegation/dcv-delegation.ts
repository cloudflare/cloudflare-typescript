// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as UuidAPI from 'cloudflare/resources/dcv-delegation/uuid';

export class DcvDelegation extends APIResource {
  uuid: UuidAPI.Uuid = new UuidAPI.Uuid(this._client);
}

export namespace DcvDelegation {
  export import Uuid = UuidAPI.Uuid;
  export import UuidGetResponse = UuidAPI.UuidGetResponse;
}
