// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as WidgetsAPI from './widgets';

export class Challenges extends APIResource {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
}

export namespace Challenges {
  export import Widgets = WidgetsAPI.Widgets;
  export import Widget = WidgetsAPI.Widget;
  export import WidgetDomain = WidgetsAPI.WidgetDomain;
  export import WidgetListResponse = WidgetsAPI.WidgetListResponse;
  export import WidgetListResponsesV4PagePaginationArray = WidgetsAPI.WidgetListResponsesV4PagePaginationArray;
  export import WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export import WidgetUpdateParams = WidgetsAPI.WidgetUpdateParams;
  export import WidgetListParams = WidgetsAPI.WidgetListParams;
  export import WidgetDeleteParams = WidgetsAPI.WidgetDeleteParams;
  export import WidgetGetParams = WidgetsAPI.WidgetGetParams;
  export import WidgetRotateSecretParams = WidgetsAPI.WidgetRotateSecretParams;
}
