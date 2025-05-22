import { Link } from "react-router";

export default function NOTFound() {
    return (
        <div className='h-screen flex flex-col justify-center items-center bg-gray-100'>
            <h1 className="text-3xl font-bold">Ooops!</h1>
            <p className="p-10">
                The requested page does not exist.
            </p>
            <Link to={"/"} className="text-blue-500 hover:underline">
                Back to Home
            </Link>
        </div>
    )
}
