import gsap from 'gsap';

export default class Animation {
  constructor() {
    this._planets = document.querySelectorAll('.dots');
    this._scaleBtn = document.querySelector('#scale-button');
    this._positionBtn = document.querySelector('#position-button');
    this._stopBtn = document.querySelector('#stop-button');
    this._tl = gsap.timeline();
  }

  onScaleClick() {
    this.reset();

    this._tl.to(this._planets, {
      scale: 0,
      duration: 1,
      stagger: {
        repeat: -1,
        amount: 1,
        yoyo: true,
      },
      id: 'scaleStagger',
    });
  }

  onPositionClick() {
    this.reset();

    this._tl.to(this._planets, {
      y: 50,
      duration: 1,
      stagger: {
        repeat: -1,
        amount: 0.2,
        yoyo: true,
        from: 'edges',
      },
      id: 'positionStagger',
    });
  }

  reset() {
    this._tl.seek(0);
    this._tl.clear();
  }

  onStopClick() {
    this.reset();
  }

  start() {
    this._scaleBtn.addEventListener('click', () => this.onScaleClick());
    this._positionBtn.addEventListener('click', () => this.onPositionClick());
    this._stopBtn.addEventListener('click', () => this.onStopClick());
  }
}
