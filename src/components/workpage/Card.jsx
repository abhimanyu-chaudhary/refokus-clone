
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width, project, text, title, matter, texts, hover = "false"}){
    return(
        <motion.div whileHover={{backgroundColor : hover === "true" ? "#7443FF" : "#3E3E46", paddingRight: "15px", paddingLeft: "15px"}} className={`${width} p-3 bg-zinc-800 rounded-xl min-h-[65vh] flex flex-col justify-between select-none hover:${hover}`}>
            <div className="w-full">
                <div className="flex justify-between items-center mb-6">
                    <p>{title}</p>
                    <IoIosArrowRoundForward />
                </div>
                <h2 className="text-2xl font-semibold w-[18vw]">{matter}</h2>
            </div>
            <div className="">
                {project && 
                    <>
                        <h1 className="text-8xl font-semibold mb-5">Start a Project</h1>
                        <button className="px-5 py-2 border rounded-full">Contact us</button>
                    </>      
                }
                {text && <p className="text-slate-300 w-48 text-sm">{texts}</p>}
            </div>
        </motion.div>
    )
}
export default Card;