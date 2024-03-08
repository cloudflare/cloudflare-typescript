// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as WidgetsAPI from 'cloudflare/resources/challenges/widgets';

export class Challenges extends APIResource {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
}

export namespace Challenges {
  export import Widgets = WidgetsAPI.Widgets;
  export import NcChallengesAdminWidgetDetail = WidgetsAPI.NcChallengesAdminWidgetDetail;
  export import NcChallengesAdminWidgetList = WidgetsAPI.NcChallengesAdminWidgetList;
  export import NcChallengesAdminWidgetListsV4PagePaginationArray = WidgetsAPI.NcChallengesAdminWidgetListsV4PagePaginationArray;
  export import WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export import WidgetUpdateParams = WidgetsAPI.WidgetUpdateParams;
  export import WidgetListParams = WidgetsAPI.WidgetListParams;
  export import WidgetRotateSecretParams = WidgetsAPI.WidgetRotateSecretParams;
}
