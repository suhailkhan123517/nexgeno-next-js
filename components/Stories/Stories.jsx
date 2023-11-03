import Image from "next/image";
import "./stories.css";
import Link from "next/link";

export default function Stories() {
  return (
    <>
      <section className="mb-24 bg-[#fffbfd] py-20">
        <div className="container mx-auto">
          <h1 className="heading mb-10">Client Success Stories</h1>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="border-[1px] w-full rounded-2xl bg-white hover:border-pink-600">
              <div className="relative w-full h-[300px]  ">
                <Image
                  src="/images/desktop/cancari_desktop.jpg"
                  alt="project image"
                  fill={true}
                  priority
                  className="rounded-t-2xl object-cover"
                />
              </div>
              <div className="py-14 px-10 ">
                <h2 className="heading mb-5"> Cancri Jewels</h2>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio vitae non hic saepe dolorum libero facere porro
                  minus ab labore.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid lg:grid-cols-2 border-[1px] hover:border-pink-600 rounded-2xl bg-white">
                <div>
                  <div className="py-14 px-10 ">
                    <h2 className="heading mb-5"> Cancri Jewels</h2>
                    <p className="desc ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio vitae non hic saepe dolorum libero facere porro
                      minus ab labore.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative w-full h-[300px]  ">
                    <Image
                      src="/images/desktop/cancari_desktop.jpg"
                      alt="project image"
                      fill={true}
                      priority
                      className="rounded-r-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 border-[1px] hover:border-pink-600 rounded-2xl mt-5 bg-white">
                <div>
                  <div className="relative w-full h-[300px]  ">
                    <Image
                      src="/images/desktop/cancari_desktop.jpg"
                      alt="project image"
                      fill={true}
                      priority
                      className="rounded-l-2xl object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="py-14 px-10 ">
                    <h2 className="heading mb-5"> Cancri Jewels</h2>
                    <p className="desc ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio vitae non hic saepe dolorum libero facere porro
                      minus ab labore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
