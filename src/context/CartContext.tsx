import { createContext, useContext, useState } from "react";
import { CartContextInterface } from "../@types/cart";

export const ContextProvider = createContext<CartContextInterface | null>(null);

export const CartContext = ({ children }: any) => {
	const [productsInCart, setProductsInCart] = useState(0);

	// allow to update product in cart state
	const UpdateCart = (qty: number) => {
		setProductsInCart((prevState) => prevState + qty);
	};

	return (
		<ContextProvider.Provider value={{ productsInCart, UpdateCart }}>
			{children}
		</ContextProvider.Provider>
	);
};

export const useCartContext: () => CartContextInterface | null = () =>
	useContext(ContextProvider);
