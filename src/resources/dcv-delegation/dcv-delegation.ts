// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as UUIDAPI from 'cloudflare/resources/dcv-delegation/uuid';

export class DCVDelegation extends APIResource {
  uuid: UUIDAPI.UUID = new UUIDAPI.UUID(this._client);
}

export namespace DCVDelegation {
  export import UUID = UUIDAPI.UUID;
  export import DCVDelegationUUID = UUIDAPI.DCVDelegationUUID;
  export import UUIDGetParams = UUIDAPI.UUIDGetParams;
}
