import React from 'react';
import toast from 'react-hot-toast';

const AddProducts = () => {



    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const stock = form.stock.value;

        const feature1 = form.feature1.value;
        const feature2 = form.feature2.value;
        const feature3 = form.feature3.value;
        const feature4 = form.feature4.value;
        const feature5 = form.feature5.value;
        const feature6 = form.feature6.value;
        const feature = [feature1, feature2, feature3, feature4, feature5, feature6];
        const product = {
            productName,
            category,
            brand,
            price,
            photoURL,
            stock,
            feature
        }
        fetch("http://localhost:5000/addproduct", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Product Added Successfully");
                    form.reset();
                }
            })
    }

    return (
        <div className="max-w-2xl mx-auto bg-yellow-400 p-16 pt-8">
            <h1 className='text-center font-bold text-4xl mb-4'>Add Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="productName" className="block mb-2 text-sm  text-gray-800 font-bold">Product Name</label>
                        <input type="text" name="productName" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Castle Oil" required />
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm  text-gray-800 font-bold">Product Category</label>
                        <input type="text" name="category" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gear Box" required />
                    </div>
                    <div>
                        <label htmlFor="brand" className="block mb-2 text-sm  text-gray-800 font-bold">Brand</label>
                        <input type="text" name="brand" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tesla" required />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm  text-gray-800 font-bold">Price</label>
                        <input type="tel" name="price" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$199" required />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block mb-2 text-sm  text-gray-800 font-bold">Photo URL</label>
                        <input type="url" name="photoURL" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="img.jpg" required />
                    </div>
                    <div>
                        <label htmlFor="stock" className="block mb-2 text-sm  text-gray-800 font-bold">Stock</label>
                        <input type="number" name="stock" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='50' required />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="feature" className="block mb-2 text-sm  text-gray-800 font-bold">Feature</label>
                    <div className='grid grid-cols-2 gap-2'>
                        <input type="text" name='feature1' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        <input type="text" name='feature2' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        <input type="text" name='feature3' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        <input type="text" name='feature4' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        <input type="text" name='feature5' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        <input type="text" name='feature6' className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                    </div>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        <label htmlFor="password" className="ml-2 text-sm  text-gray-800 font-bold">Every Information Are Given</label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-sm hover:bg-gray-800 text-sm text-gray-800 hover:text-gray-400 rounded-none">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProducts;