
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
     * The user's company.
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
     * 
     */
    address: string | null;
    /**
     * 
     */
    city: string | null;
    /**
     * 
     */
    region: string | null;
    /**
     * 
     */
    postal_code: string | null;
    /**
     * 
     */
    country_code: string | null;
    /**
     * 
     */
    company_industry: string | null;
    /**
     * 
     */
    company_position: string | null;
    /**
     * 
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
     * 
     */
    music_genres_customer_facing: unknown | null;
    /**
     * 
     */
    music_sector_preference_customer_facing: unknown | null;
    /**
     * 
     */
    metadata: unknown | {};
    /**
     * 
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
     * 
     */
    reset_token: unknown | null;
    /**
     * 
     */
    reset_email: unknown | null;
    /**
     * 
     */
    reset_token_expires_at: unknown | null;
    /**
     * 
     */
    stripe_customer_id: unknown | null;
    /**
     * 
     */
    source_audio_id: unknown | null;
    /**
     * 
     */
    destroyed_at: unknown | null;
    /**
     * 
     */
    professional_access_requested_at: unknown | null;

    // <-- INSERT OTHER OPTIONAL FIELDS HERE -->
}

/**
 * The main shape of a user profile object.
 */
interface UserProfile extends UserCommon
{
    /**
     * 
     */
    id: number;
    /**
     * 
     */
    full_name: string;
    /**
     * 
     */
    active_subscription_id: unknown | null;
    /**
     * 
     */
    stripe_customer_id: unknown | null;
    /**
     * 
     */
    pro_access: boolean;

    // <-- INSERT OTHER OPTIONAL FIELDS HERE -->
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
