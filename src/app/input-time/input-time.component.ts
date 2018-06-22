import { Component } from '@angular/core'

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent {
  private newValue: string

  update(e): void {
    const prevValue = e.target.value
    const pos = e.target.selectionStart
    const regExpTime = RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
    let newValue = prevValue.substring(0, pos) + e.key + prevValue.substring(pos + 1)
    setTimeout(() => {
      if (e.keyCode === 37) return this.selectPreviousChar(e)
      if (e.keyCode === 39) return this.selectNextChar(e)
      if (!regExpTime.test(newValue)) {
        e.target.value = prevValue
        return this.selectCurrentChar(e, pos)
      } else {
        e.target.value = newValue
        this.selectNextChar(e)
      }
    }, 0)
  }

  private selectNextChar(e): void {
    let newPos: number
    const pos = e.target.selectionStart
    if (pos === 2) newPos = 3
    else if (pos === 5) newPos = 4
    else newPos = pos
    e.target.selectionStart = newPos
    e.target.selectionEnd = newPos + 1
  }

  private selectPreviousChar(e): void {
    let newPos: number
    const pos = e.target.selectionStart
    if (pos === 0) newPos = 0
    else if (pos === 3) newPos = 1
    else newPos = pos - 1
    e.target.selectionStart = newPos
    e.target.selectionEnd = newPos + 1
  }

  private selectCurrentChar(e, pos): void {
    e.target.selectionStart = pos
    e.target.selectionEnd = pos + 1
  }
}
