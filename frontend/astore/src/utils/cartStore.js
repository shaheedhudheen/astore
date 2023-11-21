import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

//! documentation example
// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }))

const cartStore = (set) => ({
  cartItems: [],
  
  add: (item) => set((state) => ({ cartItems: [item, ...state.cartItems] })),

  remove: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    }))
  },

  clear: () => set({ cartItems: [] }),
})

const useCartStore = create(
  devtools(
    persist(cartStore, {
      name: "cart",
    })
  )
)

export default useCartStore
