const Container = ({ children, className = "" }) => {
  return (
    <section className={` px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-0 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
