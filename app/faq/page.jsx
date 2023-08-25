import { faq } from "@/utils/data";
import "@/components/Faq/faq.css";

export const metadata = {
  title: "Nexgeno | Faq",
  description:
    "NexGeno Technology specializes in web designing and development services. This includes creating and building websites, designing user interfaces and experiences, and optimizing websites for search engines (SEO)",
};

export default function FaqMain() {
  return (
    <>
      <div className="my-20">
        <div className="container m-auto md:py-10 sm:pt-10 md:pt-0">
          <h1 className="text-center text-blue-950 md:text-3xl text-xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="grid place-items-center md:px-10 md:py-10 ">
            <ul className="accordion w-full">
              {faq.map((item) => (
                <li key={item.id} className="w-full p-3 mb-3">
                  <input type="radio" name="accordion" id={item.id} />
                  <label htmlFor={item.id}> {item.question} </label>
                  <div className="content">
                    <p>{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
