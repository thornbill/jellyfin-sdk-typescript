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


import { PlaylistUserPermissions } from './playlist-user-permissions';

/**
 * Update existing playlist dto. Fields set to `null` will not be updated and keep their current values.
 * @export
 * @interface UpdatePlaylistDto
 */
export interface UpdatePlaylistDto {
    /**
     * Gets or sets the name of the new playlist.
     * @type {string}
     * @memberof UpdatePlaylistDto
     */
    'Name'?: string | null;
    /**
     * Gets or sets item ids of the playlist.
     * @type {Array<string>}
     * @memberof UpdatePlaylistDto
     */
    'Ids'?: Array<string> | null;
    /**
     * Gets or sets the playlist users.
     * @type {Array<PlaylistUserPermissions>}
     * @memberof UpdatePlaylistDto
     */
    'Users'?: Array<PlaylistUserPermissions> | null;
    /**
     * Gets or sets a value indicating whether the playlist is public.
     * @type {boolean}
     * @memberof UpdatePlaylistDto
     */
    'IsPublic'?: boolean | null;
}
