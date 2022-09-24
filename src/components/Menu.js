export const Menu = ({ menu }) => {
    return (
        <div>
            <div className="grid grid-cols-3 mt-10 gap-10">
                {menu.map((menuItem) => {
                    const { id,title,img,price,desc } = menuItem
                    return (
                        <article key={id} className="bg-white drop-shadow-md">
                            <img src={img} className="" alt="image" />
                            <div className="info p-2 flex justify-between">
                                <h4 className="text-xl font-bold capitalize">{title}</h4>
                                <p className="text-red-500">${price}</p>
                            </div>
                            <div className="p-2 text-slate-500">
                                <p>{desc}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}