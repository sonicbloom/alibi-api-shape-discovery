
/**
 * Sort options for Playlist Search.
 */
type PlaylistSearchSortOptions = "release_date" | "relevance" | "name.keyword";

/**
 * The shape of a Playlist Search request body.
 */
interface PlaylistSearchRequest
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
     * The number of items per page (max 100, default 20).
     */
    size?: number;
    /**
     * The page number (1 = first page and the default).
     */
    page?: number;
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
 */
interface PlaylistByIdRequest
{
    /**
     * The number of tracks per page to include within the tracks array (max
     * 100, default 20).
     */
    size?: number;
    /**
     * The page number (1 = first page and the default).
     */
    page?: number;
}

/**
 * The shape of a request for public Playlists with an optional query.
 */
interface GetPublicPlaylistsRequest
{
    /**
     * Query phrase to match against playlist names only.
     */
    q?: string;
    /**
     * The number of items per page (max 100, default 20).
     */
    size?: number;
    /**
     * The page number (1 = first page and the default).
     */
    page?: number;
}
