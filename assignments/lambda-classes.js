// CODE here for your Lambda Classes
class Person  {
    constructor(obj){
        this.name = obj.name
        this.age = obj.age
        this.location = obj.location
    }
speak (){
    return `Hello my name is ${this.name}, I am from ${this.location}`}
}
class Instructor extends Person {
    constructor(obj){
        super(obj)
        this.specialty = obj.specialty
        this.favlanguage = obj.favlanguage 
        this.catchPhrase = obj.catchPhrase 
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(subject,student){
        return `${student.name} receives a perfect score on ${subject}`
    }
    test(student){
        return student.grade += Math.floor(Math.random() * 100) + 1  
    }
}
class Student extends Person {
    constructor(obj){
        super(obj)
        this.previousBackground = obj.previousBackground
        this.className = obj.className
        this.favSubjects = obj.favSubjects 
        this.grade = 0
    }
    listSubjects(){
 for ( let i = 0; i < this.favSubjects.length; i++)
    {console.log(this.favSubjects[i])}
       
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    graduate(){
        return this.grade >= 70 
    }
}
class ProjectManager extends Instructor {
    constructor(obj){
        super(obj)
        this.gradClassName = obj.gradClassName
        this.favInstructor = obj.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }

}
const marley = new Person({
    name: 'Marley',
    location: 'Boston',
    age: 30,
  });
  const ashley = new Instructor({
    name: 'Marley',
    location: 'Maryland',
    age: 20, 
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Yo`
  })
  
  const oldGuy = new Student({
    name: 'Mike',
    location: 'Somewhere',
    age: 200,
    previousBackground:"Art",
    className:"Web22",
    favSubjects:["Javascript","Java","Python"]
  });
  const meme = new ProjectManager({
      name:"Lebron James",
      location:"Chocalate Factory",
      age:21,
      favLanguage:"money",
      specialty:"riding",
      catchPhrase:"Yaba dabba Doo",
      gradClassName:"web20",
      favInstructor:"Ashley"
  })
  const massey = new Person({
    name: 'massey',
    location: 'Baltimore',
    age: -19,
  });
  const crystal = new Instructor({
    name: 'Crystal',
    location: 'Philadelphia',
    age: 38, 
    favLanguage: 'HTML',
    specialty: 'Web-design',
    catchPhrase: `Hi`
  })
  
  const joe = new Student({
    name: 'Joey',
    location: 'Nowhere',
    age: 2,
    previousBackground:"biology",
    className:"Web100",
    favSubjects:["Lunch","Dinner","Sleep"]
  });
  const me = new ProjectManager({
      name:"Lebron James",
      location:"Chocalate Factory",
      age:21,
      favLanguage:"money",
      specialty:"riding",
      catchPhrase:"Yaba dabba Doo",
      gradClassName:"web20",
      favInstructor:"Ashley"
  })



const fred = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const jake = new Student({
    name: 'Jake',
    location: 'Bedrock',
    age: 37,
  })
 oldGuy.listSubjects()
  fred.test(jake)

  console.log(jake.grade)
  console.log(jake.graduate())

