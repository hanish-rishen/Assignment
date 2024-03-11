import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function DesktopPage() {
  return (
    <>
      <Helmet>
        <title>Assignment</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full overflow-auto bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[1362px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-center w-full p-[11px] bg-black-900">
              <div className="flex flex-row sm:flex-col justify-start w-[42%] mt-0.5 gap-[11px] px-[3px] sm:gap-5">
                <Text size="s" as="p" className="mt-px sm:mt-0 !text-white-A700_99 !font-dmsans">
                  This page is included in a free SaaS Website Kit.
                </Text>
                <div className="flex flex-row justify-start items-center w-[34%] sm:w-full gap-1">
                  <a href="#">
                    <Text size="s" as="p" className="!text-white-A700 !font-dmsans">
                      View the complete Kit
                    </Text>
                  </a>
                  <Img src="images/img_icons.svg" alt="icons_one" className="h-[16px] w-[16px]" />
                </div>
              </div>
            </div>
            <div className="h-[925px] w-full relative">
              <Img
                src="images/img_half_torus_1.png"
                alt="halftorusone"
                className="h-[318px] w-[21%] sm:w-full bottom-[3%] right-0 m-auto object-cover absolute"
              />
              <div className="flex flex-row justify-center w-full bottom-0 right-0 left-0 m-auto absolute">
                <div className="h-[132px] w-full relative">
                  <div className="flex flex-row md:flex-col justify-between items-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto md:gap-10 absolute">
                    <Img
                      src="images/img_acme_1.png"
                      alt="acmeone_one"
                      className="w-[15%] md:w-full md:h-[32px] object-cover"
                    />
                    <Img
                      src="images/img_quantum_1.png"
                      alt="quantumone_one"
                      className="w-[13%] md:w-full md:h-[32px] object-cover"
                    />
                    <Img
                      src="images/img_echo_1.png"
                      alt="echoone_one"
                      className="w-[16%] md:w-full md:h-[28px] object-cover"
                    />
                    <Img
                      src="images/img_celestia_1.png"
                      alt="celestiaone_one"
                      className="w-[12%] md:w-full md:h-[28px] object-cover"
                    />
                    <Img
                      src="images/img_pulse_1.png"
                      alt="pulseone_one"
                      className="w-[10%] md:w-full md:h-[22px] object-cover"
                    />
                    <Img
                      src="images/img_apex_1.png"
                      alt="apexone_one"
                      className="w-[9%] md:w-full md:h-[27px] object-cover"
                    />
                  </div>
                  <div className="justify-center h-[132px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gradient3 absolute" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 m-auto absolute">
                <header className="flex flex-row justify-center items-center w-full p-[15px] bg-blue-50">
                  <div className="flex flex-row md:flex-col justify-between items-center w-full my-1 md:gap-10">
                    <div className="flex flex-row justify-start items-center gap-2">
                      <Img
                        src="images/img_logo_default.png"
                        alt="logodefault_one"
                        className="w-[40px] md:h-auto sm:w-full object-cover"
                      />
                      <Text size="s" as="p">
                        made by
                      </Text>
                      <Img src="images/img_black_horizontal.svg" alt="black_one" className="h-[22px]" />
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center gap-6 sm:gap-5">
                      <a href="#">
                        <Text as="p" className="!text-black-900_99 tracking-[-0.16px]">
                          About
                        </Text>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-black-900_99 tracking-[-0.16px]">
                          Features
                        </Text>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-black-900_99 tracking-[-0.16px]">
                          Customers
                        </Text>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-black-900_99 tracking-[-0.16px]">
                          Updates
                        </Text>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-black-900_99 tracking-[-0.16px]">
                          Help
                        </Text>
                      </a>
                      <Button shape="round" className="min-w-[115px]">
                        Get for free
                      </Button>
                    </div>
                  </div>
                </header>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-end w-full p-[5px] bg-gradient4">
                      <div className="flex flex-col items-start justify-start w-[97%] mt-1 mb-[37px]">
                        <Img
                          src="images/img_cylinder_1.png"
                          alt="cylinderone_one"
                          className="w-[19%] md:h-auto sm:w-full ml-[402px] md:ml-5 z-[1] object-cover"
                        />
                        <div className="flex flex-row md:flex-col justify-start items-start w-full mt-[-186px] md:gap-5">
                          <div className="flex flex-col items-start justify-start w-[45%] md:w-full mt-[85px] gap-[29px] md:mt-0">
                            <a
                              href="#"
                              className="px-[13px] py-1.5 border-gray-900_19 border border-solid rounded-[10px]"
                            >
                              <Text size="xs" as="p" className="tracking-[-0.33px]">
                                Version 2.0 is here
                              </Text>
                            </a>
                            <Heading size="xl" as="h1" className="tracking-[-5.85px] bg-gradient bg-clip-text">
                              Pathway to productivity
                            </Heading>
                            <Text size="lg" as="p" className="w-[90%] !text-gray-900 tracking-[-0.79px]">
                              Celebrate the joy of accomplishment with an app designed to track your progress, motivate
                              your efforts, and celebrate your successes.
                            </Text>
                            <div className="flex flex-row justify-start w-[47%] md:w-full">
                              <div className="flex flex-row justify-start items-center w-full gap-[17px]">
                                <Button shape="round" className="min-w-[115px]">
                                  Get for free
                                </Button>
                                <div className="flex flex-row justify-start w-[45%] gap-1 py-[9px]">
                                  <a href="#">
                                    <Text as="p" className="tracking-[-0.32px] !font-medium">
                                      Learn more
                                    </Text>
                                  </a>
                                  <Img
                                    src="images/img_icons_black_900.svg"
                                    alt="icons_three"
                                    className="h-[20px] w-[20px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_visual.png"
                            alt="visual_one"
                            className="w-[648px] md:h-auto ml-[-7px] md:ml-0 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1495px] w-full mt-[-2px] z-[1] relative">
              <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[49px] m-auto md:p-5 bg-gradient1 absolute">
                <div className="flex flex-col items-center justify-start w-full mt-[63px] mb-[57px] gap-10">
                  <div className="flex flex-col items-center justify-start w-[50%] md:w-full gap-5">
                    <a href="#" className="px-[13px] py-[5px] border-gray-900_19 border border-solid rounded-[10px]">
                      <Text size="xs" as="p" className="tracking-[-0.33px]">
                        Boost your productivity
                      </Text>
                    </a>
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                      <Heading
                        size="lg"
                        as="h2"
                        className="tracking-[-3.24px] text-center bg-gradient bg-clip-text !leading-[60px]"
                      >
                        A more effective way to track progress
                      </Heading>
                      <Text size="lg" as="p" className="!text-gray-900 tracking-[-0.79px] text-center">
                        Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just
                        minutes with the set of free components for Framer.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-10">
                    <Img
                      src="images/img_product_image.png"
                      alt="productimage"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-row md:flex-col w-full gap-[19px]">
                      <div className="flex flex-col items-start justify-center w-[24%] md:w-full py-10 sm:py-5">
                        <Img
                          src="images/img_icons_black_900_24x24.svg"
                          alt="image"
                          className="h-[24px] w-[24px] ml-px md:ml-0"
                        />
                        <Heading as="h3" className="mt-[11px] ml-px md:ml-0 !text-black-900 tracking-[-0.56px]">
                          Integration ecosystem
                        </Heading>
                        <div className="flex flex-col items-start justify-start w-full mt-[7px] gap-2.5">
                          <Text as="p" className="ml-px md:ml-0 tracking-[-0.16px] !leading-[23px]">
                            <>
                              Track your progress and motivate
                              <br />
                              your efforts everyday.
                            </>
                          </Text>
                          <div className="flex flex-row justify-start gap-1">
                            <a href="#">
                              <Text as="p" className="tracking-[-0.16px]">
                                Learn more
                              </Text>
                            </a>
                            <Img
                              src="images/img_icons_black_900.svg"
                              alt="learn_more_one"
                              className="h-[20px] w-[20px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center w-[24%] md:w-full py-10 sm:py-5">
                        <Img
                          src="images/img_icons_24x24.svg"
                          alt="icons_one"
                          className="h-[24px] w-[24px] ml-px md:ml-0"
                        />
                        <Heading as="h4" className="mt-[11px] ml-px md:ml-0 !text-black-900 tracking-[-0.56px]">
                          Goal setting and tracking
                        </Heading>
                        <div className="flex flex-col items-start justify-start w-full mt-[7px] gap-2.5">
                          <Text as="p" className="ml-px md:ml-0 tracking-[-0.16px] !leading-[23px]">
                            <>
                              Set and track goals with
                              <br />
                              manageable task breakdowns.
                            </>
                          </Text>
                          <div className="flex flex-row justify-start gap-1">
                            <a href="#">
                              <Text as="p" className="tracking-[-0.16px]">
                                Learn more
                              </Text>
                            </a>
                            <Img src="images/img_icons_black_900.svg" alt="icons_three" className="h-[20px] w-[20px]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center w-[24%] md:w-full gap-[9px] py-10 sm:py-5">
                        <Img src="images/img_icons_1.svg" alt="icons_one" className="h-[24px] w-[24px] ml-px md:ml-0" />
                        <Heading as="h5" className="ml-px md:ml-0 !text-black-900 tracking-[-0.56px]">
                          Secure data encryption
                        </Heading>
                        <div className="flex flex-col items-start justify-start w-full gap-2.5">
                          <Text as="p" className="ml-px md:ml-0 tracking-[-0.16px] !leading-[23px]">
                            <>
                              Ensure your data’s safety with top-
                              <br />
                              tier encryption.
                            </>
                          </Text>
                          <div className="flex flex-row justify-start gap-1">
                            <a href="#">
                              <Text as="p" className="tracking-[-0.16px]">
                                Learn more
                              </Text>
                            </a>
                            <Img src="images/img_icons_black_900.svg" alt="icons_three" className="h-[20px] w-[20px]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center w-[24%] md:w-full gap-[9px] py-10 sm:py-5">
                        <Img src="images/img_icons_2.svg" alt="icons_one" className="h-[24px] w-[24px] ml-px md:ml-0" />
                        <Heading as="h6" className="ml-px md:ml-0 !text-black-900 tracking-[-0.56px]">
                          Customizable notifications
                        </Heading>
                        <div className="flex flex-col items-start justify-start w-full gap-2.5">
                          <Text as="p" className="ml-px md:ml-0 tracking-[-0.16px] !leading-[23px]">
                            <>
                              Get alerts on tasks and deadlines
                              <br />
                              that matter most.
                            </>
                          </Text>
                          <div className="flex flex-row justify-start gap-1">
                            <a href="#">
                              <Text as="p" className="tracking-[-0.16px]">
                                Learn more
                              </Text>
                            </a>
                            <Img src="images/img_icons_black_900.svg" alt="icons_three" className="h-[20px] w-[20px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_torus_1.png"
                alt="torusone_one"
                className="h-[248px] w-[14%] sm:w-full bottom-[29%] left-0 m-auto object-cover absolute"
              />
              <Img
                src="images/img_pyramid_1.png"
                alt="pyramidone_one"
                className="h-[262px] w-[16%] sm:w-full right-0 top-[35%] m-auto object-cover absolute"
              />
            </div>
            <div className="flex flex-row justify-center w-full px-14 py-[92px] md:p-5">
              <div className="flex flex-col items-center justify-start w-[92%] mb-1 gap-[60px]">
                <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-5">
                  <a
                    href="#"
                    className="pl-[13px] pr-[30px] py-[5px] sm:pr-5 border-gray-900_19 border border-solid rounded-[10px]"
                  >
                    <Text size="xs" as="p" className="tracking-[-0.33px]">
                      Everything you need
                    </Text>
                  </a>
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <Heading
                      size="lg"
                      as="h1"
                      className="tracking-[-3.24px] text-center bg-gradient bg-clip-text !leading-[60px]"
                    >
                      Streamlined for easy management
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-900 tracking-[-0.79px] text-center">
                      Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get
                      reminders, and see your progress simply and quickly.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col w-full gap-5">
                  <div className="flex flex-col items-center justify-start w-[49%] md:w-full p-10 sm:p-5 border-gray-900_14 border border-solid shadow-sm rounded-[20px]">
                    <Img src="images/img_cube_helix_1.png" alt="image" className="w-[329px] md:h-auto object-cover" />
                    <div className="flex flex-col items-center justify-start w-[95%] md:w-full pt-[15px] gap-2.5 px-[15px]">
                      <Heading size="md" as="h4" className="tracking-[-1.04px] text-center bg-gradient bg-clip-text">
                        Integration ecosystem
                      </Heading>
                      <Text as="p" className="w-[98%] !text-gray-900 tracking-[-0.16px] text-center !leading-[23px]">
                        <>
                          Enhance your productivity by connecting <br />
                          with your favorite tools, keeping all your
                          <br /> essentials in one place.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[49%] md:w-full p-10 sm:p-5 border-gray-900_14 border border-solid shadow-sm rounded-[20px]">
                    <Img
                      src="images/img_cube_helix_1_329x329.png"
                      alt="cubehelixone"
                      className="w-[329px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[95%] md:w-full pt-[15px] gap-2.5 px-[15px]">
                      <Heading size="md" as="h4" className="tracking-[-1.04px] text-center bg-gradient bg-clip-text">
                        Goal setting and tracking
                      </Heading>
                      <Text as="p" className="w-[98%] !text-gray-900 tracking-[-0.16px] text-center !leading-[23px]">
                        Define and track your goals, breaking down objectives into achievable tasks to keep your targets
                        in sight.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[92%] md:w-full mt-[75px] gap-10">
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-5">
                <a href="#" className="px-[13px] py-[5px] border-gray-900_19 border border-solid rounded-[10px]">
                  <Text size="xs" as="p" className="tracking-[-0.33px]">
                    Boost your productivity
                  </Text>
                </a>
                <div className="flex flex-col items-center justify-start w-full gap-5">
                  <Heading
                    size="lg"
                    as="h1"
                    className="tracking-[-3.24px] text-center bg-gradient bg-clip-text !leading-[60px]"
                  >
                    A more effective way to track progress
                  </Heading>
                  <Text size="lg" as="p" className="!text-gray-900 tracking-[-0.79px] text-center">
                    Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just
                    minutes with the set of free components for Framer.
                  </Text>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[25px] md:gap-5">
                <div className="flex flex-row md:flex-col w-[66%] md:w-full gap-[25px]">
                  <div className="flex flex-col items-start justify-center w-[49%] md:w-full mt-[85px] mb-2.5 gap-[30px] p-[39px] md:mt-0 sm:p-5 border-blue_gray-50 border border-solid bg-white-A700 shadow-md rounded-[24px]">
                    <Heading as="h6" className="!text-blue_gray-500 tracking-[-0.56px]">
                      Free
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-[55%] md:w-full gap-1">
                      <Heading size="lg" as="h1" className="!text-black-900 tracking-[-3.24px]">
                        $0
                      </Heading>
                      <div className="flex flex-row justify-start w-[52%]">
                        <Heading as="h6" className="!text-blue_gray-500 tracking-[-0.56px]">
                          /monthly
                        </Heading>
                      </div>
                    </div>
                    <Button shape="round" className="w-full sm:px-5">
                      Get started for free
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[84%] md:w-full mb-1 gap-5">
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_3.svg" alt="image" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p">
                          Up to 5 project members
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_3.svg" alt="image_one" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p">
                          Unlimited tasks and projects
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_3.svg" alt="2gb_storage_one" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p">
                          2GB storage
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_3.svg" alt="integrations" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p">
                          Integrations
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_3.svg" alt="basic_support" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p">
                          Basic support
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] md:w-full gap-[30px] p-10 sm:p-5 bg-black-900 shadow-md rounded-[24px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <Heading as="h6" className="!text-white-A700_99 tracking-[-0.56px]">
                        Pro
                      </Heading>
                      <a
                        href="#"
                        className="px-[13px] py-[7px] bg-gradient5 bg-clip-text border-white-A700_33 border border-solid rounded-[10px]"
                      >
                        <Text size="xs" as="p" className="!text-transparent tracking-[-0.33px]">
                          Most Popular
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[54%] md:w-full gap-1">
                      <Heading size="lg" as="h1" className="!text-white-A700 tracking-[-3.24px]">
                        $9
                      </Heading>
                      <div className="flex flex-row justify-start w-[53%]">
                        <Heading as="h6" className="!text-gray-500 tracking-[-0.56px]">
                          /monthly
                        </Heading>
                      </div>
                    </div>
                    <Button color="white_A700" shape="round" className="w-full sm:px-5">
                      Sign up now
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[85%] md:w-full mb-[3px] gap-5">
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_white_a700.svg" alt="icons_one" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="!text-white-A700">
                          Up to 50 project members
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_white_a700.svg" alt="icons_three" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="!text-white-A700">
                          Unlimited tasks and projects
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_white_a700.svg" alt="icons_five" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="!text-white-A700">
                          50GB storage
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_white_a700.svg" alt="icons_seven" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="!text-white-A700">
                          Integrations
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_white_a700.svg" alt="icons_nine" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="!text-white-A700">
                          Priority support
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_white_a700.svg" alt="icons_eleven" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="!text-white-A700">
                          Advanced support
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4">
                        <Img src="images/img_icons_white_a700.svg" alt="icons_thirteen" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="!text-white-A700">
                          Export support
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-[32%] md:w-full gap-[30px] p-[39px] sm:p-5 border-blue_gray-50 border border-solid bg-white-A700 shadow-md rounded-[24px]">
                  <Heading as="h6" className="!text-blue_gray-500 tracking-[-0.56px]">
                    Business
                  </Heading>
                  <div className="flex flex-row justify-start items-center w-[59%] md:w-full gap-1">
                    <Heading size="lg" as="h1" className="!text-black-900 tracking-[-3.24px]">
                      $19
                    </Heading>
                    <div className="flex flex-row justify-start w-[48%]">
                      <Heading as="h6" className="!text-blue_gray-500 tracking-[-0.56px]">
                        /monthly
                      </Heading>
                    </div>
                  </div>
                  <Button shape="round" className="w-full sm:px-5">
                    Sign up now
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[84%] md:w-full mb-1 gap-5">
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_five" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        Up to 5 project members
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_seven" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        Unlimited tasks and projects
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_nine" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        200GB storage
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_eleven" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        Integrations
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_thirteen" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        Dedicated account manager
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_fifteen" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        Custom fields
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_seventeen" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        Advanced analytics
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_nineteen" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        Export capabilities
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons_twentyone" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        API access
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="icons" className="h-[24px] w-[24px]" />
                      <Text size="s" as="p">
                        Advanced security features
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1055px] w-full mt-[79px] py-[59px] md:py-5 relative">
              <div className="h-[786px] w-full bottom-[9%] right-0 left-0 m-auto bg-gradient2 absolute" />
              <div className="flex flex-col items-center justify-start w-[85%] gap-[39px] top-[6%] right-0 left-0 m-auto absolute">
                <div className="flex flex-col items-center justify-start w-[45%] md:w-full gap-[19px]">
                  <a href="#" className="px-[13px] py-[7px] border-gray-900_19 border border-solid rounded-[10px]">
                    <Text size="xs" as="p" className="tracking-[-0.33px]">
                      Testimonials
                    </Text>
                  </a>
                  <div className="flex flex-row justify-center w-full">
                    <Heading size="lg" as="h1" className="tracking-[-3.24px] text-center bg-gradient bg-clip-text">
                      What our users say
                    </Heading>
                  </div>
                </div>
                <div className="justify-center w-full gap-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid">
                  <div className="flex flex-col items-start justify-start w-full gap-[19px] p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my
                      attention.
                    </Text>
                    <div className="flex flex-row justify-start w-[78%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[74%] gap-0.5">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Alex Rivera
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @jamietechguru00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-5 p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      I was amazed at how quickly we were able to integrate this app into our workflow.
                    </Text>
                    <div className="flex flex-row justify-start w-[63%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1_42x42.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] gap-px">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Casey Jordan
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @caseyj
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[19px] p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      Adopting this app for our team has streamlined our project management and improved communication
                      across the board.{" "}
                    </Text>
                    <div className="flex flex-row justify-start w-[67%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1_1.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[70%] gap-0.5">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Jordan Patels
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @jpatelsdesign
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-5 p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      Planning and executing events has never been easier. This app helps me keep track of all the
                      moving parts, ensuring nothing slips through the cracks.
                    </Text>
                    <div className="flex flex-row justify-start w-[60%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1_2.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[66%] gap-px">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Taylor Kim
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @taylorkimm
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[19px] p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      Our team’s productivity has skyrocketed since we started using this tool.{" "}
                    </Text>
                    <div className="flex flex-row justify-start w-[55%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1_3.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[63%] gap-0.5">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Josh Smith
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @jjsmith
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[19px] p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      With this app, we can easily assign tasks, track progress, and manage documents all in one place.
                    </Text>
                    <div className="flex flex-row justify-start w-[76%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1_4.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[73%] gap-0.5">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Sam Dawson
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @dawsontechtips
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-5 p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      This app has completely transformed how I manage my projects and deadlines.
                    </Text>
                    <div className="flex flex-row justify-start w-[73%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1_5.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[72%] gap-px">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Morgan Lee
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @morganleewhiz
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-5 p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      Its user-friendly interface and robust features support our diverse needs.
                    </Text>
                    <div className="flex flex-row justify-start w-[62%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1_6.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[67%] gap-px">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Casey Harper
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @casey09
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-5 p-10 sm:p-5 border-gray-200 border border-solid bg-white-A700 shadow-xs rounded-[20px]">
                    <Text as="p" className="tracking-[-0.16px] !leading-[23px]">
                      The customizability and integration capabilities of this app are top-notch.
                    </Text>
                    <div className="flex flex-row justify-start w-[59%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_1_7.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-[66%] gap-px">
                        <Text as="p" className="tracking-[-0.32px] text-center !font-medium">
                          Riley Smith
                        </Text>
                        <Text as="p" className="tracking-[-0.16px] text-center">
                          @rileysmith1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full bg-white-A700">
              <div className="flex flex-row justify-center w-full md:h-auto bg-gradient1">
                <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[11px] md:gap-5">
                  <Img
                    src="images/img_emojistar_1.png"
                    alt="image"
                    className="w-[29%] md:w-full md:h-[357px] object-cover"
                  />
                  <div className="flex flex-row justify-start w-[71%] md:w-full mt-[113px] md:mt-0">
                    <div className="flex flex-row md:flex-col justify-start items-start w-full md:gap-5">
                      <div className="flex flex-col items-center justify-start w-[59%] md:w-full mt-[18px] gap-10 md:mt-0">
                        <div className="flex flex-col items-center justify-start w-full gap-[9px]">
                          <Heading
                            size="lg"
                            as="h1"
                            className="tracking-[-3.24px] text-center bg-gradient bg-clip-text"
                          >
                            Sign up for free today
                          </Heading>
                          <Text
                            as="p"
                            className="w-[91%] !text-gray-900 tracking-[-0.16px] text-center !leading-[23px]"
                          >
                            Celebrate the joy of accomplishment with an app designed to track your progress and motivate
                            your efforts.
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[49%] md:w-full gap-[17px]">
                          <Button shape="round" className="min-w-[115px]">
                            Get for free
                          </Button>
                          <div className="flex flex-row justify-start w-[45%] gap-1 py-[9px]">
                            <a href="#">
                              <Text as="p" className="tracking-[-0.32px] !font-medium">
                                Learn more
                              </Text>
                            </a>
                            <Img src="images/img_icons_black_900.svg" alt="icons" className="h-[20px] w-[20px]" />
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_helix2_1.png"
                        alt="helix2one_one"
                        className="w-[43%] md:w-full md:h-[359px] ml-[-10px] md:ml-0 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full pb-1.5 bg-white-A700">
              <footer className="flex justify-center items-center w-full p-2 bg-black-900">
                <div className="flex flex-row md:flex-col justify-between items-center w-[99%] my-8 md:gap-10">
                  <div className="flex flex-col items-start justify-start w-[21%] md:w-full gap-[111px]">
                    <div className="flex flex-col items-start justify-start w-full gap-5">
                      <Img
                        src="images/img_logo_default.png"
                        alt="logodefault"
                        className="w-[40px] md:h-auto sm:w-full object-cover"
                      />
                      <Text size="s" as="p" className="!text-gray-400">
                        Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start gap-[11px]">
                      <Img src="images/img_socials.svg" alt="socials_one" className="h-[24px] w-[24px]" />
                      <Img src="images/img_socials_gray_600.svg" alt="socials_three" className="h-[24px] w-[24px]" />
                      <Img
                        src="images/img_socials_gray_600_24x24.svg"
                        alt="socials_five"
                        className="h-[24px] w-[24px]"
                      />
                      <Img src="images/img_socials_24x24.svg" alt="socials_seven" className="h-[24px] w-[24px]" />
                      <Img src="images/img_socials_1.svg" alt="socials_nine" className="h-[24px] w-[24px]" />
                      <Img src="images/img_socials_2.svg" alt="socials_eleven" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-start w-[36%] md:w-full">
                    <div className="flex flex-col items-start justify-start gap-5">
                      <Heading size="xs" as="p" className="!text-white-A700">
                        Product
                      </Heading>
                      <ul className="flex flex-col items-start justify-start w-full gap-5">
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Features
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Integrations
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Updates
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              FAQ
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Pricing
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[16%] gap-[18px]">
                      <Heading size="xs" as="p" className="!text-white-A700">
                        Company
                      </Heading>
                      <ul className="flex flex-col items-start justify-start w-full gap-[19px]">
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              About
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Blog
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Careers
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Manifesto
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Press
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Contact
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[19%] gap-[21px]">
                      <Heading size="xs" as="p" className="!text-white-A700">
                        Resources
                      </Heading>
                      <ul className="flex flex-col items-start justify-start w-full gap-[19px]">
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Examples
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Community
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Guides
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Docs
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[19px]">
                      <Heading size="xs" as="p" className="!text-white-A700">
                        Legal
                      </Heading>
                      <ul className="flex flex-col items-start justify-start w-full gap-5">
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Privacy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Terms
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="s" as="p" className="!text-gray-600_01">
                              Security
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
