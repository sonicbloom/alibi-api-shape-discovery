
/**
 * The shape of a User creation request body.
 * 
 * **Endpoint:** `[POST] /users`
 */
interface CreateUserRequest
{
    // <-- REQUIRED FIELDS -->

    /**
     * The user's email address.
     */
    email: string;
    /**
     * The user's password. Requires at least one letter and at least one
     * number and must be at least 8 characters long.
     */
    password: string;

    // <-- OPTIONAL FIELDS -->

    /**
     * Must match the password or will cause an error due to mismatch with the
     * `password` field.
     */
    password_confirmation?: string;
    /**
     * The user's company.
     */
    company?: string;
    /**
     * The user's phone number. No format requirements.
     */
    phone_number?: string;
    /**
     * The user's first name.
     */
    first_name?: string;
    /**
     * The user's last name.
     */
    last_name?: string;
    /**
     * 
     */
    address?: string;
    /**
     * 
     */
    city?: string;
    /**
     * 
     */
    region?: string;
    /**
     * 
     */
    postal_code?: number | string;
    /**
     * 
     */
    country_code?: string;
    /**
     * 
     */
    company_industry?: string;
    /**
     * 
     */
    company_position?: string;
    /**
     * 
     */
    company_projects?: string;

    // <-- INSERT OTHER OPTIONAL FIELDS HERE -->
}

/**
 * The shape of a user sign in request.
 * 
 * **Endpoint:** `[POST] /signin`
 */
interface SignInRequest
{
    /**
     * The user's email.
     */
    email: string;
    /**
     * The user's password.
     */
    password: string;
}

/**
 * The shape of a user profile update request.
 * 
 * **Endpoint:** `[POST] /my/profile`
 */
interface UserProfileUpdateRequest
{
    // <-- INSERT FIELDS HERE -->
}

/**
 * The shape of a user email change request.
 * 
 * **Endpoint:** `[POST] /my/email`
 */
interface UserEmailChangeRequest
{
    // <-- INSERT FIELDS HERE -->
}

//-----------------------------
// USER SENTIMENT
//-----------------------------

/**
 * The shape of a user sentiment update request (the [POST] `/my/sentiment` endpoint).
 * 
 * **Endpoint:** `[POST] /my/sentiment`
 */
interface UserSentimentUpdateRequest
{
    /**
     * The ID of the track for which to log sentiment.
     */
    track_id: number;
    /**
     * The sentiment to log. Options available are:
     * - `-1`: Dislike
     * - `0`: Clear/Reset
     * - `1`: Like/Favorite
     */
    sentiment: -1 | 0 | 1;
}

/**
 * The shape of a request for tracks liked by the user.
 * 
 * **Endpoint:** `[GET] /my/likes`
 */
type GetUserLikesRequest = PagedRequest;

/**
 * The shape of a request for tracks disliked by the user.
 * 
 * **Endpoint:** `[GET] /my/dislikes`
 */
type GetUserDislikesRequest = PagedRequest;

//-----------------------------
// USER PLAYS
//-----------------------------

/**
 * The shape of a request for tracks played by the user. Tracks can appear
 * multiple times within the `items` array (possibly across pages).
 * 
 * **Endpoint:** `[GET] /my/plays`
 */
type GetUserPlaysRequest = PagedRequest;

/**
 * The shape of a request to log playback of a track by the user.
 * 
 * **Endpoint:** `[POST] /my/plays`
 */
interface LogUserTrackPlaybackRequest
{
    /**
     * The ID of the track for which to log a user "play".
     */
    track_id: number;
}

//-----------------------------
// USER SEARCHES
//-----------------------------

/**
 * The shape of a request for the user's saved searches.
 * 
 * **Endpoint:** `[GET] /my/searches`
 */
type GetUserSearchesRequest = PagedRequest;

/**
 * The shape of a request to save a search for the user.
 * 
 * **Endpoint:** `[POST] /my/searches`
 */
interface SaveUserSearchRequest
{
    /**
     * The name to assign to the saved search. Does **not** have to be unique.
     */
    name: string;
    /**
     * The shape of the Track Search request to save as a saved search.
     */
    search_params: TrackSearchRequest;
}

//-----------------------------
// USER COMMERCE
//-----------------------------

/**
 * The shape of a request for a list of the user's downloaded Tracks.
 * 
 * **Endpoint:** `[GET] /my/downloads`
 */
type GetUserDownloadsRequest = PagedRequest;

/**
 * The shape of a request for a list of the user's Orders.
 * 
 * **Endpoint:** `[GET] /my/orders`
 */
type GetUserOrdersRequest = PagedRequest;


