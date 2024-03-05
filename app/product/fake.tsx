
    import React, { useEffect, useState } from 'react';
    import Link from 'next/link';

    function View() {
        const [products, setProducts] = useState<any[]>([]);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState<any>(null);

        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await fetch('https://fakestoreapi.com/products');
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    const data = await response.json();
                    setProducts(data);
                    setIsLoading(false);
                } catch (error: any) {
                    setError(error.message);
                    setIsLoading(false);
                }
            };

            fetchProducts();
        }, []);

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
                {products.map((product: any) => (
                    
                    <div key={ product.id } className="relative group overflow-hidden rounded-lg">
                        <Link className="absolute inset-0 z-10" href="#">
                            <span className="sr-only">View</span>
                        </Link>
                        <img
                            alt={ product.title }
                            className="object-cover w-full h-60"
                            height={ 300 }
                            src={ product.image }
                            style={ {
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            } }
                            width={ 400 }
                        />
                        <div className="bg-white p-4 dark:bg-gray-950">
                            <h3 className="font-semibold text-lg md:text-xl">{ product.title }</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{ product.category }</p>
                            <h4 className="font-semibold text-base md:text-lg">${ product.price }</h4>
                        </div>
                    </div>  
                )) }
                
            </section>
        );
    }
export default View

