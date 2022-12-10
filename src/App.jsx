import { Navbar, Header } from "./components";
 
const App = () => {
  return (
    <div className="bg-gray-200 w-full overflow-hidden">
      <div className="items-center">
        <div className="xl:max-w-[1440px] w-full">
            <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="max-w-[1260px] w-full">
            <Header />
        </div>
      </div>
    </div>
  )
}

export default App