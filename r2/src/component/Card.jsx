import React from "react";
import './Card.css';

const Card = ({data, index, handleClick}) => {

    const { name, age, isfriendly } = data;

        return (
            <div className='m-10 rounded-lg bg-zinc-400 card p-2 w-[200px] h-[250px] relative' >
                <div className="imgdiv w-full ">
                    <img src="https://images.unsplash.com/photo-1724010930544-59b11726a226?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="flex justify-center itmes-center flex-col" >
                     <h1>Name</h1>
                      <h1>Age</h1>
                </div>

                <button onClick={ ()=>handleClick(index) } className={` ${ isfriendly === true ?  'bg-green-100' : 'bg-red-400' } absolute rounded bottom-5 w-20`} >friently</button>
            </div>
        );
};

export default Card;


