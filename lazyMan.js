class lazyMan {
  constructor(name) {
    this.tasks = []
    const first = () => {
      console.log(`my name is ${name}`)
      this.next()
    }
    this.tasks.push(first)
    setTimeout(() => {
      this.next()
    }, 0)
  }

  next() {
    const task = this.tasks.shift()
    task && task()
  }

  eat(food) {
    const eat = () => {
      console.log(`eat ${food}`)
      this.next()
    }
    this.tasks.push(eat)
    return this
  }

  sleep(time) {
    const newTime = time * 1000
    const sleep = () => {
      console.log(`sleep ${time}s!`)
      setTimeout(() => {
        this.next()
      }, newTime)
    }
    this.tasks.push(sleep)
    return this
  }

  sleepFirst(time) {
    const newTime = time * 1000
    const sleepFisrt = () => {
      console.log(`slepp ${time}s first!`)
      setTimeout(() => {
        this.next()
      }, newTime)
    }
    this.tasks.unshift(sleepFisrt)
    return this
  }
}

const liyuandie = new lazyMan('李袁堞')
liyuandie
  .eat('苹果')
  .eat('香蕉')
  .sleep(5)
  .eat('葡糖')
  .eat('橘子')
  .sleepFirst(2)
