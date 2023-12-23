
/**
 * The common base shape for Track objects.
 */
interface TrackBase
{
    /**
     * Track ID that uniquely identifies this track within the database.
     */
    id: number;
    /**
     * Title of the track.
     */
    title: string;
    /**
     * Human-readable description of the track.
     */
    description: string;
    /**
     * The genre of the track.
     */
    genre: string;
    /**
     * The speed of the track in Beats Per Minute.
     */
    bpm: number;
    /**
     * Duration of the track in seconds.
     */
    duration: number;
    /**
     * An aggregate of all users sentiment (positive means it's generally
     * liked, negative means it's not liked).
     */
    population_sentiment: number;
    /**
     * The release date as a string in ISO 8601 Extended Format.
     */
    release_date: string;
    /**
     * The mood(s) of the track.
     */
    moods: Array<string>;
    /**
     * Whether this track is an Alt track.
     */
    alt: boolean;
    /**
     * Whether this stem is a Stem track.
     */
    stem: boolean;
    /**
     * SourceAudio ID that uniquely identifies this track.
     */
    source_audio_id: number;
    /**
     * Comma-separated list of mix types that define the track.
     */
    mix: string;
    /**
     * The Mix Length of the track.
     */
    mix_length: string;
    /**
     * The musical Key of the track.
     */
    key: string | null;
    /**
     * Comma-separated list of categories of which this track is a member.
     * Possibly the empty string.
     */
    category: string;
    /**
     * Comma-separated list of subcategories of which this track is a member.
     * Possibly the empty string.
     */
    sub_category: string;
    /**
     * The catalog within which this track is found.
     */
    catalog: string;
    /**
     * The human readable name of the track "version".
     */
    version_name: string;
    /**
     * A string ID that uniquely identifies this track within the database.
     */
    slug: string;
    /**
     * The ID of the master track for this track. If this track is itself a
     * master track, then `null`.
     */
    master_track_id: null | number;
    /**
     * The URL at which the track image is found.
     */
    image_url: string;
    /**
     * The name of the album of which this track is a member.
     */
    album_name: string;
    /**
     * The ID of the album of which this track is a member.
     */
    album_id: number;
    /**
     * The URL at which a streamable version of the audio track is found.
     */
    stream_url: string;
    /**
     * The URL at which a waveform representation of the audio track is found.
     */
    waveform_url: string;
    /**
     * The URL at which the WAV version of the audio track may be accessed for
     * download.
     */
    download_url: string;
    /**
     * Has the user liked or disliked this track?
     *  - `1` = like
     *  - `0` = neutral
     *  - `-1` = dislike
     */
    user_sentiment: -1 | 0 | 1;
    /**
     * ID of any user playlists that contain this track.
     */
    user_playlists: Array<number>;
}

/**
 * The shape of a Track search response.
 * 
 * **Endpoint:** `[POST] /tracks/search`
 */
interface TrackSearchResponse extends TrackBase
{
    /**
     * An array of track IDs for variants that matched the search query less
     * well than this track.
     */
    inner_hits: Array<number>;
}

/**
 * The shape of the response provided when requesting a Track by ID.
 * 
 * **Endpoint:** `[GET] /tracks/:id`
 */
interface TrackByIdResponse extends TrackBase
{
    /**
     * An array of Track objects, one for each of the track's alt-tracks
     * (including stems). If this track is not a master track then the array
     * will be empty.
     */
    stems: Array<TrackBase>;
    /**
     * The original SourceAudio metadata. This property is not included in
     * TrackByIdResponse objects found in the `master_track` property. In other
     * words, this property is only available at the top level
     * TrackByIdResponse instance.
     */
    source_audio_meta?: object;
    /**
     * The full TrackByIdResponse Object of the master track for this track. It
     * is only included if the requested track is _not_ a master track.
     */
    master_track?: TrackByIdResponse;
}
