/// <reference types="cypress" />
import {MainPage} from '../page-objects/main'
import {ExamplesPage} from '../page-objects/examples'
import {Example1Page} from '../page-objects/example1'

describe('shifting content', () => { 
    
    const mainPage = new MainPage()
    const examplesPage = new ExamplesPage()
    const example1Page = new Example1Page()

    beforeEach(() => {
        mainPage.navigate()
        mainPage.clickShifting()
    })

    it('A page contains 5 elements', ()=>{
        examplesPage.clickExample1()
        example1Page.checkElements('5')
    })
})
