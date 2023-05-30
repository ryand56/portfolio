interface SectionProps {
    title: string;
    content?: string;
    children?: React.ReactNode; // Extras
}

const Section = ({ title, content, children }: SectionProps) => (
    <div className="h-screen w-full flex flex-col relative">{title}</div>
);
export default Section;
