interface SectionProps {
    title: string;
    content?: string;
    children?: React.ReactNode; // Extras
}

const Section = ({ title, content, children }: SectionProps) => (
    <div className="min-w-full max-w-full">
        <div className="min-w-full max-w-full ml-auto mr-auto text-center absolute left-0 right-0">
            {title}
        </div>
    </div>
);
export default Section;
