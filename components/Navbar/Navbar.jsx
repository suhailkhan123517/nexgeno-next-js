import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./navbar.css";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <>
      <header className="header block w-full relative ">
        <div className="container mx-auto">
          <div className="row items-center flex  justify-between">
            <div className="header_item item_left">
              <div className="logo">
                <Link href="/">
                  <div className="logo">
                    <Image
                      src="/images/logo.png"
                      alt="Nexgeno Logo"
                      fill={true}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="header_item item_center justify-center flex">
              <nav className="menu">
                <ul className="menu_main">
                  <li className="children">
                    <Link href="/services">
                      Services <i className="fa fa-chevron-down" />
                    </Link>
                    <div className="sub_menu mega column_4">
                      <div className="list_item">
                        <h4 className="title">Offering</h4>
                        <ul>
                          <li>
                            <Link href="/services/web">
                              Application Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/digital">
                              Digital Transformation
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/frontend">
                              {" "}
                              Front-end Development{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/product">
                              {" "}
                              Product Prototyping{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/ecommerce">
                              {" "}
                              E-Commerce Deployment{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/cloud">Cloud Solutions</Link>
                          </li>
                          <li>
                            <Link href="/services/mobile">
                              {" "}
                              Mobile App Development{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">Web Consulting</Link>
                          </li>
                          <li>
                            <Link href="/services">Website Security</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Industries</h4>
                        <ul>
                          <li>
                            <Link href="/services/education">
                              {" "}
                              Education / E-Learning{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/retail"> Retail </Link>
                          </li>
                          <li>
                            <Link href="/services/logistics">
                              {" "}
                              Logistics & Distribution{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/fintech"> FinTech </Link>
                          </li>
                          <li>
                            <Link href="/services/manufacturing">
                              {" "}
                              Manufacturing{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/events"> Events </Link>
                          </li>
                          <li>
                            <Link href="/services/recruitment">
                              {" "}
                              Recruitment{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/realestate">
                              {" "}
                              Real Estate{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Industries</h4>
                        <ul>
                          <li>
                            <Link href="/services/restaurants">
                              {" "}
                              Restaurant{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/healthcare">
                              {" "}
                              Health Care{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/healthcare">
                              {" "}
                              Hospitality{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/pharmaceutical">
                              {" "}
                              Pharmaceutical{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/electronics">
                              {" "}
                              Electronics{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/travel">
                              {" "}
                              Travel & Tours{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/serviceprovider">
                              {" "}
                              Service Provider{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/hospitals"> Hospitals </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Service Models</h4>
                        <ul>
                          <li>
                            <Link href="/services/deliverymodel">
                              {" "}
                              Delivery Models{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/engagement">
                              {" "}
                              Engagement Models{" "}
                            </Link>
                          </li>
                          <div className="mt-10">
                            <Button
                              title="Enquire Now"
                              url="/inquiry"
                              button="button"
                            />
                          </div>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="children">
                    <Link href="/hiredeveloper">
                      Hire Developer <i className="fa fa-chevron-down" />
                    </Link>
                    <div className="sub_menu mega column_4">
                      <div className="list_item">
                        <h4 className="title">Hire Web Developers</h4>
                        <ul>
                          <li>
                            <Link href="/hiredeveloper/php">
                              {" "}
                              Hire PHP Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/laravel">
                              {" "}
                              Hire Laravel Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/codeIgniter">
                              {" "}
                              Hire CodeIgniter Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/express">
                              {" "}
                              Hire ExpressJS Developers{" "}
                            </Link>
                          </li>
                        </ul>
                        <h4 className="title">Hire Frontend Developers</h4>
                        <ul>
                          <li>
                            <Link href="/hiredeveloper/angular">
                              {" "}
                              Hire Angular Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/react">
                              {" "}
                              Hire React JS Developers{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Hire Open Source Developers</h4>
                        <ul>
                          <li>
                            <Link href="/hiredeveloper/wordpress">
                              {" "}
                              Hire WordPress Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/shopify">
                              {" "}
                              Hire Shopify Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/magento">
                              {" "}
                              Hire Magento Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/opencart">
                              {" "}
                              Hire OpenCart Developers{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">
                          Hire Cross-Platform Developers
                        </h4>
                        <ul>
                          <li>
                            <Link href="/hiredeveloper/ionic">
                              {" "}
                              Hire Ionic Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/reactnative">
                              {" "}
                              Hire React Native Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/pwa">
                              {" "}
                              Hire PWA Developers{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Hire Mobile Developers</h4>
                        <ul>
                          <li>
                            <Link href="/hiredeveloper/ios">
                              {" "}
                              Hire iOS Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/android">
                              {" "}
                              Hire Android Developers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/hiredeveloper/flutter">
                              {" "}
                              Hire Flutter Developers{" "}
                            </Link>
                          </li>
                          <div className="mt-8">
                            <Button
                              title="Enquire Now"
                              url="/inquiry"
                              button="button"
                            />
                          </div>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="children">
                    <Link href="/solution">
                      Solution <i className="fa fa-chevron-down" />
                    </Link>
                    <div className="sub_menu mega column_4">
                      <div className="list_item">
                        <h4 className="title">Customized Solutions</h4>
                        <ul>
                          <li>
                            <Link href="/solution/school">
                              {" "}
                              School management{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/tailor">
                              {" "}
                              Tailor Billing Application{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/recruitment">
                              Recruitment billing application
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/crm"> CRM application </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Customized Solutions</h4>
                        <ul>
                          <li>
                            <Link href="/solution/billing">
                              {" "}
                              Billing application{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/pos"> Point of Sale </Link>
                          </li>
                          <li>
                            <Link href="/solution/restaurant">
                              {" "}
                              Multi restaurant management{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/car">
                              {" "}
                              Car rental system{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Customized Solutions</h4>
                        <ul>
                          <li>
                            <Link href="/solution/hrms">
                              {" "}
                              Hrms payroll system{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/onlinefood">
                              {" "}
                              Online food ordering system{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/hospital">
                              {" "}
                              Hospital management system{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/job"> Job portal </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Customized Solutions</h4>
                        <ul>
                          <li>
                            <Link href="/solution/lawyer">
                              {" "}
                              Lawyer booking solution{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/chat">
                              {" "}
                              Chat application{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/solution/hotel">
                              {" "}
                              Hotel booking system{" "}
                            </Link>
                          </li>
                          <div className="mt-4">
                            <Button
                              title="Enquire Now"
                              url="/inquiry"
                              button="button"
                            />
                          </div>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="children">
                    <Link href="#">
                      Our Work <i className="fa fa-chevron-down" />
                    </Link>
                    <div className="sub_menu mega column_3">
                      <div className="list_item">
                        <h4 className="title">Clients Testimonial</h4>
                        <Link className="" href="#">
                          <Image
                            src="/images/quote.webp"
                            height={50}
                            width={50}
                            alt="Nexgeno Testimonial "
                          />
                          <p className="leading-normal pt-3 pr-5">
                            It has been great working with Nexgeno over the
                            years on our website and online marketing
                          </p>
                          <h3 className="text-xl font-bold pt-3">Anil Garg</h3>
                        </Link>
                      </div>
                      <div className="list_item text-center">
                        <h4 className="title">Case Study</h4>
                        <Link href="/casestudy">
                          <div className="relative hover:scale-95 transition duration-300 ease-in-out h-[230px] w-[100%]">
                            <Image
                              src="/images/navcase.jpg"
                              fill={true}
                              alt="Nexgeno CaseStudy"
                            />
                          </div>
                        </Link>
                        <Button title="View" url="/casestudy" button="button" />
                      </div>
                      <div className="list_item text-center">
                        <h4 className="title">Portfolio</h4>
                        <Link href="/portfolio">
                          <div className="relative hover:scale-95 transition duration-300 ease-in-out h-[230px] w-[100%]">
                            <Image
                              src="/images/portfolio.png"
                              fill={true}
                              alt="Nexgeno Portfolio"
                            />
                          </div>
                        </Link>

                        <Button title="View" url="/portfolio" button="button" />
                      </div>
                    </div>
                  </li>
                  <li className="children">
                    <Link href="#">
                      Company <i className="fa fa-chevron-down" />
                    </Link>
                    <div className="sub_menu mega column_3">
                      <div className="list_item">
                        <h4 className="title">Overview</h4>
                        <ul>
                          <li>
                            <Link href="/about"> About Us </Link>
                          </li>
                          <li>
                            <Link href="/methodology">
                              {" "}
                              Development Methodology{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/certifications"> Certifications </Link>
                          </li>
                          {/* <li>
                            <Link href="#"> Career </Link>
                          </li> */}
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Insights</h4>
                        <ul>
                          <li>
                            <Link href="/faq"> FAQs </Link>
                          </li>
                          <div className="mt-6">
                            <Button
                              title="Enquire Now"
                              url="/inquiry"
                              button="button"
                            />
                          </div>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Certificate</h4>
                        <Link href="#">
                          <div className="imgC">
                            <Image
                              src="/images/certificate.png"
                              fill={true}
                              alt="Nexgeno Portfolio"
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header_item item_right flex justify-end">
              <Button url="/inquiry" title="Let's Talk" button="button" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
