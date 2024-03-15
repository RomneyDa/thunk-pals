import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from './faq-data'

const FAQs = () => {
    return (
        <Accordion type="single" collapsible className="flex-1 flex flex-col gap-5">
            {faqData.map((faq, index) => (
                <AccordionItem className='px-6 py-2 bg-secondary rounded-[40px]' value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-decoration-none text-primary-foreground font-bold text-xl text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-semibold text-md flex flex-col gap-2">
                        {faq.answer.split('\n').map((line, index) => (<p key={index}>{line}</p>))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default FAQs