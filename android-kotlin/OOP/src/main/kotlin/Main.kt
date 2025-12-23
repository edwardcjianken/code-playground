//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {
    var user1 = User("Edward", "Chia", 30)

    println("User1 Details")
    println("First Name = ${user1.firstName}")
    println("Last Name = ${user1.lastName}")
    println("Age = ${user1.age}")
    println("")

//  Using secondary constructors

    var user2 = User("Edward")

    println("User2 Details")
    println("First Name = ${user2.firstName}")
    println("Last Name = ${user2.lastName}")
    println("Age = ${user2.age}")
    println("")


    var user3 = User("Edward", "Chia")

    println("User3 Details")
    println("First Name = ${user3.firstName}")
    println("Last Name = ${user3.lastName}")
    println("Age = ${user3.age}")
    println("")

//    Using default values of properties

    var member4 = Member("Edward")

    println("User4 Details")
    println("First Name = ${member4.firstName}")
    println("Last Name = ${member4.lastName}")
    println("Age = ${member4.age}")
    println("")

//    Creating a calculator object (the sum function is tied to the object that is created - calculator)

    val calculator = Calculator()
    val result1 = calculator.sum(5, 10)

    println("The sum is $result1")

//    Use Companion Object so that don't need to create an object everytime. The sum function is tied to the class.

    val result2 = Kalculator.add(6, 10)

    println("a + b = ${result2}")
}

