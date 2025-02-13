import ThemeToggle from "../components/changeTheme";

const Page = () => {
    return (
        <>
            {/* Construindo interface inicial */}
            <div className="h-1/2 w-1/4">

            </div>
            <div className="h-1/2 w-3/4">
                <ThemeToggle></ThemeToggle>
                <h1 className="h-3">Estou aqui</h1>

            </div>
        </>
    );
}

export default Page;
