// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ContentAPI from 'cloudflare/resources/snippets/content';
import * as RulesAPI from 'cloudflare/resources/snippets/rules';

export class Snippets extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace Snippets {
  export import Content = ContentAPI.Content;
  export import Rules = RulesAPI.Rules;
}
