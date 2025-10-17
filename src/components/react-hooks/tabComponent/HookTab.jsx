import React, { Suspense } from "react";

const HookTab = ({ selectedHook, setSelectedHook }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Basic Hooks */}
      <div
        onClick={() => setSelectedHook("usestate")}
        className={`${
          selectedHook === "usestate" ? "bg-gray-500 text-white" : ""
        } py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg cursor-pointer`}
      >
        useState
      </div>
      <div
        onClick={() => setSelectedHook("usecontext")}
        className={`${
          selectedHook === "usecontext" ? "bg-gray-500 text-white" : ""
        } py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg cursor-pointer`}
      >
        useContext
      </div>
      <div
        onClick={() => setSelectedHook("useeffect")}
        className={`${
          selectedHook === "useeffect" ? "bg-gray-500 text-white" : ""
        } py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg cursor-pointer`}
      >
        useEffect
      </div>
      {/* Additional Hooks */}
      <div
        onClick={() => setSelectedHook("usereducer")}
        className={`${
          selectedHook === "usereducer" ? "bg-gray-500 text-white" : ""
        } py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg cursor-pointer`}
      >
        useReducer
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useCallback
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useMemo
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useRef
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useImperativeHandle
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useLayoutEffect
      </div>
      {/* Newer / Advanced Hooks (React 18+) */}
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useTransition
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useDeferredValue
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useId
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useSyncExternalStore
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useInsertionEffect
      </div>
      {/* React Router Hook */}
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useNavigate
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useParams
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useLocation
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useSearchParams
      </div>
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useOutletContext
      </div>
      {/* Custom Hooks */}
      <div className="py-1 px-4 mx-2 my-2 text-gray-400 border-1 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white font-semibold text-lg ">
        useCustomHookName
      </div>
    </Suspense>
  );
};

export default React.memo(HookTab);
