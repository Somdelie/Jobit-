import React from "react";
import Image from "next/image";
import { Avatar } from "@mui/material";
import Link from 'next/link';


const Blogs = () => {
  return (
    <div>
    <div className='h-[60px] w-full bg-gray-600'></div>
      <div>
        <div className="grid gap-3">
          <Image src="/blog-image.png" alt="" width={500} height={500} />

          <span>Programming</span>
          <h2>
            Releasing code in large corporations is slow - and there is a good
            reason for it
          </h2>
        </div>
        <div>
          <Avatar src="/avatar-3.png" alt="" />
          <div>
            <h3 className="">Micheal Gough</h3>
            <p>Posted on Jan 31</p>
          </div>

          <p >
            One of the things I always loved about the web is its immediacy. You
            write a piece of code, publish it somewhere and people can access
            it.
          </p>
          <Link href='#'>Read more</Link>
        </div>
        <div>
        <div>

          <p>
            One of the things I always loved about the web is its immediacy. You
            write a piece of code, publish it somewhere and people can access
            it.
          </p>
          <Link href='#'>Read more</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
