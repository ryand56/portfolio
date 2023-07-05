interface SectionProps {
    id: string;
    title: string;
    withContainer?: boolean;
    children?: React.ReactNode; // Extras
}

const Section = (props: SectionProps) => {
    const { id, title, withContainer = true, children } = props;

    return (
        <div id={id} className="flex relative min-h-screen h-screen w-screen justify-center items-center">
            {withContainer ? <div id={`${id}_container`} className="bg-transparent rounded h-[300px] w-[600px]">
                <div id={`${id}_container_content`} className="p-8">
                    <div id={`${id}_title`} className="font-bold text-2xl mb-2">{title}</div>
                    <div id={`${id}_content`}>
                        {children}
                    </div>
                </div>
            </div> : <div id={`${id}_container_content`} className="p-8">
                    <div id={`${id}_title`} className="font-bold text-2xl mb-2">{title}</div>
                    <div id={`${id}_content`}>
                        {children}
                    </div>
                </div>}
        </div>
    );
};
export default Section;
