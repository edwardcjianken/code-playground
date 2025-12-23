//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {

//    for (i in 1..10) {
//        println(i)
//    }
//
//    for (i in 1 until 10) {
//        println(i)
//    }
//
//    for (i in 10 downTo 1) {
//        println(i)
//    }
//
//    for (i in 1 until 10 step 2) {
//        println(i)
//    }

    var number = 0

//    number = 0
//
//    while (number < 20) {
//        println(number)
//        number++
//    }
//
//    number = 10
//
//    do {
//        println(number)
//    } while (number < 10 )


//    Using continue
//    number = 0
//
//    while (number < 10) {
//        number ++
//
//        if (number == 7) {
//            continue
//        }
//
//        println(number)
//    }

//    Using break
//    number = 0
//
//    while (number < 10) {
//        number++
//
//        if (number == 7) {
//            break
//        }
//
//        println(number)
//    }

//    Target to break and outer loop
    number = 0

    outer@ while (number < 5 ) {
        number++
        println(number)

        var i = 0

        while (i < 5) {
            if (i == 0) {
                break@outer
            }
            i++
            println("***$i")
        }


    }

}