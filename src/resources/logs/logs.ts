// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RayidAPI from 'cloudflare/resources/logs/rayid';
import * as ControlAPI from 'cloudflare/resources/logs/control/control';
import * as ReceivedAPI from 'cloudflare/resources/logs/received/received';

export class Logs extends APIResource {
  control: ControlAPI.Control = new ControlAPI.Control(this._client);
  rayid: RayidAPI.Rayid = new RayidAPI.Rayid(this._client);
  received: ReceivedAPI.Received = new ReceivedAPI.Received(this._client);
}

export namespace Logs {
  export import Control = ControlAPI.Control;
  export import Rayid = RayidAPI.Rayid;
  export import RayidGetResponse = RayidAPI.RayidGetResponse;
  export import RayidGetParams = RayidAPI.RayidGetParams;
  export import Received = ReceivedAPI.Received;
  export import ReceivedGetResponse = ReceivedAPI.ReceivedGetResponse;
  export import ReceivedGetParams = ReceivedAPI.ReceivedGetParams;
}
