import {render, screen} from '@testing-library/react';
import  Pagination  from '../components/pagination/pagination';

describe('tests for pagination component', () =>{
test('pagination its showned', ()=> {
    render(<Pagination />);
    const paginationElement = screen.getByTestId('table-pagination');
    expect(paginationElement).toBeDefined();
});

test("pagination number is showned corect", () =>{
    render(<Pagination currentPageNo={3}/>);
    const pageNumber=screen.getByText("3");
    expect(pageNumber).toBeDefined();
});

test("pagination test next page functionality", () =>{
    const currentPageNr = 3;
    const nextPageFn= jest.fn()
    render(<Pagination currentPageNr={currentPageNr} handleNext={nextPageFn}></Pagination>);
    const nextPageButton =screen.getByTestId("next-page-button");
    nextPageButton.click();
    expect(nextPageFn).toBeCalled();
})

test("pagination test previous page functionality", () =>{
    
    const prevPageFn= jest.fn()
    render(<Pagination  handlePrev={prevPageFn}></Pagination>);
    const prevPageButton =screen.getByTestId("prev-page-button");
    prevPageButton.click();
    expect(prevPageFn).toBeCalled();
})
})