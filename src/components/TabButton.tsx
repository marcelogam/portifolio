interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

export default function TabButton({ active, selectTab, children }: TabButtonProps) {
    
    const buttonClass = active ? "text-white border-b border-blue-600" : "text-[#ADB7BE]";
    
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClass} cursor-pointer`}>
                {children}
            </p>
        </button>
    );
}