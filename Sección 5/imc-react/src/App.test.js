import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
    render(<App />);
})

test("render title", () => {
    const title = screen.getByText(/bmi calculator/i);
    expect(title).toBeDefined();
});

test("calculate thinesss result", () => {
    // Si no encuentra el elemento la prueba falla.
    const weightElement = screen.getByLabelText(/weight/i);
    const heightElement = screen.getByLabelText(/height/i);
    const sendBtnElement = screen.getByRole("button", { name: /send/i });
    
    /*fireEvent.change(weightElement, {
        target: { value: "1.7" }
    });
    fireEvent.change(heightElement, {
        target: { value: "50" }
    });*/

    weightElement.textContent = "111.7";
    heightElement.textContent = "5";

    fireEvent.click(sendBtnElement);

    const bmiResult = screen.queryByText(/bmi: 0.001/i);
    const bmiEstimation = screen.queryByText(/bmi estimation: thiness/i);
    //screen.debug(); // Para debugear.
    // En los videos usa toBeInTheDocument
    expect(bmiResult).toBeDefined();
    expect(bmiEstimation).toBeDefined();
});

test("calculate normal result", () => {
    // Si no encuentra el elemento la prueba falla.
    const weightElement = screen.getByLabelText(/weight/i);
    const heightElement = screen.getByLabelText(/height/i);
    const sendBtnElement = screen.getByRole("button", { name: /send/i });
    
    weightElement.vale = "80";
    heightElement.value = "1.8";

    fireEvent.click(sendBtnElement);

    const bmiResult = screen.queryByText(/bmi: 0.001/i);
    const bmiEstimation = screen.queryByText(/bmi estimation: normal/i);

    expect(bmiResult).toBeDefined();
    expect(bmiEstimation).toBeDefined();
});

test("calculate overweight result", () => {
    // Si no encuentra el elemento la prueba falla.
    const weightElement = screen.getByLabelText(/weight/i);
    const heightElement = screen.getByLabelText(/height/i);
    const sendBtnElement = screen.getByRole("button", { name: /send/i });
    
    weightElement.vale = "90";
    heightElement.value = "1.8";

    fireEvent.click(sendBtnElement);

    const bmiResult = screen.queryByText(/bmi: 27.778/i);
    const bmiEstimation = screen.queryByText(/bmi estimation: overweight/i);

    // screen.debug();

    expect(bmiResult).toBeDefined();
    expect(bmiEstimation).toBeDefined();
});

test("calculate obese result", () => {
    // Si no encuentra el elemento la prueba falla.
    const weightElement = screen.getByLabelText(/weight/i);
    const heightElement = screen.getByLabelText(/height/i);
    const sendBtnElement = screen.getByRole("button", { name: /send/i });
    
    weightElement.vale = "100";
    heightElement.value = "1.8";

    fireEvent.click(sendBtnElement);

    const bmiResult = screen.queryByText(/bmi: 30.864/i);
    const bmiEstimation = screen.queryByText(/bmi estimation: overweight/i);

    expect(bmiResult).toBeDefined();
    expect(bmiEstimation).toBeDefined();
});