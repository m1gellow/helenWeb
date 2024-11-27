import Link from "next/link";


export default function Home() {
  const linkToWeb = "https://luminatelabs.netlify.app/"
  const linkToCommunity = "https://vk.com/luminatelabs"
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center ">
      <h1><Link href={linkToWeb} className="text-purple-500">Lum Lbs</Link> start screen</h1>
      <h2>Улыбнитесь! И подпишитесь на наше сообщество)</h2>
      <Link href={linkToCommunity} className="text-purple-500 ">Lum Lbs VK</Link>
    </div>
  );
}
