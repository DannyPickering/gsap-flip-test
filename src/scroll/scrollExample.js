import '../style.css'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(Flip, ScrollTrigger)

const cardWrapper = document.querySelector('.card-wrapper')
const card = document.querySelector('.card')
const cardBack = document.querySelector('.card__back')
const offersImgWrapper = document.querySelector('.offers-img-wrapper')

console.log('scroll example')

// cardFlipTL.pause()
gsap.set(cardWrapper, {
  perspective: 800
})

gsap.set(card, {
  transformStyle: 'preserve-3d'
})

gsap.set(cardBack, {
  rotationY: -180
})


let flipCtx;

function scrollAnim() {
  flipCtx && flipCtx.revert()

  const heroContent = document.querySelector('.hero__content')

  heroContent.append(cardWrapper)

  flipCtx = gsap.context(() => {
    const state = Flip.getState(cardWrapper)
    offersImgWrapper.appendChild(cardWrapper)

    const cardFlip = Flip.from(state, {
      absolute: true,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.hero',
        start: '11px top',
        end: 'bottom center',
        scrub: true,
        markers: true,
        onEnter: () => {
          gsap.to(card, { rotationY: 180, duration: 0.5 })
        },
        onLeaveBack: () => {
          gsap.to(card, { rotationY: 0, duration: 0.5 })
        }
      }
    })

    ScrollTrigger.create({
      trigger: '.hero',
      start: '10px top',
      end: 'bottom center',
      scrub: true,
      animation: cardFlip
    })
  })
}

scrollAnim()

const fadeIns = document.querySelectorAll('.fade-in')

fadeIns.forEach((item) => {
  console.log(item)
  const tl = new gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top center',
      markers: false,
      duration: 0.4,
      toggleActions: 'play reverse play reverse'
    }
  })

  tl.from(item, {
    autoAlpha: 0,
    y: 20,
    ease: 'power2.inOut'
  })
})
