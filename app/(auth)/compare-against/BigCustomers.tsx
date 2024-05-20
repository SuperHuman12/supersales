import Image from 'next/image'

const imageData = [
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Zespri-250x200.png',
    alt: 'Strapi',
    width: 144,
    height: 42,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Manson-250x200.png',
    alt: 'Gumroad',
    width: 200,
    height: 34,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/11/Northern-Fruit-250x200.png',
    alt: 'Circle',
    width: 120,
    height: 35,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Devos-250x200.png',
    alt: 'Spline',
    width: 144,
    height: 39,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Chelan-250x200.png',
    alt: 'Clubhouse',
    width: 192,
    height: 31,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Evelina-250x200.png',
    alt: 'Browser Company',
    width: 144,
    height: 73,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/11/Natcha-250x200.png',
    alt: 'Harmony',
    width: 240,
    height: 48,
  },
];

export default function BigCustomers() {
  return (
    <div>



      <p className="text-center">Our Customers</p>

      <div className="flex flex-row flex-wrap max-w-800 gap-4 mx-auto justify-center flex items-center p-6">
        {/* Image 1 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
          <Image
            alt="image"
            loading="lazy"
            width="144"
            height="42"
            decoding="async"
            className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
            unoptimized
            src="https://suriagrofresh.com/wp-content/uploads/2020/08/Big-Basket.png"
          />
        </div>
        {/* Image 2 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
          <Image
            alt="image"
            loading="lazy"
            width="200"
            height="34"
            decoding="async"
            className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
            unoptimized
            src="https://suriagrofresh.com/wp-content/uploads/2020/08/Walmart.png"
          />
        </div>
        {/* Image 3 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
          <Image
            alt="image"
            loading="lazy"
            width="120"
            height="35"
            decoding="async"
            className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
            unoptimized
            src="https://suriagrofresh.com/wp-content/uploads/2021/11/Ratnadeep-super-market.png"
          />
        </div>
        {/* Image 4 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
          <Image
            alt="image"
            loading="lazy"
            width="144"
            height="39"
            decoding="async"
            className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
            unoptimized
            src="https://suriagrofresh.com/wp-content/uploads/2020/08/Google.png"
          />
        </div>
        {/* Image 5 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
          <Image
            alt="image"
            loading="lazy"
            width="192"
            height="31"
            decoding="async"
            className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
            unoptimized
            src="https://suriagrofresh.com/wp-content/uploads/2021/11/Nature-Basket.png"
          />
        </div>
        {/* Image 6 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
          <Image
            alt="image"
            loading="lazy"
            width="144"
            height="73"
            decoding="async"
            className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
            unoptimized
            src="https://suriagrofresh.com/wp-content/uploads/2020/08/More.png"
          />
        </div>
        {/* Image 7 */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4">
          <Image
            alt="image"
            loading="lazy"
            width="240"
            height="48"
            decoding="async"
            className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto w-1/2 md:w-full p-4"
            unoptimized
            src="https://suriagrofresh.com/wp-content/uploads/2020/08/Reliance-Fresh.png"
          />
        </div>
      </div>


    </div>

  );
}
