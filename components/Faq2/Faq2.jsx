import "@/components/Faq/faq.css";
import { faq } from "@/utils/data";
const Faq2 = () => {
  return (
    <>
      <div className="">
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
};

export default Faq2;