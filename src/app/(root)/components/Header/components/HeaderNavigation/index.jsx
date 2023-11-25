'use client'

import { usePathname, useRouter } from 'next/navigation'

const HeaderNavigation = ({ menu }) => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav>
      <ul className="flex items-center gap-10">
        {menu.map((item, index) => (
          <li
            key={index}
            onClick={() => router.push(item.href)}
            className={`${
              item.href === pathname && 'after:!block'
            } transition-all font-raleway relative after:absolute after:left-0 after:mt-1 after:animate-scale-in after:hidden hover:after:block after:bg-primary after:w-full after:h-[2px] border-primary active:scale-[0.96] cursor-pointer text-neutral-700 py-1 hover:bg-neutral-50/10 rounded`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNavigation
