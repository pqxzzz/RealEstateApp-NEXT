import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./ui/accordion";
import { FAQ } from "@/constants";

const Faq = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
