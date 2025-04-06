import Container from "../Container.jsx";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const data = [
        {
            img: '/assets/whychooseus/1.svg',
            title: 'We Listen to You',
            description: 'Your voice matters. We actively listen to understand your unique needs, ensuring our care aligns with your goals and concerns.'
        },
        {
            img: '/assets/whychooseus/2.svg',
            title: 'Innovative in Physiotherapy & Rehabilitation',
            description: 'As leaders in physiotherapy innovation, we push boundaries to bring you advanced, proven methods that open new possibilities for recovery.'
        },
        {
            img: '/assets/whychooseus/3.svg',
            title: 'Team of Experts',
            description: 'With a powerful, unified team, we combine individual expertise to deliver results-focused, comprehensive care for your rehabilitation journey.'
        },
        {
            img: '/assets/whychooseus/4.svg',
            title: 'Top-Quality, Compassionate Care',
            description: 'Dedicated to excellence, we ensure each patient receives superior care and unwavering support, making every step of your healing a priority.'
        },
        {
            img: '/assets/whychooseus/5.svg',
            title: 'Transformative Results',
            description: 'Our commitment drives exceptional outcomes, empowering patients to regain function, confidence, and quality of life.'
        },
        {
            img: '/assets/whychooseus/6.svg',
            title: 'Personalized Recovery Plans',
            description: 'Our commitment drives exceptional outcomes, empowering patients to regain function, confidence, and quality of life.'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };


    return (
        <Container className="pt-12 pb-8  lg:pt-24 bg-gradient-to-b to-white from-[#EAEAFF] flex justify-center">
            <motion.div
                ref={ref}
                className="myContainer space-y-24"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div
                    className="flex flex-col space-y-5 justify-center items-center"
                    variants={containerVariants}
                >
                    <p className="font-serif font-medium text-3xl md:text-5xl">Why choose us?</p>
                    <p className="md:max-w-2xl md:text-base text-center">
                        Achieving lasting success in rehabilitation requires a trusted partner who is as committed to your recovery as you are. We strive to be that partner, delivering excellence at every stage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
                    {data.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white px-6 md:px-4 py-8 xl:py-12 rounded-2xl space-y-8 shadow hover:shadow-lg transition-shadow duration-300"
                        >
                            <motion.div
                            >
                                <img alt={item.title} src={item.img} />
                            </motion.div>
                            <div className="space-y-2">
                                <p className="font-serif text-2xl leading-snug">{item.title}</p>
                                <p className="max-w-[85%]">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Container>
    );
};