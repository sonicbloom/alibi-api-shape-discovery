
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
 * The shape of an error response returned by the `/users` endpoint.
 */
type CreateUserErrorResponse = {
    /**
     * Describes one or more errors detected in the request field of the
     * CreateUserRequest body.
     */
    [K in keyof CreateUserRequest]?: Array<string>;
}

/**
 * The shape of a user when successfully created by the `/users` endpoint.
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
 * The shape of a user signin response as returned by the `/signin` endpoint.
 */
type UserSigninResponse = UserProfile;

/**
 * The shape of a user signout response as returned by the `/signout` endpoint.
 */
interface UserSignoutResponse
{
    /**
     * The HTTP Status code of the success (e.g. 200).
     */
    status: number;
    /**
     * A human readable message describing the outcome (e.g. "Signed out").
     */
    message: string;
}

/**
 * The shape of a user profile object as returned by the [GET] `/my/profile`
 * endpoint.
 */
type GetMyProfileResponse = UserProfile;

/**
 * The shape of a user profile object as returned by the [POST] `/my/profile`
 * endpoint.
 */
type UpdateMyProfileResponse = UserProfile
