import { testimonialReview } from "@/utils/data";
import "./testimonial.css";

export const metadata = {
  title: "Nexgeno | Testimonial",
  description: "Nexgeno Technology Private Limited Company Terms & Testimonial",
};

const Testimonial = () => {
  return (
    <>
      <div className="testimonial mt-16">
        <div className="container mx-auto">
          <h1 className="heading text-center py-10">Review</h1>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {testimonialReview.map((item) => {
              const { id, name, desc } = item;
              const avtar = name.charAt(0);
              return (
                <div key={item.id} className="cardCon">
                  <div className="">
                    <div className="card border md:h-[300px] border-blue-100 p-5 rounded-xl shadow-xl">
                      <div className="head flex flex-row justify-between items-center pb-2">
                        <div className="flex flex-row gap-2">
                          <div className="flex  md:items-center gap-2 md:flex-row flex-col">
                            <div className="w-8 h-8 rounded-full avtar  text-white flex justify-center items-center">
                              <p className="text-2xl font-semibold ">{avtar}</p>
                            </div>
                            <h1 className=" font-medium text-[15px] pb-2 mt-1">
                              {name}
                            </h1>
                          </div>
                        </div>
                        <div className="star_rating text-yellow-500 flex flex-row gap-1 items-center">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <div className="center">
                        <p className="text-[14px] ">{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
