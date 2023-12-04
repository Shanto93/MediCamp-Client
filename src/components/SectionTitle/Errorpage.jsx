const Errorpage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow p-8 text-center">
                <h1 className="text-4xl text-gray-800 font-semibold mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 text-lg mb-6">
                    Sorry, the page you are looking for does not exist.
                </p>
                <a href="/" className="text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 inline-block text-lg font-semibold">
                    Go back to the homepage
                </a>
            </div>
        </div>
    );
};

export default Errorpage;