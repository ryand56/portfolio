interface SectionProps {
    id: string;
    title: string;
    content?: string;
    children?: React.ReactNode; // Extras
}

const Section = ({ id, title, content, children }: SectionProps) => (
    <div id={id} className="flex relative min-h-screen h-screen w-screen justify-center items-center">
        <div id={`${id}_container`} className="bg-[#696969]/25 rounded h-[300px] w-[600px]">
            <div id={`${id}_content`} className="p-8">
                <span id={`${id}_title`} className="font-bold text-2xl">{title}</span>
            </div>
        </div>
    </div>
);
export default Section;
