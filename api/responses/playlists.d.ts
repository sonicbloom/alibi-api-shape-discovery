
/**
 * The common base shape for Playlist objects.
 */
interface PlaylistBase
{
    /**
     * The Magnetic ID of the playlist.
     */
    id: number;
    /**
     * The name of the playlist.
     */
    name: string;
    /**
     * Whether this playlist is public or not.
     */
    public: boolean;
    /**
     * The description of the playlist. When a description is not present, this
     * field will either be `null` or the empty string `""`.
     */
    description: string | null;
    /**
     * The token used for sharing the playlist.
     */
    share_token: string;
    /**
     * The URL of the image for this playlist.
     */
    image_url: string;
    /**
     * The number of tracks in the playlist.
     */
    num_tracks: number;
    /**
     * Whether this playlist is editable or not. An editable playlist is
     * generally a user's playlist.
     */
    editable: boolean;
}

/**
 * The shape of the response returned by the `/playlists/search` endpoint.
 */
interface PlaylistSearchResponse extends SearchResponse<PlaylistBase>
{
    // No additional properties.
}

/**
 * The shape of a Playlist returned by the `/playlists/:id` endpoint.
 */
interface PlaylistByIdResponse extends PlaylistBase
{
    /**
     * The number of tracks in the playlist.
     */
    tracks_count: number;
    /**
     * The list of tracks found in the playlist.
     */
    tracks: PlaylistRequestTrack;
}

/**
 * The shape of a Track object as returned within a direct Playlist request.
 */
interface PlaylistRequestTrack extends TrackBase
{
    /**
     * An array of Track objects, one for each of the track's alt-tracks
     * (including stems).
     */
    stems: Array<TrackBase>;
}

/**
 * The shape of the response returned by the `/playlists/public` endpoint.
 * @deprecated
 */
interface GetPublicPlaylistsResponse
{
    /**
     * The number of playlists available with the given query configuration.
     */
    count: number;
    /**
     * An array of playlists matching the the specified search request
     * parameters. If no results are found, this will be an empty array `[]`.
     */
    items: Array<PlaylistBase>;
}

/**
 * The shape of the response returned by the [GET] `/playlists` endpoint.
 */
interface GetUserPlaylistsResponse
{
    /**
     * The number of playlists.
     */
    count: number;
    /**
     * An array of user playlists.
     */
    items: Array<PlaylistBase>;
}

/**
 * The shape of the response returned by the [POST] `/playlists` endpoint.
 */
type CreateUserPlaylistResponse = PlaylistByIdResponse;
