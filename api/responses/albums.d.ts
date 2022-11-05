
/**
 * The common base shape for Album objects.
 */
interface AlbumBase
{
    /**
     * Album ID that uniquely identifies this album.
     */
    id: number;
    /**
     * Name of the album.
     */
    name: string;
    /**
     * Human-readable description of the album.
     */
    description: string;
    /**
     * The genre of the album.
     */
    genre: Array<string>;
    /**
     * The artist of the album.
     */
    artist: string;
    /**
     * The URL at which the album image (art) is found.
     */
    image_url: string;
    /**
     * The release date as a string in ISO 8601 Extended Format.
     */
    release_date: string;
    /**
     * The number of master tracks in the album.
     */
    tracks_count: number;
    /**
     * The total number of tracks (including alts and stems) in the album.
     */
    all_tracks_count: number;
    /**
     * Catalog the album is found within.
     * 
     * Mostly matches with values in the `catalogs` facet. The exception is
     * "ALIBI Music", which maps to "ALIBI Music Library". This is a legacy
     * inconsistency with the data.
     */
    catalog: string;
}

/**
 * The shape of an Album search response.
 * 
 * **Endpoint:** `[POST] /albums/search`
 */
interface AlbumSearchResponse extends SearchResponse<AlbumBase>
{
    // No additional properties.
}


/**
 * The shape of an Album listing response.
 * 
 * **Endpoint:** `[GET] /albums/:id`
 */
interface AlbumByIdResponse extends AlbumBase
{
    /**
     * An array of Track Objects, one each for the Album's master tracks.
     */
    tracks: Array<TrackBase>;
}
