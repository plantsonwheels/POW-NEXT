import { create } from "zustand"

export const useStore = create((set) => ({
  products: [],
  enquiries: [],
  loading: false,
  error: null,

  setProducts: (products) => set({ products }),
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p._id !== id),
    })),

  setEnquiries: (enquiries) => set({ enquiries }),
  addEnquiry: (enquiry) =>
    set((state) => ({
      enquiries: [...state.enquiries, enquiry],
    })),

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}))
