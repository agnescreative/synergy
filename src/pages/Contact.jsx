import { useState } from "react";
import Container from "../components/Container";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here (e.g., send data to API)
  };

  return (
    <Container className="flex justify-center items-center pt-8 lg:pt-16">
      <div className="myContainer flex flex-col justify-center items-center space-y-12">
        <div className="text-center space-y-2">
          <h1 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">Get to know us</p>
        </div>

        {/* Tarsali Branch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl">Tarsali Branch</h2>
            <div className="space-y-1">
              <p className="text-2xl text-neutral-800">Address:</p>
              <p className="text-lg text-neutral-600">
                2nd floor Sakar East complex, Opp Bansal mall, Soma Talav -
                Tarsali Ring Rd, Vadodara, Gujarat, 390009
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl text-neutral-800">Mail:</p>
              <p className="text-lg text-neutral-600">
                info@synergyphysiocare.com
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl text-neutral-800">Phone:</p>
              <p className="text-lg text-neutral-600">+916354101573</p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.271653169682!2d73.2211288750077!3d22.26769724407697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc554dcb5eed1%3A0x6413f90019f56e6c!2sSynergy%20Physiotherapy%20Hospital%20and%20Rehabilitation%20Care%20Vadodara!5e0!3m2!1sen!2sin!4v1742540434327!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[450px] rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Manjalpur Branch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl">Manjalpur Branch</h2>
            <div className="space-y-1">
              <p className="text-2xl text-neutral-800">Address:</p>
              <p className="text-lg text-neutral-600">
                3rd floor - Mebal Plaza Opp Manjalpur Sports complex Manjalpur,
                Vadodara, Gujarat. 390011
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl text-neutral-800">Mail:</p>
              <p className="text-lg text-neutral-600">
                info@synergyphysiocare.com
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl text-neutral-800">Phone:</p>
              <p className="text-lg text-neutral-600">0265 298 0020</p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.271653169682!2d73.2211288750077!3d22.26769724407697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc554dcb5eed1%3A0x6413f90019f56e6c!2sSynergy%20Physiotherapy%20Hospital%20and%20Rehabilitation%20Care%20Vadodara!5e0!3m2!1sen!2sin!4v1742540434327!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[450px] rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl">Contact Form</h2>
            <p className="text-lg text-neutral-600">
              We would love to hear from you! Please fill out the form, and our
              team will get back to you as soon as possible.
            </p>
            <div className="space-y-1">
              <p className="text-2xl text-neutral-800">Working Hours:</p>
              <p className="text-lg text-neutral-600">
                Monday - Saturday: 9:00 AM - 8:00 PM
              </p>
              <p className="text-lg text-neutral-600">
                Sunday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#ebebeb]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary-blue text-white p-3 rounded-lg hover:bg-opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
