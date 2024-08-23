import Link from "next/link";
import Image from "next/image";

type Props = {
  currentStage: number;
}

type RenderContent = {
  [key: number]: JSX.Element;
}


type InfoBoxProps = {
  text: string;
  link: string;
  btnText: string;
}

const InfoBox = ({text, link, btnText}: InfoBoxProps) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link className="neo-brutalism-white neo-btn" href={link}>
          {btnText}
          <Image 
          src='/assets/icons/arrow.svg' 
          alt='arrow icon' 
          width={14}
          height={15}
          className='w-4 h-4 object-contain'
          />
      </Link>
    </div>
  )
}


const renderContent: RenderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi! I am <span className="text-semibold">Viktoria</span>  👋, a Frontend Developer from Serbia. Welcome to my website, feel free to explore it.
    </h1>
  ),
  2: (
    <InfoBox 
      text='Read about my journey and experience'
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox 
      text='Check out my projects'
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox 
      text='Contact me if you like my work and need a developer'
      link='/contact'
      btnText='Contact'
    />
  ),
}

const HomeInfo = ({currentStage}: Props): JSX.Element => {
  return renderContent[currentStage] ?? null;
};

export default HomeInfo;