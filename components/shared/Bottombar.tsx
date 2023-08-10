'use client'

import {sidebarLinks} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {SidebarLink} from "@/components/shared/LeftSidebar";

const Bottombar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const isActive = (route: string) => (pathname.includes(route) && route.length > 1) || pathname === route

    return (
        <section className='bottombar'>
            <div className='bottombar_container'>
                {sidebarLinks.map((link: SidebarLink) =>
                    (
                        <Link className={`bottombar_link ${isActive(link.route) && 'bg-primary-500'}`}
                              key={link.label}
                              href={link.route}>
                            <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
                            <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    ))}
            </div>
        </section>
    )

}

export default Bottombar;