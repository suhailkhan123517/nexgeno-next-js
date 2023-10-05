import Image from "next/image";
import React from "react";

const BlogDetails = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-5 flex flex-col gap-6">
              <h5 className="text-pink-600 text-xl font-medium">Business</h5>
              <h2 className="font-semibold text-4xl leading-snug text-black">
                How Technology has Transformed the Logistics Industry?
              </h2>
              <p className="desc">
                Technology has transformed the logistics industry over the
                years, revolutionizing the way goods are transported, stored,
                and managed. Automation has streamlined various...
              </p>
            </div>
            <div>
              <div className="relative w-full h-[350px] rounded-lg">
                <Image
                  src="/blog_banner.webp"
                  fill={true}
                  alt="blog Banner"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-semibold text-3xl leading-snug text-black mb-2">
              How Does the Logistics Industry Operate its Business?
            </h1>
            <p className="text-lg text-gray-700">
              The logistics industry is responsible for managing and
              coordinating the flow of goods, information, resources, services,
              etc., from their origin to the final destination cost-effectively.
              Industry professionals ensure timely transportation, storage, and
              delivery of goods and services to the respective customers and
              businesses. The industry operates in different sectors, including
              transportation, warehousing, inventory management, order
              fulfillment, supply chain management, freight forwarding,
              last-mile delivery, etc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
