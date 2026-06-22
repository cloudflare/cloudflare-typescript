// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RayIDAPI from './rayid';
import { BaseRayID, RayID, RayIDGetParams, RayIDGetResponse } from './rayid';
import * as ControlAPI from './control/control';
import { BaseControl, Control } from './control/control';
import * as LogExplorerAPI from './log-explorer/log-explorer';
import { BaseLogExplorer, LogExplorer } from './log-explorer/log-explorer';
import * as ReceivedAPI from './received/received';
import { BaseReceived, Received, ReceivedGetParams, ReceivedGetResponse } from './received/received';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['logs'] = Object.freeze(['logs'] as const);
}
export class Logs extends BaseLogs {
  logExplorer: LogExplorerAPI.LogExplorer = new LogExplorerAPI.LogExplorer(this._client);
  control: ControlAPI.Control = new ControlAPI.Control(this._client);
  RayID: RayIDAPI.RayID = new RayIDAPI.RayID(this._client);
  received: ReceivedAPI.Received = new ReceivedAPI.Received(this._client);
}

Logs.LogExplorer = LogExplorer;
Logs.BaseLogExplorer = BaseLogExplorer;
Logs.Control = Control;
Logs.BaseControl = BaseControl;
Logs.RayID = RayID;
Logs.BaseRayID = BaseRayID;
Logs.Received = Received;
Logs.BaseReceived = BaseReceived;

export declare namespace Logs {
  export { LogExplorer as LogExplorer, BaseLogExplorer as BaseLogExplorer };

  export { Control as Control, BaseControl as BaseControl };

  export {
    RayID as RayID,
    BaseRayID as BaseRayID,
    type RayIDGetResponse as RayIDGetResponse,
    type RayIDGetParams as RayIDGetParams,
  };

  export {
    Received as Received,
    BaseReceived as BaseReceived,
    type ReceivedGetResponse as ReceivedGetResponse,
    type ReceivedGetParams as ReceivedGetParams,
  };
}
