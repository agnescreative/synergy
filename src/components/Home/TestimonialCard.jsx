export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className=" flex flex-col md:flex-row justify-evenly gap-6 px-2">
      <div className="space-y-6 w-full md:max-w-[70%] text-center">
        <div className="flex justify-center">
          <img src="/assets/testimonials/symbol.svg" alt="icon" />
        </div>
        <div>
          <p className="font-serif text-xl md:text-2xl">{testimonial.name}</p>
        </div>
        <div>
          <p className="text-sm md:text-base">{testimonial.review}</p>
        </div>
      </div>
    </div>
  );
};
