// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as WidgetsAPI from 'cloudflare/resources/challenges/widgets';

export class Challenges extends APIResource {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
}

export namespace Challenges {
  export import Widgets = WidgetsAPI.Widgets;
  export import ChallengesWidget = WidgetsAPI.ChallengesWidget;
  export import ChallengesWidgetList = WidgetsAPI.ChallengesWidgetList;
  export import ChallengesWidgetListsV4PagePaginationArray = WidgetsAPI.ChallengesWidgetListsV4PagePaginationArray;
  export import WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export import WidgetUpdateParams = WidgetsAPI.WidgetUpdateParams;
  export import WidgetListParams = WidgetsAPI.WidgetListParams;
  export import WidgetDeleteParams = WidgetsAPI.WidgetDeleteParams;
  export import WidgetGetParams = WidgetsAPI.WidgetGetParams;
  export import WidgetRotateSecretParams = WidgetsAPI.WidgetRotateSecretParams;
}
