import mygrailsproject.Book

class BootStrap {

    def init = { servletContext ->
		new Book(title:"Beginning Javascript with DOM",author:"author aa",age:2).save()
		new Book(title:"Hight Performance Javascript",author:"author bb",age:1).save()
		new Book(title:"Thinking in Java",author:"author cc",age:11).save()
		new Book(title:"Pro Javascript Design Patterns",author:"author dd",age:8).save()
		new Book(title:"Pro Html5",author:"author ee",age:3).save()
    }
    def destroy = {
    }
}
