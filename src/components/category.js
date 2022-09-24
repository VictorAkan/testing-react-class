export const Categories = ({ filterItems,categories }) => {
    return (
        <div className="flex justify-center">
            <div className="mt-16 flex space-x-20">
                {categories.map((category, index) => (
                    <button
                    onClick={() => filterItems(category)}
                    className="p-3 capitalize bg-red-400 text-white hover:bg-red-300 rounded-md drop-shadow-md"
                    key={index}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}