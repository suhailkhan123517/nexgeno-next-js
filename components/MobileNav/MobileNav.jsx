import React from "react";
import "./MobileNav.css";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

export default function MobileNav() {
  return (
    <>
      <div className="mobilenav">
        <div className="wrapper">
          <nav>
            <Link href="/">
              <div className="logo relative w-[170px] h-[43px]">
                <Image
                  src="/images/logo.png"
                  fill={true}
                  sizes="170px"
                  className="object-contain"
                  alt="Nexgeno Logo"
                />
              </div>
            </Link>

            <input
              type="checkbox"
              id="menu"
              name="menu"
              className="m-menu__checkbox"
            />
            <label className="m-menu__toggle" htmlFor="menu">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </label>
            <label className="m-menu__overlay" htmlFor="menu"></label>
            <div className="m-menu">
              <div className="m-menu__header">
                <label className="m-menu__toggle" htmlFor="menu">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </label>
                <span>MENU</span>
              </div>
              <ul>
                <li>
                  <label className="a-label__chevron" htmlFor="Services">
                    Services
                  </label>
                  <input
                    type="checkbox"
                    id="Services"
                    name="item-2"
                    className="m-menu__checkbox"
                  />
                  <div className="m-menu">
                    <div className="m-menu__header">
                      <label className="m-menu__toggle" htmlFor="Services">
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </label>
                      <span>Services</span>
                    </div>
                    <ul>
                      <li>
                        <label className="a-label__chevron" htmlFor="Offering">
                          Offering
                        </label>
                        <input
                          type="checkbox"
                          id="Offering"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Offering"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Offering</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/services/web">
                                Application Development
                              </a>
                            </li>
                            <li>
                              <a href="/services/digital">
                                Digital TranshtmlFormation
                              </a>
                            </li>
                            <li>
                              <a href="/services/frontend">
                                Front-end Development
                              </a>
                            </li>
                            <li>
                              <a href="/services/product">
                                Product Prototyping
                              </a>
                            </li>
                            <li>
                              <a href="/services/ecommerce">
                                Ecommerce Deployment
                              </a>
                            </li>
                            <li>
                              <a href="/services/cloud">
                                Cloud Solutions AWS, Azure & Google{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/services/mobile">
                                Mobile App Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <label className="a-label__chevron" htmlFor="Industry">
                          Industry
                        </label>
                        <input
                          type="checkbox"
                          id="Industry"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Industry"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Industry</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/services/education">
                                Education / E-Learning
                              </a>
                            </li>
                            <li>
                              <a href="/services/retail">Retail</a>
                            </li>
                            <li>
                              <a href="/services/logistics">
                                Logistics & Distribution
                              </a>
                            </li>
                            <li>
                              <a href="/services/fintech">FinTECH</a>
                            </li>
                            <li>
                              <a href="/services/manufacturing">
                                Manufacturing
                              </a>
                            </li>
                            <li>
                              <a href="/services/events">Events</a>
                            </li>
                            <li>
                              <a href="/services/recruitment">Recruitment</a>
                            </li>
                            <li>
                              <a href="/services/realestate">Real Estate</a>
                            </li>
                            <li>
                              <a href="/services/restaurants">Restaurant</a>
                            </li>
                            <li>
                              <a href="/services/healthcare">Health Care</a>
                            </li>
                            <li>
                              <a href="/services/healthcare">Hospitality</a>
                            </li>
                            <li>
                              <a href="/services/pharmaceutical">
                                Pharmaceutical
                              </a>
                            </li>
                            <li>
                              <a href="/services/electronics">Electronics</a>
                            </li>
                            <li>
                              <a href="/services/travel">Travel & Tours</a>
                            </li>
                            <li>
                              <a href="/services/serviceprovider">
                                Service Provider
                              </a>
                            </li>
                            <li>
                              <a href="/services/hospitals">Hospitals</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <label
                          className="a-label__chevron"
                          htmlFor="Service Models"
                        >
                          Service Models
                        </label>
                        <input
                          type="checkbox"
                          id="Service Models"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Service Models"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Service Models</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/services/deliverymodel">
                                Delivery Models
                              </a>
                            </li>
                            <li>
                              <a href="/services/engagement">
                                Engagement Models
                              </a>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <label className="a-label__chevron" htmlFor="Hire Developers">
                    Hire Developers
                  </label>
                  <input
                    type="checkbox"
                    id="Hire Developers"
                    name="item-2"
                    className="m-menu__checkbox"
                  />
                  <div className="m-menu">
                    <div className="m-menu__header">
                      <label
                        className="m-menu__toggle"
                        htmlFor="Hire Developers"
                      >
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </label>
                      <span>Hire Developers</span>
                    </div>
                    <ul>
                      <li>
                        <label
                          className="a-label__chevron"
                          htmlFor="Hire Web Developers"
                        >
                          Hire Web Developers
                        </label>
                        <input
                          type="checkbox"
                          id="Hire Web Developers"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Hire Web Developers"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Web Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/php">
                                Hire PHP Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/laravel">
                                Hire Laravel Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/codeIgniter">
                                Hire CodeIgniter Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/express">
                                Hire ExpressJS Developers
                              </a>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <label
                          className="a-label__chevron"
                          htmlFor="Hire Mobile Developers"
                        >
                          Hire Mobile Developers
                        </label>
                        <input
                          type="checkbox"
                          id="Hire Mobile Developers"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Hire Mobile Developers"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Mobile Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/ios">
                                Hire iOS Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/android">
                                Hire Android Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/flutter">
                                Hire Flutter Developers
                              </a>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <label
                          className="a-label__chevron"
                          htmlFor="Hire Frontend Developers"
                        >
                          Hire Frontend Developers
                        </label>
                        <input
                          type="checkbox"
                          id="Hire Frontend Developers"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Hire Frontend Developers"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Frontend Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/angular">
                                Hire Angular Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/react">
                                Hire React JS Developers
                              </a>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <label
                          className="a-label__chevron"
                          htmlFor="Hire Open Source Developers"
                        >
                          Hire Open Source Developers
                        </label>
                        <input
                          type="checkbox"
                          id="Hire Open Source Developers"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Hire Open Source Developers"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Open Source Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/wordpress">
                                Hire WordPress Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/shopify">
                                Hire Shopify Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/magento">
                                Hire Magento Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/opencart">
                                Hire OpenCart Developers
                              </a>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <label
                          className="a-label__chevron"
                          htmlFor="Hire Cross-PlathtmlForm Developers"
                        >
                          Hire Cross-PlathtmlForm Developers
                        </label>
                        <input
                          type="checkbox"
                          id="Hire Cross-PlathtmlForm Developers"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Hire Cross-PlathtmlForm Developers"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Cross-PlathtmlForm Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/ionic">
                                Hire Ionic Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/reactnative">
                                Hire React Native Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/pwa">
                                Hire PWA Developers
                              </a>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <label className="a-label__chevron" htmlFor="Solutions">
                    Solutions
                  </label>
                  <input
                    type="checkbox"
                    id="Solutions"
                    name="item-2"
                    className="m-menu__checkbox"
                  />
                  <div className="m-menu">
                    <div className="m-menu__header">
                      <label className="m-menu__toggle" htmlFor="Solutions">
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </label>
                      <span>Solutions</span>
                    </div>
                    <ul>
                      <li>
                        <label
                          className="a-label__chevron"
                          htmlFor="Customized Solutions"
                        >
                          Customized Solutions
                        </label>
                        <input
                          type="checkbox"
                          id="Customized Solutions"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Customized Solutions"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Customized Solutions</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/solution/school">School management</a>
                            </li>
                            <li>
                              <a href="/solution/tailor">
                                Tailor Billing Application
                              </a>
                            </li>

                            <li>
                              <a href="/solution/recruitment">
                                Recruitment billing application
                              </a>
                            </li>
                            <li>
                              <a href="/solution/crm">CRM application</a>
                            </li>
                            <li>
                              <a href="/solution/billing">
                                Billing application
                              </a>
                            </li>
                            <li>
                              <a href="/solution/pos">POS</a>
                            </li>
                            <li>
                              <a href="/solution/restaurant">
                                Multi restaurant management
                              </a>
                            </li>
                            <li>
                              <a href="/solution/car">Car rental system</a>
                            </li>
                            <li>
                              <a href="/solution/hrms">Hrms payroll system</a>
                            </li>
                            <li>
                              <a href="/solution/onlinefood">
                                Online food ordering system
                              </a>
                            </li>
                            <li>
                              <a href="/solution/hospital">
                                Hospital management system
                              </a>
                            </li>
                            <li>
                              <a href="/solution/job">Job portal</a>
                            </li>
                            <li>
                              <a href="/solution/lawyer">
                                Lawyer booking solution
                              </a>
                            </li>
                            <li>
                              <a href="/solution/chat">Chat application</a>
                            </li>
                            <li>
                              <a href="/solution/hotel">Hotel booking system</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <label className="a-label__chevron" htmlFor="Our Work">
                    Our Work
                  </label>
                  <input
                    type="checkbox"
                    id="Our Work"
                    name="item-2"
                    className="m-menu__checkbox"
                  />
                  <div className="m-menu">
                    <div className="m-menu__header">
                      <label className="m-menu__toggle" htmlFor="Our Work">
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </label>
                      <span>Our Work</span>
                    </div>
                    <ul>
                      {/* <li>
                        <a href="/">Testimonial</a>
                      </li> */}
                      <li>
                        <a href="/casestudy">Case Study</a>
                      </li>
                      <li>
                        <a href="/portfolio">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <label className="a-label__chevron" htmlFor="Company">
                    Company
                  </label>
                  <input
                    type="checkbox"
                    id="Company"
                    name="item-2"
                    className="m-menu__checkbox"
                  />
                  <div className="m-menu">
                    <div className="m-menu__header">
                      <label className="m-menu__toggle" htmlFor="Company">
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </label>
                      <span>Company</span>
                    </div>
                    <ul>
                      <li>
                        <label className="a-label__chevron" htmlFor="Overview">
                          Overview
                        </label>
                        <input
                          type="checkbox"
                          id="Overview"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Overview"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Overview</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/about">About Us</a>
                            </li>

                            <li>
                              <a href="/methodology">Development Methodology</a>
                            </li>
                            <li>
                              <a href="/certifications">Certifications</a>
                            </li>
                            {/* <li>
                              <a href="/career.htm">Career</a>
                            </li> */}
                            <li>
                              <a href="/contact">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <label className="a-label__chevron" htmlFor="Insights">
                          Insights
                        </label>
                        <input
                          type="checkbox"
                          id="Insights"
                          name="item-2"
                          className="m-menu__checkbox"
                        />
                        <div className="m-menu">
                          <div className="m-menu__header">
                            <label
                              className="m-menu__toggle"
                              htmlFor="Insights"
                            >
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Insights</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/faq">FAQs</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <div className="mt-5 ml-3">
                  <Button url="/inquiry" title="Let's Talk" button="button" />
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
