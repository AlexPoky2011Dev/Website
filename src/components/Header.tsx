const Header = ({children, small} : {children: React.ReactNode, small?: boolean}) => {
    return (
        <header className={`${small ? "sm h-[50vh]" : "h-[100vh]"} relative bg-sky-200 flex`}>
            {children}
        </header>
    );
}

export default Header;