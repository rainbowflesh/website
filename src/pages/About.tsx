import { Hero } from "react-daisyui";

export const About = () => {
  return (
    <Hero>
      <Hero.Content className="text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-logo">COMPANY PROFILE</h1>
          <p className="py-6 text-left">
            Name's ZEEWIND, founded in 2021. <br />
            <br />
            ZEEWIND is a high-tech company that integrates design, research, and manufacturing, specializing in the
            development of special-purpose drones.
            <br />
            <br /> Over the past three years, ZEEWIND has grown rapidly, now boasting a total of 30 employees, with over
            20 dedicated to R&D. <br />
            <br />
            We are committed to advancing the frontiers of drone technology, particularly in ensuring reliable
            positioning and navigation in GPS-denied environments. Our core strengths lie in our unique algorithms,
            flight control systems, and advanced algorithm development. Through continuous technological innovation and
            optimization, our drone products lead the industry in performance and reliability, capable of operating in
            various complex environments. <br />
            <br />
            We uphold the principles of customer-first and technology leadership, providing high-quality drone products
            and professional technical support to our clients. Our goal is to become the global leader in the
            special-purpose drone industry.
          </p>
          <p className="font-bold">Choose ZEEWIND, choose the future of drone technology.</p>
        </div>
      </Hero.Content>
    </Hero>
  );
};
