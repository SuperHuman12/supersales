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

export default function TrustedBy() {
  return (
    <div>

    <p className="text-center">Trusted by teams</p>

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
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3d6d8b9e-51b7-4733-8611-12babc56d8c3/Strapi/w=441.59999999999997,quality=90"
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
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/1ea0aa17-ae1d-48f6-a613-2b9aa5ad3db3/gumroad-min_(1)/w=736,quality=90"
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
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/8f49a317-faff-4d7b-b378-a151042a1ce3/circle/w=294.4,quality=90"
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
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d4e13333-1551-4114-b1a6-d2a7041c58a4/spline/w=441.59999999999997,quality=90"
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
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/fe61ffd3-2569-4810-b59c-06ff0f58e32f/Clubhouse/w=441.59999999999997,quality=90"
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
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4f2d2e91-850a-49df-b099-c685aba7c766/browser-company/w=441.59999999999997,quality=90"
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
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cba078a4-ecf1-4336-97d9-bffabc5fb432/Harmony/w=736,quality=90"
            />
        </div>
    </div>
</div>

  );
}
