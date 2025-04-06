export const HospitalityCard = ({ imagePath, text }) => {
  return (
    <div className={"space-y-3 xl:space-y-5 rounded-2xl"}>
      <div className={"relative"}>
        <img
          src={imagePath || "/assets/hospitalities/placeholder.png"}
          alt="1"
          className={"w-full h-auto rounded-4xl"}
        />
        <div
          className={
            "rounded-2xl absolute inset-0 bg-gradient-to-b from-transparent from-15% to-[#3030FC]/30"
          }
        ></div>
      </div>
      <div className={"flex justify-center"}>
        <p
          className={"xl:max-w-xl  font-serif text-xl xl:text-3xl text-center"}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
