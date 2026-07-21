// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RobotsAPI from './robots';
import {
  BaseRobots,
  RobotBulkGetParams,
  RobotBulkGetResponse,
  RobotGetParams,
  RobotGetResponse,
  Robots,
} from './robots';

export class BaseAIAudit extends APIResource {
  static override readonly _key: readonly ['aiAudit'] = Object.freeze(['aiAudit'] as const);
}
export class AIAudit extends BaseAIAudit {
  robots: RobotsAPI.Robots = new RobotsAPI.Robots(this._client);
}

AIAudit.Robots = Robots;
AIAudit.BaseRobots = BaseRobots;

export declare namespace AIAudit {
  export {
    Robots as Robots,
    BaseRobots as BaseRobots,
    type RobotBulkGetResponse as RobotBulkGetResponse,
    type RobotGetResponse as RobotGetResponse,
    type RobotBulkGetParams as RobotBulkGetParams,
    type RobotGetParams as RobotGetParams,
  };
}
