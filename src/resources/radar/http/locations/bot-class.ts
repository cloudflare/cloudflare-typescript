// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseBotClass extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'locations', 'botClass'] = Object.freeze([
    'radar',
    'http',
    'locations',
    'botClass',
  ] as const);
}
export class BotClass extends BaseBotClass {}
