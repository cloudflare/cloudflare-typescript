// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as WidgetsAPI from 'cloudflare/resources/challenges/widgets';

export class Challenges extends APIResource {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
}

export namespace Challenges {
  export import Widgets = WidgetsAPI.Widgets;
}
