//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {

//    val names = arrayOf("John", "Stephen", "Megan")
//    println("First element is ${names[0]}")
//
//    names[0] = "Edward"
//    println("First element has been changed to ${names[0]}")
//    println("The size of the array is ${names.size}")
//
//    for (name in names) {
//        println(name)
//    }
//
//    //
//
//    val mixedElements = arrayOf(1, 2, 3, 4, 5, "six", "seven", 8, 9, "zero")
//
//    for (i in mixedElements) {
//        if (i is Int) {
//            println(i)
//        }
//    }

//    val max = findMax(arrayOf(3,5,78,2,23,66,8,3))
//    val min = findMin(arrayOf(3,5,78,2,23,66,8,3))
//    println("Max value: $max")
//    println("Min value: $min")

    val max = findMinAndMax(arrayOf(3,5,78,2,23,66,8,3), true)
    val min = findMinAndMax(arrayOf(3,5,78,2,23,66,8,3), false)

    println("Max value: $max")
    println("Min value: $min")

}


fun findMax(numbers: Array<Int>): Int {
    var max = numbers[0]

    for (number in numbers) {
        if (number > max) {
            max = number
        }

    }
    return max
}

fun findMin(numbers: Array<Int> ): Int {
    var min = numbers[0]

    for (number in numbers) {
        if (number < min) {
            min = number
        }

    }
    return min
}

fun findMinAndMax(numbers: Array<Int>, searchMax: Boolean): Int {
    var max = numbers[0]
    var min = numbers[0]

    if (searchMax) {
        for (number in numbers) {
            if (number > max) {
                max = number
            }
        }
        return max
    } else {
        for (number in numbers) {
            if (number < min) {
                min = number
            }
        }
        return min
    }
}