// Accordion.stories.tsx
import { Accordion, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

// Export stories
export default {
    title: 'DubsUI/Accordion',
};
export const Secondary = () => {
    const data = [
        {
            title: 'Some things are meant to be',
            content: "To be or not to be"
        },
        {
            title: "Where are you now",
            content: "I'm in the middle of nowhere"
        },
        {
            title: "What is your name",
            content: "My name is nobody"
        },
        {
            title: "How are you",
            content: "I'm fine"
        }

    ];
    return (
        <>
            <div className='h-[calc(100vh-2rem)]   flex justify-center items-center'>

                <div className='w-[300px] font-mono'>
                    <Accordion items={data} />
                </div>
            </div>
        </>
    )
};


export const Primary = () => {
    return (<>
        <div className='bg-black dark  h-[calc(100vh-2rem)]   flex justify-center items-center'>

            <div className='w-[300px] font-mono '>
                <AccordionRoot type="single" collapsible className="w-full ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                </AccordionRoot>
            </div>
        </div>
    </>)
}