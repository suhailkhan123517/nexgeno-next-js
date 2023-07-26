import Link from "next/link";
import React from "react";
import "./footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="container m-auto my-20">
        <div className="grid grid-cols-4 gap-4 ">
          <div className="footer_head">
            <h1 className="title_footer text-xl font-semibold ">
              Development Services
            </h1>
            <ul>
              <li>
                <Link href="#">Application Development</Link>
              </li>
              <li>
                <Link href="#">Digital Transformation</Link>
              </li>
              <li>
                <Link href="#">Front-end Development</Link>
              </li>
              <li>
                <Link href="#">Product Prototyping</Link>
              </li>
              <li>
                <Link href="#">E-commerce Deployment</Link>
              </li>
              <li>
                <Link href="#">Cloud Solutions AWS, Azure & Google</Link>
              </li>
              <li>
                <Link href="#">Mobile App Development</Link>
              </li>
            </ul>
          </div>
          <div className="footer_head">
            <h1 className="title_footer text-xl font-semibold ">
              Service Models
            </h1>
            <ul>
              <li>
                <Link href="#">Delivery Models</Link>
              </li>
              <li>
                <Link href="#">Engagement Models</Link>
              </li>
            </ul>
            <h1 className="title_footer text-xl font-semibold ">
              Trending Service
            </h1>
            <ul>
              <li>
                <Link href="#">ChatBot</Link>
              </li>
              <li>
                <Link href="#">AI/ML</Link>
              </li>
            </ul>
          </div>
          <div className="footer_head">
            <h1 className="title_footer text-xl font-semibold ">Resources</h1>
            <ul>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Development Methodology</Link>
              </li>
              <li>
                <Link href="#">Certifications</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer_head">
            <h1 className="title_footer text-xl font-semibold ">Our Work</h1>
            <ul>
              <li>
                <Link href="#">Portfolio</Link>
              </li>
              <li>
                <Link href="#">Casestudy</Link>
              </li>
              <li>
                <Link href="#">Testimonial</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="middle_footer grid grid-cols-1">
            <h1 className="title_footer text-xl font-semibold ">Solution</h1>
            <ul>
              <li>
                <Link href="#">School-management</Link>
              </li>
              <li className="stroke"> | </li>
              <li>
                <Link href="#">Tailor billing Application</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Recruitment billing</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">CRM</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Billing application</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">POS</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Restaurant</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Car rental system</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Hrms payroll system</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Online food ordering system</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Online food ordering system</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Hospital management system</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Job portal</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Lawyer booking solution</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Chat application</Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#">Hotel bookingsystem</Link>
              </li>
              <li> | </li>
            </ul>
          </div>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">Technologies</h1>
          <ul>
            <li>
              <Link href="#">iOS</Link>
            </li>
            <li className="stroke"> | </li>
            <li>
              <Link href="#">Android</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">React Native</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Flutter</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Azure</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Mysql</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Mariadb</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">PHP</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Node JS</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">WordPress</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Woocommerce</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Google Cloud</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Sql Server</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Dynamodb</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Magneto</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">ReactJS</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">VueJS</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">AWS</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Mongodb</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Postgresql</Link>
            </li>
          </ul>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">
            Hire Developers
          </h1>
          <ul>
            <li>
              <Link href="#">Hire PHP Developers</Link>
            </li>
            <li className="stroke"> | </li>
            <li>
              <Link href="#">Hire Codeigniter Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire NodeJs Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire WordPress Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire iOS Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire Android Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire Angular Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire React.JS Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire WordPress Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire Magento Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire OpenCart Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire Ionic Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire React Native Developers</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hire PWA Developers</Link>
            </li>
            <li> | </li>
          </ul>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">Industries</h1>
          <ul>
            <li>
              <Link href="#">Education / E-Learning</Link>
            </li>
            <li className="stroke"> | </li>
            <li>
              <Link href="#">Retail</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Logistics & Distribution</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">FinTech</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Manufacturing</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Events</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Recruitment</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Real Estate</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Restaurant</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Health Care</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hospitality</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Pharmaceutical</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Electronics</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Travel & Tours</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Service Provider</Link>
            </li>
            <li> | </li>
            <li>
              <Link href="#">Hospitals</Link>
            </li>
            <li> | </li>
          </ul>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="container m-auto py-5 grid grid-cols-3 place-items-center gap-5">
          <div>
            <p>©2023 NexGeno Technology Private Limited.</p>
          </div>
          <div>
            <Image
              src="/images/logo.png"
              alt="Nexgeno Logo"
              width={200}
              height={100}
            />
          </div>
          <div className="flex gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </>
  );
}
