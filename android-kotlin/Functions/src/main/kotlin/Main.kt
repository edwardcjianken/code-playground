import javax.xml.namespace.QName

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {
    sayHello("Edward", 28)

    val hasInternatConnection = true
    if (hasInternatConnection) {
        getData("ABC")
    } else {
        showMessage()
    }

//  Using default parameters
    sendMessage()

//  Using variable arguments
    sum(1,2,3,4,2,3)
}

fun sayHello(name: String, age: Int) {
    println("Hello, $name! Your age is $age.")
}

fun getData(data: String) {
    println("Your data is $data.")
}

fun showMessage() {
    println("No data found.")
}

//  Using default parameters
fun sendMessage(name: String = "User", msg: String = "") {
    println("Name = $name, Message = $msg")
}

// Using variable arguments
fun sum(vararg numbers: Int) :Int {
    var result = 0
    for (number in numbers) {
        result += number
    }
    println(result)
    return result
}