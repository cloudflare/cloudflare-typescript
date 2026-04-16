# WaitingRooms

Types:

- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">AdditionalRoutes</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">CookieAttributes</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">Query</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoom</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">create</a>({ ...params }) -> WaitingRoom</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">update</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">list</a>({ ...params }) -> WaitingRoomsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">delete</a>(waitingRoomId, { ...params }) -> WaitingRoomDeleteResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">edit</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">get</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>

## Page

Types:

- <code><a href="./src/resources/waiting-rooms/page.ts">PagePreviewResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/preview">client.waitingRooms.page.<a href="./src/resources/waiting-rooms/page.ts">preview</a>({ ...params }) -> PagePreviewResponse</code>

## Events

Types:

- <code><a href="./src/resources/waiting-rooms/events/events.ts">Event</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">create</a>(waitingRoomId, { ...params }) -> Event</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">update</a>(waitingRoomId, eventId, { ...params }) -> Event</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">list</a>(waitingRoomId, { ...params }) -> EventsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">delete</a>(waitingRoomId, eventId, { ...params }) -> EventDeleteResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">edit</a>(waitingRoomId, eventId, { ...params }) -> Event</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">get</a>(waitingRoomId, eventId, { ...params }) -> Event</code>

### Details

Types:

- <code><a href="./src/resources/waiting-rooms/events/details.ts">EventQuery</a></code>
- <code><a href="./src/resources/waiting-rooms/events/details.ts">DetailGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}/details">client.waitingRooms.events.details.<a href="./src/resources/waiting-rooms/events/details.ts">get</a>(waitingRoomId, eventId, { ...params }) -> DetailGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/waiting-rooms/rules.ts">WaitingRoomRule</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">create</a>(waitingRoomId, { ...params }) -> WaitingRoomRulesSinglePage</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">update</a>(waitingRoomId, [ ...rules ]) -> WaitingRoomRulesSinglePage</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">delete</a>(waitingRoomId, ruleId, { ...params }) -> WaitingRoomRulesSinglePage</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">edit</a>(waitingRoomId, ruleId, { ...params }) -> WaitingRoomRulesSinglePage</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">get</a>(waitingRoomId, { ...params }) -> WaitingRoomRulesSinglePage</code>

## Statuses

Types:

- <code><a href="./src/resources/waiting-rooms/statuses.ts">StatusGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/status">client.waitingRooms.statuses.<a href="./src/resources/waiting-rooms/statuses.ts">get</a>(waitingRoomId, { ...params }) -> StatusGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/waiting-rooms/settings.ts">Setting</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">edit</a>({ ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>
