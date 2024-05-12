const Header = ({children, small} : {children: React.ReactNode, small?: boolean}) => {
    return (
        <header className={`${small ? "small h-[50vh]" : "h-[100vh]"} relative flex`}>
            {children}
        </header>
    );
}

export default Header;