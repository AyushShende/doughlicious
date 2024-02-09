import { Cart, CartItem, Order, Size } from '@prisma/client';

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

export type SaveAddressFormState = {
  errors: {
    street?: string[];
    city?: string[];
    country?: string[];
    zip?: string[];
    _actionError?: string[];
  };
};

export type AddPizzaFormState = {
  errors: {
    title?: string[];
    description?: string[];
    price?: string[];
    image?: string[];
    _actionError?: string[];
  };
};

export type CartWithItems = Cart & { cartItems: CartItem[] };

export type PaidOrder = Order & {
  user: {
    name: string | null;
  };
  orderItems: {
    quantity: number;
    pizza: {
      title: string;
    };
  }[];
  address: {
    street: string;
    city: string;
  };
};

export type OrderWithAddress = Order & {
  address: {
    street: string;
    city: string;
  };
};

export type CartItemsWithPizza = CartItem & {
  pizza: {
    title: string;
    image: string;
    description: string;
    price: number;
  };
};
