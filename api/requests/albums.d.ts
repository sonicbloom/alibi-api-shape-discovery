

/**
 * Sort options for Album Search.
 */
type AlbumSearchSortOptions = "release_date" | "relevance" | "name.keyword";

/**
 * The shape of an Album Search request body.
 * 
 * **Endpoint:** `[POST] /albums/search`
 */
interface AlbumSearchRequest extends PagedRequest
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
 * 
 * **Endpoint:** `[GET] /albums/:id`
 */
type AlbumByIdRequest = PagedRequest;
