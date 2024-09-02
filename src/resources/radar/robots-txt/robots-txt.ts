// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TopAPI from './top/top';

export class RobotsTXT extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export namespace RobotsTXT {
  export import Top = TopAPI.Top;
}
