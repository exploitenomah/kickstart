import { ButtonBase, PrimaryBtn } from '../components/Buttons'
import { FaChevronCircleDown } from 'react-icons/fa'
import { H1 } from '../components/Headings'
import TypographyBase from '../components/Typography'
export default function Home() {


  return (
    <div className='text-white'>
      <main className='min-h-[95vh] flex px-8 items-center bg-hero-pattern-mobile md:bg-hero-pattern bg-cover bg-no-repeat bg-blend-multiply bg-center'>
        <div className='max-w-[1020px] relative mx-auto md:ml-24 text-center md:text-left'>
          <h1 className='text-white text-4xl md:text-7xl font-light mt-32'>
            Bring <span className='text-purple-300'>Ideas</span> to life
          </h1>
          <i className='text-white text-xs capitalize font-bold'>yours, mine, theirs, ours</i>
          <div className='flex gap-x-12 my-5'>
            <PrimaryBtn>Campaigns</PrimaryBtn>
            <PrimaryBtn>Create Mine</PrimaryBtn>
          </div>
          <ButtonBase
            onClick={() => window.scrollTo({
              top: 1300,
              left: 0,
              behavior: 'smooth'
            })}
            className='flex-col mx-auto md:mx-0 mt-24 gap-y-3 animate-pulse hover:animate-none transition-all duration-300 text-white uppercase font-bold flex justify-items-end items-center'>
            <span>learn more</span> <FaChevronCircleDown className='w-full h-12' />
          </ButtonBase>
        </div>
      </main>
      <section className='px-8 md:px-24 py-28 flex flex-col gap-y-5'>
        <H1 as='h2' className='mb-8 mt-4'>What do we do&nbsp;?</H1>
        <TypographyBase className='text-white/80'>
          Have you ever had that idea that you were certain was going to be
          your indelible print on the world but then weren&apos;t able to bring
          it to fruition because it was just beyond your financial reach?
        </TypographyBase>
        <TypographyBase className='text-white/80'>
          Or yet still, had to put the completion of a completely amazing solution because
          you could&apos;t find the solution to it&apos;s funding?
        </TypographyBase>
        <TypographyBase className='text-white/80'>
          Maybe this happened to you, or maybe it brings someone else to mind. 
          All of these setbacks to our creativity can now be mere chaff with fundy under our belt.
        </TypographyBase>
        <TypographyBase className='text-white/80'>
          Have an <span>idea</span> or project that needs funding? 
        </TypographyBase>
        <TypographyBase className='text-white/90'>In just 2 easy steps and your idea is well underway</TypographyBase>
        <ul className='capitalize list-disc px-8 flex flex-col gap-y-5'>
          <TypographyBase className='text-slate-100' as='li'>draft your plan</TypographyBase>
          <TypographyBase className='text-white/100' as='li'>
            Create a&nbsp;&nbsp;&nbsp;<PrimaryBtn className='text-purple-200'>new campaign</PrimaryBtn>
          </TypographyBase>
        </ul>
      </section>
    </div>
  )
}

Home.title = 'Fundy'