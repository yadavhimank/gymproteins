import { Mail, MapPin, Phone, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="bg-white p-10 lg:p-20 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/2">
          <span className="flex col gap-2">
            <Settings className="text-black" />{" "}
            <h1 className="text-black  ">Contact Us</h1>
          </span>
          <h1 className="text-5xl mt-2 ">
            Get in touch <span className="font-extrabold">with us</span>
          </h1>
          <p className="mt-4 text-gray-500 ">
            Reach out for any inquiries, support, or to discuss how we can meet
            your industrial needs.
          </p>

          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-4 py-5">
              <div className="bg-black p-3 rounded-lg">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl">Contact</h3>
                <p className="text-gray-500">+1.809.120.670</p>
              </div>
            </div>
            <hr className="bg-black"></hr>
            <div className="flex items-center gap-4 py-5">
              <div className="bg-black p-3 rounded-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl">E-mail</h3>
                <p className="text-gray-500">info@domainname.com</p>
              </div>
            </div>
            <hr className="bg-black"></hr>
            <div className="flex items-center gap-4 py-5">
              <div className="bg-black p-3 rounded-lg">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl">Our Address</h3>
                <p className="text-gray-500">
                  37 San Juan Lane Graaf Florisstraat 22A, 3021 CH
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold">
            Contact <span className="font-extrabold">me</span>
          </h2>
          <form className="mt-6 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter first name"
                className="lg:w-1/2 w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Enter last name"
                className="lg:w-1/2 w-full p-3 border rounded-lg"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter your phone no."
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              placeholder="Write Message"
              className="w-full p-3 border rounded-lg h-32"
            ></textarea>
            <button className="w-48 p-3 bg-white text-black font-bold rounded-lg border-black border-2">
              Submit Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16663.8739074148!2d77.09658856842591!3d28.49528454020529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743425691895!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-xl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Page;
