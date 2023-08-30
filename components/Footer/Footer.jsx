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
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/web"
                >
                  Application-development
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/digital"
                >
                  Digital-transformation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/frontend"
                >
                  Front-end-development
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/product"
                >
                  Product-prototyping
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/ecommerce"
                >
                  E-commerce-deployment
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/cloud"
                >
                  Cloud-solutions{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/services/mobile"
                >
                  Mobile-app-development
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
                    Delivery-models
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline text-black font-medium"
                    href="/services/engagement"
                  >
                    Engagement-models
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
                    href="demystifying"
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
                    About-us
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
                    href="/certification"
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
                  School-management
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/tailor"
                >
                  Tailor-billing-application
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/recruitment"
                >
                  Recruitment-billing
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
                  Billing-application
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
                  Car-rental-system
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/hrms"
                >
                  Hrms-payroll-system
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/onlinefood"
                >
                  Online-food-ordering-system
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/hospital"
                >
                  Hospital-management-system
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/job"
                >
                  Job-portal
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/lawyer"
                >
                  Lawyer-booking-solution
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/chat"
                >
                  Chat-application
                </Link>
              </li>

              <li>
                <Link
                  className="hover:underline text-black font-medium"
                  href="/solution/hotel"
                >
                  Hotel-booking-system
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
                Google-cloud
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/technology/sqlserver"
              >
                SQL-Server
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
                Hire-PHP-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/codeIgniter"
              >
                Hire-codeigniter-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/express"
              >
                Hire-nodeJs-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/wordpress"
              >
                Hire-wordPress-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/ios"
              >
                Hire-IOS-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/android"
              >
                Hire-android-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/angular"
              >
                Hire-angular-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/react"
              >
                Hire-reactjs-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/magento"
              >
                Hire-magento-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/opencart"
              >
                Hire-openCart-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/ionic"
              >
                Hire-ionic-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/reactnative"
              >
                Hire-react-native-developers
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/hiredeveloper/pwa"
              >
                Hire-PWA-developers
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
                Logistics-&-distribution
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
                Real-estate
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/healthcare"
              >
                Health-care
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
                Travel-&-tours
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline text-black font-medium"
                href="/industries/serviceprovider"
              >
                Service-provider
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
        </div>
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
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="sm:selection:text-[15px] text-[13px] hover:underline text-black font-medium"
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
