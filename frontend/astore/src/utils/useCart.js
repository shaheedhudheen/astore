import { create } from "zustand"
import { persist } from "zustand/middleware"

const useCart = create(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [item, ...state.items] })), //add an item
      removeItem: (_id) =>
        set((state) => ({
          items: state.items.filter((item) => item._id !== _id),
        })), // action to remove an item by id
      clearCart: () => set(() => ({ items: [] })), // action to clear the cart
    }),
    {
      name: "Cart",
    }
  )
)

export default useCart
// import { create } from "zustand"

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }))
