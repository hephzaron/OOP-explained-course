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

class AnatomyCours extends Course {

    constructor(courseUnit) {
        this.courseUnit = courseUnit;
    }
    register() {
        super.register();
        return (this.courseTitle + ',' + this.courseUnit);
    }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.


}