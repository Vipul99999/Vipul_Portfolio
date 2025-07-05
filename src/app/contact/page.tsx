"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt className="text-xl" />,
    title: "Phone",
    description: "(+91) 725 892 7442",
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    title: "Email",
    description: "vipul20020308@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-xl" />,
    title: "Address",
    description: "Mirzapur, Uttar Pradesh, India",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent font-bold">
                Let`s work together
              </h3>
              <p className="text-white/60">
                Fill in the form below to get in touch about a project or
                service. I’ll get back to you as soon as possible!
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="First Name" />
                <Input name="lastname" type="text" placeholder="Last Name" />
                <Input name="email" type="email" placeholder="Email Address" />
                <Input name="phone" type="tel" placeholder="Phone Number" />
              </div>

              {/* Service Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />

              {/* Submit Button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="space-y-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-start gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm mb-1">{item.title}</p>
                    <h3 className="text-xl text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
