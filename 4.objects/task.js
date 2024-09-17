function Student(name, gender, age) {
  this.name = name
  this.gender = gender
  this.age = age
  this.marks = [];
  }
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}
Student.prototype.addMarks = function (...marksToAdd) {
  
  if (this.hasOwnProperty('marks'))  
  for (const mark of marksToAdd) {
    this.marks.push(mark)
  }
}
Student.prototype.getAverage = function () {
  if (this.hasOwnProperty("marks")) {
    if (this.marks.length === 0) {
      return 0
    } else {
      return this.marks.reduce((a, b) => a + b) / this.marks.length
    }
  }
  return 0
}


Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject
  this.excluded = reason
}
