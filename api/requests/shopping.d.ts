
/**
 * The shape of a request to add an item to the user's cart.
 * 
 * **Endpoint:** `[POST] /shop/cart`
 */
interface AddItemToCartRequest
{
    /**
     * The ID of the Track to add to the cart.
     */
    track_id: number;
    /**
     * The ID of the License by which the Track will be licensed.
     */
    license_id: number;
    /**
     * The name of the project to which this item will apply.
     */
    project_name: string;
}

/**
 * The shape of a request to subscribe to a subscription.
 * 
 * **Endpoint:** `[POST] /shop/subscribe`
 */
interface SubscribeRequest
{
    /**
     * The ID of the subscription to which to subscribe.
     */
    subscription_id: number;
}


/**
 * The shape of a request to license a track (under the current user's subscription) 
 * 
 * **Endpoint:** `[POST] /shop/subscription/license`
 */
interface LicenseTrackRequest
{
    /**
     * The ID of the Track to add to the cart.
     */
    track_id: number;
    /**
     * The name of the project to which this item will apply.
     */
    project_name: string;
}