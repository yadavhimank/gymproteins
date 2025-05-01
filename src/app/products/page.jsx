import SimpleProductList from "@/components/SimpleProductsList";

export default function SimplePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Simple Header Banner */}
      <div className="mb-10 w-full">
        <div className="w-full overflow-hidden rounded-lg relative">
          <img
            src="/whey-protein.webp"
            alt="Product Banner"
            className="w-full object-cover h-[200px] sm:h-[300px] md:h-[500px]"
          ></img>
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3">
              <span className="">Premium Nutrition</span>
            </h2>
            <p className="text-lg md:text-2xl text-white max-w-2xl text-center">
              Fuel your workouts with our top-quality supplements
            </p>
          </div>
        </div>
      </div>

      {/* Product List Component */}
      <SimpleProductList />
    </main>
  );
}
