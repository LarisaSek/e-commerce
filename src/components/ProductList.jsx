import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    if (!products || products.length === 0) {
        return <p className="error-message">No products available.</p>;
    }

    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
