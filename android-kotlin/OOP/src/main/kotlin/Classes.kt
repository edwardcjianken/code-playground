class User( var firstName: String, var lastName: String, var age: Int ) {

    constructor(firstName: String): this(firstName, "Unknown", 0) {
        println("First secondary constructor used.")
    }

    constructor(firstName: String, lastName: String): this(firstName, lastName, age=0) {
        println("Second secondary constructor used.")
    }

}

class Member(var firstName: String = "Default First Name", var lastName: String = "Default Last Name", var age: Int = 0) {

}

class Calculator() {
    fun sum(a: Int, b: Int) : Int {
        return a + b
    }
}

class Kalculator() {
    companion object {
        fun add(a: Int, b: Int): Int {
            return a + b
        }
    }
}