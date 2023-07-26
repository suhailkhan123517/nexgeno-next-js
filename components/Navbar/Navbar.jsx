import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./navbar.css";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <>
      <header className="header block w-full relative z-1 py-2">
        <div className="container mx-auto">
          <div className="row items-center flex flex-wrap">
            <div className="header_item item_left">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    width={200}
                    height={200}
                    alt="Nexgeno Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="header_item item_center flex justify-center">
              <nav className="menu">
                <ul className="menu_main">
                  <li className="children">
                    <Link href="#">
                      Services <i className="fa fa-chevron-down" />
                    </Link>
                    <div className="sub_menu mega column_4">
                      <div className="list_item">
                        <h4 className="title">Offering</h4>
                        <ul>
                          <li>
                            <Link href="#"> Application Development </Link>
                          </li>
                          <li>
                            <Link href="#"> Digital Transformation </Link>
                          </li>
                          <li>
                            <Link href="#"> Front-end Development </Link>
                          </li>
                          <li>
                            <Link href="#"> Product Prototyping </Link>
                          </li>
                          <li>
                            <Link href="#"> E-Commerce Deployment </Link>
                          </li>
                          <li>
                            <Link href="#">
                              Cloud Solutions AWS, Azure & Google
                            </Link>
                          </li>
                          <li>
                            <Link href="#"> Mobile App Development </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Industries</h4>
                        <ul>
                          <li>
                            <Link href="#"> Education / E-Learning </Link>
                          </li>
                          <li>
                            <Link href="#"> Retail </Link>
                          </li>
                          <li>
                            <Link href="#"> Logistics & Distribution </Link>
                          </li>
                          <li>
                            <Link href="#"> FinTech </Link>
                          </li>
                          <li>
                            <Link href="#"> Manufacturing </Link>
                          </li>
                          <li>
                            <Link href="#"> Events </Link>
                          </li>
                          <li>
                            <Link href="#"> Recruitment </Link>
                          </li>
                          <li>
                            <Link href="#"> Real Estate </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Industries</h4>
                        <ul>
                          <li>
                            <Link href="#"> Restaurant </Link>
                          </li>
                          <li>
                            <Link href="#"> Health Care </Link>
                          </li>
                          <li>
                            <Link href="#"> Hospitality </Link>
                          </li>
                          <li>
                            <Link href="#"> Pharmaceutical </Link>
                          </li>
                          <li>
                            <Link href="#"> Electronics </Link>
                          </li>
                          <li>
                            <Link href="#"> Travel & Tours </Link>
                          </li>
                          <li>
                            <Link href="#"> Service Provider </Link>
                          </li>
                          <li>
                            <Link href="#"> Hospitals </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Service Models</h4>
                        <ul>
                          <li>
                            <Link href="#"> Delivery Models </Link>
                          </li>
                          <li>
                            <Link href="#"> Engagement Models </Link>
                          </li>
                          <Button title="Enquire Now" url="#" button="button" />
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="children">
                    <Link href="#">
                      Hire Developer <i className="fa fa-chevron-down" />
                    </Link>
                    <div className="sub_menu mega column_4">
                      <div className="list_item">
                        <h4 className="title">Hire Web Developers</h4>
                        <ul>
                          <li>
                            <Link href="#"> Hire PHP Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire Laravel Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire CodeIgniter Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire ExpressJS Developers </Link>
                          </li>
                        </ul>
                        <h4 className="title">
                          Hire Cross-Platform Developers
                        </h4>
                        <ul>
                          <li>
                            <Link href="#"> Hire Ionic Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire React Native Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire PWA Developers </Link>
                          </li>

                          <Button title="Enquire Now" url="#" button="button" />
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Hire Mobile Developers</h4>
                        <ul>
                          <li>
                            <Link href="#"> Hire iOS Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire Android Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire Flutter Developers </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Hire Frontend Developers</h4>
                        <ul>
                          <li>
                            <Link href="#"> Hire Angular Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire React JS Developers </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Hire Open Source Developers</h4>
                        <ul>
                          <li>
                            <Link href="#"> Hire WordPress Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire Shopify Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire Magento Developers </Link>
                          </li>
                          <li>
                            <Link href="#"> Hire OpenCart Developers </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="children">
                    <Link href="#">
                      Solution <i className="fa fa-chevron-down" />
                    </Link>
                    <div className="sub_menu mega column_4">
                      <div className="list_item">
                        <h4 className="title">Customized Solutions</h4>
                        <ul>
                          <li>
                            <Link href="#"> School management </Link>
                          </li>
                          <li>
                            <Link href="#"> Tailor Billing Application </Link>
                          </li>
                          <li>
                            <Link href="#">
                              Recruitment billing application
                            </Link>
                          </li>
                          <li>
                            <Link href="#"> CRM application </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Customized Solutions</h4>
                        <ul>
                          <li>
                            <Link href="#"> Billing application </Link>
                          </li>
                          <li>
                            <Link href="#"> Point of Sale </Link>
                          </li>
                          <li>
                            <Link href="#"> Multi restaurant management </Link>
                          </li>
                          <li>
                            <Link href="#"> Car rental system </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Customized Solutions</h4>
                        <ul>
                          <li>
                            <Link href="#"> Hrms payroll system </Link>
                          </li>
                          <li>
                            <Link href="#"> Online food ordering system </Link>
                          </li>
                          <li>
                            <Link href="#"> Hospital management system </Link>
                          </li>
                          <li>
                            <Link href="#"> Job portal </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Customized Solutions</h4>
                        <ul>
                          <li>
                            <Link href="#"> Lawyer booking solution </Link>
                          </li>
                          <li>
                            <Link href="#"> Chat application </Link>
                          </li>
                          <li>
                            <Link href="#"> Hotel booking system </Link>
                          </li>
                          <Button title="Enquire Now" url="#" button="button" />
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
                      <div className="list_item">
                        <h4 className="title">Case Study</h4>
                        <Link href="#">
                          <Image
                            src="/images/casestudy.png"
                            width={300}
                            height={300}
                            alt="Nexgeno CaseStudy"
                          />
                        </Link>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Portfolio</h4>
                        <Link href="#">
                          <Image
                            src="/images/portfolio.png"
                            width={300}
                            height={300}
                            alt="Nexgeno Portfolio"
                          />
                        </Link>
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
                            <Link href="#"> Development Methodology </Link>
                          </li>
                          <li>
                            <Link href="#"> Certifications </Link>
                          </li>
                          <li>
                            <Link href="#"> Career </Link>
                          </li>
                          <li>
                            <Link href="#"> Contact Us </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Insights</h4>
                        <ul>
                          <li>
                            <Link href="#"> FAQs </Link>
                          </li>
                          <Button title="Enquire Now" url="#" button="button" />
                        </ul>
                      </div>
                      <div className="list_item">
                        <h4 className="title">Certificate</h4>
                        <Link href="#">
                          <Image
                            src="/images/certificate.png"
                            width={400}
                            height={400}
                            alt="Nexgeno Portfolio"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header_item item_right flex justify-end">
              <Button url="#" title="Let's Talk" button="button" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
