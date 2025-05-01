import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CrazyDeals() {
  const deals = [
    {
      id: 1,
      title: "BUY ANY 3",
      price: "₹999",
      subtitle: "CHOOSE FROM 40+ WELLNESS PRODUCTS",
      image:
        "/https://images.unsplash.com/photo-1709976142774-ce1ef41a8378?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/deals/999",
      savings: "Save 30%",
      tag: "Most Popular",
    },
    {
      id: 2,
      title: "BUY ANY 4",
      price: "₹1299",
      subtitle: "CHOOSE FROM 45+ FITNESS AND WELLNESS PRODUCTS",
      image:
        "/https://images.unsplash.com/photo-1709976142774-ce1ef41a8378?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/deals/1299",
      savings: "Save 35%",
      tag: "Best Value",
    },
    {
      id: 3,
      title: "BUY 3 @",
      price: "₹3299",
      subtitle: "CHOOSE FROM 55+ FITNESS & WELLNESS PRODUCTS",
      image:
        "/https://images.unsplash.com/photo-1709976142774-ce1ef41a8378?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products/deals/3299",
      savings: "Save 25%",
      tag: "Premium",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full mb-3">
            <Sparkles size={16} />
            <span className="font-medium text-sm">Limited Time Offers</span>
          </div>
        </div>

        {/* Deals Grid/Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {deals.map((deal) => (
            <Link
              href={deal.link}
              key={deal.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Tag */}
              {deal.tag && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-black/90 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {deal.tag}
                  </span>
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${deal.image})`,
                    backgroundSize: "cover",
                  }}
                />

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white text-gray-900 font-bold text-2xl px-4 py-2 rounded-lg shadow-lg">
                    {deal.price}
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-black text-white font-medium text-xs px-3 py-1 rounded-full">
                    {deal.savings}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1">{deal.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{deal.subtitle}</p>

                <div className="mt-auto flex items-center text-black font-medium group-hover:text-blue-800">
                  <span>View Deal</span>
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="bg-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          >
            <span>View All Products</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
