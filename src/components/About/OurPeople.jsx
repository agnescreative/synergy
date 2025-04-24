import Container from "../Container.jsx";

export const OurPeople = () => {
  const leaders = [
    {
      name: "Mr K B Agarwal",
      role: "Managing Director",
      image: "/assets/leaders/KB_Agarwal.jpg",
    },
    {
      name: "Dr Hardik K Radadiya",
      role: "Founder",
      image: "/assets/leaders/Hardik_Radadiya.jpg",
    },
    {
      name: "Dr Chandni Manwani Radadiya",
      role: "Founder",
      image: "/assets/leaders/Chandni_Manwani.jpg",
    },
  ];

  return (
    <Container>
      <div className={"flex justify-center pt-20"} id={"our-people"}>
        <div className={"myContainer"}>
          <div className={"space-y-8"}>
            <p
              className={"font-serif-light font-semibold text-3xl xl:text-5xl"}
            >
              Our People
            </p>
            <div
              className={
                "grid grid-cols-1 space-y-6 xl:space-y-0 xl:grid-cols-2 justify-start leading-relaxed"
              }
            >
              <p>
                Our team at Synergy Physiotherapy is a blend of skilled
                professionals, compassionate caregivers, and innovative
                thinkers. United by a shared passion for healing, we work
                together to provide personalized care and cutting-edge
                solutions, ensuring every patient&apos;s journey is unique and
                effective.
              </p>
            </div>
          </div>

          <div className={"py-12 grid grid-cols-1 gap-5 xl:grid-cols-3"}>
            {leaders.map((member, index) => {
              return (
                <div key={index} className={"space-y-3"}>
                  <div className="w-full h-auto xl:h-[300px]">
                    <img
                      src={member.image}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className={"xl:max-w-[80%]"}>
                    <p className={"font-serif text-3xl"}>{member.name}</p>
                    <p className={"font-serif"}>{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" space-y-8">
          <p
              className={"font-serif-light font-semibold text-3xl xl:text-5xl"}
            >
              Our Team
            </p>
            <img src="/assets/ourTeam/ourTeam.JPG" alt="our team" className="w-full h-auto xl:h-[500px] object-cover" />
          </div>
        </div>
      </div>
    </Container>
  );
};
