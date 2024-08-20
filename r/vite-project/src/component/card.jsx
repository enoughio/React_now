import React from 'react';

const Card = () => {

  return (
      <div className='bg-zinc-400 w-full h-screen flex item-cent justify-center gap-10' >
        Card
      </div>
  );
};



export default Card;        




// const cardData = [
//   {Image: "https://plus.unsplash.com/premium_photo-1723433351321-42e35c4b21e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D", Name: "amaxx", Description: "lorem ipsum dolorladinate afterwards"},
//   {Image: "https://plus.unsplash.com/premium_photo-1723433351321-42e35c4b21e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D", Name: "amaxx", Description: "lorem ipsum dolorladinate afterwards"},
//   {Image: "https://plus.unsplash.com/premium_photo-1723649902660-66643962d57b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D", Name: "google", Description: "lorem ipsum dolorladinate afterwards"},
// ]

{/* <div className="w-full px-4 py-10 h-100 flex item-center justified-center gap-10 bg-zinc-800">

{
  cardData.map((elem, index) => (
    <div key={index} className="w-52  bg-zinc-100 rounded-md overflow-hidden"  >
    <div className="w-42 h-32 bg-zinc-300" >
       <img className="w-full h-full object-cover " src={elem.Image} alt="" />
    </div>

    <div className="w-full px-3 py-4">
          <h2 className='font-semibold'>{elem.Name}</h2>
          <p className='text-xs mt-3'>{elem.Description}</p>
    </div>
</div>
  ))
}      */}
