import { Cart } from 'src/app/models/cart.model';
import { CartItem } from 'src/app/models/cart-item.model';

export class CartUtil {
    private static cartKey = "petshop-cart";

    /**
     * Recupera os itens do carrinho de compra
     */
    public static obter(): Cart {
        const cart = localStorage.getItem(this.cartKey);

        if (!cart) 
            return new Cart();

        return JSON.parse(cart);
    }

    /**
     * adiciona um item ao carrinho de compra
     * @param item 
     */
    public static adicionar(item: CartItem) {
        let cart = this.obter();

        cart.items.push(item);

        localStorage.setItem(this.cartKey, JSON.stringify(cart));
    }
}