export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">404</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-600 mt-4">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>
    </div>
  );
}
