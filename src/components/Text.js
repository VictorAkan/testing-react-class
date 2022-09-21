import { useGlobalContext } from "../context/context"

export const Text = () => {
    const { text,updateText } = useGlobalContext()

    return (
        <div className="flex justify-center mt-20">
            <div>
                <input type="text" 
                    onChange={updateText}
                    className="bg-slate-100 p-3 w-96 focus:outline-none focus:ring focus-ring-sky-400"
                />
                <div className="bg-white mt-20 drop-shadow-md p-3 rounded-md">
                    <h5>{text}</h5>
                </div>
            </div>
        </div>
    )
}