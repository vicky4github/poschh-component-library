import React from 'react';
import './layout1.css';
import Draggable from 'react-draggable';
import {ResizableBox}  from 'react-resizable';

/**
 * type UI component for user interactions
 */
export const Layout1 = () => {
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);
  return (
    <div className='flex flex-col lg:w-[900px] h-[400px] md:w-[600px] sm:[400px]  border-2 border-black p-4'>
        <Draggable bounds='parent'>
            <ResizableBox  className='box bg-red-500' width={200}  height={200} draggableOpts={{grid: [25, 25]}}>
               <span>Hello!</span>       
            </ResizableBox>
            
        </Draggable>
        

    </div> 
  );
};