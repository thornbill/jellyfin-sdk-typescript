/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


import { ActivityLogEntry } from './activity-log-entry';
import { SessionMessageType } from './session-message-type';

/**
 * Activity log created message.
 * @export
 * @interface ActivityLogEntryMessage
 */
export interface ActivityLogEntryMessage {
    /**
     * Gets or sets the data.
     * @type {Array<ActivityLogEntry>}
     * @memberof ActivityLogEntryMessage
     */
    'Data'?: Array<ActivityLogEntry> | null;
    /**
     * Gets or sets the message id.
     * @type {string}
     * @memberof ActivityLogEntryMessage
     */
    'MessageId'?: string;
    /**
     * 
     * @type {SessionMessageType}
     * @memberof ActivityLogEntryMessage
     */
    'MessageType'?: SessionMessageType;
}
