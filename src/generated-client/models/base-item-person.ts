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


import { BaseItemPersonImageBlurHashes } from './base-item-person-image-blur-hashes';
import { PersonKind } from './person-kind';

/**
 * This is used by the api to get information about a Person within a BaseItem.
 * @export
 * @interface BaseItemPerson
 */
export interface BaseItemPerson {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof BaseItemPerson
     */
    'Name'?: string | null;
    /**
     * Gets or sets the identifier.
     * @type {string}
     * @memberof BaseItemPerson
     */
    'Id'?: string;
    /**
     * Gets or sets the role.
     * @type {string}
     * @memberof BaseItemPerson
     */
    'Role'?: string | null;
    /**
     * 
     * @type {PersonKind}
     * @memberof BaseItemPerson
     */
    'Type'?: PersonKind;
    /**
     * Gets or sets the primary image tag.
     * @type {string}
     * @memberof BaseItemPerson
     */
    'PrimaryImageTag'?: string | null;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashes}
     * @memberof BaseItemPerson
     */
    'ImageBlurHashes'?: BaseItemPersonImageBlurHashes | null;
}

