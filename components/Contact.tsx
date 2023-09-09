import React from "react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact">
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directely at{" "}
        <a className="underline" href="mailto:essoh.alou@gmail.com">
          essoh.alou@gmail.com
        </a>{" "}
        or through this form;
      </p>
      <form action="">
        <input type="email" />
      </form>
    </section>
  );
}
