/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, screen } from "@testing-library/react";
//import App from "./App";
import HelloWorld from "./components/HelloWorld";

test('renders the "Hello World" message', () => {
  render(<HelloWorld />);
  const helloWorldText = screen.getByText("Hello, World!");
  expect(helloWorldText).toBeInTheDocument();
});
