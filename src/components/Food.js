import { useState } from "react";
import items from "./data";
import { Menu } from "./Menu";
import { Categories } from "./category";

const allCategories = ["all", ...new Set(
    items.map((item) => item.category)
)]

export const Food = () => {
    const [menuItems, setMenuItems] = useState(items)
    const [category, setCategory] = useState(allCategories)

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items)
            return;
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <div className="px-20">
            <Categories filterItems={filterItems} categories={category} />
            <Menu menu={menuItems} />
        </div>
    )
}