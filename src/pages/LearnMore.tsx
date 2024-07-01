import { Hero, Button } from "react-daisyui";

export const LearnMore = () => {
  return (
    <div>
      <Hero className="bg-base-200 min-h-[30rem]">
        <Hero.Content>
          <div>
            <h1 className="text-5xl font-bold">Learn more about AI module!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button color="primary">Get Started</Button>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
};
