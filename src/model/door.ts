export default class DoorModel {
  #number: number
  #haveGift: boolean
  #selected: boolean
  #open: boolean

  constructor(number: number, haveGift = false, selected = false, open = false) {
    this.#number = number
    this.#haveGift = haveGift
    this.#selected = selected
    this.#open = open
  }

  get number() {
    return this.#number
  }
  get haveGift() {
    return this.#haveGift
  }
  get selected() {
    return this.#selected
  }
  get open() {
    return this.#open
  }

  deselect() {
    const selected = false
    return new DoorModel(this.number, this.haveGift, selected, this.open)
  }

  switchSelect() {
    const selected = !this.selected
    return new DoorModel(this.number, this.haveGift, selected, this.open)
  }

  switchOpen() {
    const open = true
    return new DoorModel(this.number, this.haveGift, this.selected, open)
  }
}