import Image from "next/image";

export default function about() {
  return (
    <div className="justadiv">
      <Image 
        className="justanimage"
        src="/favicon.ico"
        alt="justanimage"
        width={50}
        height={50}
      />
      <h1
        className="heading1"
      >Split.co</h1>
      <h2
        className="heading2"
      >About</h2>
      <h2
        className="heading2"
      >bruh</h2>
      <h2
        className="heading2"
      >damn</h2>
    </div>
  );
}