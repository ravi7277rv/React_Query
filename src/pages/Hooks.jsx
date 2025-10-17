import React, { useState } from "react";
import HookTab from "../components/react-hooks/tabComponent/hookTab";
import UseStateHook from "../components/react-hooks/UseStateHook";
import UseEffectHook from "../components/react-hooks/UseEffectHook";
import UseRef from "../components/react-hooks/UseRef";
import UseReducer from "../components/react-hooks/UseReducer";

const Hooks = () => {
  const [selectedHook, setSelectedHook] = useState("usestate");
  const hookContent = {
    usestate: <UseStateHook />,
    useeffect: <UseEffectHook />,
    useref: <UseRef />,
    usereducer: <UseReducer />,
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-[3rem]">
        <h2 className="py-3 px-8">Hooks</h2>
      </div>
      <div className="w-[95%] mx-auto h-auto border-b-2 border-gray-500 flex justify-around items-center flex-wrap">
        <HookTab
          selectedHook={selectedHook}
          setSelectedHook={setSelectedHook}
        />
      </div>
      {hookContent[selectedHook] && (
        <section className="w-[95%] mx-auto h-[43rem]  bg-[#414141] mt-2 rounded-xl p-4">
          {hookContent[selectedHook]}
        </section>
      )}
    </div>
  );
};

export default Hooks;
