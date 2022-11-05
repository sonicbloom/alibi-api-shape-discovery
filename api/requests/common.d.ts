
/**
 * Options available for sort order preference.
 */
type SortDirectionOptions = "desc" | "asc";

/**
 * Alibi's catalogs.
 */
type AlibiCatalogOptions = "ALIBI Music Library" | "ALIBI Trailer FX" | "ALIBI Game Loops";

/**
 * The common format of a request for paged content.
 */
interface PagedRequest
{
    /**
     * The number of items per page (max 100, default 20).
     */
    size?: number;
    /**
     * The page number (1 = first page and the default).
     */
    page?: number;
}
