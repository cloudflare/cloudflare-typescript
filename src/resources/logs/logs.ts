// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as RayIDAPI from 'cloudflare/resources/logs/rayid';
import * as ControlAPI from 'cloudflare/resources/logs/control/control';
import * as ReceivedAPI from 'cloudflare/resources/logs/received/received';

export class Logs extends APIResource {
  control: ControlAPI.Control = new ControlAPI.Control(this._client);
  RayID: RayIDAPI.RayID = new RayIDAPI.RayID(this._client);
  received: ReceivedAPI.Received = new ReceivedAPI.Received(this._client);
}

export namespace Logs {
  export import Control = ControlAPI.Control;
  export import RayID = RayIDAPI.RayID;
  export import RayIDGetParams = RayIDAPI.RayIDGetParams;
  export import Received = ReceivedAPI.Received;
  export import ReceivedGetParams = ReceivedAPI.ReceivedGetParams;
}
