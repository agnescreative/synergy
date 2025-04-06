export const FundamentalPrincipleCard = ({
  number,
  image,
  title,
  description,
}) => {
  return (
    <div
      className={
        "relative px-6 py-6 flex w-full justify-between max-w-2xl bg-white rounded-2xl shadow min-h-[250px]"
      }
    >
      {/* Blue bar should stick to the left edge of the parent */}
      <div className="absolute top-1/2 left-0 w-2 h-[70%] bg-primary-blue transform -translate-y-1/2" />

      <div className={"py-8 w-full"}>
        <div
          className={
            "flex flex-col items-center xl:items-start xl:flex-row xl:space-x-7 space-y-6 xl:space-y-0"
          }
        >
          <img src={image} alt={title} className={"size-12"} />
          <div className={"xl:max-w-md space-y-2"}>
            <p className={"font-serif text-2xl text-center xl:text-left"}>
              {title}
            </p>
            <p className={"text-center xl:text-left"}>{description}</p>
          </div>
        </div>
      </div>
      <div>
        <p
          className={
            "text-primary-blue font-serif text-2xl items-start text-center xl:text-left"
          }
        >
          {number}
        </p>
      </div>
    </div>
  );
};
