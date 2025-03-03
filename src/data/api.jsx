const API_URL = "https://fakestoreapi.com/products";

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch products.");
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch product with ID ${id}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};
