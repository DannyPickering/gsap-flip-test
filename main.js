import './style.css'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(Flip, ScrollTrigger)

const cardWrapper = document.querySelector('.card-wrapper')
const card = document.querySelector('.card')
const cardBack = document.querySelector('.card__back')
const offersImgWrapper = document.querySelector('.offers-img-wrapper')

gsap.set(cardWrapper, {
  perspective: 800
})

gsap.set(card, {
  transformStyle: 'preserve-3d'
})

gsap.set(cardBack, {
  rotationY: -180
})

export const cardFlipTL = new gsap.timeline({
  repeat: -1,
  repeatDelay: 2
})

cardFlipTL
  .addLabel('start')
  .to(card, {
    rotationY: 20,
    duration: 1.2,
    ease: 'power1.inOut'
  })
  .to(card, {
    rotationY: -20,
    duration: 1.2,
    ease: 'power1.inOut'
  })
  .addLabel('back')
  .to(card, {
    rotationY: 200,
    duration: 1.2,
    ease: 'power1.inOut'
  })
  .to(card, {
    rotationY: 160,
    duration: 1.2,
    ease: 'power1.inOut'
  })
  .to(card, {
    rotationY: 180,
    duration: 1.2,
    ease: 'back.out(1)'
  })
  .addLabel('backEnd')
  .to(card, {
    rotationY: -20,
    duration: 1.2,
    ease: 'power1.in'
  }, 'backEnd+=5')
  .addLabel('pause')
  .to(card, {
    rotationY: 20,
    duration: 1.2,
    ease: 'power1.inOut'
  }, 'pause')
  .to(card, {
    rotationY: 0,
    duration: 1.2,
    ease: 'power1.inOut'
  }, 'pause+=1.2')

// cardFlipTL.play()