import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import Brand from '@/components/shared/Brand'
import Text from '@/components/ui/Text'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 flex md:flex-row flex-col justify-between items-start px-20 py-10">
      <div className="h-full flex mt-auto">
        <div className="w-[220px]">
          <Brand variant="white" />
        </div>
      </div>

      <div className="h-full flex flex-col gap-2 mt-auto">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">551905</Text>
          </div>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">1TDSPW</Text>
          </div>
          <Text className="text-neutral-300 min-w-[250px]">
            Gabriel Barroso de Assis França
          </Text>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">Responsive Web Development</Text>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">99708</Text>
          </div>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">1TDSPF</Text>
          </div>
          <Text className="text-neutral-300 min-w-[250px]">
            Gabriel Francisco Lobo
          </Text>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">Responsive Web Development</Text>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">552226</Text>
          </div>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">1TDSPW</Text>
          </div>
          <Text className="text-neutral-300 min-w-[250px]">
            Bruno Francisco Brito de Paula
          </Text>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">AI & Chatbot</Text>
          </div>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">
              Software Design & Total Experience
            </Text>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">550782</Text>
          </div>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">1TDSPW</Text>
          </div>
          <Text className="text-neutral-300 min-w-[250px]">
            Kayque Lima Nunes
          </Text>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">Domain Driven Design</Text>
          </div>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">Building Relational Database</Text>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">552226</Text>
          </div>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">1TDSPW</Text>
          </div>
          <Text className="text-neutral-300 min-w-[250px]">
            Felipe de Almeida Cardoso
          </Text>
          <div className="px-3 py-1 min-w-[100px] text-center rounded bg-neutral-800 text-white">
            <Text className="text-white">
              Computational Thinking Using Python
            </Text>
          </div>
        </div>
      </div>

      <div className="flex gap-6 pb-5 md:flex-col ">
        <FaInstagram className="text-white text-2xl cursor-pointer hover:text-yellow-600 transition" />
        <FaTwitter className="text-white text-2xl cursor-pointer hover:text-blue-600 transition" />
        <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-600 transition" />
        <FaYoutube className="text-white text-2xl cursor-pointer hover:text-red-600 transition" />
      </div>
    </footer>
  )
}

export default Footer
