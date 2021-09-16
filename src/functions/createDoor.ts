import DoorModel from "../model/door";

export function createDoor(amount: number, withGift: number): DoorModel[] {
  return Array.from({ length: amount }, (_, i) => {
    const number = i + 1
    const haveGift = number === withGift
    return new DoorModel(number, haveGift)
  })
}

export function updateDoor(door: DoorModel[], modified: DoorModel): DoorModel[] {
  return door.map(currentDoor => {
    const equalToModified = currentDoor.number === modified.number

    if (equalToModified) {
      return modified
    } else {
      return modified.open ? currentDoor : currentDoor.deselect()
    }
  })
}