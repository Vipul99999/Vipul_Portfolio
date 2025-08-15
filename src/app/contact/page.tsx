"use client";

import React, { useState } from "react";
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

import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    customService: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Track phone validity for inline validation
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setForm({ ...form, phone: value });

    // Validate phone inline
    if (value === "" || phoneRegex.test(value)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validation
    if (
      !form.firstname.trim() ||
      !form.lastname.trim() ||
      !emailRegex.test(form.email) ||
      !form.message.trim() ||
      !form.service
    ) {
      setStatus("Please fill all required fields correctly.");
      return;
    }

    if (form.service === "other" && !form.customService.trim()) {
      setStatus("Please specify the custom service.");
      return;
    }
    if (form.firstname === "") {
      setStatus("Please fill the firstname.");
      return;
    }
    if (form.service === "") {
      setStatus("Please specify the service.");
      return;
    }

    if (form.phone && !phoneRegex.test(form.phone)) {
    setStatus("Please enter a valid phone number.");
    return;
  }
    setStatus(null);
    setLoading(true);

    const finalService =
      form.service === "other" ? form.customService : form.service;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          phone: form.phone,
          service: finalService,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setStatus(data.error || "Something went wrong!");
      } else {
        setStatus("Message sent successfully!");
        setForm({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          customService: "",
          message: "",
        });
      }
    } catch (err) {
      setStatus("Failed to send message. Try again later.");
    }

    setLoading(false);
  }

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

            <form
              onSubmit={handleSubmit}
              
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              noValidate
            >
              
              <h3 className="text-4xl text-accent font-bold">Let`s work together</h3>
              <p className="text-white/60">
                Fill in the form below to get in touch about a project or service.
                I’ll get back to you as soon as possible!
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  value={form.firstname}
                  onChange={(e) =>
                    setForm({ ...form, firstname: e.target.value })
                  }
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  value={form.lastname}
                  onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    className={!isPhoneValid ? "border-red-500" : ""}
                  />
                  {!isPhoneValid && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid phone number (7-15 digits, optional +).
                    </p>
                  )}
              </div>

              {/* Service Select */}
              <Select
                value={form.service}
                onValueChange={(value) => setForm({ ...form, service: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Custom service input if Other is selected */}
              {form.service === "other" && (
                <Input
                  name="customService"
                  placeholder="Please specify your service"
                  className="mt-2"
                  value={form.customService}
                  onChange={(e) =>
                    setForm({ ...form, customService: e.target.value })
                  }
                  required={form.service === "other"}
                />
              )}

              {/* Message */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              {/* Status message */}
              {status && (
                <p
                  className={`text-sm ${
                    status.includes("success") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* Submit Button */}
              <Button size="md" className="max-w-40" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Info Section (unchanged) */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            {/* You can keep your existing info content here */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
