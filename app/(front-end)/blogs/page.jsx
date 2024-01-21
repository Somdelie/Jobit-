import React from "react";
import Image from "next/image";
import { Avatar } from "@mui/material";
import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      <div className="h-[60px] w-full bg-gray-600"></div>
      <div className="grid sm:grid-cols-2">
        <div className="grid gap-3">
          <Image src="/blog-image.png" alt="" width={500} height={500} />

          <span>Programming</span>
          <h2>
            Releasing code in large corporations is slow - and there is a good
            reason for it
          </h2>
          <div className="flex gap-2">
            <Avatar src="/avatar-3.png" alt="" />
            <div>
              <h3 className="">Micheal Gough</h3>
              <p>Posted on Jan 31</p>
            </div>
          </div>
            <p>
              One of the things I always loved about the web is its immediacy.
              You write a piece of code, publish it somewhere and people can
              access it.
            </p>
            <Link href="#">Read more</Link>
        </div>

        {/* right-row---------- */}
        <div>
          <div>
            <span>Programming</span>
            <h2>How to schedule your tweets to send later</h2>
            <p>
              Static websites are now used to bootstrap lots of websites and are
              becoming the basis for a variety of tools that even.
            </p>
            <Link href="#">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
