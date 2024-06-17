"use client";

import { useState } from "react";

export default function ContactUs() {
  const [btnText, setBtnText] = useState("Mesajı Gönder");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBtnText("Gönderiliyor...");
    debugger;
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setBtnText("Mesajı Gönder");
        alert("Mesajınız gönderildi!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    }

    setBtnText("Mesajı Gönder");
  };

  return (
    <section id="contact-us" className="container mx-auto px-5 md:px-16 scroll-mt-52">
      <div className="bg-rose-600 rounded-lg text-white py-16 sm:py-24">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-[90%] md:w-4/5 lg:w-1/2 text-center mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold">Bize Ulaşın!</h2>
          <p className="leading-loose font-[500]">
            Ulaşmak istediğiniz konu hakkında bize aşağıdaki formu doldurarak ulaşabilirsiniz.
          </p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="text"
              name="name"
              placeholder="İsminizi girin"
              value={formData.name}
              onChange={handleChange}
              className="rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta adresinizi girin"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Konu başlığını girin"
              value={formData.subject}
              onChange={handleChange}
              className="rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
              required
            />
            <textarea
              name="message"
              placeholder="Mesajınızı girin"
              value={formData.message}
              onChange={handleChange}
              className="rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black h-32 resize-none"
              required
            />
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto mt-2 sm:mt-0 capitalize font-semibold py-4 px-7 text-rose-600 bg-white hover:bg-rose-100 border-2 border-white hover:border-rose-600 rounded-full"
              >
                {btnText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
