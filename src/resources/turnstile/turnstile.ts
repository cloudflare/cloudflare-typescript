// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as WidgetsAPI from './widgets';

export class Turnstile extends APIResource {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
}

export namespace Turnstile {
  export import Widgets = WidgetsAPI.Widgets;
  export type Widget = WidgetsAPI.Widget;
  export type WidgetDomain = WidgetsAPI.WidgetDomain;
  export type WidgetListResponse = WidgetsAPI.WidgetListResponse;
  export import WidgetListResponsesV4PagePaginationArray = WidgetsAPI.WidgetListResponsesV4PagePaginationArray;
  export type WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export type WidgetUpdateParams = WidgetsAPI.WidgetUpdateParams;
  export type WidgetListParams = WidgetsAPI.WidgetListParams;
  export type WidgetDeleteParams = WidgetsAPI.WidgetDeleteParams;
  export type WidgetGetParams = WidgetsAPI.WidgetGetParams;
  export type WidgetRotateSecretParams = WidgetsAPI.WidgetRotateSecretParams;
}
