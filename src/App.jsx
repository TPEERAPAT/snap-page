import { Navbar, Header } from "./components";
 
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="sm:flex justify-center items-center">
        <div className="xl:max-w-[1440px] w-full">
            <Navbar />
        </div>
      </div>

      <div className="sm:flex justify-center items-center">
        <div className="xl:max-w-[1440px] w-full">
            <Header />
        </div>
      </div>
    </div>
  )
}

export default App