import Image from "next/image";

export default function Home() {
  return (
    <div className="justadiv">
      <img 
        className="justanimage"
        src="favicon.ico"
        alt="justanimage"
      />
      <h1
        className="heading1"
      >Next.js</h1>
      <h2
        className="heading2"
      >Home</h2>
      <h2
        className="heading2"
      >Introduction</h2>
      <h2
        className="heading2"
      >Menu</h2>
    </div>
  );
}