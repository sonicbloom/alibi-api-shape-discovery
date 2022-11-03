

/**
 * Sort options for Album Search.
 */
type AlbumSearchSortOptions = "release_date" | "relevance" | "name.keyword";

/**
 * The shape of an Album Search request body.
 */
interface AlbumSearchRequest
{
    /**
     * Full text query phrase to match against albums. This targets title,
     * descriptions, and track metadata.
     */
    q?: string;
    /**
     * A facetted parameter. The catalog(s) to search. Options include:
     * - "ALIBI Music Library"
     * - "ALIBI Trailer FX"
     * - "ALIBI Game Loops"
     */
    catalogs?: Array<AlibiCatalogOptions>;
    /**
     * A facetted parameter. The album category(-ies) to search.
     */
    categories?: Array<string>;
    /**
     * A facetted parameter. The album genre(s) to search.
     */
    genres?: Array<string>;
    /**
     * A facetted parameter. The album subcategory(-ies) to search.
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
     * How to sort the results. Options include:
     * - "release_date"
     * - "relevance"
     * - "name.keyword"
     */
    order?: AlbumSearchSortOptions;
    /**
     * The direction to order by. Options include: "asc" for ascending order
     * and "desc" for descending order.
     */
    order_dir?: SortDirectionOptions;
}

/**
 * The shape of a request for an Album with a specific ID.
 */
interface AlbumByIdRequest
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
