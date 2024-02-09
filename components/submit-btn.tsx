import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}

// import React, { useState } from "react";
// import { FaPaperPlane } from "react-icons/fa";

// export default function SubmitBtn() {
//   const [pending, setPending] = useState(false);

//   const handleSubmit = () => {
//     // Handle form submission
//     setPending(true); // Set pending state to true when submitting
//     // Simulate a submission process
//     setTimeout(() => {
//       setPending(false); // Reset pending state after submission completes
//     }, 2000); // Adjust the timeout as needed
//   };

//   return (
//     <button
//       type="submit"
//       className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
//       onClick={handleSubmit}
//       disabled={pending}
//     >
//       {pending ? (
//         <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
//       ) : (
//         <>
//           Submit{" "}
//           <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
//         </>
//       )}
//     </button>
//   );
// }
