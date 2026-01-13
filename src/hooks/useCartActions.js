import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

export function useCartActions() {
    const dispatch = useDispatch();

    const handleAddToCart = (cardData, quantity = 1) => {
        if (!cardData) return;
        if (cardData.stock <= 0) return;
        if (quantity <= 0) return;

        dispatch( addToCart({ id: cardData.id, name: cardData.name, price: cardData.price, qty: quantity, }) );
    };

    return { handleAddToCart };
}
