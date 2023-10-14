import Link from "next/link";
import React from "react";
import "./footer.css";
import Image from "next/image";
import Whatsapp from "../Whatsapp/Whatsapp";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiTwotoneStar,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto  border-t border-gray-100">
        {/* <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 ">
          <div className="footer_head">
            <h1 className="title_footer text-xl font-semibold ">
              Development Services
            </h1>
            <ul>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/web"
                >
                  Application Development
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/digital"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/frontend"
                >
                  Front End Development
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/product"
                >
                  Product Prototyping
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/ecommerce"
                >
                  E-commerce Deployment
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/cloud"
                >
                  Cloud Solutions{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/mobile"
                >
                  Mobile App Development
                </Link>
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
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/services/deliverymodel"
                  >
                    Delivery Models
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/services/engagement"
                  >
                    Engagement Models
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="title_footer text-xl font-semibold ">
                Trending <br className="sm:hidden" /> Service
              </h1>
              <ul>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/services/chatbot"
                  >
                    ChatBot
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/services/demystifying"
                  >
                    AI/ML
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_head max-sm:flex  gap-16">
            <div>
              <h1 className="title_footer text-xl font-semibold ">Resources</h1>
              <ul>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/methodology"
                  >
                    DevMethodology
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/certifications"
                  >
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/career"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:hidden">
              <h1 className="title_footer text-xl font-semibold ">Our Work</h1>
              <ul>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/casestudy"
                  >
                    Casestudy
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/testimonial"
                  >
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_head">
            <h1 className="title_footer text-xl font-semibold ">Our Work</h1>
            <ul>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/casestudy"
                >
                  Casestudy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/testimonial"
                >
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="middle_footer grid grid-cols-1">
            <h1 className="title_footer text-xl font-semibold ">Solution</h1>
            <ul className="flex gap-2 flex-wrap">
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/school"
                >
                  School Management
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/tailor"
                >
                  Tailor Billing Application
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/recruitment"
                >
                  Recruitment Billing
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/crm"
                >
                  CRM
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/billing"
                >
                  Billing Application
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/pos"
                >
                  POS
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/restaurant"
                >
                  Restaurant
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/car"
                >
                  Car Rental System
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/hrms"
                >
                  Hrms Payroll System
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/onlinefood"
                >
                  Online Food Ordering System
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/hospital"
                >
                  Hospital Management System
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/job"
                >
                  Job Portal
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/lawyer"
                >
                  Lawyer Booking Solution
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/chat"
                >
                  Chat Application
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/hotel"
                >
                  Hotel Booking System
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">Technologies</h1>
          <ul className="flex gap-2 flex-wrap">
            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/ios"
              >
                iOS
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/android"
              >
                Android
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/next"
              >
                Next Js
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/flutter"
              >
                Flutter
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/azure"
              >
                Azure
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/mysql"
              >
                Mysql
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/mariadb"
              >
                Mariadb
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/php"
              >
                PHP
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/node"
              >
                Node JS
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/wordpress"
              >
                WordPress
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/woocommerce"
              >
                Woocommerce
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/googlecloud"
              >
                Google Cloud
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/sqlserver"
              >
                SQL Server
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/dynamodb"
              >
                Dynamodb
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/magento"
              >
                Magneto
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/react"
              >
                ReactJS
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/vue"
              >
                VueJS
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/aws"
              >
                AWS
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/mongodb"
              >
                Mongodb
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/postgresql"
              >
                Postgresql
              </Link>
            </li>
          </ul>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">
            Hire Developers
          </h1>
          <ul className="flex gap-2 flex-wrap">
            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/php"
              >
                Hire PHP Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/codeIgniter"
              >
                Hire Codeigniter Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/express"
              >
                Hire NodeJs Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/wordpress"
              >
                Hire WordPress Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/ios"
              >
                Hire IOS Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/android"
              >
                Hire Android Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/angular"
              >
                Hire Angular Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/react"
              >
                Hire Reactjs Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/magento"
              >
                Hire Magento Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/opencart"
              >
                Hire OpenCart Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/ionic"
              >
                Hire Ionic Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/reactnative"
              >
                Hire React Native Developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/pwa"
              >
                Hire PWA Developers
              </Link>
            </li>
          </ul>
        </div>

        <div className="middle_footer grid grid-cols-1 my-4">
          <h1 className="title_footer text-xl font-semibold ">Industries</h1>
          <ul className="flex gap-2 flex-wrap">
            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/education"
              >
                Education / E-Learning
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/retail"
              >
                Retail
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/logistics"
              >
                Logistics & Distribution
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/fintech"
              >
                FinTech
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/manufacturing"
              >
                Manufacturing
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/events"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/recruitment"
              >
                Recruitment
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/realestate"
              >
                Real Estate
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/healthcare"
              >
                Health Care
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/services/hospitality"
              >
                Hospitality
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/pharmaceutical"
              >
                Pharmaceutical
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/services/electronics"
              >
                Electronics
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/travel"
              >
                Travel & Tours
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/serviceprovider"
              >
                Service Provider
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/services/hospitals"
              >
                Hospitals
              </Link>
            </li>
          </ul>
        </div> */}
        {/* --------------------------footer social links--------------------------- */}
        {/* <div className="flex items-center gap-2 md:mt-10 mt-5">
          <Link
            href="https://in.linkedin.com/company/nexgenotechnologypvtltd"
            target="_blank"
          >
            <AiFillLinkedin className="text-4xl hover:scale-125 transition duration-300 ease-in-out" />
          </Link>
          <Link
            href="https://instagram.com/nexgenotechnology?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <AiFillInstagram className="text-4xl hover:scale-125 transition duration-300 ease-in-out" />
          </Link>
          <Link
            href="https://www.facebook.com/nexgenotechnology"
            target="_blank"
          >
            <AiFillFacebook className="text-4xl hover:scale-125  transition duration-300 ease-in-out" />
          </Link>
        </div> */}

        {/* ------------------------------logo google ----------------------------- */}

        {/* ------------------------------logo google ----------------------------- */}
      </div>
      <div className="bottom_footer border-t border-gray-100">
        <div className="container m-auto py-2 sm:py-5 grid sm:grid-cols-3 grid-cols-1 place-items-center sm:gap-5 gap-2">
          <div>
            <p className="sm:text-[15px] text-[13px] text-black font-medium">
              ©2023 NexGeno Technology Private Limited.
            </p>
          </div>
          <div className="relative sm:w-[200px] w-[150px] sm:h-[50px] h-[37px]">
            <Image
              src="/images/logo.webp"
              alt="Nexgeno Logo"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="flex gap-5">
            <Link
              className="sm:text-[15px] text-[13px] hover:underline text-black font-medium"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="sm:text-[15px] text-[13px] hover:underline text-black font-medium"
              href="/terms-conditions"
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
