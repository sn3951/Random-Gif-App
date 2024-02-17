import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex background flex-col relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg text-black absolute  text-center mt-[40px]  px-10 py-2 text-4xl font-bold mx-auto w-11/12">
        RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center mt-[50px] mb-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
