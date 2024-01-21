import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center h-screen transition w-full justify-center dark:text-white'>
    <Image width={400} height={400} src='/404-computer.svg' alt=''className='object-contain'/>
      <h2 className='text-roseRed text-[1.5rem] leading-8 font-semibold transition'>404 Not Found</h2>
      <p className='text-[36px]'>Whoops! That page doesn’t exist.</p>
      <p className='text-[16px] text-paragraph mt-4'>Here are some helpful links instead:</p>
      <div className='flex items-center gap-4 mt-2'>
        <Link href="/" className='underline text-paragraph hover:text-green transition'>Home</Link>
        <Link href="/" className='underline text-paragraph hover:text-green transition'>Search</Link>
        <Link href="/" className='underline text-paragraph hover:text-green transition'>Help</Link>
        <Link href="/" className='underline text-paragraph hover:text-green transition'>Contact</Link>
      </div>
    </div>
  );
}
