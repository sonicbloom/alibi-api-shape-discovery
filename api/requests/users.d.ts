
/**
 * The shape of a User creation request body.
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
 * The shape of a user profile update request (the [POST] `/my/profile`
 * endpoint).
 */
interface UserProfileUpdateRequest
{
    // <-- INSERT FIELDS HERE -->
}

/**
 * The shape of a user email change request (the [POST] `/my/email` endpoint).
 */
interface UserEmailChangeRequest
{
    // <-- INSERT FIELDS HERE -->
}
