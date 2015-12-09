import mygrailsproject.Book

class BootStrap {

    def init = { servletContext ->
		new Book(title:"book aa",author:"author aa",age:2).save()
		new Book(title:"book bb",author:"author bb",age:1).save()
		new Book(title:"book cc",author:"author cc",age:11).save()
		new Book(title:"book dd",author:"author dd",age:8).save()
		new Book(title:"book ee",author:"author ee",age:3).save()
    }
    def destroy = {
    }
}
