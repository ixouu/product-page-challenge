export type CartContextType = {
    UpdateCart : (qty:number) => void;
    productsInCart : number;
};

export interface CartContextInterface {
    productsInCart: number;
    UpdateCart : (qty:number) => void;
}
