import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <Header />
      <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
        <h1>Create Offer</h1>

        <form className="flex flex-col w-[200px] gap-3">
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 ">
            <option selected hidden>Select country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select id="offer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 ">
            <option selected hidden>Select offer</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <input type="text" className="bg-gray-50 border border-gray-300 rounded-md h-[37px] p-3 text-sm" placeholder="Campaign name" />
          <button className="bg-gray-300 p-3 rounded-lg">Create new campaign</button>
        </form>

      </div>
    </div>
  );
}
