import Link from "next/link";
import React from "react";
import "./footer.css";
import Image from "next/image";
import Whatsapp from "../Whatsapp/Whatsapp";

export default function Footer() {
  return (
    <>
      <div className="container m-auto md:mb-20 border-t border-gray-100 sm:pt-14 pt-7 ">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 ">
          <div className="footer_head">
            <h1 className="title_footer text-xl font-semibold ">
              Development Services
            </h1>
            <ul>
              <li>
                <Link href="/services/web">Application Development</Link>
              </li>
              <li>
                <Link href="/services/digital">Digital Transformation</Link>
              </li>
              <li>
                <Link href="/services/frontend">Front-end Development</Link>
              </li>
              <li>
                <Link href="/services/product">Product Prototyping</Link>
              </li>
              <li>
                <Link href="/services/ecommerce">E-commerce Deployment</Link>
              </li>
              <li>
                <Link href="/services/cloud">Cloud Solutions </Link>
              </li>
              <li>
                <Link href="/services/mobile">Mobile App Development</Link>
              </li>
            </ul>
          </div>
          <div className="footer_head max-sm:flex gap-10">
            <div>
              <h1 className="title_footer text-xl font-semibold ">
                Service <br className="sm:hidden" /> Models
              </h1>
              <ul>
                <li>
                  <Link href="/services/deliverymodel">Delivery Models</Link>
                </li>
                <li>
                  <Link href="/services/engagement">Engagement Models</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="title_footer text-xl font-semibold ">
                Trending <br className="sm:hidden" /> Service
              </h1>
              <ul>
                <li>
                  <Link href="/services/chatbot">ChatBot</Link>
                </li>
                <li>
                  <Link href="demystifying">AI/ML</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_head max-sm:flex  gap-16">
            <div>
              <h1 className="title_footer text-xl font-semibold ">Resources</h1>
              <ul>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/methodology">DevMethodology</Link>
                </li>
                <li>
                  <Link href="/certification">Certifications</Link>
                </li>
                <li>
                  <Link href="/career">Career</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="sm:hidden">
              <h1 className="title_footer text-xl font-semibold ">Our Work</h1>
              <ul>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/casestudy">Casestudy</Link>
                </li>
                <li>
                  <Link href="/testimonial">Testimonial</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_head">
            <h1 className="title_footer text-xl font-semibold ">Our Work</h1>
            <ul>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/casestudy">Casestudy</Link>
              </li>
              <li>
                <Link href="/testimonial">Testimonial</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="middle_footer grid grid-cols-1">
            <h1 className="title_footer text-xl font-semibold ">Solution</h1>
            <ul>
              <li>
                <Link href="/solution/school">School-management</Link>
              </li>
              <li className="stroke"> | </li>
              <li>
                <Link href="/solution/tailor">Tailor billing Application</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/recruitment">Recruitment billing</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/crm">CRM</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/billing">Billing application</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/pos">POS</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/restaurant">Restaurant</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/car">Car rental system</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/hrms">Hrms payroll system</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/onlinefood">
                  Online food ordering system
                </Link>
              </li>
              <li> | </li>

              <li>
                <Link href="/solution/hospital">
                  Hospital management system
                </Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/job">Job portal</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/lawyer">Lawyer booking solution</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/chat">Chat application</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="/solution/hotel">Hotel bookingsystem</Link>
              </li>
              <li> | </li>
            </ul>
          </div>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">Technologies</h1>
          <ul>
            <li>
              <Link href="/technology/ios">iOS</Link>
            </li>
            <li className="stroke"> | </li>
            <li>
              <Link href="/technology/android">Android</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/next">Next Js</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/flutter">Flutter</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/azure">Azure</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/mysql">Mysql</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/mariadb">Mariadb</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/php">PHP</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/node">Node JS</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/wordpress">WordPress</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/woocommerce">Woocommerce</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/googlecloud">Google Cloud</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/sqlserver">Sql Server</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/dynamodb">Dynamodb</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/magento">Magneto</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/react">ReactJS</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/vue">VueJS</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/aws">AWS</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/mongodb">Mongodb</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/technology/postgresql">Postgresql</Link>
            </li>
          </ul>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">
            Hire Developers
          </h1>
          <ul>
            <li>
              <Link href="/hiredeveloper/php">Hire PHP Developers</Link>
            </li>
            <li className="stroke"> | </li>
            <li>
              <Link href="/hiredeveloper/codeIgniter">
                Hire Codeigniter Developers
              </Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/express">Hire NodeJs Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/wordpress">
                Hire WordPress Developers
              </Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/ios">Hire iOS Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/android">Hire Android Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/angular">Hire Angular Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/react">Hire React.JS Developers</Link>
            </li>
            <li> | </li>

            <li>
              <Link href="/hiredeveloper/magento">Hire Magento Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/opencart">
                Hire OpenCart Developers
              </Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/ionic">Hire Ionic Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/reactnative">
                Hire React Native Developers
              </Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/hiredeveloper/pwa">Hire PWA Developers</Link>
            </li>
            <li> | </li>
          </ul>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">Industries</h1>
          <ul>
            <li>
              <Link href="/industries/education">Education / E-Learning</Link>
            </li>
            <li className="stroke"> | </li>
            <li>
              <Link href="/industries/retail">Retail</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/logistics">Logistics & Distribution</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/fintech">FinTech</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/manufacturing">Manufacturing</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/events">Events</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/recruitment">Recruitment</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/realestate">Real Estate</Link>
            </li>
            <li> | </li>

            <li>
              <Link href="/industries/healthcare">Health Care</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/services/hospitality">Hospitality</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/pharmaceutical">Pharmaceutical</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/services/electronics">Electronics</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/travel">Travel & Tours</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/industries/serviceprovider">Service Provider</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="/services/hospitals">Hospitals</Link>
            </li>
            <li> | </li>
          </ul>
        </div>
      </div>
      <div className="bottom_footer border-t border-gray-100">
        <div className="container m-auto py-2 sm:py-5 grid sm:grid-cols-3 grid-cols-1 place-items-center sm:gap-5 gap-2">
          <div>
            <p className="sm:text-[15px] text-[13px]">
              ©2023 NexGeno Technology Private Limited.
            </p>
          </div>
          <div className="relative sm:w-[200px] w-[150px] sm:h-[50px] h-[37px]">
            <Image src="/images/logo.png" alt="Nexgeno Logo" fill={true} />
          </div>
          <div className="flex gap-5">
            <Link className="sm:text-[15px] text-[13px]" href="/privacy">
              Privacy Policy
            </Link>
            <Link
              className="sm:selection:text-[15px] text-[13px] "
              href="/terms"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
      <Whatsapp />
    </>
  );
}
