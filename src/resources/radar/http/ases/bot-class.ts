// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseBotClass extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases', 'botClass'] = Object.freeze([
    'radar',
    'http',
    'ases',
    'botClass',
  ] as const);
}
export class BotClass extends BaseBotClass {}
