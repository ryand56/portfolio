interface SectionProps {
    id: string;
    title: string;
    content?: string;
    children?: React.ReactNode; // Extras
}

const Section = ({ id, title, content, children }: SectionProps) => (
    <div id={id} className="flex relative min-h-screen h-screen w-screen justify-center items-center">
        <div>{title}</div>
    </div>
);
export default Section;
