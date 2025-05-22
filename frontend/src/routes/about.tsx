import { Link, useLoaderData } from "react-router";


export default function About() {
    const data = useLoaderData();

    return (
        <div className='h-screen flex flex-col justify-center items-center bg-gray-100'>
            <h1 className="text-3xl font-bold">About</h1>
            <p className="p-10">
                Welcome to the about page! This is a simple application built with Django, Vite, and React.
            </p>
            <Link to={"/"} className="text-blue-500 hover:underline">
                Back to Home
            </Link>
            {data && (
                <div className="mt-5 flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-4">Fetched Data:</h2>
                    <pre className="bg-gray-200 p-4 max max-w-screen rounded overflow-x-auto">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>)}
        </div>
    )
}
