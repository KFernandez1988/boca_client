import { render, screen, cleanup } from "@testing-library/react"
import Home from "../components/pages/Home"

it("Data is Submitted", () => {
   render(<Home />)
const from  = screen.getByText('form');
   expect(from).toBeInTheDocument();
   
const inputTitle = screen.findAllByPlaceholderText("Post Title");
const textAreaBlog = screen.findAllByPlaceholderText('Enter Blog Body');

expect(inputTitle).toBeInTheDocument();
expect(textAreaBlog).toBeInTheDocument();

}) 