import './ghostStyle.css'



export const Ghost=()=>{
const myImage=new Image();

myImage.src='data:image/jpeg;base64,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';

   return (
       <>
       <canvas id='canvas1'>



       </canvas>
       </>
   )

}