class PrintEditionItem {
    constructor(o, t, s) {
        (this.name = o),
        (this.releaseDate = t),
        (this.pagesCount = s),
        (this.state = 100),
        (this.type = null)
    }
    fix() {
      this.state *= 1.5
    }
    set state(o) {
      this._state = o < 0 ? 0 : 100 < o ? 100 : o
    }
    get state() {
      return this._state
    }
  }
  class Magazine extends PrintEditionItem {
    constructor(o, t, s) {
      super(o, t, s), (this.type = "magazine")
    }
  }
  class Book extends PrintEditionItem {
    constructor(o, t, s, e) {
      super(t, s, e), (this.author = o), (this.type = "book")
    }
  }
  class DetectiveBook extends Book {
    constructor(o, t, s, e) {
      super(o, t, s, e), (this.type = "detective")
    }
  }
  class FantasticBook extends Book {
    constructor(o, t, s, e) {
      super(o, t, s, e), (this.type = "fantastic")
    }
  }
  class NovelBook extends Book {
    constructor(o, t, s, e) {
      super(o, t, s, e), (this.type = "novel")
    }
  }
  class Library {
    constructor(o) {
      ;(this.name = o), (this.books = [])
    }
    addBook(o) {
      30 < o.state && this.books.push(o)
    }
    findBookBy(t, s) {
      var o = this.books.find((o) => o[t] === s)
      return void 0 !== o ? o : null
    }
    giveBookByName(t) {
      var o = this.books.findIndex((o) => o.name === t)
      if (-1 === o) return null
      var s = this.books[o]
      return this.books.splice(o, 1), s
    }
  }
  const library = new Library("Библиотека имени Ленина")
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  ),
    library.addBook(
      new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
      )
    ),
    library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138)),
    library.addBook(new Magazine("Мурзилка", 1924, 60)),
    console.log(library.findBookBy("name", "Властелин колец")),
    console.log(library.findBookBy("releaseDate", 1924)),
    console.log("Количество книг до выдачи: " + library.books.length)
  const issuedBook = library.giveBookByName("Машина времени")
  console.log("Количество книг после выдачи: " + library.books.length),
    (issuedBook.state = 20),
    library.addBook(issuedBook),
    console.log("Количество книг после возвращения: " + library.books.length)
  