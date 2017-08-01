/*when objects that have similar functionalities needs to access a pproperty without 
neccessarily modifyng the content. the main functionalities/properties are best dclared 
in a function  and can be accessed by any class, this way the functionalities remain intact*/

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
        return ('You registered' + this.courseTitle + ',' + this.courseCode + '@' + this.level);
    }

}


var sunday = new Student(" anatomy", "chg101", "7");
var mary = new Student(" physiology", " phl507 ", "3")

sunday.register();
mary.register();