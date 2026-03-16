import { useState, useEffect } from "react";
import { sendRequestAxios } from "@/helpers/sendRequestAxios"; 
import { API_URL } from "@/configs/api";
import Search from "@/compositions/Search/Search";
import Sort from "@/compositions/Sort/Sort";
import Cards from "@/compositions/Cards/Cards";
import Pagination from "@/compositions/Pagination/Pagination";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState("popular");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await sendRequestAxios(API_URL);
                if (data?.data?.products) {
                    setProducts(data.data.products);
                }
            } catch (error) {
                console.error("API error:", error);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortType === "price-asc") return a.price - b.price;
        if (sortType === "price-desc") return b.price - a.price;
        return 0;
    });

    const productsPerPage = 12;

    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;

    const currentProducts = sortedProducts.slice(
        startIndex,
        startIndex + productsPerPage
    );

    return (
        <>
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <Sort
                products={currentProducts}
                totalProducts={filteredProducts.length}
                sortType={sortType}
                setSortType={setSortType}
            />

            <Cards
                products={currentProducts}
            />

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}

export default HomePage;