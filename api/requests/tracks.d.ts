
/**
 * Sort options for Track Search.
 */
type TrackSearchSortOptions = "album_title.keyword" | "bpm" | "duration" | "release_date" | "relevance" | "title.keyword";

/**
 * The shape of a Track Search request body.
 */
interface TrackSearchRequest
{
    /**
     * The query string to match tracks on. This targets all text in the track,
     * along with description, genre, and album title. Phrase matching is
     * enabled.
     */
    q?: string;
    /**
     * A search input to not match on. If documents match this text, they are
     * omitted form the results.
     */
    nq?: string;
    /** A lyrics query which only matches on track lyrics. */
    lq?: string;
    /**
     * A BPM range (inclusive) within which to restrict results. Unbounded on
     * either end with `"*"`. Defaults to `["*", "*"]`.
     */
    bpm?: [min: number | "*", max: number | "*"];
    /**
     * The catalog(s) to search. Options include "ALIBI Music Library", "ALIBI
     * Trailer FX", and "ALIBI Game Loops".
     */
    catalogs?: Array<AlibiCatalogOptions>;
    /**
     * A facetted parameter. The track category(-ies) to search.
     */
    categories?: Array<string>;
    /** 
     * A facetted parameter. The track era(s) to search.
     */
    eras?: Array<string>;
    /**
     * A facetted parameter. The track genre(s) to search.
     */
    genres?: Array<string>;
    /**
     * A facetted parameter. The track instrument(s) to search.
     */
    instruments?: Array<string>;
    /**
     * A facetted parameter. The track key(s) to search.
     */
    keys?: Array<string>;
    /**
     * The Alibi label(s) to search. This data is included in the
     * `source_audio_meta` object's `Label` field. The `source_audio_meta`
     * field is only included when accessing a track directly with the
     * `/tracks/:id` endpoint.
     */
    labels?: Array<string>;
    /**
     * A facetted parameter. Whether desired tracks contain lyrics or not.
     * Expects only a single value: `true` or `false`. Do not specify the
     * parameter to indicate lack of preference.
     */
    lyrics?: [true] | [false];
    /**
     * A facetted parameter. The "cutdown lenth(s)" to include in the search.
     */
    mix_lengths?: Array<string>;
    /**
     * A facetted parameter. Omitting this will result in all non-stem mixes
     * matching. To include all possible mixes including stems, specify the
     * special "Any" option. Some mix types are ranked higher than others. By
     * default master tracks are rated highest.
     */
    mixes?: Array<string>;
    /**
     * A facetted parameter. The track mood(s) to search.
     */
    moods?: Array<string>;
    /**
     * Search by release date range, unbounded on either end with `"*"`, inclusive. Date strings are flexible:
     * - https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html#built-in-date-formats
     * - https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#date-math
     */
    release_date?: Array<string>;
    /**
     * A facetted parameter. The track style(s) to search.
     */
    styles?: Array<string>;
    /**
     * A facetted parameter. The track subcategory(-ies) to search.
     */
    sub_categories?: Array<string>;
    /**
     * A facetted parameter. The track tempo(s) to search.
     */
    tempos?: Array<string>;
    /**
     * A facetted parameter. Whether desired tracks contain vocals or not.
     * Expects only a single value: `true` or `false`. Do not specify the
     * parameter to indicate lack of preference.
     */
    vocals?: [true] | [false];
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
     * - "album_title.keyword"
     * - "bpm"
     * - "duration"
     * - "release_date"
     * - "relevance"
     * - "title.keyword"
     */
    order?: TrackSearchSortOptions;
    /**
     * The direction to order by. Options include: "asc" for ascending order
     * and "desc" for descending order.
     */
    order_dir?: SortDirectionOptions;
}
