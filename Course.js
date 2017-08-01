class Course {
    // This code explains Object oriented programming concepts using real life example
    // The example choosen is the real life situation of the course been offered in universities by students
    constructor(courseTitle, courseCode, level) {
        this.courseTitle = courseTitle;
        this.courseCode = courseCode;
        this.level = level;
    }

    // create methods wthin class course
    register() {
        return ('You registered' + this.courseTitle + ',' + this.courseCode + '@' + this.level)
    }
    remove() {
        return ('You have removed' + this.courseTitle + ',' + this.courseCode + '@' + this.level)

    }
}

// For a medicine student studying anatomy, the lecture decides to add the points to ther course
// using the pproperties and method from the parent class
class AnatomyCourse extends Course {

    register() {
        return (this.courseTitle + ' is ' + '7 points');
    }

}
// create an instance of AnatomyCourse
var sunday = new AnatomyCourse('anatomy');
sunday.register();