
/**
 * Sort options for Playlist Search.
 */
type PlaylistSearchSortOptions = "release_date" | "relevance" | "name.keyword";

/**
 * The shape of a Playlist Search request body.
 * 
 * **Endpoint:** `[POST] /playlists/search`
 */
interface PlaylistSearchRequest extends PagedRequest
{
    /**
     * Full text query phrase to match against playlists. This targets title,
     * descriptions, and track metadata.
     */
    q?: "";
    /**
     * A facetted parameter. The catalog(s) to search. Options include:
     * - "ALIBI Music Library"
     * - "ALIBI Trailer FX"
     * - "ALIBI Game Loops"
     */
    catalogs?: Array<AlibiCatalogOptions>;
    /**
     * A facetted parameter. The playlist category(-ies) to search.
     */
    categories?: Array<string>;
    /**
     * A facetted parameter. The playlist subcategory(-ies) to search.
     */
    sub_categories?: Array<string>;
    /**
     * The field to order results by. Options include:
     * - "release_date"
     * - "relevance"
     * - "name.keyword" (Title)
     */
    order?: PlaylistSearchSortOptions;
    /**
     * The direction to order by. Options include: "asc" for ascending order
     * and "desc" for descending order.
     */
    order_dir?: SortDirectionOptions;
}

/**
 * The shape of a request for a Playlist with a specific ID.
 * 
 * **Endpoint:** `[GET] /playlists/:id`
 */
type PlaylistByIdRequest = PagedRequest;

/**
 * The shape of a request for public Playlists with an optional query.
 * 
 * **Endpoint:** `[GET] /playlists/public`
 * 
 * @deprecated
 */
interface GetPublicPlaylistsRequest extends PagedRequest
{
    /**
     * Query phrase to match against playlist names only.
     */
    q?: string;
}

/**
 * The shape of a request for user Playlists.
 * 
 * **Endpoint:** `[GET] /playlists`
 */
type GetUserPlaylistsRequest = PagedRequest;

/**
 * The shape of a user Playlist creation request.
 * 
 * **Endpoint:** `[POST] /playlists`
 */
interface CreateUserPlaylistRequest
{
    // <-- REQUIRED FIELDS -->

    /**
     * The name of the playlist.
     */
    name: string;

    // <-- OPTIONAL FIELDS -->

    /**
     * A description of the playlist.
     */
    description?: string;

    // <-- INSERT OTHER OPTIONAL FIELDS HERE -->
}

/**
 * The shape of a user Playlist update request.
 * 
 * **Endpoint:** `[PATCH] /playlists/:id`
 */
type UpdateUserPlaylistRequest = Partial<CreateUserPlaylistRequest>;

/**
 * The shape of a request to clone a specific user Playlist.
 * 
 * **Endpoint:** `[POST] /playlists/:id/clone`
 */
interface CloneUserPlaylistRequest
{
    /**
     * The name to apply to the cloned playlist. Must be unique for the user.
     */
    name: string;

    // <-- INSERT OTHER OPTIONAL FIELDS HERE -->
}


