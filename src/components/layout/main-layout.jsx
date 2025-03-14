const { Header } = require("../header/header")
const {Footer}=require("../footer/footer")
const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default MainLayout