// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RobotsAPI from './robots';
import { Robots } from './robots';

export class AIAudit extends APIResource {
  robots: RobotsAPI.Robots = new RobotsAPI.Robots(this._client);
}

AIAudit.Robots = Robots;

export declare namespace AIAudit {
  export { Robots as Robots };
}
