// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContentAPI from './content';
import { BaseContent, Content } from './content';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';

export class BaseSnippets extends APIResource {
  static override readonly _key: readonly ['snippets'] = Object.freeze(['snippets'] as const);
}
export class Snippets extends BaseSnippets {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Snippets.Content = Content;
Snippets.BaseContent = BaseContent;
Snippets.Rules = Rules;
Snippets.BaseRules = BaseRules;

export declare namespace Snippets {
  export { Content as Content, BaseContent as BaseContent };

  export { Rules as Rules, BaseRules as BaseRules };
}
