
/**
 * The shape of a license.
 */
interface License
{
    /**
     * The ID of the license.
     */
    id: number;
    /**
     * The name of the license.
     */
    name: string;
    /**
     * The price of the license in cents (USD).
     */
    price_cents: number;
    /**
     * The description of the license.
     */
    description: string;
    /**
     * The license's full name.
     */
    full_name: string;
    /**
     * A list of license categories that apply to the license.
     */
    categories: Array<string>;
    /**
     * A list of Alibi's catalogs for which the license applies.
     */
    catalogs: Array<AlibiCatalogOptions>;
    /**
     * The SKU (Stock Keeping Unit) of the license.
     */
    sku: string;
}

/**
 * The shape of a subscription.
 */
interface Subscription
{
    /**
     * The ID of the subscription.
     */
    id: number;
    /**
     * The name of the subscription.
     */
    name: string;
    /**
     * The price of the subscription in cents (USD).
     */
    price_cents: number;
    /**
     * The description of the subscription.
     */
    description: string;
    /**
     * The interval at which the subscription cost will be charged to the user
     * (monthly or yearly).
     */
    billing_interval: "month" | "year";
    /**
     * The SKU (Stock Keeping Unit) of the subscription.
     */
    sku: string;
}

/**
 * The shape of a Cart.
 */
interface Cart
{
    /**
     * The ID of the cart.
     */
    id: number;
    /**
     * The state of the cart.
     */
    state: string;
    /**
     * The price of the item in cents (USD).
     */
    price_cents: number;
    /**
     * The total amount of discount applied to the cart in cents (USD).
     */
    discount_cents: number;
    /**
     * The subtotal cost of all items in cents (USD), less any discounts.
     */
    subtotal_cents: number;
    /**
     * 
     */
    stripe_pk: string;
    /**
     * A list of items in the cart. May be empty (`[]`).
     */
    items: Array<CartItem>;
}

/**
 * The shape of an Item in a Cart. Represents a pairing of Track and License.
 */
interface CartItem
{
    /**
     * The ID of the item within the cart.
     */
    id: number;
    /**
     * 
     */
    metadata: {} | unknown;
    /**
     * The name of the project to which the item is associated, if provided
     * (`null` if not).
     */
    project_name: string | null;
    /**
     * The Track associated with this cart item.
     */
    track: TrackBase;
    /**
     * The license under which the Track will be "purchased".
     */
    license: License;
}

/**
 * The shape of a license listing response.
 * 
 * **Endpoint:** `[GET] /shop/licenses`
 */
type GetAllLicensesResponse = Array<License>;

/**
 * The shape of a subscription listing response.
 * 
 * **Endpoint:** `[GET] /shop/subscriptions`
 */
type GetAllSubscriptionsResponse = Array<Subscription>;

/**
 * The shape of the response to retrieve the user's shopping cart.
 * 
 * **Endpoint:** `[GET] /shop/cart`
 */
type GetUserShoppingCartResponse = Cart;

/**
 * The shape of the response to subscribe to a subscription.
 * 
 * **Endpoint:** `[POST] /shop/subscribe`
 */
interface SubscribeResponse
{
    /**
     * 
     */
    client_secret: string;
}

/**
 * The shape of a checkout response.
 * 
 * **Endpoint:** `[GET] /shop/checkout`
 */
interface CheckoutResponse
{
    /**
     * The ID of the Cart/Order.
     */
    order_id: number;
    /**
     * 
     */
    stripe_pk: string;
    /**
     * 
     */
    client_secret: string;
}
