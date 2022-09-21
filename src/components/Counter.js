import { useGlobalContext } from "../context/context"

export const Counter = () => {
    const { count, incrementCount } = useGlobalContext()

    return (
        <div className="flex justify-center mt-10">
            <div>
                <h3 className="text-3xl">The count is: {count}</h3>
                <button
                className="bg-slate-600 p-2 hover:bg-slate-500 text-white rounded-md"
                onClick={incrementCount}
                >
                    Increment Count
                </button>
            </div>
        </div>
    )
}