
/**
 * The common base shape for User objects.
 */
interface UserBase
{
    /**
     * The user's first name.
     */
    first_name: string;
    /**
     * The user's last name.
     */
    last_name: string;
    /**
     * The user's address.
     */
    address: string;
    /**
     * The user's city.
     */
    city: string;
    /**
     * The user's region/state.
     */
    region: string;
    /**
     * The user's zip code.
     */
    postal_code: string;
    /**
     * The user's phone number. No format requirements.
     */
    phone_number: string;
    /**
     * The user's Alpha‑2 country code.
     */
    country_code: string;
    /**
     * The name of the user's company.
     */
    company: string;
    /**
     * The user's company industry.
     */
    company_industry: string;
    /**
     * The user's company title.
     */
    company_position: string;
    /**
     * The type of projects the customer's company works on.
     */
    company_projects: string;
    /**
     * The YouTube channels the user has added to their YouTube allowlist.
     */
    youtube_ids: Array<string>;
    /**
     * The user's music genres.
     */
    music_genres_customer_facing: string;
    /**
     * The user's music sector.
     */
    music_sector_preference_customer_facing: string;
}

/**
 * Utility type to add `null` as a valid type for properties of type `T`.
 */
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
}
