/*In this polymorphic student scenario there is a base/super class of Student and
 a subclass of Working student, all workingStudent are student and not all sttudent are working . This enables a working student to specify the number of hours he could allocate to each course per week one of a property of a working student but might not be neccessary for a student*/

// create super class
function Student(courseTitle, courseCode, level) {

    this.courseTitle = courseTitle;
    this.courseCode = courseCode;
    this.level = level;
}

Student.prototype = {
    constructor: Student,
    register: function(title, code, grade) {
        return ('You registered' + this.courseTitle + ',' + this.courseCode + '@' + this.level);
    },
    remove: function(title, code, grade) {
        return ('You removed' + this.courseTitle + ',' + this.courseCode + '@' + this.level);
    }

}

// creating a subclass of Student

function WorkingStudent(courseTitle, courseCode, level, duration) {

    this.courseTitle = courseTitle;
    this.courseCode = courseCode;
    this.level = level;
    this.duration = duration;
}
WorkingStudent.prototype = new Student();

/*override the behaviour of register by defining "duration-which is unique to a working student"*/
WorkingStudent.prototype.register = function() {
    return ("you registered " + this.courseTitle + ", " + this.courseCode + " @ " + this.level + " for " + this.duration + "hours per week")
};

var workingStudent = new WorkingStudent(" physiology", " phl507 ", 5, 2)
workingStudent.register();
// method remove can be called from super class available to class workingstudent
workingStudent.remove()