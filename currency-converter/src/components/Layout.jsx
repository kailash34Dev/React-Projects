import BackgroundImage from "../assets/bg-img.webp";

function Layout({ children }) {
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat transition-all duration-500"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
                backgroundPosition: "center",
            }}
        >
            <div className="w-full px-4 sm:px-0">{children}</div>
        </div>
    );
}

export default Layout;
