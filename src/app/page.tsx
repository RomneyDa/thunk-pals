"use client"
import Menu from "@/components/layout/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MovingTilesTestimonials from "@/components/home/Testimonials";
import { recentWork } from "@/components/home/recent-work";
import FAQs from "@/components/home/FAQs";
import PrivacyPolicy from "@/components/home/PrivacyPolicy";
import TermsOfService from "@/components/home/TermsOfService";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { CheckIcon, EqualIcon, XIcon } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/insightpal/intro"
const STRIPE_LINK = "https://checkout.stripe.com/c/pay/cs_live_b1tk14B8kf434xvP5fPPYldu0nd01RDesDvLIlje1cEZdHPST4TDlufsE5#fid2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ3Zxd2x1YERmZmpwa3EnPydkZmZxWjRKN0NAckRhZ2Rfa01gbmAnKSdkdWxOYHwnPyd1blppbHNgWjA0S0FKN0BGXTVOMHNGUWl9M1I9M0sxPVdcaDBAMzVqQ391ZlxgSk5qYHZvcz1scWNvbHxvPX9cMmRUakRMMUNuYH1PTX9mPVB%2FZkFwUzBzMkpjdmRWfHdvNTVHYmRTSzN2fScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl"
const BREEEW_LINK = "https://insightpal.breeew.com/sign-in"


const ViewPlansButton = () => (
  <Link href="#pricing" scroll={true}
    className="text-center rounded-full px-[40px] py-[20px] ring-accent hover:ring-[4px] transition-all duration-300 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold text-lg"
  >View Plans</Link>
)
const CalendlyLink = () => (
  <Link href={CALENDLY_LINK}
    className="text-primary hover:text-secondary underline"
  >Book a call</Link>
)

const YellowX = () => {
  return (
    <span className="bg-yellow-300 h-6 w-6 p-1 rounded-full flex items-center justify-center">
      <XIcon strokeWidth={4} />
    </span>
  )
}

const GreenCheck = () => {
  return (
    <span className="bg-primary h-6 w-6 p-1 rounded-full flex items-center justify-center">
      <CheckIcon strokeWidth={4} />
    </span>
  )
}

export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);
  return (
    <>
      <header className="bg-background fixed left-0 top-0 flex w-full justify-between p-4 z-50"
        style={{
          transform: `translateY(${scrollPosition < 30 ? 0 : 30 - scrollPosition}px)`,
          opacity: `${scrollPosition < 30 ? 1 : 1 - (scrollPosition - 30) / 100}`
        }}
      >
        <h1 className="p-5 font-bold text-lg transition-all duration-300 hover:text-xl cursor-pointer text-center">thunkpal</h1>
        <Menu />
      </header>
      <main className="no-scrollbar overflow-y-scroll flex h-screen flex-col items-center lg:pt-8"
        onScroll={(e) => {
          // console.log(scrollPosition)
          setScrollPosition(e.currentTarget.scrollTop);
        }}
      >
        <section id="intro" className="pt-32 w-full px-12 leading-tight 
        -[1000px] flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Hire an entire data team in 60 seconds.</h2>
          <Image src={"/images/streak.png"} height={100} width={7} alt="streak" className="rotate-90 -translate-y-[45px] -translate-x-[50px] m-0 p-0" />
          <h3 className="font-bold text-xl md:text-2xl">For half the price of <span className="italic">one</span> full-time Data Analyst.</h3>
          <p className="mt-3 mb-7 text-lg md:text-xl text-muted-foreground font-semibold">{`Love us in your first 30 days, or it's free`}</p>
          <ViewPlansButton />
          <div className="bg-primary rounded-full mt-16">
            <ArrowDownIcon height={90} width={60} color="hsl(var(--primary-foreground)" className="bounce-arrow cursor-pointer px-2" />
            {/* hover:animate-none kind of fun effect */}
          </div>
        </section>
        <section id="benefits"
          className="pt-32 w-full flex flex-col items-center"
        >
          {/* Tiles */}
          <div className="max-w-[1100px] px-7 grid grid-cols-1 tiny:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-1 tiny:col-span-2 rounded-[40px] pt-3 pb-[20px] px-4 flex flex-row flex-wrap tiny:flex-row-reverse tiny:flex-nowrap gap-5 bg-card text-card-foreground items-center justify-center">
              <div className="flex-1 min-w-[150px]">
                <div className="bg-clip-text bg-gradient-to-tr from-primary-foreground to-accent-foreground">
                  <p className="text-transparent text-6xl font-extrabold leading-none">47<span className="text-5xl text-transparent">%</span></p>
                </div>
                <p className="font-accent font-bold text-xl">cheaper than hiring <span className="italic">one</span> full-time Data Analyst.</p>
                <p className="font-semibold text-muted-foreground">*based on data from Glassdoor</p>
              </div>
              <Image className="self-end translate-y-[20px] h-auto" src={"/images/girl.png"} height={200} width={195} alt="analyst" />
            </div>
            <div className="col-span-1 bg-card text-card-foreground rounded-[40px] p-5 flex flex-col items-center gap-5">
              <Image src={"/images/mac.png"} height={100} width={200} alt="computer" className="w-full scale-[120%]" />
              <div className="flex flex-col gap-1">
                <p className="scale-y-90 font-bold text-md">ASYNC MEETINGS</p>
                <p className="font-bold text-lg leading-snug">Say goodbye to endless meetings - we use Loom to eliminate calendar clutter.</p>
              </div>
            </div>
            <div className="col-span-1 bg-card text-card-foreground rounded-[40px] p-5 flex flex-col items-center gap-5 justify-center">
              <Image className="max-w-full" src={"/images/no-hiring.png"} height={80} width={300} alt="hiring" />
              <div>
                <p className="scale-y-90 font-bold text-md">NO HIRING NEEDED</p>
                <p className="font-bold text-lg leading-snug">Save weeks of time by skipping the hiring process.</p>
              </div>
            </div>
            <div className="col-span-1 tiny:col-span-2 flex-wrap tiny:flex-nowrap bg-card text-card-foreground rounded-[40px] px-5 pt-6 pb-[20px] flex flex-row gap-1 tiny:gap-5">
              <div className="self-start flex-1 flex flex-col items-start gap-3 justify-center">
                <p className="text-black border border-black px-4 text-sm rounded-full">10+ Years Experience</p>
                <p className="font-bold text-xl sm:text-2xl leading-snug">{`We're Tableau & Hex experts - your data has never been so excited to meet us.`}</p>
              </div>
              <Image className="self-end flex-1 translate-y-[20px] mx-4 tiny:mr-8" src={"/images/macbook.png"} height={150} width={150} alt="macbook" />
            </div>
          </div>
          {/* Arrow "easiest hire section" */}
          <div className="max-w-[1100px] px-7 text-center">
            <Image className="mt-20 mb-8 mx-auto" src={"/images/down-arrow.png"} height={200} width={50} alt="down arrow" />
            <h2 className="text-3xl font-bold">{`The easiest hire you've ever made.`}</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-2 font-semibold">
              <div className="flex flex-col gap-2 items-center">
                <Image src={"/images/hire-subscribe.png"} height={100} width={70} alt="hire handshake" />
                <p className="text-muted-foreground">Subscribe to a plan & start adding your requests.</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image className="h-auto" src={"/images/hire-receive.png"} height={100} width={78} alt="hire network" />
                <p className="text-muted-foreground">Receive your deliverable within 3 business days.</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image className="h-auto" src={"/images/hire-revise.png"} height={100} width={64} alt="hire target" />
                <p className="text-muted-foreground">{`We revise each request until you're completely satisfied.`}</p>
              </div>
            </div>
            <div className="mt-16">
              <ViewPlansButton />
            </div>
          </div>
          <Image className="mx-auto mt-8 translate-y-[50%]" src={"/images/streak.png"} height={100} width={10} alt="streak" />
          {/* Moving tiles testimonials section */}
          <MovingTilesTestimonials />
          {/* How can we help section */}
          <div className="pt-24 pl-12 pr-8">
            <h2 className="font-bold text-2xl">How can we help?</h2>
            <div className="flex flex-row mt-5 flex-wrap">
              <div className="flex-1 flex flex-col gap-2 min-w-[200px]">
                <h3 className="font-bold text-md">Dashboards</h3>
                <p className="font-semibold text-muted-foreground">{`Tableau & Hex are our bread and butter. We're experts in building beautiful, functional dashboards that tell the story of your data.`}</p>
                <h3 className="font-bold text-md">Analysis</h3>
                <p className="font-semibold text-muted-foreground">{`Collecting data but not sure what to do with it? We'll extract insights and provide clear recommendations to improve efficiency & increase profits.`}</p>
                <h3 className="font-bold text-md">Web Apps</h3>
                <p className="font-semibold text-muted-foreground">{`Is your team manually manipulating data? Wish you had a tool to automate that task? We'll build you a secure app in Hex that saves time for your whole team.`}</p>
                <h3 className="font-bold text-md">Data Warehousing</h3>
                <p className="font-semibold text-muted-foreground">Whether you have an existing data warehouse or have no idea what that means - we can help build & maintain a cost-efficient way to get all your data into one place.</p>
              </div>
              <div className="flex-1 p-4 min-w-[350px]">
                <div className="rounded-[40px] bg-card pb-8 pt-20 px-8 flex flex-col">
                  <Image className="w-full px-5" src={"/images/macbook.png"} height={200} width={200} alt="computer" />
                  <div className="rounded-[20px] bg-accent gap-5 px-8 py-5 flex flex-row">
                    <div className="flex flex-col justify-center items-center">
                      <Image className="flex-shrink-1" src={"/images/handshake.png"} height={31} width={52} alt="handshake" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold  text-accent-foreground">Still have questions?</h3>
                      <p className="font-bold text-secondary">{`Let's chat.`}</p>
                    </div>
                  </div>
                  <Link target="_blank" href={CALENDLY_LINK} className="mt-4 text-center rounded-full font-bold py-4 px-8 bg-accent ring-accent hover:scale-[110%] transition-all duration-300 cursor-pointer text-primary hover:text-accent-foreground">Book a call</Link>
                </div>
              </div>
            </div>
          </div>
          <Image className="mt-16 mb-16" src={"/images/streak.png"} height={100} width={10} alt="streak" />
          {/* How it works  */}
          <div className="pr-8 pl-2">
            <div className="flex flex-row mt-5 flex-wrap">
              <div className="flex-1 p-4 pt-16 min-w-[350px]">
                <div className="rounded-[40px] bg-card pb-8 pt-20 px-8 flex flex-col">
                  <Image className="w-full px-5" src={"/images/man.png"} height={200} width={200} alt="computer" />
                  <div className="rounded-[20px] bg-accent gap-5 px-8 py-5 flex flex-row">
                    <div className="flex flex-col justify-center items-center">
                      <Image className="flex-shrink-1" src={"/images/calc.png"} height={45} width={45} alt="calculator" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold  text-accent-foreground">A whole data team</h3>
                      <p className="font-bold text-secondary">for a fraction of the cost.</p>
                    </div>
                  </div>
                  <Link scroll href="#pricing" className="mt-4 text-center rounded-full font-bold py-4 px-8 bg-accent ring-accent hover:scale-[110%] transition-all duration-300 cursor-pointer text-primary hover:text-accent-foreground">Try us out</Link>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2 min-w-[200px] px-4">
                <h2 className="font-bold text-2xl">How it works</h2>
                <h3 className="text-lg text-muted-foreground font-semibold leading-tight mb-3">Get started in less than 60 seconds.</h3>
                <h3 className="font-bold text-md">Subscribe to a plan</h3>
                <p className="font-semibold text-muted-foreground">{`Select one of the plans below & add your details. Once complete, you'll get immediate access to your Client Portal to start adding requests.`}</p>
                <h3 className="font-bold text-md">Start adding requests</h3>
                <p className="font-semibold text-muted-foreground">{`We'll provide a request template in your portal -  add all the details (or even a Loom video!) to your request & we'll get started.`}</p>
                <h3 className="font-bold text-md">We get to work</h3>
                <p className="font-semibold text-muted-foreground">We get notified whenever a new request is added - our team will start working on it and provide updates along the way. You get final approval before we move on!</p>
              </div>
            </div>
          </div>
        </section>
        <Image className="translate-y-1/2" src={"/images/streak.png"} height={100} width={10} alt="streak" />
        <section id="compare-us" className="pt-32 px-8 pb-24 w-full bg-card">
          <h1 className="text-center font-bold text-3xl">A quick comparison.</h1>
          <h2 className="mt-1 text-center text-muted-foreground text-lg font-semibold">We think the  numbers speak for themselves.</h2>
          <div className="flex flex-row mt-12 gap-5 items-start flex-wrap justify-center">
            <div className="flex flex-col rounded-[20px] bg-secondary p-4 gap-3 min-w-[200px] max-w-[350px] flex-1">
              <h2 className="text-lg font-bold text-primary-foreground">Full-Time Data Analyst</h2>
              <p className="text-sm font-semibold text-muted-foreground">Monthly Costs:</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><YellowX />Salary - $6,000</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><YellowX />Benefits - $1,250</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><YellowX />Paid Time Off - $425</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><YellowX />401k Match - $240</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><YellowX />Software - $50</p>
              <p className="text-sm font-semibold text-muted-foreground">Added Costs:</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><YellowX />Recruitment - $2,000</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><YellowX />Onboarding - $1,000</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><YellowX />Training - $1,500</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center border-b pb-2 mb-1"><YellowX />Equipment - $2,500</p>
              <p className="text-md font-semibold text-primary-foreground flex flex-row gap-2 items-center"><span className="bg-yellow-300 h-6 w-6 p-1 rounded-full flex items-center justify-center">
                <EqualIcon strokeWidth={4} />
              </span>$7,965/month + $7,000 Added Costs</p>
            </div>
            <div className="flex-1 flex flex-col rounded-[20px] bg-secondary p-4 gap-3 min-w-[200px] max-w-[350px]">
              {/* <h2 className="text-xl text-black font-bold">thunkpal</h2> */}
              <Image className="pt-2" src={"/images/logo.png"} height={30} width={150} alt="thunkpal" />
              <p className="text-sm font-semibold text-muted-foreground">Costs:</p>
              <p className="text-sm font-semibold text-muted-foreground flex flex-row gap-2 items-center"><GreenCheck />$2,995/month</p>
              <p className="text-sm font-semibold text-muted-foreground mb-10">Pause or cancel anytime.</p>
              <ViewPlansButton />
            </div>
          </div>
        </section>
        <section id="recent-work" className="pt-32 w-full">
          <h1 className="text-center text-primary-foreground text-3xl font-bold mb-2">{`Some cool stuff we've built:`}</h1>

          <div className="flex flex-col w-screen overflow-hidden">
            <div className="flex">
              <div className="flex flex-row gap-6 recent-work-flow">
                {recentWork.map((work, i) => (
                  <div key={i} className="flex flex-col p-6 bg-card rounded-[20px] min-w-[450px]">
                    <Image className="self-center" src={work.image} height={200} width={400} alt={work.company} />
                    <h2 className="font-bold text-primary-foreground text-lg mt-3">{work.testimonial}</h2>
                    <p className="font-bold text-black text-md mt-2">{work.name}</p>
                    <p className="text-muted-foreground font-semibold text-md">{work.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <ViewPlansButton />
          </div>
        </section>

        <section id="pricing" className="w-full pt-8">
          <Image src={"/images/down-arrow.png"} height={100} width={40} alt="arrow" className="mx-auto" />

          <h1 className="text-4xl font-bold text-center mt-4">Pricing Plans</h1>
          <div className="flex flex-row flex-wrap gap-6 mx-12">
            <div className="flex-1 flex flex-col min-w-[200px] rounded-[35px] bg-secondary items-start pb-16 mt-6">
              <p className="text-sm font-bold px-3 py-[1px] mx-5 mt-5 bg-primary rounded-full"><span className="text-lg">2</span> SPOTS LEFT</p>
              <h2 className="text-3xl font-bold mx-5">Viz Only</h2>
              <p className="text-md font-semibold text-muted-foreground mx-5">BYOD (Bring Your Own Data), we make it useful.</p>
              <div className="mt-3 border-b border-card-foreground/40 h-[1px] w-full" />
              <h2 className="text-4xl font-bold mx-5 mt-2">$2,995<span className="text-3xl">/mo</span></h2>
              <p className="text-md font-semibold text-muted-foreground mx-5">Pause or cancel anytime.</p>
              <Link href={STRIPE_LINK} className="mx-5 self-center mt-4 bg-accent text-accent-foreground text-lg font-bold p-4 px-10 rounded-full">Get started</Link>
              <Link href={CALENDLY_LINK} target="_blank" className="self-center my-3 font-semibold underline hover:text-primary text-primary-foreground">Book a call</Link>
              <div className="ml-2 flex flex-col gap-4 mt-2">
                <h3 className="font-bold text-md">Includes</h3>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />One request at a time</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Average 72 hour delivery  </p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Unlimited requests in backlog</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Unlimited revisions</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Unlimited Users</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Easy credit card payments</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Pause or cancel anytime</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col min-w-[200px] rounded-[35px] bg-secondary items-start pb-16 mt-6">
              <p className="text-sm font-bold px-3 py-[1px] mx-5 mt-5 bg-primary rounded-full"><span className="text-lg">1</span> SPOT LEFT</p>
              <h2 className="text-3xl font-bold mx-5 leading-tight">Viz + Data Management</h2>
              <p className="text-md font-semibold text-muted-foreground mx-5">{`We'll sync all your data to one place & make it useful.`}</p>
              <div className="mt-3 border-b border-card-foreground/40 h-[1px] w-full" />
              <h2 className="text-4xl font-bold mx-5 mt-2">$5,995<span className="text-3xl">/mo</span></h2>
              <p className="text-md font-semibold text-muted-foreground mx-5">Pause or cancel anytime.</p>
              <Link href={STRIPE_LINK} className="mx-5 self-center mt-4 bg-accent text-accent-foreground text-lg font-bold p-4 px-10 rounded-full">Get started</Link>
              <Link href={CALENDLY_LINK} target="_blank" className="self-center my-3 font-semibold underline hover:text-primary text-primary-foreground">Book a call</Link>
              <div className="ml-2 flex flex-col gap-4 mt-2">
                <h3 className="font-bold text-md">Includes</h3>
                <p className="ml-2 font-black text-md flex flex-row gap-2"><GreenCheck />Unlimited managed data sources</p>
                <p className="ml-2 font-black text-md flex flex-row gap-2"><GreenCheck />Unlimited viz refreshes per day</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />One request at a time</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Average 72 hour delivery</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Unlimited requests in backlog</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Unlimited revisions</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Unlimited Users</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Easy credit card payments</p>
                <p className="ml-2 font-bold text-md flex flex-row gap-2"><GreenCheck />Pause or cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
        <section id="faqs" className="pt-32 w-full px-8">
          <h1 className="text-left flex-1 border-b text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <FAQs />
          <div className="flex flex-row items-center justify-center px-12">
            <div className="relative mt-32 px-2 text-center">
              <h1 className="text-4xl font-bold">{`Find out if we're a good fit`}</h1>
              <p className="text-lg text-muted-foreground font-semibold mb-2">(we totally are!)</p>
              <Link scroll href="#pricing" className="inline-block text-center rounded-full font-bold mt-4 py-4 px-8 bg-primary hover:bg-accent ring-accent hover:scale-[110%] transition-all duration-300 cursor-pointer text-primary-foreground hover:text-accent-foreground">Try us out</Link>
              <Image src={"/images/rays.png"} height={60} width={60} alt="rays" className="absolute -top-[30px] -right-[30px]" />
              <Image src={"/images/arrow-2.png"} height={100} width={140} alt="arrow" className="hidden sm:block absolute bottom-0 left-0 rotate-[20deg]" />
            </div>
          </div>
        </section>
        <section id="log-in" className="pt-32 w-full">
        </section>
        <footer className="flex flex-row w-full p-4 gap-x-10 gap-y-4 flex-wrap">
          <div className="flex flex-col gap-3 min-w-[150px]">
            <Image className="-ml-3" src={"/images/logo.png"} height={20} width={120} alt="thunkpal" />
            <p className="text-muted-foreground font-semibold text-sm">{`© ${(new Date()).getFullYear()} thunkpal, LLC`}</p>
            <p className="text-muted-foreground font-semibold text-sm">Delaware, USA</p>
          </div>
          <div className="flex flex-col gap-3 min-w-[150px]">
            <Link href="#benefits" className="text-primary-foreground font-semibold text-sm" >Benefits</Link>
            <Link href="#compare-us" className="text-primary-foreground font-semibold text-sm">Compare us</Link>
            <Link href="#faqs" className="text-primary-foreground font-semibold text-sm">FAQs</Link>
          </div>
          <div className="flex flex-col gap-3 min-w-[150px]">
            <Link href="#recent-work" className="text-primary-foreground font-semibold text-sm">Recent work</Link>
            <Link href="#pricing" className="text-primary-foreground font-semibold text-sm">Pricing</Link>
            <Link href={BREEEW_LINK} className="text-primary-foreground font-semibold text-sm">Customer log in</Link>
          </div>
          <div className="flex flex-col gap-3 min-w-[150px]">
            <PrivacyPolicy />
            <TermsOfService />
          </div>
        </footer>
        <br />
      </main>

    </>
  );
}
