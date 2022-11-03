
/**
 * The shared shape of the response object for search APIs. The type `T` will
 * be one related to "Track", "Album", or "Playlist" depending upon which
 * search request was issued.
 */
interface SearchResponse<T>
{
    /**
     * Number of milliseconds the server took to perform the search.
     */
    took: number;
    /**
     * Information about the number of results found for the given query.
     */
    count: {
        /**
         * The total number of responses available for the given query.
         */
        value: number;
        /**
         * Determine if `value` is accurate in terms of count. As the database
         * uses Block-Max WAND internally, there are tunable optimizations for
         * hit tracking. If this is `gte` then there are at least 10,000
         * matching tracks. If this is `eq` then `value` is the precise count
         * of matching tracks.
         * 
         * Precision / performance trade off for hit tracking.
         */
        relation: "eq" | "gte";
    }
    /**
     * An array of objects matching the the specified search request
     * parameters. If no results are found, this will be an empty array `[]`.
     */
    items: Array<T>;
    /**
     * An object whose shape defines the available filter-value combinations
     * available for subsequent searches.
     */
    facets: FacetObject;
}

/**
 * Each property of the object is the name of a filter that can be used to
 * narrow the search.
 */
type FacetObject = {
    [property: string]: FacetCounts;
}

/**
 * Each property of the object is the name of a filter option. The number is
 * the estimated count of results expected if the search is modified to include
 * the filter option.
 */
type FacetCounts = {
    [property: string]: number;
}

/**
 * The default shape of an error response.
 */
interface ErrorResponse
{
    /**
     * The HTTP Status code of the error (e.g. 401).
     */
    status: number;
    /**
     * A human readable message describing what went wrong. This message may
     * contain additional JSON-encoded strings internally.
     */
    error: string;
}
