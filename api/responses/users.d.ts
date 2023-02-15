
/**
 * Metadata related to the import process from Source Audio.
 */
interface UserImportMetadata
{
    /**
     * The time at which the user's profile information was imported in
     * ISO 8601 Extended Format.
     */
    imported_at: string;
    /**
     * The time at which the user's playlist information was imported in
     * ISO 8601 Extended Format.
     */
    playlist_imported_at?: string;
}

/**
 * The common base shape for User objects.
 */
interface UserCommon
{
    /**
     * The user's email address.
     */
    email: string;
    /**
     * The name of the user's company.
     */
    company: string | null;
    /**
     * The user's phone number.
     */
    phone_number: string | null;
    /**
     * The date at which the user was created as a string in ISO 8601 Extended
     * Format.
     */
    created_at: string;
    /**
     * The user's first name.
     */
    first_name: string | null;
    /**
     * The user's last name.
     */
    last_name: string | null;
    /**
     * The user's address.
     */
    address: string | null;
    /**
     * The user's city
     */
    city: string | null;
    /**
     * The user's region/state
     */
    region: string | null;
    /**
     *  The user's zip code
     */
    postal_code: string | null;
    /**
     * The user's Alpha‑2 country cod
     */
    country_code: string | null;
    /**
     * The user's company industry
     */
    company_industry: string | null;
    /**
     * The user's company title
     */
    company_position: string | null;
    /**
     * The type of projects the customer's company works on
     */
    company_projects: string | null;
    /**
     * The user's role within the Alibi Library. This will be either "user" or
     * "admin".
     */
    role: "user" | "admin";
    /**
     * An array containing the YouTube Channel IDs that are registered with
     * Alibi.
     */
    youtube_ids: Array<string>;
    /**
     * The user's music genres
     */
    music_genres_customer_facing: string | null;
    /**
     * The user's music sector 
     */
    music_sector_preference_customer_facing: string | null;
    /**
     * Metadata about this user. Users imported from source audio will have the date they were imported
     */
    metadata: UserImportMetadata | {};
    /**
     * Boolean indicating if the user has professional access
     */
    professional_access_enabled: boolean;
}

/**
 * The shape of an error response returned when attempting to create a user.
 * 
 * **Endpoint:** `[POST] /users`
 */
type CreateUserErrorResponse = {
    /**
     * Describes one or more errors detected in the request field of the
     * CreateUserRequest body.
     */
    [K in keyof CreateUserRequest]?: Array<string>;
}

/**
 * The shape of a success response when attempting to create a user.
 * 
 * **Endpoint:** `[POST] /users`
 */
interface CreateUserSuccessResponse extends UserCommon
{
    /**
     * The date at which the profile was last updated as a string in ISO 8601
     * Extended Format.
     */
    updated_at: string;
    /**
     * random hexadecimal strings to use as token when user asks to reset his password
     */
    reset_token: string | null;
    /**
     * The email address to which the user would like their account updated. This is
     * only non-`null` during the period where the user has yet to confirm the change.
     */
    reset_email: string | null;
    /**
     * The date and time at which the reset token expires, as a string in ISO 8601
     * Extended Format.
     */
    reset_token_expires_at: string | null;
    /**
     * Stripe's customer id
     */
    stripe_customer_id: string | null;
    /**
     * source audio id
     */
    source_audio_id: number | null;
    /**
     * The date and time at which the user was anonimized/deleted, as a string in ISO 8601
     * Extended Format.
     */
    destroyed_at: string | null;
    /**
    * The date and time at which the user requested to have a professional access account, as a string in ISO 8601
     * Extended Format.
     */
    professional_access_requested_at: string | null;

}

/**
 * The main shape of a user profile object.
 */
interface UserProfile extends UserCommon
{
    /**
     * customer's id 
     */
    id: number;
    /**
     * customer's first name and last name
     */
    full_name: string;
    /**
     * if the customer has an active subscription, the id of the subscription
     */
    active_subscription_id: number | null;
    /**
     * Stripe's customer id
     */
    stripe_customer_id: string | null;
    /**
     * boolean indicating if the user has requested to have professional access
     */
    pro_access: boolean;

}

/**
 * The shape of a user signin response.
 * 
 * **Endpoint:** `[POST] /signin`
 */
type UserSigninResponse = UserProfile;

/**
 * The shape of a user signout response.
 * 
 * **Endpoint:** `[POST] /signout`
 */
type UserSignoutResponse = SuccessResponse;

/**
 * The shape of a retrieved user profile object.
 * 
 * **Endpoint:** `[GET] /my/profile`
 */
type GetMyProfileResponse = UserProfile;

/**
 * The shape of an updated user profile object.
 * 
 * **Endpoint:** `[POST] /my/profile`
 */
type UpdateMyProfileResponse = UserProfile


/**
 * The shape of the retrieved set of the user's "likes".
 * 
 * **Endpoint:** `[GET] /my/likes`
 */
interface GetUserLikesResponse
{
    /**
     * The total number of tracks "liked" by the user.
     */
    count: number;
    /**
     * An array of "tracks" liked by the user. If no results are found, this
     * will be an empty array `[]`.
     */
    items: Array<TrackBase>;
}

/**
 * The shape of the retrieved set of the user's "dislikes".
 * 
 * **Endpoint:** `[GET] /my/dislikes`
 */
interface GetUserDislikesResponse
{
    /**
     * The total number of tracks "disliked" by the user.
     */
    count: number;
    /**
     * An array of "tracks" liked by the user. If no results are found, this
     * will be an empty array `[]`.
     */
    items: Array<TrackBase>;
}

/**
 * The shape of a saved search.
 */
interface SavedSearch
{
    /**
     * The ID of the saved search.
     */
    id: number;
    /**
     * The name of the saved search.
     */
    name: string;
    /**
     * The date and time at which the search was created as a string in ISO
     * 8601 Extended Format.
     */
    created_at: string;
    /**
     * The saved Track Search request.
     */
    search_params: TrackSearchRequest;
}

/**
 * The shape of the retrieved set of the user's saved searches.
 * 
 * **Endpoint:** `[GET] /my/searches`
 */
interface GetUserSearchesResponse
{
    /**
     * The total number of saved searches available.
     */
    count: number;
    /**
     * An array of the user's saved searches. If no results are found, this
     * will be an empty array `[]`.
     */
    items: Array<SavedSearch>;
}
