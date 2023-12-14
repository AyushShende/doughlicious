import { Cart, CartItem, Size } from '@prisma/client';

export type AddToCartParams = {
  quantity: number;
  pizzaSize: Size;
  pizzaId: string;
};

export type ActionState = {
  errors: {
    _actionError?: string[];
  };
};

export type CartWithItems = Cart & { cartItems: CartItem[] };
