package mygrailsproject

import grails.converters.JSON

class BookStoreController {

    def index() { 
		list()
	}
	
	def list() {
		render Book.list() as JSON
	}
}
