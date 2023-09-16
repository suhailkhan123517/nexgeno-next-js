import Button from "../Button/Button";

const WhoWeAre = ({
  title,
  desc,
  shortDesc1,
  shortDesc2,
  shortDesc3,
  shortDesc4,
}) => {
  return (
    <>
      <div className="container mx-auto py-10 lg:px-14 sm:px-5 px-3">
        <div className="border border-gray-200 hover:border-pink-500 sm:py-8  py-3 lg:px-20 sm:px-10 px-4 rounded-3xl hover:border-gradient-to-r from-pink-500 to-purple-600">
          <h1 className="heading py-4 "> {title} </h1>

          <p className="desc my-5">{desc}</p>
          <p className="desc my-5">{shortDesc1}</p>
          <p className="desc my-5">{shortDesc2}</p>
          <p className="desc my-5">{shortDesc3}</p>
          <p className="desc my-5">{shortDesc4}</p>
          <div className="flex sm:flex-row flex-col my-5 py-5 sm:gap-9 gap-3">
            <Button
              url="/inquiry"
              title="Get In Touch"
              button="button"
              className="max-w-max"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
