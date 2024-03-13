import Link from 'next/link'
import Image from 'next/image' // Import the Image component from Next.js

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      {/* Use the Image component for optimized images */}
      <Image
        src="../images/logonew-black.png" 
        alt="Logo" 
        width={200} 
        className="block" 
      />
    </Link>
  )
}
