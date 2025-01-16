import React, { useState } from "react";

function DMAgencyQuestions() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  function handleFeatureClick(index) {
    setSelectedFeature((prev) => (prev === index ? null : index));
  }

  return (
    <div className="p-4 mx-auto mt-16 mb-10 space-y-8 max-w-7xl xl:p-16 xxl:p-auto">
      {/* Section Heading */}
      <h2 className="mb-16 text-3xl font-semibold text-center text-gray-800 sm:text-4xl lg:text-5xl">
      Digital Marketing Agency  <span className="text-[#7D00C5]">questions </span>
      </h2>

      {/* Features in two columns */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
        <ul className="space-y-8">
          {/* Question 1 */}
          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(1)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 1 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              What is a Digital Marketing Agency?
            </button>
            {selectedFeature === 1 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 1 ? 1 : 0,
                  transform:
                    selectedFeature === 1
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Overview
                </h3>
                <p>
                  A digital marketing agency, such as Asipiya Soft Solution, is a
                  specialised company that focuses on promoting businesses in the online
                  space. It offers comprehensive digital marketing services that
                  encompass a range of strategies and techniques tailored to boost a
                  brand's online presence globally.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Key Services
                </h3>
                <p>
                  By employing various online marketing strategies, Asipiya Soft Solution
                  aims to connect businesses with their target audience effectively and
                  efficiently. These strategies may include search engine optimisation
                  (SEO), social media marketing, email marketing, Google Ads, and more.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Core Objective
                </h3>
                <p>
                  The core objective of Asipiya Soft Solution is to help businesses
                  achieve their marketing and sales goals through tailored internet
                  marketing solutions. By analysing a company's specific needs, the
                  agency crafts a custom strategy that can include everything from
                  website design and development to online advertising and reputation
                  management.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  In Summary
                </h3>
                <p>
                  In essence, Asipiya Soft Solution acts as a comprehensive partner for
                  businesses looking to thrive in the digital landscape, leveraging
                  technology and creativity to drive growth and success on a global
                  scale.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(2)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 2 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              How Can a Digital Marketing Agency Boost My Online Presence?
            </button>
            {selectedFeature === 2 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 2 ? 1 : 0,
                  transform:
                    selectedFeature === 2
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Overview
                </h3>
                <p>
                  A digital marketing agency, such as Asipiya Soft Solution, can
                  significantly boost your online presence by implementing a series of
                  strategic actions designed to enhance your visibility and brand
                  recognition on the internet globally.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Key Strategies
                </h3>
                <p>
                  One of the key ways Asipiya Soft Solution does this is by increasing
                  online visibility. This involves optimising your website for search
                  engines (SEO) to ensure it ranks higher in search results, making it
                  easier for potential customers to find you.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Digital Advertising
                </h3>
                <p>
                  The use of digital advertising techniques is another crucial aspect.
                  Asipiya Soft Solution employs various forms of digital ads, such as
                  pay-per-click (PPC), display ads, and social media ads, to target your
                  audience more effectively and drive traffic to your website.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Brand Awareness
                </h3>
                <p>
                  Furthermore, Asipiya Soft Solution excels in building and enhancing
                  brand awareness in the digital space. They create and distribute
                  valuable, relevant, and consistent content across various online
                  platforms. This content not only engages your target audience but also
                  establishes your business as a thought leader in your industry.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Social Media Engagement
                </h3>
                <p>
                  Additionally, social media marketing strategies by Asipiya Soft Solution
                  are used to engage with your audience, providing a platform for direct
                  interaction and fostering a community around your brand.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  In Conclusion
                </h3>
                <p>
                  By combining these strategies, Asipiya Soft Solution can effectively
                  amplify your presence online, ensuring that your brand not only reaches
                  a wider audience but also resonates with them, leading to increased
                  engagement, loyalty, and, ultimately, conversions.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(3)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 3 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              What Services Do Digital Marketing Agencies Offer?
            </button>
            {selectedFeature === 3 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 3 ? 1 : 0,
                  transform:
                    selectedFeature === 3
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  SEO (Search Engine Optimisation)
                </h3>
                <p>
                  This service, provided by Asipiya Soft Solution, focuses on improving a
                  website's visibility in search engine results pages. By optimising
                  website content, structure, and on-page elements like keywords and meta
                  tags, Asipiya Soft Solution helps attract higher organic traffic,
                  essential for long-term online success globally.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  PPC (Pay Per Click) Advertising
                </h3>
                <p>
                  PPC is a model of online advertising where businesses pay a fee each
                  time one of their ads is clicked. This service, offered by Asipiya Soft
                  Solution, is invaluable for generating immediate traffic to a website
                  and is highly effective for targeted advertising campaigns. Asipiya
                  creates and manages these campaigns to maximise return on investment.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Social Media Management
                </h3>
                <p>
                  Managing a brand's presence on social media platforms is crucial in
                  today's digital world. Asipiya Soft Solution provides this service by
                  creating and curating content, engaging with the audience, and running
                  social media campaigns to enhance brand recognition and loyalty
                  globally.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Email Marketing
                </h3>
                <p>
                  Email marketing remains a powerful tool for direct communication with
                  customers and prospects. Asipiya Soft Solution designs and executes
                  email campaigns to promote products, services, or events, or simply to
                  keep the audience engaged with the brand. This includes creating
                  compelling content, managing email lists, segmenting audiences for
                  personalised campaigns, and analysing the performance of email
                  campaigns.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Additional Services
                </h3>
                <p>
                  In addition to these core services, Asipiya Soft Solution offers
                  website design and development, content marketing, online reputation
                  management, analytics and reporting, and more, depending on the needs
                  and goals of their clients. These comprehensive services work in tandem
                  to create a cohesive and effective digital marketing strategy globally.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(4)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 4 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              How Do Digital Marketing Agencies Measure the Success of Their
              Campaigns?
            </button>
            {selectedFeature === 4 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 4 ? 1 : 0,
                  transform:
                    selectedFeature === 4
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Analytics and Reporting
                </h3>
                <p>
                  Asipiya Soft Solution uses sophisticated digital analytics tools to monitor
                  various aspects of their marketing campaigns. These tools
                  provide a wealth of data on user behavior, campaign reach,
                  engagement levels, and more. Regular reporting is done to
                  analyse this data, which helps in understanding the
                  effectiveness of different strategies and tactics employed in
                  the campaign.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  ROI (Return on Investment)
                </h3>
                <p>
                  One of the most crucial measures of a campaign's success is
                  the ROI. This involves calculating the financial return on the
                  investment made in the marketing campaign. Asipiya Soft Solution
                  focuses on strategies that maximise ROI, ensuring that
                  every dollar spent contributes to achieving the campaign’s
                  objectives. They analyse revenues generated from the marketing
                  activities against the costs incurred to gauge the
                  profitability and efficiency of the campaign.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Key Performance Indicators (KPIs)
                </h3>
                <p>
                  Asipiya Soft Solution sets specific KPIs at the start of a campaign based on
                  the campaign goals. These KPIs could include metrics like
                  website traffic, lead generation, conversion rate, customer
                  acquisition cost, social media engagement, and email open
                  rates. Monitoring these KPIs helps the agency understand how
                  well the campaign is performing against its objectives and
                  allows for adjustments to be made in real-time for
                  optimisation.
                </p>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Continuous Monitoring and Optimization
                </h3>
                <p>
                  By continuously monitoring these aspects, Asipiya Soft Solution
                  provides insights into campaign performance and makes data-driven decisions to refine and
                  improve their marketing strategies for better results.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(5)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 5 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              What Makes Your Digital Marketing Agency Unique?
            </button>
            {selectedFeature === 5 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 5 ? 1 : 0,
                  transform:
                    selectedFeature === 5
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  A Different Approach
                </h3>
                <p>
                  There are countless agencies claiming to be the best in the
                  business, but what makes Asipiya Soft Solution stand out is
                  our unique approach. While many agencies focus primarily on
                  sales, we are digital marketing enthusiasts first. Our
                  founders have been in the digital marketing space since the
                  early 2000s, making us seasoned experts with a deep passion
                  for the field. When you work with Asipiya Soft Solution,
                  you're not dealing with salespeople – you're collaborating
                  with true digital marketing nerds.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  In-House Custom Tech
                </h3>
                <p>
                  Unlike other agencies, Asipiya Soft Solution has a software
                  developer in-house who builds custom tech tools like The
                  Brain and Natch, which enhance our team's capabilities and
                  provide a higher level of service. These innovative tools are
                  tailored to our workflow, giving us a competitive edge that
                  other agencies simply don't have.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  SEO Expertise and Industry Immersion
                </h3>
                <p>
                  We're not just another agency claiming to offer top-notch SEO.
                  Asipiya Soft Solution also publishes one of the world's
                  leading SEO podcasts, *The SEO Show*, where we speak with
                  global SEO experts and attend international SEO conferences.
                  This immersion in the industry means we have firsthand
                  knowledge of what works and what doesn't. We take this
                  invaluable insight and apply it directly to our SEO services,
                  ensuring our clients receive the most effective strategies.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Our Local Connection
                </h3>
                <p>
                  Asipiya Soft Solution is proud to be based in colombo, and our
                  podcast is recorded right in our Parramatta headquarters. Our
                  local presence allows us to stay closely connected with our
                  clients and continually innovate with the latest digital
                  marketing trends.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(6)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 6 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              How much does a digital marketing agency cost?
            </button>
            {selectedFeature === 6 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 6 ? 1 : 0,
                  transform:
                    selectedFeature === 6
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Pricing Range
                </h3>
                <p>
                  Digital marketing agency costs can range anywhere from $1,500
                  to $20,000 per month or more, depending on your needs and
                  business realities. Asipiya Soft Solution offers global services tailored to fit various budgets and requirements.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Customised Pricing
                </h3>
                <p>
                  At Asipiya Soft Solution, your pricing will be customized to reflect factors like your
                  market, the level of competition you face, and how far behind
                  your competitors you are. These elements determine how much
                  you need to invest in services like SEO, Google Ads, and
                  social media advertising.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Lower Budget Risks
                </h3>
                <p>
                  If you're spending less than $1,000 per month, it's unlikely
                  you'll see substantial results. Agencies that offer services
                  at this price point are often forced to load staff members
                  with too many clients, which compromises the quality of work.
                  Asipiya Soft Solution ensures meaningful effort is put into every campaign to deliver measurable results.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Avoid Bottom-Tier Services
                </h3>
                <p>
                  You want to avoid low-cost agencies because they
                  typically provide subpar services. Asipiya Soft Solution focuses on offering high-quality,
                  effective solutions that take your business to the next level.
                  If budget is a concern, we recommend leveraging free educational resources until you're ready for a full-service approach.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Free Education
                </h3>
                <p>
                  Asipiya Soft Solution offers free educational content through our
                  blog, guides, and other resources to help businesses grow and make informed decisions about when to hire an agency.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(7)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 7 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              What do I need to know before hiring a digital marketing agency?
            </button>
            {selectedFeature === 7 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 7 ? 1 : 0,
                  transform:
                    selectedFeature === 7
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Understand Your Marketing Goals
                </h3>
                <p>
                  Be clear about what you want to achieve with your digital
                  marketing efforts. Whether it's increasing brand awareness,
                  generating leads, boosting sales, or improving customer
                  engagement, your goals will guide Asipiya Soft Solution's strategy for success.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Know Your Budget
                </h3>
                <p>
                  Determine how much you are willing to invest in digital
                  marketing. Asipiya Soft Solution can work within your budget to deliver effective solutions globally.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Agency's Expertise and Experience
                </h3>
                <p>
                  Research Asipiya Soft Solution's background. With extensive experience in various industries, we have a proven track record of successful campaigns tailored to unique business needs.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Services Offered
                </h3>
                <p>
                  Ensure Asipiya Soft Solution offers the specific services you need, such as SEO, PPC, social media marketing, content marketing, and email marketing. We are well-versed in the latest digital marketing trends and tools to deliver top-notch results.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Review Their Portfolio and Case Studies
                </h3>
                <p>
                  Explore Asipiya Soft Solution's portfolio to gauge our expertise and style. Our case studies demonstrate how we approach challenges and the impactful results achieved for our clients.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Communication and Reporting
                </h3>
                <p>
                  Clear and regular communication is key. Asipiya Soft Solution ensures consistent updates on campaign progress and provides comprehensive reports using clear metrics. Our process is designed for seamless feedback and revisions.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Understand Their Strategy and Approach
                </h3>
                <p>
                  Discuss how Asipiya Soft Solution plans to approach your digital marketing needs. We provide tailored strategies that align with your specific goals and target audience.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Read Reviews and Testimonials
                </h3>
                <p>
                  Check out reviews and testimonials from Asipiya Soft Solution's previous clients. These reflect our reliability, dedication, and the quality of services we provide globally.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Ask About Tools and Technologies Used
                </h3>
                <p>
                  Asipiya Soft Solution employs advanced tools and technologies for analytics, automation, and other marketing tasks, showcasing our professionalism and commitment to delivering effective results.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Long-Term Partnership Potential
                </h3>
                <p>
                  Asipiya Soft Solution aims to build long-term partnerships. Digital marketing is an ongoing process, and we continuously adapt and improve to achieve lasting success for your business.
                </p>

                <p>
                  By carefully considering these factors and choosing Asipiya Soft Solution, you can ensure a well-aligned partnership that meets your business goals, budget, and expectations, setting the stage for global success.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(8)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 8 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              How do I know if I need a marketing agency?
            </button>
            {selectedFeature === 8 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 8 ? 1 : 0,
                  transform:
                    selectedFeature === 8
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Lack of Marketing Expertise
                </h3>
                <p>
                  If your business lacks specialised knowledge in digital
                  marketing disciplines such as SEO, PPC, social media, content
                  marketing, or email marketing, Asipiya Soft Solution can provide the expertise and skills required to execute these effectively on a global scale.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Insufficient Resources
                </h3>
                <p>
                  If your current team is overstretched and unable to dedicate
                  time to comprehensive marketing efforts, Asipiya Soft Solution can fill this gap. We provide the necessary resources and
                  expertise to manage and implement your marketing strategy effectively.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Stagnant or Declining Sales
                </h3>
                <p>
                  If your sales have plateaued or are declining, it could be a
                  sign that your current marketing efforts are not effective. Asipiya Soft Solution offers fresh ideas and strategies to reinvigorate your sales and drive growth globally.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Inability to Keep Up with Trends
                </h3>
                <p>
                  The digital marketing landscape is constantly evolving. If
                  keeping up with the latest trends, tools, and strategies is
                  overwhelming, Asipiya Soft Solution can help you stay competitive and relevant in the global market.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Difficulty in Measuring ROI
                </h3>
                <p>
                  If you're struggling to measure the return on your marketing
                  investments or if your campaigns lack clear metrics, Asipiya Soft Solution provides expertise in analytics and ROI
                  tracking to ensure measurable success.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Limited Online Presence
                </h3>
                <p>
                  In today’s digital age, having a strong online presence is
                  crucial. If your online presence is weak or non-existent, Asipiya Soft Solution can help build and enhance your digital footprint globally.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Scaling Your Business
                </h3>
                <p>
                  If you’re planning to scale your business, Asipiya Soft Solution can provide the marketing horsepower needed to support growth,
                  reaching new markets and audiences more effectively.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Need for a Fresh Perspective
                </h3>
                <p>
                  Sometimes, an external agency like Asipiya Soft Solution can provide a fresh perspective
                  and innovative ideas that internal teams might miss due to their closeness to the business.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Managing a Large or Complex Campaign
                </h3>
                <p>
                  If you're planning a large or complex marketing campaign, such
                  as a new product launch or entering a new market, Asipiya Soft Solution brings the expertise and resources required for a
                  successful execution on a global scale.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Desire for Consistent Brand Messaging
                </h3>
                <p>
                  Ensuring a consistent and professional brand message across
                  all channels can be challenging. Asipiya Soft Solution helps streamline and maintain brand consistency globally.
                </p>

                <p>
                  If several of these points resonate with your current business
                  situation, Asipiya Soft Solution is here to provide the skills,
                  strategies, and resources necessary to enhance your marketing
                  efforts and achieve your business objectives globally.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(9)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 9 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              What can a digital marketing agency do for me?
            </button>
            {selectedFeature === 9 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 9 ? 1 : 0,
                  transform:
                    selectedFeature === 9
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Develop a Comprehensive Digital Strategy
                </h3>
                <p>
                  Asipiya Soft Solution can create a tailored digital marketing strategy based on your business goals, target audience, and industry trends. This strategy may include various components like SEO, social media, PPC, content marketing, and more, integrated into a cohesive plan.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Improve Search Engine Rankings (SEO)
                </h3>
                <p>
                  Asipiya Soft Solution specialises in optimising your website and content to improve your rankings on search engine results pages (SERPs), making it easier for potential customers to find you online.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Manage Social Media Platforms
                </h3>
                <p>
                  Asipiya Soft Solution can handle your social media accounts, creating and curating content, engaging with your audience, and running targeted ad campaigns to build your brand presence and loyalty on these platforms.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Execute Targeted Advertising Campaigns (PPC)
                </h3>
                <p>
                  Asipiya Soft Solution can design and manage pay-per-click advertising campaigns on platforms like Google Ads and social media, ensuring your ads reach the right audience to maximise ROI.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Create and Distribute Quality Content
                </h3>
                <p>
                  From blog posts and videos to infographics and ebooks, Asipiya Soft Solution produces various types of content that engage and inform your audience, helping to establish your brand as an authority in your field.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Email Marketing
                </h3>
                <p>
                  Asipiya Soft Solution designs and implements effective email marketing campaigns to nurture leads, promote products or services, and maintain customer engagement.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Analytics and Reporting
                </h3>
                <p>
                  Asipiya Soft Solution uses advanced analytics tools to track the performance of your marketing campaigns, providing you with detailed reports and insights on metrics like traffic, conversions, engagement, and ROI.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Website Design and Development
                </h3>
                <p>
                  If needed, Asipiya Soft Solution can design or optimise your website to ensure it's visually appealing, user-friendly, and optimised for conversions.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Online Reputation Management
                </h3>
                <p>
                  Asipiya Soft Solution monitors and manages your online reputation, addressing any negative feedback and promoting positive reviews and testimonials.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Market Research and Insights
                </h3>
                <p>
                  Asipiya Soft Solution conducts thorough market research to understand your industry, competition, and target audience, providing insights that inform more effective marketing strategies.
                </p>

                <p>
                  In essence, Asipiya Soft Solution acts as an extension of your business, equipped with the expertise and resources to effectively market your brand online, attract and retain customers, and ultimately drive business growth globally.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
            <button
              onClick={() => handleFeatureClick(10)}
              className={`flex items-center w-full text-left ${
                selectedFeature === 10 ? "font-bold text-[#7D00C5]" : ""
              }`}
            >
              <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-3 h-3 text-black"
                >
                  <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
                </svg>
              </span>
              Is it worth it to hire a digital marketing agency?
            </button>
            {selectedFeature === 10 && (
              <div
                className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: selectedFeature === 10 ? 1 : 0,
                  transform:
                    selectedFeature === 10
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Expertise and Experience
                </h3>
                <p>
                  Asipiya Soft Solution brings a level of expertise and
                  experience that can be hard to replicate in-house, especially
                  if marketing is not your core business. They stay up-to-date
                  with the latest trends, tools, and techniques, which can
                  significantly benefit your marketing efforts globally.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Resource Allocation
                </h3>
                <p>
                  Consider your current resources. If your team is already
                  stretched thin or lacks specific marketing skills, Asipiya Soft Solution
                  can fill these gaps without the need for additional full-time hires.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Cost-Effectiveness
                </h3>
                <p>
                  While hiring Asipiya Soft Solution is an investment, it can be more
                  cost-effective in the long run compared to building an
                  in-house team. Asipiya Soft Solution has diverse skill sets and resources
                  at its disposal, which you can leverage without the overhead
                  costs associated with full-time employees.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Scalability
                </h3>
                <p>
                  Asipiya Soft Solution can scale its services to match your business
                  growth. This flexibility is often valuable for businesses that
                  experience seasonal fluctuations or are in a growth phase.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Fresh Perspective
                </h3>
                <p>
                  Asipiya Soft Solution offers new insights and ideas, bringing
                  a fresh perspective that can invigorate your marketing
                  strategy.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Focus on Core Business
                </h3>
                <p>
                  Outsourcing your digital marketing to Asipiya Soft Solution can free up time for you
                  and your team to focus on your core business activities,
                  knowing that the marketing side is being professionally
                  handled.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Measurable Results
                </h3>
                <p>
                  Asipiya Soft Solution is adept at measuring and
                  analysing the results of their efforts, allowing for
                  data-driven decisions. This ensures a better return on
                  investment and more effective use of your marketing budget.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Staying Competitive
                </h3>
                <p>
                  If your competitors are using digital marketing effectively
                  and you're not, you may lose market share. Asipiya Soft Solution
                  can help level the playing field or give you an edge.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Risk Mitigation
                </h3>
                <p>
                  Marketing, especially online, can sometimes involve risks such
                  as ad spend waste or PR mishaps. Asipiya Soft Solution has the experience
                  to mitigate these risks.
                </p>

                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
                  Long-Term Growth
                </h3>
                <p>
                  Digital marketing is not just about short-term gains. Asipiya Soft Solution
                  helps lay the groundwork for long-term brand
                  building and growth globally.
                </p>
              </div>
            )}
          </li>


          <li className="pb-8 text-lg text-gray-700 border-b border-gray-300">
  <button
    onClick={() => handleFeatureClick(11)}
    className={`flex items-center w-full text-left ${
      selectedFeature === 11 ? "font-bold text-[#7D00C5]" : ""
    }`}
  >
    <span className="flex items-center justify-center inline-block w-5 h-5 mr-3 border-2 border-black rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="w-3 h-3 text-black"
      >
        <path d="M13.485 1.93a.5.5 0 0 1 .09.705l-8 9a.5.5 0 0 1-.748-.062l-4-5a.5.5 0 0 1 .767-.64l3.586 4.482 7.546-8.485a.5.5 0 0 1 .705-.09z" />
      </svg>
    </span>
    How Do I Choose the Right Digital Marketing Agency for My Business?
  </button>
  {selectedFeature === 11 && (
    <div
      className="mt-2 ml-8 text-sm text-gray-600 transition-opacity duration-300 ease-in-out"
      style={{
        opacity: selectedFeature === 11 ? 1 : 0,
        transform:
          selectedFeature === 11 ? "translateY(0)" : "translateY(-10px)",
      }}
    >
      <h3 className="mb-2 text-xl font-semibold text-gray-700">
        Define Your Marketing Needs
      </h3>
      <p>
        Clearly outline what you want to achieve with your digital marketing
        efforts. Whether it's improving SEO, boosting social media presence, or
        increasing lead generation, having specific goals will help you find an
        agency like Asipiya Soft Solutions that specializes in those areas.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Research Potential Agencies
      </h3>
      <p>
        Look for agencies like Asipiya Soft Solutions with a good track record
        and expertise in your industry. Check their website, portfolio, case
        studies, and client testimonials. An agency's past work can give you
        insights into their capabilities and the types of clients they cater to
        globally.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Consider Their Expertise and Services
      </h3>
      <p>
        Ensure the agency, such as Asipiya Soft Solutions, has expertise in the
        specific services you need, such as SEO, PPC, social media management,
        content marketing, or email marketing. Some agencies might offer a broad
        range of services, while others specialize in certain areas.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Evaluate Their Understanding of Your Business
      </h3>
      <p>
        The right agency, like Asipiya Soft Solutions, should understand your
        industry, target audience, and business challenges. During initial
        discussions, pay attention to how well they grasp your business needs
        and how they plan to address them.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Assess Their Team and Culture
      </h3>
      <p>
        The agency’s team and culture, as exemplified by Asipiya Soft Solutions,
        should be a good fit for your business. Consider their communication
        style, transparency, and the way they collaborate with clients. A good
        relationship with the agency is key to the success of your marketing
        efforts.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Look at Their Tools and Technologies
      </h3>
      <p>
        Ask about the tools and technologies that agencies like Asipiya Soft
        Solutions use for analytics, automation, and campaign management. The
        right tools are crucial for effective campaign execution and measurement.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Review Their Pricing and Contracts
      </h3>
      <p>
        Understand the fee structure of Asipiya Soft Solutions and what is
        included in their services. Ensure their pricing aligns with your budget.
        Also, review their contract terms, especially regarding the duration of
        the contract and any cancellation policies.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Check for Reviews and References
      </h3>
      <p>
        Look for reviews or ask for references from past or current clients of
        Asipiya Soft Solutions. This can provide real-world insights into how
        the agency works and the results they deliver globally.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Consider Their Location
      </h3>
      <p>
        Depending on your preference for face-to-face meetings or local market
        knowledge, the location of Asipiya Soft Solutions might be a factor.
        However, many agencies, including Asipiya, successfully work with clients
        remotely across the globe.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Trust and Transparency
      </h3>
      <p>
        Choose an agency like Asipiya Soft Solutions that values trust and
        transparency. They should be upfront about what can realistically be
        achieved and keep you informed about the progress of your campaigns.
      </p>

      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-700">
        Final Consideration
      </h3>
      <p>
        Remember, the right digital marketing agency is not just a service
        provider but a partner in your business’s growth. Take the time to
        conduct thorough research and choose an agency like Asipiya Soft
        Solutions that aligns well with your business objectives and can deliver
        the results you’re looking for.
      </p>
    </div>
  )}
</li>


         
        </ul>
      </div>
    </div>
  );
}

export default DMAgencyQuestions;
