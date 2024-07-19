import Button from "./Button";
function Product({val, mover, count}){
    return(
        <div  className="w-full h-[20rem] py-16">
            <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
                <h2 className="text-5xl font-semibold">{val.title}</h2>
                <div className="w-[45%] px-36 flex flex-col gap-3">
                    <p>{val.description}</p>
                    <div className="flex items-center gap-5">
                        {val.live && <Button title="Live Website" />}
                        {val.case && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;