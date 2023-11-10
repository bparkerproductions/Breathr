import { Link } from '@inertiajs/react'
import MLink from '@mui/joy/Link'

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-3 bg-blue-500 px-5">
                <Link className="text-white" href="/">
                    Back to Home
                </Link>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-neutral-100 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
