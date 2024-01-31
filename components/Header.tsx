"use client";

import {useRouter} from "next/navigation"
import {twMerge} from "tailwind-merge"
import {RxCaretLeft, RxCaretRight} from "react-icons/rx"
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

import React, { useState } from 'react';
import { ConfigProvider, Modal, Space } from 'antd';
import { createStyles, useTheme } from 'antd-style';
const useStyle = createStyles(({ token }) => ({
    'my-modal-body': {
      background: token.blue1,
      padding: token.paddingSM,
    },
    'my-modal-mask': {
      boxShadow: `inset 0 0 15px #fff`,
    },
    'my-modal-header': {
      borderBottom: `1px dotted ${token.colorPrimary}`,
    },
    'my-modal-footer': {
      color: token.colorPrimary,
    },
    'my-modal-content': {
      border: '1px solid #333',
    },
  }));


interface header_props {
    children : React.ReactNode;
    className?: string;
}

const Header : React.FC<header_props> = ({children, className })=>{
    const [isModalOpen, setIsModalOpen] = useState([false, false]);
     const { styles } = useStyle();
     const token = useTheme();

     const toggleModal = (idx: number, target: boolean) => {
       setIsModalOpen((p) => {
         p[idx] = target;
         return [...p];
       });
     };
    //  const toggleModal = (idx: number, target: boolean) => {
    //     setIsModalOpen((p) => {
    //       p[idx] = target;
    //       return [...p];
    //     });
    //   };
    
      const classNames = {
        body: styles['my-modal-body'],
        mask: styles['my-modal-mask'],
        header: styles['my-modal-header'],
        footer: styles['my-modal-footer'],
        content: styles['my-modal-content'],
      };
    
      const modalStyles = {
        header: {
          borderLeft: `5px solid ${token.colorPrimary}`,
          borderRadius: 0,
          paddingInlineStart: 5,
        },
        body: {
          boxShadow: 'inset 0 0 5px #999',
          borderRadius: 5,
        },
        mask: {
          backdropFilter: 'blur(10px)',
        },
        footer: {
          borderTop: '1px solid #333',
        },
        content: {
          boxShadow: '0 0 30px #999',
        },
      };
    


    const router = useRouter();
        const handle_logout = ()=>{
            // next
        }
    return (
        <div 
        className = {twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        
        `, className)}
        >
            <div className="
                w-full
                mb-4
                flex
                items-center
                justify-between
                
            ">
                <div className="hidden  md:flex gap-x-4 items-center">
                    <button
                    onClick = {()=> router.back()}

                    className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-100
                    transition
                    "
                    >
                        <RxCaretLeft 
                        className="text-white"
                        size={37} />
                    </button>
                    <button
                    onClick = {()=> router.forward()}
                    className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-100
                    transition
                    "
                    >
                        <RxCaretRight 
                        className="text-white"
                        size={37} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="bg-white p-2 rounded-full flex item-center justify-center hover:opacity-70 transition">
                        <HiHome className="text-black" size={30} />
                    </button >
                    <button className="bg-white p-2 rounded-full flex item-center justify-center hover:opacity-70 transition">
                        <BiSearch className="text-black" size={30} />
                    </button >
                </div>
                <div className="flex item-center  justify-between gap-x-3">
                     {/* <button className="  text-gray-300 px-4 py-2 rounded-full font-bold">
                       Sign up
                     </button>
                     <button className="  bg-white text-black px-4 py-2 rounded-full font-bold">
                       Login
                     </button> */} 
                   <>
                     <div>
                        <Button
                       onClick={() => toggleModal(1, true)}
                       className="
                            bg-transparent
                            text-neutral-300
                            font-medium
                        "   
                        >
                            Sign up
                        </Button>
                       
                     </div>
                     <div>
                        <Button
                        onClick={()=>{}}
                        className="
                            bg-white
                            px-6
                            py-2
                            font-medium
                        "   
                        >
                            log in
                        </Button>
                       
                     </div>
                   </>
                </div>
            </div>
            {children}

        <Modal
          title="Basic Modal"
          open={isModalOpen[1]}
          onOk={() => toggleModal(1, false)}
          onCancel={() => toggleModal(1, false)}
          
        >
           
        </Modal>
        </div>
    );
}

export default Header