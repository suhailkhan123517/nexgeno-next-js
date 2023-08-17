import React from "react";
import "./MobileNav.css";
import Image from "next/image";

export default function MobileNav() {
  return (
    <>
      <div className="mobilenav">
        <div className="wrapper">
          <nav>
            <div className="logo">
              <Image
                src="/images/logo.png"
                width={200}
                height={200}
                alt="Nexgeno Logo"
              />
            </div>
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
                // stroke-width="2"
                // stroke-linecap="butt"
                // stroke-linejoin="arcs"
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
                    // stroke-width="2"
                    // stroke-linecap="butt"
                    // stroke-linejoin="arcs"
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
                          // stroke-width="2"
                          // stroke-linecap="butt"
                          // stroke-linejoin="arcs"
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Offering</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/services/web-application-development.htm">
                                Application Development
                              </a>
                            </li>
                            <li>
                              <a href="/services/digital-transhtmlFormation.htm">
                                Digital TranshtmlFormation
                              </a>
                            </li>
                            <li>
                              <a href="/services/frontend-development.htm">
                                Front-end Development
                              </a>
                            </li>
                            <li>
                              <a href="/services/product-prototyping.htm">
                                Product Prototyping
                              </a>
                            </li>
                            <li>
                              <a href="/services/ecommerce-deployment.htm">
                                Ecommerce Deployment
                              </a>
                            </li>
                            <li>
                              <a href="/services/cloud-solutions.htm">
                                Cloud Solutions AWS, Azure & Google{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/services/mobile-app-development.htm">
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Industry</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/industries/educationl-earning.htm">
                                Education / E-Learning
                              </a>
                            </li>
                            <li>
                              <a href="/industries/retail.htm">Retail</a>
                            </li>
                            <li>
                              <a href="/industries/logistics-distribution.htm">
                                Logistics & Distribution
                              </a>
                            </li>
                            <li>
                              <a href="/industries/finTECH.htm">FinTECH</a>
                            </li>
                            <li>
                              <a href="/industries/manufacturing.htm">
                                Manufacturing
                              </a>
                            </li>
                            <li>
                              <a href="/industries/events.htm">Events</a>
                            </li>
                            <li>
                              <a href="/industries/recruitment.htm">
                                Recruitment
                              </a>
                            </li>
                            <li>
                              <a href="/industries/real-estate.htm">
                                Real Estate
                              </a>
                            </li>
                            <li>
                              <a href="/industries/restaurent.htm">
                                Restaurant
                              </a>
                            </li>
                            <li>
                              <a href="/industries/healthcare.htm">
                                Health Care
                              </a>
                            </li>
                            <li>
                              <a href="/industries/hospitality.htm">
                                Hospitality
                              </a>
                            </li>
                            <li>
                              <a href="/industries/pharmaceutical.htm">
                                Pharmaceutical
                              </a>
                            </li>
                            <li>
                              <a href="/industries/eloctronics.htm">
                                Electronics
                              </a>
                            </li>
                            <li>
                              <a href="/industries/travel-tours.htm">
                                Travel & Tours
                              </a>
                            </li>
                            <li>
                              <a href="/industries/service-provider.htm">
                                Service Provider
                              </a>
                            </li>
                            <li>
                              <a href="/industries/hospitals.htm">Hospitals</a>
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Service Models</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/industries/delivery-models.htm">
                                Delivery Models
                              </a>
                            </li>
                            <li>
                              <a href="/industries/engagementmodels.htm">
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
                          // stroke-width="2"
                          // stroke-linecap="butt"
                          // stroke-linejoin="arcs"
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Web Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/hire-php-developers.htm">
                                Hire PHP Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-laravel-developers.htm">
                                Hire Laravel Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-codeigniter-developers.htm">
                                Hire CodeIgniter Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-expressjs-developer-expert.htm">
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Mobile Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/hire-iphone-app-developers.htm">
                                Hire iOS Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-android-app-developers.htm">
                                Hire Android Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-flutter-developers.htm">
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Frontend Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/hire-angular-js-developer.htm">
                                Hire Angular Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-reactjs-developers.htm">
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Open Source Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/hire-wordpress-developers.htm">
                                Hire WordPress Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-shopify-developer-designer-india.htm">
                                Hire Shopify Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-magento-developers.htm">
                                Hire Magento Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-opencart-developers.htm">
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Hire Cross-PlathtmlForm Developers</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/hiredeveloper/hire-Ionic-developers.htm">
                                Hire Ionic Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-reactNative-developers.htm">
                                Hire React Native Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-PWA-developers.htm">
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
                          // stroke-width="2"
                          // stroke-linecap="butt"
                          // stroke-linejoin="arcs"
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Customized Solutions</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/solution/school-management.htm">
                                School management
                              </a>
                            </li>
                            <li>
                              <a href="/solution/tailor-billing-pplication.htm">
                                Tailor Billing Application
                              </a>
                            </li>

                            <li>
                              <a href="/solution/recruitment-billing-application.htm">
                                Recruitment billing application
                              </a>
                            </li>
                            <li>
                              <a href="/solution/crm.htm">CRM application</a>
                            </li>
                            <li>
                              <a href="/solution/billing-application.htm">
                                Billing application
                              </a>
                            </li>
                            <li>
                              <a href="/solution/pos.htm">POS</a>
                            </li>
                            <li>
                              <a href="/solution/restaurant.htm">
                                Multi restaurant management
                              </a>
                            </li>
                            <li>
                              <a href="/solution/car-rental-system.htm">
                                Car rental system
                              </a>
                            </li>
                            <li>
                              <a href="/solution/hrms-payroll-system.htm">
                                Hrms payroll system
                              </a>
                            </li>
                            <li>
                              <a href="/solution/online-food-ordering-system.htm">
                                Online food ordering system
                              </a>
                            </li>
                            <li>
                              <a href="/solution/hospital-management-system.htm">
                                Hospital management system
                              </a>
                            </li>
                            <li>
                              <a href="/solution/job-portal.htm">Job portal</a>
                            </li>
                            <li>
                              <a href="/solution/lawyer-booking-solution.htm">
                                Lawyer booking solution
                              </a>
                            </li>
                            <li>
                              <a href="/solution/chat-application.htm">
                                Chat application
                              </a>
                            </li>
                            <li>
                              <a href="/solution/hotel-booking-system.htm">
                                Hotel booking system
                              </a>
                            </li>
                            <li className="mb-5">
                              <h6 className="solution_button">
                                Get a Custom Solution Now
                              </h6>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <h6 className="solution_button">
                          Get a Custom Solution Now
                        </h6>
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
                          // stroke-width="2"
                          // stroke-linecap="butt"
                          // stroke-linejoin="arcs"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </label>
                      <span>Our Work</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/">Testimonial</a>
                      </li>
                      <li>
                        <a href="/casestudy.htm">Case Study</a>
                      </li>
                      <li>
                        <a href="/portfolio-list.htm">Portfolio</a>
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
                          // stroke-width="2"
                          // stroke-linecap="butt"
                          // stroke-linejoin="arcs"
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Overview</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/about-us.htm">About Us</a>
                            </li>

                            <li>
                              <a href="/devmethology.htm">
                                Development Methodology
                              </a>
                            </li>
                            <li>
                              <a href="/certifications.htm">Certifications</a>
                            </li>
                            <li>
                              <a href="/career.htm">Career</a>
                            </li>
                            <li>
                              <a href="/contact.htm">Contact Us</a>
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
                                // stroke-width="2"
                                // stroke-linecap="butt"
                                // stroke-linejoin="arcs"
                              >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                              </svg>
                            </label>
                            <span>Insights</span>
                          </div>
                          <ul>
                            <li>
                              <a href="/faq.htm">FAQs</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
